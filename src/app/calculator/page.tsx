'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalculatorForm, CalculatorResults } from '@/components/calculator'
import AnimatedElement from '@/components/ui/AnimatedElement'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import type { CalculatorResults as CalculatorResultsType } from '@/types/calculator'

export default function CalculatorPage() {
  const [results, setResults] = useState<CalculatorResultsType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleResults = (calculatorResults: CalculatorResultsType) => {
    setResults(calculatorResults)
  }

  const handleReset = () => {
    setResults(null)
  }

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  // Premium animation variants (homepage level)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const badgeVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Premium Hero Section - Homepage Level */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Premium Gradient Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, #ffd50715, transparent 50%)",
              "radial-gradient(circle at 75% 75%, #ffd50720, transparent 50%)",
              "radial-gradient(circle at 25% 25%, #ffd50715, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#ffd507" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#10B981" }}
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge with Pulse Animation */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              variants={badgeVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-yellow-400 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-yellow-400 text-sm font-medium tracking-wide">
                CALCULATEUR GRATUIT • RÉSULTATS INSTANTANÉS
              </span>
            </motion.div>
            
            {/* Premium Title with Word-by-Word Animation */}
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={titleVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {'Calculateur ROI Marketing'.split(' ').map((word, index) => {
                const isHighlight = word === 'ROI' || word === 'Marketing'
                return (
                  <motion.span
                    key={index}
                    className={isHighlight ? 'text-yellow-400 font-bold' : ''}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                  >
                    {word}{' '}
                  </motion.span>
                )
              })}
            </motion.h1>
            
            {/* Enhanced Description */}
            <motion.p 
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Découvrez le potentiel de croissance de votre entreprise avec nos solutions digitales.
              <br />
              <span className="text-yellow-400 font-semibold">Projection personnalisée</span> basée sur nos 
              <span className="text-green-400 font-semibold"> 688 vs 49 conversions</span> réelles.
            </motion.p>
            
            {/* Premium Animated Stats Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { label: "4 étapes", detail: "seulement", color: "#ffd507", icon: "" },
                { label: "100%", detail: "gratuit", color: "#10B981", icon: "" },
                { label: "< 2 min", detail: "chrono", color: "#06B6D4", icon: "" },
                { label: "ROI garanti", detail: "ou remboursé", color: "#8B5CF6", icon: "" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl px-6 py-4 border transition-all duration-500 group cursor-pointer"
                  style={{ 
                    borderColor: `${stat.color}20`,
                    backgroundColor: 'transparent'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${stat.color}20`,
                    borderColor: `${stat.color}40`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <div className="flex items-center">
                    {stat.icon && <span className="text-lg mr-2">{stat.icon}</span>}
                    <div>
                      <span className="font-bold" style={{ color: stat.color }}>
                        {stat.label}
                      </span>
                      <span className="text-gray-300 ml-2 text-sm">{stat.detail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Données GA4 Vérifiées</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-yellow-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span>Culture Peinture: 140x ROI</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-cyan-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>Artisane Lumière: 68.6% Engagement</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Content with Premium Loading */}
      <section className="py-32 bg-gradient-to-br from-white/5 via-black to-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {isLoading ? (
            <motion.div 
              className="flex justify-center items-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                {/* Premium Loading Animation */}
                <motion.div 
                  className="relative w-20 h-20 mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-400/20" />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                <motion.p 
                  className="text-xl text-white mb-2" 
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Calcul en cours...
                </motion.p>
                <p className="text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Analyse de vos données avec algorithmes OSOM
                </p>
                
                {/* Progress indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-yellow-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : results ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CalculatorResults results={results} onReset={handleReset} />
            </motion.div>
          ) : (
            <div>
              <AnimatedElement type="slideUp" delay={0.2}>
                <div className="text-center mb-20">
                  <div className="flex items-center justify-center mb-6">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-400 mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-sm font-medium tracking-wide">
                      SIMPLE & RAPIDE • ALGORITHME ÉPROUVÉ
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                    Découvrez votre <span className="text-green-400 font-bold">potentiel ROI</span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Basé sur <span className="text-yellow-400 font-semibold">688 conversions réelles</span> de Culture Peinture 
                    et nos <span className="text-cyan-400 font-semibold">case studies vérifiés GA4</span>.
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement type="slideUp" delay={0.4}>
                <CalculatorForm 
                  onResults={handleResults} 
                  onLoading={handleLoading} 
                />
              </AnimatedElement>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/10 via-transparent to-green-400/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement type="scale" delay={0.2}>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Prêt à <span className="text-yellow-400 font-bold">transformer</span> vos résultats ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez les entreprises qui ont multiplié leur ROI par <strong className="text-green-400">140x</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(255, 221, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Stratégie Gratuite
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              
              <motion.a
                href="/realisations"
                className="border-2 border-yellow-400/60 text-yellow-400 px-8 py-4 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir Case Studies
              </motion.a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}