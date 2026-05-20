import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Spin The Choice',
  description: 'A fast, beautiful wheel spinner. Add names, spin, pick a winner.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1, // prevents iOS auto-zoom on input focus
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
