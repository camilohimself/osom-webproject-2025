'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

// Données audit Gérance Swiss 
const auditData = {
  before: 0.07,
  after: 28.35,
  roi: 40400,
  keywords: 22,
  competitors: 3,
  visibility: 397
}

// Keywords commerciaux révélés
const commercialKeywords = [
  { keyword: 'gérance immobilière valais', volume: 890, value: 2800 },
  { keyword: 'gestion locative sion', volume: 234, value: 1200 },
  { keyword: 'syndic valais professionnel', volume: 156, value: 900 },
  { keyword: 'expertise immobilière martigny', volume: 123, value: 1500 },
  { keyword: 'location appartement monthey', volume: 445, value: 800 },
  { keyword: 'vente maison sierre', volume: 334, value: 2200 }
]

// Processus étapes
const processes = [
  {
    id: '01',
    title: 'audit externe technique',
    description: 'Analyse complète sans accès GA4/GSC via outils avancés (SEMrush, Ahrefs, Screaming Frog). Révèle gaps invisibles même pour le client.',
    tools: ['SEMrush', 'Ahrefs', 'Screaming Frog'],
    checkpoints: 150,
    duration: '48h'
  },
  {
    id: '02', 
    title: 'benchmarking concurrentiel poussé',
    description: 'Analyse technique des 10 premiers concurrents : backlinks, mots-clés, content gaps, vitesse, structure.',
    tools: ['Competitive Analysis', 'SERP Tracking', 'Backlink Gap'],
    checkpoints: 89,
    duration: '72h'
  },
  {
    id: '03',
    title: 'stratégie mots-clés data-driven', 
    description: 'Recherche exhaustive : 500+ keywords analysés, volume/difficulté/intent. Prédiction ROI par keyword.',
    tools: ['Keyword Research', 'Intent Analysis', 'ROI Prediction'],
    checkpoints: 234,
    duration: '96h'
  }
]

interface SEOIntelligenceDashboardProps {
  title: string
  subtitle: string
}

