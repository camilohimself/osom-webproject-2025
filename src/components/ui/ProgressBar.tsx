'use client'

import { motion, useMotionValue, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface ProgressBarProps {
  value: number
  maxValue: number
  label: string
  color?: string
  duration?: number
  delay?: number
  className?: string
  showPercentage?: boolean
}

const ProgressBar = ({ 
  value, 
  maxValue, 
  label, 
  color = "#EAB308", 
  duration = 2,
  delay = 0,
  className = "",
  showPercentage = true
}: ProgressBarProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const progress = useMotionValue(0)
  const width = useTransform(progress, [0, maxValue], ["0%", `${(value / maxValue) * 100}%`])
  const displayValue = useTransform(progress, (latest) => Math.round((latest / maxValue) * 100))
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        progress.set(value)
      }, delay * 1000)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, progress, value, delay])

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {/* Label and Value */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{label}</span>
        {showPercentage && (
          <motion.span 
            className="text-white font-bold text-sm"
            style={{ color }}
          >
            <motion.span>{displayValue}</motion.span>%
          </motion.span>
        )}
      </div>
      
      {/* Progress Track */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
        {/* Background glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-20 blur-sm"
          style={{ backgroundColor: color }}
        />
        
        {/* Progress Fill */}
        <motion.div
          className="h-full rounded-full relative"
          style={{ 
            width,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}50`
          }}
          transition={{ duration, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '100%' } : {}}
            transition={{ 
              duration: 1.5, 
              delay: delay + 0.5,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
      
      {/* Pulse indicator */}
      {isInView && (
        <motion.div
          className="w-1 h-1 rounded-full mt-1 ml-auto"
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + duration
          }}
        />
      )}
    </div>
  )
}

export default ProgressBar