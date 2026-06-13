import { cache } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { supabaseAdmin } from '@/lib/supabase';
import { decodeWheelData } from '@/lib/share';
import { nanoid } from '@/lib/utils';
import type { WheelItem } from '@/lib/types';
import WheelPageClient from './WheelPageClient';

const SITE = 'https://spinthechoice.com';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ data?: string }>;
}

// React.cache deduplicates the DB call across generateMetadata + page render
// within a single server request.
const getDbWheel = cache(async (slug: string) => {
  // TEMP LOGGING — remove after diagnosing production 404
  console.log('[getDbWheel] slug:', slug);
  console.log('[getDbWheel] SUPABASE_URL prefix:', process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 60));
  const { data, error } = await supabaseAdmin
    .from('wheels')
    .select('slug, title, entries')
    .eq('slug', slug)
    .single();
  if (error || !data) {
    console.error('[getDbWheel] miss — error:', JSON.stringify(error), '| data:', data);
    return null;
  }
  console.log('[getDbWheel] hit:', data.slug, '|', data.title);
  return data as {
    slug: string;
    title: string | null;
    entries: { name: string; color: string }[];
  };
});

async function resolveWheel(slug: string, dataParam?: string) {
  const dbWheel = await getDbWheel(slug);
  if (dbWheel) {
    const items: WheelItem[] = dbWheel.entries.map((e) => ({
      id: nanoid(),
      name: e.name,
      color: e.color,
    }));
    return { items, fromDb: true, title: dbWheel.title };
  }

  // Backward-compatible fallback: decode from ?data= query param
  if (dataParam) {
    const items = decodeWheelData(dataParam);
    if (items.length > 0) return { items, fromDb: false, title: null };
  }

  return null;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: dataParam } = await searchParams;
  const resolved = await resolveWheel(slug, dataParam);

  if (!resolved) return { title: { absolute: 'Wheel Not Found – Spin The Choice' } };

  const { items, fromDb, title } = resolved;
  const wheelTitle = title ?? 'Custom Wheel';
  const preview = items.slice(0, 3).map((i) => i.name).join(', ');
  const overflow = items.length > 3 ? ` and ${items.length - 3} more` : '';
  const description = `Spin this wheel to choose between ${preview}${overflow}. Free online wheel spinner — no login required.`;
  const canonicalUrl = fromDb ? `${SITE}/wheels/${slug}` : SITE;

  return {
    title: { absolute: `${wheelTitle} – Spin The Choice` },
    description,
    alternates: { canonical: canonicalUrl },
    // Only index DB-stored wheels; ?data= pages are canonical-pointed at home
    robots: fromDb
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: `${wheelTitle} | Spin The Choice`,
      description,
      url: canonicalUrl,
    },
  };
}

export default async function WheelSlugPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { data: dataParam } = await searchParams;
  // TEMP LOGGING — remove after diagnosing production 404
  console.log('[WheelSlugPage] hit — slug:', slug, '| dataParam present:', !!dataParam);
  const resolved = await resolveWheel(slug, dataParam);
  console.log('[WheelSlugPage] resolved:', resolved ? `fromDb=${resolved.fromDb} items=${resolved.items.length}` : 'null → notFound()');

  if (!resolved) return notFound();

  return (
    <WheelPageClient
      items={resolved.items}
      slug={resolved.fromDb ? slug : null}
      title={resolved.title}
    />
  );
}
