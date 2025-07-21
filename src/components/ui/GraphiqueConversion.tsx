'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GraphiqueConversionProps {
  title?: string
  subtitle?: string
  traditionalRate?: number
  osomRate?: number
  traditionalColor?: string
  osomColor?: string
  width?: number
  height?: number
  className?: string
}

export default function GraphiqueConversion({
  title = "Taux de Conversion",
  subtitle = "Comparaison performance sites OSOM vs traditionnels",
  traditionalRate = 2.5,
  osomRate = 11.3,
  traditionalColor = "#EF4444",
  osomColor = "#EAB308",
  width = 600,
  height = 200,
  className = ""
}: GraphiqueConversionProps) {
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

  const maxRate = Math.max(traditionalRate, osomRate)
  const traditionalWidth = (traditionalRate / maxRate) * (width * 0.7)
  const osomWidth = (osomRate / maxRate) * (width * 0.7)

  return (
    <div ref={containerRef} className={`relative p-6 ${className}`} style={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
          <span className="text-yellow-400 text-sm font-medium tracking-wide">CONVERSION ANALYSIS</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
          {title}
        </h3>
        <p className="text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
          {subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {/* Traditional Sites Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">Sites traditionnels</span>
            <span className="text-red-400 font-bold">{traditionalRate}%</span>
          </div>
          <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: traditionalColor }}
              initial={{ width: 0 }}
              animate={isVisible ? { width: traditionalWidth } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* OSOM Sites Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">Sites OSOM</span>
            <span className="text-yellow-400 font-bold">{osomRate}%</span>
          </div>
          <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: osomColor }}
              initial={{ width: 0 }}
              animate={isVisible ? { width: osomWidth } : {}}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute top-0 h-full rounded-full opacity-50 blur-sm"
              style={{ backgroundColor: osomColor }}
              initial={{ width: 0 }}
              animate={isVisible ? { width: osomWidth } : {}}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Performance Indicator */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <div className="text-yellow-400 text-2xl font-light">
          {Math.round(osomRate / traditionalRate)}x plus performant
        </div>
        <div className="text-gray-400 text-sm">
          Culture Peinture - Données GA4 vérifiées
        </div>
      </motion.div>
    </div>
  )
}