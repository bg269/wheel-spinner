'use client';

import { TEMPLATES, type Template } from '@/data/templates';
import { track } from '@vercel/analytics';

interface TemplatePickerProps {
  activeId: string | null;
  onSelect: (template: Template) => void;
}

export default function TemplatePicker({ activeId, onSelect }: TemplatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Start from a template
      </p>
      <div className="grid grid-cols-2 gap-2">
        {TEMPLATES.map((t) => {
          const isActive = activeId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => { track('template_use', { template: t.id }); onSelect(t); }}
              className={[
                'flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left',
                'transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
                isActive
                  ? 'border-violet-400 dark:border-violet-500 bg-violet-50 dark:bg-violet-950/40'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50/50 dark:hover:bg-violet-950/20',
              ].join(' ')}
            >
              <span className="text-xl leading-none">{t.emoji}</span>
              <div className="min-w-0">
                <p className={[
                  'text-xs font-semibold leading-tight truncate',
                  isActive ? 'text-violet-700 dark:text-violet-300' : 'text-gray-800 dark:text-gray-200',
                ].join(' ')}>
                  {t.label}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-600 leading-tight">
                  {t.entries.length} entries
                </p>
              </div>
              {isActive && (
                <span className="ml-auto flex-none text-violet-500 dark:text-violet-400 text-xs">✓</span>
              )}
            </button>
          );
        })}
      </div>

      {activeId && (
        <p className="text-[11px] text-violet-600 dark:text-violet-400 flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Template loaded — edit entries or spin now!
        </p>
      )}
    </div>
  );
}
