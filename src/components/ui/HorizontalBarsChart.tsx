'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HorizontalBarsChartProps {
  title?: string
  subtitle?: string
  primaryData: {
    label: string
    value: number
    color: string
    description?: string
  }
  secondaryData: {
    label: string
    value: number
    color: string
    description?: string
  }
  unit?: string
  maxValue?: number
  backgroundColor?: string
  className?: string
  animate?: boolean
}

export default function HorizontalBarsChart({
  title = "Comparaison Performance",
  subtitle = "Données vérifiées",
  primaryData,
  secondaryData,
  unit = "",
  maxValue,
  backgroundColor = "#0F0F0F",
  className = "",
  animate = true
}: HorizontalBarsChartProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(animate ? 0 : 1)

  // Calculate max value if not provided
  const calculatedMaxValue = maxValue || Math.max(primaryData.value, secondaryData.value)
  
  // Calculate percentages for bar widths
  const primaryPercentage = (primaryData.value / calculatedMaxValue) * 100
  const secondaryPercentage = (secondaryData.value / calculatedMaxValue) * 100

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          if (animate) {
            const startTime = Date.now()
            const duration = 2000 // 2 seconds
            
            const animateBars = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function for smooth animation
              const easedProgress = 1 - Math.pow(1 - progress, 3)
              setAnimationProgress(easedProgress)
              
              if (progress < 1) {
                requestAnimationFrame(animateBars)
              }
            }
            
            setTimeout(animateBars, 300)
          }
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(`horizontal-bars-${title.replace(/\s+/g, '-')}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [animate, title])

  return (
    <div 
      id={`horizontal-bars-${title.replace(/\s+/g, '-')}`}
      className={`relative ${className}`} 
      style={{ backgroundColor }}
    >
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide">MARKETING + IA</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {title}
          </h3>
          <p className="text-gray-400 text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        {/* Chart Container */}
        <div className="space-y-8">
          {/* Primary Bar (OSOM) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: primaryData.color }}
                />
                <span className="text-white font-semibold text-lg">
                  {primaryData.label}
                </span>
              </div>
              <div className="text-right">
                <div 
                  className="text-2xl font-bold"
                  style={{ color: primaryData.color }}
                >
                  {Math.round(primaryData.value * animationProgress)}{unit}
                </div>
                {primaryData.description && (
                  <div className="text-gray-400 text-sm">
                    {primaryData.description}
                  </div>
                )}
              </div>
            </div>
            
            {/* Primary Bar */}
            <div className="relative h-12 bg-gray-800/50 rounded-lg overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-lg flex items-center justify-end pr-4"
                style={{ 
                  background: `linear-gradient(90deg, ${primaryData.color}20, ${primaryData.color}60, ${primaryData.color})`,
                  boxShadow: `0 0 20px ${primaryData.color}40`
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: isVisible ? `${primaryPercentage * animationProgress}%` : 0 
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeOut",
                  delay: 0.5 
                }}
              >
                {/* Value indicator inside bar */}
                <motion.div
                  className="text-white font-bold text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: animationProgress > 0.7 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {Math.round(primaryData.value * animationProgress)}{unit}
                </motion.div>
              </motion.div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute left-0 top-0 h-full rounded-lg opacity-30"
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${primaryData.color}80, transparent)`,
                  filter: 'blur(4px)'
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: isVisible ? `${primaryPercentage * animationProgress}%` : 0 
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeOut",
                  delay: 0.5 
                }}
              />
            </div>
          </div>

          {/* Secondary Bar (Concurrence) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: secondaryData.color }}
                />
                <span className="text-white font-semibold text-lg">
                  {secondaryData.label}
                </span>
              </div>
              <div className="text-right">
                <div 
                  className="text-2xl font-bold"
                  style={{ color: secondaryData.color }}
                >
                  {Math.round(secondaryData.value * animationProgress)}{unit}
                </div>
                {secondaryData.description && (
                  <div className="text-gray-400 text-sm">
                    {secondaryData.description}
                  </div>
                )}
              </div>
            </div>
            
            {/* Secondary Bar */}
            <div className="relative h-12 bg-gray-800/50 rounded-lg overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-lg flex items-center justify-end pr-4"
                style={{ 
                  background: `linear-gradient(90deg, ${secondaryData.color}20, ${secondaryData.color}60, ${secondaryData.color})`,
                  boxShadow: `0 0 15px ${secondaryData.color}30`
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: isVisible ? `${secondaryPercentage * animationProgress}%` : 0 
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeOut",
                  delay: 0.8 
                }}
              >
                {/* Value indicator inside bar */}
                <motion.div
                  className="text-white font-bold text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: animationProgress > 0.7 ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {Math.round(secondaryData.value * animationProgress)}{unit}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Performance Indicator */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <div className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 inline-block">
            <div className="text-purple-400 font-bold text-sm tracking-wider mb-2">
              PERFORMANCE SUPÉRIEURE
            </div>
            <div className="text-white text-3xl font-bold mb-2">
              {Math.round((primaryData.value / secondaryData.value) * 10) / 10}x
            </div>
            <div className="text-gray-300 text-sm">
              Plus efficace que la concurrence
            </div>
          </div>
        </motion.div>

        {/* Particles for visual enhancement */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full pointer-events-none"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-3, 3, -3],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  )
}