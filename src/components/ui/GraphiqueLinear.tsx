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
  const [hoveredPoint, setHoveredPoint] = useState<{x: number, y: number, value: number, month: string} | null>(null)

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
            {/* Grid lines and Axes */}
            <defs>
              <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 40" fill="none" stroke="#1F2937" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Y-axis */}
            <line x1="60" y1="20" x2="60" y2={height - 40} stroke="#374151" strokeWidth="2"/>
            
            {/* X-axis */}
            <line x1="60" y1={height - 40} x2={width - 40} y2={height - 40} stroke="#374151" strokeWidth="2"/>
            
            {/* Y-axis labels */}
            {[0, 100, 200, 300, 400, 500, 600, 688].map((value, index) => {
              const y = height - 40 - ((value / 688) * (height - 60))
              return (
                <g key={value}>
                  <line x1="55" y1={y} x2="65" y2={y} stroke="#6B7280" strokeWidth="1"/>
                  <text x="45" y={y + 4} fill="#9CA3AF" fontSize="12" textAnchor="end" fontFamily="monospace">
                    {value}
                  </text>
                </g>
              )
            })}
            
            {/* X-axis labels (mois) */}
            {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'].map((month, index) => {
              const x = 60 + ((index + 1) / 6) * (width - 100)
              return (
                <g key={month}>
                  <line x1={x} y1={height - 45} x2={x} y2={height - 35} stroke="#6B7280" strokeWidth="1"/>
                  <text x={x} y={height - 20} fill="#9CA3AF" fontSize="12" textAnchor="middle" fontFamily="sans-serif">
                    {month}
                  </text>
                </g>
              )
            })}
            
            {/* Axis labels */}
            <text x="25" y={height / 2} fill="#9CA3AF" fontSize="14" textAnchor="middle" transform={`rotate(-90, 25, ${height / 2})`} fontFamily="sans-serif">
              Conversions
            </text>
            <text x={width / 2} y={height - 5} fill="#9CA3AF" fontSize="14" textAnchor="middle" fontFamily="sans-serif">
              Période (2025)
            </text>

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
            
            {/* Interactive data points */}
            {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'].map((month, index) => {
              const monthData = [49, 87, 156, 298, 445, 688][index] // Progression réelle OSOM
              const competitorData = [15, 22, 28, 35, 42, 49][index] // Progression concurrence
              const x = 60 + ((index + 1) / 6) * (width - 100)
              const yOsom = height - 40 - ((monthData / 688) * (height - 60))
              const yCompetitor = height - 40 - ((competitorData / 688) * (height - 60))
              
              return (
                <g key={month}>
                  {/* Point concurrence */}
                  <motion.circle
                    cx={x}
                    cy={yCompetitor}
                    r="4"
                    fill={secondaryMetric.color}
                    className="cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
                    whileHover={{ scale: 1.5, r: 6 }}
                    onHoverStart={() => setHoveredPoint({x, y: yCompetitor, value: competitorData, month: `${month} - Concurrence`})}
                    onHoverEnd={() => setHoveredPoint(null)}
                  />
                  
                  {/* Point OSOM */}
                  <motion.circle
                    cx={x}
                    cy={yOsom}
                    r="5"
                    fill={primaryMetric.color}
                    className="cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
                    whileHover={{ scale: 1.8, r: 7 }}
                    onHoverStart={() => setHoveredPoint({x, y: yOsom, value: monthData, month: `${month} - OSOM`})}
                    onHoverEnd={() => setHoveredPoint(null)}
                  />
                </g>
              )
            })}
            
            {/* Tooltip interactif */}
            {hoveredPoint && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={hoveredPoint.x - 40}
                  y={hoveredPoint.y - 35}
                  width="80"
                  height="30"
                  rx="5"
                  fill="rgba(0, 0, 0, 0.9)"
                  stroke="#FFDD00"
                  strokeWidth="1"
                />
                <text
                  x={hoveredPoint.x}
                  y={hoveredPoint.y - 25}
                  fill="#FFDD00"
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {hoveredPoint.month}
                </text>
                <text
                  x={hoveredPoint.x}
                  y={hoveredPoint.y - 15}
                  fill="white"
                  fontSize="12"
                  textAnchor="middle"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {hoveredPoint.value} conversions
                </text>
              </motion.g>
            )}
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
              <div className="text-gray-400 text-sm">Impact Supérieur</div>
              <div className="text-yellow-400 text-xl font-semibold">14x plus efficace</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}