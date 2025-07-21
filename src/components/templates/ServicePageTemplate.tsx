'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// Color palette configurations
export const SERVICE_COLORS = {
  yellow: '#ffd507',
  cyan: '#70c1a9',
  purple: '#8B5CF6',
  linearDark: '#0D1117',
  linearBorder: '#21262D'
} as const

export type ServiceColor = keyof typeof SERVICE_COLORS

interface ServicePageTemplateProps {
  // Hero section
  title: string
  subtitle: string
  heroDescription: string
  color: ServiceColor
  heroMetrics: Array<{
    value: string
    label: string
    description: string
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

export default function ServicePageTemplate({
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
}: ServicePageTemplateProps) {
  const colorValue = SERVICE_COLORS[color]
  
  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: backgroundPattern || `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${colorValue.replace('#', '%23')}' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} 
          />
        </div>

        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              `linear-gradient(45deg, transparent, ${colorValue}20, transparent)`,
              `linear-gradient(225deg, transparent, ${colorValue}30, transparent)`,
              `linear-gradient(45deg, transparent, ${colorValue}20, transparent)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div 
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                {title.split(' ').map((word, index) => 
                  word === subtitle ? (
                    <span key={index} style={{ color: colorValue }}>
                      {word}
                    </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {heroDescription}
              </p>
            </motion.div>

            {/* Animated KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-[#21262D]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#21262D] relative overflow-hidden group"
                  style={{ borderColor: `${colorValue}30` }}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: colorValue }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-4xl font-light mb-2"
                      style={{ color: colorValue }}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-white font-medium mb-2">{metric.label}</div>
                    <div className="text-gray-400 text-sm">{metric.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: colorValue, 
                  color: color === 'yellow' ? '#000' : '#fff'
                }}
              >
                {ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-24 bg-[#21262D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-white mb-6">
              {methodTitle.split(' ').map((word, index) => 
                word.includes('OSOM') || word.includes('Méthode') ? (
                  <span key={index} style={{ color: colorValue }}>
                    {word}{' '}
                  </span>
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
            {/* Process Steps */}
            <div>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colorValue }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="font-bold" style={{ color: color === 'yellow' ? '#000' : '#fff' }}>
                        {step.number}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Proof Content */}
            <motion.div 
              className="bg-[#0D1117]/60 rounded-2xl p-8 border border-[#21262D]"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{proofTitle}</h3>
              {proofContent}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
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
              <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colorValue }}></div>
              <span className="text-sm font-medium tracking-wide" style={{ color: colorValue }}>SERVICES DÉTAILLÉS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              {featuresTitle.split(' ').map((word, index) => 
                word.includes('Services') || word.includes('Premium') || word.includes('Technologies') ? (
                  <span key={index} style={{ color: colorValue }}>
                    {word}{' '}
                  </span>
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
                className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-opacity-60 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-white/5 to-black/40 group"
                style={{
                  '--hover-border': `${colorValue}30`
                } as any}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${colorValue}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Header avec icône */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full flex items-center justify-center group-hover:animate-pulse"
                      style={{ backgroundColor: colorValue }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                      <div className="w-8 h-1 rounded-full" style={{ backgroundColor: colorValue }}></div>
                    </div>
                  </div>
                </div>

                {/* Description - Style Linear */}
                <p className="text-gray-300 leading-relaxed text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {feature.description}
                </p>

                {/* Indicator Bottom - Style Linear */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorValue }}></div>
                      <span className="text-xs text-gray-400 font-medium">Service Premium</span>
                    </div>
                    <motion.div
                      className="text-xs font-medium transition-colors"
                      style={{ color: colorValue }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Inclus →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Final CTA */}
      <section 
        className="py-24 relative"
        style={{
          background: `linear-gradient(135deg, ${colorValue}05, transparent, ${color === 'purple' ? '#8B5CF6' : colorValue}05)`
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
                <span key={index} style={{ color: colorValue }}>
                  {word}{' '}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </motion.h2>
          
          <motion.div 
            className="bg-[#0D1117]/80 backdrop-blur-lg rounded-3xl p-12 border border-opacity-40 mb-12"
            style={{ borderColor: colorValue }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            <div className="text-gray-300 mb-8">
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
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-green-400">✓</span>
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
            <Link
              href="/contact"
              className="inline-block px-12 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: colorValue, 
                color: color === 'yellow' ? '#000' : '#fff'
              }}
            >
              {finalCtaText}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}