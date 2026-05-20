'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    n: '1',
    emoji: '✏️',
    title: 'Add your items',
    body: 'Type names or options into the list, one per line. Or pick a template to get started instantly.',
  },
  {
    n: '2',
    emoji: '🎨',
    title: 'Customise colours',
    body: 'Click any colour dot next to an item to change it. Each segment on the wheel updates live.',
  },
  {
    n: '3',
    emoji: '🎡',
    title: 'Spin!',
    body: 'Press the SPIN button, tap the wheel, or share the link so someone else can spin it.',
  },
];

export default function HowToUse() {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on click-outside or Escape
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        aria-label="How to use"
        aria-expanded={open}
        className={[
          'w-7 h-7 rounded-full flex items-center justify-center',
          'text-xs font-bold border transition-all',
          open
            ? 'bg-violet-100 dark:bg-violet-900/40 border-violet-400 text-violet-600 dark:text-violet-400'
            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-violet-300 hover:text-violet-500 dark:hover:text-violet-400',
        ].join(' ')}
      >
        ?
      </button>

      {/* Popover */}
      {open && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="How to use Spin The Choice"
          className="
            absolute right-0 top-10 z-50
            w-72 sm:w-80
            rounded-2xl border border-gray-200 dark:border-gray-700
            bg-white dark:bg-gray-900
            shadow-xl shadow-gray-200/60 dark:shadow-black/40
            p-4 animate-pop-in
          "
        >
          {/* Arrow */}
          <div className="absolute -top-2 right-3 w-4 h-4 rotate-45 bg-white dark:bg-gray-900 border-l border-t border-gray-200 dark:border-gray-700" />

          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            How to use
          </p>

          <ol className="flex flex-col gap-3">
            {STEPS.map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="flex-none w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-sm">
                  {step.emoji}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[11px] text-gray-400 dark:text-gray-600 text-center">
              Click the wheel or press SPIN to start
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
