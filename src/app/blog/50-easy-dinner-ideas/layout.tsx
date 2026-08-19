import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '50 Easy Dinner Ideas When You Can\'t Decide What to Cook',
  description: '50 easy dinner ideas organised by category — one-pot, 30-minute, budget, healthy, and comfort food — plus a free meal spinner wheel to pick for you in seconds.',
  keywords: ['dinner ideas', 'easy dinner ideas', 'what to cook for dinner', 'quick dinner ideas', 'budget dinner ideas', 'healthy dinner ideas', 'one pot dinner ideas'],
  alternates: { canonical: 'https://spinthechoice.com/blog/50-easy-dinner-ideas' },
  openGraph: {
    title: '50 Easy Dinner Ideas When You Can\'t Decide What to Cook',
    description: '50 easy dinner ideas for every mood — one-pot, 30-minute, budget, healthy, and comfort food — plus a free spinner to decide for you.',
    url: 'https://spinthechoice.com/blog/50-easy-dinner-ideas',
    type: 'article',
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
