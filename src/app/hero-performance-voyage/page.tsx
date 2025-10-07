'use client'

import Link from 'next/link'

export default function HeroPerformanceVoyage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation entre versions */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-black/80 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
        <Link
          href="/hero-performance-partenariat"
          className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-transparent text-purple-400 hover:bg-purple-400/10"
        >
          PARTENARIAT
        </Link>
        <Link
          href="/hero-performance-voyage"
          className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-purple-400 text-black"
        >
          VOYAGE
        </Link>
        <Link
          href="/hero-performance-promesse"
          className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-transparent text-purple-400 hover:bg-purple-400/10"
        >
          PROMESSE
        </Link>
      </div>

      {/* DIRECTION 2 RAFFINÉE - LE VOYAGE - Editorial Magazine */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Grille subtile magazine */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 98%, rgba(168, 85, 247, .1) 100%), linear-gradient(90deg, transparent 98%, rgba(168, 85, 247, .1) 100%)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Accent géométrique asymétrique */}
        <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-purple-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-gradient-to-r from-purple-400/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          {/* Label éditorial discret */}
          <div className="absolute -top-12 left-8 text-[10px] text-purple-400/40 font-mono tracking-[0.4em] uppercase">
            Package Performance
          </div>

          {/* Layout asymétrique magazine */}
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Colonne gauche: Titre principal */}
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <h1 style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* Point de départ - proportions équilibrées */}
                <div className="flex items-baseline gap-6 mb-8">
                  <span className="text-[3vw] md:text-[3.5vw] lg:text-[4vw] font-light text-gray-600 tracking-tight">
                    Votre projet
                  </span>
                  <span className="text-xs text-purple-400/60 font-mono tracking-[0.3em] uppercase">
                    aujourd'hui
                  </span>
                </div>

                {/* Séparateur typographique élégant */}
                <div className="flex items-center gap-6 my-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
                  <svg className="w-8 h-16 text-purple-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 48" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 44 L12 4 M12 4 L6 10 M12 4 L18 10" />
                  </svg>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-400/20 to-transparent"></div>
                </div>

                {/* Destination - raffinée et proportionnée */}
                <div className="space-y-3">
                  <div className="text-[8vw] md:text-[9vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.03em] text-white">
                    SOMMET
                  </div>
                  <div className="text-[8vw] md:text-[9vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    DIGITAL
                  </div>
                </div>
              </h1>

              {/* Sous-titre éditorial */}
              <div className="max-w-lg">
                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                  <span className="text-purple-400 font-medium">6 à 12 mois</span> d'accompagnement stratégique.
                  Votre projet devient machine d'acquisition clients.
                </p>
              </div>
            </div>

            {/* Colonne droite: Détails éditoriaux */}
            <div className="col-span-12 lg:col-span-5 space-y-8 lg:ml-[20%]">
              {/* Étapes + CTAs en rythme */}
              <div className="space-y-8">
                {/* Étape 01 */}
                <div className="flex items-start gap-6 group border-l border-purple-400/10 pl-8">
                  <div className="text-6xl font-black text-purple-400/20 leading-none group-hover:text-purple-400/40 transition-colors">
                    01
                  </div>
                  <div className="pt-4">
                    <div className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-1">Phase</div>
                    <div className="text-sm text-gray-400 font-light">Fondations solides</div>
                  </div>
                </div>

                {/* Étape 02 */}
                <div className="flex items-start gap-6 group border-l border-purple-400/10 pl-8">
                  <div className="text-6xl font-black text-purple-400/40 leading-none group-hover:text-purple-400/60 transition-colors">
                    02
                  </div>
                  <div className="pt-4">
                    <div className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-1">Phase</div>
                    <div className="text-sm text-gray-300 font-light">Croissance mesurable</div>
                  </div>
                </div>

                {/* Étape 03 */}
                <div className="flex items-start gap-6 group border-l border-purple-400/10 pl-8">
                  <div className="text-6xl font-black text-purple-400/80 leading-none group-hover:text-purple-400 transition-colors">
                    03
                  </div>
                  <div className="pt-4">
                    <div className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-1">Phase</div>
                    <div className="text-sm text-white font-light">Domination locale</div>
                  </div>
                </div>
              </div>

              {/* CTAs éditoriaux - alignés avec le rythme */}
              <div className="space-y-3 pt-4 border-l border-purple-400/10 pl-8">
                <Link
                  href="/contact"
                  className="block text-center bg-purple-400 text-black px-8 py-4 hover:bg-purple-500 transition-all duration-300 font-semibold text-sm tracking-wide uppercase"
                >
                  Commencer l'ascension
                </Link>
                <Link
                  href="#why-performance"
                  className="block text-center border border-purple-400/30 text-purple-300 px-8 py-4 hover:bg-purple-400/5 hover:border-purple-400/50 transition-all duration-300 font-light text-sm tracking-wide"
                >
                  Parcours détaillé
                </Link>
              </div>
            </div>
          </div>

          {/* Ligne éditoriale bas */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[10px] text-gray-700 font-mono">
            <span>PERFORMANCE / 2025</span>
            <span className="tracking-[0.3em]">6-12 MOIS</span>
          </div>
        </div>
      </section>
    </div>
  )
}
