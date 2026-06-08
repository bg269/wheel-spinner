import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ─── Viewport (separate export — metadata.viewport is deprecated) ─────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // prevents iOS auto-zoom on input focus
};

// ─── Site-wide metadata ───────────────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://spinthechoice.com';
const TITLE = 'Spin The Choice – Beautiful Wheel Spinner for Random Decisions';
const DESCRIPTION =
  'Free online wheel spinner for picking names, making decisions, and playing games. ' +
  'Customizable colors, sound effects, dark mode. ' +
  'Perfect for classrooms, giveaways, and parties.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    // Individual pages can set: export const metadata = { title: 'Gallery' }
    // → renders as "Gallery | Spin The Choice"
    template: '%s | Spin The Choice',
  },

  description: DESCRIPTION,

  keywords: [
    'wheel spinner',
    'random picker',
    'name selector',
    'decision maker',
    'classroom name picker',
    'random student selector',
    'online decision spinner',
    'spin the wheel',
    'name picker wheel',
    'giveaway spinner',
    'random wheel',
    'free wheel spinner',
  ],

  authors: [{ name: 'Spin The Choice', url: SITE_URL }],
  creator: 'Spin The Choice',

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Spin The Choice',
    title: TITLE,
    description: DESCRIPTION,
    // opengraph-image.tsx in this directory is picked up automatically
  },

  // ── Twitter / X card ───────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    // twitter:image is also resolved from opengraph-image.tsx automatically
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },
};

// ─── JSON-LD structured data ─────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Spin The Choice',
  url: SITE_URL,
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires a modern browser with JavaScript enabled',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Customizable wheel entries',
    'Color picker for each item',
    'Sound effects',
    'Dark mode',
    'Shareable wheel links',
    'Templates for classrooms and games',
  ],
};

// ─── Root layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
