import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('lausanne')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence marketing digital lausanne, agence web lausanne, SEO lausanne, création site internet lausanne, marketing digital vaud, startup lausanne, osom lausanne',
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: 'https://osom.ch/local/lausanne',
    siteName: 'osom Agence Marketing Digital',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://osom.ch/local/lausanne',
  },
  other: {
    'geo.region': 'CH-VD',
    'geo.placename': 'Lausanne',
    'ICBM': '46.5197, 6.6323',
  }
}

export default function LausannePage() {
  return <CityPageTemplate {...cityData} />
}