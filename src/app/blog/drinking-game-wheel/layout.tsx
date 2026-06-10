import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Drinking Game Wheel – Rules, Ideas & Setup Guide (18+)',
  description: 'Set up a drinking game wheel for your next adult party. Rules, forfeit ideas, game variations, and a free wheel spinner. Drink responsibly.',
  keywords: ['drinking game wheel', 'spin the wheel drinking game', 'adult wheel spinner', 'drinking wheel game', 'drinking game ideas wheel'],
  alternates: { canonical: 'https://spinthechoice.com/blog/drinking-game-wheel' },
  openGraph: { title: 'Drinking Game Wheel – Rules, Ideas & Setup Guide (18+)', description: 'Drinking game wheel rules, forfeit ideas, and game variations for adult parties.', url: 'https://spinthechoice.com/blog/drinking-game-wheel', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
