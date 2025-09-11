'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const WhyNextJS = () => {
  const [activeComparison, setActiveComparison] = useState<'performance' | 'seo' | 'maintenance'>('performance')

  const comparisons = {
    performance: {
      title: 'Performance de Chargement',
      wordpress: {
        value: '8.2s',
        label: 'WordPress moyen',
        issues: ['Plugins lourds', 'Base données lente', 'Optimisation manuelle'],
        color: 'text-red-400'
      },
      nextjs: {
        value: '1.8s',
        label: 'Next.js OSOM',
        benefits: ['Pre-rendering automatique', 'Optimisation images', 'Code splitting'],
        color: 'text-green-400'
      }
    },
    seo: {
      title: 'Référencement Google',
      wordpress: {
        value: '45/100',
        label: 'WordPress SEO',
        issues: ['Rendu côté client', 'Meta tags manuels', 'Vitesse pénalisante'],
        color: 'text-red-400'
      },
      nextjs: {
        value: '97/100',
        label: 'Next.js + Claude IA',
        benefits: ['SSR natif', 'Meta auto-générés', 'Core Web Vitals optimisés'],
        color: 'text-green-400'
      }
    },
    maintenance: {
      title: 'Maintenance Technique',
      wordpress: {
        value: '4h/mois',
        label: 'WordPress typique',
        issues: ['Mises à jour plugins', 'Failles sécurité', 'Compatibilités'],
        color: 'text-red-400'
      },
      nextjs: {
        value: '20min/mois',
        label: 'Next.js moderne',
        benefits: ['Auto-updates', 'Sécurité native', 'Stack unifiée'],
        color: 'text-green-400'
      }
    }
  }

  const currentComparison = comparisons[activeComparison]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pourquoi <span className="text-cyan-400">Next.js</span> remplace WordPress
            </div>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto">
              La technologie 2025 qui transforme vos visiteurs en clients
            </div>
          </motion.div>
        </div>

        {/* Comparison Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(comparisons).map(([key, comparison]) => (
            <button
              key={key}
              onClick={() => setActiveComparison(key as any)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeComparison === key 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {comparison.title}
            </button>
          ))}
        </motion.div>

        {/* Comparison Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20"
          key={activeComparison}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* WordPress Column */}
          <div className="bg-red-400/5 border border-red-400/20 rounded-3xl p-8 text-center">
            <div className="text-red-400 text-lg font-semibold mb-6">❌ WORDPRESS</div>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold ${currentComparison.wordpress.color} mb-2`}>
                {currentComparison.wordpress.value}
              </div>
              <div className="text-gray-400">{currentComparison.wordpress.label}</div>
            </div>

            <div className="space-y-3">
              {currentComparison.wordpress.issues.map((issue, index) => (
                <div key={index} className="flex items-center text-red-300 text-sm">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                  {issue}
                </div>
              ))}
            </div>
          </div>

          {/* Next.js Column */}
          <div className="bg-green-400/5 border border-green-400/20 rounded-3xl p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                RECOMMANDÉ
              </div>
            </div>
            
            <div className="text-green-400 text-lg font-semibold mb-6 mt-4">✅ NEXT.JS</div>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold ${currentComparison.nextjs.color} mb-2`}>
                {currentComparison.nextjs.value}
              </div>
              <div className="text-gray-400">{currentComparison.nextjs.label}</div>
            </div>

            <div className="space-y-3">
              {currentComparison.nextjs.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-green-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">+340%</div>
            <div className="text-white font-semibold mb-1">Conversion</div>
            <div className="text-gray-400 text-sm">Sites Next.js vs WordPress</div>
          </div>
          
          <div className="text-center bg-purple-400/10 border border-purple-400/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">-75%</div>
            <div className="text-white font-semibold mb-1">Temps maintenance</div>
            <div className="text-gray-400 text-sm">Grâce à l'architecture moderne</div>
          </div>
          
          <div className="text-center bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-1">Google Core Vitals</div>
            <div className="text-gray-400 text-sm">Performance guarantee</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl text-white font-semibold mb-6">
            Prêt à migrer vers Next.js ?
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition-all duration-300">
              Audit Gratuit Migration
            </button>
            <button className="border-2 border-gray-600 text-white font-semibold px-8 py-4 rounded-full hover:border-yellow-400 transition-all duration-300">
              Voir Nos Projets Next.js
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyNextJS