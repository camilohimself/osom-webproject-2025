'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnalytics } from '@/hooks/useAnalytics'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

interface ROIInputs {
  monthlyTraffic: number
  conversionRate: number
  averageOrderValue: number
  monthlyCosts: number
  currentROI?: number
}

interface ROIResults {
  currentRevenue: number
  projectedRevenue: number
  revenueIncrease: number
  netGain: number
  roi: number
  paybackMonths: number
  yearlyProjection: number
}

interface ROICalculatorProps {
  onLeadCapture?: (email: string, calculationData: { inputs: ROIInputs, results: ROIResults }) => void
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ onLeadCapture }) => {
  const [inputs, setInputs] = useState<ROIInputs>({
    monthlyTraffic: 1000,
    conversionRate: 2.5,
    averageOrderValue: 150,
    monthlyCosts: 2000,
    currentROI: undefined
  })
  
  const [showResults, setShowResults] = useState(false)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmittingLead, setIsSubmittingLead] = useState(false)
  const { trackBusinessEvent, trackConversionWithLead } = useAnalytics()

  // Realistic improvement factors based on OSOM methodology
  const getImprovementFactors = () => {
    return {
      trafficIncrease: 2.2, // SEO + Content marketing
      conversionIncrease: 4.5, // UX + A/B testing (11.3% vs 2.5%)
      costOptimization: 0.7 // More efficient spend allocation
    }
  }

  const calculateROI = (): ROIResults => {
    const factors = getImprovementFactors()
    
    // Current performance
    const currentConversions = (inputs.monthlyTraffic * inputs.conversionRate) / 100
    const currentRevenue = currentConversions * inputs.averageOrderValue
    
    // Projected performance with OSOM optimization
    const projectedTraffic = inputs.monthlyTraffic * factors.trafficIncrease
    const projectedConversionRate = Math.min(inputs.conversionRate * factors.conversionIncrease, 15) // Cap at 15%
    const projectedConversions = (projectedTraffic * projectedConversionRate) / 100
    const projectedRevenue = projectedConversions * inputs.averageOrderValue
    
    // Cost optimization
    const optimizedCosts = inputs.monthlyCosts * factors.costOptimization
    
    // Calculate ROI metrics
    const revenueIncrease = projectedRevenue - currentRevenue
    const netGain = revenueIncrease - optimizedCosts
    const roi = ((projectedRevenue - optimizedCosts) / optimizedCosts) * 100
    const paybackMonths = optimizedCosts / (revenueIncrease / 12)
    const yearlyProjection = projectedRevenue * 12

    return {
      currentRevenue,
      projectedRevenue,
      revenueIncrease,
      netGain,
      roi,
      paybackMonths,
      yearlyProjection
    }
  }

  const handleCalculate = () => {
    setShowResults(true)
    trackBusinessEvent('roi_calculation_completed', 'lead_magnet', {
      monthly_traffic: inputs.monthlyTraffic,
      conversion_rate: inputs.conversionRate,
      aov: inputs.averageOrderValue
    })
    
    // Show lead capture after 3 seconds
    setTimeout(() => {
      setShowLeadCapture(true)
    }, 3000)
  }

  const handleLeadSubmit = async () => {
    if (!email.trim()) return
    
    setIsSubmittingLead(true)
    const results = calculateROI()
    
    try {
      // Calculate intent score based on business size indicators
      const revenueIndicator = inputs.monthlyTraffic * inputs.averageOrderValue
      const intentScore = revenueIndicator > 50000 ? 9 : revenueIndicator > 20000 ? 7 : 5
      
      // Track lead capture
      trackConversionWithLead('roi_calculator_lead', 20, {
        email: email,
        source: 'roi_calculator_tool',
        intent_score: intentScore
      })
      
      // Call parent callback
      onLeadCapture?.(email, { inputs, results })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success
      alert('✅ Stratégie personnalisée envoyée ! Vérifiez votre boîte e-mail.')
      
    } finally {
      setIsSubmittingLead(false)
    }
  }

  const updateInput = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
    if (showResults) {
      // Recalculate immediately when results are visible
      setTimeout(() => setShowResults(true), 100)
    }
  }

  const results = showResults ? calculateROI() : null

  return (
    <div className="bg-black/60 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Calculateur ROI Avancé</h3>
        <p className="text-gray-300">Découvrez le potentiel réel de votre site web</p>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Traffic Input */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Trafic mensuel (visiteurs uniques)
          </label>
          <input
            type="number"
            value={inputs.monthlyTraffic}
            onChange={(e) => updateInput('monthlyTraffic', parseInt(e.target.value) || 0)}
            className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="1000"
          />
          <div className="text-xs text-gray-400 mt-1">
            Ex: 1000, 5000, 10000+ visiteurs/mois
          </div>
        </div>

        {/* Conversion Rate */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Taux de conversion actuel (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={inputs.conversionRate}
            onChange={(e) => updateInput('conversionRate', parseFloat(e.target.value) || 0)}
            className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="2.5"
          />
          <div className="text-xs text-gray-400 mt-1">
            Moyenne industrie: 2-3% • Optimisé OSOM: 8-12%
          </div>
        </div>

        {/* Average Order Value */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Panier moyen (CHF)
          </label>
          <input
            type="number"
            value={inputs.averageOrderValue}
            onChange={(e) => updateInput('averageOrderValue', parseInt(e.target.value) || 0)}
            className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="150"
          />
          <div className="text-xs text-gray-400 mt-1">
            Valeur moyenne d'une commande/conversion
          </div>
        </div>

        {/* Monthly Marketing Costs */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Budget marketing mensuel (CHF)
          </label>
          <input
            type="number"
            value={inputs.monthlyCosts}
            onChange={(e) => updateInput('monthlyCosts', parseInt(e.target.value) || 0)}
            className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="2000"
          />
          <div className="text-xs text-gray-400 mt-1">
            Pub + SEO + Content + Outils actuels
          </div>
        </div>

      </div>

      {/* Calculate Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleCalculate}
          className="bg-purple-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-500 transition-colors"
        >
          📊 Calculer mon potentiel ROI
        </button>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {showResults && results && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            
            {/* ROI Overview */}
            <div className="bg-gradient-to-r from-purple-400/10 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter from={0} to={results.roi} duration={1.5} suffix="%" />
                </div>
                <div className="text-xl text-white font-semibold">ROI Projeté</div>
                <div className="text-gray-300 text-lg">
                  Retour sur investissement avec optimisation OSOM
                </div>
              </div>
            </div>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Revenue Comparison */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-purple-400 font-bold text-lg mb-4">💰 Revenus Mensuels</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Actuel</div>
                    <div className="text-2xl font-bold text-gray-300">
                      <AnimatedCounter from={0} to={results.currentRevenue} duration={1} prefix="CHF " />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Optimisé OSOM</div>
                    <div className="text-2xl font-bold text-green-400">
                      <AnimatedCounter from={0} to={results.projectedRevenue} duration={1.2} prefix="CHF " />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-600">
                    <div className="text-sm text-purple-400">Gain mensuel</div>
                    <div className="text-xl font-bold text-purple-400">
                      +<AnimatedCounter from={0} to={results.revenueIncrease} duration={1.4} prefix="CHF " />
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Improvements */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-purple-400 font-bold text-lg mb-4">📈 Améliorations</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Trafic SEO</div>
                    <div className="text-lg font-bold text-cyan-400">+120% organique</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Conversion</div>
                    <div className="text-lg font-bold text-yellow-400">
                      {inputs.conversionRate}% → {Math.min(inputs.conversionRate * 4.5, 15).toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Coût d'acquisition</div>
                    <div className="text-lg font-bold text-green-400">-30% CAC</div>
                  </div>
                </div>
              </div>

              {/* Timeline & Projection */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-purple-400 font-bold text-lg mb-4">⏱️ Projections</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Rentabilité</div>
                    <div className="text-lg font-bold text-green-400">
                      {results.paybackMonths.toFixed(1)} mois
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Revenus annuels</div>
                    <div className="text-lg font-bold text-white">
                      <AnimatedCounter from={0} to={results.yearlyProjection} duration={1.6} prefix="CHF " />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Gain net/an</div>
                    <div className="text-lg font-bold text-purple-400">
                      +<AnimatedCounter from={0} to={results.netGain * 12} duration={1.8} prefix="CHF " />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Methodology Explanation */}
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/60 rounded-lg p-6 border border-gray-600">
              <h4 className="text-white font-bold text-lg mb-3">🧮 Méthodologie de Calcul</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <strong className="text-cyan-400">Trafic SEO +120%:</strong><br />
                  Basé sur nos case studies (Culture Peinture, Artisane de Lumière)
                </div>
                <div>
                  <strong className="text-yellow-400">Conversion x4.5:</strong><br />
                  UX/UI optimisé + A/B testing (2.5% → 11.3% prouvé)
                </div>
                <div>
                  <strong className="text-green-400">Coût optimisé -30%:</strong><br />
                  Attribution multi-canal + budget réallocation
                </div>
              </div>
            </div>

            {/* Lead Capture */}
            <AnimatePresence>
              {showLeadCapture && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-yellow-400/10 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30"
                >
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      🎯 Stratégie Personnalisée (PDF)
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Plan d'action détaillé pour atteindre ces résultats + timeline réaliste de mise en œuvre
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        className="flex-1 bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        disabled={isSubmittingLead}
                      />
                      <button
                        onClick={handleLeadSubmit}
                        disabled={!email.trim() || isSubmittingLead}
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50"
                      >
                        {isSubmittingLead ? '📧 Envoi...' : 'Recevoir la Stratégie'}
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-400 mt-4">
                      ✓ Plan d'action personnalisé • ✓ Timeline réaliste • ✓ Budget recommandé
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ROICalculator