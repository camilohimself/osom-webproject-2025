import Link from 'next/link'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, type Locale } from '@/lib/i18n'
import { GraphiqueLinear, GraphiqueConversion, GraphiqueComparatif, GraphiqueImpact } from '@/components/ui'
import PrismTriangle from '@/components/ui/PrismTriangle'
import { cookies } from 'next/headers'
import HeroPremium from '@/components/homepage/HeroPremium'
import AnimatedElement from '@/components/ui/AnimatedElement'
import InteractiveBackground from '@/components/ui/InteractiveBackground'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import MagneticButton from '@/components/ui/MagneticButton'

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
    description: '140x plus efficace que publicité classique. Collaboration révolutionnaire Homme × Claude IA.',
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

  // Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OSOM',
    description: 'Première agence VALAIS spécialisée dans le Marketing Humain × Intelligence Artificielle. Résultats 140x supérieurs à la publicité classique.',
    url: 'https://osom.ch',
    logo: 'https://osom.ch/osom-logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-XX-XXX-XX-XX',
      contactType: 'Customer Service',
      areaServed: 'CH-VS',
      availableLanguage: ['French', 'German', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Valais',
      addressCountry: 'Switzerland'
    },
    sameAs: [
      'https://linkedin.com/company/osom-ch',
      'https://instagram.com/osom.ch'
    ],
    serviceArea: {
      '@type': 'State',
      name: 'Valais'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Marketing IA',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création Site Web IA',
            description: '11.3% conversion vs 2-3% industrie'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO & Marketing IA',
            description: '68.6% vs 44.6% engagement quality'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tracking & Data IA',
            description: '14,171 sessions récupérées'
          }
        }
      ]
    }
  }

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
      {/* Hero Premium Section */}
      <HeroPremium dictionary={dictionary.home} />

      {/* Les 3 Forces OSOM - Design System Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="text-center mb-24">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">{dictionary.home.forces.badge}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Comment OSOM utilise la <span className="text-yellow-400 font-bold">data</span><br />
                <span className="text-2xl md:text-3xl text-gray-300">pour le bénéfice de votre entreprise ?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Notre expertise repose sur 3 piliers complémentaires. Chaque décision est guidée par la data pour maximiser votre retour sur investissement.
              </p>
            </div>
          </AnimatedElement>

          {/* Triangle Prisme Magnifique - Pink Floyd Style */}
          <AnimatedElement type="fadeIn" delay={0.5}>
            <div className="mb-32">
              <PrismTriangle className="mb-16" />
            </div>
          </AnimatedElement>
          
          <div className="space-y-20">
            
            {/* FORCE 1: Design & UX/UI Revolution pour Entrepreneurs */}
            <AnimatedElement type="slideUp" delay={0.1}>
              <div className="backdrop-blur-sm border border-purple-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-full">
                {/* Graphique à gauche - Layout créatif */}
                <div className="bg-gradient-to-br from-purple-400/10 to-black/60 p-8 flex items-center">
                  <GraphiqueConversion
                    title="Conversion rate"
                    subtitle="OSOM vs industrie"
                    traditionalRate={2.5}
                    osomRate={11.3}
                    className="w-full border-0"
                  />
                </div>
                
                {/* Contenu principal - Plus d'espace */}
                <div className="col-span-2 p-16 bg-gradient-to-br from-black/60 to-black/30">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-6 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-purple-400 font-medium text-sm mb-2">FORCE 1 • DESIGN & UX/UI</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideLeft" delay={0.3}>
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        11.3% de conversion : comment votre <span className="text-purple-400 font-bold">design</span><br />
                        devient une <span className="text-purple-400 font-bold">machine à vendre</span>
                      </h3>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Votre concurrent attire autant de visiteurs que vous, mais convertit 4.5x moins. 
                      La différence ? Chaque pixel de nos designs est optimisé pour vendre.
                    </p>
                    
                    {/* Arguments Business Entrepreneur */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-purple-400/5 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="font-semibold text-purple-400 mb-2">Psychologie comportementale appliquée</div>
                        <div className="text-gray-300">68.6% d'engagement vs 44.6% sites classiques. Eye-tracking + heatmaps = parcours optimal.</div>
                      </div>
                      
                      <div className="bg-purple-400/5 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="font-semibold text-purple-400 mb-2">ROI design mesurable</div>
                        <div className="text-gray-300">+350% revenus à trafic égal. Chaque modification A/B testée sur données réelles.</div>
                      </div>
                      
                      <div className="bg-purple-400/5 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="font-semibold text-purple-400 mb-2">Mobile-first garanti</div>
                        <div className="text-gray-300">77% de vos clients naviguent mobile. Interface tactile optimisée, chargement &lt; 2 secondes.</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideUp" delay={0.8}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/30 hover:bg-yellow-400/15 hover:border-yellow-400/50 transition-all duration-300">
                          <div className="text-yellow-400 font-bold text-lg mb-2">{dictionary.home.force1.formula.title}</div>
                          <div className="text-white text-lg">{dictionary.home.force1.formula.price}</div>
                          <div className="text-gray-400 text-sm mt-2">{dictionary.home.force1.formula.subtitle}</div>
                        </div>
                        
                        <div className="p-6 bg-yellow-400/5 rounded-xl border border-yellow-400/20 hover:bg-yellow-400/10 hover:border-yellow-400/40 transition-all duration-300">
                          <div className="text-yellow-400 text-2xl font-light mb-2">{dictionary.home.force1.conversion.rate}</div>
                          <div className="text-gray-300">{dictionary.home.force1.conversion.description}</div>
                          <div className="text-gray-400 text-sm mt-2">{dictionary.home.force1.conversion.subtitle}</div>
                        </div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedElement>
            
            {/* FORCE 2: Data Analytics & SEO Revolution pour Entrepreneurs */}
            <AnimatedElement type="slideUp" delay={0.3}>
              <div className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 group hover:scale-[1.02]">
              {/* Layout centré avec background graphique */}
              <div className="relative">
                {/* Background graphique */}
                <div className="absolute inset-0 opacity-20">
                  <GraphiqueComparatif
                    title="Engagement quality"
                    subtitle="SEO vs direct traffic"
                    data={[
                      { label: "SEO OSOM", value: 68.6, color: "#06B6D4" },
                      { label: "Trafic direct", value: 44.6, color: "#6B7280" }
                    ]}
                    className="h-full border-0"
                  />
                </div>
                
                {/* Contenu au premier plan */}
                <div className="relative z-10 p-16 bg-gradient-to-br from-black/80 to-black/60">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-6 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-medium text-sm mb-2">FORCE 2 • DATA ANALYTICS & SEO</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="fadeIn" delay={0.4}>
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        688 clients vs 49 concurrents : quand la <span className="text-cyan-400 font-bold">data</span><br />
                        révèle l'<span className="text-cyan-400 font-bold">or caché</span>
                      </h3>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Pendant que vos concurrents achètent du trafic, nous récupérons 14,171 sessions "perdues" dans votre GA4. 
                      Résultat : 14x plus de clients à budget égal.
                    </p>
                    
                    {/* Arguments Business Entrepreneur */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30">
                        <div className="text-cyan-400 font-bold text-lg mb-4">Sessions invisibles récupérées</div>
                        <div className="text-gray-300 mb-4">14,171 sessions "Unassigned" révélées dans GA4. ROI caché de CHF 47,000 découvert.</div>
                        <div className="text-cyan-400 text-sm">Forensics data + attribution multi-canal</div>
                      </div>
                      
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30">
                        <div className="text-cyan-400 font-bold text-lg mb-4">Organique vs payant révélé</div>
                        <div className="text-gray-300 mb-4">688 conversions organiques vs 49 payantes (Culture Peinture). Budget pub optimisé -70%.</div>
                        <div className="text-cyan-400 text-sm">GA4 + Search Console + attribution</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20">
                        <div className="text-cyan-400 font-bold text-lg mb-4">SEO technique + contenu</div>
                        <div className="text-gray-300 mb-4">68.6% engagement SEO vs 44.6% direct. Trafic qualifié qui convertit mieux.</div>
                        <div className="text-cyan-400 text-sm">Stratégie long terme + ROI cumulé</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20">
                        <div className="text-cyan-400 font-bold text-lg mb-4">Dashboard temps réel</div>
                        <div className="text-gray-300 mb-4">Tracking précis + alertes automatiques. Pilotage business data-driven quotidien.</div>
                        <div className="text-cyan-400 text-sm">Looker Studio + GA4 + automations</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="scale" delay={0.9}>
                      <div className="bg-cyan-400/10 rounded-xl p-8 border border-cyan-400/30 max-w-2xl mx-auto hover:bg-cyan-400/15 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-500">
                        <div className="text-cyan-400 font-bold text-2xl mb-2">{dictionary.home.force2.engagement.title}</div>
                        <div className="text-white text-lg">{dictionary.home.force2.engagement.description}</div>
                        <div className="text-gray-400 text-sm mt-2">{dictionary.home.force2.engagement.subtitle}</div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedElement>
            
            {/* FORCE 3: Développement & IA Revolution pour Entrepreneurs */}
            <AnimatedElement type="slideUp" delay={0.5}>
              <div className="backdrop-blur-sm border border-green-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-400/10 transition-all duration-500 group hover:scale-[1.02]">
              {/* Layout asymétrique diagonal */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                {/* Contenu principal - 3 colonnes */}
                <div className="col-span-3 p-16 bg-gradient-to-br from-green-900/20 to-black/60">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-6 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-green-400 font-medium text-sm mb-2">FORCE 3 • DÉVELOPPEMENT & IA</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideRight" delay={0.4}>
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Next.js 15 × Claude IA : votre <span className="text-green-400 font-bold">site</span><br />
                        évolue pendant que vous <span className="text-green-400 font-bold">dormez</span>
                      </h3>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Fini les sites statiques qui vieillissent mal. Notre architecture IA s'adapte, s'optimise et 
                      prédit les besoins de vos clients en temps réel.
                    </p>
                    
                    {/* Arguments Business Entrepreneur */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-lg p-6 border-l-4 border-green-400">
                        <div className="flex justify-between items-start mb-3">
                          <div className="font-semibold text-green-400">Architecture évolutive garantie</div>
                          <div className="text-green-400 font-bold text-lg">0 refonte en 5 ans</div>
                        </div>
                        <div className="text-gray-300">Next.js 15 + TypeScript. Stack moderne qui grandit avec votre business. Migrations automatiques.</div>
                        <div className="text-green-300 text-sm mt-2">Composants modulaires + API évolutives</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-lg p-6 border-l-4 border-green-400">
                        <div className="flex justify-between items-start mb-3">
                          <div className="font-semibold text-green-400">Performance technique mesurée</div>
                          <div className="text-green-400 font-bold text-lg">&lt; 2s chargement</div>
                        </div>
                        <div className="text-gray-300">Core Web Vitals optimaux. SEO technique + vitesse = meilleur ranking Google automatique.</div>
                        <div className="text-green-300 text-sm mt-2">Lighthouse 90+ score garanti</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-400/5 to-transparent rounded-lg p-6 border-l-4 border-green-300">
                        <div className="font-semibold text-green-400 mb-3">Collaboration humain × IA</div>
                        <div className="text-gray-300">Claude IA génère le code, expert humain valide et optimise. Productivité +200%, qualité garantie.</div>
                        <div className="text-green-300 text-sm mt-2">Première collaboration officielle agence × IA</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="scale" delay={0.9}>
                      <div className="bg-purple-400/10 rounded-xl p-8 border border-purple-400/30 hover:bg-purple-400/15 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-500">
                        <div className="text-purple-400 font-bold text-2xl mb-2">{dictionary.home.force3.conversions.title}</div>
                        <div className="text-white text-lg">{dictionary.home.force3.conversions.description}</div>
                        <div className="text-gray-400 text-sm mt-2">{dictionary.home.force3.conversions.subtitle}</div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
                
                {/* Graphique diagonal - 2 colonnes */}
                <div className="col-span-2 bg-gradient-to-tl from-purple-900/30 to-black/80 flex items-center p-8">
                  <GraphiqueImpact
                    title={dictionary.home.charts.impact.title}
                    subtitle={dictionary.home.charts.impact.subtitle}
                    organicValue={688}
                    paidValue={49}
                    multiplier={140}
                    className="w-full border-0"
                    organicColor="#A855F7"
                  />
                </div>
              </div>
              </div>
            </AnimatedElement>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {dictionary.home.cta.title_line1}<br />
            vos <span className="text-yellow-400 font-bold">{dictionary.home.cta.title_performances}</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {dictionary.home.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-lg px-10 py-5"
            >
              {dictionary.home.cta.cta_primary}
            </MagneticButton>
            <MagneticButton
              href="/calculator"
              variant="secondary"
              className="text-lg px-10 py-5"
            >
              {dictionary.home.cta.cta_secondary}
            </MagneticButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>{dictionary.home.cta.trust_indicators.ga4}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>{dictionary.home.cta.trust_indicators.results}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>{dictionary.home.cta.trust_indicators.guarantee}</span>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}