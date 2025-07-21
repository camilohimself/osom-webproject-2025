import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('sion')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence marketing digital sion, agence web sion, SEO sion, création site internet sion, marketing digital capitale valais, osom sion',
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: 'https://osom.ch/local/sion',
    siteName: 'osom Agence Marketing Digital',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://osom.ch/local/sion',
  },
  other: {
    'geo.region': 'CH-VS',
    'geo.placename': 'Sion',
    'ICBM': '46.2277, 7.3588',
  }
}

export default function SionPage() {
  return <CityPageTemplate {...cityData} />
}