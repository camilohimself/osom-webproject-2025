'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const engines = [
  {
    name: 'Next.js 14',
    icon: '▲',
    color: '#000000',
    why: 'Sites 4x plus rapides que WordPress',
    because: 'Chargement instantané, SEO automatique, hosting mondial. Vos clients ne partent plus.',
    impact: '0.8s au lieu de 3.2s'
  },
  {
    name: 'React 18', 
    icon: '◯',
    color: '#61DAFB',
    why: 'Interface jamais bloquée',
    because: 'Même avec plein de contenu, tout reste fluide. Expérience utilisateur révolutionnaire.',
    impact: 'UX premium garantie'
  },
  {
    name: 'TypeScript',
    icon: 'TS', 
    color: '#3178C6',
    why: '90% bugs éliminés avant publication',
    because: 'Votre site fonctionne parfaitement du premier coup. Pas de surprises désagréables.',
    impact: '0-2 bugs vs 30+ habituels'
  },
  {
    name: 'Claude IA',
    icon: '◆',
    color: '#ff6b35', 
    why: '8x plus performant que publicité',
    because: 'Contenu optimisé pour votre marché local. Conversion 11.3% vs 2.3% industrie.',
    impact: 'ROI révolutionnaire mesuré'
  }
]

interface EngineChoiceProps {
  title: string
  subtitle: string
}

export default function EngineChoice({ title, subtitle }: EngineChoiceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            {title} <span className="font-bold text-yellow-400">moteurs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500"
                style={{ 
                  borderColor: hoveredIndex === index ? `${engine.color}40` : 'rgba(255,255,255,0.1)',
                  boxShadow: hoveredIndex === index ? `0 20px 40px ${engine.color}20` : 'none'
                }}
              >
                {/* Engine Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-2xl"
                    style={{ 
                      backgroundColor: `${engine.color}15`,
                      color: engine.color,
                      border: `2px solid ${engine.color}30`
                    }}
                    animate={hoveredIndex === index ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0] 
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {engine.icon}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {engine.name}
                    </h3>
                    <div 
                      className="text-lg font-semibold"
                      style={{ color: engine.color }}
                    >
                      {engine.why}
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {engine.because}
                </p>

                {/* Impact Badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold"
                  style={{ 
                    backgroundColor: `${engine.color}20`,
                    color: engine.color,
                    border: `1px solid ${engine.color}30`
                  }}
                  animate={hoveredIndex === index ? { 
                    scale: [1, 1.05, 1] 
                  } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  📈 {engine.impact}
                </motion.div>

                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at center, ${engine.color}05, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Chaque technologie choisie pour <span className="text-yellow-400 font-semibold">maximiser votre succès</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}