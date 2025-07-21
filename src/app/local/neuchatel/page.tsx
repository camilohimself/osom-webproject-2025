import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('neuchatel')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence marketing digital neuchâtel, agence web neuchâtel, SEO neuchâtel, création site internet neuchâtel, marketing digital horlogerie, microtechnique digital, OSOM neuchâtel',
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: 'https://osom.ch/local/neuchatel',
    siteName: 'OSOM Agence Marketing Digital',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://osom.ch/local/neuchatel',
  },
  other: {
    'geo.region': 'CH-NE',
    'geo.placename': 'Neuchâtel',
    'ICBM': '46.9930, 6.9318',
  }
}

export default function NeuchatelPage() {
  return <CityPageTemplate {...cityData} />
}