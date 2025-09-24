import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, type Locale } from '@/lib/i18n'
import dynamic from 'next/dynamic'

// Lazy load des charts pour améliorer FCP/LCP
const HorizontalBarsChart = dynamic(() => import('@/components/ui/HorizontalBarsChart'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />
})
const CTRCircularChart = dynamic(() => import('@/components/ui/CTRCircularChart'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />
})
const DataLineChart = dynamic(() => import('@/components/ui/DataLineChart'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />
})
const GaugeChart = dynamic(() => import('@/components/ui/GaugeChart'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />
})
import { cookies } from 'next/headers'
import { getHomepageStructuredData } from '@/lib/structured-data'
import HeroSwissOSOMHybrid from '@/components/homepage/HeroSwissOSOMHybrid'

// Lazy loading Piliers Swiss optimisé
const PilierSwiss1 = dynamic(() => import('@/components/homepage/PilierSwiss1'), {
  loading: () => <div className="h-96 bg-purple-400/5 rounded-2xl animate-pulse" />
})
const PilierSwiss2 = dynamic(() => import('@/components/homepage/PilierSwiss2'), {
  loading: () => <div className="h-96 bg-cyan-400/5 rounded-2xl animate-pulse" />
})
const PilierSwiss3 = dynamic(() => import('@/components/homepage/PilierSwiss3'), {
  loading: () => <div className="h-96 bg-green-400/5 rounded-2xl animate-pulse" />
})
// Components critiques - gardés en import direct
import AnimatedElement from '@/components/ui/AnimatedElement'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import IconeOSOM from '@/components/IconeOSOM'
import LogoOSOM from '@/components/ui/LogoOSOM'

// Components non-critiques - lazy load
const InteractiveBackground = dynamic(() => import('@/components/ui/InteractiveBackground'), {
  loading: () => null
})
const MagneticButton = dynamic(() => import('@/components/ui/MagneticButton'))

