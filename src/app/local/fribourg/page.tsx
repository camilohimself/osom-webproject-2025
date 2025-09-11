import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('fribourg')

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: 'agence web fribourg bilingue, création site agroalimentaire fribourg, e-commerce bio gruyère, site internet producteur local, SEO terroir AOC, marketing digital FR DE, web agency circuits courts, osom fribourg',
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: 'https://osom.ch/local/fribourg',
    siteName: 'osom Agence Marketing Digital',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://osom.ch/local/fribourg',
  },
  other: {
    'geo.region': 'CH-FR',
    'geo.placename': 'Fribourg',
    'ICBM': '46.8059, 7.1525',
  }
}

export default function FribourgPage() {
  return <CityPageTemplate {...cityData} />
}