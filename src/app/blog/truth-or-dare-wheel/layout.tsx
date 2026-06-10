import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Truth or Dare Wheel – The Ultimate Setup Guide',
  description: 'Set up a truth or dare wheel spinner in seconds. 50+ truth questions, dare ideas, game variations, and tips for the best game night.',
  keywords: ['truth or dare wheel', 'truth or dare spinner', 'spin the wheel truth or dare', 'dare wheel', 'truth or dare wheel online'],
  alternates: { canonical: 'https://spinthechoice.com/blog/truth-or-dare-wheel' },
  openGraph: { title: 'Truth or Dare Wheel – The Ultimate Setup Guide', description: 'Set up a truth or dare wheel in seconds. 50+ questions, dares, and game variations.', url: 'https://spinthechoice.com/blog/truth-or-dare-wheel', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
