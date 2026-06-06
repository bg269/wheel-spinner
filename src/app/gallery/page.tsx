'use client';

import { useState } from 'react';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { GALLERY_WHEELS, getTrending, getNewest } from '@/data/gallery';

type Sort = 'trending' | 'newest';

export default function GalleryPage() {
  const [sort, setSort] = useState<Sort>('trending');

  const wheels = sort === 'trending' ? getTrending(GALLERY_WHEELS.length) : getNewest();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="text-2xl leading-none">🎡</span>
              <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Spin The Choice
              </span>
            </Link>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
          >
            ← Create a wheel
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">

        {/* Page title + sort */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Wheel Gallery
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Browse {GALLERY_WHEELS.length} community wheels — click any to spin it
            </p>
          </div>

          {/* Sort toggle */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 self-start sm:self-auto">
            {(['trending', 'newest'] as Sort[]).map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={[
                  'px-4 py-1.5 rounded-lg text-sm font-medium transition-all',
                  sort === s
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
                ].join(' ')}
              >
                {s === 'trending' ? '🔥 Trending' : '✨ Newest'}
              </button>
            ))}
          </div>
        </div>

        <GalleryGrid wheels={wheels} />
      </main>

      <footer className="text-center py-6 text-xs text-gray-400 dark:text-gray-700 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Link href="/" className="hover:text-violet-500 transition-colors">Create your own wheel</Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  );
}
