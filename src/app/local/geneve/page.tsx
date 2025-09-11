import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('geneve')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence web genève premium, création site luxury genève, développement web banque privée, site internet wealth management, SEO finance genève, marketing digital UHNW geneva, web agency international geneva, osom genève',
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