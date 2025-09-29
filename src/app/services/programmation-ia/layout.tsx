import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmation IA Valais | Solutions intelligence artificielle | osom',
  description: 'Programmation IA Valais : solutions intelligence artificielle, automatisation, dashboards prédictifs. Développement IA sur-mesure PME. Audit gratuit.',
  keywords: 'développeur web valais, solutions techniques, automatisations, programmation avancée, développement sur-mesure',
  openGraph: {
    title: 'Développement Web Avancé | Solutions Techniques',
    description: 'Solutions techniques avancées et développement sur-mesure. Résultats mesurables et performance garantie.',
    type: 'website',
  }
}

export default function ProgrammationIALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}