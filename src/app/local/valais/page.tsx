import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('valais')

export const metadata: Metadata = {
  title: 'Référencement SEO Valais | Agence SEO Sion Monthey Martigny | OSOM',
  description: 'Référencement SEO Valais spécialisé SEO local. Expert SEO Sion, Monthey, Sierre, Martigny. Consultant SEO Valais avec résultats mesurables. Développeur web + SEO stratégique.',
  keywords: 'référencement seo valais, seo valais, référencement valais, agence seo valais, expert seo valais, consultant seo valais, référencement seo sion, seo sion, référencement local valais, référencement seo monthey, seo monthey, développeur web valais',
  openGraph: {
    title: 'Développeur web Valais | Sites sur mesure Next.js & SEO local | OSOM',
    description: 'Développeur web Valais spécialisé projets complexes sur mesure. Sites 25-60 pages, API, dashboards, SEO local. Next.js expert.',
    url: 'https://www.osom.ch/local/valais',
    siteName: 'OSOM - Développeur web Valais',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.osom.ch/local/valais',
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