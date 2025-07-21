'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ProgressMeterProps {
  percentage: number
  label: string
  color: string
  comparison?: {
    label: string
    percentage: number
  }
  description?: string
}

export default function ProgressMeter({ 
  percentage, 
  label, 
  color, 
  comparison,
  description 
}: ProgressMeterProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = isVisible 
    ? circumference - (percentage / 100) * circumference 
    : circumference

  const comparisonOffset = comparison && isVisible
    ? circumference - (comparison.percentage / 100) * circumference
    : circumference

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-[#0D1117] border border-[#21262D] text-center"
    >
      <div className="relative inline-block">
        <svg width="140" height="140" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="#21262D"
            strokeWidth="8"
          />
          
          {/* Comparison circle (if provided) */}
          {comparison && (
            <motion.circle
              cx="70"
              cy="70"
              r={radius}
              fill="transparent"
              stroke="#4B5563"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: comparisonOffset }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          )}
          
          {/* Main progress circle */}
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          />
          
          {/* Glow effect */}
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            opacity="0.5"
            filter="blur(4px)"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            className="text-2xl font-bold"
            style={{ color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            {percentage}%
          </motion.div>
          {comparison && (
            <div className="text-xs text-gray-500 mt-1">
              vs {comparison.percentage}%
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="text-white font-medium mb-1">{label}</div>
        {comparison && (
          <div className="text-sm text-gray-400 mb-2">
            vs {comparison.label}
          </div>
        )}
        {description && (
          <div className="text-sm text-gray-500">{description}</div>
        )}
      </div>
    </motion.div>
  )
}