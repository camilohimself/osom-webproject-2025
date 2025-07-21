'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimations } from '@/components/animations'
import { Button } from '@/components/ui'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import type { CalculatorResults } from '@/types/calculator'

interface CalculatorResultsProps {
  results: CalculatorResults
  onReset: () => void
}

export default function CalculatorResults({ results, onReset }: CalculatorResultsProps) {
  // Premium animation variants matching homepage quality
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: 'CHF',
      minimumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('fr-CH').format(value)
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto space-y-16 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Premium ROI Hero */}
      <motion.div
        className="relative overflow-hidden"
        variants={itemVariants}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating accent */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
          style={{ backgroundColor: "#ffd507" }}
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="text-center bg-gradient-to-br from-yellow-400/10 via-green-400/5 to-transparent backdrop-blur-xl p-12 rounded-3xl border border-yellow-400/20 relative z-10">
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-400 mr-3"
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
            <span className="text-yellow-400 text-sm font-medium tracking-wide" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              RÉSULTATS PERSONNALISÉS • ROI GARANTI
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" 
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Votre ROI <span className="text-yellow-400 font-bold">Projeté</span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-7xl md:text-8xl font-bold text-yellow-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <AnimatedCounter from={0} to={results.roi} duration={2.5} />%
              </div>
              <p className="text-xl text-white font-medium" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Retour sur investissement</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-gradient-to-br from-green-400/20 to-transparent rounded-2xl p-6 border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  <AnimatedCounter from={0} to={results.confidence} duration={2} />%
                </div>
                <p className="text-white text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Niveau de confiance</p>
                <p className="text-gray-300 text-xs mt-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Basé sur nos case studies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Premium Key Metrics */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {[
          { 
            value: results.projectedRevenue, 
            label: "Revenus projetés", 
            sublabel: "Projection 12 mois",
            color: "#10B981", 
            icon: "💰",
            isCurrency: true
          },
          { 
            value: results.projectedLeads, 
            label: "Leads qualifiés", 
            sublabel: "Prospects chauds",
            color: "#06B6D4", 
            icon: "🎯",
            isCurrency: false
          },
          { 
            value: results.projectedTraffic, 
            label: "Visiteurs mensuels", 
            sublabel: "Traffic organique",
            color: "#8B5CF6", 
            icon: "📈",
            isCurrency: false
          }
        ].map((metric, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 20px 40px ${metric.color}20`
            }}
            className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center group hover:border-opacity-40 transition-all duration-500"
            style={{ borderColor: `${metric.color}30` }}
          >
            <motion.div
              className="text-4xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {metric.icon}
            </motion.div>
            
            <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: metric.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              {metric.isCurrency ? (
                <>
                  <AnimatedCounter from={0} to={Math.floor(metric.value / 1000)} duration={2.5} />K
                  <span className="text-2xl ml-1">CHF</span>
                </>
              ) : (
                <AnimatedCounter from={0} to={metric.value} duration={2.5} />
              )}
            </div>
            
            <p className="text-white font-medium text-lg mb-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{metric.label}</p>
            <p className="text-gray-300 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{metric.sublabel}</p>
            
            {/* Animated progress bar */}
            <motion.div 
              className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 1 }}
            >
              <motion.div 
                className="h-full rounded-full"
                style={{ backgroundColor: metric.color }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: index * 0.2 + 1.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Premium Investment Breakdown */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20"
      >
        <div className="flex items-center mb-8">
          <motion.div 
            className="w-3 h-3 rounded-full bg-purple-400 mr-3"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Répartition de l&apos;<span className="text-purple-400 font-bold">investissement</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { key: 'webDevelopment', label: 'Développement Web', icon: '🌐', color: '#FFDD00' },
            { key: 'seoOptimization', label: 'SEO & Référencement', icon: '🚀', color: '#10B981' },
            { key: 'contentMarketing', label: 'Content Marketing', icon: '📝', color: '#06B6D4' },
            { key: 'paidAdvertising', label: 'Publicité Payante', icon: '📢', color: '#8B5CF6' },
            { key: 'analytics', label: 'Analytics & Tracking', icon: '📊', color: '#EC4899' },
            { key: 'maintenance', label: 'Maintenance & Support', icon: '⚙️', color: '#F59E0B' }
          ].map((item, index) => (
            <motion.div 
              key={item.key}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold mb-2" style={{ color: item.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                <AnimatedCounter 
                  from={0} 
                  to={Math.floor((results.investmentBreakdown as any)[item.key] / 100)} 
                  duration={2} 
                />K CHF
              </div>
              <p className="text-white text-sm font-medium mb-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{item.label}</p>
              <motion.div 
                className="h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: index * 0.1 + 1, duration: 1 }}
              >
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(((results.investmentBreakdown as any)[item.key] / 10000) * 100, 100)}%` }}
                  transition={{ delay: index * 0.1 + 1.5, duration: 1.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium Timeline Evolution */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden"
      >
        {/* Background accent */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#06B6D4" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="flex items-center mb-8 relative z-10">
          <motion.div 
            className="w-3 h-3 rounded-full bg-cyan-400 mr-3"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Évolution dans le <span className="text-cyan-400 font-bold">temps</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {[
            { period: '3 mois', data: results.timeline.month3, color: '#FFDD00', growth: '30%' },
            { period: '6 mois', data: results.timeline.month6, color: '#10B981', growth: '85%' },
            { period: '12 mois', data: results.timeline.month12, color: '#06B6D4', growth: '150%' },
            { period: '24 mois', data: results.timeline.month24, color: '#8B5CF6', growth: '200%' }
          ].map((timeline, index) => (
            <motion.div 
              key={timeline.period}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 30px ${timeline.color}20`
              }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-lg"
                style={{ backgroundColor: timeline.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {index + 1}
              </motion.div>
              
              <div className="text-sm font-bold text-gray-300 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{timeline.period}</div>
              
              <div className="text-2xl font-bold mb-2" style={{ color: timeline.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                <AnimatedCounter from={0} to={Math.floor(timeline.data.revenue / 1000)} duration={2.5} />K CHF
              </div>
              
              <div className="text-white text-sm mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <AnimatedCounter from={0} to={timeline.data.leads} duration={2} /> leads
              </div>
              
              <div className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${timeline.color}20`, color: timeline.color }}>
                +{timeline.growth} croissance
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Connection line */}
        <motion.div 
          className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-yellow-400 via-green-400 via-cyan-400 to-purple-400 opacity-30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 2 }}
        />
      </motion.div>

      {/* Premium Recommendations */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20"
      >
        <div className="flex items-center mb-8">
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-400 mr-3"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Nos <span className="text-green-400 font-bold">recommandations</span>
          </h3>
        </div>
        
        <div className="space-y-4">
          {results.recommendations.map((recommendation, index) => (
            <motion.div 
              key={index} 
              className="flex items-start space-x-4 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 20px #10B98150"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg 
                  className="w-5 h-5 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                >
                  <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <p className="text-white text-lg leading-relaxed group-hover:text-green-100 transition-colors" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {recommendation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium CTA Section */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-yellow-400/10 via-green-400/5 to-transparent backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/30 text-center relative overflow-hidden"
      >
        {/* Background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#10B981" }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#FFDD00" }}
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <div className="relative z-10">
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-400 mr-3"
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
            <span className="text-yellow-400 text-sm font-medium tracking-wide" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              TRANSFORMATION GARANTIE • RÉSULTATS MESURABLES
            </span>
          </motion.div>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight" 
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Prêt à <span className="text-yellow-400 font-bold">concrétiser</span> ces résultats ?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed" 
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Nos experts vous accompagnent dans la mise en place d&apos;une <span className="text-yellow-400 font-semibold">stratégie digitale sur-mesure</span> pour atteindre vos objectifs de croissance avec des résultats <span className="text-green-400 font-semibold">garantis et mesurables</span>.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-lg shadow-lg relative overflow-hidden group"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 221, 0, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                🎁 Stratégie Gratuite
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            
            <motion.button
              onClick={onReset}
              className="border-2 border-yellow-400/60 text-yellow-400 px-10 py-4 rounded-xl font-medium text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              🔄 Nouveau Calcul
            </motion.button>
          </div>
          
          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-400 mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>ROI Garanti ou Remboursé</span>
            </div>
            <div className="flex items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-yellow-400 mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <span>Suivi GA4 Transparent</span>
            </div>
            <div className="flex items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-cyan-400 mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <span>Support 7j/7 Inclus</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Disclaimer */}
      <motion.div 
        className="text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl p-6 border border-white/10">
          <p className="text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            <span className="text-yellow-400">*</span> Ces projections sont basées sur nos <span className="text-green-400 font-semibold">case studies réels</span> et des données marché vérifiées. 
            Les résultats peuvent varier selon votre secteur. Un <span className="text-cyan-400 font-semibold">audit personnalisé gratuit</span> permettra d&apos;affiner ces estimations avec précision.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}