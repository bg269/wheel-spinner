import Link from 'next/link';
import WheelPreview from '@/components/WheelPreview';
import type { GalleryWheel } from '@/data/gallery';
import { formatViews } from '@/data/gallery';
import { encodeWheelData } from '@/lib/share';

interface GalleryGridProps {
  wheels: GalleryWheel[];
  /** CSS columns class — defaults to a responsive 2/3/4 col grid */
  columns?: string;
  /**
   * When true the grid becomes a horizontal scroll strip on mobile
   * (snapping cards) and switches back to the grid layout at sm+.
   */
  mobileScroll?: boolean;
}

function wheelHref(wheel: GalleryWheel): string {
  const items = wheel.items.map((item, i) => ({
    id: String(i),
    name: item.name,
    color: item.color,
  }));
  const data = encodeWheelData(items);
  return `/wheels/${wheel.id}?data=${encodeURIComponent(data)}`;
}

export default function GalleryGrid({ wheels, columns, mobileScroll }: GalleryGridProps) {
  const gridClass =
    columns ??
    'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';

  const wrapperClass = mobileScroll
    ? 'card-scroll-strip sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4'
    : gridClass;

  return (
    <div className={wrapperClass}>
      {wheels.map((wheel) => (
        <Link
          key={wheel.id}
          href={wheelHref(wheel)}
          className="
            group flex flex-col rounded-2xl overflow-hidden
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            shadow-sm hover:shadow-md
            transition-all duration-200 hover:-translate-y-0.5
          "
        >
          {/* Wheel preview */}
          <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 p-4">
            <WheelPreview items={wheel.items} size={100} />
          </div>

          {/* Card info */}
          <div className="flex flex-col gap-1 p-3">
            <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight line-clamp-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {wheel.name}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-600">
              <span className="flex items-center gap-1">
                {/* Person icon */}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {wheel.creator}
              </span>
              <span className="flex items-center gap-1">
                {/* Eye icon */}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {formatViews(wheel.views)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
