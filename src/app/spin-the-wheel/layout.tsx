import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spin the Wheel – Free Online Wheel Spinner for Any Decision',
  description:
    'Spin the wheel and let chance decide! Free online spinner for names, yes or no questions, ' +
    'games, prizes, and more. No login, no download — just spin.',
  keywords: [
    'spin the wheel',
    'spin the wheel online',
    'yes or no wheel spinner',
    'spin the wheel free',
    'random wheel spinner',
    'spin the wheel game',
    'decision wheel',
    'online spinner wheel',
  ],
  alternates: { canonical: 'https://spinthechoice.com/spin-the-wheel' },
  openGraph: {
    title: 'Spin the Wheel – Free Online Wheel Spinner for Any Decision',
    description:
      'Spin the wheel for names, yes or no answers, prizes, and games. Free, instant, no login.',
    url: 'https://spinthechoice.com/spin-the-wheel',
    type: 'article',
  },
};

export default function SpinTheWheelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
