'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ROIVisualizationProps {
  multiplier: number
  beforeValue: number
  afterValue: number
  label: string
  color: string
  description?: string
}

export default function ROIVisualization({ 
  multiplier, 
  beforeValue, 
  afterValue, 
  label, 
  color,
  description 
}: ROIVisualizationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMultiplier, setCurrentMultiplier] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 2500, 1)
      
      const easeOutBack = 1 + 2.7 * Math.pow(progress - 1, 3) + 1.7 * Math.pow(progress - 1, 2)
      setCurrentMultiplier(1 + (multiplier - 1) * easeOutBack)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, multiplier])

  const barHeight = Math.min(currentMultiplier * 4, 100)

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-[#0D1117] border border-[#21262D] overflow-hidden relative"
    >
      {/* Background effect */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
            `radial-gradient(circle at 70% 70%, ${color}, transparent)`,
            `radial-gradient(circle at 30% 30%, ${color}, transparent)`
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div 
            className="text-3xl font-bold mb-2"
            style={{ color }}
            animate={{ 
              scale: [1, 1.1, 1],
              textShadow: [`0 0 10px ${color}40`, `0 0 20px ${color}60`, `0 0 10px ${color}40`]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {Math.round(currentMultiplier)}x
          </motion.div>
          <div className="text-white font-medium">{label}</div>
          {description && (
            <div className="text-gray-400 text-sm mt-1">{description}</div>
          )}
        </div>

        {/* Visualization */}
        <div className="flex items-end justify-center space-x-8 mb-6 h-32">
          {/* Before bar */}
          <div className="text-center">
            <motion.div
              className="w-12 bg-gray-600 rounded-t-lg mb-2"
              initial={{ height: 0 }}
              animate={{ height: isVisible ? 40 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <div className="text-sm text-gray-400">Avant</div>
            <div className="text-white font-medium">{beforeValue.toLocaleString()}</div>
          </div>

          {/* Arrow */}
          <motion.div 
            className="self-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <svg width="40" height="20" viewBox="0 0 40 20" fill={color}>
              <path d="M0 9h32l-8-8v5h8l-8 8v-5z"/>
            </svg>
          </motion.div>

          {/* After bar */}
          <div className="text-center">
            <motion.div
              className="w-12 rounded-t-lg mb-2 relative overflow-hidden"
              style={{ backgroundColor: color }}
              initial={{ height: 0 }}
              animate={{ height: isVisible ? barHeight : 0 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: [-20, 60] }}
                transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
              />
            </motion.div>
            <div className="text-sm text-gray-400">Après</div>
            <div className="text-white font-medium">{afterValue.toLocaleString()}</div>
          </div>
        </div>

        {/* ROI Details */}
        <motion.div 
          className="text-center p-4 bg-[#21262D] rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <div className="text-sm text-gray-400 mb-1">ROI généré</div>
          <div className="text-2xl font-bold" style={{ color }}>
            +{((afterValue - beforeValue) / beforeValue * 100).toFixed(0)}%
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}