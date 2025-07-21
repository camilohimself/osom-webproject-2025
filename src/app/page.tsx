import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { GraphiqueLinear, GraphiqueConversion, GraphiqueComparatif, GraphiqueImpact } from '@/components/ui'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section avec Graphique Linear Style */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">OSOM PERFORMANCE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Build with <span className="text-yellow-400 font-bold">focus</span>.<br />
                Ship with <span className="text-yellow-400 font-bold">impact</span>.
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Marketing digital basé sur la performance mesurable. Nos études de cas prouvent des résultats 140x supérieurs à la concurrence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                  Voir nos résultats
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>688 vs 49 conversions (GA4)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  <span>68.6% vs 44.6% engagement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>ROI transparent et mesurable</span>
                </div>
              </div>
            </div>
            
            {/* Right: Graphique Linear */}
            <div>
              <GraphiqueLinear
                title="Performance Impact"
                subtitle="Données réelles basées sur 400+ jours d'analyses GA4"
                primaryMetric={{
                  label: "Stratégie OSOM",
                  value: "688 conversions",
                  color: "#06B6D4"
                }}
                secondaryMetric={{
                  label: "Publicité payante",
                  value: "49 conversions",
                  color: "#6B7280"
                }}
                improvement={{
                  label: "ROI Supérieur",
                  value: "140x plus efficace"
                }}
                backgroundColor="rgba(0,0,0,0.3)"
                className="backdrop-blur-sm border border-white/10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Vue d'Ensemble Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">EXPERTISE OVERVIEW</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Notre <span className="text-yellow-400 font-bold">Vue d'Ensemble</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Chaque service transforme la performance. Découvrez l'impact mesurable de notre approche data-driven.
            </p>
          </div>
          
          <div className="space-y-12">
            
            {/* Création Sites Web - Style Linear avec GraphiqueConversion */}
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12 bg-gradient-to-br from-black/50 to-black/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">🌐</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Création de Sites Web
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Sites optimisés conversion + SEO technique. Notre approche OSOM Web génère des résultats mesurables dès la mise en ligne.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-yellow-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Architecture conversion-optimisée</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      <span>SEO technique intégré</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Technologies modernes</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                    <div className="text-yellow-400 font-medium text-sm mb-1">OSOM Web Formula</div>
                    <div className="text-white font-light">1500 CHF • 10 jours • ROI garanti</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900/80 to-black/60">
                  <GraphiqueConversion
                    title="Taux de Conversion"
                    subtitle="Performance sites OSOM vs traditionnels"
                    traditionalRate={2.5}
                    osomRate={11.3}
                    className="h-full border-0"
                  />
                </div>
              </div>
            </div>
            
            {/* SEO & Référencement - Style Linear avec GraphiqueComparatif */}
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/60 order-2 lg:order-1">
                  <GraphiqueComparatif
                    title="Qualité d'Engagement"
                    subtitle="Trafic SEO OSOM vs Direct - Artisane de Lumière"
                    data={[
                      { label: "Trafic SEO OSOM", value: 68.6, color: "#06B6D4", description: "Engagement supérieur" },
                      { label: "Trafic Direct", value: 44.6, color: "#6B7280", description: "Standard industrie" }
                    ]}
                    className="h-full border-0"
                  />
                </div>
                
                <div className="p-12 bg-gradient-to-br from-black/50 to-black/20 order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-cyan-400 rounded-lg mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">🚀</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      SEO & Référencement
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Notre diagnostic SEO révèle les opportunités cachées. Trafic qualifié supérieur garanti.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-cyan-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      <span>Diagnostic technique complet</span>
                    </div>
                    <div className="flex items-center text-cyan-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      <span>Optimisation secteur spécifique</span>
                    </div>
                    <div className="flex items-center text-cyan-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      <span>Tracking ROI transparent</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                    <div className="text-cyan-400 font-medium text-sm mb-1">Méthode OSOM</div>
                    <div className="text-white font-light">Trafic 54% plus engagé • Mesurable</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Marketing Digital - Style Linear avec GraphiqueImpact */}
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12 bg-gradient-to-br from-black/50 to-black/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">📈</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Marketing Digital
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Stratégie 140x plus performante que la publicité payante. Conversions durables et coût réduit de 99.3%.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-yellow-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Contenu organique stratégique</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Ciblage audience précis</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      <span>ROI vérifié GA4 + Meta</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                    <div className="text-yellow-400 font-medium text-sm mb-1">Révolution OSOM</div>
                    <div className="text-white font-light">140x plus efficace • 99.3% coût réduit</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900/80 to-black/60">
                  <GraphiqueImpact
                    title="Impact Révolutionnaire"
                    subtitle="Stratégie organique vs publicité payante"
                    organicValue={688}
                    paidValue={49}
                    multiplier={140}
                    className="h-full border-0"
                  />
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