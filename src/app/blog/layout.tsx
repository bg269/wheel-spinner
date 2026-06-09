import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Teacher guides, game ideas, and tips for getting the most out of Spin The Choice — ' +
    'the free classroom wheel spinner and random name picker.',
  alternates: { canonical: 'https://spinthechoice.com/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
