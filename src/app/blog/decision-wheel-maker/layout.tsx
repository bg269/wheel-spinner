import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Decision Wheel Maker – How to Build and Use One',
  description: 'Use a decision wheel maker to end indecision instantly. Learn when and how to build a decision wheel, the psychology behind it, and real-world examples.',
  keywords: ['decision wheel maker', 'decision wheel', 'random decision maker', 'decision spinner', 'wheel maker online', 'make a decision wheel'],
  alternates: { canonical: 'https://spinthechoice.com/blog/decision-wheel-maker' },
  openGraph: { title: 'Decision Wheel Maker – How to Build and Use One', description: 'How to build and use a decision wheel to end indecision fast. Free tool included.', url: 'https://spinthechoice.com/blog/decision-wheel-maker', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
