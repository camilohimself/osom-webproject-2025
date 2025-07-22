'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import AnimatedCounter from './AnimatedCounter'

// Tech Stack Icons (using text for now, can be replaced with actual icons later)
const techIcons = [
  { name: 'Next.js', icon: '▲', color: '#000' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
  { name: 'Framer', icon: '🎯', color: '#0055FF' },
  { name: 'GA4', icon: '📊', color: '#4285F4' }
]

// Code snippets that will type out
const codeSnippets = [
  {
    language: 'tsx',
    code: `// OSOM Conversion Optimization
const convertVisitor = () => {
  return performance * 11.3; // %
}`
  },
  {
    language: 'js',
    code: `// ROI Calculator
const roi = 688 / 49; // 14x better
console.log('OSOM Performance:', roi);`
  },
  {
    language: 'css',
    code: `/* Performance First */
.osom-site {
  loading: ultra-fast;
  conversion: 11.3%;
}`
  }
]

interface RevolutionaryDashboardHeroProps {
  title: string
  subtitle: string
  description: string
  metrics: Array<{
    value: string
    label: string
    description: string
    animatedValue?: number
    suffix?: string
    prefix?: string
    tooltip?: {
      title: string
      details: string
      highlight: string
    }
  }>
  ctaText: string
  color: string
}

export default function RevolutionaryDashboardHero({
  title,
  subtitle,
  description,
  metrics,
  ctaText,
  color
}: RevolutionaryDashboardHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [typedCode, setTypedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)
  const [magnetPosition, setMagnetPosition] = useState({ x: 0, y: 0 })

  // Typing effect for code
  useEffect(() => {
    if (!isInView) return
    
    let typingInterval: NodeJS.Timeout
    let mainInterval: NodeJS.Timeout
    
    const typeCode = () => {
      setIsTyping(true)
      const currentSnippet = codeSnippets[currentCodeIndex]
      let i = 0
      
      typingInterval = setInterval(() => {
        if (i <= currentSnippet.code.length) {
          setTypedCode(currentSnippet.code.slice(0, i))
          i++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
          setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length)
            setTypedCode('')
          }, 2000)
        }
      }, 50)
    }
    
    // Start typing immediately, then repeat every 6 seconds
    typeCode()
    mainInterval = setInterval(typeCode, 6000)
    
    return () => {
      clearInterval(typingInterval)
      clearInterval(mainInterval)
    }
  }, [isInView]) // REMOVED currentCodeIndex dependency!

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMagnetPosition({ x: x * 0.1, y: y * 0.1 })
  }

  const handleMouseLeave = () => {
    setMagnetPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0
    }
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(ellipse at 20% 50%, ${color}15 0%, transparent 50%), 
             radial-gradient(ellipse at 80% 20%, ${color}10 0%, transparent 50%),
             radial-gradient(ellipse at 40% 80%, ${color}08 0%, transparent 50%)`,
            `radial-gradient(ellipse at 60% 30%, ${color}12 0%, transparent 50%), 
             radial-gradient(ellipse at 30% 70%, ${color}15 0%, transparent 50%),
             radial-gradient(ellipse at 90% 50%, ${color}08 0%, transparent 50%)`,
            `radial-gradient(ellipse at 20% 50%, ${color}15 0%, transparent 50%), 
             radial-gradient(ellipse at 80% 20%, ${color}10 0%, transparent 50%),
             radial-gradient(ellipse at 40% 80%, ${color}08 0%, transparent 50%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${15 + index * 12}%`,
            top: `${20 + (index % 2) * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Title & Description */}
          <div>
            <motion.div variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full border mb-8"
                style={{ borderColor: `${color}40`, backgroundColor: `${color}10` }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: color }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium" style={{ color: color }}>
                  DASHBOARD DÉVELOPPEUR • CLAUDE IA POWERED
                </span>
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              variants={itemVariants}
            >
              {title.split(' ').map((word, index) => {
                const isHighlight = word.toLowerCase().includes('révolution') || 
                                  word.toLowerCase().includes('claude') ||
                                  word.toLowerCase().includes('osom')
                return (
                  <motion.span
                    key={index}
                    className={isHighlight ? 'bg-gradient-to-r bg-clip-text text-transparent' : ''}
                    style={isHighlight ? { 
                      backgroundImage: `linear-gradient(135deg, ${color}, ${color}80)` 
                    } : {}}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                )
              })}
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* Code Terminal */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mb-8 font-mono"
              variants={itemVariants}
              whileHover={{ 
                borderColor: `${color}40`,
                boxShadow: `0 10px 40px ${color}20` 
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">
                  {codeSnippets[currentCodeIndex].language}
                </span>
              </div>
              <div className="text-green-400 text-sm leading-relaxed">
                <span>{typedCode}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-green-400 ml-1"
                />
              </div>
            </motion.div>

            {/* Magnetic CTA Button */}
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <motion.div
                className="relative cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ x: magnetPosition.x, y: magnetPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="relative overflow-hidden px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                    color: color === '#ffd507' ? '#000' : '#fff'
                  }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100"
                    style={{ 
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  
                  <span className="relative z-10 flex items-center">
                    {ctaText}
                    <motion.span
                      className="ml-3 text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Interactive Dashboard */}
          <motion.div
            variants={dashboardVariants}
            className="relative"
          >
            {/* Main Dashboard Container */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white font-semibold">OSOM Performance Monitor</span>
                </div>
                <div className="text-xs text-gray-400">LIVE DATA</div>
              </div>

              {/* Animated Metrics Grid */}
              <div className="grid grid-cols-1 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    onHoverStart={() => setHoveredMetric(metric.label)}
                    onHoverEnd={() => setHoveredMetric(null)}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div 
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500"
                      style={{ 
                        borderColor: hoveredMetric === metric.label ? `${color}60` : 'rgba(255,255,255,0.1)',
                        boxShadow: hoveredMetric === metric.label ? `0 20px 40px ${color}30` : 'none'
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-gray-400 text-sm font-medium">
                          {metric.label}
                        </div>
                        <motion.div
                          className="w-8 h-1 rounded-full"
                          style={{ backgroundColor: color }}
                          animate={{ width: [8, 24, 8] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="text-4xl font-light"
                          style={{ color: color }}
                          animate={{ 
                            scale: hoveredMetric === metric.label ? [1, 1.1, 1] : 1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {metric.animatedValue ? (
                            <>
                              {metric.prefix}
                              <AnimatedCounter
                                from={0}
                                to={metric.animatedValue}
                                duration={2}
                                delay={index * 0.3 + 0.5}
                              />
                              {metric.suffix}
                            </>
                          ) : (
                            metric.value
                          )}
                        </motion.div>
                        
                        {/* Mini Chart Visualization */}
                        <div className="flex-1 h-8 flex items-end space-x-1">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 rounded-t"
                              style={{ backgroundColor: `${color}40` }}
                              animate={{ 
                                height: [
                                  `${20 + Math.random() * 50}%`,
                                  `${30 + Math.random() * 60}%`,
                                  `${20 + Math.random() * 50}%`
                                ]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: i * 0.1 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-gray-300 text-sm mt-3">
                        {metric.description}
                      </div>

                      {/* Interactive Details Tooltip */}
                      {metric.tooltip && hoveredMetric === metric.label && (
                        <motion.div
                          className="absolute -top-20 left-0 right-0 bg-black/95 backdrop-blur-xl rounded-xl p-4 border z-50"
                          style={{ borderColor: `${color}40` }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-xs text-gray-400 mb-1">DÉTAILS TECHNIQUES</div>
                          <div className="text-sm text-white font-semibold mb-1">
                            {metric.tooltip.title}
                          </div>
                          <div className="text-xs text-gray-300 mb-2">
                            {metric.tooltip.details}
                          </div>
                          <div 
                            className="text-xs font-bold"
                            style={{ color: color }}
                          >
                            {metric.tooltip.highlight}
                          </div>
                        </motion.div>
                      )}

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500"
                        style={{ 
                          background: `radial-gradient(circle at center, ${color}20, transparent 70%)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="text-xs text-gray-500 mb-3">TECH STACK</div>
                <div className="flex items-center space-x-4">
                  {techIcons.slice(0, 4).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center space-x-2 text-xs text-gray-400"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Performance Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full px-4 py-2 text-sm font-bold text-white shadow-xl"
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              140x PERFORMANCE
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}