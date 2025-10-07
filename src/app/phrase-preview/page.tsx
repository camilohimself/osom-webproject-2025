'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

export default function PhrasePreviewPage() {
  const [animatedWords1, setAnimatedWords1] = useState<string[]>([])
  const [glowEffect, setGlowEffect] = useState(false)
  const [matrixRain, setMatrixRain] = useState(false)
  
  const phrase = "Nous ne travaillons qu'avec des clients qui veulent gagner. Les autres, on les laisse à la concurrence."
  const words = phrase.split(' ')
  
  // Animation VERSION 1 - Réveil Digital
  useEffect(() => {
    const timer = setTimeout(() => {
      setMatrixRain(true)
    }, 500)
    
    words.forEach((word, index) => {
      setTimeout(() => {
        setAnimatedWords1(prev => [...prev, word])
        if (index === words.length - 1) {
          setTimeout(() => setGlowEffect(true), 500)
        }
      }, 1000 + index * 200)
    })
    
    return () => clearTimeout(timer)
  }, [words])

  return (
    <div className="min-h-screen bg-black">
      
      {/* HEADER DE NAVIGATION */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">Preview phrase versions</h1>
          <Link href="/services" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Retour aux Services
          </Link>
        </div>
      </header>

      {/* VERSION 1 - RÉVEIL DIGITAL */}
      <section className="relative min-h-screen flex items-center justify-center px-4 border-b-4 border-green-400 overflow-hidden">
        {/* Badge VERSION 1 */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-green-400 text-black px-6 py-2 rounded-full font-bold text-lg">
            VERSION 1 - RÉVEIL DIGITAL
          </div>
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          {matrixRain && (
            <>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                >
                  <div className="text-green-400/30 text-xs font-mono">01010101</div>
                </div>
              ))}
            </>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Icône cerveau qui pulse */}
          <div className="mb-8">
            <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center transition-all duration-1000 ${glowEffect ? 'animate-pulse shadow-2xl shadow-green-400/50 scale-110' : ''}`}>
              <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="mt-4 text-green-400 font-mono text-sm">DIGITAL AWAKENING</div>
          </div>
          
          {/* Phrase animée */}
          <div className="mb-8">
            <p className="text-3xl md:text-5xl font-light text-white leading-relaxed">
              {animatedWords1.map((word, index) => (
                <span 
                  key={index}
                  className={`inline-block mr-3 transition-all duration-500 ${
                    word === 'gagner' ? 'text-green-400 font-bold' : ''
                  } ${
                    word === 'concurrence' ? 'text-red-400' : ''
                  } ${
                    glowEffect && (word === 'gagner' || word === 'concurrence') ? 'animate-pulse' : ''
                  }`}
                  style={{
                    textShadow: glowEffect && word === 'gagner' ? '0 0 20px rgba(34, 197, 94, 0.8)' : 'none'
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Message subliminal */}
          <div className={`transition-opacity duration-2000 ${glowEffect ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
              <p className="text-green-400 font-mono text-lg">
                &gt; Soyez à jour, exploitez les données :)
              </p>
              <p className="text-gray-400 font-mono text-sm mt-2">
                &gt; Marketing digital révolutionnaire activé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERSION 2 - SILICON VALLEY CORPORATE */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Badge VERSION 2 */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-purple-400 text-black px-6 py-2 rounded-full font-bold text-lg">
            VERSION 2 - SILICON VALLEY CORPORATE
          </div>
        </div>

        {/* Background premium */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge Elite */}
          <div className="mb-12">
            <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-full border border-purple-400/30">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              <span className="text-purple-400 font-medium text-sm tracking-widest">ELITE PARTNERSHIP PROGRAM</span>
            </div>
          </div>
          
          {/* Phrase ultra-premium */}
          <div className="mb-16">
            <blockquote className="text-4xl md:text-6xl font-extralight text-white leading-tight tracking-wide">
              <span className="block mb-4">
                "Nous ne travaillons qu'avec des clients
              </span>
              <span className="block mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
                qui veulent gagner.
              </span>
              <span className="block text-gray-400 text-3xl md:text-5xl">
                Les autres, on les laisse à la concurrence."
              </span>
            </blockquote>
          </div>

          {/* Signature premium */}
          <div className="space-y-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            
            <div className="text-center">
              <div className="text-gray-400 text-lg font-light mb-2">OSOM Digital Excellence</div>
              <div className="text-purple-400 text-sm tracking-widest">EXCLUSIVE GROWTH PARTNERSHIPS</div>
            </div>
            
            {/* Stats premium */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">&lt; 1%</div>
                <div className="text-gray-500 text-sm">Client acceptance</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">100%</div>
                <div className="text-gray-500 text-sm">Success rate</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">∞</div>
                <div className="text-gray-500 text-sm">ROI potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOUTONS DE CHOIX */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Quelle version préférez-vous ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/60 rounded-2xl p-6 border border-green-400/40">
              <h3 className="text-green-400 font-bold text-xl mb-4">Version 1 - Réveil digital</h3>
              <p className="text-gray-300 mb-4">Matrix style, animation réveil, cerveau qui pulse, fun et impact</p>
              <button className="w-full py-3 bg-green-400 text-black font-bold rounded-xl hover:bg-green-300 transition-colors">
                Choisir Réveil Digital
              </button>
            </div>
            
            <div className="bg-black/60 rounded-2xl p-6 border border-purple-400/40">
              <h3 className="text-purple-400 font-bold text-xl mb-4">Version 2 - Silicon Valley</h3>
              <p className="text-gray-300 mb-4">Ultra-premium, corporate, épuré, prestige maximal</p>
              <button className="w-full py-3 bg-purple-400 text-black font-bold rounded-xl hover:bg-purple-300 transition-colors">
                Choisir Silicon Valley
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}