export default function SEOIntelligenceDashboard({ title, subtitle }: SEOIntelligenceDashboardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeProcess, setActiveProcess] = useState(0)
  const [revealedKeywords, setRevealedKeywords] = useState(0)
  const [dashboardActive, setDashboardActive] = useState(false)

  // Animation séquentielle
  useEffect(() => {
    if (!isInView) return

    // Activer dashboard après 1s
    const dashboardTimer = setTimeout(() => {
      setDashboardActive(true)
    }, 1000)

    // Révéler keywords un par un
    const keywordTimer = setInterval(() => {
      setRevealedKeywords(prev => {
        if (prev < commercialKeywords.length) {
          return prev + 1
        }
        clearInterval(keywordTimer)
        return prev
      })
    }, 800)

    return () => {
      clearTimeout(dashboardTimer)
      clearInterval(keywordTimer)
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-cyan-950/30 via-black to-gray-900/50 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #06B6D4 1px, transparent 1px),
            linear-gradient(180deg, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
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
            {title} <span className="font-bold text-cyan-400">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              🎯 PROCESSUS RÉVOLUTIONNAIRE
            </h3>
            
            <div className="space-y-6">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`cursor-pointer transition-all duration-500 ${
                    activeProcess === index 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border-cyan-400/40' 
                      : 'bg-gradient-to-r from-gray-800/50 to-gray-900/30 border-gray-600/30 hover:border-gray-500/50'
                  } rounded-2xl p-6 border`}
                  onClick={() => setActiveProcess(index)}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                        activeProcess === index 
                          ? 'bg-cyan-400 text-black' 
                          : 'bg-gray-700 text-gray-300'
                      }`}
                      animate={activeProcess === index ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {process.id}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2">
                        {process.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {process.description}
                      </p>
                      
                      {/* Process Metrics */}
                      <div className="grid grid-cols-3 gap-3 text-xs">
                        <div className="bg-cyan-500/10 rounded-lg p-2 text-center border border-cyan-500/20">
                          <div className="text-cyan-400 font-bold">{process.checkpoints}</div>
                          <div className="text-gray-400">Checkpoints</div>
                        </div>
                        <div className="bg-green-500/10 rounded-lg p-2 text-center border border-green-500/20">
                          <div className="text-green-400 font-bold">{process.tools.length}</div>
                          <div className="text-gray-400">Outils Pro</div>
                        </div>
                        <div className="bg-yellow-500/10 rounded-lg p-2 text-center border border-yellow-500/20">
                          <div className="text-yellow-400 font-bold">{process.duration}</div>
                          <div className="text-gray-400">Délai Max</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Intelligence Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Dashboard Screen */}
            <div className="bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-xl rounded-3xl border border-cyan-400/30 overflow-hidden">
              
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 p-6 border-b border-cyan-400/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg flex items-center">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-cyan-400 mr-3"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    SEO INTELLIGENCE CENTER
                  </h3>
                  <div className="text-cyan-400 text-xs font-mono">
                    {dashboardActive ? 'ANALYSE COMPLETE' : 'INITIALISATION...'}
                  </div>
                </div>
              </div>

              {dashboardActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="p-8 space-y-8"
                >
                  {/* Gérance Swiss Case Study */}
                  <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/5 rounded-2xl p-6 border border-green-400/30">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-green-400 font-bold text-sm">DOSSIER CONFIDENTIEL • GÉRANCE SWISS</span>
                    </div>
                    
                    <h4 className="text-white font-bold text-lg mb-4">Potentiel SEO 397x Révélé</h4>
                    
                    {/* ROI Visualization */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-red-400 text-3xl font-bold mb-1">
                          <AnimatedCounter from={0} to={0.07} duration={2} />
                        </div>
                        <div className="text-gray-400 text-sm">Visibilité Avant</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 text-3xl font-bold mb-1">
                          <AnimatedCounter from={0} to={28.35} duration={2} delay={0.5} />
                        </div>
                        <div className="text-gray-400 text-sm">Potentiel Révélé</div>
                      </div>
                    </div>
                    
                    {/* ROI Counter */}
                    <div className="bg-black/30 rounded-xl p-4 text-center">
                      <div className="text-yellow-400 text-sm font-bold mb-2">ROI GÉNÉRÉ</div>
                      <div className="text-green-400 text-4xl font-bold">
                        +<AnimatedCounter from={0} to={40400} duration={3} delay={1} />%
                      </div>
                    </div>
                  </div>

                  {/* Keywords Commerciaux Révélés */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-2xl p-6 border border-yellow-400/30">
                    <h4 className="text-yellow-400 font-bold mb-4 flex items-center">
                      🔍 KEYWORDS COMMERCIAUX RÉVÉLÉS
                    </h4>
                    
                    <div className="text-center mb-4">
                      <div className="text-yellow-400 text-3xl font-bold">
                        <AnimatedCounter from={0} to={revealedKeywords} duration={1} />
                        <span className="text-gray-400 text-lg">/{commercialKeywords.length}</span>
                      </div>
                      <div className="text-gray-400 text-sm">Opportunités Détectées</div>
                    </div>
                    
                    {/* Keywords List */}
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {commercialKeywords.slice(0, revealedKeywords).map((kw, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between bg-black/20 rounded-lg p-3 text-xs"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <span className="text-white font-mono">{kw.keyword}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-cyan-400">{kw.volume}/mois</span>
                            <span className="text-green-400 font-bold">€{kw.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Alert Final */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                    className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-400/40"
                  >
                    <div className="text-center">
                      <div className="text-red-400 font-bold text-lg mb-2">
                        ⚠️ ALERTE CONCURRENCE
                      </div>
                      <div className="text-white text-sm mb-2">
                        Vos 3 principaux concurrents manquent ces opportunités
                      </div>
                      <div className="text-green-400 font-bold">
                        Fenêtre d'action: 6-12 mois
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}