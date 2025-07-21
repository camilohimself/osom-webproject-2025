import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('valais')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence marketing digital valais, agence web valais, SEO valais, création site internet valais, marketing digital sion, osom valais',
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: 'https://osom.ch/local/valais',
    siteName: 'osom Agence Marketing Digital',
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