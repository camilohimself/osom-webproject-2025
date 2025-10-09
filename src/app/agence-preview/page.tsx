'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Import du jeu Beast Mode (client-side only)
const PongGameBeastMode = dynamic(() => import('@/components/gaming/PongGameBeastMode'), {
  ssr: false,
  loading: () => <div className="h-96 bg-black/50 rounded-2xl border border-green-500/30 animate-pulse flex items-center justify-center"><span className="text-green-400 font-mono">CHARGEMENT...</span></div>
})

export default function AgencePreviewPage() {
  const [gameResult, setGameResult] = useState<'playing' | 'lost' | 'draw'>('playing')

  return (
    <div className="min-h-screen bg-black relative">
      {/* Bandeau Preview */}
      <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black py-2 px-4 text-center font-bold z-50">
        TEST BEAST MODE - Difficulté progressive 3 phases • <Link href="/agence" className="underline">Retour agence</Link>
      </div>

      <div className="pt-12">
        {/* BEAST MODE TEST */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-8">
              <span className="text-green-400 text-xs font-bold px-3 py-1 bg-green-400/10 rounded-full border border-green-400/30">
                BEAST MODE - Test mécanique progressive
              </span>
            </div>

            {/* Instructions */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                3 secondes pour comprendre OSOM
              </h2>

              <div className="bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-xl p-6 mb-8 border border-green-500/30">
                <p className="text-white text-lg mb-4 font-bold">Phases de difficulté :</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-green-400 font-mono text-sm mb-2">PHASE 1 (0-20)</div>
                    <div className="text-gray-300 text-sm">Vitesse augmente progressivement</div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-yellow-400 font-mono text-sm mb-2">PHASE 2 (20-50)</div>
                    <div className="text-gray-300 text-sm">Paddle rétréci + IA plus rapide</div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-red-400 font-mono text-sm mb-2">PHASE 3 (50+)</div>
                    <div className="text-gray-300 text-sm">CHAOS MODE activé</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Essayez de battre notre IA. Spoiler : vous ne pouvez pas.
              </p>
            </div>

            {/* Jeu Beast Mode */}
            <div className="mb-12">
              <PongGameBeastMode />
            </div>

            {/* Feedback attendu */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 max-w-2xl mx-auto">
              <div className="text-center mb-4">
                <p className="text-white text-xl font-bold mb-2">Questions à tester :</p>
              </div>
              <div className="space-y-3 text-left text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="text-cyan-400 text-xl">→</div>
                  <div>La progression de difficulté est-elle fluide ou trop brutale ?</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-cyan-400 text-xl">→</div>
                  <div>Le rétrécissement du paddle (Phase 2) est-il perceptible et challenge ?</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-cyan-400 text-xl">→</div>
                  <div>Le CHAOS MODE (Phase 3) est-il assez chaotique sans être injuste ?</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-cyan-400 text-xl">→</div>
                  <div>Les labels "PHASE 1/2/3" sont-ils clairs pendant le jeu ?</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
