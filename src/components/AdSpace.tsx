/**
 * AdSpace — 300×250 "medium rectangle" placeholder.
 *
 * Swap the inner content for a real Google AdSense unit when ready:
 *   <ins className="adsbygoogle" ... />
 *
 * The outer wrapper keeps the reserved 300×250 footprint so the layout
 * never jumps when the real ad loads.
 */
export default function AdSpace() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          relative flex flex-col items-center justify-center gap-2
          w-[300px] h-[250px] rounded-2xl
          border-2 border-dashed border-gray-200 dark:border-gray-800
          bg-gray-50 dark:bg-gray-900/60
          text-gray-300 dark:text-gray-700
          select-none overflow-hidden
        "
        aria-hidden="true"
      >
        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="ad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ad-grid)" />
        </svg>

        {/* Label */}
        <div className="relative flex flex-col items-center gap-1 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-60">
            Advertisement
          </span>
          <span className="text-[11px] opacity-40">300 × 250</span>
        </div>

        {/* AdSense placeholder comment — leave this in place */}
        {/* TODO: replace with <ins class="adsbygoogle"> block from AdSense dashboard */}
      </div>
    </div>
  );
}
