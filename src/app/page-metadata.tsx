import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OSOM - Marketing Humain × Puissance IA | Agence Web Valais Révolutionnaire',
  description: 'Première agence VALAIS : Marketing Humain × Claude IA = 8x plus efficace que publicité classique. 688 vs 49 conversions documentées. Collaboration Homme-IA révolutionnaire.',
  keywords: 'marketing humain intelligence artificielle, claude ia agence, osom valais, marketing révolutionnaire, collaboration humain ia, agence web valais innovante, résultats 14x supérieurs, conversion organique',
  openGraph: {
    title: 'OSOM - Marketing Humain × Puissance IA Révolutionnaire',
    description: 'Première collaboration officielle Agence × Claude IA. Résultats vérifiés : 688 conversions vs 49 classique. Révolution marketing VALAIS.',
    url: 'https://www.osom.ch',
    siteName: 'OSOM',
    locale: 'fr_CH',
    type: 'website',
    images: [
      {
        url: '/osom-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OSOM - Marketing Humain × Puissance IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSOM - Marketing Humain × Puissance IA',
    description: '8x plus efficace que publicité classique. Collaboration révolutionnaire Homme × Claude IA.',
    images: ['/osom-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.osom.ch',
    languages: {
      'fr-CH': 'https://www.osom.ch',
      'de-CH': 'https://www.osom.ch/de',
      'en': 'https://www.osom.ch/en',
    },
  },
  other: {
    'geo.region': 'CH-VS',
    'geo.placename': 'Valais, Switzerland',
    'geo.position': '46.2276;7.3597',
    'ICBM': '46.2276, 7.3597',
  },
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
}