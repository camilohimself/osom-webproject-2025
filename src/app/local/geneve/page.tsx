import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('geneve')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence marketing digital genève, agence web genève, SEO genève, création site internet genève, marketing digital luxury geneva, finance geneva, osom genève',
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: 'https://osom.ch/local/geneve',
    siteName: 'osom Agence Marketing Digital',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://osom.ch/local/geneve',
  },
  other: {
    'geo.region': 'CH-GE',
    'geo.placename': 'Genève',
    'ICBM': '46.2044, 6.1432',
  }
}

export default function GenevePage() {
  return <CityPageTemplate {...cityData} />
}