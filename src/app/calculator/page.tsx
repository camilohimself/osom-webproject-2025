'use client'

import { useState } from 'react'
import { CalculatorForm, CalculatorResults } from '@/components/calculator'
import { ScrollAnimations } from '@/components/animations'
import type { CalculatorResults as CalculatorResultsType } from '@/types/calculator'

export default function CalculatorPage() {
  const [results, setResults] = useState<CalculatorResultsType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleResults = (calculatorResults: CalculatorResultsType) => {
    setResults(calculatorResults)
  }

  const handleReset = () => {
    setResults(null)
  }

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header - Style Linear */}
      <section className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
        {/* Background Pattern Linear */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">CALCULATEUR GRATUIT</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Calculateur <span className="text-yellow-400 font-bold">ROI</span> Marketing
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Découvrez le potentiel de croissance de votre entreprise avec nos solutions digitales.
                Obtenez une <span className="text-yellow-400 font-semibold">projection personnalisée</span> de votre retour sur investissement.
              </p>
              
              {/* Stats Pills - Style Linear */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                  <span className="text-yellow-400 font-bold">4 étapes</span>
                  <span className="text-gray-300 ml-2">seulement</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                  <span className="text-green-400 font-bold">100%</span>
                  <span className="text-gray-300 ml-2">gratuit</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                  <span className="text-cyan-400 font-bold">2 min</span>
                  <span className="text-gray-300 ml-2">chrono</span>
                </div>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Calculator Content - Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
                <p className="text-lg text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Calcul en cours...</p>
                <p className="text-sm text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Analyse de vos données</p>
              </div>
            </div>
          ) : results ? (
            <CalculatorResults results={results} onReset={handleReset} />
          ) : (
            <div>
              <div className="text-center mb-20">
                <ScrollAnimations animation="fadeIn">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    <span className="text-green-400 text-sm font-medium tracking-wide">SIMPLE & RAPIDE</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Calculez votre <span className="text-green-400 font-bold">ROI</span> en 4 étapes
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Répondez à quelques questions sur votre entreprise et obtenez une <span className="text-green-400 font-semibold">projection détaillée</span> de votre retour sur investissement marketing.
                  </p>
                </ScrollAnimations>
              </div>
              
              <CalculatorForm onResults={handleResults} onLoading={handleLoading} />
            </div>
          )}
        </div>
      </section>

      {/* Features Section - Style Linear */}
      {!results && (
        <section className="py-32 bg-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimations animation="fadeIn">
              <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-purple-400 text-sm font-medium tracking-wide">AVANTAGES EXCLUSIFS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Pourquoi utiliser notre <span className="text-purple-400 font-bold">calculateur</span> ?
                </h2>
              </div>
            </ScrollAnimations>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ScrollAnimations animation="slideUp" delay={0.1}>
                <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-yellow-400/30 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-white/5 to-black/40 group">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Projections Précises
                      </h3>
                      <div className="w-8 h-1 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Algorithmes basés sur des données réelles du marché suisse et notre expérience de 100+ projets
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span className="text-xs text-gray-400 font-medium">Data-driven</span>
                      </div>
                      <div className="text-xs font-medium text-yellow-400">100+ projets →</div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>

              <ScrollAnimations animation="slideUp" delay={0.2}>
                <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-white/5 to-black/40 group">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Recommandations Personnalisées
                      </h3>
                      <div className="w-8 h-1 rounded-full bg-cyan-400"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Conseils stratégiques adaptés à votre secteur et vos objectifs de croissance
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span className="text-xs text-gray-400 font-medium">Personnalisé</span>
                      </div>
                      <div className="text-xs font-medium text-cyan-400">Sur mesure →</div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>

              <ScrollAnimations animation="slideUp" delay={0.3}>
                <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-green-400/30 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-white/5 to-black/40 group">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Analyse Budgétaire
                      </h3>
                      <div className="w-8 h-1 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Répartition optimale de votre budget marketing pour maximiser votre ROI
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-xs text-gray-400 font-medium">Optimisé</span>
                      </div>
                      <div className="text-xs font-medium text-green-400">ROI max →</div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}