'use client'

import { useState } from 'react'

interface CaseStudy {
  id: string
  client: string
  sector: string
  challenge: string
  solution: string
  metrics: {
    label: string
    before: string
    after: string
    improvement: string
    unit?: string
  }[]
  recommendations: string[]
  timeline: string
  investment: string
  roi: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'culture-peinture',
    client: 'Culture Peinture',
    sector: 'Formation 60+',
    challenge: 'Acquisition client coûteuse via publicité payante traditionnelle',
    solution: 'Stratégie SEO organique + optimisation conversion + contenu ciblé',
    metrics: [
      {
        label: 'Trafic organique',
        before: '120',
        after: '1,847',
        improvement: '+1439%',
        unit: 'sessions/mois'
      },
      {
        label: 'Leads qualifiés',
        before: '2',
        after: '31',
        improvement: '+1450%',
        unit: 'leads/mois'
      },
      {
        label: 'Coût d\'acquisition',
        before: '750',
        after: '48',
        improvement: '-93.6%',
        unit: 'CHF/lead'
      },
      {
        label: 'ROI campagne',
        before: '1.2x',
        after: '15.6x',
        improvement: '+1200%',
        unit: 'retour'
      }
    ],
    recommendations: [
      'Migration vers stratégie SEO long-terme',
      'Optimisation parcours utilisateur senior',
      'Content marketing adapté 60+',
      'Tracking avancé GA4 + événements'
    ],
    timeline: '200 jours',
    investment: '15x moins',
    roi: '15x plus'
  }
]

