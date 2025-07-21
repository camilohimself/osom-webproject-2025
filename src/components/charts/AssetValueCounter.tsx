'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AssetValueCounterProps {
  value: number
  currency?: string
  label: string
  description?: string
  color: string
  duration?: number
  prefix?: string
  suffix?: string
}

export default function AssetValueCounter({ 
  value, 
  currency = '€',
  label,
  description,
  color,
  duration = 3000,
  prefix = '',
  suffix = ''
}: AssetValueCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(value * easeOutCubic))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
      animationFrame = requestAnimationFrame(animate)
    }, 500)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animationFrame)
    }
  }, [value, duration])

  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)}M`
    } else if (val >= 1000) {
      return `${(val / 1000).toFixed(0)}K`
    }
    return val.toLocaleString()
  }

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative p-8 rounded-2xl bg-[#0D1117] border border-[#21262D] overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            `linear-gradient(45deg, transparent, ${color}, transparent)`,
            `linear-gradient(225deg, transparent, ${color}, transparent)`,
            `linear-gradient(45deg, transparent, ${color}, transparent)`
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-30"
          style={{ 
            backgroundColor: color,
            left: `${20 + i * 12}%`,
            bottom: '20%'
          }}
          animate={{
            y: [-10, -50],
            x: [0, Math.random() * 20 - 10],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Main counter */}
        <motion.div 
          className="text-center mb-4"
          animate={{ scale: isVisible ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div 
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ color }}
          >
            {prefix}
            {currency}
            {formatValue(displayValue)}
            {suffix}
          </div>
          
          <motion.div 
            className="text-white font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {label}
          </motion.div>
        </motion.div>

        {description && (
          <motion.div 
            className="text-gray-400 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {description}
          </motion.div>
        )}

        {/* Progress indicator */}
        <motion.div 
          className="mt-6 h-1 bg-[#21262D] rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: isVisible ? '100%' : 0 }}
            transition={{ 
              duration: duration / 1000,
              ease: "easeOut",
              delay: 0.5 
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}