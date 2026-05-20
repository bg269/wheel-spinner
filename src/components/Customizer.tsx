'use client';

import { useEffect, useRef, useState } from 'react';

export const PRESET_COLORS = [
  { name: 'Red',    hex: '#EF4444' },
  { name: 'Orange', hex: '#F97316' },
  { name: 'Yellow', hex: '#EAB308' },
  { name: 'Lime',   hex: '#84CC16' },
  { name: 'Green',  hex: '#22C55E' },
  { name: 'Teal',   hex: '#14B8A6' },
  { name: 'Cyan',   hex: '#06B6D4' },
  { name: 'Blue',   hex: '#3B82F6' },
  { name: 'Purple', hex: '#A855F7' },
  { name: 'Pink',   hex: '#EC4899' },
  { name: 'Brown',  hex: '#A16207' },
  { name: 'Gray',   hex: '#6B7280' },
];

interface CustomizerProps {
  color: string;
  onChange: (hex: string) => void;
}

export default function Customizer({ color, onChange }: CustomizerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div ref={ref} className="relative flex-none">
      {/* Trigger — the color dot */}
      <button
        onClick={() => setOpen((o) => !o)}
        title="Change color"
        className="w-7 h-7 rounded-lg shadow-sm ring-2 ring-white dark:ring-gray-900 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-violet-500"
        style={{ backgroundColor: color }}
      />

      {/* Swatch popover */}
      {open && (
        <div className="absolute left-0 top-9 z-30 w-[168px] p-2 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 animate-pop-in">
          <div className="grid grid-cols-6 gap-1.5">
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset.hex}
                title={preset.name}
                onClick={() => { onChange(preset.hex); setOpen(false); }}
                className="w-7 h-7 rounded-md transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                style={{ backgroundColor: preset.hex }}
              >
                {/* Checkmark on selected */}
                {color.toLowerCase() === preset.hex.toLowerCase() && (
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mx-auto" stroke="white" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
