'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import WheelCanvas, { type WheelCanvasHandle } from '@/components/WheelCanvas';
import ItemEditor from '@/components/ItemEditor';
import ResultModal from '@/components/ResultModal';
import ThemeToggle from '@/components/ThemeToggle';
import SoundSettings from '@/components/SoundSettings';
import SharePanel from '@/components/SharePanel';
import type { WheelItem } from '@/lib/types';
import { type SoundMode, scheduleSpinTicks, playCheer } from '@/lib/audio';
import { generateWheelId } from '@/lib/share';
import { getDefaultColor } from '@/lib/colors';
import { nanoid } from '@/lib/utils';
import GalleryGrid from '@/components/GalleryGrid';
import AdSpace from '@/components/AdSpace';
import HowToUse from '@/components/HowToUse';
import { getTrending } from '@/data/gallery';
import Link from 'next/link';
import { track } from '@vercel/analytics';

const trendingWheels = getTrending(6);

const DEFAULT_ITEMS: WheelItem[] = [
  'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona',
].map((name, i) => ({ id: nanoid(), name, color: getDefaultColor(i) }));

export default function Home() {
  const [items, setItems] = useState<WheelItem[]>(DEFAULT_ITEMS);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<WheelItem | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [soundMode, setSoundMode] = useState<SoundMode>('both');
  // Stable ID for this wheel session — becomes the DB key when a backend is added
  const [wheelId] = useState(() => generateWheelId());
  const [volume, setVolume] = useState(0.7);
  const wheelRef = useRef<WheelCanvasHandle>(null);
  const cleanupTicksRef = useRef<(() => void) | null>(null);
  // Keep a ref to items so analytics callbacks always see the current count
  const itemsRef = useRef(items);
  useEffect(() => { itemsRef.current = items; }, [items]);

  // Initialise dark mode from system preference on mount
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
  }, []);

  const handleSpinStart = useCallback((durationMs: number) => {
    setIsSpinning(true);
    track('spin', { item_count: itemsRef.current.length });
    if (soundMode !== 'silent' && soundMode !== 'cheer') {
      cleanupTicksRef.current?.();
      cleanupTicksRef.current = scheduleSpinTicks(durationMs, volume);
    }
  }, [soundMode, volume]);

  const handleSpinEnd = useCallback((w: WheelItem) => {
    setIsSpinning(false);
    setWinner(w);
    cleanupTicksRef.current?.();
    cleanupTicksRef.current = null;
    if (soundMode !== 'silent' && soundMode !== 'tick') {
      playCheer(volume);
    }
  }, [soundMode, volume]);

  const handleSpinAgain = useCallback(() => {
    setWinner(null);
    // Small delay so the modal has a moment to unmount before the wheel starts
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
    // `dark` class here scopes all dark: Tailwind utilities to this subtree
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl leading-none">🎡</span>
              <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg">
                Spin The Choice
              </span>
            </div>
            <HowToUse />
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
          </div>
        </header>

        {/* ── Main ───────────────────────────────────────────────── */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left column: item editor — appears below wheel on mobile, left on desktop */}
            <div className="w-full lg:w-[360px] lg:flex-none order-last lg:order-first">
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
                <ItemEditor items={items} onChange={setItems} />
              </div>
            </div>

            {/* Right column: wheel + spin button — appears first on mobile */}
            <div className="flex-1 flex flex-col items-center gap-8 order-first lg:order-last">
              {/* Ambient glow behind the wheel */}
              <div className="relative w-full flex justify-center">
                {items[0] && (
                  <div
                    className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
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

              {/* Spin button */}
              <button
                onClick={() => wheelRef.current?.spin()}
                disabled={!canSpin}
                className={[
                  'relative px-12 py-4 rounded-2xl text-white font-bold text-lg',
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

              {/* Sound controls */}
              <div className="w-full flex justify-center pt-2 border-t border-gray-200 dark:border-gray-800">
                <SoundSettings
                  mode={soundMode}
                  volume={volume}
                  onModeChange={setSoundMode}
                  onVolumeChange={setVolume}
                />
              </div>

              {/* Share panel — only shown when there's something to share */}
              {items.length >= 2 && (
                <div className="w-full pt-2 border-t border-gray-200 dark:border-gray-800">
                  <SharePanel wheelId={wheelId} items={items} />
                </div>
              )}

              {/* Ad space — 300×250 medium rectangle */}
              <div className="w-full pt-2 border-t border-gray-200 dark:border-gray-800">
                <AdSpace />
              </div>
            </div>
          </div>
        </main>

        {/* ── Trending section ───────────────────────────────────── */}
        <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              🔥 Trending Today
            </h2>
            <Link
              href="/gallery"
              className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
            >
              See all →
            </Link>
          </div>
          <GalleryGrid wheels={trendingWheels} mobileScroll />
        </section>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer className="text-center py-4 text-xs text-gray-400 dark:text-gray-700 border-t border-gray-200 dark:border-gray-800">
          Click the wheel or press SPIN · Spin The Choice
        </footer>
      </div>

      {/* Winner modal */}
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
