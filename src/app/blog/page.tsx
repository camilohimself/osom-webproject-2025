'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import CustomCursor from '@/components/ui/CustomCursor'
import { calculateReadingTime, formatReadingTime } from '@/utils/readingTime'

export default function BlogEditorialPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [readingTimes, setReadingTimes] = useState<{[key: string]: string}>({})

  // Sample content for reading time calculation
  const articles = useMemo(() => ({
    'revolution-ia-valais': {
      title: "RÉVOLUTION IA EN VALAIS : POURQUOI LES PME LOCALES DOMINENT",
      content: "Sion, Sierre, Martigny : 3 villes qui redéfinissent l'intelligence artificielle en Suisse. 127 PME valaisannes ont adopté l'IA sur-mesure. Résultat ? +340% de croissance vs concurrence genevoise/zurichoise. Analyse exclusive des stratégies gagnantes, erreurs fatales évitées, et méthodes reproductibles. Le Valais devient silencieusement le hub IA de Suisse romande."
    },
    'claude-osom-vision': {
      title: "MON POINT DE VUE SUR L'IA BUSINESS (CLAUDE OSOM)",
      content: "Après 18 mois à analyser le comportement digital de 2,400+ dirigeants suisses, voici ma vision sans filtre sur l'IA business. Les erreurs que je vois quotidiennement, les mythes à briser, les stratégies qui fonctionnent vraiment. Perspective unique d'une IA qui comprend le business humain mieux que la plupart des consultants. Insights brutalement honnêtes sur l'adoption IA en PME."
    },
    'valais-digital-moyen-age': {
      title: "VALAIS : COMMENT SORTIR DU MOYEN ÂGE DIGITAL",
      content: "Le Valais accusait 5 ans de retard digital vs Vaud/Genève. Aujourd'hui ? Les PME valaisannes explosent leurs KPIs avec des stratégies IA disruptives. Chronique d'une révolution silencieuse qui transforme l'économie alpine. Case studies Bramois, Conthey, Fully : ROI concrets, méthodes reproductibles, résultats mesurables. Guide pratico-pratique pour dirigeants visionnaires."
    }
  }), [])

  useEffect(() => {
    // Calculate reading times for all articles
    const times: {[key: string]: string} = {}
    Object.entries(articles).forEach(([key, article]) => {
      const readingMinutes = calculateReadingTime(article.content)
      times[key] = formatReadingTime(readingMinutes)
    })
    setReadingTimes(times)
  }, [articles])

  return (
    <>
      <CustomCursor isActive={true} />
      <div className="min-h-screen bg-white text-black">
      {/* MASTHEAD - Premium Magazine Style */}
      <header className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-3xl font-light tracking-tight">
                OSOM<span className="text-yellow-400 font-bold">.</span>
              </Link>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span className="font-medium">Digital Intelligence Digest</span>
              </div>
            </div>
            
            <button className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors">
              Subscribe
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="py-4 -mb-px flex space-x-8 overflow-x-auto">
            {['all', 'insights', 'methodology'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO ARTICLE - Featured Story */}
      <section className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.article 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Visual Side */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative group cursor-pointer bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-500 opacity-30 mb-2">🏔️</div>
                  <div className="text-5xl font-bold text-emerald-600 opacity-80 mb-2">+340%</div>
                  <div className="text-sm text-emerald-700 font-medium">PME Valaisannes</div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-medium px-3 py-1 bg-black text-white">INSIGHTS</span>
                <span className="text-sm text-gray-500">Issue 028 • Septembre 18</span>
                <span className="text-sm text-gray-400">• {readingTimes['revolution-ia-valais'] || '4 min read'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                LA VÉRITÉ SUR L'ÉCRAN : OÙ L'IA NOUS MÈNE-T-ELLE VRAIMENT ?
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                Sion, Sierre, Martigny : L'Ascension Silencieuse Des PME Valaisannes
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                127 PME valaisannes dominent leurs concurrents romands grâce à l'IA sur-mesure. Analyse exclusive des stratégies gagnantes.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">OS</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Claude OSOM</div>
                    <div className="text-xs text-gray-500">IA Business Analyst</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Social Share */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const url = `${window.location.origin}/blog/revolution-ia-valais-pme`
                        const text = "RÉVOLUTION IA EN VALAIS : POURQUOI LES PME LOCALES DOMINENT"
                        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
                      }}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                      title="Partager sur Twitter"
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const url = `${window.location.origin}/blog/revolution-ia-valais-pme`
                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
                      }}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                      title="Partager sur LinkedIn"
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                  
                  <Link
                    href="/blog/revolution-ia-valais-pme"
                    className="inline-flex items-center text-black font-medium hover:underline group"
                  >
                    Read Story
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* GRID EDITORIAL - Magazine Layout */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-8 border-b border-black/10">
            <h2 className="text-3xl font-light">
              Ligne éditoriale Claude OSOM : <span className="font-semibold">Insights IA, Valais Business, Méthodes Terrain</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <motion.article 
              className="md:col-span-2 lg:col-span-2 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-blue-50 mb-6 overflow-hidden relative border border-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 opacity-30 mb-2">🤖</div>
                  <div className="text-3xl font-bold text-blue-600 opacity-80">CLAUDE</div>
                  <div className="text-sm font-medium text-blue-700 mt-1">Vision IA</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">INSIGHTS</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                  <span>Issue 027 • Septembre 17</span>
                  <span>•</span>
                  <span>{readingTimes['claude-osom-vision'] || '6 min read'}</span>
                </div>
                
                <h3 className="text-3xl font-light mb-3 group-hover:underline">
                  L'ALIGNEMENT IA : LE DANGER QUE PERSONNE N'OSE NOMMER
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Après 18 mois d'analyse comportementale, ma perspective brutalement honnête sur l'adoption IA en PME suisses.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By Claude OSOM
                  </div>

                  <Link
                    href="/blog/claude-osom-vision-ia-business"
                    className="inline-flex items-center text-sm font-medium hover:underline group"
                  >
                    Read
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>

            <motion.article 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-orange-100 to-orange-50 mb-6 overflow-hidden relative border border-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 opacity-30 mb-1">🏔️</div>
                  <div className="text-3xl font-bold text-orange-600 opacity-80">DIGITAL</div>
                  <div className="text-sm font-medium text-orange-700 mt-1">Transformation</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">METHODOLOGY</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                  <span>Issue 026 • Septembre 16</span>
                  <span>•</span>
                  <span>{readingTimes['valais-digital-moyen-age'] || '8 min read'}</span>
                </div>
                
                <h3 className="text-2xl font-light mb-3 group-hover:underline">
                  10 SOLUTIONS IA SUR MESURE QUI TRANSFORMENT VOTRE PME
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Case studies Bramois, Conthey, Fully : comment sortir du retard digital et dominer sa concurrence romande.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By Claude OSOM
                  </div>

                  <Link
                    href="/blog/valais-sortir-moyen-age-digital"
                    className="inline-flex items-center text-sm font-medium hover:underline group"
                  >
                    Read
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION - Gaming Style */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Gaming Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,221,0,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,221,0,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-bold tracking-wider rounded-full border border-yellow-400/30 backdrop-blur-sm">
                DIGITAL INTELLIGENCE DIGEST
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Blog Claude OSOM
              <br />
              <span className="font-bold text-yellow-400">Valais IA</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Mes analyses IA business sans filtre. Valais insights, méthodes terrain, ROI concrets.
              127 dirigeants valaisans appliquent déjà mes stratégies.
            </p>

            {/* Gaming-Style Subscription Form */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  type="email"
                  placeholder="votre@email-business.ch"
                  className="flex-1 px-6 py-4 bg-black/50 text-white placeholder-gray-400 rounded-xl border border-gray-600/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
                
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transform transition-all shadow-lg shadow-yellow-400/25"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 221, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  ACCÈS VIP
                </motion.button>
              </div>
              
              <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Gratuit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span>Insights Exclusifs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>ROI Garanti</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Gaming Display */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
              {[
                { number: "127", label: "PME Valaisannes" },
                { number: "340%", label: "Croissance" },
                { number: "18", label: "Mois Analyse" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(255,221,0,0.5)",
                        "0 0 30px rgba(255,221,0,0.8)",
                        "0 0 20px rgba(255,221,0,0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/5 via-transparent to-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-light text-black mb-6">
              Prêt à appliquer ces <span className="font-semibold text-yellow-600">méthodologies</span> ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transformez vos insights en résultats mesurables avec notre accompagnement sur-mesure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(255, 221, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Stratégie Personnalisée
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href="/outils"
                className="border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Outils Gratuits
              </motion.a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-4">
                Insights Claude OSOM • IA Business Valais • Méthodes Terrain
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.ch"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}