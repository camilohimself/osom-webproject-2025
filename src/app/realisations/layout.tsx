import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio & Réalisations Web | Projets Premium Valais | OSOM',
  description: 'Découvrez nos réalisations web premium. Sites performants avec résultats mesurables. Maîtrise Cathédrale, LMDI, portfolios artistiques. Performance garantie.',
  keywords: 'portfolio web valais, réalisations site web, projets web suisse, case studies digital, agence web portfolio',
  alternates: {
    canonical: 'https://www.osom.ch/realisations',
  },
}

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
