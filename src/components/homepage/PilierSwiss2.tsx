// PERFORMANCE OPTIMIZED VERSION - All client-side logic removed
const PilierSwiss2 = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects - Static */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-radial from-white/5 to-transparent opacity-25 blur-2xl"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full max-w-7xl mx-auto">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-cyan-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-16">
          <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
          <div className="text-sm tracking-wider text-gray-400 font-light">
            PILIER #2 — INSIGHTS ACTIONNABLES
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-3">
            <div className="mb-12">
              <div className="space-y-4 font-sans text-white mb-16">
                <div className="text-3xl md:text-4xl font-light text-gray-400">VOS DONNÉES CACHENT</div>
                <div className="text-7xl md:text-8xl font-black text-cyan-400 leading-none">DES MILLIONS</div>
                <div className="text-2xl md:text-3xl font-light text-gray-400">L'invisible devient visible — doucement, intelligemment.</div>
              </div>
            </div>

            {/* Static Data Display - No animations */}
            <div className="relative mb-12">
              <div className="bg-black border-8 border-gray-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-cyan-400/20">
                <div className="absolute inset-2 border-4 border-gray-800 rounded-2xl"></div>
                <div className="absolute inset-4 border-2 border-gray-700 rounded-xl"></div>

                {/* Static indicators */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-400 rounded-full"></div>

                <div className="text-center relative z-10 min-h-[200px] flex flex-col justify-center">
                  <div className="text-cyan-400 text-xs mb-4 tracking-wider font-mono uppercase">GA4 • Analytics OSOM</div>
                  <div className="text-8xl font-black leading-none mb-4 font-mono tracking-tight text-cyan-400">14,171</div>
                  <div className="text-2xl text-white font-bold mb-3 tracking-wide">SESSIONS CACHÉES</div>
                  <div className="text-cyan-400 font-semibold mb-2">révélées par attribution multi-touch</div>
                </div>

                <div className="absolute bottom-4 left-8 right-8 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full w-3/4"></div>
                </div>

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              <div className="text-xl text-white font-bold mb-8">Notre processus en 3 étapes :</div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-black text-xl">1</span>
                  </div>
                  <div className="text-2xl font-black text-cyan-400 mb-2">COLLECTER</div>
                  <div className="text-gray-400 text-sm">GA4 + Search Console</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-black text-xl">2</span>
                  </div>
                  <div className="text-2xl font-black text-cyan-400 mb-2">ANALYSER</div>
                  <div className="text-gray-400 text-sm">Attribution multi-touch</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-black text-xl">3</span>
                  </div>
                  <div className="text-2xl font-black text-cyan-400 mb-2">OPTIMISER</div>
                  <div className="text-gray-400 text-sm">ROI temps réel</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-8">
                <div className="text-2xl font-bold text-white mb-4">Combien de sessions perdez-vous ?</div>
                <div className="text-gray-400 mb-6">Audit gratuit de vos analytics + rapport détaillé en 48h</div>
                <button className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300">
                  Audit Gratuit Analytics
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-400/8 to-cyan-400/3 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/10 relative overflow-hidden">

                <div className="relative z-10 mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-yellow-400 text-xs font-bold tracking-wider">● LIVE METRICS</span>
                  </div>
                  <div className="text-cyan-400 text-sm tracking-wider font-light">ÉVOLUTION ROI • 6 MOIS</div>
                </div>

                <div className="relative z-10 mb-6">
                  <div className="text-3xl font-light text-white leading-tight mb-2">Performance</div>
                  <div className="text-3xl font-black text-yellow-400 leading-tight mb-4">Mesurable</div>
                  <div className="text-sm text-gray-300 mb-2">Données vérifiées • <span className="text-yellow-400 font-semibold">400+ jours d'analyses GA4</span></div>
                </div>

                <div className="relative z-10 border-l-4 border-cyan-400 pl-6 bg-cyan-400/10 rounded-r-2xl p-6 mb-6">
                  <div className="text-lg text-white italic mb-3">"14,171 sessions invisibles révélées"</div>
                  <div className="text-sm text-gray-300 leading-relaxed">Attribution multi-touch GA4 permet de voir l'impact réel de chaque canal marketing sur vos conversions.</div>
                  <div className="text-xs text-cyan-400 mt-3 font-mono">— Méthodologie OSOM Data Science</div>
                </div>

                {/* Process Steps */}
                <div className="relative z-10 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/5 rounded-3xl p-6 border border-cyan-400/30 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center">
                          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-black">
                            <circle cx="12" cy="12" r="3" opacity="0.7"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold mb-1">1. Scanner profond</div>
                        <div className="text-xs text-cyan-300">Révéler les 70% de données invisibles</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-black">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold mb-1">2. Révéler patterns</div>
                        <div className="text-xs text-yellow-300">Identifier les opportunités +280% ROI</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-green-400/10 border border-green-400/20">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-black">
                            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold mb-1">3. Maximiser profits</div>
                        <div className="text-xs text-green-300">14'171 sessions = nouvelles opportunités</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PilierSwiss2