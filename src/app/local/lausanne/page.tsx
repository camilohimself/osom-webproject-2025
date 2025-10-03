import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('lausanne')

export const metadata: Metadata = {
  title: 'Développeur Web Lausanne | Sites Next.js sur Mesure | OSOM',
  description: 'Développeur web Lausanne spécialisé startups tech & SaaS. Sites Next.js performants, API integrations, dashboards. Expert Next.js 15 App Router.',
  keywords: 'développeur web lausanne, site sur mesure lausanne, next.js lausanne, développement saas vaud, api integration lausanne, dashboard analytics vaud, développeur startup epfl, osom lausanne',
  openGraph: {
    title: 'Développeur Web Lausanne | Sites Next.js sur Mesure | OSOM',
    description: 'Développeur web Lausanne spécialisé startups tech & SaaS. Sites Next.js performants, API integrations, dashboards.',
    url: 'https://osom.ch/local/lausanne',
    siteName: 'OSOM - Développeur Web Craftsman',
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