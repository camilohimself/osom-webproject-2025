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
      name: 'SEO & MARKETING',
      shortName: 'SEO',
      color: 'cyan',
      colorClass: 'text-cyan-400',
      bgClass: 'bg-cyan-400',
      borderClass: 'border-cyan-400/50',
      shadowClass: 'shadow-cyan-400/30',
      gradient: 'from-cyan-400 to-blue-500',
      metrics: '68.6% engagement vs 44.6% industrie',
      impact: '54% plus performant',
      description: 'Trafic qualifié supérieur mesuré GA4. SEO qui convertit vraiment.',
      details: 'Pendant que vos concurrents achètent du trafic, nous générons 688 conversions organiques.',
      position: { x: 50, y: 15 }, // Top center
      angle: 0 // Upward
    },
    {
      id: 2,
      name: 'DÉVELOPPEMENT WEB & IA',
      shortName: 'DEV + IA',
      color: 'purple',
      colorClass: 'text-purple-400',
      bgClass: 'bg-purple-400',
      borderClass: 'border-purple-400/50',
      shadowClass: 'shadow-purple-400/30',
      gradient: 'from-purple-400 to-violet-500',
      metrics: 'Stack 2025 : Next.js + IA vs WordPress obsolète',
      impact: '10 ans d\'avance technologique',
      description: 'Architecture moderne + Agents IA. Évolution automatique sans refonte.',
      details: 'Technologies 2025 pendant que vos concurrents utilisent WordPress 2015.',
      position: { x: 15, y: 75 }, // Bottom left
      angle: -120 // Down-left
    },
    {
      id: 3,
      name: 'DA, DESIGN UX + UI',
      shortName: 'DESIGN',
      color: 'yellow',
      colorClass: 'text-yellow-400',
      bgClass: 'bg-yellow-400',
      borderClass: 'border-yellow-400/50',
      shadowClass: 'shadow-yellow-400/30',
      gradient: 'from-yellow-400 to-orange-500',
      metrics: '11.3% conversion vs 2.3% industrie',
      impact: '5x plus de conversions',
      description: 'Psychologie comportementale appliquée. Chaque pixel optimisé pour vendre.',
      details: 'Eye-tracking + heatmaps = parcours utilisateur qui convertit à 11.3%.',
      position: { x: 85, y: 75 }, // Bottom right
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
    <div className={`relative w-full max-w-5xl mx-auto h-[500px] ${className}`}>
      {/* Triangle Central - Version Optimisée */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative cursor-pointer group"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onHoverStart={() => setTriangleHovered(true)}
          onHoverEnd={() => setTriangleHovered(false)}
        >
          {/* Triangle Principal Simplifié */}
          <div className="relative w-64 h-56">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: triangleHovered 
                  ? 'drop-shadow(0 20px 50px rgba(255, 221, 0, 0.5))' 
                  : 'drop-shadow(0 15px 35px rgba(255, 221, 0, 0.3))'
              }}
              animate={{ 
                scale: triangleHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Lumière Centrale Améliorée */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-8 bg-white"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: 1,
                opacity: triangleHovered ? 1 : 0.8,
                scaleX: triangleHovered ? 1.5 : 1
              }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,1), transparent)',
                filter: 'blur(0.5px)'
              }}
            />

            {/* Guide d'interaction */}
            <AnimatePresence>
              {triangleHovered && !hoveredForce && (
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/95 backdrop-blur-md border border-yellow-400/40 rounded-lg px-3 py-2 text-center">
                    <div className="text-yellow-400 font-semibold text-xs tracking-wide">
                      EXPLORER LES 3 FORCES
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Points de Force Interactifs */}
      {forces.map((force, index) => (
        <motion.div
          key={force.id}
          className="absolute cursor-pointer"
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
            delay: 1.2 + index * 0.2, 
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
          onHoverStart={() => setHoveredForce(force.id)}
          onHoverEnd={() => setHoveredForce(null)}
        >
          {/* Point Principal */}
          <motion.div
            className={`relative w-12 h-12 rounded-full ${force.bgClass} border-2 border-white/30 shadow-lg ${force.shadowClass} flex items-center justify-center`}
            animate={{ 
              scale: hoveredForce === force.id ? 1.3 : (sequentialIndex === index ? 1.15 : 1),
              boxShadow: hoveredForce === force.id 
                ? `0 0 30px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15'}40`
                : sequentialIndex === index
                ? `0 0 20px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15'}30`
                : `0 0 10px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#FACC15'}20`
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Numéro de Force */}
            <motion.span 
              className="text-black font-bold text-lg"
              animate={{
                scale: hoveredForce === force.id ? 1.1 : 1
              }}
            >
              {force.id}
            </motion.span>

            {/* Pulsation Séquentielle */}
            <motion.div
              className={`absolute inset-0 rounded-full ${force.bgClass} opacity-30`}
              animate={{
                scale: sequentialIndex === index ? [1, 1.8, 1] : 1,
                opacity: sequentialIndex === index ? [0.3, 0.1, 0.3] : 0.3
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Label de Force */}
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center min-w-max"
            initial={{ opacity: 0, y: -5 }}
            animate={{ 
              opacity: hoveredForce === force.id ? 1 : 0.7,
              y: hoveredForce === force.id ? 0 : -5,
              scale: hoveredForce === force.id ? 1.05 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <div className={`${force.colorClass} font-semibold text-sm tracking-wide`}>
              {force.shortName}
            </div>
          </motion.div>

          {/* Connexion vers Triangle */}
          <motion.div
            className={`absolute w-0.5 bg-gradient-to-b from-${force.color}-400/60 to-transparent`}
            style={{
              height: '80px',
              left: '50%',
              top: force.position.y < 50 ? '100%' : '-80px',
              transform: 'translateX(-50%)',
              transformOrigin: force.position.y < 50 ? 'top' : 'bottom'
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: hoveredForce === force.id ? 1 : 0.6,
              opacity: hoveredForce === force.id ? 0.8 : 0.4
            }}
            transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
          />
        </motion.div>
      ))}

      {/* Tooltip Premium */}
      <AnimatePresence>
        {hoveredForce && (
          <motion.div
            className="absolute pointer-events-none z-50"
            style={{
              left: `${forces.find(f => f.id === hoveredForce)?.position.x}%`,
              top: `${forces.find(f => f.id === hoveredForce)?.position.y}%`,
              transform: forces.find(f => f.id === hoveredForce)?.position.y! < 50 
                ? 'translate(-50%, -120%)' 
                : 'translate(-50%, 20%)'
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 20 : -20
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 20 : -20
            }}
            transition={{ 
              duration: 0.3,
              ease: "backOut"
            }}
          >
            {(() => {
              const force = forces.find(f => f.id === hoveredForce)
              if (!force) return null
              
              return (
                <div className={`relative bg-black/96 backdrop-blur-xl border-2 ${force.borderClass} rounded-xl p-5 min-w-[300px] max-w-[350px] shadow-2xl`}>
                  {/* Header avec indicateur coloré */}
                  <div className="flex items-center mb-3">
                    <div className={`w-3 h-3 rounded-full ${force.bgClass} mr-3 animate-pulse`} />
                    <div className={`${force.colorClass} font-bold text-xs tracking-wider`}>
                      FORCE {force.id}
                    </div>
                  </div>

                  {/* Nom complet */}
                  <h3 className="text-white font-bold text-base leading-tight mb-3">
                    {force.name}
                  </h3>

                  {/* Métriques */}
                  <div className={`bg-gradient-to-r from-${force.color}-400/10 to-transparent rounded-lg p-3 mb-3 border-l-3 ${force.borderClass}`}>
                    <div className={`${force.colorClass} font-bold text-sm mb-1`}>
                      {force.metrics}
                    </div>
                    <div className={`text-${force.color}-300 font-medium text-xs mb-2`}>
                      {force.impact}
                    </div>
                    <div className="text-gray-300 text-xs leading-relaxed">
                      {force.description}
                    </div>
                  </div>

                  {/* Arrow pointer */}
                  <div 
                    className={`absolute w-0 h-0 border-l-8 border-r-8 border-transparent ${force.borderClass}`}
                    style={{
                      [forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 'top' : 'bottom']: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderTopWidth: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? '8px' : '0',
                      borderBottomWidth: forces.find(f => f.id === hoveredForce)?.position.y! >= 50 ? '8px' : '0',
                      borderTopColor: forces.find(f => f.id === hoveredForce)?.position.y! < 50 ? 'currentColor' : 'transparent',
                      borderBottomColor: forces.find(f => f.id === hoveredForce)?.position.y! >= 50 ? 'currentColor' : 'transparent'
                    }}
                  />
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particules d'ambiance optimisées */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full pointer-events-none"
          style={{
            left: `${25 + Math.random() * 50}%`,
            top: `${25 + Math.random() * 50}%`,
          }}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  )
}

export default PrismTriangle