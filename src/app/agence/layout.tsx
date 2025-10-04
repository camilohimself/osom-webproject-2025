import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence Marketing Valais OSOM - 1239 Recherches/Mois | Expertise N°1',
  description: 'Agence Marketing VALAIS : 1239 recherches/mois → Expertise confirmée. Agence marketing digital Valais révolutionnaire. Marketing Humain × Claude IA. Résultats 14x supérieurs.',
  keywords: 'agence marketing valais, agence marketing digital valais, agence de marketing valais, marketing digital valais, agence communication valais, marketing valais, agence digitale valais',
  openGraph: {
    title: 'Agence Marketing Valais N°1 - Marketing IA Révolutionnaire',
    description: 'Agence Marketing VALAIS : 1239 recherches mensuelles confirment notre leadership. Marketing Humain × IA = 8x plus efficace.',
    url: 'https://www.osom.ch/agence',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.osom.ch/agence',
  },
  other: {
    'geo.region': 'CH-VS',
    'geo.placename': 'Valais, Switzerland',
  }
}

export default function AgenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}