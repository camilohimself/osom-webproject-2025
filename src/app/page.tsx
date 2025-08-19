import Link from 'next/link'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, type Locale } from '@/lib/i18n'
import { GraphiqueComparatif } from '@/components/ui'
import dynamic from 'next/dynamic'

// Lazy loading pour optimiser la fluidité
const HorizontalBarsChart = dynamic(() => import('@/components/ui/HorizontalBarsChart'), {
  loading: () => <div className="h-32 bg-purple-400/5 rounded-2xl animate-pulse" />
})
const CTRCircularChart = dynamic(() => import('@/components/ui/CTRCircularChart'), {
  loading: () => <div className="h-64 bg-purple-400/5 rounded-2xl animate-pulse" />
})
const DataLineChart = dynamic(() => import('@/components/ui/DataLineChart'), {
  loading: () => <div className="h-32 bg-cyan-400/5 rounded-2xl animate-pulse" />
})
const GaugeChart = dynamic(() => import('@/components/ui/GaugeChart'), {
  loading: () => <div className="h-32 bg-green-400/5 rounded-2xl animate-pulse" />
})
import { cookies } from 'next/headers'
import { getHomepageStructuredData } from '@/lib/structured-data'
import HeroSwissOSOM from '@/components/homepage/HeroSwissOSOM'

// Lazy loading pour les Piliers Swiss (composants client)
const PilierSwiss1 = dynamic(() => import('@/components/homepage/PilierSwiss1'), {
  loading: () => <div className="h-96 bg-purple-400/5 rounded-2xl animate-pulse" />
})
const PilierSwiss2 = dynamic(() => import('@/components/homepage/PilierSwiss2'), {
  loading: () => <div className="h-96 bg-cyan-400/5 rounded-2xl animate-pulse" />
})
const PilierSwiss3 = dynamic(() => import('@/components/homepage/PilierSwiss3'), {
  loading: () => <div className="h-96 bg-green-400/5 rounded-2xl animate-pulse" />
})
import AnimatedElement from '@/components/ui/AnimatedElement'
import InteractiveBackground from '@/components/ui/InteractiveBackground'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import MagneticButton from '@/components/ui/MagneticButton'
import IconeOSOM from '@/components/IconeOSOM'

