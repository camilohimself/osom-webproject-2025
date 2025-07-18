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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Calculateur ROI Marketing
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Découvrez le potentiel de croissance de votre entreprise avec nos solutions digitales.
                Obtenez une projection personnalisée de votre retour sur investissement.
              </p>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Calculator Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-primary mx-auto mb-4"></div>
                <p className="text-lg text-brand-dark">Calcul en cours...</p>
                <p className="text-sm text-brand-light">Analyse de vos données</p>
              </div>
            </div>
          ) : results ? (
            <CalculatorResults results={results} onReset={handleReset} />
          ) : (
            <div>
              <div className="text-center mb-12">
                <ScrollAnimations animation="fadeIn">
                  <h2 className="text-3xl font-bold text-osom-black mb-4">
                    Calculez votre ROI en 4 étapes
                  </h2>
                  <p className="text-lg text-brand-dark max-w-2xl mx-auto">
                    Répondez à quelques questions sur votre entreprise et obtenez une projection
                    détaillée de votre retour sur investissement marketing.
                  </p>
                </ScrollAnimations>
              </div>
              
              <CalculatorForm onResults={handleResults} onLoading={handleLoading} />
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      {!results && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimations animation="fadeIn">
              <h2 className="text-3xl font-bold text-center text-osom-black mb-12">
                Pourquoi utiliser notre calculateur ?
              </h2>
            </ScrollAnimations>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimations animation="slideUp" delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mb-4 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-osom-black mb-2">
                    Projections Précises
                  </h3>
                  <p className="text-brand-dark">
                    Algorithmes basés sur des données réelles du marché suisse et notre expérience de 100+ projets
                  </p>
                </div>
              </ScrollAnimations>

              <ScrollAnimations animation="slideUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-secondary rounded-lg mb-4 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-osom-black mb-2">
                    Recommandations Personnalisées
                  </h3>
                  <p className="text-brand-dark">
                    Conseils stratégiques adaptés à votre secteur et vos objectifs de croissance
                  </p>
                </div>
              </ScrollAnimations>

              <ScrollAnimations animation="slideUp" delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-accent rounded-lg mb-4 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-osom-black mb-2">
                    Analyse Budgétaire
                  </h3>
                  <p className="text-brand-dark">
                    Répartition optimale de votre budget marketing pour maximiser votre ROI
                  </p>
                </div>
              </ScrollAnimations>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}