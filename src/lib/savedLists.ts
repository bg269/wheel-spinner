import { nanoid } from '@/lib/utils';

const STORAGE_KEY = 'spinthechoice_saved_lists';

export type SavedListEntry = {
  name: string;
  color: string;
};

export type SavedList = {
  id: string;
  name: string;
  items: SavedListEntry[];
  savedAt: number;
};

/** Read saved lists from localStorage. Never throws; returns [] on any error. */
export function readLists(): SavedList[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SavedList[]) : [];
  } catch {
    return [];
  }
}

function writeLists(lists: SavedList[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  } catch {
    throw new Error('Could not save — storage may be full or unavailable.');
  }
}

/**
 * Add or replace a list by name. Throws a user-readable Error if storage fails.
 * Returns the updated lists array.
 */
export function upsertList(
  current: SavedList[],
  name: string,
  items: SavedListEntry[],
): SavedList[] {
  const existing = current.find((l) => l.name === name);
  const entry: SavedList = {
    id: existing?.id ?? nanoid(),
    name,
    items,
    savedAt: Date.now(),
  };
  const next = existing
    ? current.map((l) => (l.name === name ? entry : l))
    : [entry, ...current];
  writeLists(next);
  return next;
}

/** Delete a list by id. Returns the updated array. Silently tolerates storage errors. */
export function deleteList(current: SavedList[], id: string): SavedList[] {
  const next = current.filter((l) => l.id !== id);
  try {
    writeLists(next);
  } catch {
    // deletion failing silently is acceptable
  }
  return next;
}
