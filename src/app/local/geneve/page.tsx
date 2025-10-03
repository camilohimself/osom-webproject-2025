import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('geneve')

export const metadata: Metadata = {
  title: 'Développeur Web Genève | Sites Corporate Multilingues | OSOM',
  description: 'Développeur web Genève spécialisé finance & corporate international. Sites multilingues (FR/EN/DE), architecture entreprise, garanties contractuelles.',
  keywords: 'développeur web genève, site sur mesure genève, site multilingue genève, développement corporate genève, architecture entreprise genève, seo international genève, développeur finance geneva, osom genève',
  openGraph: {
    title: 'Développeur Web Genève | Sites Corporate Multilingues | OSOM',
    description: 'Développeur web Genève spécialisé finance & corporate international. Sites multilingues (FR/EN/DE), architecture entreprise.',
    url: 'https://osom.ch/local/geneve',
    siteName: 'OSOM - Développeur Web Craftsman',
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
