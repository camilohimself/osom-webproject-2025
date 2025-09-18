import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développement Web Avancé | Solutions Techniques Personnalisées - osom',
  description: 'Développement web technique avancé. Solutions sur-mesure et automatisations intelligentes. Performance mesurable et résultats concrets.',
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