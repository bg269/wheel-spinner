'use client';

import { use, useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import WheelCanvas, { type WheelCanvasHandle } from '@/components/WheelCanvas';
import ResultModal from '@/components/ResultModal';
import ThemeToggle from '@/components/ThemeToggle';
import type { WheelItem } from '@/lib/types';
import { decodeWheelData } from '@/lib/share';
import { scheduleSpinTicks, playCheer } from '@/lib/audio';
import { track } from '@vercel/analytics';

export default function SharedWheelPage({
  searchParams,
}: {
  searchParams: Promise<{ data?: string }>;
}) {
  const { data } = use(searchParams);
  const items = data ? decodeWheelData(data) : [];

  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<WheelItem | null>(null);
  const [isDark, setIsDark] = useState(false);
  const wheelRef = useRef<WheelCanvasHandle>(null);
  const cleanupTicksRef = useRef<(() => void) | null>(null);

  const handleSpinStart = useCallback((durationMs: number) => {
    setIsSpinning(true);
    track('spin', { item_count: items.length, source: 'shared' });
    cleanupTicksRef.current?.();
    cleanupTicksRef.current = scheduleSpinTicks(durationMs, 0.7);
  }, [items.length]);

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

  const canSpin = items.length >= 2 && !isSpinning;

  if (items.length === 0) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-gray-950 ${isDark ? 'dark' : ''}`}>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Wheel not found or link is invalid.</p>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors"
        >
          Create your own wheel →
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl leading-none">🎡</span>
              <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg">
                Spin The Choice
              </span>
              <span className="hidden sm:inline text-xs text-gray-400 dark:text-gray-600 ml-1">
                — shared wheel
              </span>
            </div>
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

        {/* Wheel */}
        <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 flex flex-col items-center gap-8">
          <div className="relative w-full flex justify-center">
            {items[0] && (
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${items[0].color}, transparent 70%)` }}
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
              'px-12 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
              canSpin
                ? 'bg-violet-600 hover:bg-violet-500 active:scale-95 shadow-lg shadow-violet-500/30 spin-idle-pulse cursor-pointer'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed',
            ].join(' ')}
          >
            {isSpinning ? 'Spinning…' : 'SPIN'}
          </button>

          {canSpin && (
            <p className="text-xs text-gray-400 dark:text-gray-600 -mt-4 select-none">
              <span className="sm:hidden">or tap the wheel</span>
              <span className="hidden sm:inline">or click the wheel</span>
            </p>
          )}

          {/* Entry list — read-only */}
          <div className="w-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Entries <span className="text-gray-400 dark:text-gray-600 font-normal ml-1">{items.length}</span>
            </p>
            <div className="flex flex-col gap-1.5">
              {items.map((item, i) => (
                <div key={item.id} className="flex items-center gap-3 px-2 py-1.5">
                  <span
                    className="flex-none w-3.5 h-3.5 rounded-full shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-400 dark:text-gray-600 tabular-nums w-5">{i + 1}.</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="text-center py-4 text-xs text-gray-400 dark:text-gray-700">
          <Link href="/" className="hover:text-violet-500 transition-colors">
            Create your own wheel at Spin The Choice
          </Link>
        </footer>
      </div>

      {winner && (
        <ResultModal
          winner={winner}
          onClose={() => setWinner(null)}
          onSpinAgain={handleSpinAgain}
          onRemoveAndSpin={() => {
            // Read-only — removing is disabled; just spin again
            setWinner(null);
            setTimeout(() => wheelRef.current?.spin(), 80);
          }}
        />
      )}
    </div>
  );
}
