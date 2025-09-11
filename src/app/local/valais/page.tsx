import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('valais')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence web valais, création site web valais, développeur valais, SEO tourisme alpin, e-commerce vins valais, site internet artisanat valais, marketing digital sion martigny, osom valais',
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