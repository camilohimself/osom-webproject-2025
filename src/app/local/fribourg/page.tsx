import { Metadata } from 'next'
import CityPageTemplate from '@/components/templates/CityPageTemplate'
import { getCityPageData } from '@/data/swissCities'

const cityData = getCityPageData('fribourg')

export const metadata: Metadata = {
  title: 'Développeur Web Fribourg | E-commerce sur Mesure | OSOM',
  description: 'Développeur web Fribourg spécialisé e-commerce artisanal & terroir. Boutiques Next.js performantes, paiements Stripe/Twint, SEO local.',
  keywords: 'développeur web fribourg, e-commerce fribourg, boutique en ligne fribourg, site sur mesure fribourg, paiement twint fribourg, seo local fribourg, développeur artisan gruyère, osom fribourg',
  openGraph: {
    title: 'Développeur Web Fribourg | E-commerce sur Mesure | OSOM',
    description: 'Développeur web Fribourg spécialisé e-commerce artisanal & terroir. Boutiques Next.js performantes, paiements Stripe/Twint.',
    url: 'https://www.osom.ch/local/fribourg',
    siteName: 'OSOM - Développeur Web Craftsman',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.osom.ch/local/fribourg',
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