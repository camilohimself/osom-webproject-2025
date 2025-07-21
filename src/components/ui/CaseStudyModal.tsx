'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import AnimatedCounter from './AnimatedCounter'
import ProgressBar from './ProgressBar'

interface CaseStudyData {
  title: string
  client: string
  period: string
  challenge: string
  solution: string
  results: {
    label: string
    before: number
    after: number
    improvement: string
    color: string
  }[]
  proof: string
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudy: CaseStudyData
}

const CaseStudyModal = ({ isOpen, onClose, caseStudy }: CaseStudyModalProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'proof'>('overview')

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-yellow-400/30 shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="p-8 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.h2 
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {caseStudy.title}
                    </motion.h2>
                    <motion.div 
                      className="flex items-center text-gray-400"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="font-medium text-yellow-400 mr-4">{caseStudy.client}</span>
                      <span className="text-sm">{caseStudy.period}</span>
                    </motion.div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-8 mt-6">
                  {(['overview', 'metrics', 'proof'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab === 'overview' ? "Vue d'ensemble" : tab === 'metrics' ? 'Métriques' : 'Preuves'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">Défi</h3>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Solution OSOM</h3>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      {caseStudy.testimonial && (
                        <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-xl p-6 border-l-4 border-yellow-400">
                          <blockquote className="text-white text-lg font-medium mb-4">
                            "{caseStudy.testimonial.quote}"
                          </blockquote>
                          <div className="text-gray-400 text-sm">
                            <strong className="text-yellow-400">{caseStudy.testimonial.author}</strong>
                            <br />
                            {caseStudy.testimonial.position}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'metrics' && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">Résultats Mesurables</h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudy.results.map((result, index) => (
                          <motion.div
                            key={result.label}
                            className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-6 border border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <h4 className="text-lg font-semibold text-white mb-4">{result.label}</h4>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-gray-400 mb-1">
                                  <AnimatedCounter
                                    from={0}
                                    to={result.before}
                                    duration={1.5}
                                    delay={index * 0.2}
                                  />
                                </div>
                                <div className="text-xs text-gray-500">AVANT</div>
                              </div>
                              
                              <div className="text-center">
                                <div className="text-2xl font-bold mb-1" style={{ color: result.color }}>
                                  <AnimatedCounter
                                    from={0}
                                    to={result.after}
                                    duration={1.5}
                                    delay={index * 0.2 + 0.3}
                                  />
                                </div>
                                <div className="text-xs text-gray-500">APRÈS</div>
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-lg font-bold" style={{ color: result.color }}>
                                {result.improvement}
                              </div>
                              <div className="text-xs text-gray-400">AMÉLIORATION</div>
                            </div>

                            <ProgressBar
                              value={result.after}
                              maxValue={Math.max(result.before, result.after) * 1.2}
                              label=""
                              color={result.color}
                              duration={2}
                              delay={index * 0.3}
                              showPercentage={false}
                              className="mt-4"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'proof' && (
                    <motion.div
                      key="proof"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">Preuves & Vérification</h3>
                      
                      <div className="bg-gradient-to-br from-green-400/10 to-transparent rounded-xl p-6 border border-green-400/30">
                        <div className="flex items-center mb-4">
                          <div className="w-4 h-4 rounded-full bg-green-400 mr-3 animate-pulse" />
                          <h4 className="text-lg font-bold text-green-400">Données Vérifiables</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.proof}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl mb-2">📊</div>
                          <div className="text-sm text-gray-400">Google Analytics 4</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl mb-2">🔍</div>
                          <div className="text-sm text-gray-400">Search Console</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <div className="text-2xl mb-2">📈</div>
                          <div className="text-sm text-gray-400">Meta Business</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CaseStudyModal