'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTRVersionsPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Comparaison CTR - 2 Versions Logiques
          </h1>
          <p className="text-gray-400 text-lg">
            Alternatives cohérentes au graphique actuel
          </p>
        </div>

        <div className="space-y-16">
          
          {/* VERSION 1: Barres proportionnelles réelles */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-400/30 rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-purple-400 font-bold text-sm mb-2">VERSION 1 - BARRES PROPORTIONNELLES</div>
              <h2 className="text-3xl font-bold text-white mb-4">CTR OSOM vs Industrie</h2>
              <p className="text-gray-400">Performance Marketing IA • Données Meta Ads vérifiées</p>
            </div>

            <div className="space-y-8">
              {/* Barre OSOM 25% - Large */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-400 mr-4"></div>
                    <span className="text-white font-semibold text-xl">Campagnes OSOM avec IA</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-400">25%</div>
                    <div className="text-gray-400 text-sm">Taux de clic moyen</div>
                  </div>
                </div>
                
                <div className="relative h-16 bg-gray-800/50 rounded-xl overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-xl"
                    style={{ 
                      background: `linear-gradient(90deg, #A855F720, #A855F760, #A855F7)`,
                      boxShadow: `0 0 25px #A855F740`,
                      width: '100%' // 25% est le max, donc 100% de la barre
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  >
                    <div className="flex items-center justify-end h-full pr-6">
                      <span className="text-white font-bold text-lg">25%</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Barre Industrie 2.3% - Proportionnellement petite */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-500 mr-4"></div>
                    <span className="text-white font-semibold text-xl">Marketing traditionnel industrie</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-400">2.3%</div>
                    <div className="text-gray-400 text-sm">CTR standard</div>
                  </div>
                </div>
                
                <div className="relative h-16 bg-gray-800/50 rounded-xl overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-xl"
                    style={{ 
                      background: `linear-gradient(90deg, #6B728020, #6B728060, #6B7280)`,
                      boxShadow: `0 0 15px #6B728030`,
                      width: '9.2%' // 2.3/25 = 9.2% proportionnel
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: '9.2%' }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  >
                    <div className="flex items-center justify-center h-full">
                      <span className="text-white font-bold text-sm">2.3%</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 inline-block">
                <div className="text-purple-400 font-bold text-sm tracking-wider mb-2">
                  PERFORMANCE SUPÉRIEURE
                </div>
                <div className="text-white text-4xl font-bold mb-2">10.9x</div>
                <div className="text-gray-300 text-sm">Plus efficace que la concurrence</div>
              </div>
            </motion.div>
          </div>

          {/* VERSION 2: Design circulaire avec pourcentages */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-400/30 rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-purple-400 font-bold text-sm mb-2">VERSION 2 - DESIGN CIRCULAIRE</div>
              <h2 className="text-3xl font-bold text-white mb-4">CTR Performance Comparison</h2>
              <p className="text-gray-400">Visualisation intuitive des écarts de performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Gauge OSOM */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#374151"
                      strokeWidth="8"
                      fill="none"
                      opacity="0.3"
                    />
                    {/* Progress circle OSOM */}
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#A855F7"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 80}`}
                      strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.25)}`} // 25%
                      initial={{ strokeDashoffset: `${2 * Math.PI * 80}` }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 80 * (1 - 0.25)}` }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      style={{
                        filter: 'drop-shadow(0 0 8px #A855F780)'
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400">25%</div>
                      <div className="text-sm text-gray-400">CTR OSOM</div>
                    </div>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg">Campagnes OSOM avec IA</div>
                <div className="text-purple-400 text-sm">Performance optimisée</div>
              </div>

              {/* Gauge Industrie */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#374151"
                      strokeWidth="8"
                      fill="none"
                      opacity="0.3"
                    />
                    {/* Progress circle Industrie */}
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#6B7280"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 80}`}
                      strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.023)}`} // 2.3%
                      initial={{ strokeDashoffset: `${2 * Math.PI * 80}` }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 80 * (1 - 0.023)}` }}
                      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-400">2.3%</div>
                      <div className="text-sm text-gray-500">CTR Standard</div>
                    </div>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg">Marketing traditionnel</div>
                <div className="text-gray-400 text-sm">Industrie moyenne</div>
              </div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <div className="bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-2xl p-8 border border-purple-400/40">
                <div className="text-purple-400 font-bold text-lg mb-3">MULTIPLICATEUR D'EFFICACITÉ</div>
                <div className="text-6xl font-black text-white mb-3">10.9x</div>
                <div className="text-gray-300 text-lg">Plus performant que la concurrence</div>
                <div className="text-purple-400 text-sm mt-2 italic">
                  25% ÷ 2.3% = 10.87x d'efficacité supérieure
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Navigation */}
        <div className="text-center mt-16">
          <Link 
            href="/" 
            className="inline-block bg-purple-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-300 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>

      </div>
    </div>
  )
}