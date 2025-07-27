import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développeur x Claude Code | Collaboration IA Révolutionnaire - osom',
  description: 'Première collaboration officielle Développeur Humain x Claude Code. Marketing humain amplifiée par IA. 2.4M vues Culture Peinture, 14x ROI. Synergie inédite.',
  keywords: 'développeur claude code, collaboration humain ia, marketing humain intelligence artificielle, claude 4 sonnet, programmation ia créative',
  openGraph: {
    title: 'Développeur x Claude Code | Synergie Humain-IA Inédite',
    description: 'Marketing humain x Puissance Claude = Résultats extraordinaires. 2.4M vues documentées.',
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