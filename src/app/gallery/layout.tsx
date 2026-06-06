import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wheel Gallery',
  description:
    'Browse popular community wheels — classroom name pickers, dinner idea spinners, game night selectors, and more. Click any wheel to spin it instantly.',
  openGraph: {
    title: 'Wheel Gallery | Spin The Choice',
    description:
      'Browse popular community wheels — classroom name pickers, dinner idea spinners, game night selectors, and more.',
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
