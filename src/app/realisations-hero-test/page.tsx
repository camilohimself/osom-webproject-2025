'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const RealisationsHeroTest = () => {
  const [activeVersion, setActiveVersion] = useState<'A' | 'B'>('A')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Switcher versions */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setActiveVersion('A')}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            activeVersion === 'A'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Version A
        </button>
        <button
          onClick={() => setActiveVersion('B')}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            activeVersion === 'B'
              ? 'bg-yellow-400 text-black'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Version B
        </button>
      </div>

      {/* Instructions desktop */}
      <div className="hidden md:block fixed top-4 left-4 bg-white/10 backdrop-blur-md p-4 rounded-lg max-w-md">
        <p className="text-sm text-gray-300">
          📱 Teste ces versions sur <strong>mobile</strong> pour voir l'impact réel.
          <br />
          Scroll vers le bas pour voir comment ça flow vers les projets.
        </p>
      </div>

      {/* VERSION A - ULTRA MINIMALISTE */}
      {activeVersion === 'A' && (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
          {/* Badge subtil */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-pink-400 text-xs font-medium tracking-widest uppercase">
              Projets OSOM
            </span>
          </motion.div>

          {/* Titre simple et puissant */}
          <motion.h1
            className="text-5xl md:text-7xl font-black text-center mb-6 leading-tight"
            style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Nos</span>
            <br />
            <span className="text-yellow-400">PROJETS</span>
          </motion.h1>

          {/* 1 ligne percutante */}
          <motion.p
            className="text-lg text-gray-300 text-center max-w-md mb-12"
            style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Résultats mesurables. Performances vérifiées.
          </motion.p>

          {/* CTA scroll subtil */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-sm text-gray-500">Découvrir</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1 h-2 bg-pink-400 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Floating accent subtil */}
          <motion.div
            className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: '#FFDD00' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </section>
      )}

      {/* VERSION B - IMPACT VISUEL */}
      {activeVersion === 'B' && (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
          {/* Titre créatif court */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-7xl md:text-9xl font-black text-yellow-400 mb-4"
              style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              688
            </motion.div>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              conversions générées
            </p>
          </motion.div>

          {/* 2 métriques clés seulement */}
          <motion.div
            className="grid grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">
                <AnimatedCounter from={0} to={14} duration={2} />x
              </div>
              <p className="text-xs text-gray-400">vs concurrence</p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                <AnimatedCounter from={0} to={68.6} duration={2} />%
              </div>
              <p className="text-xs text-gray-400">engagement</p>
            </div>
          </motion.div>

          {/* CTA direct */}
          <motion.a
            href="#projets"
            className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 rounded-full font-bold transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir les projets →
          </motion.a>

          {/* Floating accents multiples */}
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 rounded-full opacity-10 blur-2xl"
            style={{ backgroundColor: '#EC4899' }}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 right-10 w-32 h-32 rounded-full opacity-10 blur-2xl"
            style={{ backgroundColor: '#FFDD00' }}
            animate={{
              x: [0, -15, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </section>
      )}

      {/* Section projets simulée (pour tester le flow) */}
      <section id="projets" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Projets Web Live
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center"
              >
                <span className="text-gray-500 text-lg">Projet {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes design */}
      <section className="py-12 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6">Analyse des versions :</h3>

          <div className="space-y-6">
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6">
              <h4 className="text-pink-400 font-bold mb-3">Version A - Ultra Minimaliste</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ Titre simple et lisible sur petit écran</li>
                <li>✓ 1 seule ligne de description (pas de noyade)</li>
                <li>✓ CTA scroll subtil pour guider naturellement</li>
                <li>✓ Design épuré = focus sur les projets</li>
                <li>✗ Moins de preuve sociale immédiate</li>
              </ul>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
              <h4 className="text-yellow-400 font-bold mb-3">Version B - Impact Visuel</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ Chiffre clé immédiat (688 conversions = crédibilité)</li>
                <li>✓ Seulement 2 métriques essentielles (pas 4)</li>
                <li>✓ CTA direct vers projets (moins friction)</li>
                <li>✓ Preuve sociale instantanée</li>
                <li>✗ Légèrement plus chargé que A</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealisationsHeroTest
