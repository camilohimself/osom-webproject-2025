import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('valais')

export const metadata: Metadata = {
  title: 'Développeur web Valais | Sites sur mesure Next.js & SEO local | OSOM',
  description: 'Développeur web Valais spécialisé projets complexes sur mesure. Sites 25-60 pages, API, dashboards, SEO local. Next.js expert. H-Sechement, Maîtrise Cathédrale.',
  keywords: 'développeur web valais, site sur mesure valais, next.js valais, seo local valais, agence web valais, développement web sion, api integration valais, dashboard valais, osom valais',
  openGraph: {
    title: 'Développeur web Valais | Sites sur mesure Next.js & SEO local | OSOM',
    description: 'Développeur web Valais spécialisé projets complexes sur mesure. Sites 25-60 pages, API, dashboards, SEO local. Next.js expert.',
    url: 'https://osom.ch/local/valais',
    siteName: 'OSOM - Développeur web Valais',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://osom.ch/local/valais',
  },
  other: {
    'geo.region': 'CH-VS',
    'geo.placename': 'Valais',
    'ICBM': '46.2276, 7.3588',
  }
}

export default function ValaisPage() {
  return <CityPageTemplate {...cityData} />
}