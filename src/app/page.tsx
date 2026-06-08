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
              <span className="text-2xl leading-none" aria-hidden="true">🎡</span>
              <h1 className="font-bold text-gray-900 dark:text-white tracking-tight text-lg">
                Spin The Choice
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <HowToUse />
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
            </div>
          </div>
        </header>

        {/* ── Main ───────────────────────────────────────────────── */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 lg:py-12">
          {/* Keyword-rich subtitle — visible to crawlers, subtle for users */}
          <p className="text-center text-sm text-gray-400 dark:text-gray-600 mb-6 -mt-2">
            Free classroom name picker · random student selector · online decision spinner
          </p>
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

        {/* ── Content sections (SEO) ────────────────────────────── */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800">

          {/* What is it */}
          <section className="py-10 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              What is Spin The Choice?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Spin The Choice is a free online wheel spinner that makes random decisions fun,
                fair, and instant. Whether you need to pick a random student in the classroom,
                choose a winner for a giveaway, decide what to have for dinner, or settle a debate
                between friends, our wheel spinner gives everyone an equal chance with one satisfying
                spin.
              </p>
              <p>
                Unlike a basic random number generator, our colourful spinning wheel creates
                genuine excitement — students lean forward to see who gets picked, contestants
                watch breathlessly during a prize draw, and friends cheer as the wheel slows toward
                their option. There are no downloads, no accounts, and no cost. Just add your items
                and spin.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="py-10 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Everything you need in a wheel spinner
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '✏️', title: 'Add unlimited entries', body: 'Type names or options one per line — no limit on how many items you add. The wheel automatically resizes to fit all entries.' },
                { icon: '🎨', title: 'Custom colours', body: 'Click any colour dot to open a full colour picker. Make every segment a unique colour to match your theme, team, or classroom.' },
                { icon: '🔊', title: 'Sound effects', body: 'Satisfying tick sounds build tension as the wheel decelerates, followed by a cheer when the result lands. Volume is fully adjustable.' },
                { icon: '🔗', title: 'Shareable links', body: 'Every wheel generates a unique URL you can share. Recipients can spin the exact same wheel from any device — no account needed.' },
                { icon: '📋', title: 'Ready-made templates', body: 'Jump straight in with built-in templates for classrooms, dinner decisions, movie nights, and game picks. One click to load and go.' },
                { icon: '🌙', title: 'Dark mode', body: 'Toggle between light and dark theme at any time. Dark mode is easier on the eyes for evening use and automatically matches your system preference.' },
              ].map((f) => (
                <div key={f.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-10 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Popular use cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { icon: '🎓', title: 'Classroom name picker', body: 'Teachers use Spin The Choice daily to pick students for questions, presentations, and reading turns. The Classroom template has 30 student names ready to go. Fair, fast, and keeps kids engaged.' },
                { icon: '🎁', title: 'Giveaway & raffle draw', body: 'Add all your entrants and spin live on stream or at your event for a transparent, exciting draw. Share the wheel link so your audience can watch and verify the result is truly random.' },
                { icon: '🍕', title: 'Dinner & meal decisions', body: 'End the "what shall we eat?" debate forever. Load up the Dinner Ideas template or add your own favourites and let the wheel pick tonight\'s meal. No more endless back-and-forth.' },
                { icon: '🎲', title: 'Game night & parties', body: 'Spin to choose which game to play, assign teams, pick dare topics, or decide who goes first. The Game Night template includes Uno, Catan, Codenames, Pictionary, and more.' },
              ].map((uc) => (
                <div key={uc.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{uc.icon}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{uc.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{uc.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="py-10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              How to use the wheel spinner
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: '1', title: 'Add your items', body: 'Type names or choices into the list on the left — one per line. Or choose a template to get started in seconds.' },
                { n: '2', title: 'Customise colours', body: 'Click any colour dot next to an item to change its wheel segment colour. Make it yours.' },
                { n: '3', title: 'Click SPIN', body: 'Hit the big SPIN button or click directly on the wheel. Watch it spin with sound effects and build the excitement.' },
                { n: '4', title: 'Share the result', body: 'Use the Share button to copy a link to your exact wheel. Anyone with the link can spin it from their own device.' },
              ].map((step) => (
                <li key={step.n} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 flex gap-4">
                  <span className="flex-none w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center justify-center">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

        </div>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer className="text-center py-4 text-xs text-gray-400 dark:text-gray-700 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
          <span>Click the wheel or press SPIN</span>
          <span aria-hidden="true">·</span>
          <Link href="/about" className="hover:text-violet-500 transition-colors">About</Link>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-violet-500 transition-colors">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/contact" className="hover:text-violet-500 transition-colors">Contact</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="hover:text-violet-500 transition-colors">Terms</Link>
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
