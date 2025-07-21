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

      {/* Les 3 Forces OSOM - Design System Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">LES 3 FORCES OSOM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Data au <span className="text-yellow-400 font-bold">Service du Client</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Notre expertise repose sur 3 piliers complémentaires. Chaque décision est guidée par la data pour maximiser votre retour sur investissement.
            </p>
          </div>
          
          <div className="space-y-20">
            
            {/* FORCE 1: Design & Expérience Utilisateur */}
            <div className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl overflow-hidden min-h-[600px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-full">
                {/* Graphique à gauche - Layout créatif */}
                <div className="bg-gradient-to-br from-yellow-400/10 to-black/60 p-8 flex items-center">
                  <GraphiqueConversion
                    title="Performance Design"
                    subtitle="Sites OSOM vs traditionnels"
                    traditionalRate={2.5}
                    osomRate={11.3}
                    className="w-full border-0"
                  />
                </div>
                
                {/* Contenu principal - Plus d'espace */}
                <div className="col-span-2 p-16 bg-gradient-to-br from-black/60 to-black/30">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-yellow-400 rounded-2xl mr-6 flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">🎨</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                          Design & Expérience Utilisateur
                        </h3>
                        <div className="text-yellow-400 font-medium">FORCE #1 - DATA-DRIVEN DESIGN</div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Chaque pixel est optimisé grâce à nos analyses comportementales. Nos sites convertissent 4x mieux car nous concevons avec la data utilisateur, pas l'intuition.
                    </p>
                    
                    {/* Arguments renforcés */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-yellow-400/5 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="font-semibold text-yellow-400 mb-2">Architecture Conversion-Optimisée</div>
                        <div className="text-gray-300">Parcours utilisateur testé sur 1000+ interactions. Chaque bouton, formulaire et CTA est positionné selon nos heatmaps comportementales.</div>
                      </div>
                      
                      <div className="bg-yellow-400/5 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="font-semibold text-yellow-400 mb-2">Performance Mesurable</div>
                        <div className="text-gray-300">Sites livrés avec PageSpeed 95+, temps de chargement &lt; 2s. Impact direct sur le SEO et l'expérience utilisateur mesurée via GA4.</div>
                      </div>
                      
                      <div className="bg-yellow-400/5 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="font-semibold text-yellow-400 mb-2">Technologies Modernes</div>
                        <div className="text-gray-300">Next.js, React, Tailwind. Stack technique choisie pour la performance, pas la tendance. ROI technique mesuré sur 200+ jours post-lancement.</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                        <div className="text-yellow-400 font-bold text-lg mb-2">OSOM Web Formula</div>
                        <div className="text-white text-lg">1500 CHF • 10 jours • ROI garanti</div>
                        <div className="text-gray-400 text-sm mt-2">Artisan peinture Valais (2024)</div>
                      </div>
                      
                      <div className="p-6 bg-yellow-400/5 rounded-xl border border-yellow-400/20">
                        <div className="text-yellow-400 text-2xl font-light mb-2">11.3% vs 2.5%</div>
                        <div className="text-gray-300">Taux de conversion moyen</div>
                        <div className="text-gray-400 text-sm mt-2">Basé sur analyses GA4 6 mois</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FORCE 2: SEO & Acquisition Stratégique */}
            <div className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden min-h-[600px]">
              {/* Layout centré avec background graphique */}
              <div className="relative">
                {/* Background graphique */}
                <div className="absolute inset-0 opacity-30">
                  <GraphiqueComparatif
                    title="Qualité d'Engagement"
                    subtitle="Trafic SEO OSOM vs Direct"
                    data={[
                      { label: "Trafic SEO OSOM", value: 68.6, color: "#06B6D4" },
                      { label: "Trafic Direct", value: 44.6, color: "#6B7280" }
                    ]}
                    className="h-full border-0 opacity-60"
                  />
                </div>
                
                {/* Contenu au premier plan */}
                <div className="relative z-10 p-16 bg-gradient-to-br from-black/80 to-black/60">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-cyan-400 rounded-2xl mr-6 flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                          SEO & Acquisition Stratégique
                        </h3>
                        <div className="text-cyan-400 font-medium">FORCE #2 - TRAFIC QUALIFIÉ SUPÉRIEUR</div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-12" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Notre diagnostic externe révèle ce que vous ne voyez pas. Nous transformons les données invisibles en trafic qualifié supérieur, avec un engagement 54% plus élevé que la moyenne.
                    </p>
                    
                    {/* Arguments centrés sur 2 colonnes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30">
                        <div className="text-cyan-400 font-bold text-lg mb-4">Diagnostic Révélateur</div>
                        <div className="text-gray-300 mb-4">Audit externe sans accès GA4/GSC qui révèle les gaps invisibles même aux propriétaires. 397x potentiel découvert vs concurrents leaders.</div>
                        <div className="text-cyan-400 text-sm">Entreprise immobilier Genève (2024)</div>
                      </div>
                      
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30">
                        <div className="text-cyan-400 font-bold text-lg mb-4">Trafic Qualifié Prouvé</div>
                        <div className="text-gray-300 mb-4">68.6% engagement trafic SEO vs 44.6% direct. Chaque visiteur SEO OSOM génère 54% plus de valeur pour votre business.</div>
                        <div className="text-cyan-400 text-sm">Artisan lumière Valais (200+ jours GA4)</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20">
                        <div className="text-cyan-400 font-bold text-lg mb-4">Optimisation Continue</div>
                        <div className="text-gray-300 mb-4">Suivi mensuel ROI transparent. Chaque action SEO est mesurée, chaque optimisation justifiée par les données de performance.</div>
                        <div className="text-cyan-400 text-sm">Méthode OSOM standardisée</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20">
                        <div className="text-cyan-400 font-bold text-lg mb-4">ROI Transparent</div>
                        <div className="text-gray-300 mb-4">Dashboard temps réel + rapports mensuels. Visibilité complète sur l'impact de chaque euro investi en SEO.</div>
                        <div className="text-cyan-400 text-sm">GA4 + Search Console intégrés</div>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-400/10 rounded-xl p-8 border border-cyan-400/30 max-w-2xl mx-auto">
                      <div className="text-cyan-400 font-bold text-2xl mb-2">+54% Engagement Supérieur</div>
                      <div className="text-white text-lg">Trafic SEO OSOM vs trafic direct standard</div>
                      <div className="text-gray-400 text-sm mt-2">Analyse comparative sur 6 mois • Données vérifiables</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FORCE 3: Data-Driven Decision Making */}
            <div className="backdrop-blur-sm border border-purple-400/20 rounded-3xl overflow-hidden min-h-[600px]">
              {/* Layout asymétrique diagonal */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                {/* Contenu principal - 3 colonnes */}
                <div className="col-span-3 p-16 bg-gradient-to-br from-purple-900/20 to-black/60">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-purple-400 rounded-2xl mr-6 flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                          Data-Driven Decision Making
                        </h3>
                        <div className="text-purple-400 font-medium">FORCE #3 - DÉCISIONS BASÉES SUR LA DATA</div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Nous révélons le ROI invisible de vos actions marketing. 140x plus efficace que la publicité payante, nos stratégies organiques sont guidées par l'analyse comportementale, pas l'intuition.
                    </p>
                    
                    {/* Arguments avec data forte */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg p-6 border-l-4 border-purple-400">
                        <div className="flex justify-between items-start mb-3">
                          <div className="font-semibold text-purple-400">Révolution Organique</div>
                          <div className="text-purple-400 font-bold text-lg">140x ROI</div>
                        </div>
                        <div className="text-gray-300">688 conversions organiques vs 49 payantes. Même audience, même période, budget 10x inférieur. La data ne ment jamais.</div>
                        <div className="text-purple-300 text-sm mt-2">PME formation Valais • 6 mois GA4 + Meta Business</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg p-6 border-l-4 border-purple-400">
                        <div className="flex justify-between items-start mb-3">
                          <div className="font-semibold text-purple-400">Coût d'Acquisition</div>
                          <div className="text-purple-400 font-bold text-lg">-99.3%</div>
                        </div>
                        <div className="text-gray-300">Réduction massive du CPA grâce à la stratégie organique. Chaque franc investi génère 140x plus de conversions qu'en publicité payante.</div>
                        <div className="text-purple-300 text-sm mt-2">Comparatif Meta Ads vs Organique • ROI vérifiable</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-400/5 to-transparent rounded-lg p-6 border-l-4 border-purple-300">
                        <div className="font-semibold text-purple-400 mb-3">Tracking Transparent</div>
                        <div className="text-gray-300">Dashboard temps réel, attribution complète, ROI par canal. Vous savez exactement d'où viennent vos résultats et pourquoi.</div>
                        <div className="text-purple-300 text-sm mt-2">GA4 + Data Studio + Rapports mensuels</div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-400/10 rounded-xl p-8 border border-purple-400/30">
                      <div className="text-purple-400 font-bold text-2xl mb-2">688 vs 49 Conversions</div>
                      <div className="text-white text-lg">Stratégie organique vs publicité payante</div>
                      <div className="text-gray-400 text-sm mt-2">Période identique • Audience identique • Budget 10x inférieur</div>
                    </div>
                  </div>
                </div>
                
                {/* Graphique diagonal - 2 colonnes */}
                <div className="col-span-2 bg-gradient-to-tl from-purple-900/30 to-black/80 flex items-center p-8">
                  <GraphiqueImpact
                    title="Impact Révolutionnaire"
                    subtitle="Données réelles PME Suisse romande"
                    organicValue={688}
                    paidValue={49}
                    multiplier={140}
                    className="w-full border-0"
                    organicColor="#A855F7"
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