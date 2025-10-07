'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function HeroVariantsPage() {
  const [selectedVariant, setSelectedVariant] = useState<'dashboard' | 'timeline' | 'calculator' | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            3 Variantes pour le Hero Contact
          </h1>
          <p className="text-xl text-gray-300">
            Carte blanche - Vision grosse agence marketing
          </p>
        </motion.div>

        {/* Variant Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.button
            onClick={() => setSelectedVariant('dashboard')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedVariant === 'dashboard' 
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Data Dashboard Live
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedVariant('timeline')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedVariant === 'timeline' 
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Growth Timeline
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedVariant('calculator')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedVariant === 'calculator' 
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/50' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            ROI Calculator
          </motion.button>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          
          {/* Left: Dynamic Visual */}
          <AnimatePresence mode="wait">
            {selectedVariant === 'dashboard' && (
              <motion.div 
                key="dashboard"
                className="relative w-full h-96 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20"
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-cyan-400 font-bold text-lg">Analytics dashboard</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                    <div className="text-cyan-300 text-sm mb-1">Visiteurs Online</div>
                    <div className="text-white text-2xl font-bold">
                      <AnimatedCounter from={0} to={847} duration={2} />
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-300 text-sm mb-1">Conversions Aujourd'hui</div>
                    <div className="text-white text-2xl font-bold">
                      <AnimatedCounter from={0} to={23} duration={2} />
                    </div>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                    <div className="text-yellow-300 text-sm mb-1">ROI Moyen</div>
                    <div className="text-white text-2xl font-bold">
                      <AnimatedCounter from={0} to={340} duration={2} />%
                    </div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-purple-300 text-sm mb-1">Leads Qualifiés</div>
                    <div className="text-white text-2xl font-bold">
                      <AnimatedCounter from={0} to={156} duration={2} />
                    </div>
                  </div>
                </div>
                
                {/* Live Chart Simulation */}
                <div className="bg-black/20 rounded-lg p-4 h-24 flex items-end justify-between">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-cyan-400 w-3 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.random() * 60 + 20}px` }}
                      transition={{ 
                        duration: 0.8, 
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
                
                {/* Real-time Updates */}
                <motion.div 
                  className="absolute bottom-4 right-4 bg-green-500/20 rounded-full px-3 py-1 text-green-400 text-xs"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ● Live Data
                </motion.div>
              </motion.div>
            )}

            {selectedVariant === 'timeline' && (
              <motion.div 
                key="timeline"
                className="relative w-full h-96 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-3xl p-8 border border-green-500/20"
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-green-400 font-bold text-lg mb-6">Votre parcours growth</h3>
                
                {/* Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <motion.div 
                    className="absolute left-4 top-0 w-0.5 bg-green-500"
                    initial={{ height: 0 }}
                    animate={{ height: '280px' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  
                  {/* Timeline Steps */}
                  {[
                    { title: "Audit & Stratégie", time: "Semaine 1", value: "Analyse complète", color: "yellow" },
                    { title: "Optimisation Tech", time: "Semaine 2-3", value: "Site + Analytics", color: "cyan" },
                    { title: "Campagnes Lancées", time: "Semaine 4", value: "SEO + Ads", color: "purple" },
                    { title: "Premiers Résultats", time: "Mois 2", value: "+150% leads", color: "green" },
                    { title: "Scaling & Growth", time: "Mois 3+", value: "ROI optimisé", color: "orange" }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className="relative flex items-center mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3, duration: 0.6 }}
                    >
                      <motion.div 
                        className={`w-8 h-8 bg-${step.color}-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.3 + 0.2, duration: 0.4, type: "spring" }}
                      >
                        {i + 1}
                      </motion.div>
                      <div className="ml-4 bg-black/20 rounded-lg p-3 flex-1">
                        <div className="text-white font-semibold">{step.title}</div>
                        <div className="text-gray-300 text-sm">{step.time}</div>
                        <div className={`text-${step.color}-400 text-sm font-mono`}>{step.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedVariant === 'calculator' && (
              <motion.div 
                key="calculator"
                className="relative w-full h-96 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-3xl p-6 border border-yellow-500/20"
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-yellow-400 font-bold text-lg mb-4">Calculateur ROI instantané</h3>
                
                {/* Calculator Interface */}
                <div className="space-y-4">
                  {/* Budget Input */}
                  <div className="bg-black/20 rounded-lg p-4">
                    <label className="text-yellow-300 text-sm block mb-2">Budget Marketing Mensuel</label>
                    <div className="flex items-center gap-2">
                      <span className="text-white">CHF</span>
                      <motion.div 
                        className="bg-yellow-400 h-2 rounded-full flex-1"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      <span className="text-yellow-400 font-bold">5,000</span>
                    </div>
                  </div>
                  
                  {/* Results Display */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                      <div className="text-green-300 text-xs">Leads Générés</div>
                      <div className="text-white text-xl font-bold">
                        <AnimatedCounter from={0} to={75} duration={2} /> /mois
                      </div>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30">
                      <div className="text-cyan-300 text-xs">CA Additionnel</div>
                      <div className="text-white text-xl font-bold">
                        CHF <AnimatedCounter from={0} to={18750} duration={2} />
                      </div>
                    </div>
                  </div>
                  
                  {/* ROI Result */}
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/40">
                    <div className="text-center">
                      <div className="text-yellow-300 text-sm mb-1">Retour sur Investissement</div>
                      <motion.div 
                        className="text-white text-4xl font-black"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.8, type: "spring" }}
                      >
                        <AnimatedCounter from={0} to={275} duration={2} />%
                      </motion.div>
                      <div className="text-orange-300 text-xs">vs industrie (45-60%)</div>
                    </div>
                  </div>
                  
                  {/* Interactive Elements */}
                  <div className="flex justify-center gap-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {!selectedVariant && (
              <motion.div 
                className="flex items-center justify-center w-full h-96 bg-gray-800/20 rounded-3xl border border-gray-700/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">⚡</div>
                  <p className="text-lg">Sélectionnez une variante pour voir la magie</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Right: Content Description */}
          <motion.div
            className="text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Dynamic Content Based on Selection */}
            <AnimatePresence mode="wait">
              {selectedVariant === 'dashboard' && (
                <motion.div
                  key="dashboard-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                    Vos données parlent.
                    <span className="block text-cyan-400 font-bold">
                      Écoutons-les ensemble.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Dashboard temps réel de vos performances marketing. 
                    Métriques live, insights actionnables, croissance mesurable.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                      <div className="text-cyan-400 text-sm">Temps réel</div>
                      <div className="text-white font-bold">Analytics Live</div>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="text-green-400 text-sm">Transparent</div>
                      <div className="text-white font-bold">ROI Visible</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedVariant === 'timeline' && (
                <motion.div
                  key="timeline-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                    Votre croissance
                    <span className="block text-green-400 font-bold">
                      étape par étape.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Parcours de croissance personnalisé avec milestones clairs. 
                    De l'audit à l'expansion, chaque étape planifiée.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="text-green-400 text-sm">Structuré</div>
                      <div className="text-white font-bold">Plan 90 jours</div>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="text-yellow-400 text-sm">Mesurable</div>
                      <div className="text-white font-bold">KPIs définis</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedVariant === 'calculator' && (
                <motion.div
                  key="calculator-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                    Calculez votre ROI
                    <span className="block text-yellow-400 font-bold">
                      avant même de commencer.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Simulateur interactif basé sur vos vrais chiffres. 
                    Prévisions précises, investissement optimisé.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="text-yellow-400 text-sm">Instantané</div>
                      <div className="text-white font-bold">Calcul Immédiat</div>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <div className="text-orange-400 text-sm">Personnalisé</div>
                      <div className="text-white font-bold">Votre Secteur</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {!selectedVariant && (
                <motion.div
                  key="default-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                    Transformons votre vision
                    <span className="block text-yellow-400 font-bold">
                      en résultats mesurables.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    3 approches différentes pour présenter votre potentiel de croissance digitale. 
                    Choisissez celle qui résonne le mieux avec votre vision.
                  </p>

                  <div className="text-gray-400 text-sm">
                    ← Sélectionnez une variante pour découvrir l'expérience
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <motion.button
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 4px 20px rgba(255,221,0,0.3)',
                  '0 8px 30px rgba(255,221,0,0.4)',
                  '0 4px 20px rgba(255,221,0,0.3)'
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              Démarrer ma consultation
            </motion.button>
          </motion.div>
        </div>

        {/* Validation Buttons */}
        {selectedVariant && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-center gap-6">
              <motion.button
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  alert(`Variante "${selectedVariant}" validée !`)
                }}
              >
                ✓ Valider cette variante
              </motion.button>
              
              <motion.button
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-6 py-4 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVariant(null)}
              >
                Comparer les 3
              </motion.button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}