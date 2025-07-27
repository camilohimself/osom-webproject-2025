'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface PrismTriangleProps {
  className?: string
}

const PrismTriangle: React.FC<PrismTriangleProps> = ({ className = '' }) => {
  const [hoveredForce, setHoveredForce] = useState<number | null>(null)
  const [logoHovered, setLogoHovered] = useState(false)
  const [sequentialIndex, setSequentialIndex] = useState(0)

  const forces = [
    {
      id: 1,
      name: 'MARKETING + IA',
      shortName: 'MARKETING IA',
      badge: 'NOTRE DIFFÉRENCE',
      color: 'purple',
      colorClass: 'text-purple-400',
      bgClass: 'bg-purple-400',
      borderClass: 'border-purple-400/50',
      shadowClass: 'shadow-purple-400/30',
      gradient: 'from-purple-400 to-violet-500',
      metrics: '25% CTR vs 2-3% industrie',
      impact: '1,500 CHF économisés mensuellement',
      description: 'IA Marketing Automation. Prédiction ROI Marketing Digital.',
      details: 'Notre IA marketing transforme vos campagnes en machine à économies pendant que vos concurrents dépensent sans optimisation.',
      position: { x: 50, y: 15 }, // Top center
      angle: 0
    },
    {
      id: 2,
      name: 'DATA ANALYTICS',
      shortName: 'DATA',
      color: 'cyan',
      colorClass: 'text-cyan-400',
      bgClass: 'bg-cyan-400',
      borderClass: 'border-cyan-400/50',
      shadowClass: 'shadow-cyan-400/30',
      gradient: 'from-cyan-400 to-blue-500',
      metrics: '14,171 sessions invisibles récupérées',
      impact: '68.6% engagement supérieur',
      description: 'Analytics Data Valais. Attribution multi-touch précise.',
      details: 'Notre analyse Google Analytics révèle 688 conversions cachées pendant que vos concurrents naviguent sans visibilité.',
      position: { x: 20, y: 80 }, // Bottom left
      angle: -120
    },
    {
      id: 3,
      name: 'DÉVELOPPEMENT WEB',
      shortName: 'DEV WEB',
      color: 'green',
      colorClass: 'text-green-400',
      bgClass: 'bg-green-400',
      borderClass: 'border-green-400/50',
      shadowClass: 'shadow-green-400/30',
      gradient: 'from-green-400 to-emerald-500',
      metrics: 'Performance < 2s garantie',
      impact: 'Architecture évolutive Valais',
      description: 'Développement Next.js + IA. Performance technique optimale.',
      details: 'Notre stack moderne distance vos concurrents avec architecture évolutive et référencement automatisé 24h/24.',
      position: { x: 80, y: 80 }, // Bottom right
      angle: 120
    }
  ]

  // Sequential pulsing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSequentialIndex((prev) => (prev + 1) % forces.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      {/* Container Responsive */}
      <div className="relative min-h-[500px] lg:min-h-[600px]">
        
        {/* Version Desktop - Logo OSOM Central */}
        <div className="hidden md:block">
          {/* Logo OSOM Central avec Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              onHoverStart={() => setLogoHovered(true)}
              onHoverEnd={() => setLogoHovered(false)}
            >
              {/* Logo OSOM Container */}
              <motion.div
                className="relative w-32 h-32 flex items-center justify-center"
                animate={{
                  scale: logoHovered ? 1.1 : 1,
                  filter: logoHovered 
                    ? "drop-shadow(0 20px 40px rgba(255, 221, 0, 0.4))" 
                    : "drop-shadow(0 10px 20px rgba(255, 221, 0, 0.2))"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Logo SVG intégré */}
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 927.6 900" 
                  className="relative z-10 filter drop-shadow-lg"
                  style={{ filter: logoHovered ? 'brightness(1.1)' : 'brightness(1)' }}
                >
                  <defs>
                    <filter id="logoGlow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background removed for transparency */}
                  <g>
                    <g>
                      <g>
                        <polygon fill="#514747" points="548.6,617 548.6,617 430.3,594.3 430.3,594.3 430.2,594.2 430.2,666.7 548.6,666.7 548.6,617.1"/>
                        <path fill="#514747" d="M779.7,261.1c-29.5-31.6-69.4-47.3-119.7-47.3c-59.6,0-107.9,20.8-144.7,62.3
                          c-29.2-41.5-72.2-62.3-128.9-62.3c-51.5,0-92.4,16.1-122.8,48.2v-38.6H154.8V280l0,0L300,338.9c14-12.1,31.6-18.2,53.1-18.2
                          c23.4,0,42.1,7.6,56.1,22.8c11.5,12.5,18.3,28.5,20.4,48l0,0l0,0c0,0,0,0,0-0.1l119,48.3l0.1,0v-37.6c0-24,7.5-43.6,22.4-58.8
                          c14.9-15.2,34.1-22.8,57.4-22.8c23.4,0,42.1,7.6,56.1,22.8c14,15.2,21.1,35.7,21.1,61.4v76.7c0,0,65.3,16.8,76.3,20.3
                          c20.1,5.5,34.1,14.8,42.1,25V388.2C824,335,809.3,292.6,779.7,261.1z"/>
                      </g>
                      <g>
                        <polygon fill="#514747" points="154.8,541.2 154.8,666.7 273.2,666.7 273.2,564 222.2,554.2"/>
                      </g>
                    </g>
                    {/* Point jaune OSOM - L'élément distinctif */}
                    <motion.path 
                      fill="#FFDD00" 
                      d="M807.1,640.9c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17
                        c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6
                        C781.6,657.5,795.8,652,807.1,640.9z"
                      animate={{
                        filter: logoHovered 
                          ? "drop-shadow(0 0 20px #FFDD00) brightness(1.2)" 
                          : "drop-shadow(0 0 10px #FFDD00) brightness(1)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <g>
                      <path fill="#FFFFFF" d="M429.5,391.4c0.6,4.3,0.7,8.7,0.7,13.4v189.5L548.6,617V439.8L429.5,391.4z"/>
                      <path fill="#FFFFFF" d="M154.8,280v80.9c0,0,0,0,0,0v157.7c0,0,0,0,0,0v22.5L273.3,564V404.8c0-25.7,7.3-46.1,21.9-61.4
                        c1.5-1.7,3.2-3.2,4.8-4.5L154.8,280z"/>
                    </g>
                  </g>
                </svg>

                {/* Aura dorée autour du logo */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl"
                  animate={{
                    scale: logoHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                    opacity: logoHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Guide d'interaction */}
              <AnimatePresence>
                {logoHovered && !hoveredForce && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-black/95 backdrop-blur-md border border-yellow-400/40 rounded-lg px-6 py-3 text-center">
                      <div className="text-yellow-400 font-bold text-sm tracking-wide">
                        OSOM • LES 3 FORCES DATA-DRIVEN
                      </div>
                      <div className="text-gray-300 text-xs mt-1">
                        Explorez nos forces autour du logo
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Version Mobile - Stack Vertical avec Logo */}
        <div className="block md:hidden space-y-8 py-8">
          {/* Logo Mobile */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <svg width="96" height="96" viewBox="0 0 927.6 900" className="filter drop-shadow-lg">
                <g>
                  <polygon fill="#514747" points="548.6,617 548.6,617 430.3,594.3 430.3,594.3 430.2,594.2 430.2,666.7 548.6,666.7 548.6,617.1"/>
                  <path fill="#514747" d="M779.7,261.1c-29.5-31.6-69.4-47.3-119.7-47.3c-59.6,0-107.9,20.8-144.7,62.3c-29.2-41.5-72.2-62.3-128.9-62.3c-51.5,0-92.4,16.1-122.8,48.2v-38.6H154.8V280l0,0L300,338.9c14-12.1,31.6-18.2,53.1-18.2c23.4,0,42.1,7.6,56.1,22.8c11.5,12.5,18.3,28.5,20.4,48l0,0l0,0c0,0,0,0,0-0.1l119,48.3l0.1,0v-37.6c0-24,7.5-43.6,22.4-58.8c14.9-15.2,34.1-22.8,57.4-22.8c23.4,0,42.1,7.6,56.1,22.8c14,15.2,21.1,35.7,21.1,61.4v76.7c0,0,65.3,16.8,76.3,20.3c20.1,5.5,34.1,14.8,42.1,25V388.2C824,335,809.3,292.6,779.7,261.1z"/>
                  <polygon fill="#514747" points="154.8,541.2 154.8,666.7 273.2,666.7 273.2,564 222.2,554.2"/>
                  <path fill="#FFDD00" d="M807.1,640.9c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C781.6,657.5,795.8,652,807.1,640.9z"/>
                  <path fill="#FFFFFF" d="M429.5,391.4c0.6,4.3,0.7,8.7,0.7,13.4v189.5L548.6,617V439.8L429.5,391.4z"/>
                  <path fill="#FFFFFF" d="M154.8,280v80.9c0,0,0,0,0,0v157.7c0,0,0,0,0,0v22.5L273.3,564V404.8c0-25.7,7.3-46.1,21.9-61.4c1.5-1.7,3.2-3.2,4.8-4.5L154.8,280z"/>
                </g>
              </svg>
            </div>
            <div className="text-yellow-400 font-bold text-lg">OSOM</div>
            <div className="text-gray-300 text-sm">Les 3 Forces Data-Driven</div>
          </motion.div>

          {/* Forces Mobile */}
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
                  <div className={`bg-${force.color}-500/20 px-3 py-1 rounded-full border border-${force.color}-500/30 mb-2`}>
                    <span className={`${force.colorClass} text-xs font-bold`}>{force.badge}</span>
                  </div>
                )}
                <div className="text-gray-300 text-sm text-center max-w-xs">
                  {force.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Points de Force Desktop - Positionnés autour du Logo */}
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
                delay: 1.4 + index * 0.3, 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              onHoverStart={() => setHoveredForce(force.id)}
              onHoverEnd={() => setHoveredForce(null)}
            >
              {/* Point Principal avec couleur harmonisée au jaune OSOM */}
              <motion.div
                className={`relative w-16 h-16 rounded-full ${force.bgClass} border-3 border-yellow-400/30 shadow-lg flex items-center justify-center`}
                animate={{ 
                  scale: hoveredForce === force.id ? 1.4 : (sequentialIndex === index ? 1.2 : 1),
                  borderColor: hoveredForce === force.id 
                    ? '#FFDD00' 
                    : sequentialIndex === index 
                    ? 'rgba(255, 221, 0, 0.6)' 
                    : 'rgba(255, 221, 0, 0.3)',
                  boxShadow: hoveredForce === force.id 
                    ? `0 0 40px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#10B981'}60, 0 0 60px rgba(255, 221, 0, 0.3)`
                    : sequentialIndex === index
                    ? `0 0 25px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#10B981'}40`
                    : `0 0 15px ${force.color === 'cyan' ? '#06B6D4' : force.color === 'purple' ? '#A855F7' : '#10B981'}30`
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

                {/* Badge pour la Force 1 */}
                {force.badge && (
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-purple-500/90 px-3 py-1 rounded-full border border-yellow-400/50"
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

                {/* Pulsation Séquentielle harmonisée jaune */}
                <motion.div
                  className={`absolute inset-0 rounded-full ${force.bgClass} opacity-20 border border-yellow-400/20`}
                  animate={{
                    scale: sequentialIndex === index ? [1, 2.5, 1] : 1,
                    opacity: sequentialIndex === index ? [0.2, 0.05, 0.2] : 0.2,
                    borderColor: sequentialIndex === index ? 'rgba(255, 221, 0, 0.4)' : 'rgba(255, 221, 0, 0.2)'
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Label de Force */}
              <motion.div
                className={`absolute ${force.position.y < 50 ? 'top-full mt-6' : 'bottom-full mb-6'} left-1/2 transform -translate-x-1/2 text-center min-w-max`}
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
                    className="text-gray-300 text-xs max-w-36"
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
                ? 'translate(-50%, -150%)' 
                : 'translate(-50%, 50%)'
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
                  {/* Header avec badge */}
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

                  {/* Métriques */}
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

                  {/* Details */}
                  <motion.div 
                    className="text-gray-400 text-xs leading-relaxed border-t border-gray-700 pt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {force.details}
                  </motion.div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA avec branding OSOM renforcé */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <motion.button
          className="bg-gradient-to-r from-purple-600 via-yellow-400 to-green-500 text-black font-bold px-10 py-4 rounded-full hover:from-purple-500 hover:via-yellow-300 hover:to-green-400 transition-all duration-300 transform shadow-lg"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          DÉCOUVRIR L'APPROCHE OSOM
        </motion.button>
        <div className="text-gray-400 text-xs mt-3">
          Marketing IA × Data Analytics × Développement web • Valais
        </div>
      </motion.div>

      {/* Particules dorées harmonisées avec le logo */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full pointer-events-none"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
        />
      ))}
    </div>
  )
}

export default PrismTriangle