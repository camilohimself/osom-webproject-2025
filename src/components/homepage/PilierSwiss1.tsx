'use client'

import { motion } from 'framer-motion'
// Import direct temporaire
import CTRCircularChart from '@/components/ui/CTRCircularChart'

const PilierSwiss1 = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full max-w-7xl mx-auto">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-purple-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-1 bg-purple-400 mb-8"></div>
          <div className="text-sm tracking-wider text-gray-400 font-light">
            PILIER #1 — CRÉATION AUGMENTÉE
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-0 font-sans text-white mb-16">
              <motion.div 
                className="text-5xl md:text-6xl font-bold leading-none mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                CRÉATION
              </motion.div>
              
              <motion.div 
                className="text-5xl md:text-6xl font-bold leading-none text-purple-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                AUGMENTÉE
              </motion.div>
              
              <motion.div 
                className="text-xl md:text-2xl font-light text-gray-300 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                L'IA accélère.<br />
                L'expertise dirige.
              </motion.div>
            </div>

            <motion.div 
              className="grid grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div>
                <div className="text-xs text-gray-500 mb-2 tracking-wider">VEILLE</div>
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400 mt-1">Tech updates</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-2 tracking-wider">IA CUSTOM</div>
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-xs text-gray-400 mt-1">Sur mesure</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-2 tracking-wider">SPRINT</div>
                <div className="text-2xl font-bold text-purple-400">2sem</div>
                <div className="text-xs text-gray-400 mt-1">Itérations</div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-2">Analyse complète</div>
                  <div className="text-gray-300 text-sm mb-2">
                    Nous analysons vos performances avec <span className="text-purple-400 font-semibold">SEMrush</span> (concurrence), 
                    <span className="text-purple-400 font-semibold"> GA4</span> (comportements) et 
                    <span className="text-purple-400 font-semibold"> GSC</span> (visibilité Google).
                  </div>
                  <div className="text-gray-500 text-xs italic">
                    → Diagnostic précis en 48h, rapport détaillé inclus
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-2">Création assistée IA</div>
                  <div className="text-gray-300 text-sm mb-2">
                    <span className="text-purple-400 font-semibold">Claude IA</span> génère des contenus sur-mesure, 
                    nous les affinons selon votre ton et vos objectifs business.
                  </div>
                  <div className="text-gray-500 text-xs italic">
                    → Tests A/B automatiques, optimisation continue
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-black font-bold text-sm">3</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-2">Suivi transparent</div>
                  <div className="text-gray-300 text-sm mb-2">
                    Dashboard temps réel avec <span className="text-purple-400 font-semibold">KPIs clairs</span> : 
                    CTR, conversions, ROI. Rapports mensuels + réunions stratégiques.
                  </div>
                  <div className="text-gray-500 text-xs italic">
                    → Vous savez toujours où va votre investissement
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative"
          >
            <div className="mb-8">
              <CTRCircularChart
                title="PERFORMANCE IA"
                subtitle="CTR OSOM vs Industrie — Données vérifiées"
                className="rounded-none border-0 bg-transparent"
              />
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="border-l-2 border-purple-400 pl-4">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">CTR MOYEN</div>
                <div className="text-3xl font-bold text-purple-400">25%</div>
                <div className="text-xs text-gray-400">vs 2-3% standard</div>
              </div>
              
              <div className="border-l-2 border-purple-400 pl-4">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">TEMPS CRÉATION</div>
                <div className="text-3xl font-bold text-purple-400">-75%</div>
                <div className="text-xs text-gray-400">vs méthode classique</div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 p-6 border-l-4 border-purple-400 bg-purple-400/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-lg text-white italic">
                "Contenus qui émeuvent et convertissent"
              </div>
              <div className="text-xs text-gray-400 mt-2">— Philosophie OSOM</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PilierSwiss1