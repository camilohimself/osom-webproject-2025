'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface GaugeChartProps {
  title?: string
  subtitle?: string
  primaryValue: number // Performance OSOM
  secondaryValue: number // Performance Industrie
  primaryLabel?: string
  secondaryLabel?: string
  unit?: string
  maxValue?: number
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  className?: string
  animate?: boolean
}

export default function GaugeChart({
  title = "Performance Mesurée",
  subtitle = "Vitesse chargement comparée",
  primaryValue,
  secondaryValue,
  primaryLabel = "OSOM Next.js",
  secondaryLabel = "WordPress Standard",
  unit = "s",
  maxValue = 10,
  primaryColor = "#10B981",
  secondaryColor = "#6B7280",
  backgroundColor = "rgba(16, 185, 129, 0.05)",
  className = "",
  animate = true
}: GaugeChartProps) {
  const gaugeRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(animate ? 0 : 1)

  const centerX = 200
  const centerY = 180
  const radius = 120
  const strokeWidth = 20

  // Calculate angles (semicircle from -90° to 90°)
  const startAngle = -90
  const endAngle = 90
  const totalAngle = endAngle - startAngle

  // Calculate percentages for needle positions
  const primaryPercentage = Math.min((primaryValue / maxValue) * 100, 100)
  const secondaryPercentage = Math.min((secondaryValue / maxValue) * 100, 100)

  // Convert percentages to angles
  const primaryAngle = startAngle + (primaryPercentage / 100) * totalAngle
  const secondaryAngle = startAngle + (secondaryPercentage / 100) * totalAngle

  // Calculate needle positions
  const getNeedlePosition = (angle: number, length: number) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: centerX + Math.cos(radian) * length,
      y: centerY + Math.sin(radian) * length
    }
  }

  // Generate arc path
  const generateArcPath = (startAngle: number, endAngle: number, radius: number) => {
    const start = getNeedlePosition(startAngle, radius)
    const end = getNeedlePosition(endAngle, radius)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          if (animate) {
            const startTime = Date.now()
            const duration = 2500 // 2.5 seconds
            
            const animateGauge = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function for smooth animation
              const easedProgress = 1 - Math.pow(1 - progress, 3)
              setAnimationProgress(easedProgress)
              
              if (progress < 1) {
                requestAnimationFrame(animateGauge)
              }
            }
            
            setTimeout(animateGauge, 500)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current)
    }

    return () => observer.disconnect()
  }, [animate])

  return (
    <div className={`relative ${className}`} style={{ backgroundColor }}>
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
            <span className="text-green-400 text-sm font-medium tracking-wide">TECHNOLOGIE</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {title}
          </h3>
          <p className="text-gray-400 text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        {/* Gauge Container */}
        <div className="flex justify-center">
          <svg
            ref={gaugeRef}
            width="400"
            height="280"
            viewBox="0 0 400 280"
            className="overflow-visible"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="gaugeTrackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
              </linearGradient>
              
              <linearGradient id="primaryNeedleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={`${primaryColor}CC`} />
              </linearGradient>
              
              <linearGradient id="secondaryNeedleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={secondaryColor} />
                <stop offset="100%" stopColor={`${secondaryColor}CC`} />
              </linearGradient>

              {/* Glow filters */}
              <filter id="primaryGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Background Track */}
            <path
              d={generateArcPath(startAngle, endAngle, radius)}
              fill="none"
              stroke="#374151"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />

            {/* Colored Track Gradient */}
            <motion.path
              d={generateArcPath(startAngle, endAngle, radius)}
              fill="none"
              stroke="url(#gaugeTrackGradient)"
              strokeWidth={strokeWidth - 4}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isVisible ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />

            {/* Scale Markers */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
              const angle = startAngle + (value / maxValue) * totalAngle
              const innerPos = getNeedlePosition(angle, radius - 35)
              const outerPos = getNeedlePosition(angle, radius - 15)
              const textPos = getNeedlePosition(angle, radius - 50)
              
              return (
                <g key={value}>
                  <motion.line
                    x1={innerPos.x}
                    y1={innerPos.y}
                    x2={outerPos.x}
                    y2={outerPos.y}
                    stroke="#9CA3AF"
                    strokeWidth={value % 2 === 0 ? "3" : "1"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 1 + value * 0.05, duration: 0.3 }}
                  />
                  {value % 2 === 0 && (
                    <motion.text
                      x={textPos.x}
                      y={textPos.y + 4}
                      fill="#9CA3AF"
                      fontSize="12"
                      textAnchor="middle"
                      fontFamily="monospace"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ delay: 1.2 + value * 0.05, duration: 0.3 }}
                    >
                      {value}{unit}
                    </motion.text>
                  )}
                </g>
              )
            })}

            {/* Secondary Needle (WordPress) */}
            <motion.g
              initial={{ rotate: startAngle }}
              animate={{ 
                rotate: isVisible ? secondaryAngle * animationProgress + startAngle * (1 - animationProgress) : startAngle 
              }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: `${centerX}px ${centerY}px` }}
            >
              <line
                x1={centerX}
                y1={centerY}
                x2={centerX}
                y2={centerY - radius + 30}
                stroke={secondaryColor}
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle
                cx={centerX}
                cy={centerY - radius + 30}
                r="6"
                fill={secondaryColor}
              />
            </motion.g>

            {/* Primary Needle (OSOM) */}
            <motion.g
              initial={{ rotate: startAngle }}
              animate={{ 
                rotate: isVisible ? primaryAngle * animationProgress + startAngle * (1 - animationProgress) : startAngle 
              }}
              transition={{ duration: 2.2, delay: 1.8, ease: "easeOut" }}
              style={{ transformOrigin: `${centerX}px ${centerY}px` }}
            >
              <line
                x1={centerX}
                y1={centerY}
                x2={centerX}
                y2={centerY - radius + 25}
                stroke="url(#primaryNeedleGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#primaryGlow)"
              />
              <circle
                cx={centerX}
                cy={centerY - radius + 25}
                r="8"
                fill={primaryColor}
                filter="url(#primaryGlow)"
              />
            </motion.g>

            {/* Center Hub */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r="12"
              fill="#1F2937"
              stroke="#374151"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 2.5, duration: 0.3, type: "spring" }}
            />
            
            <motion.circle
              cx={centerX}
              cy={centerY}
              r="6"
              fill={primaryColor}
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 2.7, duration: 0.3, type: "spring" }}
            />
          </svg>
        </div>

        {/* Legend and Values */}
        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 3 }}
        >
          {/* Primary Value */}
          <div className="flex items-center justify-between p-4 bg-green-400/10 rounded-xl border border-green-400/30">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: primaryColor }}></div>
              <div>
                <div className="text-white font-semibold text-lg">{primaryLabel}</div>
                <div className="text-gray-400 text-sm">Performance optimisée</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold" style={{ color: primaryColor }}>
                &lt; {Math.round(primaryValue * animationProgress * 10) / 10}{unit}
              </div>
              <div className="text-green-300 text-sm">PageSpeed 95+</div>
            </div>
          </div>

          {/* Secondary Value */}
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: secondaryColor }}></div>
              <div>
                <div className="text-white font-semibold text-lg">{secondaryLabel}</div>
                <div className="text-gray-400 text-sm">Performance standard</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold" style={{ color: secondaryColor }}>
                {Math.round(secondaryValue * animationProgress * 10) / 10} - {Math.round((secondaryValue + 3) * animationProgress * 10) / 10}{unit}
              </div>
              <div className="text-gray-400 text-sm">Temps variable</div>
            </div>
          </div>
        </motion.div>

        {/* Performance Indicator */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 3.5 }}
        >
          <div className="bg-green-400/10 rounded-xl p-6 border border-green-400/30 inline-block">
            <div className="text-green-400 font-bold text-sm tracking-wider mb-2">
              AVANTAGE TECHNIQUE
            </div>
            <div className="text-white text-3xl font-bold mb-2">
              {Math.round((secondaryValue / primaryValue) * 10) / 10}x
            </div>
            <div className="text-gray-300 text-sm">
              Plus rapide que WordPress
            </div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 4 }}
        >
          <div className="bg-green-400/5 rounded-lg p-4 border border-green-400/20">
            <div className="text-green-400 font-semibold text-sm mb-2">Core Web Vitals</div>
            <div className="text-white text-lg font-bold">95+ Score</div>
            <div className="text-gray-400 text-xs">LCP, FID, CLS optimaux</div>
          </div>
          
          <div className="bg-green-400/5 rounded-lg p-4 border border-green-400/20">
            <div className="text-green-400 font-semibold text-sm mb-2">Mobile Performance</div>
            <div className="text-white text-lg font-bold">First Class</div>
            <div className="text-gray-400 text-xs">PWA + Touch optimized</div>
          </div>
          
          <div className="bg-green-400/5 rounded-lg p-4 border border-green-400/20">
            <div className="text-green-400 font-semibold text-sm mb-2">Architecture</div>
            <div className="text-white text-lg font-bold">Next.js 15</div>
            <div className="text-gray-400 text-xs">SSR + ISR + Edge</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}