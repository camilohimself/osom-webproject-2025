'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Données analyse concurrentielle
const competitors = [
  {
    name: 'AgenceWeb-VS.ch',
    domain: 'agenceweb-vs.ch',
    keywords: 156,
    backlinks: 892,
    da: 23,
    weaknesses: ['Mobile Speed: 2.3s', 'Missing Schema', 'Thin Content'],
    opportunities: ['Local Citations', 'FAQ Schema', 'Page Speed']
  },
  {
    name: 'ValaisDigital.com',
    domain: 'valaisdigital.com', 
    keywords: 234,
    backlinks: 1247,
    da: 31,
    weaknesses: ['No SSL', 'Broken Links: 12', 'No Local SEO'],
    opportunities: ['Security Fix', 'Link Cleanup', 'GMB Optimization']
  },
  {
    name: 'WebMarketingVS.ch',
    domain: 'webmarketingvs.ch',
    keywords: 189,
    backlinks: 654,
    da: 28,
    weaknesses: ['Duplicate Content', 'No Sitemap', 'Poor UX'],
    opportunities: ['Content Audit', 'XML Sitemap', 'CRO Focus']
  }
]

// Données keyword gap analysis
const keywordGaps = [
  { keyword: 'seo valais', ourRank: null, competitor1: 3, competitor2: 7, volume: 772, difficulty: 45 },
  { keyword: 'référencement sion', ourRank: null, competitor1: 8, competitor2: null, volume: 234, difficulty: 32 },
  { keyword: 'agence marketing martigny', ourRank: null, competitor1: 12, competitor2: 4, volume: 156, difficulty: 28 },
  { keyword: 'expert seo suisse romande', ourRank: null, competitor1: 6, competitor2: 15, volume: 445, difficulty: 52 }
]

interface SEOForensicsLabProps {
  title: string
  subtitle: string
  description: string
}

