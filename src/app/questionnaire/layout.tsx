import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questionnaire Projet Web | Obtenez votre Devis Personnalisé | OSOM',
  description: 'Remplissez notre questionnaire pour obtenir un devis personnalisé pour votre projet web. Analyse gratuite et conseil expert en 48h.',
  keywords: 'questionnaire projet web, devis site web, estimation projet digital valais',
  alternates: {
    canonical: 'https://www.osom.ch/questionnaire',
  },
}

export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
