import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Call on Students Fairly – Spin The Choice',
  description:
    'Why fair participation is harder than it looks, the most common methods teachers use, ' +
    'and how a name picker wheel solves the "you never pick me" problem for good.',
  keywords: [
    'calling on students fairly',
    'fair participation classroom',
    'random name picker teacher',
    'cold calling students',
    'classroom participation strategies',
    'no repeat name picker',
    'student engagement teacher tips',
    'lolly stick jar alternative',
  ],
  alternates: { canonical: 'https://spinthechoice.com/blog/calling-on-students-fairly' },
  openGraph: {
    title: 'How to Call on Students Fairly (Without Anyone Saying "You Never Pick Me")',
    description:
      'Why fair participation is harder than it looks, and how a name picker wheel solves the problem.',
    url: 'https://spinthechoice.com/blog/calling-on-students-fairly',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
