import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { OSOMMotionHero } from '@/components/ui'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section avec Motion Design */}
      <OSOMMotionHero />

      {/* Services Section - Vue d'Ensemble Expertise */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Notre <span className="text-yellow-400 font-bold">Vue d'Ensemble</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Chaque axe change la donne. Nos études de cas prouvent l'impact de notre approche globale.
            </p>
            <div className="mt-8 text-yellow-400 text-lg font-mono">
              → Méthodologie basée sur 400+ jours d'analyses GA4
            </div>
          </div>
          
          <div className="space-y-16">
            
            {/* Création Sites Web */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:border-yellow-400/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl mr-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black font-bold text-2xl">🌐</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Création de Sites Web
                    </h3>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Sites optimisés conversion + SEO technique. Notre approche OSOM Web génère des résultats mesurables dès la mise en ligne.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Architecture conversion-optimisée</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">SEO technique intégré (GA4 + tracking)</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Technologies modernes (Next.js, React)</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                    <div className="text-yellow-400 font-bold text-lg mb-2">OSOM Web Formula</div>
                    <div className="text-white text-xl font-light">1500 CHF • 10 jours • ROI garanti</div>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
                  <h4 className="text-white text-xl font-semibold mb-6">Preuve d'Impact</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sites traditionnels</span>
                      <span className="text-red-400 font-bold">2-3% conversion</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sites OSOM</span>
                      <span className="text-green-400 font-bold">11.3% conversion</span>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-yellow-400 text-2xl font-light">4x plus performant</div>
                      <div className="text-gray-400 text-sm">Basé sur étude Culture Peinture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* SEO & Référencement */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:border-yellow-400/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-black/30 rounded-2xl p-8 border border-gray-700">
                  <h4 className="text-white text-xl font-semibold mb-6">Diagnostic Révélateur</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Trafic Direct</span>
                      <span className="text-gray-400">44.6% engagement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Trafic SEO OSOM</span>
                      <span className="text-green-400 font-bold">68.6% engagement</span>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-yellow-400 text-2xl font-light">+54% plus qualifié</div>
                      <div className="text-gray-400 text-sm">Cas Artisane de Lumière</div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl mr-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black font-bold text-2xl">🚀</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      SEO & Référencement
                    </h3>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Notre diagnostic SEO révèle les opportunités cachées. Approche technique + contenu = trafic qualifié supérieur.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Diagnostic technique complet</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Optimisation secteur spécifique</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Tracking ROI transparent (GA4)</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-green-500/10 rounded-xl border border-green-500/30">
                    <div className="text-green-400 font-bold text-lg mb-2">Méthode OSOM</div>
                    <div className="text-white text-xl font-light">Trafic 54% plus engagé • Mesurable</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Marketing Digital */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:border-yellow-400/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl mr-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black font-bold text-2xl">📈</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Marketing Digital
                    </h3>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Stratégie 140x plus performante que la pub payante. Notre approche organique génère des conversions durables.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Contenu organique Facebook/Instagram</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">Ciblage audience spécifique</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="mr-3">✓</span>
                      <span className="text-lg">ROI vérifié Meta Business + GA4</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-purple-500/10 rounded-xl border border-purple-500/30">
                    <div className="text-purple-400 font-bold text-lg mb-2">Révolution OSOM</div>
                    <div className="text-white text-xl font-light">140x plus efficace • Coût 99.3% inférieur</div>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
                  <h4 className="text-white text-xl font-semibold mb-6">Culture Peinture Case</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Publicité payante</span>
                      <span className="text-red-400">49 conversions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Organique OSOM</span>
                      <span className="text-green-400 font-bold">688 conversions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Budget investi</span>
                      <span className="text-yellow-400">10x moins cher</span>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-yellow-400 text-2xl font-light">140x ROI supérieur</div>
                      <div className="text-gray-400 text-sm">200 jours de données GA4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt à transformer<br />
            vos <span className="text-yellow-400 font-bold">performances</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Discutons de votre projet et découvrons comment nous pouvons multiplier votre ROI avec une approche data-driven.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Consultation gratuite
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Calculer mon ROI
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Données vérifiables GA4</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Résultats 140x supérieurs</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Performance garantie</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}