export const metadata: Metadata = {
  title: 'Agence Web Valais OSOM | Marketing IA × Création Site Internet',
  description: 'Agence Web VALAIS N°1 : 1589 recherches "agence web valais" → Expertise confirmée. Marketing Humain × Claude IA. Création site internet, SEO, marketing digital révolutionnaire.',
  keywords: 'agence web valais, création site internet valais, seo valais, marketing digital valais, agence marketing valais, référencement valais, agence digitale valais, site web valais',
  openGraph: {
    title: 'OSOM - Marketing Humain × Puissance IA Révolutionnaire',
    description: 'Première collaboration officielle Agence × Claude IA. Résultats vérifiés : 688 conversions vs 49 classique. Révolution marketing VALAIS.',
    url: 'https://osom.ch',
    siteName: 'OSOM',
    locale: 'fr_CH',
    type: 'website',
    images: [
      {
        url: '/osom-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OSOM - Marketing Humain × Puissance IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSOM - Marketing Humain × Puissance IA',
    description: '12x plus efficace que publicité classique. Collaboration révolutionnaire Homme × Claude IA.',
    images: ['/osom-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://osom.ch',
    languages: {
      'fr-CH': 'https://osom.ch',
      'de-CH': 'https://osom.ch/de',
      'en': 'https://osom.ch/en',
    },
  },
  other: {
    'geo.region': 'CH-VS',
    'geo.placename': 'Valais, Switzerland',
    'geo.position': '46.2276;7.3597',
    'ICBM': '46.2276, 7.3597',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function Home() {
  // Get locale from cookie (same logic as layout.tsx)
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  
  let currentLocale = defaultLocale
  if (localeCookie && ['fr', 'en', 'de'].includes(localeCookie)) {
    currentLocale = localeCookie as Locale
  }

  const dictionary = await getDictionary(currentLocale)
  const jsonLd = getHomepageStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black relative">
      {/* Interactive Background Layer */}
      <InteractiveBackground />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      {/* Hero Swiss OSOM Section */}
      <HeroSwissOSOM dictionary={dictionary.home} />

      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.15'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.1}>
            <div className="text-center mb-24">
              <div className="flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">NOTRE MÉTHODE EN 3 PILIERS</span>
              </div>
              
              <div className="mb-12 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                  Nous transformons vos
                </div>
                <div className="text-6xl md:text-8xl font-black text-yellow-400 leading-none mb-4 relative">
                  DONNÉES VÉRIFIÉES
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 animate-pulse" />
                </div>
                <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
                  en
                </div>
                <div className="text-7xl md:text-9xl font-black text-green-400 leading-none mb-3">
                  RÉSULTATS COMMERCIAUX
                </div>
                <div className="text-2xl md:text-3xl font-light text-white">
                  mesurables et durables
                </div>
              </div>
              
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-yellow-400 font-semibold">Création augmentée</span> (contenus qui émeuvent et convertissent), 
                <span className="text-cyan-400 font-semibold">Insights actionnables</span> (décisions guidées par GA4), 
                <span className="text-green-400 font-semibold">Tech supérieure</span> (Core Web Vitals 95+).
              </p>
            </div>
          </AnimatedElement>

          <div className="space-y-20">
            
            <AnimatedElement type="slideUp" delay={0.2}>
              <div className="backdrop-blur-sm border border-purple-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group">
                <PilierSwiss1 />
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="slideUp" delay={0.4}>
              <div className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden min-h-[800px] hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 group">
                <PilierSwiss2 />
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="slideUp" delay={0.6}>
              <div className="backdrop-blur-sm border border-green-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-400/10 transition-all duration-500 group">
                <PilierSwiss3 />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section - Agence Créative Premium */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Gradient Créatif */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/8 via-purple-500/5 to-green-400/8"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h120v120H0z'/%3E%3Cpath d='m30 30h60v60H30z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Titre créatif avec typographie audacieuse */}
          <div className="mb-12 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {/* Ligne 1: "Prêt à structurer" - taille moyenne */}
            <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
              Prêt à structurer votre
            </div>
            
            {/* Ligne 2: "ACQUISITION" - grande taille jaune */}
            <div className="text-7xl md:text-8xl font-black text-yellow-400 leading-none mb-4">
              ACQUISITION
            </div>
            
            {/* Ligne 3: "avec" - petite taille */}
            <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
              avec
            </div>
            
            {/* Ligne 4: "MÉTHODE OSOM" - très grande taille verte */}
            <div className="text-6xl md:text-7xl font-black text-green-400 leading-none mb-6">
              MÉTHODE OSOM
            </div>
            
            {/* Ligne 5: Question créative */}
            <div className="text-2xl md:text-3xl font-light text-white">
              mesurable et durable ?
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            <span className="text-yellow-400 font-semibold">Visibilité locale</span>, 
            <span className="text-cyan-400 font-semibold">leads qualifiés</span>, 
            <span className="text-green-400 font-semibold">reporting GA4 clair</span>. 
            Parlons objectifs, délais, KPI — puis livrons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-xl px-12 py-6 relative overflow-hidden group"
            >
              <span className="relative z-10">Consultation 30 min offerte</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </MagneticButton>
            <MagneticButton
              href="/realisations"
              variant="secondary"
              className="text-xl px-12 py-6 border-2 border-gray-600 hover:border-purple-400 transition-all duration-300"
            >
              Voir Nos Résultats
            </MagneticButton>
          </div>

          {/* Trust Indicators Créatifs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <IconeOSOM type="star" size={24} color="purple" ariaLabel="Excellence créative" />
                <span className="text-purple-400 font-semibold ml-2">Excellence Créative</span>
              </div>
              <p className="text-gray-300 text-sm">25% CTR vs 2-3% industrie</p>
            </div>
            
            <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <IconeOSOM type="chart" size={24} color="cyan" ariaLabel="Résultats mesurables" />
                <span className="text-cyan-400 font-semibold ml-2">Résultats Mesurables</span>
              </div>
              <p className="text-gray-300 text-sm">688 conversions vs 49 traditionnelles</p>
            </div>
            
            <div className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <IconeOSOM type="shield" size={24} color="yellow" ariaLabel="Engagement qualité" />
                <span className="text-yellow-400 font-semibold ml-2">Engagement Qualité</span>
              </div>
              <p className="text-gray-300 text-sm">68.6% vs 44.6% trafic standard</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}