import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Quick Brain Breaks for the Office – Boost Employee Productivity',
  description: 'Science-backed brain breaks for office workers — desk stretches, mindfulness micro-breaks, social resets, and movement ideas that genuinely improve focus and output.',
  keywords: ['brain breaks office', 'office brain breaks', 'workplace brain breaks', 'employee productivity breaks', 'work brain break ideas'],
  alternates: { canonical: 'https://spinthechoice.com/blog/brain-breaks-office-productivity' },
  openGraph: {
    title: 'Quick Brain Breaks for the Office – Boost Employee Productivity',
    description: 'Brain breaks for knowledge workers — desk stretches, mindfulness micro-breaks, and social resets that improve focus without killing momentum.',
    url: 'https://spinthechoice.com/blog/brain-breaks-office-productivity',
    type: 'article',
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
