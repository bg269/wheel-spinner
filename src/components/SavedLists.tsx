'use client';

import { useEffect, useRef, useState } from 'react';
import type { WheelItem } from '@/lib/types';
import { getDefaultColor } from '@/lib/colors';
import { nanoid } from '@/lib/utils';
import { readLists, upsertList, deleteList, type SavedList } from '@/lib/savedLists';

interface Props {
  items: WheelItem[];
  onLoad: (items: WheelItem[]) => void;
}

export default function SavedLists({ items, onLoad }: Props) {
  const [lists, setLists] = useState<SavedList[]>([]);
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<'idle' | 'naming' | 'confirming'>('idle');
  const [nameInput, setNameInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Only read localStorage on client — never during SSR
  useEffect(() => {
    setLists(readLists());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mode === 'naming' || mode === 'confirming') {
      inputRef.current?.focus();
    }
  }, [mode]);

  // Return null for THIS section only; ItemEditor continues to render server-side
  if (!mounted) return null;

  const startSave = () => {
    if (items.length === 0) {
      setError('Add at least one entry before saving.');
      return;
    }
    setError(null);
    setNameInput('');
    setMode('naming');
  };

  const submitName = () => {
    const name = nameInput.trim();
    if (!name) {
      setError('Please enter a name for this list.');
      return;
    }
    if (lists.find((l) => l.name === name)) {
      setMode('confirming');
      return;
    }
    commitSave(name);
  };

  const commitSave = (listName: string) => {
    const entries = items.map((item) => ({ name: item.name, color: item.color }));
    try {
      setLists(upsertList(lists, listName, entries));
      setMode('idle');
      setNameInput('');
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save list.');
      setMode('idle');
    }
  };

  const cancelSave = () => {
    setMode('idle');
    setNameInput('');
    setError(null);
  };

  const loadList = (list: SavedList) => {
    const restored: WheelItem[] = list.items.map((entry, i) => ({
      id: nanoid(),
      name: entry.name,
      color: entry.color || getDefaultColor(i),
    }));
    onLoad(restored);
  };

  const handleDelete = (id: string) => {
    setLists(deleteList(lists, id));
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Header row */}
      <div className="flex items-center justify-between min-h-[28px]">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Saved lists
        </h3>
        {mode === 'idle' && (
          <button
            onClick={startSave}
            disabled={items.length === 0}
            title={items.length === 0 ? 'Add entries first' : 'Save current list'}
            className={[
              'flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors',
              items.length === 0
                ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
                : 'text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30',
            ].join(' ')}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Save list
          </button>
        )}
      </div>

      {/* Naming / confirming prompt */}
      {(mode === 'naming' || mode === 'confirming') && (
        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            type="text"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
              setError(null);
              if (mode === 'confirming') setMode('naming');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                mode === 'confirming' ? commitSave(nameInput.trim()) : submitName();
              }
              if (e.key === 'Escape') cancelSave();
            }}
            placeholder="e.g. Year 9 Science"
            maxLength={60}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition-colors"
          />
          {mode === 'confirming' && (
            <p className="text-xs text-amber-600 dark:text-amber-400">
              "{nameInput.trim()}" already exists — replace it?
            </p>
          )}
          {error && (
            <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
          )}
          <div className="flex gap-2">
            <button
              onClick={() =>
                mode === 'confirming' ? commitSave(nameInput.trim()) : submitName()
              }
              className="flex-1 py-1.5 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
            >
              {mode === 'confirming' ? 'Replace' : 'Save'}
            </button>
            <button
              onClick={cancelSave}
              className="flex-1 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Idle-mode error (e.g. storage full, no entries yet) */}
      {error && mode === 'idle' && (
        <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
      )}

      {/* Saved list rows */}
      {lists.length > 0 && (
        <div className="flex flex-col gap-0.5">
          {lists.map((list) => (
            <div
              key={list.id}
              className="flex items-center gap-2 group rounded-lg px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                  {list.name}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-600">
                  {list.items.length} {list.items.length === 1 ? 'entry' : 'entries'}
                </p>
              </div>
              <button
                onClick={() => loadList(list)}
                className="flex-none text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline px-1.5 py-1 rounded transition-colors"
              >
                Load
              </button>
              <button
                onClick={() => handleDelete(list.id)}
                title={`Delete "${list.name}"`}
                className="flex-none w-7 h-7 flex items-center justify-center rounded-md text-gray-400 dark:text-gray-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all sm:opacity-0 sm:group-hover:opacity-100 text-base leading-none"
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
