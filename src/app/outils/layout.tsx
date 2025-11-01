import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outils Marketing Digital Gratuits | Audit SEO & ROI Calculator | OSOM',
  description: 'Outils gratuits marketing digital Valais. Audit SEO complet + Calculateur ROI. Analysez votre site web et découvrez votre potentiel de croissance digitale.',
  keywords: 'audit seo gratuit, calculateur roi, outils marketing digital, analyse site web, seo valais',
  alternates: {
    canonical: 'https://www.osom.ch/outils',
  },
}

export default function OutilsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
