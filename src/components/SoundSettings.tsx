'use client';

import type { SoundMode } from '@/lib/audio';

const MODES: { value: SoundMode; label: string }[] = [
  { value: 'both',   label: 'Tick + Cheer' },
  { value: 'tick',   label: 'Tick Only'    },
  { value: 'cheer',  label: 'Cheer Only'   },
  { value: 'silent', label: 'Silent'       },
];

interface SoundSettingsProps {
  mode: SoundMode;
  volume: number;        // 0–1
  onModeChange: (m: SoundMode) => void;
  onVolumeChange: (v: number) => void;
}

export default function SoundSettings({
  mode,
  volume,
  onModeChange,
  onVolumeChange,
}: SoundSettingsProps) {
  const pct = Math.round(volume * 100);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Mode dropdown */}
      <div className="flex items-center gap-1.5">
        <span className="text-base leading-none select-none">
          {mode === 'silent' ? '🔇' : volume < 0.4 ? '🔉' : '🔊'}
        </span>
        <select
          value={mode}
          onChange={(e) => onModeChange(e.target.value as SoundMode)}
          className="
            text-sm rounded-lg border border-gray-200 dark:border-gray-700
            bg-white dark:bg-gray-800
            text-gray-700 dark:text-gray-300
            px-2 py-1.5
            focus:outline-none focus:ring-2 focus:ring-violet-500/50
            cursor-pointer
          "
        >
          {MODES.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      {/* Volume slider — hidden when silent */}
      {mode !== 'silent' && (
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={100}
            value={pct}
            onChange={(e) => onVolumeChange(Number(e.target.value) / 100)}
            className="w-24 accent-violet-600 cursor-pointer"
            aria-label="Volume"
          />
          <span className="text-xs text-gray-500 dark:text-gray-400 w-8 tabular-nums">
            {pct}%
          </span>
        </div>
      )}
    </div>
  );
}
