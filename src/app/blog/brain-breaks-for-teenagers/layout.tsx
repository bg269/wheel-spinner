import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Brain Breaks for Teenagers – Keep High School Students Engaged',
  description: 'Brain breaks designed for high school students — movement, creative, social, and mindfulness breaks that work with teen psychology, not against it.',
  keywords: ['brain breaks for teenagers', 'brain breaks high school', 'teen brain breaks', 'high school brain break ideas', 'brain breaks older students'],
  alternates: { canonical: 'https://spinthechoice.com/blog/brain-breaks-for-teenagers' },
  openGraph: {
    title: 'Brain Breaks for Teenagers – Keep High School Students Engaged',
    description: 'Brain break ideas built for teenagers — not watered-down primary activities, but breaks that fit the way teen brains actually work.',
    url: 'https://spinthechoice.com/blog/brain-breaks-for-teenagers',
    type: 'article',
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
