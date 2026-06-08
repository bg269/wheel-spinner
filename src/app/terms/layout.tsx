import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for using Spin The Choice – free online wheel spinner. ' +
    'Read our user agreement, acceptable use policy, and disclaimer.',
  alternates: { canonical: 'https://spinthechoice.com/terms' },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
