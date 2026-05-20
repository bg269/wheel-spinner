import type { WheelItem } from '@/lib/types';
import { nanoid } from '@/lib/utils';

/** Encode items into a URL-safe base64 string. */
export function encodeWheelData(items: WheelItem[]): string {
  const json = JSON.stringify(
    items.map((i) => ({ name: i.name, color: i.color })),
  );
  // encodeURIComponent handles unicode names; btoa handles the result
  return btoa(encodeURIComponent(json));
}

/** Decode items from a base64 string (returns [] on any error). */
export function decodeWheelData(encoded: string): WheelItem[] {
  try {
    const json = decodeURIComponent(atob(encoded));
    const raw = JSON.parse(json) as { name: string; color: string }[];
    return raw.map((item) => ({ id: nanoid(), name: item.name, color: item.color }));
  } catch {
    return [];
  }
}

/**
 * Build a shareable URL.
 * Shape: origin/wheels/<id>?data=<encoded>
 *
 * The <id> is random and serves as a future DB key.
 * Until a DB exists the page reads from ?data= directly.
 */
export function buildShareUrl(wheelId: string, items: WheelItem[]): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const data = encodeWheelData(items);
  return `${origin}/wheels/${wheelId}?data=${encodeURIComponent(data)}`;
}

export { nanoid as generateWheelId };
