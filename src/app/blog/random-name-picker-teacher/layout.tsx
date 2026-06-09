import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Random Name Picker for Teachers – Complete Guide',
  description:
    'Teacher guide to using a random name picker for classroom engagement and participation. ' +
    'Tips, tricks, and a free tool to get started today.',
  keywords: [
    'random name picker for teachers',
    'random name picker',
    'classroom name picker',
    'random student selector',
    'teacher random picker',
    'classroom engagement',
    'student participation',
  ],
  alternates: { canonical: 'https://spinthechoice.com/blog/random-name-picker-teacher' },
  openGraph: {
    title: 'Random Name Picker for Teachers – Complete Guide',
    description:
      'Teacher guide to using a random name picker for classroom engagement and participation.',
    url: 'https://spinthechoice.com/blog/random-name-picker-teacher',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
