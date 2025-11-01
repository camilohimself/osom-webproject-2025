import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Insights Marketing Digital & IA | OSOM Valais',
  description: 'Blog OSOM : stratégies marketing digital, SEO local, IA business, case studies exclusifs. Insights terrain pour PME Valais et Suisse romande.',
  keywords: 'blog marketing digital, seo valais, ia business, stratégie digitale, case studies pme',
  alternates: {
    canonical: 'https://www.osom.ch/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