export default function SEOForensicsLab({ title, subtitle, description }: SEOForensicsLabProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState<'competitors' | 'keywords' | 'audit'>('competitors')
  const [scanningProgress, setScanningProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  // Animation scanning progress
  useEffect(() => {
    if (!isInView) return
    
    const progressInterval = setInterval(() => {
      setScanningProgress(prev => {
        if (prev < 100) {
          return prev + 2
        } else {
          setAnalysisComplete(true)
          clearInterval(progressInterval)
          return prev
        }
      })
    }, 100)
    
    return () => clearInterval(progressInterval)
  }, [isInView])

  const renderMicroscopeView = () => {
    switch(activeTab) {
      case 'competitors':
        return (
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center">
              🔬 ANALYSE MICROSCOPIQUE CONCURRENCE
            </h3>
            {competitors.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-4 border border-red-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold">{comp.name}</h4>
                    <p className="text-gray-400 text-sm font-mono">{comp.domain}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 font-bold text-lg">DA {comp.da}</div>
                    <div className="text-gray-400 text-xs">{comp.keywords} keywords</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-red-300 font-semibold text-xs mb-2">Faiblesses détectées :</h5>
                    {comp.weaknesses.map((weakness, i) => (
                      <div key={i} className="text-red-200 text-xs mb-1 flex items-center">
                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                        {weakness}
                      </div>
                    ))}
                  </div>
                  <div>
                    <h5 className="text-green-300 font-semibold text-xs mb-2">Opportunités :</h5>
                    {comp.opportunities.map((opp, i) => (
                      <div key={i} className="text-green-200 text-xs mb-1 flex items-center">
                        <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                        {opp}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
        
      case 'keywords':
        return (
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center">
              🧬 ADN DES MOTS-CLÉS CACHÉS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-400/20">
                    <th className="text-left text-cyan-400 font-bold p-2">Keyword</th>
                    <th className="text-center text-cyan-400 font-bold p-2">NOUS</th>
                    <th className="text-center text-cyan-400 font-bold p-2">Concurrent A</th>
                    <th className="text-center text-cyan-400 font-bold p-2">Concurrent B</th>
                    <th className="text-center text-cyan-400 font-bold p-2">Volume</th>
                    <th className="text-center text-cyan-400 font-bold p-2">Difficulté</th>
                  </tr>
                </thead>
                <tbody>
                  {keywordGaps.map((gap, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-700/30"
                    >
                      <td className="p-2 font-mono text-white">{gap.keyword}</td>
                      <td className="p-2 text-center">
                        <span className="text-red-400 font-bold">MANQUÉ</span>
                      </td>
                      <td className="p-2 text-center">
                        {gap.competitor1 ? (
                          <span className="text-orange-400 font-bold">#{gap.competitor1}</span>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                      <td className="p-2 text-center">
                        {gap.competitor2 ? (
                          <span className="text-orange-400 font-bold">#{gap.competitor2}</span>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                      <td className="p-2 text-center text-green-400 font-bold">{gap.volume}</td>
                      <td className="p-2 text-center">
                        <span className={`font-bold ${gap.difficulty > 40 ? 'text-red-400' : 'text-green-400'}`}>
                          {gap.difficulty}%
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
        
      case 'audit':
        return (
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center">
              🔍 AUDIT FORENSIQUE 150+ POINTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { category: 'Technical SEO', score: 67, issues: 12, color: 'orange' },
                { category: 'Content Quality', score: 45, issues: 8, color: 'red' },
                { category: 'User Experience', score: 78, issues: 5, color: 'yellow' },
                { category: 'Local SEO', score: 23, issues: 18, color: 'red' },
                { category: 'Mobile Performance', score: 56, issues: 9, color: 'orange' },
                { category: 'Security', score: 89, issues: 2, color: 'green' }
              ].map((audit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-600/30"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold text-sm">{audit.category}</h4>
                    <div className={`text-${audit.color}-400 font-bold text-lg`}>
                      {audit.score}%
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className={`bg-${audit.color}-400 h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${audit.score}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <div className="text-gray-400 text-xs">
                    {audit.issues} issues détectées
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-black to-cyan-950/30 relative overflow-hidden">
      {/* Laboratory Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #06B6D4 1px, transparent 1px), linear-gradient(#06B6D4 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            {title} <span className="font-bold text-cyan-400">Laboratory</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {description}
          </p>
          
          {/* Scanning Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-400 text-sm font-mono">ANALYSE EN COURS...</span>
              <span className="text-cyan-400 text-sm font-mono">{scanningProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full"
                style={{ width: `${scanningProgress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>

        {analysisComplete && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Laboratory Interface */}
            <div className="bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-xl rounded-3xl border border-cyan-400/30 overflow-hidden">
              
              {/* Lab Header */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 p-6 border-b border-cyan-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-cyan-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h3 className="text-white font-bold text-lg">SEO FORENSICS LABORATORY</h3>
                  </div>
                  <div className="text-cyan-400 text-xs font-mono">
                    STATUS: ANALYSE COMPLETE • {competitors.length} SUSPECTS IDENTIFIÉS
                  </div>
                </div>
              </div>

              {/* Lab Tabs */}
              <div className="flex border-b border-gray-700/50">
                {[
                  { id: 'competitors', label: '🔬 CONCURRENCE', desc: 'Analyse Microscopique' },
                  { id: 'keywords', label: '🧬 KEYWORDS', desc: 'ADN Décrypté' },
                  { id: 'audit', label: '🔍 AUDIT', desc: 'Forensics 150pts' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 p-4 text-left transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-cyan-500/10 border-b-2 border-cyan-400' 
                        : 'hover:bg-gray-800/50'
                    }`}
                  >
                    <div className={`font-bold text-sm ${
                      activeTab === tab.id ? 'text-cyan-400' : 'text-gray-400'
                    }`}>
                      {tab.label}
                    </div>
                    <div className="text-gray-500 text-xs">{tab.desc}</div>
                  </button>
                ))}
              </div>

              {/* Lab Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderMicroscopeView()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Results Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎯 DIAGNOSTIC RÉVOLUTIONNAIRE CONFIRMÉ
                </h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Notre laboratoire forensique révèle <strong className="text-cyan-400">22 opportunités SEO</strong> invisibles 
                  pour la concurrence. <strong className="text-green-400">397x potentiel</strong> détecté sur le marché VALAIS.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/30">
                    <div className="text-red-400 text-2xl font-bold mb-1">47</div>
                    <div className="text-gray-400 text-sm">Faiblesses concurrents</div>
                  </div>
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/30">
                    <div className="text-yellow-400 text-2xl font-bold mb-1">1607</div>
                    <div className="text-gray-400 text-sm">Keywords ratés/mois</div>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-400/30">
                    <div className="text-green-400 text-2xl font-bold mb-1">€47K</div>
                    <div className="text-gray-400 text-sm">Valeur trafic manqué</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}