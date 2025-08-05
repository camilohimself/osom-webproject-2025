import Link from 'next/link'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, type Locale } from '@/lib/i18n'
import { GraphiqueLinear, GraphiqueConversion, GraphiqueComparatif, GraphiqueImpact } from '@/components/ui'
import HorizontalBarsChart from '@/components/ui/HorizontalBarsChart'
import DataLineChart from '@/components/ui/DataLineChart'
import GaugeChart from '@/components/ui/GaugeChart'
import PrismTriangle from '@/components/ui/PrismTriangle'
import { cookies } from 'next/headers'
import HeroPremium from '@/components/homepage/HeroPremium'
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

  // Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OSOM',
    description: 'Première agence VALAIS spécialisée dans le Marketing Humain × Intelligence Artificielle. Résultats 12x supérieurs à la publicité classique.',
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

      {/* Les 3 Forces Créatives OSOM - Vision Narrative */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern Créatif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.15'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="text-center mb-24">
              <div className="flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">LES 3 DIMENSIONS CRÉATIVES</span>
              </div>
              
              {/* Titre avec jeux typographiques créatifs */}
              <div className="mb-12 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* Ligne 1: "Nous transformons vos" - taille moyenne */}
                <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                  Nous transformons vos
                </div>
                
                {/* Ligne 2: "IDÉES" - grande taille avec animation */}
                <div className="text-6xl md:text-8xl font-black text-yellow-400 leading-none mb-4 relative">
                  IDÉES
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 animate-pulse" />
                </div>
                
                {/* Ligne 3: "en" - petite taille italique */}
                <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
                  en
                </div>
                
                {/* Ligne 4: "EXPÉRIENCES" - très grande taille */}
                <div className="text-7xl md:text-9xl font-black text-green-400 leading-none mb-3">
                  EXPÉRIENCES
                </div>
                
                {/* Ligne 5: "qui marquent les esprits" - taille moyenne */}
                <div className="text-2xl md:text-3xl font-light text-white">
                  qui marquent les esprits
                </div>
              </div>
              
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Trois forces créatives s'allient pour donner vie à vos projets : la <span className="text-yellow-400 font-semibold">créativité amplifiée par l'IA</span>, 
                les <span className="text-cyan-400 font-semibold">insights qui inspirent</span>, et le <span className="text-green-400 font-semibold">code qui raconte</span> votre histoire unique.
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
            
            {/* FORCE 1: CRÉATIVITÉ AMPLIFIÉE PAR L'IA */}
            <AnimatedElement type="slideUp" delay={0.1}>
              <div className="backdrop-blur-sm border border-purple-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group">
                {/* Layout centré avec graphique intégré */}
                <div className="p-16 bg-gradient-to-br from-purple-900/20 to-black/60">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full mr-6 flex items-center justify-center">
                        <IconeOSOM type="palette" size={32} color="white" ariaLabel="Créativité amplifiée" />
                      </div>
                      <div>
                        <div className="text-purple-400 font-medium text-sm mb-2">FORCE #1 - CRÉATIVITÉ AMPLIFIÉE PAR L'IA</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="fadeIn" delay={0.3}>
                      <div className="text-center mb-10">
                        {/* Titre créatif avec jeux typographiques */}
                        <div className="text-3xl md:text-4xl font-light text-white mb-4">
                          Quand l'IA devient votre
                        </div>
                        <div className="text-6xl md:text-7xl font-black text-purple-400 leading-none mb-4">
                          MUSE CRÉATIVE
                        </div>
                        <div className="text-2xl md:text-3xl font-light text-gray-300">
                          25% de taux de clic vs 2-3% industrie
                        </div>
                      </div>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      L'intelligence artificielle ne remplace pas votre créativité, elle la <span className="text-purple-400 font-semibold">démultiplie</span>. 
                      Chaque campagne devient une œuvre d'art data-driven qui touche l'émotion et génère des résultats exceptionnels.
                    </p>
                    
                    {/* Histoire créative avec métaphores */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 hover:bg-purple-400/15 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="lightning" size={24} color="purple" ariaLabel="Idéation éclair" />
                          <div className="text-purple-400 font-bold text-lg ml-3">L'Idéation Éclair</div>
                        </div>
                        <div className="text-gray-300 mb-4">En 30 secondes, notre IA génère 50 concepts créatifs basés sur l'analyse comportementale de votre audience. L'inspiration jaillit à la demande.</div>
                        <div className="text-purple-400 text-sm italic">"De l'idée au concept en un éclair"</div>
                      </div>
                      
                      <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 hover:bg-purple-400/15 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="target" size={24} color="purple" ariaLabel="Personnalisation émotionnelle" />
                          <div className="text-purple-400 font-bold text-lg ml-3">L'Émotion Sur-Mesure</div>
                        </div>
                        <div className="text-gray-300 mb-4">Chaque message s'adapte à la personnalité de votre prospect. L'IA analyse et personnalise le ton, les mots, les couleurs pour créer une connexion authentique.</div>
                        <div className="text-purple-400 text-sm italic">"Une histoire unique pour chaque cœur"</div>
                      </div>
                      
                      <div className="bg-purple-400/5 rounded-xl p-6 border border-purple-400/20 hover:bg-purple-400/10 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="star" size={24} color="purple" ariaLabel="Optimisation créative" />
                          <div className="text-purple-400 font-bold text-lg ml-3">L'Optimisation Artistique</div>
                        </div>
                        <div className="text-gray-300 mb-4">Votre créativité évolue en temps réel. L'IA apprend de chaque interaction pour affiner vos prochaines créations et maximiser leur impact émotionnel.</div>
                        <div className="text-purple-400 text-sm italic">"L'art qui s'améliore avec le temps"</div>
                      </div>
                    </div>
                    
                    {/* Graphique barres horizontales Marketing + IA */}
                    <AnimatedElement type="slideUp" delay={0.7}>
                      <div className="mb-10">
                        <HorizontalBarsChart
                          title="CTR OSOM vs Industrie"
                          subtitle="Performance Marketing IA • Données Meta Ads vérifiées"
                          primaryData={{
                            label: "Campagnes OSOM avec IA",
                            value: 25,
                            color: "#A855F7",
                            description: "Taux de clic moyen"
                          }}
                          secondaryData={{
                            label: "Marketing traditionnel industrie",
                            value: 2.3,
                            color: "#6B7280",
                            description: "CTR standard"
                          }}
                          unit="%"
                          backgroundColor="rgba(168, 85, 247, 0.05)"
                          className="rounded-2xl border border-purple-400/20"
                          animate={true}
                        />
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement type="scale" delay={0.9}>
                      <div className="bg-purple-400/10 rounded-xl p-8 border border-purple-400/30 max-w-2xl mx-auto hover:bg-purple-400/15 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-500">
                        <div className="text-purple-400 font-bold text-2xl mb-2">1,500 CHF</div>
                        <div className="text-white text-lg">Économisés mensuellement</div>
                        <div className="text-gray-400 text-sm mt-2">Google Ads optimisé par IA • ROI transparent</div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            {/* FORCE 2: INSIGHTS QUI INSPIRENT */}
            <AnimatedElement type="slideUp" delay={0.3}>
              <div className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 group">
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
                        <IconeOSOM type="search" size={32} color="white" ariaLabel="Insights inspirants" />
                      </div>
                      <div>
                        <div className="text-cyan-400 font-medium text-sm mb-2">FORCE #2 - INSIGHTS QUI INSPIRENT</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="fadeIn" delay={0.4}>
                      <div className="text-center mb-10">
                        {/* Titre créatif avec jeux typographiques */}
                        <div className="text-3xl md:text-4xl font-light text-white mb-4">
                          Vos données cachent des
                        </div>
                        <div className="text-6xl md:text-7xl font-black text-cyan-400 leading-none mb-4">
                          TRÉSORS D'INSPIRATION
                        </div>
                        <div className="text-2xl md:text-3xl font-light text-gray-300">
                          688 conversions vs 49 traditionnelles
                        </div>
                      </div>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Chaque clic raconte une histoire. Chaque session révèle un désir. Nous transformons vos données brutes en 
                      <span className="text-cyan-400 font-semibold"> insights créatifs</span> qui inspirent vos prochaines campagnes et révèlent des opportunités insoupçonnées.
                    </p>
                    
                    {/* Histoire créative avec métaphores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30 hover:bg-cyan-400/15 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="search" size={24} color="cyan" ariaLabel="Détective des données" />
                          <div className="text-cyan-400 font-bold text-lg ml-3">Le Détective des Données</div>
                        </div>
                        <div className="text-gray-300 mb-4">14'171 sessions "fantômes" découvertes dans vos analytics. Comme un détective numérique, nous révélons les traces invisibles de vos prospects et transformons l'inexpliqué en opportunités.</div>
                        <div className="text-cyan-400 text-sm italic">"Chaque indice mène à une découverte"</div>
                      </div>
                      
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30 hover:bg-cyan-400/15 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="target" size={24} color="cyan" ariaLabel="Cartographe des comportements" />
                          <div className="text-cyan-400 font-bold text-lg ml-3">Le Cartographe des Désirs</div>
                        </div>
                        <div className="text-gray-300 mb-4">688 conversions vs 49 ? Nous cartographions les chemins secrets de vos clients. Chaque parcours devient une histoire qui inspire vos futures stratégies créatives.</div>
                        <div className="text-cyan-400 text-sm italic">"Dessiner la carte du succès"</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="chart" size={24} color="cyan" ariaLabel="Prophète des tendances" />
                          <div className="text-cyan-400 font-bold text-lg ml-3">Le Prophète des Tendances</div>
                        </div>
                        <div className="text-gray-300 mb-4">68.6% d'engagement ? Nous prédisons les désirs avant qu'ils ne se manifestent. Vos données deviennent boule de cristal pour anticiper les besoins de votre marché.</div>
                        <div className="text-cyan-400 text-sm italic">"Voir l'avenir dans les données présentes"</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="lightning" size={24} color="cyan" ariaLabel="Alchimiste des insights" />
                          <div className="text-cyan-400 font-bold text-lg ml-3">L'Alchimiste des Insights</div>
                        </div>
                        <div className="text-gray-300 mb-4">Transformateur de plomb en or : nous métamorphosons vos métriques froides en insights chauds qui nourrissent votre créativité et inspirent vos équipes.</div>
                        <div className="text-cyan-400 text-sm italic">"L'art de transformer les chiffres en inspiration"</div>
                      </div>
                    </div>
                    
                    {/* Graphique line chart Data Analysis */}
                    <AnimatedElement type="slideUp" delay={0.8}>
                      <div className="mb-10">
                        <DataLineChart
                          title="ROI Évolution OSOM vs Industrie"
                          subtitle="Data science révèle leviers cachés • 6 mois comparatif"
                          data={[
                            { month: "Jan", osomValue: 44.6, industryValue: 35.2 },
                            { month: "Fév", osomValue: 52.3, industryValue: 37.1 },
                            { month: "Mar", osomValue: 58.7, industryValue: 39.5, annotation: "Optimisation prédictive" },
                            { month: "Avr", osomValue: 62.4, industryValue: 41.2 },
                            { month: "Mai", osomValue: 65.8, industryValue: 42.8 },
                            { month: "Jun", osomValue: 68.6, industryValue: 44.6, annotation: "Attribution multi-touch" }
                          ]}
                          primaryColor="#06B6D4"
                          secondaryColor="#6B7280"
                          backgroundColor="rgba(6, 182, 212, 0.05)"
                          className="rounded-2xl border border-cyan-400/20"
                          animate={true}
                        />
                      </div>
                    </AnimatedElement>
                    
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
            
            {/* FORCE 3: CODE QUI RACONTE */}
            <AnimatedElement type="slideUp" delay={0.5}>
              <div className="backdrop-blur-sm border border-green-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-400/10 transition-all duration-500 group">
              {/* Layout asymétrique diagonal */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                {/* Contenu principal - 3 colonnes */}
                <div className="col-span-3 p-16 bg-gradient-to-br from-green-900/20 to-black/60">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-6 flex items-center justify-center">
                        <IconeOSOM type="code" size={32} color="white" ariaLabel="Code qui raconte" />
                      </div>
                      <div>
                        <div className="text-green-400 font-medium text-sm mb-2">FORCE #3 - CODE QUI RACONTE</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideRight" delay={0.4}>
                      <div className="mb-10">
                        {/* Titre créatif avec jeux typographiques */}
                        <div className="text-3xl md:text-4xl font-light text-white mb-4">
                          Votre code devient
                        </div>
                        <div className="text-5xl md:text-6xl font-black text-green-400 leading-none mb-4">
                          CONTEUR DIGITAL
                        </div>
                        <div className="text-2xl md:text-3xl font-light text-gray-300">
                          Performance &lt; 2s • Stratégie Top 5 Google
                        </div>
                      </div>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Chaque ligne de code raconte un chapitre de votre histoire. Notre développement ne se contente pas de fonctionner : 
                      il <span className="text-green-400 font-semibold">enchante</span>, <span className="text-green-400 font-semibold">émeut</span> et <span className="text-green-400 font-semibold">convertit</span> vos visiteurs en ambassadeurs passionnés.
                    </p>
                    
                    {/* Histoire créative avec métaphores */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-lg p-6 border-l-4 border-green-400 hover:from-green-400/15 transition-all duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center">
                            <IconeOSOM type="tools" size={20} color="green" ariaLabel="Architecte digital" />
                            <div className="font-semibold text-green-400 ml-2">L'Architecte de Rêves Numériques</div>
                          </div>
                          <div className="text-green-400 font-bold text-lg">0 refonte en 5 ans</div>
                        </div>
                        <div className="text-gray-300">Comme un architecte visionnaire, nous bâtissons des fondations qui évoluent avec vos ambitions. Votre site grandit avec vous, s'adapte, se transforme sans jamais perdre son âme.</div>
                        <div className="text-green-300 text-sm mt-2 italic">"Construire pour l'éternité numérique"</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-lg p-6 border-l-4 border-green-400 hover:from-green-400/15 transition-all duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center">
                            <IconeOSOM type="lightning" size={20} color="green" ariaLabel="Virtuose de la vitesse" />
                            <div className="font-semibold text-green-400 ml-2">Le Virtuose de la Vitesse</div>
                          </div>
                          <div className="text-green-400 font-bold text-lg">&lt; 2s chargement</div>
                        </div>
                        <div className="text-gray-300">La patience n'existe plus à l'ère digitale. Nos sites s'affichent plus vite qu'un battement de cœur, créant cette magie du "tout de suite" qui transforme l'attente en émerveillement.</div>
                        <div className="text-green-300 text-sm mt-2 italic">"L'art de ne jamais faire attendre"</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-400/5 to-transparent rounded-lg p-6 border-l-4 border-green-300 hover:from-green-400/10 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <IconeOSOM type="rocket" size={20} color="green" ariaLabel="Symphoniste de l'innovation" />
                          <div className="font-semibold text-green-400 ml-2">Le Symphoniste de l'Innovation</div>
                        </div>
                        <div className="text-gray-300">L'IA compose, l'humain dirige l'orchestre. Chaque fonctionnalité devient une note parfaite dans la symphonie de votre expérience utilisateur. Créativité et technologie en parfaite harmonie.</div>
                        <div className="text-green-300 text-sm mt-2 italic">"Quand la technologie danse avec l'émotion"</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="scale" delay={0.9}>
                      <div className="bg-green-400/10 rounded-xl p-8 border border-green-400/30 hover:bg-green-400/15 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-500">
                        <div className="text-green-400 font-bold text-2xl mb-2">{dictionary.home.force3.conversions.title}</div>
                        <div className="text-white text-lg">{dictionary.home.force3.conversions.description}</div>
                        <div className="text-gray-400 text-sm mt-2">{dictionary.home.force3.conversions.subtitle}</div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
                
                {/* Graphique gauge/speedometer - 2 colonnes */}
                <div className="col-span-2 bg-gradient-to-tl from-green-900/30 to-black/80 flex items-center p-8">
                  <GaugeChart
                    title="< 2s vs 5-8s"
                    subtitle="Performance temps chargement"
                    primaryValue={1.8}
                    secondaryValue={6.5}
                    primaryLabel="OSOM Next.js + IA"
                    secondaryLabel="Solutions Standard"
                    unit="s"
                    maxValue={10}
                    primaryColor="#10B981"
                    secondaryColor="#6B7280"
                    backgroundColor="rgba(16, 185, 129, 0.05)"
                    className="w-full border-0"
                    animate={true}
                  />
                </div>
              </div>
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
            {/* Ligne 1: "Prêt à transformer" - taille moyenne */}
            <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
              Prêt à transformer vos
            </div>
            
            {/* Ligne 2: "IDÉES" - grande taille jaune */}
            <div className="text-7xl md:text-8xl font-black text-yellow-400 leading-none mb-4">
              IDÉES
            </div>
            
            {/* Ligne 3: "en" - petite taille */}
            <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
              en
            </div>
            
            {/* Ligne 4: "SUCCÈS DIGITAL" - très grande taille verte */}
            <div className="text-6xl md:text-7xl font-black text-green-400 leading-none mb-6">
              SUCCÈS DIGITAL
            </div>
            
            {/* Ligne 5: Question créative */}
            <div className="text-2xl md:text-3xl font-light text-white">
              qui marquent vraiment ?
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Nous ne créons pas que des campagnes marketing : nous orchestrons des <span className="text-yellow-400 font-semibold">expériences émotionnelles</span> 
            qui transforment vos prospects en ambassadeurs passionnés. <span className="text-green-400 font-semibold">L'IA amplifie votre créativité</span>, 
            l'humain guide l'âme de vos projets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-xl px-12 py-6 relative overflow-hidden group"
            >
              <span className="relative z-10">Créons Votre Histoire</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </MagneticButton>
            <MagneticButton
              href="/realisations"
              variant="secondary"
              className="text-xl px-12 py-6 border-2 border-gray-600 hover:border-purple-400 transition-all duration-300"
            >
              Voir Nos Créations
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