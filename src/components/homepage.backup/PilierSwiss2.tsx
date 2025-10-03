'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const PilierSwiss2 = () => {
  const [tvBooted, setTvBooted] = useState(false)
  const [staticNoise, setStaticNoise] = useState(true)
  const [currentBillboard, setCurrentBillboard] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const billboardContent = [
    {
      type: 'stat',
      value: '14,171',
      label: 'SESSIONS CACHÉES',
      subtitle: 'révélées par attribution multi-touch',
      color: '#06B6D4',
      source: 'GA4 • Analytics OSOM'
    },
    {
      type: 'stat', 
      value: '688',
      label: 'CONVERSIONS ORGANIQUES',
      subtitle: 'vs 49 payantes (même client)',
      color: '#10B981',
      source: 'GA4 • Goal Completions'
    },
    {
      type: 'stat',
      value: '68.6%',
      label: 'ENGAGEMENT RATE',
      subtitle: 'vs 44.6% industrie standard',
      color: '#F59E0B',
      source: 'GA4 • Engagement Quality'
    },
    {
      type: 'stat',
      value: '+280%',
      label: 'ROI AMÉLIORATION',
      subtitle: 'attribution multi-canal',
      color: '#EF4444',
      source: 'GA4 • Revenue Tracking'
    },
    {
      type: 'stat',
      value: '25%',
      label: 'CTR MOYEN',
      subtitle: 'vs 2-3% standard marché',
      color: '#8B5CF6',
      source: 'Meta Ads • Verified'
    },
    {
      type: 'message',
      title: 'VOS CONCURRENTS',
      subtitle: 'ne voient que 30% de leurs visiteurs',
      message: 'Nous révélons les 70% invisibles',
      color: '#06B6D4',
      effect: 'warning'
    },
    {
      type: 'message', 
      title: 'CHAQUE JOUR',
      subtitle: 'vous perdez des clients',
      message: 'sans savoir pourquoi ils partent',
      color: '#EF4444',
      effect: 'urgent'
    },
    {
      type: 'message',
      title: 'GA4 STANDARD',
      subtitle: 'cache 14\'171 sessions',
      message: 'Combien en ratez-vous ?',
      color: '#F59E0B',
      effect: 'question'
    },
    {
      type: 'message',
      title: 'VOTRE ROI RÉEL',
      subtitle: 'est 3x plus élevé',
      message: 'que ce que vous pensez',
      color: '#10B981',
      effect: 'revelation'
    },
    {
      type: 'message',
      title: 'ATTRIBUTION = RÉVÉLATION',
      subtitle: 'Multi-touch = Multi-millions',
      message: 'Data cachée = Argent perdu',
      color: '#8B5CF6',
      effect: 'formula'
    }
  ]

  useEffect(() => {
    const staticTimer = setTimeout(() => setStaticNoise(false), 800)
    const bootTimer = setTimeout(() => setTvBooted(true), 1200)

    return () => {
      clearTimeout(staticTimer)
      clearTimeout(bootTimer)
    }
  }, [])

  useEffect(() => {
    if (!tvBooted) return

    const billboardTimer = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentBillboard(prev => {
          let next
          do {
            next = Math.floor(Math.random() * billboardContent.length)
          } while (next === prev && billboardContent.length > 1)
          return next
        })
        setIsTransitioning(false)
      }, 300)

    }, 6000)

    return () => clearInterval(billboardTimer)
  }, [tvBooted, billboardContent.length])

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.2) 2px, rgba(6, 182, 212, 0.2) 4px)',
          animation: 'ocean-wave-1 18s ease-in-out infinite'
        }}></div>
        
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(6, 182, 212, 0.15) 1px, rgba(6, 182, 212, 0.15) 3px)',
          animation: 'ocean-wave-2 24s ease-in-out infinite reverse'
        }}></div>
        
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6, 182, 212, 0.12) 3px, rgba(6, 182, 212, 0.12) 5px)',
          animation: 'ocean-wave-3 32s ease-in-out infinite'
        }}></div>
        
        <div className="absolute inset-0 opacity-15" style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)',
          animation: 'breath-pattern 45s ease-in-out infinite'
        }}></div>
        
        {staticNoise && (
          <div className="absolute inset-0 opacity-40" style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
            animation: 'static-noise-soft 0.2s infinite'
          }}></div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-radial from-white/5 to-transparent opacity-25 blur-2xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full max-w-7xl mx-auto">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-cyan-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
          <div className="text-sm tracking-wider text-gray-400 font-light">
            PILIER #2 — INSIGHTS ACTIONNABLES
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <div className="space-y-4 font-sans text-white mb-16">
                <div className="text-3xl md:text-4xl font-light text-gray-400">
                  VOS DONNÉES CACHENT
                </div>
                <div className="text-7xl md:text-8xl font-black text-cyan-400 leading-none">
                  DES MILLIONS
                </div>
                <div className="text-2xl md:text-3xl font-light text-gray-400">
                  L'invisible devient visible — doucement, intelligemment.
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: tvBooted ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="bg-black border-8 border-gray-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-cyan-400/20">
                <div className="absolute inset-2 border-4 border-gray-800 rounded-2xl"></div>
                <div className="absolute inset-4 border-2 border-gray-700 rounded-xl"></div>
                
                <div className="absolute top-2 left-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                <motion.div
                  key={currentBillboard}
                  initial={{ opacity: 0, rotateX: 90, scale: 0.8 }}
                  animate={{ 
                    opacity: isTransitioning ? 0 : 1, 
                    rotateX: isTransitioning ? -90 : 0,
                    scale: isTransitioning ? 0.8 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-center relative z-10 min-h-[200px] flex flex-col justify-center"
                  style={{ perspective: '1000px' }}
                >
                  {billboardContent[currentBillboard]?.type === 'stat' ? (
                    <>
                      <div className="text-xs mb-4 tracking-wider font-mono uppercase" style={{
                        color: billboardContent[currentBillboard].color
                      }}>
                        {billboardContent[currentBillboard].source}
                      </div>
                      <div className="text-8xl font-black leading-none mb-4 font-mono tracking-tight" style={{
                        color: billboardContent[currentBillboard].color,
                        textShadow: `0 0 20px ${billboardContent[currentBillboard].color}50, 0 0 40px ${billboardContent[currentBillboard].color}30`
                      }}>
                        {billboardContent[currentBillboard].value}
                      </div>
                      <div className="text-2xl text-white font-bold mb-3 tracking-wide">
                        {billboardContent[currentBillboard].label}
                      </div>
                      <div className="font-semibold mb-2" style={{ color: billboardContent[currentBillboard].color }}>
                        {billboardContent[currentBillboard].subtitle}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-black mb-4 tracking-tight" style={{
                        color: billboardContent[currentBillboard].color,
                        textShadow: `0 0 15px ${billboardContent[currentBillboard].color}40`
                      }}>
                        {billboardContent[currentBillboard].title}
                      </div>
                      <div className="text-xl text-gray-300 font-semibold mb-4">
                        {billboardContent[currentBillboard].subtitle}
                      </div>
                      <div className="text-lg font-bold tracking-wide" style={{ 
                        color: billboardContent[currentBillboard].color,
                        animation: billboardContent[currentBillboard].effect === 'urgent' ? 'billboard-urgent 2s infinite' : 'none'
                      }}>
                        {billboardContent[currentBillboard].message}
                      </div>
                      
                      <div className="mt-4 flex justify-center">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          billboardContent[currentBillboard].effect === 'warning' ? 'bg-yellow-400/20 text-yellow-400' :
                          billboardContent[currentBillboard].effect === 'urgent' ? 'bg-red-400/20 text-red-400' :
                          billboardContent[currentBillboard].effect === 'question' ? 'bg-orange-400/20 text-orange-400' :
                          billboardContent[currentBillboard].effect === 'revelation' ? 'bg-green-400/20 text-green-400' :
                          'bg-purple-400/20 text-purple-400'
                        }`}>
                          {billboardContent[currentBillboard].effect?.toUpperCase()}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>

                <div className="absolute bottom-4 left-8 right-8 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: billboardContent[currentBillboard]?.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: isTransitioning ? "0%" : "100%" }}
                    transition={{ duration: isTransitioning ? 0.3 : 5.4, ease: "linear" }}
                  />
                </div>

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {billboardContent.slice(0, 5).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentBillboard % 5 ? 'bg-white' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
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
            </motion.div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-8">
                <div className="text-2xl font-bold text-white mb-4">
                  Combien de sessions perdez-vous ?
                </div>
                <div className="text-gray-400 mb-6">
                  Audit gratuit de vos analytics + rapport détaillé en 48h
                </div>
                <motion.button
                  className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Audit Gratuit Analytics
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="sticky top-32 space-y-8"
            >
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-cyan-400/8 to-cyan-400/3 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/10 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
                      <span className="text-yellow-400 text-xs font-bold tracking-wider">● LIVE METRICS</span>
                    </div>
                    <div className="text-cyan-400 text-sm tracking-wider font-light">ÉVOLUTION ROI • 6 MOIS</div>
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="text-3xl font-light text-white leading-tight mb-2">
                      Performance
                    </div>
                    <div className="text-3xl font-black text-yellow-400 leading-tight mb-4">
                      Mesurable
                    </div>
                    <div className="text-sm text-gray-300 mb-2">
                      Données vérifiées • <span className="text-yellow-400 font-semibold">400+ jours d'analyses GA4</span>
                    </div>
                  </div>

                  <div className="relative z-10 border-l-4 border-cyan-400 pl-6 bg-cyan-400/10 rounded-r-2xl p-6 mb-6">
                    <div className="text-lg text-white italic mb-3">
                      "14,171 sessions invisibles révélées"
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      Attribution multi-touch GA4 permet de voir l'impact réel de chaque canal marketing sur vos conversions.
                    </div>
                    <div className="text-xs text-cyan-400 mt-3 font-mono">
                      — Méthodologie OSOM Data Science
                    </div>
                  </div>

                  <div className="relative z-10 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/5 rounded-3xl p-6 border border-cyan-400/30 backdrop-blur-sm">
                    <div className="space-y-6">
                      
                      <div className="flex items-center space-x-4 p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-400/15 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="3" opacity="0.7"/>
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-white font-bold mb-1">1. Scanner profond</div>
                          <div className="text-xs text-cyan-300">Révéler les 70% de données invisibles</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40 hover:bg-yellow-400/15 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-white font-bold mb-1">2. Révéler patterns</div>
                          <div className="text-xs text-yellow-300">Identifier les opportunités +280% ROI</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 p-4 rounded-2xl bg-green-400/10 border border-green-400/20 hover:border-green-400/40 hover:bg-green-400/15 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-white font-bold mb-1">3. Maximiser profits</div>
                          <div className="text-xs text-green-300">14'171 sessions = nouvelles opportunités</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-yellow-400/3 to-green-400/5 rounded-3xl opacity-70"></div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent opacity-20 animate-pulse rounded-3xl"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ocean-wave-1 {
          0% { transform: translateY(-100vh) skewX(0deg); }
          15% { transform: translateY(-80vh) skewX(0.5deg); }
          30% { transform: translateY(-60vh) skewX(1deg); }
          45% { transform: translateY(-40vh) skewX(0.5deg); }
          60% { transform: translateY(-20vh) skewX(-0.5deg); }
          75% { transform: translateY(0vh) skewX(-1deg); }
          85% { transform: translateY(20vh) skewX(-0.5deg); }
          100% { transform: translateY(100vh) skewX(0deg); }
        }
        @keyframes ocean-wave-2 {
          0% { transform: translateY(-100vh) scaleY(1) translateX(0px); }
          20% { transform: translateY(-70vh) scaleY(1.05) translateX(1px); }
          40% { transform: translateY(-40vh) scaleY(0.95) translateX(-1px); }
          60% { transform: translateY(-10vh) scaleY(1.03) translateX(0.5px); }
          80% { transform: translateY(30vh) scaleY(0.97) translateX(-0.5px); }
          100% { transform: translateY(100vh) scaleY(1) translateX(0px); }
        }
        @keyframes ocean-wave-3 {
          0% { transform: translateY(-100vh) skewX(0deg) translateX(0px); }
          12% { transform: translateY(-85vh) skewX(0.3deg) translateX(0.5px); }
          25% { transform: translateY(-70vh) skewX(-0.2deg) translateX(-0.3px); }
          38% { transform: translateY(-55vh) skewX(0.4deg) translateX(0.7px); }
          50% { transform: translateY(-40vh) skewX(-0.3deg) translateX(-0.5px); }
          62% { transform: translateY(-25vh) skewX(0.2deg) translateX(0.3px); }
          75% { transform: translateY(-10vh) skewX(-0.4deg) translateX(-0.7px); }
          88% { transform: translateY(20vh) skewX(0.3deg) translateX(0.5px); }
          100% { transform: translateY(100vh) skewX(0deg) translateX(0px); }
        }
        @keyframes breath-pattern {
          0% { opacity: 0.15; transform: scale(1); }
          25% { opacity: 0.18; transform: scale(1.02); }
          50% { opacity: 0.12; transform: scale(0.98); }
          75% { opacity: 0.16; transform: scale(1.01); }
          100% { opacity: 0.15; transform: scale(1); }
        }
        @keyframes static-noise-soft {
          0% { transform: translate(0px, 0px); opacity: 0.4; }
          25% { transform: translate(-0.3px, -0.5px); opacity: 0.35; }
          50% { transform: translate(0.5px, 0px); opacity: 0.4; }
          75% { transform: translate(-0.3px, 0.3px); opacity: 0.3; }
          100% { transform: translate(0px, 0px); opacity: 0.4; }
        }
        @keyframes billboard-urgent {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  )
}

export default PilierSwiss2