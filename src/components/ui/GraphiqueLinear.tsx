'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface DataPoint {
  x: number
  y: number
}

interface GraphiqueLinearProps {
  title?: string
  subtitle?: string
  primaryMetric?: {
    label: string
    value: string
    color: string
  }
  secondaryMetric?: {
    label: string
    value: string
    color: string
  }
  improvement?: {
    label: string
    value: string
  }
  backgroundColor?: string
  width?: number
  height?: number
  className?: string
  animate?: boolean
}

export default function GraphiqueLinear({
  title = "Performance Metrics",
  subtitle = "Real-time analytics and performance tracking",
  primaryMetric = { label: "Current Performance", value: "68.6%", color: "#06B6D4" },
  secondaryMetric = { label: "Industry Average", value: "44.6%", color: "#6B7280" },
  improvement = { label: "Improvement", value: "+54% better" },
  backgroundColor = "#0F0F0F",
  width = 800,
  height = 300,
  className = "",
  animate = false
}: GraphiqueLinearProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(animate ? 0 : 1)

  // Generate smooth curve data points
  const generateCurveData = (progress: number, baseline: number = 0.3, peak: number = 0.8): DataPoint[] => {
    const points: DataPoint[] = []
    const steps = 50
    
    for (let i = 0; i <= steps * progress; i++) {
      const x = (i / steps) * width
      const normalizedX = i / steps
      
      // Create smooth growth curve with some variation
      let y = baseline + (peak - baseline) * Math.pow(normalizedX, 1.2)
      
      // Add subtle noise for realism
      if (i > 0) {
        y += Math.sin(normalizedX * 8) * 0.02 + Math.sin(normalizedX * 15) * 0.01
      }
      
      points.push({ x, y: height - (y * height) })
    }
    
    return points
  }

  // Create SVG path from data points
  const createPath = (points: DataPoint[]): string => {
    if (points.length === 0) return ""
    
    let path = `M ${points[0].x} ${points[0].y}`
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]
      const next = points[i + 1]
      
      if (i === 1) {
        path += ` L ${curr.x} ${curr.y}`
      } else {
        // Smooth bezier curves
        const cp1x = prev.x + (curr.x - prev.x) * 0.3
        const cp1y = prev.y
        const cp2x = curr.x - (next ? (next.x - curr.x) * 0.3 : 20)
        const cp2y = curr.y
        
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
      }
    }
    
    return path
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          // Start progressive animation if animate prop is true
          if (animate) {
            const startTime = Date.now()
            const duration = 2500 // 2.5 seconds
            
            const animateChart = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function for smooth animation
              const easedProgress = 1 - Math.pow(1 - progress, 3)
              setAnimationProgress(easedProgress)
              
              if (progress < 1) {
                requestAnimationFrame(animateChart)
              }
            }
            
            // Delay start for dramatic effect
            setTimeout(animateChart, 500)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (svgRef.current) {
      observer.observe(svgRef.current)
    }

    return () => observer.disconnect()
  }, [animate])

  return (
    <div className={`relative ${className}`} style={{ backgroundColor }}>
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide">LIVE METRICS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        {/* Chart Container */}
        <div className="relative">
          <svg
            ref={svgRef}
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="overflow-visible"
          >
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 40" fill="none" stroke="#1F2937" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Secondary metric line (baseline) */}
            <motion.path
              d={createPath(generateCurveData(animate ? animationProgress : 1, 0.3, 0.45))}
              fill="none"
              stroke={secondaryMetric.color}
              strokeWidth="3"
              initial={{ pathLength: animate ? 0 : 1, opacity: 0 }}
              animate={isVisible ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: animate ? 2 : 0, delay: animate ? 0.5 : 0, ease: "easeInOut" }}
            />

            {/* Primary metric line (growth) */}
            <motion.path
              d={createPath(generateCurveData(animate ? animationProgress : 1, 0.4, 0.8))}
              fill="none"
              stroke={primaryMetric.color}
              strokeWidth="4"
              initial={{ pathLength: animate ? 0 : 1, opacity: 0 }}
              animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: animate ? 2.5 : 0, delay: animate ? 1 : 0, ease: "easeInOut" }}
            />

            {/* Glow effect for primary line */}
            <motion.path
              d={createPath(generateCurveData(animate ? animationProgress : 1, 0.4, 0.8))}
              fill="none"
              stroke={primaryMetric.color}
              strokeWidth="8"
              opacity="0.3"
              filter="blur(4px)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}}
              transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
            />

            {/* Animated gradient fill under primary curve */}
            <defs>
              <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={primaryMetric.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={primaryMetric.color} stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            <motion.path
              d={`${createPath(generateCurveData(1, 0.4, 0.8))} L ${width} ${height} L 0 ${height} Z`}
              fill="url(#fillGradient)"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2 }}
            />

            {/* Animated dot at end of primary line */}
            <motion.circle
              cx={width * 0.95}
              cy={height - (0.8 * height)}
              r="6"
              fill={primaryMetric.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.5, type: "spring" }}
            />
            
            {/* Pulsing effect for dot */}
            <motion.circle
              cx={width * 0.95}
              cy={height - (0.8 * height)}
              r="12"
              fill={primaryMetric.color}
              opacity="0.3"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] } : {}}
              transition={{ 
                duration: 2,
                delay: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        {/* Metrics Display */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Secondary Metric */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: secondaryMetric.color }}></div>
            <div>
              <div className="text-gray-400 text-sm">{secondaryMetric.label}</div>
              <div className="text-white text-xl font-semibold">{secondaryMetric.value}</div>
            </div>
          </motion.div>

          {/* Primary Metric */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryMetric.color }}></div>
            <div>
              <div className="text-gray-400 text-sm">{primaryMetric.label}</div>
              <div className="text-white text-xl font-semibold">{primaryMetric.value}</div>
            </div>
          </motion.div>

          {/* Improvement */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div>
              <div className="text-gray-400 text-sm">{improvement.label}</div>
              <div className="text-yellow-400 text-xl font-semibold">{improvement.value}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}