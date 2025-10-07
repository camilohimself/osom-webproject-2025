'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeroPerformanceTest() {
  const [activeDirection, setActiveDirection] = useState<1 | 2 | 3>(1)

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation entre directions */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/80 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
        <button
          onClick={() => setActiveDirection(1)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeDirection === 1
              ? 'bg-purple-400 text-black'
              : 'bg-transparent text-purple-400 hover:bg-purple-400/10'
          }`}
        >
          VISUEL
        </button>
        <button
          onClick={() => setActiveDirection(2)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeDirection === 2
              ? 'bg-purple-400 text-black'
              : 'bg-transparent text-purple-400 hover:bg-purple-400/10'
          }`}
        >
          MINIMALISTE
        </button>
        <button
          onClick={() => setActiveDirection(3)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeDirection === 3
              ? 'bg-purple-400 text-black'
              : 'bg-transparent text-purple-400 hover:bg-purple-400/10'
          }`}
        >
          CONCRET
        </button>
      </div>

      {/* DIRECTION 1 - LE VISUEL (Tableau, Galerie d'art) */}
      {activeDirection === 1 && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
          {/* Lumière dramatique */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge subtil */}
            <div className="flex items-center justify-center mb-12 opacity-60">
              <div className="w-1 h-1 rounded-full bg-purple-400 mr-2"></div>
              <span className="text-purple-400 text-xs font-light tracking-[0.3em] uppercase">Package Performance</span>
              <span className="ml-3 bg-purple-400/10 border border-purple-400/30 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">POPULAIRE</span>
            </div>

            {/* Typo MONUMENTALE avec lumière */}
            <h1 className="relative mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              <div className="text-[8vw] md:text-[10vw] lg:text-[12vw] font-light text-white/10 leading-none mb-[-1em] tracking-tight">
                PROJETS
              </div>
              <div className="text-[10vw] md:text-[12vw] lg:text-[14vw] font-bold leading-none tracking-tighter">
                <span className="bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                  COMPLEXES
                </span>
              </div>
              <div className="text-[6vw] md:text-[7vw] lg:text-[8vw] font-light text-white/90 leading-none mt-4 tracking-wide">
                + Partenariat
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto font-light leading-relaxed opacity-80">
              30-60 pages. API & dashboards. SEO stratégique. Partenariat actif continu 6-12 mois.
            </p>

            {/* CTAs galerie */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-purple-400 to-purple-600 text-black px-12 py-5 rounded-sm overflow-hidden font-bold text-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
              >
                <span className="relative z-10">Démarrer mon projet Performance</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="#why-performance"
                className="border border-purple-400/30 text-purple-300 px-12 py-5 rounded-sm hover:bg-purple-400/5 hover:border-purple-400/60 transition-all duration-500 font-medium backdrop-blur-sm"
              >
                Pourquoi Performance?
              </Link>
            </div>

            {/* Prix discret en bas */}
            <div className="mt-20 text-sm text-gray-500 font-light">
              À partir de <span className="text-purple-400 font-semibold">4,000 CHF/mois</span>
            </div>
          </div>

          {/* Label direction */}
          <div className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono">
            DIRECTION 1 — LE VISUEL
          </div>
        </section>
      )}

      {/* DIRECTION 2 - LE MINIMALISTE (Plans d'architecte) */}
      {activeDirection === 2 && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          {/* Grille technique subtile */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, .05) 25%, rgba(168, 85, 247, .05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, .05) 75%, rgba(168, 85, 247, .05) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, .05) 25%, rgba(168, 85, 247, .05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, .05) 75%, rgba(168, 85, 247, .05) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Lignes de construction */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge technique */}
            <div className="flex items-center justify-center mb-16">
              <div className="border border-purple-400/30 px-4 py-1 rounded-none">
                <span className="text-purple-400 text-[10px] font-mono tracking-[0.4em] uppercase">PKG.PERFORMANCE</span>
                <span className="ml-3 text-purple-300 text-[10px] font-mono">v2.0</span>
              </div>
            </div>

            {/* Typo MASSIVE minimaliste */}
            <h1 className="mb-12" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              <div className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-black leading-[0.85] tracking-[-0.02em] text-white mb-4">
                PROJETS
              </div>
              <div className="text-[14vw] md:text-[16vw] lg:text-[18vw] font-black leading-[0.85] tracking-[-0.02em] mb-4">
                <span className="text-purple-400">COMPLEXES</span>
              </div>
              <div className="flex items-center justify-center gap-6 text-[6vw] md:text-[7vw] lg:text-[8vw] font-light text-white/80 tracking-tight">
                <div className="w-16 h-[2px] bg-purple-400/50"></div>
                <span>PARTENARIAT</span>
                <div className="w-16 h-[2px] bg-purple-400/50"></div>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-16 max-w-3xl mx-auto font-mono text-sm tracking-wide leading-relaxed">
              30-60_PAGES // API_DASHBOARDS // SEO_STRATEGIQUE // 6-12_MOIS
            </p>

            {/* CTAs minimalistes */}
            <div className="flex flex-col sm:flex-row gap-0 justify-center">
              <Link
                href="/contact"
                className="bg-purple-400 text-black px-16 py-6 rounded-none font-black text-sm tracking-wider hover:bg-purple-500 transition-colors duration-300 uppercase"
              >
                Démarrer projet
              </Link>
              <Link
                href="#why-performance"
                className="border-2 border-purple-400 text-purple-400 px-16 py-6 rounded-none font-black text-sm tracking-wider hover:bg-purple-400 hover:text-black transition-all duration-300 uppercase"
              >
                Détails
              </Link>
            </div>

            {/* Prix architectural */}
            <div className="mt-20 flex items-center justify-center gap-4 text-xs text-gray-600 font-mono">
              <div className="w-8 h-[1px] bg-purple-400/30"></div>
              <span>FROM_4000_CHF/MONTH</span>
              <div className="w-8 h-[1px] bg-purple-400/30"></div>
            </div>
          </div>

          {/* Label direction */}
          <div className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono">
            DIRECTION 2 — LE MINIMALISTE
          </div>
        </section>
      )}

      {/* DIRECTION 3 - LE CONCRET (Comptable, chiffres durs) */}
      {activeDirection === 3 && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          {/* Background data subtil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 text-purple-400 text-xs font-mono p-8 overflow-hidden leading-loose">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i}>
                  27,000 CHF • 48,000 CHF • 4,500/mois • ROI 300% • 30-60 pages • API • Dashboards • SEO •
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge data */}
            <div className="inline-flex items-center gap-3 mb-12 bg-purple-400/10 border border-purple-400/30 px-6 py-2 rounded-full">
              <span className="text-purple-400 text-xs font-semibold tracking-wide uppercase">Package Performance</span>
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 text-xs font-bold">POPULAIRE</span>
            </div>

            {/* Typo GÉANTE avec data intégrée */}
            <h1 className="mb-12" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              <div className="text-[10vw] md:text-[12vw] lg:text-[14vw] font-black leading-none tracking-tight text-white mb-2">
                PROJETS
              </div>

              {/* Data KPIs intégrés */}
              <div className="flex items-center justify-center gap-6 mb-2 flex-wrap">
                <div className="bg-purple-400/10 border border-purple-400/30 px-4 py-2 rounded-lg">
                  <div className="text-purple-400 text-xs font-mono">PAGES</div>
                  <div className="text-white text-2xl font-bold">30-60</div>
                </div>
                <div className="bg-purple-400/10 border border-purple-400/30 px-4 py-2 rounded-lg">
                  <div className="text-purple-400 text-xs font-mono">API</div>
                  <div className="text-white text-2xl font-bold">✓</div>
                </div>
                <div className="bg-purple-400/10 border border-purple-400/30 px-4 py-2 rounded-lg">
                  <div className="text-purple-400 text-xs font-mono">MOIS</div>
                  <div className="text-white text-2xl font-bold">6-12</div>
                </div>
              </div>

              <div className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-black leading-none tracking-tight mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  COMPLEXES
                </span>
              </div>

              <div className="text-[6vw] md:text-[7vw] lg:text-[8vw] font-bold text-white/90 leading-none tracking-tight">
                + PARTENARIAT ACTIF
              </div>
            </h1>

            {/* Pricing TRÈS visible */}
            <div className="mb-12 flex items-center justify-center gap-8 flex-wrap">
              <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-2 border-purple-400/40 rounded-xl px-8 py-6">
                <div className="text-gray-400 text-xs font-mono mb-1">6 MOIS</div>
                <div className="text-5xl font-black text-purple-400 mb-1">4,500</div>
                <div className="text-gray-500 text-xs font-mono">CHF/MOIS</div>
                <div className="text-gray-600 text-[10px] font-mono mt-2">TOTAL: 27,000 CHF</div>
              </div>

              <div className="bg-gradient-to-br from-purple-400/30 to-purple-600/30 border-2 border-purple-400/60 rounded-xl px-8 py-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-400 text-black text-[10px] font-black px-3 py-1 rounded-full">
                  MEILLEUR PRIX
                </div>
                <div className="text-gray-400 text-xs font-mono mb-1">12 MOIS</div>
                <div className="text-6xl font-black text-purple-400 mb-1">4,000</div>
                <div className="text-gray-500 text-xs font-mono">CHF/MOIS</div>
                <div className="text-gray-600 text-[10px] font-mono mt-2">TOTAL: 48,000 CHF</div>
              </div>
            </div>

            <p className="text-base text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Dev + SEO stratégique + Support premium + Dashboards personnalisés inclus chaque mois
            </p>

            {/* CTAs data-driven */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-400 text-black px-12 py-5 rounded-lg font-black text-base hover:bg-purple-500 hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 uppercase tracking-wide"
              >
                Démarrer projet Performance
              </Link>
              <Link
                href="#why-performance"
                className="border-2 border-purple-400/50 text-purple-300 px-12 py-5 rounded-lg hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 font-semibold backdrop-blur-sm uppercase tracking-wide"
              >
                Voir détails techniques
              </Link>
            </div>

            {/* ROI indicator */}
            <div className="mt-16 inline-flex items-center gap-3 text-sm text-gray-500 font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>ROI_MOYEN: <span className="text-green-400 font-bold">300%+</span></span>
            </div>
          </div>

          {/* Label direction */}
          <div className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono">
            DIRECTION 3 — LE CONCRET
          </div>
        </section>
      )}
    </div>
  )
}
