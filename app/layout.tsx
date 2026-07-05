import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Gia Tattoo Artist Christchurch | Black & Grey Micro Realism',
    template: '%s | Astoria Ink',
  },
  description:
    'Gia is a Christchurch tattoo artist at Astoria Ink specialising in black and grey tattoos, micro realism, fine line, animal tattoos, and pet-inspired designs.',
  keywords: [
    'Astoria Ink',
    'tattoo artist Christchurch',
    'tattoo chch',
    'Christchurch tattoo artist',
    'animal tattoos Christchurch',
    'animal tattoo artist Christchurch',
    'pet portrait tattoo Christchurch',
    'fine line tattoos',
    'micro realism tattoos',
    'black and grey tattoos',
    'Christchurch tattoos',
  ],
  metadataBase: new URL('https://www.astoria-ink.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gia Tattoo Artist Christchurch | Black & Grey Micro Realism',
    description:
      'Black and grey tattoos, micro realism, fine line, animal tattoos, and pet-inspired work by Gia at Astoria Ink in Christchurch.',
    type: 'website',
    url: 'https://www.astoria-ink.com',
    siteName: 'Astoria Ink',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gia Tattoo Artist Christchurch | Black & Grey Micro Realism',
    description:
      'Black and grey tattoos, micro realism, fine line, animal tattoos, and pet-inspired work by Gia at Astoria Ink in Christchurch.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
