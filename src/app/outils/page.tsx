import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, type Locale } from '@/lib/i18n'
import { cookies } from 'next/headers'
import SEOAuditTool from '@/components/tools/SEOAuditTool'
import ROICalculator from '@/components/tools/ROICalculator'
import InteractiveBackground from '@/components/ui/InteractiveBackground'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Outils SEO Gratuits - Audit & Calculateur ROI | osom',
  description: 'Outils gratuits pour analyser votre site web : audit SEO automatisé et calculateur ROI avancé. Obtenez des recommendations personnalisées.',
  keywords: 'audit seo gratuit, calculateur roi, outils marketing, analyse site web'
}

export default async function OutilsPage() {
  // Get locale from cookie
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  
  let currentLocale = defaultLocale
  if (localeCookie && ['fr', 'en', 'de'].includes(localeCookie)) {
    currentLocale = localeCookie as Locale
  }

  const dictionary = await getDictionary(currentLocale)

  // Lead capture will be handled by client components internally
  // Server components cannot pass async functions to client components

  return (
    <div className="min-h-screen bg-black relative">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Scroll Progress */}
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">
                OUTILS PREMIUM GRATUITS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Outils d'<span className="text-yellow-400 font-bold">Analyse</span> Professionnels
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Découvrez le potentiel réel de votre site web avec nos outils d'analyse avancés. 
              Audit SEO complet et calculateur ROI basés sur nos méthodes éprouvées.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                <span>Résultats en 30 secondes</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                <span>Basé sur +200 audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SEO Audit Tool */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-cyan-400 font-bold">Audit SEO</span> Automatisé
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Analysez les performances SEO de votre site et recevez des recommandations personnalisées. 
                Même outil utilisé pour nos clients à CHF 1,500.
              </p>
            </div>
            
            <SEOAuditTool />
          </div>

          {/* ROI Calculator */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-purple-400 font-bold">Calculateur ROI</span> Avancé
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Calculez le potentiel de croissance de votre site web avec notre méthodologie éprouvée. 
                Basé sur nos case studies avec ROI 14x supérieur.
              </p>
            </div>
            
            <ROICalculator />
          </div>

          {/* Social Proof Section */}
          <div className="bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-500/5 rounded-2xl p-12 border border-gray-800">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Résultats <span className="text-yellow-400 font-bold">Vérifiés</span> Clients
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 rounded-xl p-6 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">688</div>
                  <div className="text-white font-semibold">Conversions Organiques</div>
                  <div className="text-gray-400 text-sm">vs 49 payantes - Pure player Genève</div>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6 border border-cyan-400/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">68.6%</div>
                  <div className="text-white font-semibold">Engagement SEO</div>
                  <div className="text-gray-400 text-sm">vs 44.6% direct - Artisan Valais</div>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">14,171</div>
                  <div className="text-white font-semibold">Sessions Récupérées</div>
                  <div className="text-gray-400 text-sm">ROI invisible révélé</div>
                </div>
              </div>

              <div className="mt-8 text-gray-400 text-sm">
                📊 Données GA4 vérifiables • 200+ jours d'analyse • Clients réels
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt à <span className="text-yellow-400 font-bold">multiplier</span> vos résultats ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nos outils vous ont donné un aperçu. Découvrez ce qu'une stratégie complète peut accomplir.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              Audit personnalisé gratuit
            </a>
            <a
              href="/realisations"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              Voir nos case studies
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}