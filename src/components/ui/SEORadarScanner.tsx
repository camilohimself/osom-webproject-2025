'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import AnimatedCounter from './AnimatedCounter'

// Keywords détectés par le radar
const detectedKeywords = [
  { text: 'seo valais', position: { x: 70, y: 30 }, volume: 772, competition: 'Medium', status: 'missed' },
  { text: 'référencement sion', position: { x: 45, y: 60 }, volume: 234, competition: 'Low', status: 'opportunity' },
  { text: 'expert seo valais', position: { x: 85, y: 45 }, volume: 156, competition: 'High', status: 'target' },
  { text: 'marketing digital martigny', position: { x: 25, y: 75 }, volume: 89, competition: 'Low', status: 'hidden' },
  { text: 'agence web monthey', position: { x: 90, y: 20 }, volume: 167, competition: 'Medium', status: 'competitor' },
  { text: 'seo local suisse', position: { x: 15, y: 40 }, volume: 445, competition: 'High', status: 'goldmine' }
]

// Données Artisane de Lumière tracking
const positionData = [
  { week: 0, position: 21, label: 'Début' },
  { week: 4, position: 18, label: 'Mois 1' }, 
  { week: 8, position: 12, label: 'Mois 2' },
  { week: 16, position: 8, label: 'Mois 4' },
  { week: 24, position: 3, label: 'Mois 6' }
]

interface SEORadarScannerProps {
  title: string
  subtitle: string
  description: string
  metrics: Array<{
    value: string
    label: string
    description: string
    animatedValue?: number
    suffix?: string
  }>
  ctaText: string
  color: string
}

