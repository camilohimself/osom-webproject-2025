'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PrismTriangleProps {
  className?: string
}

const PrismTriangle: React.FC<PrismTriangleProps> = ({ className = '' }) => {
  const [activeAxis, setActiveAxis] = useState<number | null>(null)

  const axes = [
    {
      id: 1,
      name: 'DATA ANALYTICS & SEO',
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-400',
      position: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-2',
      metrics: '+688 conversions',
      description: 'Chaque décision guidée par la data pour maximiser votre ROI'
    },
    {
      id: 2,
      name: 'DÉVELOPPEMENT 100% CODE',
      color: 'from-green-400 to-emerald-500',
      borderColor: 'border-green-400',
      position: 'bottom-0 left-0 transform -translate-x-4 translate-y-2',
      metrics: 'Next.js 15 + IA',
      description: 'Architecture évolutive qui grandit avec votre business'
    },
    {
      id: 3,
      name: 'DESIGN & UX/UI',
      color: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-400',
      position: 'bottom-0 right-0 transform translate-x-4 translate-y-2',
      metrics: '11.3% vs 2.5%',
      description: 'Chaque pixel optimisé pour convertir vos visiteurs'
    }
  ]

  return (
    <div className={`relative w-full max-w-6xl mx-auto h-[600px] ${className}`}>
      {/* Triangle Central - Prisme Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Triangle Principal avec effet 3D - XL SIZE */}
          <div className="relative w-96 h-80">
            {/* Face avant du prisme */}
            <motion.div
              className="absolute inset-0 triangle-shape bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90 border border-yellow-400/30 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: 'drop-shadow(0 10px 30px rgba(255, 221, 0, 0.2))'
              }}
              whileHover={{ 
                scale: 1.05,
                filter: 'drop-shadow(0 15px 40px rgba(255, 221, 0, 0.3))'
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            {/* Lumière centrale - effet Pink Floyd */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-12 bg-white opacity-90"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{
                background: 'linear-gradient(to bottom, white, transparent)',
                filter: 'blur(1px)'
              }}
            />
            
            {/* Rayons colorés sortant du prisme */}
            {/* Rayon Cyan - Data */}
            <motion.div
              className="absolute w-1 bg-gradient-to-r from-white via-cyan-400 to-cyan-500 opacity-80"
              style={{
                height: '180px',
                top: '-90px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-15deg)',
                transformOrigin: 'bottom',
                filter: 'blur(0.5px) drop-shadow(0 0 10px cyan)'
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.8 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
            
            {/* Rayon Vert - Code */}
            <motion.div
              className="absolute w-1 bg-gradient-to-r from-white via-green-400 to-green-500 opacity-80"
              style={{
                height: '180px',
                bottom: '-90px',
                left: '20%',
                transform: 'rotate(-135deg)',
                transformOrigin: 'top',
                filter: 'blur(0.5px) drop-shadow(0 0 10px lime)'
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.8 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            />
            
            {/* Rayon Purple - Design */}
            <motion.div
              className="absolute w-1 bg-gradient-to-r from-white via-purple-400 to-pink-500 opacity-80"
              style={{
                height: '180px',
                bottom: '-90px',
                right: '20%',
                transform: 'rotate(-45deg)',
                transformOrigin: 'top',
                filter: 'blur(0.5px) drop-shadow(0 0 10px magenta)'
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.8 }}
              transition={{ delay: 1.9, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Labels des 3 axes avec animations */}
      {axes.map((axis, index) => (
        <motion.div
          key={axis.id}
          className={`absolute ${axis.position} cursor-pointer group`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
          onMouseEnter={() => setActiveAxis(axis.id)}
          onMouseLeave={() => setActiveAxis(null)}
        >
          {/* Conteneur du label */}
          <motion.div
            className={`relative bg-black/90 backdrop-blur-md border ${axis.borderColor}/50 rounded-xl p-4 min-w-[280px] group-hover:border-yellow-400/80 transition-all duration-300`}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            {/* Indicateur coloré */}
            <div className={`absolute -top-2 left-4 w-4 h-4 bg-gradient-to-r ${axis.color} rounded-full border-2 border-black`} />
            
            {/* Titre de l'axe */}
            <h3 className="text-white font-bold text-sm mb-1 tracking-wide">
              {axis.name}
            </h3>
            
            {/* Métrique */}
            <div className={`text-transparent bg-clip-text bg-gradient-to-r ${axis.color} font-bold text-lg mb-2`}>
              {axis.metrics}
            </div>
            
            {/* Description */}
            <p className="text-gray-300 text-xs leading-relaxed">
              {axis.description}
            </p>
            
            {/* Flèche vers le centre */}
            <motion.div
              className={`absolute w-0.5 h-8 bg-gradient-to-b ${axis.color} opacity-60`}
              style={{
                [axis.id === 1 ? 'bottom' : 'top']: '-32px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: activeAxis === axis.id ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      ))}
      
      {/* Particules flottantes pour l'ambiance */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
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