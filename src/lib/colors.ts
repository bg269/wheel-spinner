// Matches the 12 presets in Customizer.tsx so auto-assigned colors are always
// valid preset values (checkmark shows correctly on first open).
export const PALETTE = [
  '#EF4444', '#F97316', '#EAB308', '#84CC16',
  '#22C55E', '#14B8A6', '#06B6D4', '#3B82F6',
  '#A855F7', '#EC4899', '#A16207', '#6B7280',
];

export function getDefaultColor(index: number): string {
  return PALETTE[index % PALETTE.length];
}
