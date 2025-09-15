'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MagneticButton } from '@/components/ui'

interface HeroCEOProps {
  dictionary: {
    hero: {
      cta_primary: string
      cta_secondary: string
    }
  }
}

const HeroCEO = ({ dictionary }: HeroCEOProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const techFeatures = [
    {
      id: 'nextjs',
      label: 'Next.js 15',
      value: '40% plus rapide',
      detail: 'que WordPress',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/20'
    },
    {
      id: 'claude',
      label: 'Claude IA',
      value: 'Contenu auto',
      detail: 'SEO optimisé',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20'
    },
    {
      id: 'performance',
      label: 'Performance',
      value: '< 2 secondes',
      detail: 'garantie',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20'
    }
  ]

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Grille Swiss Tech subtile */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-8 h-full max-w-7xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-l border-yellow-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">

          {/* Label Tech */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 font-semibold text-sm tracking-wider">TECHNOLOGIE 2025</span>
            </div>
          </motion.div>

          {/* Message Principal CEO */}
          <motion.div
            className="space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Nous travaillons dans l'ombre
              <span className="block text-yellow-400 mt-4">
                pour vous faire briller
              </span>
            </div>

            <div className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Fini les 8 secondes de chargement.<br/>
              Place aux sites qui <span className="text-green-400 font-semibold">convertissent en &lt; 2s</span>.
            </div>
          </motion.div>

          {/* Features Tech Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {techFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:scale-105`}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className={`${feature.color} font-bold text-lg mb-2`}>
                    {feature.label}
                  </div>
                  <div className="text-white font-bold text-2xl mb-1">
                    {feature.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {feature.detail}
                  </div>
                </div>

                {hoveredFeature === feature.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-yellow-400 rounded-2xl pointer-events-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof Rapide */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-gray-400 text-lg mb-4">
              Sites développés en Next.js :
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <span className="hover:text-yellow-400 transition-colors">Cabinet médical Sion</span>
              <span className="hover:text-yellow-400 transition-colors">PME construction</span>
              <span className="hover:text-yellow-400 transition-colors">Artiste Valais</span>
            </div>
          </motion.div>

          {/* CTA Principal CEO */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-xl px-12 py-6 bg-yellow-400 text-black hover:bg-yellow-500 min-h-[60px] font-bold"
            >
              Audit Technique Gratuit
            </MagneticButton>

            <MagneticButton
              href="/services/creation-site-web"
              variant="secondary"
              className="text-xl px-12 py-6 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black min-h-[60px]"
            >
              Voir Notre Méthode
            </MagneticButton>
          </motion.div>

          {/* Process Ultra-Simple CEO */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-2xl font-bold text-white mb-8">
              Comment ça marche ?
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <div className="text-white font-semibold mb-2">Brief 30 min</div>
                <div className="text-gray-400 text-sm">Nous comprenons votre métier</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <div className="text-white font-semibold mb-2">Développement Next.js</div>
                <div className="text-gray-400 text-sm">Vous validez chaque étape</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <div className="text-white font-semibold mb-2">Formation 2h</div>
                <div className="text-gray-400 text-sm">Vous êtes autonome</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroCEO