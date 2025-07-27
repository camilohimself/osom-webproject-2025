'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface DataPoint {
  month: string
  osomValue: number
  industryValue: number
  annotation?: string
}

interface DataLineChartProps {
  title?: string
  subtitle?: string
  data: DataPoint[]
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  className?: string
  animate?: boolean
}

export default function DataLineChart({
  title = "ROI Mesurable",
  subtitle = "Data science vs approximations",
  data,
  primaryColor = "#06B6D4",
  secondaryColor = "#6B7280",
  backgroundColor = "#0F0F0F",
  className = "",
  animate = true
}: DataLineChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(animate ? 0 : 1)
  const [hoveredPoint, setHoveredPoint] = useState<{x: number, y: number, data: DataPoint, type: 'osom' | 'industry'} | null>(null)

  const width = 800
  const height = 400
  const margin = { top: 40, right: 60, bottom: 60, left: 60 }
  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  // Find min/max values for scaling
  const allValues = data.flatMap(d => [d.osomValue, d.industryValue])
  const minValue = Math.min(...allValues) * 0.9
  const maxValue = Math.max(...allValues) * 1.1

  // Scale functions
  const xScale = (index: number) => (index / (data.length - 1)) * chartWidth
  const yScale = (value: number) => chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight

  // Generate SVG path
  const generatePath = (valueKey: 'osomValue' | 'industryValue', progress: number) => {
    const pathData = data.slice(0, Math.ceil(data.length * progress))
    if (pathData.length === 0) return ""
    
    let path = `M ${xScale(0)} ${yScale(pathData[0][valueKey])}`
    
    for (let i = 1; i < pathData.length; i++) {
      const x = xScale(i)
      const y = yScale(pathData[i][valueKey])
      
      // Use smooth curves for better visual appeal
      if (i === pathData.length - 1 && progress < 1) {
        // Animate the last segment based on progress
        const prevX = xScale(i - 1)
        const prevY = yScale(pathData[i - 1][valueKey])
        const segmentProgress = (data.length * progress) - (i - 1)
        const animatedX = prevX + (x - prevX) * segmentProgress
        const animatedY = prevY + (y - prevY) * segmentProgress
        path += ` L ${animatedX} ${animatedY}`
      } else {
        path += ` L ${x} ${y}`
      }
    }
    
    return path
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          if (animate) {
            const startTime = Date.now()
            const duration = 3000 // 3 seconds
            
            const animateChart = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function
              const easedProgress = 1 - Math.pow(1 - progress, 2)
              setAnimationProgress(easedProgress)
              
              if (progress < 1) {
                requestAnimationFrame(animateChart)
              }
            }
            
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
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wide">DATA ANALYSIS</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {title}
          </h3>
          <p className="text-gray-400 text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
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
              
              {/* Gradients */}
              <linearGradient id="osomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={primaryColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor={primaryColor} stopOpacity="0.05" />
              </linearGradient>
              
              <linearGradient id="industryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.2" />
                <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.02" />
              </linearGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Axes */}
            <g transform={`translate(${margin.left}, ${margin.top})`}>
              {/* Y-axis */}
              <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#374151" strokeWidth="2"/>
              
              {/* X-axis */}
              <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#374151" strokeWidth="2"/>
              
              {/* Y-axis labels */}
              {[0, 25, 50, 75, 100].map((value) => {
                const y = chartHeight - ((value / 100) * chartHeight)
                return (
                  <g key={value}>
                    <line x1="-5" y1={y} x2="5" y2={y} stroke="#6B7280" strokeWidth="1"/>
                    <text x="-10" y={y + 4} fill="#9CA3AF" fontSize="12" textAnchor="end" fontFamily="monospace">
                      {value}%
                    </text>
                  </g>
                )
              })}
              
              {/* X-axis labels */}
              {data.map((point, index) => {
                const x = xScale(index)
                return (
                  <g key={point.month}>
                    <line x1={x} y1={chartHeight - 5} x2={x} y2={chartHeight + 5} stroke="#6B7280" strokeWidth="1"/>
                    <text x={x} y={chartHeight + 20} fill="#9CA3AF" fontSize="12" textAnchor="middle" fontFamily="sans-serif">
                      {point.month}
                    </text>
                  </g>
                )
              })}
              
              {/* Industry line (background) */}
              <motion.path
                d={generatePath('industryValue', animationProgress)}
                fill="none"
                stroke={secondaryColor}
                strokeWidth="3"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible ? 1 : 0 }}
                transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              />
              
              {/* OSOM line (foreground) */}
              <motion.path
                d={generatePath('osomValue', animationProgress)}
                fill="none"
                stroke={primaryColor}
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible ? 1 : 0 }}
                transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              />
              
              {/* Glow effect for OSOM line */}
              <motion.path
                d={generatePath('osomValue', animationProgress)}
                fill="none"
                stroke={primaryColor}
                strokeWidth="8"
                opacity="0.3"
                filter="blur(4px)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isVisible ? 1 : 0 }}
                transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              />
              
              {/* Data points */}
              {data.map((point, index) => {
                const x = xScale(index)
                const osomY = yScale(point.osomValue)
                const industryY = yScale(point.industryValue)
                const shouldShow = animationProgress > (index / data.length)
                
                return (
                  <g key={index}>
                    {/* Industry point */}
                    <motion.circle
                      cx={x}
                      cy={industryY}
                      r="4"
                      fill={secondaryColor}
                      opacity={shouldShow ? 0.8 : 0}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint({x: x + margin.left, y: industryY + margin.top, data: point, type: 'industry'})}
                      onMouseLeave={() => setHoveredPoint(null)}
                      whileHover={{ scale: 1.3 }}
                    />
                    
                    {/* OSOM point */}
                    <motion.circle
                      cx={x}
                      cy={osomY}
                      r="5"
                      fill={primaryColor}
                      opacity={shouldShow ? 1 : 0}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint({x: x + margin.left, y: osomY + margin.top, data: point, type: 'osom'})}
                      onMouseLeave={() => setHoveredPoint(null)}
                      whileHover={{ scale: 1.4 }}
                    />
                    
                    {/* Annotation markers */}
                    {point.annotation && shouldShow && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + index * 0.2 }}
                      >
                        <circle cx={x} cy={osomY - 20} r="8" fill={primaryColor} opacity="0.2"/>
                        <text x={x} y={osomY - 16} fill={primaryColor} fontSize="10" textAnchor="middle" fontWeight="bold">!</text>
                      </motion.g>
                    )}
                  </g>
                )
              })}
            </g>
            
            {/* Tooltip */}
            {hoveredPoint && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={hoveredPoint.x - 60}
                  y={hoveredPoint.y - 45}
                  width="120"
                  height="35"
                  rx="5"
                  fill="rgba(0, 0, 0, 0.9)"
                  stroke={hoveredPoint.type === 'osom' ? primaryColor : secondaryColor}
                  strokeWidth="1"
                />
                <text
                  x={hoveredPoint.x}
                  y={hoveredPoint.y - 30}
                  fill={hoveredPoint.type === 'osom' ? primaryColor : secondaryColor}
                  fontSize="11"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {hoveredPoint.data.month}
                </text>
                <text
                  x={hoveredPoint.x}
                  y={hoveredPoint.y - 18}
                  fill="white"
                  fontSize="12"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {hoveredPoint.type === 'osom' ? hoveredPoint.data.osomValue : hoveredPoint.data.industryValue}% ROI
                </text>
              </motion.g>
            )}
          </svg>
        </div>

        {/* Legend */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: primaryColor }}></div>
            <div>
              <div className="text-white font-semibold">OSOM Data Science</div>
              <div className="text-gray-400 text-sm">ROI mesurable et traçable</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: secondaryColor }}></div>
            <div>
              <div className="text-white font-semibold">Approximations industrie</div>
              <div className="text-gray-400 text-sm">Estimations sans données</div>
            </div>
          </div>
        </motion.div>

        {/* Performance indicator */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 3 }}
        >
          <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30 inline-block">
            <div className="text-cyan-400 font-bold text-sm tracking-wider mb-2">
              DATA SCIENCE SUPÉRIEURE
            </div>
            <div className="text-white text-3xl font-bold mb-2">
              +54%
            </div>
            <div className="text-gray-300 text-sm">
              ROI vs approximations concurrence
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}