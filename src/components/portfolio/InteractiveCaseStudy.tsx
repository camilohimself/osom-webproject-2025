'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import B2BTooltip from './B2BTooltip'
import AnimatedCounter from './AnimatedCounter'
import ProfessionalBadge from './ProfessionalBadge'

interface Metric {
  label: string
  value: string
  comparison: string
  trend: 'up' | 'down'
  impact: 'positive' | 'negative' | 'neutral'
  tooltip?: string
}

interface CaseStudyData {
  id: string
  client: string
  sector: string
  timeline: string
  challenge: string
  solution: string
  investment: {
    osom: number
    competitor: number
  }
  results: {
    conversions: {
      osom: number
      competitor: number
    }
    roi: {
      osom: number
      competitor: number
    }
    sessions: {
      osom: number
      competitor: number
    }
  }
  metrics: Metric[]
  insights: string[]
  dataSource: string
}

interface InteractiveCaseStudyProps {
  data: CaseStudyData
  isExpanded?: boolean
  onToggle?: () => void
}

const MetricCard = ({ metric, index }: { metric: Metric; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // B2B terminology mapping
  const getB2BExplanation = (label: string) => {
    const explanations: Record<string, { term: string; explanation: string }> = {
      'Taux de conversion': {
        term: 'Taux de Conversion',
        explanation: 'Pourcentage de visiteurs qui réalisent l\'action souhaitée (achat, contact, téléchargement). Métrique clé pour mesurer l\'efficacité commerciale de votre trafic.'
      },
      'Efficacité budgétaire': {
        term: 'Efficacité Budgétaire ROI',
        explanation: 'Ratio coût/performance. Mesure combien chaque franc investi génère de résultats. Essentiel pour optimiser l\'allocation des budgets marketing.'
      },
      'Engagement utilisateur': {
        term: 'Engagement Utilisateur',
        explanation: 'Temps passé sur le site et interaction avec le contenu. Indicateur de qualité du trafic et de pertinence de l\'offre pour votre audience cible.'
      },
      'Coût par conversion': {
        term: 'Coût d\'Acquisition Client (CAC)',
        explanation: 'Montant investi pour obtenir une conversion. Métrique fondamentale pour calculer la rentabilité et optimiser les canaux d\'acquisition.'
      },
      'Volume de trafic': {
        term: 'Volume de Trafic Qualifié',
        explanation: 'Nombre de visiteurs pertinents pour votre business. Focus sur la qualité plutôt que la quantité pour maximiser le ROI marketing.'
      },
      'ROI investissement': {
        term: 'Retour sur Investissement (ROI)',
        explanation: 'Rapport entre les bénéfices générés et les coûts engagés. Métrique ultime pour valider la rentabilité de vos actions marketing.'
      }
    }
    return explanations[label] || { term: label, explanation: 'Métrique de performance business.' }
  }

  const b2bInfo = getB2BExplanation(metric.label)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white border border-gray-200 p-6 rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
        isHovered ? 'border-yellow-400 shadow-yellow-100' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Professional Badge */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <ProfessionalBadge 
          label="B2B"
          value="✓"
          variant={metric.impact === 'positive' ? 'green' : 'blue'}
          icon="verified"
        />
      </div>

      {/* Metric Value with Animation */}
      <div className="flex items-center justify-between mb-4">
        <div className={`text-3xl font-light ${
          metric.impact === 'positive' ? 'text-green-600' : 
          metric.impact === 'negative' ? 'text-red-600' : 'text-gray-900'
        }`}>
          <AnimatedCounter 
            from={0}
            to={parseFloat(metric.value.replace(/[^0-9.]/g, '')) || 0}
            suffix={metric.value.replace(/[0-9.]/g, '')}
            duration={1500}
            delay={index * 200}
          />
        </div>
        <motion.div 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg className={`w-4 h-4 ${
            metric.trend === 'up' ? 'text-green-600 rotate-0' : 'text-red-600 rotate-180'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7v10M17 7H7" />
          </svg>
        </motion.div>
      </div>

      {/* Metric Label with B2B Tooltip */}
      <div className="text-sm text-gray-500 mb-2">
        <B2BTooltip 
          term={b2bInfo.term}
          explanation={b2bInfo.explanation}
          variant="light"
        >
          {metric.label}
        </B2BTooltip>
      </div>
      
      {/* Comparison */}
      <div className="text-xs text-gray-400 font-mono">{metric.comparison}</div>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {isHovered && metric.tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 bg-gray-900 text-white text-xs px-4 py-3 rounded-lg whitespace-nowrap shadow-xl border border-gray-700"
          >
            <div className="font-semibold text-yellow-400 mb-1">Détail Technique</div>
            {metric.tooltip}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ROIComparison = ({ data }: { data: CaseStudyData }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 rounded-xl border border-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m20 20 20-20v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <B2BTooltip 
            term="Analyse ROI Comparative"
            explanation="Comparaison directe des performances financières entre stratégies. Métrique clé pour la prise de décision budgétaire et l'allocation des ressources marketing."
          >
            <h4 className="text-lg font-medium">ROI Comparison Analysis</h4>
          </B2BTooltip>
          
          {/* Professional Badges */}
          <div className="flex justify-center space-x-3 mt-4">
            <ProfessionalBadge label="DATA" value="GA4" variant="blue" icon="analytics" />
            <ProfessionalBadge label="PÉRIODE" value="200J" variant="purple" icon="performance" />
            <ProfessionalBadge label="VÉRIFIÉ" value="B2B" variant="green" icon="security" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {/* OSOM Results */}
          <motion.div 
            className="text-center p-6 bg-white rounded-lg border border-green-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xs text-gray-400 font-mono mb-2 tracking-wider">STRATÉGIE OSOM</div>
            <div className="text-4xl font-light text-green-600 mb-4">
              <AnimatedCounter 
                from={0}
                to={data.results.roi.osom}
                suffix="x"
                duration={2000}
                delay={500}
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                <AnimatedCounter from={0} to={data.results.conversions.osom} delay={800} /> conversions
              </div>
              <div className="text-sm text-gray-600">
                {data.investment.osom.toLocaleString()} CHF investis
              </div>
              <div className="text-xs text-green-600 font-medium">
                {(data.results.conversions.osom / data.investment.osom * 1000).toFixed(1)} conv/1k CHF
              </div>
            </div>
          </motion.div>

          {/* Competitor Results */}
          <motion.div 
            className="text-center p-6 bg-white rounded-lg border border-red-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xs text-gray-400 font-mono mb-2 tracking-wider">PUBLICITÉ PAYANTE</div>
            <div className="text-4xl font-light text-red-600 mb-4">
              <AnimatedCounter 
                from={0}
                to={data.results.roi.competitor}
                suffix="x"
                duration={2000}
                delay={700}
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                <AnimatedCounter from={0} to={data.results.conversions.competitor} delay={1000} /> conversions
              </div>
              <div className="text-sm text-gray-600">
                {data.investment.competitor.toLocaleString()} CHF investis
              </div>
              <div className="text-xs text-red-600 font-medium">
                {(data.results.conversions.competitor / data.investment.competitor * 1000).toFixed(1)} conv/1k CHF
              </div>
            </div>
          </motion.div>
        </div>

        {/* Performance Ratio */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-xs text-gray-400 font-mono mb-2">
            <B2BTooltip 
              term="Multiplicateur de Performance"
              explanation="Rapport d'efficacité entre les deux stratégies. Indique combien de fois la stratégie OSOM surperforme la méthode traditionnelle."
            >
              MULTIPLICATEUR DE PERFORMANCE
            </B2BTooltip>
          </div>
          <div className="text-3xl font-light text-yellow-600">
            <AnimatedCounter 
              from={1}
              to={Math.round(data.results.roi.osom / data.results.roi.competitor)}
              suffix="x plus efficace"
              duration={2500}
              delay={1800}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function InteractiveCaseStudy({ data, isExpanded = false, onToggle }: InteractiveCaseStudyProps) {
  const [activeTab, setActiveTab] = useState<'metrics' | 'insights' | 'data'>('metrics')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div 
        className="p-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-black mb-2">{data.client}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{data.sector}</span>
              <span>•</span>
              <span>{data.timeline}</span>
              <span>•</span>
              <span className="text-green-600 font-medium">
                {(data.results.roi.osom / data.results.roi.competitor).toFixed(0)}x ROI
              </span>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 flex items-center justify-center text-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'metrics', label: 'Performance Metrics' },
                  { id: 'insights', label: 'Strategic Insights' },
                  { id: 'data', label: 'Data Sources' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-yellow-400 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* ROI Comparison */}
                    <ROIComparison data={data} />
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'insights' && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-lg font-medium mb-4">Strategic Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{data.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4">OSOM Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{data.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-4">Key Insights</h4>
                      <ul className="space-y-3">
                        {data.insights.map((insight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{insight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'data' && (
                  <motion.div
                    key="data"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Data Sources & Methodology</h4>
                      <p className="text-gray-700 mb-4">{data.dataSource}</p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-2">TRACKING PERIOD</div>
                          <div className="font-medium">{data.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">TOTAL SESSIONS ANALYZED</div>
                          <div className="font-medium">
                            {(data.results.sessions.osom + data.results.sessions.competitor).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}