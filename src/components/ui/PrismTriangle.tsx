'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface PrismTriangleProps {
  className?: string
}

const PrismTriangle: React.FC<PrismTriangleProps> = ({ className = '' }) => {
  const [hoveredForce, setHoveredForce] = useState<number | null>(null)
  const [triangleHovered, setTriangleHovered] = useState(false)
  const [sequentialIndex, setSequentialIndex] = useState(0)

  const forces = [
    {
      id: 1,
      name: 'MARKETING + IA',
      shortName: 'MARKETING + IA',
      badge: 'NOTRE DIFFÉRENCE',
      color: 'purple',
      colorClass: 'text-purple-400',
      bgClass: 'bg-purple-400',
      borderClass: 'border-purple-400/50',
      shadowClass: 'shadow-purple-400/30',
      gradient: 'from-purple-400 to-violet-500',
      metrics: '688 leads qualifiés vs 49 concurrence',
      impact: '14x plus efficace que publicité',
      description: 'Agents IA marketing personnalisés. Prédiction ROI avant investissement.',
      details: 'Vos concurrents font du marketing à l\'instinct, nous utilisons l\'IA pour transformer votre marketing en machine à prospects.',
      position: { x: 50, y: 20 }, // Top center - Position prioritaire
      angle: 0 // Upward
    },
    {
      id: 2,
      name: 'DATA ANALYSIS',
      shortName: 'DATA',
      color: 'cyan',
      colorClass: 'text-cyan-400',
      bgClass: 'bg-cyan-400',
      borderClass: 'border-cyan-400/50',
      shadowClass: 'shadow-cyan-400/30',
      gradient: 'from-cyan-400 to-blue-500',
      metrics: '68.6% ROI mesurable vs 44.6% approximations',
      impact: '54% plus performant',
      description: 'Audit comportemental avancé. Attribution multi-touch précise.',
      details: 'Notre data science révèle les leviers cachés de votre croissance pendant que vos concurrents naviguent à vue.',
      position: { x: 25, y: 75 }, // Bottom left
      angle: -120 // Down-left
    },
    {
      id: 3,
      name: 'TECHNOLOGIE',
      shortName: 'TECH',
      color: 'yellow',
      colorClass: 'text-yellow-400',
      bgClass: 'bg-yellow-400',
      borderClass: 'border-yellow-400/50',
      shadowClass: 'shadow-yellow-400/30',
      gradient: 'from-yellow-400 to-orange-500',
      metrics: 'Performance < 2s vs 5-8s WordPress',
      impact: '10 ans d\'avance technologique',
      description: 'Architecture Next.js + IA natives. Performance garantie mobile-first.',
      details: 'Stack qui distance définitivement vos concurrents pendant qu\'ils utilisent WordPress obsolète.',
      position: { x: 75, y: 75 }, // Bottom right
      angle: 120 // Down-right
    }
  ]

  // Sequential pulsing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSequentialIndex((prev) => (prev + 1) % forces.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      {/* Container Responsive */}
      <div className="relative min-h-[500px] lg:min-h-[600px]">
        
        {/* Version Desktop - Triangle */}
        <div className="hidden md:block">
          {/* Triangle Central Parfait */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              onHoverStart={() => setTriangleHovered(true)}
              onHoverEnd={() => setTriangleHovered(false)}
            >
              {/* Triangle Uniforme Sans Cassure */}
              <svg 
                width="280" 
                height="240" 
                viewBox="0 0 280 240" 
                className="relative z-10"
              >
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(75, 85, 99, 0.9)" />
                    <stop offset="50%" stopColor="rgba(0, 0, 0, 0.8)" />
                    <stop offset="100%" stopColor="rgba(75, 85, 99, 0.9)" />
                  </linearGradient>
                  <filter id="glowEffect">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Triangle Principal */}
                <motion.path
                  d="M140 20 L40 200 L240 200 Z"
                  fill="url(#triangleGradient)"
                  stroke="rgba(255, 221, 0, 0.4)"
                  strokeWidth="2"
                  filter="url(#glowEffect)"
                  animate={{
                    stroke: triangleHovered ? "rgba(255, 221, 0, 0.7)" : "rgba(255, 221, 0, 0.4)",
                    filter: triangleHovered ? "url(#glowEffect) drop-shadow(0 20px 40px rgba(255, 221, 0, 0.3))" : "url(#glowEffect)"
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Lumière Centrale */}
                <motion.line
                  x1="140" y1="110" x2="140" y2="140"
                  stroke="url(#lightGradient)"
                  strokeWidth="4"
                  initial={{ strokeWidth: 0, opacity: 0 }}
                  animate={{ 
                    strokeWidth: triangleHovered ? 6 : 4,
                    opacity: triangleHovered ? 1 : 0.8
                  }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
                
                <defs>
                  <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Guide d'interaction */}
              <AnimatePresence>
                {triangleHovered && !hoveredForce && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-black/95 backdrop-blur-md border border-yellow-400/40 rounded-lg px-4 py-2 text-center">
                      <div className="text-yellow-400 font-semibold text-sm tracking-wide">
                        EXPLORER LES 3 FORCES
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Version Mobile - Stack Vertical */}
        <div className="block md:hidden space-y-8 py-8">
          {forces.map((force, index) => (
            <motion.div
              key={force.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${force.bgClass} border-2 border-white/30 shadow-lg flex items-center justify-center mb-4`}>
                  <span className="text-black font-bold text-xl">{force.id}</span>
                </div>
                <div className={`${force.colorClass} font-semibold text-lg mb-2`}>
                  {force.shortName}
                </div>
                {force.badge && (
                  <div className="bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30 mb-2">
                    <span className="text-purple-400 text-xs font-bold">{force.badge}</span>
                  </div>
                )}
                <div className="text-gray-300 text-sm text-center max-w-xs">
                  {force.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Points de Force Desktop - Positionnés sur les Pointes */}
        <div className="hidden md:block">
          {forces.map((force, index) => (
            <motion.div
              key={force.id}
              className="absolute cursor-pointer z-20"
              style={{
                left: `${force.position.x}%`,
                top: `${force.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              transition={{ 
                delay: 1.4 + index * 0.2, 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              onHoverStart={() => setHoveredForce(force.id)}
              onHoverEnd={() => setHoveredForce(null)}
            >
              {/* Point Principal Centré sur Pointe */}
              <motion.div
                className={`relative w-14 h-14 rounded-full ${force.bgClass} border-3 border-white/40 shadow-lg flex items-center justify-center`}
                animate={{ 
                  scale: hoveredForce === force.id ? 1.4 : (sequentialIndex === index ? 1.2 : 1),
                  boxShadow: hoveredForce === force.id 
                    ? `0 0 40px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15'}60`
                    : sequentialIndex === index
                    ? `0 0 25px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15'}40`
                    : `0 0 15px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15'}30`
                }}
                transition={{ duration: 0.3, type: "spring" }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.3 }}
              >
                {/* Numéro de Force */}
                <motion.span 
                  className="text-black font-bold text-xl z-10"
                  animate={{
                    scale: hoveredForce === force.id ? 1.1 : 1
                  }}
                >
                  {force.id}
                </motion.span>

                {/* Badge "NOTRE DIFFÉRENCE" pour DEV+IA */}
                {force.badge && (
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-500/90 px-2 py-1 rounded-full border border-purple-400/50"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ 
                      opacity: sequentialIndex === index || hoveredForce === force.id ? 1 : 0.8,
                      scale: hoveredForce === force.id ? 1.1 : 1,
                      y: 0
                    }}
                    transition={{ delay: 2, duration: 0.4 }}
                  >
                    <span className="text-white text-xs font-bold tracking-wide">
                      {force.badge}
                    </span>
                  </motion.div>
                )}

                {/* Pulsation Séquentielle */}
                <motion.div
                  className={`absolute inset-0 rounded-full ${force.bgClass} opacity-20`}
                  animate={{
                    scale: sequentialIndex === index ? [1, 2.2, 1] : 1,
                    opacity: sequentialIndex === index ? [0.2, 0.05, 0.2] : 0.2
                  }}
                  transition={{
                    duration: 1.8,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Label de Force Optimisé */}
              <motion.div
                className={`absolute ${force.position.y < 50 ? 'top-full mt-4' : 'bottom-full mb-4'} left-1/2 transform -translate-x-1/2 text-center min-w-max`}
                initial={{ opacity: 0, y: force.position.y < 50 ? -10 : 10 }}
                animate={{ 
                  opacity: hoveredForce === force.id ? 1 : 0.8,
                  y: 0,
                  scale: hoveredForce === force.id ? 1.1 : 1
                }}
                transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
              >
                <div className={`${force.colorClass} font-bold text-sm tracking-wider mb-1`}>
                  {force.shortName}
                </div>
                {hoveredForce === force.id && (
                  <motion.div
                    className="text-gray-300 text-xs max-w-32"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {force.impact}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tooltip Premium Desktop */}
      <AnimatePresence>
        {hoveredForce && (
          <motion.div
            className="absolute pointer-events-none z-50 hidden md:block"
            style={{
              left: `${forces.find(f => f.id === hoveredForce)?.position.x}%`,
              top: `${forces.find(f => f.id === hoveredForce)?.position.y}%`,
              transform: forces.find(f => f.id === hoveredForce)?.position.y! < 50 
                ? 'translate(-50%, -140%)' 
                : 'translate(-50%, 40%)'
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.85, 
              y: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 15 : -15
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.85, 
              y: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 15 : -15
            }}
            transition={{ 
              duration: 0.4,
              ease: "backOut"
            }}
          >
            {(() => {
              const force = forces.find(f => f.id === hoveredForce)
              if (!force) return null
              
              return (
                <div className={`relative bg-black/97 backdrop-blur-xl border-2 ${force.borderClass} rounded-xl p-6 min-w-[320px] max-w-[380px] shadow-2xl`}>
                  {/* Header avec badge différenciation */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${force.bgClass} mr-3 animate-pulse`} />
                      <div className={`${force.colorClass} font-bold text-sm tracking-wider`}>
                        FORCE {force.id}
                      </div>
                    </div>
                    {force.badge && (
                      <div className="bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30">
                        <span className="text-purple-400 text-xs font-bold">{force.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Nom complet */}
                  <h3 className="text-white font-bold text-lg leading-tight mb-4">
                    {force.name}
                  </h3>

                  {/* Métriques avec micro-animation */}
                  <motion.div 
                    className={`bg-gradient-to-r from-${force.color}-400/15 to-transparent rounded-lg p-4 mb-4 border-l-4 ${force.borderClass}`}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className={`${force.colorClass} font-bold text-base mb-2`}>
                      {force.metrics}
                    </div>
                    <div className={`text-${force.color}-300 font-semibold text-sm mb-3`}>
                      {force.impact}
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      {force.description}
                    </div>
                  </motion.div>

                  {/* Details expandés */}
                  <motion.div 
                    className="text-gray-400 text-xs leading-relaxed border-t border-gray-700 pt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {force.details}
                  </motion.div>

                  {/* Arrow pointer avec couleur dynamique */}
                  <div 
                    className={`absolute w-0 h-0 border-l-8 border-r-8 border-transparent`}
                    style={{
                      [forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 'top' : 'bottom']: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderTopWidth: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? '10px' : '0',
                      borderBottomWidth: forces.find(f => f.id === hoveredForce)?.position.y! >= 50 ? '10px' : '0',
                      borderTopColor: forces.find(f => f.id === hoveredForce)?.position.y! < 50 
                        ? (force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15') 
                        : 'transparent',
                      borderBottomColor: forces.find(f => f.id === hoveredForce)?.position.y! >= 50 
                        ? (force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15')
                        : 'transparent'
                    }}
                  />
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Contextuel sous le bloc */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <motion.button
          className="bg-gradient-to-r from-purple-600 to-yellow-500 text-black font-bold px-8 py-3 rounded-full hover:from-purple-500 hover:to-yellow-400 transition-all duration-300 transform"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          DÉCOUVRIR NOTRE APPROCHE DIFFÉRENCIANTE
        </motion.button>
        <div className="text-gray-400 text-xs mt-2">
          Technologies 2025 • Agents IA • Performance mesurable
        </div>
      </motion.div>

      {/* Particules d'ambiance optimisées */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/20 rounded-full pointer-events-none"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-4, 4, -4],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  )
}

export default PrismTriangle