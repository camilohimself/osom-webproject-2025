'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// Color palette configurations
export const SERVICE_COLORS = {
  yellow: '#ffd507',
  cyan: '#70c1a9',
  purple: '#8B5CF6',
  linearDark: '#0D1117',
  linearBorder: '#21262D'
} as const

export type ServiceColor = keyof typeof SERVICE_COLORS

interface ServicePageTemplatePremiumProps {
  // Hero section
  title: string
  subtitle: string
  heroDescription: string
  color: ServiceColor
  heroMetrics: Array<{
    value: string
    label: string
    description: string
    animatedValue?: number
    suffix?: string
    prefix?: string
    tooltip?: {
      title: string
      details: string
      highlight: string
      metrics?: Record<string, any>
    }
  }>
  ctaText: string
  
  // Method section
  methodTitle: string
  methodDescription: string
  processSteps: Array<{
    number: string
    title: string
    description: string
  }>
  
  // Proof section
  proofTitle: string
  proofContent: ReactNode
  
  // Features section
  featuresTitle: string
  featuresDescription: string
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  
  // Pricing section
  pricingTitle: string
  price: string
  pricingDescription: string
  pricingFeatures: string[]
  finalCtaText: string
  
  // Optional background pattern
  backgroundPattern?: string
}

export default function ServicePageTemplatePremium({
  title,
  subtitle,
  heroDescription,
  color,
  heroMetrics,
  ctaText,
  methodTitle,
  methodDescription,
  processSteps,
  proofTitle,
  proofContent,
  featuresTitle,
  featuresDescription,
  features,
  pricingTitle,
  price,
  pricingDescription,
  pricingFeatures,
  finalCtaText,
  backgroundPattern
}: ServicePageTemplatePremiumProps) {
  const colorValue = SERVICE_COLORS[color]
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  // Premium animation variants (matching HeroPremium)
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

  const metricCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Ultra-Premium Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: backgroundPattern || `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${colorValue.replace('#', '%23')}' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        {/* Premium Gradient Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              `radial-gradient(circle at 25% 25%, ${colorValue}15, transparent 50%)`,
              `radial-gradient(circle at 75% 75%, ${colorValue}20, transparent 50%)`,
              `radial-gradient(circle at 25% 25%, ${colorValue}15, transparent 50%)`
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Accent Elements (Homepage Style) */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: colorValue }}
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
          style={{ backgroundColor: colorValue }}
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
                className="w-2 h-2 rounded-full mr-3"
                style={{ backgroundColor: colorValue }}
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
              <span 
                className="text-sm font-medium tracking-wide"
                style={{ color: colorValue }}
              >
                SERVICE PREMIUM • RÉSULTATS GARANTIS
              </span>
            </motion.div>
            
            {/* Premium Title with Word-by-Word Animation */}
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={titleVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {title.split(' ').map((word, index) => {
                const isSubtitle = word === subtitle
                return (
                  <motion.span
                    key={index}
                    className={isSubtitle ? 'font-bold' : ''}
                    style={{ color: isSubtitle ? colorValue : 'white' }}
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
              {heroDescription}
            </motion.p>
            
            {/* Ultra-Premium Animated KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  variants={metricCardVariants}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.8,
                    ease: [0.25, 0.25, 0.25, 0.75]
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: `0 20px 40px ${colorValue}20`
                  }}
                  onHoverStart={() => setHoveredMetric(metric.label)}
                  onHoverEnd={() => setHoveredMetric(null)}
                >
                  {/* Premium Card Background */}
                  <div 
                    className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 relative overflow-hidden"
                    style={{ 
                      borderColor: hoveredMetric === metric.label ? `${colorValue}60` : `${colorValue}20`,
                      backgroundColor: hoveredMetric === metric.label ? `${colorValue}05` : 'transparent'
                    }}
                  >
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at center, ${colorValue}20, transparent 70%)`
                      }}
                    />
                    
                    {/* Premium Content */}
                    <div className="relative z-10">
                      {/* Dynamic Counter or Static Value */}
                      <motion.div 
                        className="text-4xl md:text-5xl font-light mb-3"
                        style={{ color: colorValue }}
                        animate={{ 
                          scale: hoveredMetric === metric.label ? [1, 1.05, 1] : [1, 1.02, 1] 
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {metric.animatedValue ? (
                          <>
                            {metric.prefix}
                            <AnimatedCounter
                              from={0}
                              to={metric.animatedValue}
                              duration={2}
                              delay={index * 0.3 + 1}
                            />
                            {metric.suffix}
                          </>
                        ) : (
                          metric.value
                        )}
                      </motion.div>
                      
                      <div className="text-white font-semibold text-lg mb-2">
                        {metric.label}
                      </div>
                      
                      <div className="text-gray-400 text-sm leading-relaxed">
                        {metric.description}
                      </div>
                      
                      {/* Micro-interaction indicator */}
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 rounded-full"
                        style={{ backgroundColor: colorValue }}
                        animate={{
                          scale: hoveredMetric === metric.label ? [1, 1.5, 1] : 1,
                          opacity: hoveredMetric === metric.label ? [0.5, 1, 0.5] : 0.3
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>

                    {/* Tooltip on Hover */}
                    {metric.tooltip && hoveredMetric === metric.label && (
                      <motion.div
                        className="absolute -top-40 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-xl rounded-2xl p-6 min-w-80 z-50 border"
                        style={{ borderColor: `${colorValue}40` }}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-yellow-400 font-bold text-sm mb-2">
                          {metric.tooltip.title}
                        </div>
                        <div className="text-white text-sm mb-2">
                          {metric.tooltip.details}
                        </div>
                        <div 
                          className="text-sm font-medium"
                          style={{ color: colorValue }}
                        >
                          {metric.tooltip.highlight}
                        </div>
                        
                        {/* Tooltip Arrow */}
                        <div 
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b"
                          style={{ 
                            backgroundColor: 'black',
                            borderColor: `${colorValue}40`
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ultra-Premium CTA Button */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="group relative"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 15px 30px ${colorValue}40`
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20
                }}
              >
                <Link
                  href="/contact"
                  className="relative overflow-hidden block text-center px-12 py-5 rounded-2xl font-bold shadow-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorValue}, ${colorValue}dd)`,
                    color: color === 'yellow' ? '#000' : '#fff'
                  }}
                >
                  {/* Button Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ 
                      background: `linear-gradient(135deg, ${colorValue}20, ${colorValue}10)`
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center">
                    {ctaText}
                    <motion.span
                      className="ml-2 text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators (Homepage Style) */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-12 text-gray-400 text-sm"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: colorValue }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Résultats GA4 Vérifiés</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span>ROI Garanti ou Remboursé</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>Expertise Swiss Quality</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Method Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-white/5 via-black to-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              {methodTitle.split(' ').map((word, index) => 
                word.includes('OSOM') || word.includes('Méthode') ? (
                  <motion.span 
                    key={index} 
                    style={{ color: colorValue }}
                    className="font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {methodDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Process Steps */}
            <div>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: colorValue }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: `0 10px 20px ${colorValue}40`
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span 
                        className="text-2xl font-bold"
                        style={{ color: color === 'yellow' ? '#000' : '#fff' }}
                      >
                        {step.number}
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Proof Content */}
            <motion.div 
              className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border"
              style={{ borderColor: `${colorValue}30` }}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                borderColor: `${colorValue}60`,
                boxShadow: `0 20px 40px ${colorValue}10`
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{proofTitle}</h3>
              {proofContent}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced (keeping existing structure but with premium animations) */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${colorValue.replace('#', '%23')}' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div 
                className="w-2 h-2 rounded-full mr-3" 
                style={{ backgroundColor: colorValue }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span 
                className="text-sm font-medium tracking-wide" 
                style={{ color: colorValue }}
              >
                SERVICES DÉTAILLÉS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              {featuresTitle.split(' ').map((word, index) => 
                word.includes('Services') || word.includes('Premium') || word.includes('Technologies') ? (
                  <motion.span 
                    key={index} 
                    style={{ color: colorValue }}
                    className="font-bold"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              {featuresDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm border rounded-3xl p-8 relative overflow-hidden bg-gradient-to-br from-white/5 to-black/40 group"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${colorValue}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: `0 20px 40px ${colorValue}20`
                }}
              >
                {/* Header avec icône */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colorValue }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 10,
                        boxShadow: `0 10px 20px ${colorValue}40`
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-lg" style={{ color: colorValue }}>
                          {feature.icon}
                        </span>
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {feature.title}
                      </h3>
                      <motion.div 
                        className="h-1 rounded-full" 
                        style={{ backgroundColor: colorValue }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-lg mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {feature.description}
                </p>

                {/* Enhanced Bottom Indicator */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: colorValue }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                      <span className="text-xs text-gray-400 font-medium">Service Premium</span>
                    </div>
                    <motion.div
                      className="text-xs font-medium transition-colors flex items-center"
                      style={{ color: colorValue }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Inclus 
                      <motion.span 
                        className="ml-1"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Subtle Glow on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at center, ${colorValue}20, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing & Final CTA */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colorValue}05, transparent, ${colorValue}05)`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-white mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {pricingTitle.split(' ').map((word, index) => 
              word.includes('OSOM') || word.includes('Formula') ? (
                <motion.span 
                  key={index} 
                  style={{ color: colorValue }}
                  className="font-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {word}{' '}
                </motion.span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </motion.h2>
          
          <motion.div 
            className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border mb-12"
            style={{ borderColor: `${colorValue}40` }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 20px 40px ${colorValue}20`
            }}
          >
            <motion.div 
              className="text-6xl font-light mb-4"
              style={{ color: colorValue }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {price}
            </motion.div>
            <div className="text-2xl text-white mb-6">Service Complet</div>
            <div className="text-gray-300 mb-8 text-lg">
              {pricingDescription}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              {pricingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.span 
                    className="text-green-400 text-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="group relative"
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 20px 40px ${colorValue}40`
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-block px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${colorValue}, ${colorValue}dd)`,
                  color: color === 'yellow' ? '#000' : '#fff'
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {finalCtaText}
                  <motion.span
                    className="ml-2 text-xl"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorValue}20, ${colorValue}10)`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}