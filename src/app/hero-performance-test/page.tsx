'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeroPerformanceTest() {
  const [activeDirection, setActiveDirection] = useState<1 | 2 | 3>(1)

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation entre directions */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-black/80 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
        <button
          onClick={() => setActiveDirection(1)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeDirection === 1
              ? 'bg-purple-400 text-black'
              : 'bg-transparent text-purple-400 hover:bg-purple-400/10'
          }`}
        >
          PARTENARIAT
        </button>
        <button
          onClick={() => setActiveDirection(2)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeDirection === 2
              ? 'bg-purple-400 text-black'
              : 'bg-transparent text-purple-400 hover:bg-purple-400/10'
          }`}
        >
          VOYAGE
        </button>
        <button
          onClick={() => setActiveDirection(3)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeDirection === 3
              ? 'bg-purple-400 text-black'
              : 'bg-transparent text-purple-400 hover:bg-purple-400/10'
          }`}
        >
          PROMESSE
        </button>
      </div>

      {/* DIRECTION 1 - LE PARTENARIAT - Main dans la main */}
      {activeDirection === 1 && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-black to-black"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <div className="text-xs text-purple-400 font-mono tracking-[0.3em] uppercase mb-6 opacity-60">Direction 1 — Le Partenariat</div>
            </div>

            {/* Hero centré autour de l'accompagnement */}
            <div className="text-center space-y-8">
              <h1 className="space-y-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* "6 MOIS" ÉNORME pour ancrer la durée */}
                <div className="text-[16vw] md:text-[20vw] lg:text-[24vw] font-black leading-[0.8] tracking-[-0.04em] text-white">
                  6 MOIS
                </div>

                {/* "Main dans la main" en cursif/script pour l'humain */}
                <div className="text-[6vw] md:text-[7vw] lg:text-[8vw] font-light italic leading-none text-purple-400/80">
                  main dans la main
                </div>

                {/* Objectif clair */}
                <div className="text-[8vw] md:text-[10vw] lg:text-[12vw] font-black leading-[0.85] tracking-[-0.02em] mt-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400">
                    DÉCOLLAGE
                  </span>
                </div>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Pas un site livré puis oublié. Un partenariat actif où on travaille ensemble chaque mois sur votre croissance digitale : développement, SEO, analytics, stratégie.
              </p>

              {/* Timeline visuelle simple */}
              <div className="flex items-center justify-center gap-3 pt-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-purple-400' : 'bg-purple-400/30'}`}></div>
                    <span className="text-xs text-gray-600 font-mono">M{i + 1}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="bg-purple-400 text-black px-12 py-5 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-lg"
                >
                  Démarrer partenariat
                </Link>
                <Link
                  href="#why-performance"
                  className="border-2 border-purple-400/40 text-purple-300 px-12 py-5 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-medium"
                >
                  Comment ça marche?
                </Link>
              </div>
            </div>
          </div>

          {/* Label direction */}
          <div className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono">
            DIRECTION 1 — LE PARTENARIAT
          </div>
        </section>
      )}

      {/* DIRECTION 2 - LE VOYAGE - De 0 au sommet */}
      {activeDirection === 2 && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          <div className="absolute inset-0">
            {/* Montagne stylisée en arrière-plan */}
            <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-5" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path d="M0,400 L0,200 L200,150 L400,80 L600,120 L800,60 L1000,100 L1000,400 Z" fill="url(#mountain-gradient)" />
              <defs>
                <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <div className="text-xs text-purple-400 font-mono tracking-[0.3em] uppercase mb-6 opacity-60">Direction 2 — Le Voyage</div>
            </div>

            {/* Hero axé sur la transformation */}
            <div className="text-center space-y-12">
              <h1 className="space-y-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* Point de départ */}
                <div className="text-[5vw] md:text-[6vw] lg:text-[7vw] font-light text-gray-600 leading-tight flex items-center justify-center gap-8">
                  <span>VOTRE PROJET</span>
                  <span className="text-purple-400/40">AUJOURD'HUI</span>
                </div>

                {/* Flèche ascendante symbolique */}
                <div className="flex justify-center my-8">
                  <svg className="w-16 h-32 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 44 L12 4 M12 4 L6 10 M12 4 L18 10" />
                  </svg>
                </div>

                {/* Point d'arrivée MASSIF */}
                <div className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-black leading-[0.8] tracking-[-0.03em]">
                  <div className="text-white">SOMMET</div>
                  <div className="text-purple-400 mt-2">DIGITAL</div>
                </div>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                <span className="text-purple-400 font-semibold">6 à 12 mois</span> d'accompagnement stratégique pour transformer votre présence digitale en machine d'acquisition clients.
              </p>

              {/* Étapes clés du voyage */}
              <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400/30 mb-2">01</div>
                  <div className="text-sm text-gray-500">Fondations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400/60 mb-2">02</div>
                  <div className="text-sm text-gray-400">Croissance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">03</div>
                  <div className="text-sm text-gray-300">Domination</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="bg-purple-400 text-black px-12 py-5 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-lg"
                >
                  Commencer l'ascension
                </Link>
                <Link
                  href="#why-performance"
                  className="border-2 border-purple-400/40 text-purple-300 px-12 py-5 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-medium"
                >
                  Voir le parcours
                </Link>
              </div>
            </div>
          </div>

          {/* Label direction */}
          <div className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono">
            DIRECTION 2 — LE VOYAGE
          </div>
        </section>
      )}

      {/* DIRECTION 3 - LA PROMESSE - Engagement clair */}
      {activeDirection === 3 && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          <div className="absolute inset-0">
            {/* Effet de lumière qui se renforce */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <div className="text-xs text-purple-400 font-mono tracking-[0.3em] uppercase mb-6 opacity-60">Direction 3 — La Promesse</div>
            </div>

            {/* Hero comme un engagement contractuel */}
            <div className="text-center space-y-10">
              <h1 className="space-y-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* L'engagement temporel */}
                <div className="text-[10vw] md:text-[12vw] lg:text-[14vw] font-black leading-[0.85] tracking-[-0.03em] text-white">
                  6-12 MOIS
                </div>

                {/* L'intensité de l'accompagnement */}
                <div className="text-[5vw] md:text-[6vw] lg:text-[7vw] font-light text-gray-400 leading-tight">
                  ENSEMBLE
                </div>

                {/* Le résultat garanti */}
                <div className="flex flex-col items-center gap-4 mt-8">
                  <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  <div className="text-[8vw] md:text-[10vw] lg:text-[12vw] font-black leading-[0.85] tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                      CROISSANCE
                    </span>
                  </div>
                  <div className="text-[8vw] md:text-[10vw] lg:text-[12vw] font-black leading-[0.85] tracking-tight text-white">
                    MESURABLE
                  </div>
                  <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                </div>
              </h1>

              {/* Le contrat en une phrase */}
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-400/10 via-purple-400/5 to-purple-400/10 border border-purple-400/20 rounded-xl px-8 py-8 mt-12">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  <span className="text-purple-400 font-bold">Mon engagement :</span> travailler activement chaque mois sur votre développement, SEO, analytics et stratégie digitale jusqu'à ce que votre projet <span className="text-white font-semibold">décolle vraiment</span>.
                </p>
              </div>

              {/* Compteur mensuel visuel */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-12">
                {['DEV', 'SEO', 'ANALYTICS', 'SUPPORT', 'STRATÉGIE', 'OPTIMISATION'].map((service, i) => (
                  <div key={i} className="bg-purple-400/10 border border-purple-400/30 px-4 py-2 rounded-md">
                    <span className="text-xs text-purple-400 font-mono">{service}</span>
                    <span className="ml-2 text-xs text-gray-500">→ CHAQUE MOIS</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="bg-purple-400 text-black px-12 py-5 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-lg"
                >
                  Engageons-nous
                </Link>
                <Link
                  href="#why-performance"
                  className="border-2 border-purple-400/40 text-purple-300 px-12 py-5 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-medium"
                >
                  Voir l'engagement
                </Link>
              </div>
            </div>
          </div>

          {/* Label direction */}
          <div className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono">
            DIRECTION 3 — LA PROMESSE
          </div>
        </section>
      )}
    </div>
  )
}
