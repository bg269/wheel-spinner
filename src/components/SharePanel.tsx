'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { WheelItem } from '@/lib/types';
import { buildShareUrl } from '@/lib/share';
import { track } from '@vercel/analytics';

interface SharePanelProps {
  wheelId: string;
  items: WheelItem[];
}

type SaveState = 'idle' | 'saving' | 'done';

export default function SharePanel({ wheelId, items }: SharePanelProps) {
  const [saveState, setSaveState] = useState<SaveState>('idle');
  // Slug returned from the DB save — used to derive the display URL.
  // The actual shared/copied URL always includes ?data= so it's self-contained
  // even if the DB row is later unavailable (Supabase free tier auto-pauses).
  const [cleanSlug, setCleanSlug] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Fallback URL (?data= format) — always works even if the API is down
  const fallbackUrl = buildShareUrl(wheelId, items);
  // Display only: strip ?data= once we have a DB slug so the box looks clean
  const activeUrl = cleanSlug
    ? `${typeof window !== 'undefined' ? window.location.origin : 'https://spinthechoice.com'}/wheels/${cleanSlug}`
    : fallbackUrl;

  // Reset whenever wheel content changes so stale slugs aren't shared
  const itemsSig = items.map((i) => `${i.name}\0${i.color}`).join('|');
  const itemsSigRef = useRef(itemsSig);
  useEffect(() => {
    if (itemsSigRef.current !== itemsSig) {
      itemsSigRef.current = itemsSig;
      setCleanSlug(null);
      setSaveState('idle');
      setCopied(false);
    }
  }, [itemsSig]);

  // Deduplicate concurrent save attempts (e.g. Copy + X clicked in quick
  // succession before the first response arrives).
  const pendingRef = useRef<Promise<string> | null>(null);

  const getOrSaveUrl = useCallback(async (): Promise<string> => {
    // Already saved — return the full self-contained URL (slug + ?data= fallback)
    if (cleanSlug) return buildShareUrl(cleanSlug, items);
    if (pendingRef.current) return pendingRef.current;

    setSaveState('saving');

    const p = fetch('/api/wheels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entries: items.map((i) => ({ name: i.name, color: i.color })),
      }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('save failed');
        const { slug } = (await res.json()) as { slug: string };
        setCleanSlug(slug);
        setSaveState('done');
        pendingRef.current = null;
        // Always include ?data= so the URL works even if the DB row is gone later
        return buildShareUrl(slug, items);
      })
      .catch(() => {
        setSaveState('idle');
        pendingRef.current = null;
        return fallbackUrl;
      });

    pendingRef.current = p;
    return p;
  }, [cleanSlug, fallbackUrl, items]);

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for HTTP or older browsers
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyLink = async () => {
    track('share', { method: 'copy_link' });
    const url = await getOrSaveUrl();
    await copyToClipboard(url);
  };

  const shareTwitter = async () => {
    track('share', { method: 'twitter' });
    // Open the window synchronously (within the event handler) so popup
    // blockers don't intervene, then redirect once we have the clean URL.
    const tab = window.open('about:blank', '_blank', 'noopener,noreferrer');
    const url = await getOrSaveUrl();
    const text = encodeURIComponent('Check out my Spin The Choice wheel! 🎡');
    const link = encodeURIComponent(url);
    if (tab) tab.location.href = `https://twitter.com/intent/tweet?text=${text}&url=${link}`;
  };

  const shareFacebook = async () => {
    track('share', { method: 'facebook' });
    const tab = window.open('about:blank', '_blank', 'noopener,noreferrer');
    const url = await getOrSaveUrl();
    const link = encodeURIComponent(url);
    if (tab) tab.location.href = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
  };

  const displayUrl = activeUrl.replace(/^https?:\/\//, '');

  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Share this wheel
      </p>

      {/* URL row */}
      <div className="flex items-center gap-2">
        <div className="flex-1 min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-3 py-2 text-xs text-gray-500 dark:text-gray-400 truncate select-all">
          {saveState === 'saving' ? 'Saving…' : displayUrl}
        </div>
        <button
          onClick={copyLink}
          disabled={saveState === 'saving'}
          className={[
            'flex-none px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150',
            saveState === 'saving'
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-wait'
              : copied
              ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'
              : 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-900/50',
          ].join(' ')}
        >
          {saveState === 'saving' ? 'Saving…' : copied ? '✓ Copied!' : 'Copy Link'}
        </button>
      </div>

      {/* Social buttons */}
      <div className="flex gap-2">
        <button
          onClick={shareTwitter}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share on X
        </button>
        <button
          onClick={shareFacebook}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Share on Facebook
        </button>
      </div>
    </div>
  );
}
