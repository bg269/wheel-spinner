'use client';

import { useEffect, useRef } from 'react';
import type { WheelItem } from '@/lib/types';
import { getContrastColor } from '@/lib/utils';

interface ResultModalProps {
  winner: WheelItem;
  onClose: () => void;
  onSpinAgain: () => void;
  onRemoveAndSpin: () => void;
}

export default function ResultModal({
  winner,
  onClose,
  onSpinAgain,
  onRemoveAndSpin,
}: ResultModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const textColor = getContrastColor(winner.color);
  const isLight = textColor === '#1a1a1a';

  // Trap focus & close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Fire confetti when the modal opens
  useEffect(() => {
    let cancelled = false;

    const fireConfetti = async () => {
      try {
        // Dynamic import so the page isn't blocked if this package isn't installed
        const { default: confetti } = await import('canvas-confetti');
        if (cancelled) return;
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.55 },
          colors: [winner.color, '#ffffff', '#f3f4f6'],
        });
        setTimeout(() => {
          if (!cancelled)
            confetti({
              particleCount: 60,
              spread: 100,
              origin: { y: 0.6 },
              angle: 120,
              colors: [winner.color, '#fbbf24', '#a78bfa'],
            });
        }, 300);
      } catch {
        // canvas-confetti not installed — skip silently
      }
    };

    fireConfetti();
    return () => { cancelled = true; };
  }, [winner.color]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Winner: ${winner.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Card */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-pop-in flex flex-col items-center gap-6"
        style={{ backgroundColor: winner.color }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full text-xl transition-opacity hover:opacity-60 active:opacity-40"
          style={{ color: textColor, background: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)' }}
          title="Close"
          aria-label="Close"
        >
          ×
        </button>

        {/* Trophy icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner"
          style={{ background: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)' }}
        >
          🏆
        </div>

        {/* Winner name */}
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-70"
            style={{ color: textColor }}
          >
            Winner!
          </p>
          <h2
            className="text-3xl font-bold break-words leading-tight"
            style={{ color: textColor }}
          >
            {winner.name}
          </h2>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-2.5">
          <button
            onClick={onSpinAgain}
            className="w-full py-3 rounded-2xl text-sm font-semibold transition-opacity hover:opacity-80 active:opacity-70"
            style={{
              background: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.25)',
              color: textColor,
            }}
          >
            Spin Again
          </button>
          <button
            onClick={onRemoveAndSpin}
            className="w-full py-3 rounded-2xl text-sm font-semibold transition-opacity hover:opacity-80 active:opacity-70"
            style={{
              background: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)',
              color: textColor,
            }}
          >
            Remove &amp; Spin Again
          </button>
        </div>
      </div>
    </div>
  );
}
