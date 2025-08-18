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
          <AnimatedElement type="fadeIn" delay={0.1}>
            <div className="text-center mb-24">
              <div className="flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">NOTRE MÉTHODE EN 3 PILIERS</span>
              </div>
              
              {/* Titre avec jeux typographiques créatifs */}
              <div className="mb-12 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* Ligne 1: "Nous transformons vos" - taille moyenne */}
                <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                  Nous transformons vos
                </div>
                
                {/* Ligne 2: "DONNÉES VÉRIFIÉES" - grande taille avec animation */}
                <div className="text-6xl md:text-8xl font-black text-yellow-400 leading-none mb-4 relative">
                  DONNÉES VÉRIFIÉES
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 animate-pulse" />
                </div>
                
                {/* Ligne 3: "en" - petite taille italique */}
                <div className="text-lg md:text-xl font-light text-gray-400 italic mb-2">
                  en
                </div>
                
                {/* Ligne 4: "RÉSULTATS COMMERCIAUX" - très grande taille */}
                <div className="text-7xl md:text-9xl font-black text-green-400 leading-none mb-3">
                  RÉSULTATS COMMERCIAUX
                </div>
                
                {/* Ligne 5: "qui marquent les esprits" - taille moyenne */}
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
            
            {/* FORCE 1: CRÉATIVITÉ AMPLIFIÉE PAR L'IA */}
            <AnimatedElement type="slideUp" delay={0.2}>
              <div className="backdrop-blur-sm border border-purple-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group">
                {/* Layout centré avec graphique intégré */}
                <div className="p-16 bg-gradient-to-br from-purple-900/20 to-black/60">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full mr-6 flex items-center justify-center">
                        <IconeOSOM type="palette" size={32} color="white" ariaLabel="Créativité amplifiée" />
                      </div>
                      <div>
                        <div className="text-purple-400 font-medium text-sm mb-2">PILIER #1 - CRÉATION AUGMENTÉE</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="fadeIn" delay={0.3}>
                      <div className="text-center mb-10">
                        {/* Titre créatif avec jeux typographiques */}
                        <div className="text-3xl md:text-4xl font-light text-white mb-4">
                          Créativité augmentée, guidée par l'humain
                        </div>
                        <div className="text-6xl md:text-7xl font-black text-purple-400 leading-none mb-4">
                          TECHNOLOGIES MAÎTRISÉES
                        </div>
                        <div className="text-2xl md:text-3xl font-light text-gray-300">
                          IA sur mesure — rapide, utile, orienté client.
                        </div>
                      </div>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      <span className="text-purple-400 font-semibold">L'IA accélère, l'expertise dirige.</span> Contenus qui émeuvent et convertissent. Développement agile par sprints.
                    </p>
                    
                    {/* Cartes business réduites */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 hover:bg-purple-400/15 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="lightning" size={24} color="purple" ariaLabel="Veille technologique" />
                          <div className="text-purple-400 font-bold text-lg ml-3">Veille & Mise à Jour</div>
                        </div>
                        <div className="text-gray-300 mb-4">Technologies constamment actualisées, formation continue et adaptation aux nouveautés du marché digital.</div>
                      </div>
                      
                      <div className="bg-purple-400/5 rounded-xl p-6 border border-purple-400/20 hover:bg-purple-400/10 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="star" size={24} color="purple" ariaLabel="IA sur mesure" />
                          <div className="text-purple-400 font-bold text-lg ml-3">IA Sur Mesure</div>
                        </div>
                        <div className="text-gray-300 mb-4">Solutions d'intelligence artificielle personnalisées selon vos besoins spécifiques et votre secteur d'activité.</div>
                      </div>
                      
                      <div className="bg-purple-400/5 rounded-xl p-6 border border-purple-400/20 hover:bg-purple-400/10 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <IconeOSOM type="tools" size={24} color="purple" ariaLabel="Itérations rapides" />
                          <div className="text-purple-400 font-bold text-lg ml-3">Itérations Rapides</div>
                        </div>
                        <div className="text-gray-300 mb-4">Développement agile avec feedback continu, ajustements en temps réel et livraisons fréquentes.</div>
                      </div>
                    </div>
                    
                    {/* Graphique CTR circulaire avec hover effect */}
                    <AnimatedElement type="slideUp" delay={0.7}>
                      <div className="mb-10">
                        <CTRCircularChart
                          title="CTR OSOM vs Industrie"
                          subtitle="Performance Marketing IA • Données Meta Ads vérifiées"
                          className="rounded-2xl border border-purple-400/20 bg-purple-400/5"
                        />
                      </div>
                    </AnimatedElement>
                    
                    {/* Stats block masqué selon instructions */}
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            {/* FORCE 2: INSIGHTS QUI INSPIRENT */}
            <AnimatedElement type="slideUp" delay={0.4}>
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
                        <div className="text-cyan-400 font-medium text-sm mb-2">PILIER #2 - INSIGHTS ACTIONNABLES</div>
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
                      <span className="text-cyan-400 font-semibold">Décisions guidées par GA4.</span> Nous révélons le ROI invisible et transformons chaque métrique en profit concret.
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
            <AnimatedElement type="slideUp" delay={0.6}>
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
                        <div className="text-green-400 font-medium text-sm mb-2">PILIER #3 - TECH SUPÉRIEURE</div>
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
                      <span className="text-green-400 font-semibold">Core Web Vitals 95+.</span> Chargement &lt; 2s, KPI suivis en temps réel, gains mesurables.
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
                    title="&lt; 2s vs 5-8s"
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