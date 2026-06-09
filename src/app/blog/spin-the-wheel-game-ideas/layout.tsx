import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Spin the Wheel – Game Ideas and Fun Uses',
  description:
    'Discover creative spin the wheel game ideas for parties, classrooms, and team activities. ' +
    'History, modern uses, and setup guides for every idea.',
  keywords: [
    'spin the wheel game ideas',
    'spin the wheel games',
    'spin the wheel party game',
    'wheel spinner games',
    'classroom spin the wheel',
    'spin the wheel activities',
    'spin the wheel business',
  ],
  alternates: { canonical: 'https://spinthechoice.com/blog/spin-the-wheel-game-ideas' },
  openGraph: {
    title: 'How to Spin the Wheel – Game Ideas and Fun Uses',
    description:
      'Creative spin the wheel game ideas for parties, classrooms, and team activities.',
    url: 'https://spinthechoice.com/blog/spin-the-wheel-game-ideas',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
