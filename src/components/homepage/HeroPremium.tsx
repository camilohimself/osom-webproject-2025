'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { GraphiqueLinear } from '@/components/ui'

interface HeroPremiumProps {
  dictionary: {
    hero: {
      badge: string
      title_line1: string
      title_focus: string
      title_line2: string
      title_impact: string
      description: string
      cta_primary: string
      cta_secondary: string
      trust_indicators: {
        conversions: string
        engagement: string
        roi: string
      }
    }
    charts: {
      performance: {
        title: string
        subtitle: string
        primary_metric: {
          label: string
          value: string
        }
        secondary_metric: {
          label: string
          value: string
        }
        improvement: {
          label: string
          value: string
        }
      }
    }
  }
}

const HeroPremium = ({ dictionary }: HeroPremiumProps) => {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  // Animation variants
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

  const chartVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }

  // Tooltip data for metrics
  const metricTooltips = {
    conversions: {
      title: "Performance Vérifiée GA4",
      details: "Culture Peinture Valais - 6 mois d'analyse",
      highlight: "688 conversions organiques vs 49 payantes",
      context: "Même audience, même période, budget 10x inférieur"
    },
    engagement: {
      title: "Engagement Supérieur SEO",
      details: "Artisane de Lumière - 200+ jours GA4",
      highlight: "68.6% engagement trafic SEO vs 44.6% direct",
      context: "Chaque visiteur SEO génère 54% plus de valeur"
    },
    roi: {
      title: "ROI Transparent & Mesurable",
      details: "Données vérifiables en temps réel",
      highlight: "Dashboard GA4 + Search Console intégrés",
      context: "Rapports mensuels détaillés avec attribution complète"
    }
  }

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/50 opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Content */}
          <div>
            {/* Badge with elegant entrance */}
            <motion.div 
              className="flex items-center mb-8"
              variants={badgeVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-yellow-400 mr-3"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-yellow-400 text-sm font-medium tracking-wide">
                {dictionary.hero.badge}
              </span>
            </motion.div>
            
            {/* Main Title with staggered animation */}
            <motion.h1 
              className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={titleVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {dictionary.hero.title_line1}{' '}
              </motion.span>
              <motion.span 
                className="text-yellow-400 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {dictionary.hero.title_focus}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                .<br />
                {dictionary.hero.title_line2}{' '}
              </motion.span>
              <motion.span 
                className="text-yellow-400 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {dictionary.hero.title_impact}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                .
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
            >
              {dictionary.hero.description}
            </motion.p>
            
            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              {/* Primary CTA with premium hover */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 221, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href="/contact"
                  className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold shadow-lg relative overflow-hidden block text-center"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    {dictionary.hero.cta_primary}
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                </Link>
              </motion.div>

              {/* Secondary CTA with subtle hover */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href="/calculator"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm relative overflow-hidden block text-center hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  {dictionary.hero.cta_secondary}
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Trust Indicators with Tooltips */}
            <motion.div 
              className="flex flex-wrap gap-8 text-gray-400 text-sm"
              variants={itemVariants}
            >
              {Object.entries(dictionary.hero.trust_indicators).map(([key, text], index) => (
                <motion.div
                  key={key}
                  className="flex items-center relative cursor-pointer"
                  onHoverStart={() => setHoveredMetric(key)}
                  onHoverEnd={() => setHoveredMetric(null)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <motion.div 
                    className={`w-2 h-2 rounded-full mr-2 ${
                      key === 'conversions' ? 'bg-green-500' :
                      key === 'engagement' ? 'bg-cyan-400' : 'bg-yellow-400'
                    }`}
                    animate={{
                      scale: hoveredMetric === key ? [1, 1.3, 1] : 1,
                      opacity: hoveredMetric === key ? [0.8, 1, 0.8] : 0.8
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className={hoveredMetric === key ? 'text-white' : ''}>
                    {text}
                  </span>
                  
                  {/* Premium Tooltip */}
                  {hoveredMetric === key && metricTooltips[key as keyof typeof metricTooltips] && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-3 p-4 bg-black/95 backdrop-blur-md rounded-xl border border-yellow-400/30 shadow-2xl min-w-80 z-20"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-yellow-400 font-semibold mb-2 text-sm">
                        {metricTooltips[key as keyof typeof metricTooltips].title}
                      </div>
                      <div className="text-white font-medium mb-1 text-sm">
                        {metricTooltips[key as keyof typeof metricTooltips].highlight}
                      </div>
                      <div className="text-gray-300 text-xs mb-1">
                        {metricTooltips[key as keyof typeof metricTooltips].context}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {metricTooltips[key as keyof typeof metricTooltips].details}
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-400/30" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right: Animated Chart */}
          <motion.div
            variants={chartVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75], delay: 0.5 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <GraphiqueLinear
                title={dictionary.charts.performance.title}
                subtitle={dictionary.charts.performance.subtitle}
                primaryMetric={{
                  label: dictionary.charts.performance.primary_metric.label,
                  value: dictionary.charts.performance.primary_metric.value,
                  color: "#EAB308"
                }}
                secondaryMetric={{
                  label: dictionary.charts.performance.secondary_metric.label,
                  value: dictionary.charts.performance.secondary_metric.value,
                  color: "#6B7280"
                }}
                improvement={{
                  label: dictionary.charts.performance.improvement.label,
                  value: dictionary.charts.performance.improvement.value
                }}
                backgroundColor="rgba(0,0,0,0.4)"
                className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
                animate={true} // This prop will trigger progressive drawing
              />
            </motion.div>
            
            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-yellow-400/20 blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-cyan-400/10 blur-md"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPremium