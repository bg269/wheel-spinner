import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Brain Break Ideas for Remote Learning & Zoom Classes',
  description: 'The best brain breaks for remote learning and Zoom classes — screen-free movement, on-camera social moments, desk stretches, and mindfulness breaks that actually work virtually.',
  keywords: ['brain breaks remote learning', 'zoom brain breaks', 'virtual brain breaks', 'online classroom brain breaks', 'remote learning activities'],
  alternates: { canonical: 'https://spinthechoice.com/blog/brain-breaks-remote-learning' },
  openGraph: {
    title: 'Brain Break Ideas for Remote Learning & Zoom Classes',
    description: 'Brain breaks designed for virtual classrooms — screen-free movement, on-camera social moments, and quick resets that work over video.',
    url: 'https://spinthechoice.com/blog/brain-breaks-remote-learning',
    type: 'article',
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
