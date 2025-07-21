'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface MetricsPulseProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  color: string
  label: string
  description?: string
}

export default function MetricsPulse({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  color,
  label,
  description
}: MetricsPulseProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(value * easeOutCubic))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-6 rounded-2xl bg-[#0D1117] border border-[#21262D] overflow-hidden"
    >
      {/* Background Pulse Animation */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-2xl"
        style={{ backgroundColor: color }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div 
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {prefix}{displayValue.toLocaleString()}{suffix}
        </motion.div>
        
        <div className="text-white font-medium mb-1">
          {label}
        </div>
        
        {description && (
          <div className="text-gray-400 text-sm">
            {description}
          </div>
        )}
      </div>

      {/* Corner Accent */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 opacity-20"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  )
}