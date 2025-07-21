'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GraphiqueImpactProps {
  title?: string
  subtitle?: string
  organicValue?: number
  paidValue?: number
  organicColor?: string
  paidColor?: string
  multiplier?: number
  width?: number
  height?: number
  className?: string
}

export default function GraphiqueImpact({
  title = "Impact Révolutionnaire",
  subtitle = "Stratégie organique vs publicité payante",
  organicValue = 688,
  paidValue = 49,
  organicColor = "#EAB308",
  paidColor = "#6B7280",
  multiplier,
  width = 600,
  height = 250,
  className = ""
}: GraphiqueImpactProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const calculatedMultiplier = multiplier || Math.round(organicValue / paidValue)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Create explosion points for paid ads (scattered small circles)
  const paidPoints = Array.from({ length: paidValue }, (_, i) => ({
    x: 50 + (i % 7) * 60 + Math.random() * 20,
    y: height - 80 + (Math.floor(i / 7) * 15) + Math.random() * 10,
    delay: i * 0.02
  }))

  // Create growth curve for organic
  const organicPoints = Array.from({ length: 30 }, (_, i) => {
    const progress = i / 29
    const x = 350 + progress * 200
    const y = height - 50 - Math.pow(progress, 0.8) * 120 - Math.sin(progress * 4) * 10
    return { x, y, delay: i * 0.05 }
  })

  return (
    <div ref={containerRef} className={`relative p-6 ${className}`} style={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
          <span className="text-yellow-400 text-sm font-medium tracking-wide">REVOLUTION METRICS</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
          {title}
        </h3>
        <p className="text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
          {subtitle}
        </p>
      </div>

      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="mb-4">
        {/* Grid */}
        <defs>
          <pattern id="gridImpact" width="80" height="40" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridImpact)" />

        {/* Labels */}
        <text x={150} y={height - 10} textAnchor="middle" fill="#9CA3AF" fontSize="14">
          Publicité Payante
        </text>
        <text x={450} y={height - 10} textAnchor="middle" fill="#9CA3AF" fontSize="14">
          Stratégie Organique OSOM
        </text>

        {/* Paid ads visualization (scattered dots) */}
        {paidPoints.map((point, i) => (
          <motion.circle
            key={`paid-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill={paidColor}
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 0.8 } : {}}
            transition={{ duration: 0.3, delay: point.delay + 0.5 }}
          />
        ))}

        {/* Organic growth visualization (connected growth curve) */}
        <motion.path
          d={`M ${organicPoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
          stroke={organicColor}
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
        />

        {/* Organic area fill */}
        <motion.path
          d={`M 350,${height - 50} L ${organicPoints.map(p => `${p.x},${p.y}`).join(' L ')} L ${width - 50},${height - 50} Z`}
          fill={`url(#organicGradient)`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="organicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={organicColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={organicColor} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Value indicators */}
        <motion.text
          x={150}
          y={height - 140}
          textAnchor="middle"
          fill={paidColor}
          fontSize="24"
          fontWeight="bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {paidValue}
        </motion.text>

        <motion.text
          x={450}
          y={50}
          textAnchor="middle"
          fill={organicColor}
          fontSize="32"
          fontWeight="bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {organicValue}
        </motion.text>

        {/* Arrow showing impact */}
        <motion.path
          d={`M 250 ${height/2} Q 350 ${height/2 - 40} 420 60`}
          stroke="#FBBF24"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 2.8 }}
        />
        
        <motion.polygon
          points="415,55 425,65 435,55 425,45"
          fill="#FBBF24"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 4 }}
        />
      </svg>

      {/* Results summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="text-gray-400 text-sm">Publicité Payante</div>
          <div className="text-red-400 text-xl font-bold">{paidValue} conversions</div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="text-yellow-400 text-3xl font-light">{calculatedMultiplier}x</div>
          <div className="text-gray-400 text-sm">Plus Efficace</div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <div className="text-gray-400 text-sm">Stratégie Organique</div>
          <div className="text-yellow-400 text-xl font-bold">{organicValue} conversions</div>
        </motion.div>
      </div>

      <motion.div
        className="text-center pt-4 border-t border-gray-700 mt-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <div className="text-gray-400 text-sm">
          Culture Peinture - 6 mois d'analyse GA4
        </div>
      </motion.div>
    </div>
  )
}