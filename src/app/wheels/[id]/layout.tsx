import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shared Wheel',
  description:
    'Someone shared a wheel with you on Spin The Choice. Click SPIN to pick a random winner instantly — no sign-up required.',
  openGraph: {
    title: 'Spin This Wheel | Spin The Choice',
    description:
      'Someone shared a wheel with you. Click SPIN to pick a random winner instantly.',
  },
  robots: {
    // Shared wheels are user-generated — don't index them individually
    index: false,
    follow: true,
  },
};

export default function SharedWheelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