export default function SEORadarScanner({
  title,
  subtitle,
  description,
  metrics,
  ctaText,
  color
}: SEORadarScannerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  
  const [radarRotation, setRadarRotation] = useState(0)
  const [scannedKeywords, setScannedKeywords] = useState<number[]>([])
  const [currentScan, setCurrentScan] = useState(0)
  const [showCaseStudy, setShowCaseStudy] = useState(false)

  // Animation radar scanning
  useEffect(() => {
    if (!isInView) return
    
    const radarInterval = setInterval(() => {
      setRadarRotation(prev => (prev + 1) % 360)
    }, 50)
    
    // Keyword detection sequence
    const keywordInterval = setInterval(() => {
      setCurrentScan(prev => {
        if (prev < detectedKeywords.length - 1) {
          setScannedKeywords(current => [...current, prev])
          return prev + 1
        } else {
          setShowCaseStudy(true)
          return prev
        }
      })
    }, 1500)
    
    return () => {
      clearInterval(radarInterval)
      clearInterval(keywordInterval)
    }
  }, [isInView])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const getStatusColor = (status: string) => {
    const colors = {
      'missed': '#EF4444',      // Rouge - opportunité ratée
      'opportunity': '#10B981', // Vert - opportunité 
      'target': '#F59E0B',      // Jaune - cible
      'hidden': '#8B5CF6',      // Violet - caché
      'competitor': '#6B7280',  // Gris - concurrent
      'goldmine': '#F59E0B'     // Or - mine d'or
    }
    return colors[status as keyof typeof colors] || '#6B7280'
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-cyan-950/20 via-black to-cyan-900/20">
      {/* Background Grid Radar */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-cyan-400 mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-cyan-400">
                SEO RADAR SCANNER • DÉTECTION EN TEMPS RÉEL
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              {title.split(' ').map((word, index) => {
                const isHighlight = word.toLowerCase().includes('seo') || 
                                  word.toLowerCase().includes('radar') ||
                                  word.toLowerCase().includes('scanner')
                return (
                  <motion.span
                    key={index}
                    className={isHighlight ? 'bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                )
              })}
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {description}
            </p>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {metric.animatedValue ? (
                      <AnimatedCounter
                        from={0}
                        to={metric.animatedValue}
                        duration={2}
                        delay={1 + index * 0.3}
                        suffix={metric.suffix}
                      />
                    ) : (
                      metric.value
                    )}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{metric.label}</div>
                  <div className="text-gray-400 text-xs">{metric.description}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {ctaText} →
            </motion.button>
          </motion.div>

          {/* Right Side - Radar Scanner Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
            }}
            className="relative"
          >
            {/* Main Radar Screen */}
            <div className="relative w-96 h-96 mx-auto bg-gradient-to-br from-gray-900/90 to-black/80 rounded-full border-4 border-cyan-400/30 overflow-hidden">
              
              {/* Radar Circles */}
              {[1, 2, 3, 4].map((circle) => (
                <div
                  key={circle}
                  className="absolute border border-cyan-400/20 rounded-full"
                  style={{
                    width: `${circle * 25}%`,
                    height: `${circle * 25}%`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}

              {/* Radar Sweep */}
              <motion.div
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'left center'
                }}
                animate={{ rotate: radarRotation }}
                transition={{ duration: 0, ease: "linear" }}
              />

              {/* Detected Keywords */}
              {detectedKeywords.map((keyword, index) => (
                scannedKeywords.includes(index) && (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${keyword.position.x}%`,
                      top: `${keyword.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    <motion.div
                      className="relative"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Keyword Dot */}
                      <div
                        className="w-3 h-3 rounded-full shadow-lg"
                        style={{ backgroundColor: getStatusColor(keyword.status) }}
                      />
                      
                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: getStatusColor(keyword.status) }}
                        animate={{ 
                          scale: [1, 2.5, 1], 
                          opacity: [0.6, 0, 0.6] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                )
              ))}

              {/* Center Info */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-cyan-400 text-2xl font-bold mb-1">
                    {scannedKeywords.length}
                  </div>
                  <div className="text-cyan-300 text-xs">
                    KEYWORDS<br/>DÉTECTÉS
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-8 bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20"
            >
              <h3 className="text-cyan-400 font-bold text-sm mb-4">Opportunités détectées</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {detectedKeywords.slice(0, scannedKeywords.length + 1).map((keyword, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getStatusColor(keyword.status) }}
                      />
                      <span className="text-gray-300 font-mono">{keyword.text}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-bold">{keyword.volume}/mois</span>
                      <span className="text-gray-500">{keyword.competition}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Artisane de Lumière Case Study */}
            {showCaseStudy && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 bg-gradient-to-br from-green-500/10 to-green-400/5 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-green-400 font-bold text-sm">CASE STUDY • ARTISANE DE LUMIÈRE</span>
                </div>
                
                <h4 className="text-white font-bold mb-3">Position 21 → page 1 en 6 mois</h4>
                
                {/* Position Tracking Line */}
                <div className="relative h-20 bg-black/30 rounded-xl p-4 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 400 60">
                    {/* Grid Lines */}
                    {[10, 20, 30, 40, 50].map(y => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#374151" strokeWidth="0.5" />
                    ))}
                    
                    {/* Position Line */}
                    <motion.path
                      d="M 0 52 Q 80 48 160 36 T 400 6"
                      stroke="#10B981"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, delay: 1 }}
                    />
                    
                    {/* Position Points */}
                    {positionData.map((point, index) => (
                      <motion.circle
                        key={index}
                        cx={point.week * 16}
                        cy={60 - (point.position * 2.4)}
                        r="4"
                        fill="#10B981"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.3 }}
                      />
                    ))}
                  </svg>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-red-400 text-2xl font-bold">21</div>
                    <div className="text-gray-400 text-xs">Position initiale</div>
                  </div>
                  <div>
                    <div className="text-yellow-400 text-2xl font-bold">68.6%</div>
                    <div className="text-gray-400 text-xs">Engagement SEO</div>
                  </div>
                  <div>
                    <div className="text-green-400 text-2xl font-bold">3</div>
                    <div className="text-gray-400 text-xs">Position finale</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}