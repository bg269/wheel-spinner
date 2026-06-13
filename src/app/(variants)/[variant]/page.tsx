import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { VARIANTS, getVariant, type VariantConfig } from '@/lib/variants';
import { nanoid } from '@/lib/utils';
import VariantPageClient from './VariantPageClient';

const SITE = 'https://spinthechoice.com';

interface Props {
  params: Promise<{ variant: string }>;
}

export function generateStaticParams() {
  return VARIANTS.map((v) => ({ variant: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant: slug } = await params;
  const config = getVariant(slug);
  if (!config) return {};
  return {
    title: { absolute: config.metaTitle },
    description: config.metaDescription,
    alternates: { canonical: `${SITE}/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `${SITE}/${slug}`,
    },
  };
}

export default async function VariantPage({ params }: Props) {
  const { variant: slug } = await params;
  const config = getVariant(slug);
  if (!config) return notFound();

  const initialItems = config.entries.map((e) => ({
    id: nanoid(),
    name: e.name,
    color: e.color,
  }));

  const relatedConfigs = config.related
    .map((s) => VARIANTS.find((v) => v.slug === s))
    .filter((v): v is VariantConfig => v !== undefined)
    .map((v) => ({ slug: v.slug, h1: v.h1 }));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.h1,
    url: `${SITE}/${slug}`,
    description: config.metaDescription,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <VariantPageClient
        config={config}
        initialItems={initialItems}
        relatedConfigs={relatedConfigs}
      />
    </>
  );
}
