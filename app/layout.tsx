import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://max-tattoo-site.vercel.app').replace(/\/$/, '');
const astoriaInkUrl = 'https://www.astoriaink.co.nz/';
const maxInstagramUrl = 'https://www.instagram.com/max.tatz/';
const maxTikTokUrl = 'https://www.tiktok.com/@max.tatz';
const studioAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'The SQ, Level 2, 270 St Asaph Street',
  addressLocality: 'Christchurch Central',
  addressRegion: 'Canterbury',
  postalCode: '8011',
  addressCountry: 'NZ',
};

export const metadata: Metadata = {
  title: {
    default: 'Max Tattoo Artist Christchurch | Black & Grey Realism',
    template: '%s | Max Tattoos',
  },
  description:
    'Max is a Christchurch tattoo artist at Astoria Ink specialising in black and grey realism, large-scale custom tattoos, portraits, wildlife, dark realism, and detailed custom designs.',
  keywords: [
    'Astoria Ink',
    'Max tattoo artist Christchurch',
    'Max tattoos Christchurch',
    'tattoo artist Christchurch',
    'tattoo chch',
    'Christchurch tattoo artist',
    'black and grey realism Christchurch',
    'black and grey tattoo artist Christchurch',
    'large scale tattoo Christchurch',
    'realism tattoo artist Christchurch',
    'portrait tattoo Christchurch',
    'wildlife tattoo Christchurch',
    'custom tattoo designs Christchurch',
    'dark realism tattoo Christchurch',
    'black and grey tattoos',
    'Christchurch tattoos',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Max Tattoo Artist Christchurch | Black & Grey Realism',
    description:
      'Black and grey realism, large-scale custom tattoos, portraits, wildlife, and dark realism by Max at Astoria Ink in Christchurch.',
    type: 'website',
    url: siteUrl,
    siteName: 'Max Tattoos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Tattoo Artist Christchurch | Black & Grey Realism',
    description:
      'Black and grey realism, large-scale custom tattoos, portraits, wildlife, and dark realism by Max at Astoria Ink in Christchurch.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Max Tattoos',
      url: siteUrl,
      inLanguage: 'en-NZ',
      description:
        'Artist-focused tattoo portfolio and booking site for Max, a Christchurch black and grey realism tattoo artist at Astoria Ink.',
      publisher: {
        '@id': `${siteUrl}/#max`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#max`,
      name: 'Max',
      url: siteUrl,
      image: `${siteUrl}/artist/max-main-portrait.jpg`,
      jobTitle: 'Tattoo Artist',
      worksFor: {
        '@id': `${astoriaInkUrl}#tattoo-parlor`,
      },
      workLocation: {
        '@id': `${astoriaInkUrl}#tattoo-parlor`,
      },
      sameAs: [maxInstagramUrl, maxTikTokUrl],
      knowsAbout: [
        'Black and grey realism tattoos',
        'Black and grey tattoos',
        'Large-scale custom tattoos',
        'Portrait tattoos',
        'Wildlife tattoos',
        'Dark realism tattoos',
        'Custom tattoo designs',
        'Christchurch tattoos',
      ],
      mainEntityOfPage: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'TattooParlor',
      '@id': `${astoriaInkUrl}#tattoo-parlor`,
      name: 'Astoria Ink',
      url: astoriaInkUrl,
      address: studioAddress,
      areaServed: {
        '@type': 'City',
        name: 'Christchurch',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
