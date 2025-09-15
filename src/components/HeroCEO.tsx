'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroCEOProps {
  badge: string
  title: string
  subtitle: string
  description: string
  price: string
  deliveryTime: string
  ctaPrimary: {
    text: string
    href: string
  }
  ctaSecondary: {
    text: string
    href: string
  }
  trustSignal: string
  themeColor: 'yellow' | 'purple' | 'cyan' | 'green' | 'pink'
  portfolio?: {
    title: string
    url: string
  }
}

const colorConfig = {
  yellow: {
    accent: 'text-yellow-400',
    bg: 'bg-yellow-400',
    border: 'border-yellow-400',
    gradient: 'from-yellow-400/10 via-orange-400/5 to-transparent',
    shadow: 'hover:shadow-yellow-400/20'
  },
  purple: {
    accent: 'text-purple-400',
    bg: 'bg-purple-400',
    border: 'border-purple-400',
    gradient: 'from-purple-400/10 via-violet-500/5 to-transparent',
    shadow: 'hover:shadow-purple-400/20'
  },
  cyan: {
    accent: 'text-cyan-400',
    bg: 'bg-cyan-400',
    border: 'border-cyan-400',
    gradient: 'from-cyan-400/10 via-blue-500/5 to-transparent',
    shadow: 'hover:shadow-cyan-400/20'
  },
  green: {
    accent: 'text-green-400',
    bg: 'bg-green-400',
    border: 'border-green-400',
    gradient: 'from-green-400/10 via-emerald-500/5 to-transparent',
    shadow: 'hover:shadow-green-400/20'
  },
  pink: {
    accent: 'text-pink-400',
    bg: 'bg-pink-400',
    border: 'border-pink-400',
    gradient: 'from-pink-400/10 via-purple-500/5 to-transparent',
    shadow: 'hover:shadow-pink-400/20'
  }
}

export default function HeroCEO({
  badge,
  title,
  subtitle,
  description,
  price,
  deliveryTime,
  ctaPrimary,
  ctaSecondary,
  trustSignal,
  themeColor,
  portfolio
}: HeroCEOProps) {
  const colors = colorConfig[themeColor]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient}`} />
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <motion.div 
          className={`inline-flex items-center px-6 py-3 bg-${themeColor}-400/20 rounded-full ${colors.accent} text-sm font-bold mb-8 ${colors.border}/30 border`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 animate-pulse`}></div>
          {badge}
        </motion.div>
        
        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-light text-white leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
          {subtitle && (
            <span className={`font-bold ${colors.accent} block`}>
              {subtitle}
            </span>
          )}
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>

        {/* Portfolio Link */}
        {portfolio && (
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href={portfolio.url}
              target="_blank"
              className={`inline-flex items-center px-4 py-2 rounded-lg border ${colors.border}/30 ${colors.accent} hover:bg-${themeColor}-400/10 transition-all duration-300 text-sm`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir notre dernier projet : {portfolio.title}
            </Link>
          </motion.div>
        )}

        {/* Price & Delivery */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <div className={`font-bold ${colors.accent}`}>
              {price}
            </div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-300">
              {deliveryTime}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            href={ctaPrimary.href}
            className={`inline-flex items-center justify-center px-8 py-4 ${colors.bg} hover:brightness-110 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${colors.shadow}`}
          >
            {ctaPrimary.text}
          </Link>
          
          <Link 
            href={ctaSecondary.href}
            className={`inline-flex items-center justify-center px-8 py-4 border ${colors.border}/50 ${colors.accent} hover:text-white hover:bg-${themeColor}-400/10 font-semibold text-lg rounded-xl transition-all duration-300`}
          >
            {ctaSecondary.text}
          </Link>
        </motion.div>

        {/* Trust Signal */}
        <motion.div 
          className={`inline-flex items-center px-4 py-2 bg-green-400/20 rounded-full text-green-400 text-sm font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
          {trustSignal}
        </motion.div>
      </div>
    </section>
  )
}