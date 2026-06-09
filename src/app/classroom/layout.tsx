import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classroom Wheel Spinner – Free Random Name Picker for Teachers',
  description:
    'Use our free classroom wheel spinner to pick random student names fairly and instantly. ' +
    'The best random name picker for teachers — no login, no app, works on any device.',
  keywords: [
    'classroom wheel spinner',
    'random name picker',
    'random student selector',
    'name picker for teachers',
    'classroom name picker',
    'wheel spinner for classroom',
    'pick a student randomly',
    'teacher random name tool',
  ],
  alternates: { canonical: 'https://spinthechoice.com/classroom' },
  openGraph: {
    title: 'Classroom Wheel Spinner – Free Random Name Picker for Teachers',
    description:
      'Pick random student names fairly and instantly with our free classroom wheel spinner. ' +
      'Loved by teachers worldwide.',
    url: 'https://spinthechoice.com/classroom',
    type: 'article',
  },
};

export default function ClassroomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
