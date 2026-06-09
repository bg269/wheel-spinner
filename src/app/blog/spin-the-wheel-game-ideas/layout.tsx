import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15 Spin the Wheel Game Ideas for Parties, Classrooms & Online',
  description:
    'Creative spin the wheel game ideas for every occasion — party games, classroom activities, ' +
    'ice-breakers, and virtual team games. All free with Spin The Choice.',
  keywords: [
    'spin the wheel game ideas',
    'spin the wheel games',
    'spin the wheel party game',
    'wheel spinner games',
    'classroom spin the wheel',
    'virtual spin the wheel',
    'spin the wheel activities',
  ],
  alternates: { canonical: 'https://spinthechoice.com/blog/spin-the-wheel-game-ideas' },
  openGraph: {
    title: '15 Spin the Wheel Game Ideas for Parties, Classrooms & Online',
    description:
      '15 creative ways to use a wheel spinner — from party dare wheels to classroom review games.',
    url: 'https://spinthechoice.com/blog/spin-the-wheel-game-ideas',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
