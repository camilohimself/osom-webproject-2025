'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export const HeroVersions = () => {
  const [activeVersion, setActiveVersion] = useState<'swiss' | 'metropole' | 'universal'>('swiss')

  // VERSION 1: SUISSE - Précision Alpine et Minimalisme
  const SwissVersion = () => (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        {/* Grille suisse visible */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full max-w-6xl mx-auto">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-l border-black"></div>
            ))}
          </div>
        </div>
        
        {/* Typographie asymétrique flush-left */}
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Petit label rouge signature suisse */}
          <div className="mb-12">
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            <div className="text-sm tracking-wider text-gray-600 font-light">
              OSOM® VALAIS — 46°13'39.6"N 7°21'33.0"E
            </div>
          </div>

          {/* Message principal - Helvetica style */}
          <div className="space-y-0 font-sans">
            <div className="text-8xl md:text-9xl font-bold leading-none">
              L'AGENCE
            </div>
            <div className="text-8xl md:text-9xl font-bold leading-none">
              CRÉATIVE
            </div>
            <div className="text-5xl md:text-6xl font-light mt-8 leading-tight">
              qui transforme vos
            </div>
            <div className="text-8xl md:text-9xl font-bold text-red-600 leading-none">
              DONNÉES
            </div>
            <div className="text-5xl md:text-6xl font-light mt-8 leading-tight">
              en pixels qui
            </div>
            <div className="text-8xl md:text-9xl font-bold leading-none">
              VENDENT.
            </div>
          </div>

          {/* Métadonnées minimales */}
          <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-xs text-gray-500 mb-1">PRÉCISION</div>
              <div className="text-2xl font-bold">99.7%</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">CONVERSION</div>
              <div className="text-2xl font-bold">25%</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">VITESSE</div>
              <div className="text-2xl font-bold">&lt;2s</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // VERSION 2: MÉTROPOLE - Tokyo/NYC/Paris Energy
  const MetropoleVersion = () => (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Néons urbains animés */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 text-pink-500 text-6xl font-bold opacity-20"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          デジタル
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-cyan-400 text-4xl font-bold opacity-20"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            y: [10, -10, 10]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          MÉTROPOLE
        </motion.div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <motion.div 
          className="text-center max-w-7xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge métro style */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-12"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255, 0, 255, 0.5)",
                "0 0 40px rgba(0, 255, 255, 0.5)",
                "0 0 20px rgba(255, 0, 255, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="bg-gradient-to-r from-pink-500 to-cyan-400 px-6 py-2 rounded-full">
              <span className="text-black font-bold text-sm tracking-wider">24/7 DIGITAL</span>
            </div>
          </motion.div>

          {/* Typographie cinétique style Times Square */}
          <div className="space-y-4">
            <motion.div 
              className="text-6xl md:text-8xl font-black leading-none"
              style={{ 
                background: 'linear-gradient(45deg, #FF006E, #8338EC, #3A86FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              L'AGENCE CRÉATIVE
            </motion.div>
            
            <motion.div 
              className="text-4xl md:text-5xl font-light text-white"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              qui transforme vos
            </motion.div>
            
            <motion.div 
              className="text-7xl md:text-9xl font-black"
              animate={{ 
                scale: [1, 1.05, 1],
                rotateZ: [-1, 1, -1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ 
                background: 'linear-gradient(90deg, #FFBE0B, #FB5607, #FF006E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(255, 0, 110, 0.5))'
              }}
            >
              DONNÉES
            </motion.div>
            
            <div className="text-4xl md:text-5xl font-light text-white">
              en pixels qui
            </div>
            
            <motion.div 
              className="text-7xl md:text-9xl font-black text-white"
              style={{ 
                textShadow: '0 0 40px #00FF00, 0 0 80px #00FF00'
              }}
              animate={{ 
                textShadow: [
                  '0 0 40px #00FF00, 0 0 80px #00FF00',
                  '0 0 60px #FFD700, 0 0 100px #FFD700',
                  '0 0 40px #00FF00, 0 0 80px #00FF00'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              VENDENT
            </motion.div>
          </div>

          {/* Métros du monde */}
          <div className="mt-16 flex justify-center gap-8 text-sm">
            <div className="text-pink-500">東京 TOKYO</div>
            <div className="text-cyan-400">NYC</div>
            <div className="text-yellow-400">PARIS</div>
            <div className="text-green-400">LONDON</div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // VERSION 3: UNIVERSELLE - Bauhaus/International Style
  const UniversalVersion = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-8">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
          {/* Formes géométriques Bauhaus */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-600 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-400" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Universal indicator */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-4 h-4 bg-red-600"></div>
                <div className="w-4 h-4 bg-yellow-400 rotate-45 transform scale-75"></div>
                <span className="ml-4 text-sm tracking-widest text-gray-600">UNIVERSAL LANGUAGE</span>
              </div>
            </div>

            {/* Typographie géométrique pure */}
            <div className="space-y-8">
              <div className="text-7xl md:text-8xl font-bold tracking-tight leading-none">
                <span className="inline-block">L'AGENCE</span>
              </div>
              
              <div className="relative inline-block">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-blue-600"></div>
                <div className="text-7xl md:text-8xl font-bold text-blue-600 tracking-tight">
                  CRÉATIVE
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-blue-600"></div>
              </div>
              
              <div className="text-3xl md:text-4xl font-light text-gray-700 tracking-wide">
                QUI TRANSFORME VOS
              </div>
              
              <div className="relative">
                <motion.div 
                  className="text-8xl md:text-9xl font-black text-red-600 tracking-tight"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  DONNÉES
                </motion.div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-red-600"></div>
              </div>
              
              <div className="text-3xl md:text-4xl font-light text-gray-700 tracking-wide mt-12">
                EN PIXELS QUI
              </div>
              
              <div className="relative inline-block">
                <div className="text-8xl md:text-9xl font-black tracking-tight">
                  VENDENT
                </div>
                <motion.div 
                  className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </motion.div>
              </div>
            </div>

            {/* Metadata universelle */}
            <div className="mt-24 flex justify-center">
              <div className="grid grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
                  <div className="text-xs text-gray-600">FUNCTION</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 mx-auto mb-2"></div>
                  <div className="text-xs text-gray-600">FORM</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 mx-auto mb-2" 
                       style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
                  <div className="text-xs text-gray-600">FUTURE</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Sélecteur de version */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveVersion('swiss')}
            className={`px-4 py-2 rounded transition-all ${
              activeVersion === 'swiss' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            SUISSE
          </button>
          <button
            onClick={() => setActiveVersion('metropole')}
            className={`px-4 py-2 rounded transition-all ${
              activeVersion === 'metropole' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            MÉTROPOLE
          </button>
          <button
            onClick={() => setActiveVersion('universal')}
            className={`px-4 py-2 rounded transition-all ${
              activeVersion === 'universal' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            UNIVERSELLE
          </button>
        </div>
      </div>

      {/* Rendu de la version active */}
      {activeVersion === 'swiss' && <SwissVersion />}
      {activeVersion === 'metropole' && <MetropoleVersion />}
      {activeVersion === 'universal' && <UniversalVersion />}
    </div>
  )
}

export default HeroVersions