export const metadata: Metadata = {
  title: 'Agence web Valais OSOM | Marketing IA × Création site internet',
  description: 'Agence Web VALAIS N°1 : 1589 recherches "agence web valais" → Expertise confirmée. Marketing data-driven avancé. Création site internet, SEO, marketing digital révolutionnaire.',
  keywords: 'agence web valais, création site internet valais, seo valais, marketing digital valais, agence marketing valais, référencement valais, agence digitale valais, site web valais',
  openGraph: {
    title: 'OSOM - Marketing humain × Puissance IA révolutionnaire',
    description: 'Agence marketing data-driven VALAIS. Résultats vérifiés et performances mesurables. Révolution marketing VALAIS.',
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
    description: 'Performance mesurable supérieure aux méthodes classiques. Approche data-driven éprouvée.',
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
      <HeroSwissOSOMHybrid dictionary={dictionary.home} />
      
      {/* Approche directe - pas de comparaisons défensives */}

      <section className="py-16 lg:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.15'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.1}>
            {/* Mobile: Version CTA directe */}
            <div className="lg:hidden text-center mb-12">
              <div className="text-2xl font-bold text-white mb-4">
                Prêt à <span className="text-yellow-400">digitaliser</span> votre business ?
              </div>
              <div className="text-gray-300 mb-8">
                Site Next.js premium en 15-45 jours
              </div>
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <MagneticButton
                  href="/contact"
                  variant="primary"
                  className="w-full text-lg px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Démarrer mon projet
                </MagneticButton>
                <div className="text-yellow-400 text-sm">✓ Audit gratuit • ✓ Devis transparent</div>
              </div>
            </div>

            {/* Desktop: Méthode complète */}
            <div className="hidden lg:block text-center mb-24">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6">
                Notre méthode <span className="text-yellow-400">OSOM</span>
              </div>

              <div className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
                3 étapes simples pour transformer votre présence digitale
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-3xl mx-auto mb-6">1</div>
                  <div className="text-2xl font-bold text-white mb-4">Brief 30 min</div>
                  <div className="text-gray-300 mb-4">Nous analysons votre métier et vos besoins</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Audit technique gratuit</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Analyse concurrentielle</div>
                </div>

                <div className="bg-cyan-400/5 border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-3xl mx-auto mb-6">2</div>
                  <div className="text-2xl font-bold text-white mb-4">Développement</div>
                  <div className="text-gray-300 mb-4">Site Next.js développé avec validation continue</div>
                  <div className="text-cyan-400 text-sm font-semibold">✓ Architecture moderne</div>
                  <div className="text-cyan-400 text-sm font-semibold">✓ Performance garantie</div>
                </div>

                <div className="bg-green-400/5 border border-green-400/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-300">
                  <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-3xl mx-auto mb-6">3</div>
                  <div className="text-2xl font-bold text-white mb-4">Formation</div>
                  <div className="text-gray-300 mb-4">2h pour devenir autonome sur votre site</div>
                  <div className="text-green-400 text-sm font-semibold">✓ Support 30 jours</div>
                  <div className="text-green-400 text-sm font-semibold">✓ Maintenance incluse</div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="text-lg text-gray-400 mb-4">Délai total</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">15-45 jours</div>
                <div className="text-gray-400">selon la complexité du projet</div>
              </div>
            </div>
          </AnimatedElement>

          <div className="space-y-20">
            
            {/* Mobile: Versions condensées des piliers */}
            <div className="lg:hidden space-y-8">
              <div className="bg-purple-400/10 border border-purple-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-lg">CRÉATION IA</div>
                    <div className="text-yellow-400 text-2xl font-bold">25% CTR</div>
                  </div>
                </div>
                <div className="text-gray-300 text-sm">Contenus optimisés IA vs 2-3% industrie</div>
              </div>

              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-lg">DATA INSIGHTS</div>
                    <div className="text-yellow-400 text-2xl font-bold">688</div>
                  </div>
                </div>
                <div className="text-gray-300 text-sm">Sessions cachées révélées en 6 mois</div>
              </div>

              <div className="bg-green-400/10 border border-green-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-lg">PERFORMANCE</div>
                    <div className="text-yellow-400 text-2xl font-bold">&lt;2s</div>
                  </div>
                </div>
                <div className="text-gray-300 text-sm">Sites ultra-rapides garantis</div>
              </div>
            </div>

            {/* Desktop: Versions complètes des piliers */}
            <div className="hidden lg:block space-y-20">
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
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-16 lg:py-32 bg-black relative overflow-hidden">
        {/* Background Gradient Créatif */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/8 via-purple-500/5 to-green-400/8"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h120v120H0z'/%3E%3Cpath d='m30 30h60v60H30z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Mobile: CTA direct et simple */}
          <div className="lg:hidden">
            <div className="mb-8">
              <div className="text-3xl font-bold text-yellow-400 mb-4">
                Votre site Next.js
              </div>
              <div className="text-xl text-white mb-4">
                Performance, design, conversions
              </div>
              <div className="text-gray-300 mb-8">
                Consultation gratuite • Devis transparent
              </div>
            </div>

            <div className="space-y-4 max-w-sm mx-auto mb-8">
              <MagneticButton
                href="/contact"
                variant="primary"
                className="w-full text-lg px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-500"
              >
                Démarrer maintenant
              </MagneticButton>
              <div className="text-yellow-400 text-sm">
                ✓ 15-45 jours • ✓ Performance garantie
              </div>
            </div>
          </div>

          {/* Desktop: Version complète */}
          <div className="hidden lg:block">
            <div className="mb-12 leading-tight font-sans">
              <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                Prêt à structurer votre
              </div>

              <div className="text-7xl md:text-8xl font-black text-yellow-400 leading-none mb-4">
                ACQUISITION
              </div>

              <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
                avec
              </div>

              <div className="text-6xl md:text-7xl font-black text-green-400 leading-none mb-6">
                MÉTHODE OSOM
              </div>

              <div className="text-2xl md:text-3xl font-light text-white">
                mesurable et durable ?
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto font-sans">
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
          </div>

          {/* Trust Indicators - Plus compacts sur mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-cyan-400/10 rounded-xl p-4 lg:p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <IconeOSOM type="star" size={20} color="cyan" ariaLabel="Next.js Expert" />
                <span className="text-cyan-400 font-semibold ml-2 text-sm lg:text-base">Next.js Expert</span>
              </div>
              <p className="text-gray-300 text-xs lg:text-sm">Architecture moderne garantie</p>
            </div>

            <div className="bg-purple-400/10 rounded-xl p-4 lg:p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <IconeOSOM type="chart" size={20} color="purple" ariaLabel="Analytics Avancées" />
                <span className="text-purple-400 font-semibold ml-2 text-sm lg:text-base">Analytics Avancées</span>
              </div>
              <p className="text-gray-300 text-xs lg:text-sm">Contenu optimisé automatiquement</p>
            </div>

            <div className="bg-green-400/10 rounded-xl p-4 lg:p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <IconeOSOM type="shield" size={20} color="green" ariaLabel="Performance Garantie" />
                <span className="text-green-400 font-semibold ml-2 text-sm lg:text-base">Performance &lt; 2s</span>
              </div>
              <p className="text-gray-300 text-xs lg:text-sm">Chargement garanti ou remboursé</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}