const RealisationsPage = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null)
  const [activeMetric, setActiveMetric] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Architectural Style */}
      <section className="bg-black text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-2">
                <div className="text-xs text-gray-400 font-mono tracking-wider">
                  PORTFOLIO
                </div>
                <div className="text-xs text-gray-400 font-mono tracking-wider mt-1">
                  2024-2025
                </div>
              </div>
              
              <div className="col-span-10">
                <h1 className="text-6xl font-light mb-8 tracking-tight">
                  Précision.<br />
                  Performance.<br />
                  <span className="text-yellow-400">Résultats.</span>
                </h1>
                
                <div className="grid grid-cols-3 gap-8 mt-16">
                  <div className="border-l border-gray-700 pl-6">
                    <div className="text-2xl font-light">1,439%</div>
                    <div className="text-xs text-gray-400 mt-1">Croissance trafic moyenne</div>
                  </div>
                  <div className="border-l border-gray-700 pl-6">
                    <div className="text-2xl font-light">93.6%</div>
                    <div className="text-xs text-gray-400 mt-1">Réduction coûts acquisition</div>
                  </div>
                  <div className="border-l border-gray-700 pl-6">
                    <div className="text-2xl font-light">15.6x</div>
                    <div className="text-xs text-gray-400 mt-1">ROI maximum documenté</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Surgical Precision */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Navigation Grid */}
            <div className="grid grid-cols-12 gap-1 mb-16">
              <div className="col-span-2 text-xs text-gray-400 font-mono p-4">
                CLIENT / SECTEUR
              </div>
              <div className="col-span-3 text-xs text-gray-400 font-mono p-4">
                DÉFI STRATÉGIQUE
              </div>
              <div className="col-span-2 text-xs text-gray-400 font-mono p-4">
                TIMELINE
              </div>
              <div className="col-span-2 text-xs text-gray-400 font-mono p-4">
                IMPACT
              </div>
              <div className="col-span-2 text-xs text-gray-400 font-mono p-4">
                ROI
              </div>
              <div className="col-span-1 text-xs text-gray-400 font-mono p-4">
                ANALYSE
              </div>
            </div>

            {/* Case Study Rows */}
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid grid-cols-12 gap-1 border-t border-gray-200 hover:bg-gray-50 transition-all duration-300 cursor-pointer ${
                  selectedCase === study.id ? 'bg-gray-50' : ''
                }`}
                onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
              >
                <div className="col-span-2 p-4">
                  <div className="font-medium text-black">{study.client}</div>
                  <div className="text-xs text-gray-500 mt-1">{study.sector}</div>
                </div>
                
                <div className="col-span-3 p-4">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {study.challenge}
                  </div>
                </div>
                
                <div className="col-span-2 p-4">
                  <div className="text-sm font-mono">{study.timeline}</div>
                </div>
                
                <div className="col-span-2 p-4">
                  <div className="text-sm font-medium text-green-600">
                    {study.metrics[0]?.improvement || 'N/A'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {study.metrics[0]?.label || ''}
                  </div>
                </div>
                
                <div className="col-span-2 p-4">
                  <div className="text-lg font-light">{study.roi}</div>
                  <div className="text-xs text-gray-500 mt-1">retour investissement</div>
                </div>
                
                <div className="col-span-1 p-4 flex items-center justify-center">
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      selectedCase === study.id ? 'rotate-45' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis - Expandable */}
      {selectedCase && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {caseStudies
                .filter(study => study.id === selectedCase)
                .map(study => (
                  <div key={study.id} className="grid grid-cols-12 gap-8">
                    
                    {/* Left Column - Metrics */}
                    <div className="col-span-8">
                      <h3 className="text-2xl font-light mb-8 text-black">
                        Analyse Quantitative - {study.client}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {study.metrics.map((metric, idx) => (
                          <div 
                            key={idx}
                            className={`bg-white p-6 border transition-all duration-300 cursor-pointer ${
                              activeMetric === idx ? 'border-yellow-400 shadow-lg' : 'border-gray-200'
                            }`}
                            onMouseEnter={() => setActiveMetric(idx)}
                            onMouseLeave={() => setActiveMetric(null)}
                          >
                            <div className="text-xs text-gray-400 font-mono mb-2 tracking-wider">
                              {metric.label.toUpperCase()}
                            </div>
                            
                            <div className="flex items-baseline space-x-4 mb-3">
                              <div className="text-sm text-gray-500">
                                Avant: {metric.before} {metric.unit}
                              </div>
                              <div className="text-lg font-medium text-black">
                                Après: {metric.after} {metric.unit}
                              </div>
                            </div>
                            
                            <div className={`text-xl font-light ${
                              metric.improvement.includes('+') ? 'text-green-600' : 'text-blue-600'
                            }`}>
                              {metric.improvement}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Recommendations */}
                    <div className="col-span-4">
                      <h4 className="text-lg font-light mb-6 text-black">
                        Recommandations Stratégiques
                      </h4>
                      
                      <div className="space-y-4">
                        {study.recommendations.map((rec, idx) => (
                          <div key={idx} className="bg-white p-4 border border-gray-200">
                            <div className="text-xs text-gray-400 font-mono mb-2">
                              R{String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="text-sm text-gray-700">
                              {rec}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-black text-white">
                        <div className="text-xs text-gray-400 font-mono mb-2 tracking-wider">
                          SOLUTION APPLIQUÉE
                        </div>
                        <div className="text-sm leading-relaxed">
                          {study.solution}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light mb-8">
              Données. Stratégie. <span className="text-yellow-400">Performance.</span>
            </h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              Chaque projet est analysé avec précision chirurgicale. 
              Découvrez comment nous pouvons optimiser vos performances digitales.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400 mb-2">200+</div>
                <div className="text-xs text-gray-400 tracking-wider">JOURS D'ANALYSE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400 mb-2">GA4</div>
                <div className="text-xs text-gray-400 tracking-wider">DONNÉES VÉRIFIABLES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400 mb-2">100%</div>
                <div className="text-xs text-gray-400 tracking-wider">MESURABLE</div>
              </div>
            </div>

            <button className="bg-yellow-400 text-black px-8 py-3 font-medium hover:bg-yellow-300 transition-colors">
              ANALYSER VOTRE PROJET
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealisationsPage