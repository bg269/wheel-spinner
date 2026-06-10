import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Birthday Party Wheel Games – 10 Ideas for Every Age',
  description: 'Make any birthday unforgettable with wheel spinner games. 10 fun birthday party wheel ideas for kids, teens, and adults — free setup guides included.',
  keywords: ['birthday party wheel games', 'birthday wheel spinner', 'party wheel game', 'spin the wheel birthday party', 'birthday game ideas'],
  alternates: { canonical: 'https://spinthechoice.com/blog/birthday-party-wheel-games' },
  openGraph: { title: 'Birthday Party Wheel Games – 10 Ideas for Every Age', description: '10 fun birthday party wheel games for kids, teens, and adults.', url: 'https://spinthechoice.com/blog/birthday-party-wheel-games', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
