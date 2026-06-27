import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brain Breaks: 10 Quick Classroom Activities – Spin The Choice',
  description:
    'Ten brain break activities that take under two minutes, why they work, and how a brain break wheel makes choosing one effortless.',
  keywords: [
    'brain breaks for kids',
    'classroom brain breaks',
    'brain break activities',
    'brain break ideas for teachers',
    'quick brain breaks',
    'brain break wheel',
    'movement break classroom',
    'reset restless class',
  ],
  alternates: { canonical: 'https://spinthechoice.com/blog/brain-breaks-quick-classroom-activities' },
  openGraph: {
    title: 'Brain Breaks: 10 Quick Activities to Reset a Restless Class',
    description:
      'Ten brain break activities that take under two minutes, why they work, and how a brain break wheel makes choosing one effortless.',
    url: 'https://spinthechoice.com/blog/brain-breaks-quick-classroom-activities',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
