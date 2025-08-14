'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface CTRCircularChartProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function CTRCircularChart({
  title = "CTR Performance Comparison",
  subtitle = "Performance Marketing IA • Données Meta Ads vérifiées",
  className = ""
}: CTRCircularChartProps) {
  const [isOSOMHovered, setIsOSOMHovered] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide">MARKETING + IA</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {title}
          </h3>
          <p className="text-gray-400 text-lg" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Gauge OSOM avec hover effect */}
          <motion.div 
            className="text-center cursor-pointer"
            onHoverStart={() => setIsOSOMHovered(true)}
            onHoverEnd={() => setIsOSOMHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#374151"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.3"
                />
                {/* Progress circle OSOM avec glow au hover */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#A855F7"
                  strokeWidth={isOSOMHovered ? "12" : "8"}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.25)}`}
                  initial={{ strokeDashoffset: `${2 * Math.PI * 80}` }}
                  animate={{ 
                    strokeDashoffset: `${2 * Math.PI * 80 * (1 - 0.25)}`,
                    filter: isOSOMHovered 
                      ? 'drop-shadow(0 0 15px #A855F7) drop-shadow(0 0 25px #A855F780)' 
                      : 'drop-shadow(0 0 8px #A855F780)'
                  }}
                  transition={{ 
                    strokeDashoffset: { duration: 2, ease: "easeOut", delay: 0.5 },
                    filter: { duration: 0.3 },
                    strokeWidth: { duration: 0.3 }
                  }}
                />
                
                {/* Effet de pulsation au hover */}
                {isOSOMHovered && (
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#A855F7"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                    initial={{ r: 80, opacity: 0.4 }}
                    animate={{ r: 95, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </svg>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: isOSOMHovered ? 1.1 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-purple-400"
                    animate={{ 
                      color: isOSOMHovered ? "#C084FC" : "#A855F7",
                      textShadow: isOSOMHovered ? "0 0 10px #A855F780" : "none"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    25%
                  </motion.div>
                  <div className="text-sm text-gray-400">CTR OSOM</div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              animate={{ 
                color: isOSOMHovered ? "#C084FC" : "#FFFFFF"
              }}
              transition={{ duration: 0.3 }}
              className="font-semibold text-lg mb-2"
            >
              Campagnes OSOM avec IA
            </motion.div>
            <motion.div 
              className="text-purple-400 text-sm"
              animate={{ 
                color: isOSOMHovered ? "#C084FC" : "#A855F7"
              }}
              transition={{ duration: 0.3 }}
            >
              Performance optimisée
            </motion.div>
          </motion.div>

          {/* Gauge Industrie - statique */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#374151"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.3"
                />
                {/* Progress circle Industrie */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#6B7280"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.023)}`}
                  initial={{ strokeDashoffset: `${2 * Math.PI * 80}` }}
                  animate={{ strokeDashoffset: `${2 * Math.PI * 80 * (1 - 0.023)}` }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-400">2.3%</div>
                  <div className="text-sm text-gray-500">CTR Standard</div>
                </div>
              </div>
            </div>
            <div className="text-white font-semibold text-lg mb-2">Marketing traditionnel</div>
            <div className="text-gray-400 text-sm">Industrie moyenne</div>
          </div>
        </div>

        {/* Multiplicateur central avec animation spéciale au hover OSOM */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: isOSOMHovered ? 1.05 : 1 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 2 },
            scale: { duration: 0.3 }
          }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-2xl p-8 border border-purple-400/40 inline-block"
            animate={{
              borderColor: isOSOMHovered ? "#C084FC80" : "#A855F760",
              boxShadow: isOSOMHovered 
                ? "0 0 30px #A855F730, 0 10px 40px rgba(168, 85, 247, 0.2)" 
                : "0 0 20px #A855F720"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-purple-400 font-bold text-lg mb-3">MULTIPLICATEUR D'EFFICACITÉ</div>
            <motion.div 
              className="text-6xl font-black text-white mb-3"
              animate={{
                textShadow: isOSOMHovered ? "0 0 20px #A855F780" : "none"
              }}
              transition={{ duration: 0.3 }}
            >
              10.9x
            </motion.div>
            <div className="text-gray-300 text-lg">Plus performant que la concurrence</div>
            <motion.div 
              className="text-purple-400 text-sm mt-2 italic"
              animate={{
                color: isOSOMHovered ? "#C084FC" : "#A855F7"
              }}
              transition={{ duration: 0.3 }}
            >
              25% ÷ 2.3% = 10.87x d'efficacité supérieure
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Particules d'effet au hover */}
        {isOSOMHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/60 rounded-full pointer-events-none"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [-10, -30, -50],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 1
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}