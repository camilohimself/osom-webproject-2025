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

// Mobile lightweight versions
import { MobileHorizontalBars, MobileCTRChart, MobileDataLine, MobileGauge } from '@/components/ui/MobileChartPlaceholder'
import { cookies } from 'next/headers'
import { getHomepageStructuredData, getLocalBusinessStructuredData } from '@/lib/structured-data'
import HeroSwissOSOMHybrid from '@/components/homepage/HeroSwissOSOMHybrid'

// Lazy loading Piliers Swiss optimisé
const PilierSwiss1 = dynamic(() => import('@/components/homepage/PilierSwiss1'), {
  loading: () => <div className="h-96 bg-purple-400/5 rounded-2xl animate-pulse" />
})
const PilierSwiss2 = dynamic(() => import('@/components/homepage/PilierSwiss2'), {
  loading: () => <div className="h-96 bg-purple-400/5 rounded-2xl animate-pulse" />
})
const PilierSwiss3 = dynamic(() => import('@/components/homepage/PilierSwiss3'), {
  loading: () => <div className="h-96 bg-yellow-400/5 rounded-2xl animate-pulse" />
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
import MobileCTABar from '@/components/ui/MobileCTABar'

export const metadata: Metadata = {
  title: 'Développeur web Valais | Sites sur mesure Next.js & SEO | OSOM',
  description: 'Développeur web Valais spécialisé projets complexes sur mesure. Sites 60+ pages, API, dashboards, SEO local. Next.js expert. Devis gratuit.',
  keywords: 'développeur web valais, site sur mesure valais, next.js valais, seo local valais, développement web valais, site complexe valais, api integration valais, dashboard valais',
  openGraph: {
    title: 'OSOM - Sites web sur mesure qui génèrent des résultats',
    description: 'Développeur web Valais spécialisé projets complexes. 60 pages + API + SEO local. Performance garantie < 2s.',
    url: 'https://www.osom.ch',
    siteName: 'OSOM',
    locale: 'fr_CH',
    type: 'website',
    images: [
      {
        url: '/osom-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OSOM - Sites web sur mesure Valais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSOM - Sites web sur mesure Valais',
    description: 'Projets complexes 60+ pages. API integration. SEO local. Performance garantie.',
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
  const jsonLdLocalBusiness = getLocalBusinessStructuredData()

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* LocalBusiness Schema pour SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <div className="min-h-screen bg-black relative">
      {/* Interactive Background Layer */}
      <InteractiveBackground />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      {/* Hero Swiss OSOM Section */}
      <HeroSwissOSOMHybrid dictionary={dictionary.home} />

      {/* Slogan "Pas votre neveu" - Question sarcastique */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-black to-black relative overflow-hidden border-t border-yellow-400/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Combien coûte vraiment
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                un site fait par votre neveu ?
              </h2>
              <p className="text-xl md:text-2xl text-yellow-400 max-w-2xl mx-auto mt-6 font-medium" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                (Spoiler : plus cher qu'un professionnel)
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Approche directe - pas de comparaisons défensives */}

      <section className="py-16 lg:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.15'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.1}>
            {/* Mobile: Version HOOK + CTA directe */}
            <div className="lg:hidden text-center mb-12 px-4">
              {/* HOOK CHOC */}
              <div className="mb-8">
                <div className="text-6xl font-bold text-yellow-400 mb-3">
                  688
                </div>
                <div className="text-gray-300 text-base mb-2">
                  Leads générés pour client PME peinture
                </div>
                <div className="text-yellow-400 font-semibold text-lg">
                  14x ROI vs publicité payante
                </div>
              </div>

              {/* CTA IMMÉDIAT DOUBLE */}
              <div className="space-y-3 max-w-sm mx-auto mb-8">
                <a
                  href="tel:+41791289549"
                  className="block w-full bg-yellow-400 text-black font-bold py-5 rounded-xl text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-yellow-400/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  079 128 95 49
                </a>
                <a
                  href="/contact"
                  className="block w-full border-2 border-yellow-400 text-yellow-400 font-bold py-5 rounded-xl text-lg active:scale-95 transition-transform"
                >
                  Consultation 30 min gratuite
                </a>
              </div>

              {/* FRICTION KILLERS */}
              <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 max-w-sm mx-auto">
                <div className="text-yellow-400 text-sm space-y-2 font-medium">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Devis gratuit transparent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Dès 1,500 CHF/mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Délai garanti 15-45 jours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Méthode complète */}
            <div className="hidden lg:block text-center mb-24">
              <div className="text-4xl md:text-5xl font-bold text-white mb-6">
                L'approche <span className="text-yellow-400">sur mesure</span>
              </div>

              <div className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
                3 étapes pour des sites qui génèrent des résultats
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-3xl mx-auto mb-6">1</div>
                  <div className="text-2xl font-bold text-white mb-4">Audit complet</div>
                  <div className="text-gray-300 mb-4">Analyse complète de votre présence digitale</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Audit marketing complet</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Audit technique du site</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Étude de marché</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Veille concurrentielle</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Stratégie SEO mots-clés</div>
                </div>

                <div className="bg-purple-400/5 border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-300">
                  <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-3xl mx-auto mb-6">2</div>
                  <div className="text-2xl font-bold text-white mb-4">Développement</div>
                  <div className="text-gray-300 mb-4">Architecture digitale sur mesure</div>
                  <div className="text-purple-400 text-sm font-semibold">✓ 100% code sur mesure</div>
                  <div className="text-purple-400 text-sm font-semibold">✓ Next.js / HTML5</div>
                  <div className="text-purple-400 text-sm font-semibold">✓ Tailwind CSS</div>
                  <div className="text-purple-400 text-sm font-semibold">✓ API + Dashboards custom</div>
                  <div className="text-purple-400 text-sm font-semibold">✓ 2-6 mois selon complexité</div>
                </div>

                <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-3xl mx-auto mb-6">3</div>
                  <div className="text-2xl font-bold text-white mb-4">Optimisation</div>
                  <div className="text-gray-300 mb-4">Accompagnement et optimisation continue</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Sessions mensuelles 6-12 mois</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ SEO local continu</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Analytics + A/B tests</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Optimisations techniques</div>
                  <div className="text-yellow-400 text-sm font-semibold">✓ Support prioritaire</div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="text-lg text-gray-400 mb-4">Portfolio projets complexes</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">+150%</div>
                <div className="text-gray-400">Visibilité Google moyenne clients</div>
              </div>
            </div>
          </AnimatedElement>

          {/* Expertise - Less is More */}
          <div className="mt-32">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto">

                {/* ARCHITECTURE */}
                <div className="text-center space-y-4">
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    ARCHITECTURE
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
                  <div className="space-y-2 text-gray-400">
                    <div className="text-sm lg:text-base">Code sur mesure</div>
                    <div className="text-sm lg:text-base">Next.js expert</div>
                    <div className="text-sm lg:text-base">API complexes</div>
                  </div>
                </div>

                {/* PERFORMANCE */}
                <div className="text-center space-y-4">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400 tracking-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    PERFORMANCE
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                  <div className="space-y-2 text-gray-400">
                    <div className="text-sm lg:text-base">&lt;2s garanti</div>
                    <div className="text-sm lg:text-base">90+ PageSpeed</div>
                    <div className="text-sm lg:text-base">Optimisation continue</div>
                  </div>
                </div>

                {/* CROISSANCE */}
                <div className="text-center space-y-4">
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    CROISSANCE
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
                  <div className="space-y-2 text-gray-400">
                    <div className="text-sm lg:text-base">SEO stratégique</div>
                    <div className="text-sm lg:text-base">Résultats mesurés</div>
                    <div className="text-sm lg:text-base">Top 3 positions</div>
                  </div>
                </div>

              </div>
            </AnimatedElement>
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
                Besoin d'un site qui
              </div>

              <div className="text-7xl md:text-8xl font-black text-yellow-400 leading-none mb-4">
                GÉNÈRE
              </div>

              <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
                vraiment des
              </div>

              <div className="text-6xl md:text-7xl font-black text-yellow-400 leading-none mb-6">
                RÉSULTATS
              </div>

              <div className="text-2xl md:text-3xl font-light text-white">
                mesurables ?
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto font-sans">
              Développement <span className="text-yellow-400 font-semibold">Next.js sur mesure</span>,
              <span className="text-purple-400 font-semibold"> SEO local stratégique</span>,
              <span className="text-yellow-400 font-semibold"> optimisation continue</span>.
              Des sites complexes qui transforment visiteurs en clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <MagneticButton
                href="/contact"
                variant="primary"
                className="text-xl px-12 py-6 relative overflow-hidden group"
              >
                <span className="relative z-10">Audit gratuit 30 min</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </MagneticButton>
              <MagneticButton
                href="/realisations"
                variant="secondary"
                className="text-xl px-12 py-6 border-2 border-gray-600 hover:border-purple-400 transition-all duration-300"
              >
                Portfolio projets
              </MagneticButton>
            </div>
          </div>

          {/* Trust Indicators - Plus compacts sur mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-purple-400/10 rounded-xl p-4 lg:p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <IconeOSOM type="star" size={20} color="purple" ariaLabel="Projets complexes" />
                <span className="text-purple-400 font-semibold ml-2 text-sm lg:text-base">Projets complexes</span>
              </div>
              <p className="text-gray-300 text-xs lg:text-sm">60 pages + API + dashboards sur mesure</p>
            </div>

            <div className="bg-purple-400/10 rounded-xl p-4 lg:p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <IconeOSOM type="chart" size={20} color="purple" ariaLabel="SEO local expert" />
                <span className="text-purple-400 font-semibold ml-2 text-sm lg:text-base">SEO local expert</span>
              </div>
              <p className="text-gray-300 text-xs lg:text-sm">Positions Google top 3 garanties</p>
            </div>

            <div className="bg-yellow-400/10 rounded-xl p-4 lg:p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 lg:mb-3">
                <IconeOSOM type="shield" size={20} color="yellow" ariaLabel="Performance garantie" />
                <span className="text-yellow-400 font-semibold ml-2 text-sm lg:text-base">Performance &lt; 2s</span>
              </div>
              <p className="text-gray-300 text-xs lg:text-sm">Next.js optimisé ou remboursement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <MobileCTABar variant="default" />
      </div>
    </>
  )
}