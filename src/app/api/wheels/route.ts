import { randomBytes } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// ── Slug generation ───────────────────────────────────────────────────────
// Equivalent to nanoid's customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 10)
const ALPHA = '0123456789abcdefghijklmnopqrstuvwxyz'; // 36 chars

function generateSlug(): string {
  return Array.from(randomBytes(10), (b) => ALPHA[b % 36]).join('');
}

// ── Rate limiting (in-memory, per-instance, best-effort) ─────────────────
// Works within a single warm Vercel function instance. Not shared across
// concurrent instances — sufficient for an anonymous tool; upgrade to
// Vercel KV / Upstash if stricter enforcement is needed.
const ipWindow = new Map<string, { count: number; reset: number }>();
const RL_MAX = 10;      // requests
const RL_TTL = 60_000;  // ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const e = ipWindow.get(ip);
  if (!e || e.reset < now) {
    ipWindow.set(ip, { count: 1, reset: now + RL_TTL });
    return false;
  }
  if (e.count >= RL_MAX) return true;
  e.count++;
  return false;
}

// ── Validation helpers ────────────────────────────────────────────────────
const HEX_RE = /^#[0-9a-fA-F]{6}$/;

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, '').trim();
}

type EntryRow = { name: string; color: string };

// ── Route handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Quick size guard via Content-Length header (authoritative check below)
  const clHeader = req.headers.get('content-length');
  if (clHeader && Number(clHeader) > 50_000) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  // 2. Rate limit by IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // 3. Read and size-check body
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ error: 'Failed to read body' }, { status: 400 });
  }
  if (raw.length > 50_000) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  // 4. Parse JSON
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: 'Body must be a JSON object' }, { status: 400 });
  }

  const { entries, title } = body as Record<string, unknown>;

  // 5. Validate entries array
  if (!Array.isArray(entries)) {
    return NextResponse.json({ error: 'entries must be an array' }, { status: 400 });
  }
  if (entries.length < 2 || entries.length > 100) {
    return NextResponse.json(
      { error: 'entries must contain 2–100 items' },
      { status: 400 },
    );
  }

  const cleaned: EntryRow[] = [];
  for (let i = 0; i < entries.length; i++) {
    const item = entries[i];
    if (typeof item !== 'object' || item === null) {
      return NextResponse.json(
        { error: `entries[${i}] must be an object` },
        { status: 400 },
      );
    }
    const { name, color } = item as Record<string, unknown>;
    if (typeof name !== 'string' || typeof color !== 'string') {
      return NextResponse.json(
        { error: `entries[${i}] must have string name and color` },
        { status: 400 },
      );
    }
    const cleanName = stripHtml(name).slice(0, 80);
    if (!cleanName) {
      return NextResponse.json(
        { error: `entries[${i}] name is empty after sanitisation` },
        { status: 400 },
      );
    }
    if (!HEX_RE.test(color)) {
      return NextResponse.json(
        { error: `entries[${i}] color must be a 6-digit hex string (e.g. #FF6B6B)` },
        { status: 400 },
      );
    }
    cleaned.push({ name: cleanName, color });
  }

  // 6. Validate optional title
  let cleanTitle: string | null = null;
  if (title !== undefined && title !== null) {
    if (typeof title !== 'string') {
      return NextResponse.json({ error: 'title must be a string' }, { status: 400 });
    }
    cleanTitle = stripHtml(title).slice(0, 100) || null;
  }

  // 7. Insert with retry on slug collision (extremely unlikely at this scale)
  let slug = '';
  for (let attempt = 0; attempt < 5; attempt++) {
    slug = generateSlug();
    const { error } = await supabaseAdmin
      .from('wheels')
      .insert({ slug, title: cleanTitle, entries: cleaned });

    if (!error) break;

    if (error.code === '23505') continue; // unique_violation — try a new slug

    console.error('[POST /api/wheels] Supabase error:', error);
    return NextResponse.json({ error: 'Failed to save wheel' }, { status: 500 });
  }

  if (!slug) {
    return NextResponse.json({ error: 'Failed to generate unique slug' }, { status: 500 });
  }

  return NextResponse.json({ slug }, { status: 201 });
}
