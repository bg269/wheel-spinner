import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Spin The Choice team. Send us a message for bug reports, feature requests, advertising enquiries, or any other questions.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
