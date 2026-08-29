import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { images } from '@/data/images';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Heaven Furniture Mart | Bespoke Furniture in Chattogram',
  description:
    'Custom furniture crafted around you. Bespoke sofas, beds, dining sets & interior styling in Chattogram, Bangladesh. Free design consultation.',
  keywords: [
    'custom furniture Chattogram',
    'bespoke furniture Bangladesh',
    'luxury furniture Chattogram',
    'custom sofa Bangladesh',
    'interior styling Chattogram',
    'Heaven Furniture Mart',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: 'Heaven Furniture Mart | Bespoke Furniture in Chattogram',
    description:
      'Custom furniture crafted around you. Bespoke sofas, beds, dining sets & interior styling in Chattogram, Bangladesh. Free design consultation.',
    images: [
      {
        url: images.ogImage,
        width: 1200,
        height: 630,
        alt: 'Heaven Furniture Mart — Bespoke Furniture Showroom Chattogram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heaven Furniture Mart | Bespoke Furniture in Chattogram',
    description:
      'Custom furniture crafted around you. Bespoke sofas, beds, dining sets & interior styling in Chattogram, Bangladesh. Free design consultation.',
    images: [images.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1A2421',
  width: 'device-width',
  initialScale: 1,
};

/**
 * LocalBusiness (FurnitureStore) structured data.
 * Deviations from the brief, on purpose:
 *  - telephone is E.164 (+8801960481983), not the display format with a dash
 *  - sameAs entries carry the https:// scheme, which schema.org requires
 *  - image is an absolute URL built from NEXT_PUBLIC_SITE_URL
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  image: `${site.url}${images.showroom}`,
  description:
    'Bespoke furniture and interior styling in Chattogram, Bangladesh. Custom sofas, beds, dining sets and office pieces built to your space.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressCountry: site.address.country,
  },
  telephone: site.phoneE164,
  email: site.email,
  founder: {
    '@type': 'Person',
    name: site.founder,
  },
  foundingDate: site.foundingDate,
  areaServed: 'Chattogram, Bangladesh',
  sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ivory font-sans text-coffee antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brass focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-charcoal"
        >
          Skip to content
        </a>

        {children}

        <script
          type="application/ld+json"
          // Static object defined above - no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
