'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import WheelCanvas, { type WheelCanvasHandle } from '@/components/WheelCanvas';
import ItemEditor from '@/components/ItemEditor';
import ResultModal from '@/components/ResultModal';
import ThemeToggle from '@/components/ThemeToggle';
import SharePanel from '@/components/SharePanel';
import type { WheelItem } from '@/lib/types';
import { scheduleSpinTicks, playCheer } from '@/lib/audio';
import { generateWheelId } from '@/lib/share';
import { track } from '@vercel/analytics';
import type { VariantConfig } from '@/lib/variants';

interface Props {
  config: VariantConfig;
  initialItems: WheelItem[];
  relatedConfigs: { slug: string; h1: string }[];
}

export default function VariantPageClient({ config, initialItems, relatedConfigs }: Props) {
  const [items, setItems] = useState(initialItems);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<WheelItem | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [wheelId, setWheelId] = useState('');
  const wheelRef = useRef<WheelCanvasHandle>(null);
  const cleanupTicksRef = useRef<(() => void) | null>(null);
  const itemsRef = useRef(items);
  useEffect(() => { itemsRef.current = items; }, [items]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    setWheelId(generateWheelId());
  }, []);

  const handleSpinStart = useCallback((durationMs: number) => {
    setIsSpinning(true);
    track('spin', { item_count: itemsRef.current.length, source: 'variant' });
    cleanupTicksRef.current?.();
    cleanupTicksRef.current = scheduleSpinTicks(durationMs, 0.7);
  }, []);

  const handleSpinEnd = useCallback((w: WheelItem) => {
    setIsSpinning(false);
    setWinner(w);
    cleanupTicksRef.current?.();
    cleanupTicksRef.current = null;
    playCheer(0.7);
  }, []);

  const handleSpinAgain = useCallback(() => {
    setWinner(null);
    setTimeout(() => wheelRef.current?.spin(), 80);
  }, []);

  const handleRemoveAndSpin = useCallback(() => {
    if (!winner) return;
    setItems((prev) => prev.filter((i) => i.id !== winner.id));
    setWinner(null);
    setTimeout(() => wheelRef.current?.spin(), 80);
  }, [winner]);

  const canSpin = items.length >= 2 && !isSpinning;

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="text-2xl leading-none" aria-hidden="true">🎡</span>
              <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg">
                Spin The Choice
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                Make your own →
              </Link>
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-14">

          {/* H1 + intro */}
          <section className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {config.h1}
            </h1>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              {config.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Interactive wheel */}
          <section aria-label="Wheel spinner">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row">

                {/* Editor column */}
                <div className="lg:w-[320px] lg:flex-none border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 p-5">
                  <ItemEditor items={items} onChange={setItems} />
                </div>

                {/* Wheel column */}
                <div className="w-full min-w-0 flex-1 flex flex-col items-center gap-6 p-6">
                  <div className="relative w-full flex justify-center">
                    {items[0] && (
                      <div
                        className="absolute inset-0 rounded-full blur-3xl opacity-15 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${items[0].color}, transparent 70%)`,
                        }}
                      />
                    )}
                    <WheelCanvas
                      ref={wheelRef}
                      items={items}
                      isSpinning={isSpinning}
                      onSpinStart={handleSpinStart}
                      onSpinEnd={handleSpinEnd}
                    />
                  </div>

                  <button
                    onClick={() => wheelRef.current?.spin()}
                    disabled={!canSpin}
                    className={[
                      'px-12 py-4 rounded-2xl text-white font-bold text-lg',
                      'transition-all duration-200',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
                      canSpin
                        ? 'bg-violet-600 hover:bg-violet-500 active:scale-95 shadow-lg shadow-violet-500/30 spin-idle-pulse cursor-pointer'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed shadow-none',
                    ].join(' ')}
                  >
                    {isSpinning ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Spinning…
                      </span>
                    ) : items.length < 2 ? (
                      'Add at least 2 items'
                    ) : (
                      'SPIN'
                    )}
                  </button>

                  {canSpin && (
                    <p className="text-xs text-gray-400 dark:text-gray-600 -mt-4 select-none">
                      <span className="sm:hidden">or tap the wheel</span>
                      <span className="hidden sm:inline">or click the wheel</span>
                    </p>
                  )}

                  {items.length >= 2 && wheelId && (
                    <div className="w-full border-t border-gray-200 dark:border-gray-800 pt-4">
                      <SharePanel wheelId={wheelId} items={items} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* How to use */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">How to use</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.howToUse.map((step, i) => (
                <li
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 flex gap-4"
                >
                  <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {config.faqs.map((faq, i) => (
                <div key={i} className="py-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* More wheels */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">More wheels</h2>
            <div className="flex flex-wrap gap-3">
              {relatedConfigs.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.slug}`}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {v.h1.split(' — ')[0]}
                </Link>
              ))}
              <Link
                href="/"
                className="px-4 py-2 rounded-xl bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-900 text-sm font-medium text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/60 transition-colors"
              >
                Build your own wheel →
              </Link>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-xs text-gray-400 dark:text-gray-700 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
          <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
          <span aria-hidden="true">·</span>
          <Link href="/gallery" className="hover:text-violet-500 transition-colors">Gallery</Link>
          <span aria-hidden="true">·</span>
          <Link href="/blog" className="hover:text-violet-500 transition-colors">Blog</Link>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/contact" className="hover:text-violet-500 transition-colors">Contact</Link>
        </footer>

      </div>

      {winner && (
        <ResultModal
          winner={winner}
          onClose={() => setWinner(null)}
          onSpinAgain={handleSpinAgain}
          onRemoveAndSpin={handleRemoveAndSpin}
        />
      )}
    </div>
  );
}
