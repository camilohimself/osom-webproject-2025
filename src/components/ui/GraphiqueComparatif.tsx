'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ComparisonData {
  label: string
  value: number
  color: string
  description?: string
}

interface GraphiqueComparatifProps {
  title?: string
  subtitle?: string
  data: ComparisonData[]
  showImprovement?: boolean
  width?: number
  height?: number
  className?: string
}

export default function GraphiqueComparatif({
  title = "Comparaison Performance",
  subtitle = "Analyse comparative des résultats",
  data,
  showImprovement = true,
  width = 600,
  height = 300,
  className = ""
}: GraphiqueComparatifProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const maxValue = Math.max(...data.map(item => Math.abs(item.value)), 1) // Minimum 1 pour éviter division par 0
  const improvement = data.length >= 2 ? ((data[0].value - data[1].value) / Math.max(data[1].value, 1) * 100) : 0

  return (
    <div ref={containerRef} className={`relative p-6 ${className}`} style={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
          <span className="text-cyan-400 text-sm font-medium tracking-wide">PERFORMANCE METRICS</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
          {title}
        </h3>
        <p className="text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
          {subtitle}
        </p>
      </div>

      {/* SVG Chart */}
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="mb-4">
        {/* Grid lines */}
        <defs>
          <pattern id="gridComparatif" width="60" height="40" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridComparatif)" />

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = Math.max((Math.abs(item.value) / maxValue) * (height * 0.7), 0)
          const barWidth = 80
          const x = 100 + index * 150
          const y = Math.max(height - barHeight - 40, 0)

          return (
            <g key={index}>
              {/* Bar background */}
              <rect
                x={x}
                y={height - 40}
                width={barWidth}
                height={Math.max(height * 0.7, 0)}
                fill="#1F2937"
                rx="4"
              />
              
              {/* Animated bar */}
              <motion.rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                rx="4"
                initial={{ height: 0, y: height - 40 }}
                animate={isVisible ? { height: barHeight, y: y } : {}}
                transition={{ duration: 1.5, delay: index * 0.3 + 0.5, ease: "easeOut" }}
              />
              
              {/* Glow effect */}
              <motion.rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                rx="4"
                opacity="0.3"
                filter="blur(4px)"
                initial={{ height: 0, y: height - 40 }}
                animate={isVisible ? { height: barHeight, y: y } : {}}
                transition={{ duration: 1.5, delay: index * 0.3 + 0.5, ease: "easeOut" }}
              />

              {/* Value labels */}
              <motion.text
                x={x + barWidth/2}
                y={y - 10}
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 + 1.5 }}
              >
                {typeof item.value === 'number' && item.value > 100 ? item.value.toLocaleString() : `${item.value}%`}
              </motion.text>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          >
            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
            <div>
              <div className="text-white text-sm font-medium">{item.label}</div>
              {item.description && (
                <div className="text-gray-400 text-xs">{item.description}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Improvement indicator */}
      {showImprovement && improvement > 0 && (
        <motion.div
          className="text-center pt-4 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="text-cyan-400 text-2xl font-light">
            +{improvement.toFixed(0)}% plus qualifié
          </div>
          <div className="text-gray-400 text-sm">
            Artisane de Lumière - Analyse GA4
          </div>
        </motion.div>
      )}
    </div>
  )
}