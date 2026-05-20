'use client';

import { useEffect, useRef, useState } from 'react';
import type { WheelItem } from '@/lib/types';
import { getDefaultColor } from '@/lib/colors';
import { nanoid } from '@/lib/utils';
import TemplatePicker from '@/components/TemplatePicker';
import type { Template } from '@/data/templates';

interface ItemEditorProps {
  items: WheelItem[];
  onChange: (items: WheelItem[]) => void;
}

export default function ItemEditor({ items, onChange }: ItemEditorProps) {
  const colorInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null);

  const handleTemplateSelect = (template: Template) => {
    const newItems: WheelItem[] = template.entries.map((name, i) => ({
      id: nanoid(),
      name,
      color: getDefaultColor(i),
    }));
    isInternalChange.current = true;
    setText(template.entries.join('\n'));
    setActiveTemplateId(template.id);
    onChange(newItems);
  };

  // The textarea owns its own text state so the cursor never jumps mid-edit.
  // We only re-sync FROM items when an external change happens (shuffle, remove,
  // clear) — tracked via isInternalChange so we don't clobber our own updates.
  const [text, setText] = useState(() => items.map((i) => i.name).join('\n'));
  const isInternalChange = useRef(false);

  useEffect(() => {
    if (isInternalChange.current) {
      isInternalChange.current = false;
      return;
    }
    // External change (shuffle / clear / remove chip) — sync textarea
    setText(items.map((i) => i.name).join('\n'));
  }, [items]);

  const handleTextChange = (value: string) => {
    setText(value);
    setActiveTemplateId(null); // user is now editing freely
    const named = value.split('\n').map((l) => l.trimEnd()).filter((l) => l.trim().length > 0);
    const newItems: WheelItem[] = named.map((name, idx) => {
      const existing = items[idx];
      if (existing) return { ...existing, name };
      return { id: nanoid(), name, color: getDefaultColor(idx) };
    });
    isInternalChange.current = true;
    onChange(newItems);
  };

  const updateColor = (id: string, color: string) => {
    onChange(items.map((item) => (item.id === id ? { ...item, color } : item)));
  };

  const removeItem = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const shuffle = () => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    onChange(copy);
  };

  const clear = () => onChange([]);

  return (
    <div className="flex flex-col gap-5">
      {/* Template picker */}
      <TemplatePicker activeId={activeTemplateId} onSelect={handleTemplateSelect} />

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Items
          {items.length > 0 && (
            <span className="ml-2 text-xs font-normal text-gray-400 dark:text-gray-500">
              {items.length}
            </span>
          )}
        </h2>
        <div className="flex gap-2">
          {items.length > 1 && (
            <button
              onClick={shuffle}
              title="Shuffle order"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Shuffle
            </button>
          )}
          {items.length > 0 && (
            <button
              onClick={clear}
              title="Clear all"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors px-2 py-1 rounded-md hover:bg-red-50 dark:hover:bg-red-950/30"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={'Enter names, one per line:\n\nAlice\nBob\nCharlie\nDiana'}
          rows={8}
          spellCheck={false}
          className="
            w-full resize-none rounded-xl border border-gray-200 dark:border-gray-700
            bg-white dark:bg-gray-800/60
            text-gray-900 dark:text-gray-100
            placeholder:text-gray-400 dark:placeholder:text-gray-600
            text-[16px] sm:text-sm leading-relaxed px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400
            transition-colors
          "
        />
        <div className="absolute bottom-3 right-3 text-[11px] text-gray-400 dark:text-gray-600 pointer-events-none">
          one per line
        </div>
      </div>

      {/* Color pickers for each item */}
      {items.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-gray-400 dark:text-gray-600 mb-1">
            Click a color to customize
          </p>
          {items.map((item, i) => (
            <div
              key={item.id}
              className="flex items-center gap-3 group rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              {/* Color dot — clicking opens the native color picker */}
              <label
                className="relative flex-none w-8 h-8 rounded-lg shadow-sm ring-2 ring-white dark:ring-gray-900 transition-transform hover:scale-110 cursor-pointer"
                style={{ backgroundColor: item.color }}
                title="Change color"
              >
                <input
                  ref={(el) => { colorInputRefs.current[item.id] = el; }}
                  type="color"
                  value={item.color}
                  onChange={(e) => updateColor(item.id, e.target.value)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
              </label>

              <span className="flex-1 text-sm text-gray-700 dark:text-gray-300 truncate">
                <span className="text-gray-400 dark:text-gray-600 mr-2 tabular-nums text-xs">
                  {i + 1}.
                </span>
                {item.name}
              </span>

              <button
                onClick={() => removeItem(item.id)}
                className="flex-none w-8 h-8 flex items-center justify-center rounded-md text-gray-400 dark:text-gray-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 sm:opacity-0 sm:group-hover:opacity-100 transition-all text-lg leading-none"
                title="Remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
