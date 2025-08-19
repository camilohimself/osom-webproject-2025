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
    'verite-ecran': {
      title: "La Vérité Sur L'Écran : Où L'IA Nous Mène-t-Elle Vraiment ?",
      content: "8.2h/jour devant l'écran. 67% des dirigeants se sentent dépendants. L'enquête exclusive OSOM révèle des chiffres alarmants sur notre relation à la technologie. Mais l'IA peut-elle nous libérer ? Entre addiction digitale et libération technologique, découvrez les révélations que personne n'ose dire. Nos 2,847 dirigeants suisses témoignent d'une réalité troublante : plus nous digitalisons, plus nous perdons en humanité. Pourtant, 73% croient que l'IA représente la solution. Paradoxe ou vérité ? Notre laboratoire de psychologie digitale a analysé 200 jours de données comportementales pour vous révéler la vérité sur l'écran et la place réelle de l'intelligence artificielle dans nos vies."
    },
    'ia-alignement': {
      title: "L'Alignement IA : Le Danger Que Personne N'Ose Nommer",
      content: "73% des PME suisses ignorent les vrais risques d'alignement IA. Ce que Microsoft, Google et OpenAI ne vous disent pas. Révélations explosives sur les dangers cachés de l'intelligence artificielle pour votre business. L'alignement IA n'est pas un concept théorique - c'est une réalité business qui impacte déjà vos revenus. Notre division recherche OSOM a identifié 5 dangers critiques que 73% des dirigeants découvriront trop tard. Entre manipulation algorithmique et dépendance technologique, découvrez pourquoi votre stratégie IA actuelle pourrait détruire votre entreprise. Analyse sans concession des vrais risques et solutions concrètes pour PME suisses."
    },
    'ia-solutions': {
      title: "10 Solutions IA Sur Mesure Qui Transforment Votre PME", 
      content: "Dashboard prédictif, automation intelligente, CRM révolutionnaire... Découvrez les 10 solutions IA personnalisées qui révolutionnent 156 PME suisses. ROI garanti à vie, sur mesure, avec accompagnement. De la simple automatisation aux systèmes prédictifs avancés, notre arsenal de solutions IA transforme radicalement les performances business. Timer intelligent qui optimise votre productivité, dashboard qui prédit vos ventes, CRM qui convertit automatiquement vos prospects... Chaque solution est calibrée sur votre secteur d'activité et vos objectifs spécifiques. 47K CHF d'économies moyennes, 340% d'efficacité décisionnelle, 280% d'augmentation du chiffre d'affaires. Guide exclusif avec check-lists pratico-pratiques et méthodologie éprouvée sur 156 entreprises suisses."
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
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative group cursor-pointer bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-blue-400 opacity-20 mb-4">8.2h</div>
                  <div className="text-sm text-blue-600">Temps écran quotidien</div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-medium px-3 py-1 bg-black text-white">INSIGHTS</span>
                <span className="text-sm text-gray-500">Issue 027 • January 18</span>
                <span className="text-sm text-gray-400">• {readingTimes['verite-ecran'] || '3 min read'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                La Vérité Sur L'Écran : Où L'IA Nous Mène-t-Elle Vraiment ?
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                8.2h/Jour Devant L'Écran. Révélation Choc Sur Notre Dépendance
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Enquête exclusive auprès de 2,847 dirigeants suisses. 67% se sentent dépendants, mais l'IA peut-elle encore nous libérer ?
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">OS</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">OSOM Digital Psychology Lab</div>
                    <div className="text-xs text-gray-500">Behavioural Tech</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Social Share */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const url = `${window.location.origin}/blog/verite-ecran-place-ia`
                        const text = "La Vérité Sur L'Écran : Où L'IA Nous Mène-t-Elle Vraiment ?"
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
                        const url = `${window.location.origin}/blog/verite-ecran-place-ia`
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
                    href="/blog/verite-ecran-place-ia"
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
              Ligne éditoriale : <span className="font-semibold">méthodologie, cas concrets suisses, check-lists pratico-pratiques</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <motion.article 
              className="md:col-span-2 lg:col-span-2 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-red-100 to-red-50 mb-6 overflow-hidden relative border border-red-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-400 opacity-20">73%</div>
                  <div className="text-sm font-medium text-red-600 mt-2">PME à risque</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">INSIGHTS</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                  <span>Issue 026 • January 20</span>
                  <span>•</span>
                  <span>{readingTimes['ia-alignement'] || '8 min read'}</span>
                </div>
                
                <h3 className="text-3xl font-light mb-3 group-hover:underline">
                  L'Alignement IA : Le Danger Que Personne N'Ose Nommer
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Révélations explosives sur les vrais risques d'alignement IA pour PME suisses. 73% découvriront ces dangers trop tard.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By OSOM Research Division
                  </div>
                  
                  <Link 
                    href="/blog/ia-alignement-dangers-business"
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
              <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-purple-50 mb-6 overflow-hidden relative border border-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-purple-400 opacity-20">47K</div>
                  <div className="text-sm font-medium text-purple-600 mt-2">CHF Économies</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">METHODOLOGY</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                  <span>Issue 025 • January 19</span>
                  <span>•</span>
                  <span>{readingTimes['ia-solutions'] || '12 min read'}</span>
                </div>
                
                <h3 className="text-2xl font-light mb-3 group-hover:underline">
                  10 Solutions IA Sur Mesure Qui Transforment Votre PME
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Dashboard prédictif, automation intelligente, CRM révolutionnaire... Découvrez pourquoi 156 dirigeants suisses ont choisi notre révolution IA.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By OSOM Solutions IA
                  </div>
                  
                  <Link 
                    href="/blog/ia-sur-mesure-10-solutions-pme"
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
              Rejoignez L'Élite
              <br />
              <span className="font-bold text-yellow-400">IA Business</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Stratégies révolutionnaires, cas concrets suisses, ROI mesurable. 
              2,847 dirigeants reçoivent déjà nos insights exclusifs.
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
                { number: "2,847", label: "Dirigeants" },
                { number: "156%", label: "ROI Moyen" },
                { number: "24h", label: "Réponse" }
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
      </div>
    </>
  )
}