import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classroom Wheel Spinner – Engage Your Students Better',
  description:
    'Learn how teachers use wheel spinners for random student selection. ' +
    'Free guide + classroom ideas.',
  keywords: [
    'classroom wheel spinner',
    'random name picker',
    'random student selector',
    'classroom spinner ideas',
    'teacher wheel spinner',
    'engage students',
  ],
  alternates: { canonical: 'https://spinthechoice.com/blog/classroom-wheel-spinner' },
  openGraph: {
    title: 'Classroom Wheel Spinner – Engage Your Students Better',
    description:
      'Learn how teachers use wheel spinners for random student selection. Free guide + classroom ideas.',
    url: 'https://spinthechoice.com/blog/classroom-wheel-spinner',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
