'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollAnimations } from '@/components/animations'
import { Button } from '@/components/ui'
import type { CalculatorResults } from '@/types/calculator'

interface CalculatorResultsProps {
  results: CalculatorResults
  onReset: () => void
}

export default function CalculatorResults({ results, onReset }: CalculatorResultsProps) {
  const numbersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!numbersRef.current) return

    const numbers = numbersRef.current.querySelectorAll('[data-animate-number]')
    
    numbers.forEach((element, index) => {
      const finalValue = Number(element.getAttribute('data-animate-number'))
      const obj = { value: 0 }
      
      gsap.to(obj, {
        value: finalValue,
        duration: 2,
        delay: index * 0.2,
        ease: 'power2.out',
        onUpdate: () => {
          const isPercentage = element.textContent?.includes('%')
          const isCurrency = element.textContent?.includes('CHF')
          
          if (isPercentage) {
            element.textContent = `${Math.round(obj.value)}%`
          } else if (isCurrency) {
            element.textContent = `${Math.round(obj.value).toLocaleString('fr-CH')} CHF`
          } else {
            element.textContent = Math.round(obj.value).toLocaleString('fr-CH')
          }
        }
      })
    })
  }, [results])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: 'CHF',
      minimumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('fr-CH').format(value)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ROI Header */}
      <ScrollAnimations animation="fadeIn">
        <div className="text-center bg-gradient-primary p-8 rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-4">Votre ROI Projeté</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="text-6xl font-bold" data-animate-number={results.roi}>
              {results.roi}%
            </div>
            <div className="text-left">
              <p className="text-lg">Retour sur investissement</p>
              <p className="text-sm opacity-90">
                Confiance: {results.confidence}%
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimations>

      {/* Key Metrics */}
      <div ref={numbersRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollAnimations animation="slideUp" delay={0.1}>
          <div className="bg-white p-6 rounded-lg shadow-brand-md text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2" data-animate-number={results.projectedRevenue}>
              {formatCurrency(results.projectedRevenue)}
            </div>
            <p className="text-brand-dark">Revenus projetés</p>
          </div>
        </ScrollAnimations>

        <ScrollAnimations animation="slideUp" delay={0.2}>
          <div className="bg-white p-6 rounded-lg shadow-brand-md text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2" data-animate-number={results.projectedLeads}>
              {formatNumber(results.projectedLeads)}
            </div>
            <p className="text-brand-dark">Leads projetés</p>
          </div>
        </ScrollAnimations>

        <ScrollAnimations animation="slideUp" delay={0.3}>
          <div className="bg-white p-6 rounded-lg shadow-brand-md text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2" data-animate-number={results.projectedTraffic}>
              {formatNumber(results.projectedTraffic)}
            </div>
            <p className="text-brand-dark">Visiteurs mensuels</p>
          </div>
        </ScrollAnimations>
      </div>

      {/* Investment Breakdown */}
      <ScrollAnimations animation="fadeIn">
        <div className="bg-white p-6 rounded-lg shadow-brand-md">
          <h3 className="text-xl font-semibold mb-4 text-osom-black">Répartition de l&apos;investissement</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-brand-primary">
                {formatCurrency(results.investmentBreakdown.webDevelopment)}
              </div>
              <p className="text-sm text-brand-dark">Développement Web</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-brand-primary">
                {formatCurrency(results.investmentBreakdown.seoOptimization)}
              </div>
              <p className="text-sm text-brand-dark">SEO</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-brand-primary">
                {formatCurrency(results.investmentBreakdown.contentMarketing)}
              </div>
              <p className="text-sm text-brand-dark">Content Marketing</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-brand-primary">
                {formatCurrency(results.investmentBreakdown.paidAdvertising)}
              </div>
              <p className="text-sm text-brand-dark">Publicité</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-brand-primary">
                {formatCurrency(results.investmentBreakdown.analytics)}
              </div>
              <p className="text-sm text-brand-dark">Analytics</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-brand-primary">
                {formatCurrency(results.investmentBreakdown.maintenance)}
              </div>
              <p className="text-sm text-brand-dark">Maintenance</p>
            </div>
          </div>
        </div>
      </ScrollAnimations>

      {/* Timeline */}
      <ScrollAnimations animation="fadeIn">
        <div className="bg-white p-6 rounded-lg shadow-brand-md">
          <h3 className="text-xl font-semibold mb-4 text-osom-black">Évolution dans le temps</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-dark mb-2">3 mois</div>
              <div className="text-lg font-bold text-brand-primary">
                {formatCurrency(results.timeline.month3.revenue)}
              </div>
              <div className="text-sm text-brand-dark">
                {formatNumber(results.timeline.month3.leads)} leads
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-dark mb-2">6 mois</div>
              <div className="text-lg font-bold text-brand-primary">
                {formatCurrency(results.timeline.month6.revenue)}
              </div>
              <div className="text-sm text-brand-dark">
                {formatNumber(results.timeline.month6.leads)} leads
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-dark mb-2">12 mois</div>
              <div className="text-lg font-bold text-brand-primary">
                {formatCurrency(results.timeline.month12.revenue)}
              </div>
              <div className="text-sm text-brand-dark">
                {formatNumber(results.timeline.month12.leads)} leads
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-brand-dark mb-2">24 mois</div>
              <div className="text-lg font-bold text-brand-primary">
                {formatCurrency(results.timeline.month24.revenue)}
              </div>
              <div className="text-sm text-brand-dark">
                {formatNumber(results.timeline.month24.leads)} leads
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimations>

      {/* Recommendations */}
      <ScrollAnimations animation="fadeIn">
        <div className="bg-white p-6 rounded-lg shadow-brand-md">
          <h3 className="text-xl font-semibold mb-4 text-osom-black">Nos recommandations</h3>
          <div className="space-y-3">
            {results.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-brand-dark">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimations>

      {/* CTA Section */}
      <ScrollAnimations animation="fadeIn">
        <div className="bg-gradient-secondary p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à concrétiser ces résultats ?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la mise en place d&apos;une stratégie digitale sur-mesure
            pour atteindre vos objectifs de croissance.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-white text-brand-dark hover:bg-gray-100"
            >
              Planifier un appel gratuit
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onReset}
              className="border-white text-white hover:bg-white hover:text-brand-dark"
            >
              Nouveau calcul
            </Button>
          </div>
        </div>
      </ScrollAnimations>

      {/* Disclaimer */}
      <div className="text-center text-sm text-brand-light">
        <p>
          * Ces projections sont basées sur des données moyennes du marché et peuvent varier selon votre secteur d&apos;activité.
          Un audit personnalisé permettra d&apos;affiner ces estimations.
        </p>
      </div>
    </div>
  )
}