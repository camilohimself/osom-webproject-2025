import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('neuchatel')

export const metadata: Metadata = {
  title: 'Développeur Web Neuchâtel | Sites B2B Techniques | OSOM',
  description: 'Développeur web Neuchâtel spécialisé B2B technique & industriel. Portfolio projets, lead generation qualifiée, SEO B2B spécialisé.',
  keywords: 'développeur web neuchâtel, site b2b neuchâtel, site sur mesure neuchâtel, portfolio technique neuchâtel, lead generation b2b neuchâtel, seo industriel arc jurassien, développeur microtechnique, osom neuchâtel',
  openGraph: {
    title: 'Développeur Web Neuchâtel | Sites B2B Techniques | OSOM',
    description: 'Développeur web Neuchâtel spécialisé B2B technique & industriel. Portfolio projets, lead generation qualifiée.',
    url: 'https://osom.ch/local/neuchatel',
    siteName: 'OSOM - Développeur Web Craftsman',
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