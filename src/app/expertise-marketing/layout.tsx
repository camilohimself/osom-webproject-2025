import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertise Marketing Digital | Méthodologie OSOM PME Valais',
  description: 'Découvrez la méthodologie OSOM pour transformer votre PME en leader digital. Diagnostic 360°, analyse concurrentielle, stratégie SEO local Valais.',
  keywords: 'expertise marketing digital, méthodologie seo, stratégie digitale valais, consultant marketing pme, framework seo local',
  alternates: {
    canonical: 'https://www.osom.ch/expertise-marketing',
  },
}

export default function ExpertiseMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
