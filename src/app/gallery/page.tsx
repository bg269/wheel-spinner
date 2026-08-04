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

    </div>
  );
}
