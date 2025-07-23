'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface PrismTriangleProps {
  className?: string
}

const PrismTriangle: React.FC<PrismTriangleProps> = ({ className = '' }) => {
  const [hoveredRay, setHoveredRay] = useState<number | null>(null)
  const [triangleHovered, setTriangleHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const forces = [
    {
      id: 1,
      name: 'DATA ANALYTICS & SEO',
      shortName: 'DATA',
      color: 'cyan',
      gradient: 'from-cyan-400 to-blue-500',
      rayColor: 'from-white via-cyan-400 to-cyan-500',
      glowColor: 'cyan',
      metrics: '+688 conversions',
      impact: '14x plus efficace',
      description: 'Sessions invisibles récupérées. ROI caché révélé par forensics GA4.',
      details: 'Pendant que vos concurrents achètent du trafic, nous récupérons 14,171 sessions perdues.',
      rayAngle: -15,
      rayStart: { x: '50%', y: '40%' },
      bubblePosition: { x: '50%', y: '10%' }
    },
    {
      id: 2,
      name: 'DÉVELOPPEMENT 100% CODE',
      shortName: 'CODE',
      color: 'green',
      gradient: 'from-green-400 to-emerald-500',
      rayColor: 'from-white via-green-400 to-green-500',
      glowColor: 'lime',
      metrics: 'Next.js 15 × IA',
      impact: '0 refonte en 5 ans',
      description: 'Architecture qui évolue pendant que vous dormez. Migrations automatiques.',
      details: 'Stack moderne + IA collaborative. Votre site grandit avec votre business.',
      rayAngle: -135,
      rayStart: { x: '35%', y: '75%' },
      bubblePosition: { x: '15%', y: '85%' }
    },
    {
      id: 3,
      name: 'DESIGN & UX/UI',
      shortName: 'DESIGN',
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500',
      rayColor: 'from-white via-purple-400 to-pink-500',
      glowColor: 'magenta',
      metrics: '11.3% vs 2.5%',
      impact: '4.5x conversion',
      description: 'Chaque pixel optimisé par psychologie comportementale.',
      details: 'Eye-tracking + heatmaps = parcours de vente optimal garanti.',
      rayAngle: -45,
      rayStart: { x: '65%', y: '75%' },
      bubblePosition: { x: '85%', y: '85%' }
    }
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div 
      className={`relative w-full max-w-6xl mx-auto h-[600px] ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Triangle Central - Prisme Effect avec interactions */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative cursor-pointer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onMouseEnter={() => setTriangleHovered(true)}
          onMouseLeave={() => setTriangleHovered(false)}
        >
          {/* Triangle Principal avec effet 3D - XL SIZE */}
          <div className="relative w-96 h-80">
            {/* Face avant du prisme */}
            <motion.div
              className="absolute inset-0 triangle-shape bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90 border border-yellow-400/30 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: triangleHovered 
                  ? 'drop-shadow(0 15px 40px rgba(255, 221, 0, 0.4))' 
                  : 'drop-shadow(0 10px 30px rgba(255, 221, 0, 0.2))'
              }}
              animate={{ 
                scale: triangleHovered ? 1.02 : 1,
                borderColor: triangleHovered ? 'rgba(255, 221, 0, 0.6)' : 'rgba(255, 221, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Face latérale droite - effet 3D */}
            <motion.div
              className="absolute triangle-right bg-gradient-to-bl from-yellow-400/20 to-black/60 border-l border-yellow-400/20"
              style={{
                clipPath: 'polygon(0% 100%, 50% 0%, 100% 85%, 50% 100%)',
                right: '-30px',
                top: '15px',
                width: '200px',
                height: '280px',
                transform: 'skewY(-10deg)'
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0
              }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            {/* Lumière centrale - effet Pink Floyd renforcé */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-12 bg-white"
              initial={{ scaleY: 0 }}
              animate={{ 
                scaleY: 1,
                opacity: triangleHovered ? 1 : 0.9,
                scaleX: triangleHovered ? 1.3 : 1
              }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{
                background: 'linear-gradient(to bottom, white, transparent)',
                filter: triangleHovered ? 'blur(0.5px)' : 'blur(1px)'
              }}
            />

            {/* Indication "Découvrir Forces" sur hover triangle */}
            <AnimatePresence>
              {triangleHovered && !hoveredRay && (
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/90 backdrop-blur-md border border-yellow-400/50 rounded-xl px-4 py-2 text-center">
                    <div className="text-yellow-400 font-bold text-sm tracking-wide">
                      ✨ DÉCOUVRIR LES 3 FORCES
                    </div>
                    <div className="text-gray-300 text-xs mt-1">
                      Survolez les rayons lumineux
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Rayons colorés INTERACTIFS sortant du prisme */}
            {forces.map((force) => (
              <div key={force.id}>
                {/* Zone d'interaction invisible élargie */}
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    width: '40px',
                    height: '200px',
                    [force.rayStart.x]: force.rayStart.x,
                    [force.rayStart.y]: force.rayStart.y,
                    transform: `translate(-50%, -50%) rotate(${force.rayAngle}deg)`,
                    transformOrigin: 'bottom center'
                  }}
                  onMouseEnter={() => setHoveredRay(force.id)}
                  onMouseLeave={() => setHoveredRay(null)}
                />

                {/* Rayon visuel */}
                <motion.div
                  className={`absolute pointer-events-none bg-gradient-to-r ${force.rayColor}`}
                  style={{
                    width: hoveredRay === force.id ? '3px' : '1px',
                    height: '180px',
                    left: force.rayStart.x,
                    top: force.rayStart.y,
                    transform: `translate(-50%, -50%) rotate(${force.rayAngle}deg)`,
                    transformOrigin: 'bottom center',
                    filter: hoveredRay === force.id 
                      ? `blur(0.5px) drop-shadow(0 0 20px ${force.glowColor})` 
                      : `blur(0.5px) drop-shadow(0 0 10px ${force.glowColor})`
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ 
                    scaleY: 1, 
                    opacity: hoveredRay === force.id ? 1 : 0.8
                  }}
                  transition={{ 
                    delay: 1.5 + (force.id - 1) * 0.2, 
                    duration: 0.8
                  }}
                />

                {/* Pulsation du rayon lors du hover */}
                <AnimatePresence>
                  {hoveredRay === force.id && (
                    <motion.div
                      className={`absolute pointer-events-none bg-gradient-to-r ${force.rayColor} opacity-30`}
                      style={{
                        width: '6px',
                        height: '180px',
                        left: force.rayStart.x,
                        top: force.rayStart.y,
                        transform: `translate(-50%, -50%) rotate(${force.rayAngle}deg)`,
                        transformOrigin: 'bottom center',
                        filter: `blur(2px) drop-shadow(0 0 30px ${force.glowColor})`
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 0.3 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                {/* Petit indicateur au bout du rayon */}
                <motion.div
                  className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${force.gradient} border border-white/30 pointer-events-none`}
                  style={{
                    left: force.bubblePosition.x,
                    top: force.bubblePosition.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredRay === force.id ? 1.5 : 1, 
                    opacity: hoveredRay === force.id ? 1 : 0.7
                  }}
                  transition={{ delay: 2 + (force.id - 1) * 0.1, duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bulles d'information qui apparaissent au hover des rayons */}
      <AnimatePresence>
        {hoveredRay && (
          <motion.div
            className="absolute pointer-events-none z-50"
            style={{
              left: forces.find(f => f.id === hoveredRay)?.bubblePosition.x,
              top: forces.find(f => f.id === hoveredRay)?.bubblePosition.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.3, 
              y: 20,
              rotateX: -90
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.3, 
              y: -20,
              rotateX: 90
            }}
            transition={{ 
              duration: 0.4,
              ease: "backOut"
            }}
          >
            {(() => {
              const force = forces.find(f => f.id === hoveredRay)
              if (!force) return null
              
              return (
                <div className={`relative bg-black/95 backdrop-blur-xl border-2 border-${force.color}-400/50 rounded-2xl p-6 min-w-[320px] max-w-[380px]`}>
                  {/* Indicateur lumineux */}
                  <div className={`absolute -top-3 left-6 w-6 h-6 bg-gradient-to-r ${force.gradient} rounded-full border-2 border-black shadow-lg`} />
                  
                  {/* Header */}
                  <div className="mb-4">
                    <div className={`text-${force.color}-400 font-bold text-xs tracking-wider mb-2`}>
                      FORCE {force.id} • {force.shortName}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {force.name}
                    </h3>
                  </div>
                  
                  {/* Métriques principales */}
                  <div className={`bg-gradient-to-r from-${force.color}-400/20 to-transparent rounded-lg p-4 mb-4 border-l-4 border-${force.color}-400`}>
                    <div className="flex justify-between items-center mb-2">
                      <div className={`text-${force.color}-400 font-bold text-xl`}>
                        {force.metrics}
                      </div>
                      <div className={`text-${force.color}-300 font-semibold text-sm`}>
                        {force.impact}
                      </div>
                    </div>
                    <div className="text-white text-sm font-medium mb-2">
                      {force.description}
                    </div>
                    <div className="text-gray-300 text-xs">
                      {force.details}
                    </div>
                  </div>

                  {/* Animation de particules spécifiques à la force */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${force.color}-400/40 rounded-full`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          opacity: [0.2, 0.6, 0.2],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random()
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particules d'ambiance réduites */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/20 rounded-full pointer-events-none"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.2, 0.5, 0.2],
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