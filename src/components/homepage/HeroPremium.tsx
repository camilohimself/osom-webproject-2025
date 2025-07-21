'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { GraphiqueLinear } from '@/components/ui'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

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

  // Enhanced tooltip data for metrics
  const metricTooltips = {
    conversions: {
      title: "Performance Révolutionnaire Vérifiée",
      details: "Culture Peinture Valais - Case Study Complet",
      highlight: "140x Plus Efficace que la Publicité Payante",
      metrics: {
        organic: 688,
        paid: 49,
        period: "6 mois",
        budget_ratio: "10x moins cher"
      },
      context: "Stratégie organique basée sur SEO technique + contenu optimisé",
      proof: "Données GA4 + Meta Business Manager vérifiables"
    },
    engagement: {
      title: "Engagement Supérieur Mesuré",
      details: "Artisane de Lumière - Étude 200+ jours",
      highlight: "54% Plus de Valeur par Visiteur SEO",
      metrics: {
        seo_engagement: 68.6,
        direct_engagement: 44.6,
        improvement: "+54%",
        sessions_recovered: "14,171"
      },
      context: "Trafic SEO OSOM génère plus d'interactions, temps de session et conversions",
      proof: "Analytics GA4 comparatif sur période identique"
    },
    roi: {
      title: "ROI Transparent & Traçable",
      details: "Méthodologie OSOM standardisée",
      highlight: "Visibilité Complète sur Chaque Euro Investi",
      metrics: {
        attribution: "100%",
        reporting: "Temps réel",
        channels: "Multi-canal",
        transparency: "Données client"
      },
      context: "Dashboard temps réel + rapports mensuels avec attribution complète par source",
      proof: "GA4 + Search Console + Data Studio intégrés"
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
            
            {/* Ultra-Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {/* Primary CTA - Professional */}
              <motion.div
                className="group relative"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(255, 221, 0, 0.25)"
                }}
                whileTap={{ 
                  scale: 0.98
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20
                }}
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-5 rounded-xl font-bold shadow-xl relative overflow-hidden block text-center"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  {/* Subtle Hover Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                    >
                      {dictionary.hero.cta_primary}
                    </motion.span>
                    
                    {/* Simple Arrow */}
                    <motion.span
                      className="ml-3 text-lg"
                      animate={{ 
                        x: [0, 4, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </Link>
              </motion.div>

              {/* Secondary CTA - Professional */}
              <motion.div
                className="group relative"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ 
                  scale: 0.98
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20
                }}
              >
                <Link
                  href="/calculator"
                  className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl font-semibold backdrop-blur-sm relative overflow-hidden block text-center hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  {/* Subtle Hover Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span>
                      {dictionary.hero.cta_secondary}
                    </span>
                  </div>
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
                  
                  {/* Ultra-Premium Tooltip with Animated Counters */}
                  {hoveredMetric === key && metricTooltips[key as keyof typeof metricTooltips] && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-3 p-6 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-md rounded-2xl border border-yellow-400/40 shadow-2xl min-w-96 z-20"
                      initial={{ opacity: 0, y: 15, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25,
                        duration: 0.3 
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-cyan-400/10 rounded-2xl blur-sm" />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3 animate-pulse" />
                          <div className="text-yellow-400 font-bold text-base">
                            {metricTooltips[key as keyof typeof metricTooltips].title}
                          </div>
                        </div>

                        {/* Main Highlight */}
                        <div className="text-white font-semibold mb-4 text-lg">
                          {metricTooltips[key as keyof typeof metricTooltips].highlight}
                        </div>

                        {/* Animated Metrics */}
                        {key === 'conversions' && (
                          <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-xl">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400">
                                <AnimatedCounter 
                                  from={0} 
                                  to={metricTooltips.conversions.metrics.organic}
                                  duration={1.5}
                                  delay={0.2}
                                />
                              </div>
                              <div className="text-xs text-gray-300">Conversions Organiques</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-400">
                                <AnimatedCounter 
                                  from={0} 
                                  to={metricTooltips.conversions.metrics.paid}
                                  duration={1.5}
                                  delay={0.4}
                                />
                              </div>
                              <div className="text-xs text-gray-300">Conversions Payantes</div>
                            </div>
                            <div className="col-span-2 text-center mt-2">
                              <div className="text-yellow-400 font-bold">
                                = {metricTooltips.conversions.metrics.budget_ratio}
                              </div>
                            </div>
                          </div>
                        )}

                        {key === 'engagement' && (
                          <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-cyan-400">
                                <AnimatedCounter 
                                  from={0} 
                                  to={metricTooltips.engagement.metrics.seo_engagement}
                                  duration={1.5}
                                  delay={0.2}
                                  suffix="%"
                                />
                              </div>
                              <div className="text-xs text-gray-300">Engagement SEO OSOM</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-400">
                                <AnimatedCounter 
                                  from={0} 
                                  to={metricTooltips.engagement.metrics.direct_engagement}
                                  duration={1.5}
                                  delay={0.4}
                                  suffix="%"
                                />
                              </div>
                              <div className="text-xs text-gray-300">Engagement Direct</div>
                            </div>
                            <div className="col-span-2 text-center mt-2">
                              <div className="text-cyan-400 font-bold">
                                Sessions récupérées: <AnimatedCounter 
                                  from={0} 
                                  to={14171}
                                  duration={2}
                                  delay={0.6}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {key === 'roi' && (
                          <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl">
                            <div className="text-center">
                              <div className="text-lg font-bold text-yellow-400">
                                <AnimatedCounter 
                                  from={0} 
                                  to={100}
                                  duration={1.5}
                                  delay={0.2}
                                  suffix="%"
                                />
                              </div>
                              <div className="text-xs text-gray-300">Attribution</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-yellow-400">24/7</div>
                              <div className="text-xs text-gray-300">Reporting</div>
                            </div>
                          </div>
                        )}

                        {/* Context */}
                        <div className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {metricTooltips[key as keyof typeof metricTooltips].context}
                        </div>

                        {/* Proof */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                          <div className="text-gray-400 text-xs">
                            📊 {metricTooltips[key as keyof typeof metricTooltips].proof}
                          </div>
                          <div className="text-xs text-gray-500">
                            {metricTooltips[key as keyof typeof metricTooltips].details}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Arrow */}
                      <div className="absolute top-full left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-400/40" />
                      <div className="absolute top-full left-8 mt-1 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-black/95" />
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