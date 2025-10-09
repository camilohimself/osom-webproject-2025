'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

// Import des jeux (client-side only)
const PongGame = dynamic(() => import('@/components/gaming/PongGame'), {
  ssr: false,
  loading: () => <div className="h-96 bg-black/50 rounded-2xl border border-green-500/30 animate-pulse flex items-center justify-center"><span className="text-green-400 font-mono">CHARGEMENT SYSTÈME OSOM...</span></div>
})

const TicTacToeGame = dynamic(() => import('@/components/gaming/TicTacToeGame'), {
  ssr: false,
  loading: () => <div className="h-96 bg-black/50 rounded-2xl border border-purple-500/30 animate-pulse flex items-center justify-center"><span className="text-purple-400 font-mono">INICIANDO...</span></div>
})

export default function AgencePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const valeurs = [
    {
      id: 'data-driven',
      icon: '',
      title: 'Data-Driven',
      subtitle: 'Zéro intuition, que des faits',
      description: 'Chaque décision basée sur des données vérifiables. 400+ jours d\'analyses GA4 ne mentent jamais.',
      color: 'yellow',
      gradient: 'from-yellow-400/20 to-yellow-600/10'
    },
    {
      id: 'transparence',
      icon: '',
      title: 'Transparence Totale',
      subtitle: 'ROI visible et mesurable',
      description: '8x plus efficace que la publicité payante. Nos résultats parlent d\'eux-mêmes, preuves à l\'appui.',
      color: 'green',
      gradient: 'from-green-400/20 to-green-600/10'
    },
    {
      id: 'innovation',
      icon: '',
      title: 'Innovation Continue',
      subtitle: 'Technologies premium',
      description: 'Next.js, IA, tracking avancé. Nous adoptons les meilleures technologies avant qu\'elles deviennent mainstream.',
      color: 'purple',
      gradient: 'from-purple-400/20 to-purple-600/10'
    }
  ]


  return (
    <div className="min-h-screen bg-black relative">

      {/* Progress Bars Desktop Only */}
      <div className="hidden lg:block">
        <ScrollProgressIndicator />
      </div>

      {/* MOBILE VERSION LÉGÈRE */}
      <div className="lg:hidden">
        {/* Mobile Hero Ultra Léger */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-lg mx-auto">
            <div className="mb-6">
              <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">
                AGENCE DIGITALE VALAIS
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6">
              WE ARE <span className="text-yellow-400">OSOM</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              <span className="text-yellow-400 font-semibold">Créatifs mesurables</span> : on raconte et on prouve.
            </p>

            <div className="space-y-4">
              <a
                href="/contact"
                className="block w-full bg-yellow-400 text-black py-4 px-6 rounded-xl font-bold text-lg text-center"
              >
                Consultation gratuite 30 min
              </a>

              <a
                href="tel:+41791289549"
                className="block w-full border-2 border-yellow-400 text-yellow-400 py-4 px-6 rounded-xl font-medium text-lg text-center"
              >
                +41 79 128 95 49
              </a>
            </div>
          </div>
        </section>

        {/* Valeurs Mobile Condensées */}
        <section className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Nos <span className="text-purple-400">valeurs</span>
            </h2>

            <div className="space-y-6">
              {valeurs.map((valeur, index) => (
                <div key={valeur.id} className={`bg-gray-900/50 rounded-xl p-6 border border-${valeur.color}-400/30`}>
                  <h3 className={`text-lg font-bold text-${valeur.color}-400 mb-2`}>{valeur.title}</h3>
                  <p className="text-gray-300 text-sm">{valeur.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gaming Zone Mobile - MORPION SEULEMENT */}
        <section className="py-16 px-4">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Testez notre <span className="text-purple-400">IA</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Morpion contre algorithme minimax
            </p>
            <TicTacToeGame />
          </div>
        </section>

        {/* Stats Mobile */}
        <section className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
                <div className="text-gray-300 text-sm">Projets</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl font-bold text-green-400 mb-1">3+</div>
                <div className="text-gray-300 text-sm">Années</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Mobile Final */}
        <section className="py-16 px-4">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Prêt pour l'extraordinaire ?
            </h3>
            <p className="text-gray-300 mb-6">
              Une question ? Un projet ?
            </p>
            <div className="space-y-3">
              <a
                href="/contact"
                className="block w-full bg-yellow-400 text-black py-4 px-6 rounded-xl font-bold"
              >
                Démarrons votre projet
              </a>
              <a
                href="/outils"
                className="block w-full border border-white/30 text-white py-4 px-6 rounded-xl"
              >
                Calculer votre ROI
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* DESKTOP VERSION COMPLÈTE */}
      <div className="hidden lg:block">
        {/* HERO SIMPLIFIÉ - Sans vidéo background */}
        <section className="h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* CONTENU HERO */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4">
            
            {/* Badge simple */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase">
                AGENCE DIGITALE PREMIUM
              </span>
            </motion.div>
            
            {/* Titre OSOM dramatique */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-light leading-none"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 50px rgba(255, 221, 0, 0.8)"
                }}
              >
                <span className="text-white/90">WE ARE </span>
                <span className="text-yellow-400 font-black">
                  OSOM
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Sous-titre simple */}
            <motion.p
              className="text-2xl md:text-3xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-yellow-400 font-bold">Créatifs mesurables</span>: on raconte et on prouve.<br/>
              <span className="text-gray-300">Brevet fédéral marketing, certif. Google Data Analyst, 50+ projets.</span>
            </motion.p>

            {/* CTA Buttons Premium */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 221, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:bg-yellow-300"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  Consultation gratuite 30 min
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255, 221, 0, 0.8)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#video-showcase"
                  className="border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-medium text-xl hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  Voir nos réalisations
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR STATIQUE */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full relative">
              <div className="w-1 h-3 bg-yellow-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

      </section>

      {/* VIDÉO SHOWCASE - Click to Play */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">NOTRE VISION</span>
            <h2 className="text-4xl font-light text-white mt-4 mb-8">
              OSOM en <span className="text-yellow-400 font-bold">mouvement</span>
            </h2>
          </div>

          {/* Vidéo Click-to-Play */}
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
               onClick={() => {
                 if (videoRef.current) {
                   videoRef.current.play();
                   setIsVideoPlaying(true);
                 }
               }}>

            {/* Vidéo */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/osom-motion.MP4" type="video/mp4" />
            </video>

            {/* Overlay Click-to-Play */}
            {!isVideoPlaying && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-all duration-300">
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
                <p className="text-white font-medium text-lg">Cliquez pour voir OSOM motion</p>
                <p className="text-white/70 text-sm mt-1">Performance optimisée</p>
              </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION VALEURS SIMPLIFIÉE */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header simple */}
          <div className="text-center mb-20">
            <span className="text-purple-400 text-sm font-medium tracking-[0.15em] uppercase">
              NOS VALEURS
            </span>
            
            <h2 className="text-5xl md:text-6xl font-light text-white mt-4 mb-8 leading-tight">
              Ce qui nous rend <span className="text-purple-400 font-bold">uniques</span>
            </h2>
          </div>

          {/* Cards Valeurs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={valeur.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-light text-white mb-3">
                    {valeur.title}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-4">
                    {valeur.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION GAMING INTERACTIVE - OPTIMISÉE */}
      <section className="py-32 bg-black relative overflow-hidden" id="gaming-zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Gaming - Ultra Minimaliste */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-4 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              3 secondes pour comprendre <span className="text-cyan-400 font-bold">OSOM</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Essayez de battre notre IA. Spoiler : vous ne pouvez pas.
            </p>
          </div>

          {/* Gaming Zone Desktop - PONG */}
          <div className="hidden lg:block mb-12">
            <PongGame />
          </div>

          {/* Gaming Zone Mobile - MORPION */}
          <div className="lg:hidden mb-12">
            <TicTacToeGame />
          </div>

          {/* Impact Business - Après le jeu */}
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-cyan-500/30 max-w-3xl mx-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 font-medium text-sm tracking-wide uppercase">Résultat</span>
                </div>

                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="text-cyan-400 text-xl mt-1">✓</div>
                    <div>
                      <p className="text-white font-semibold text-lg">Notre IA réfléchit en 0.05 secondes</p>
                      <p className="text-gray-400 text-sm">Analyse instantanée, décisions optimales</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-cyan-400 text-xl mt-1">✓</div>
                    <div>
                      <p className="text-white font-semibold text-lg">Vos concurrents ne peuvent pas suivre</p>
                      <p className="text-gray-400 text-sm">Pendant qu'ils réfléchissent, vous agissez</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-cyan-400 text-xl mt-1">✓</div>
                    <div>
                      <p className="text-white font-semibold text-lg">Imaginez ça pour votre SEO, Analytics, Content</p>
                      <p className="text-gray-400 text-sm">Même précision, appliquée à votre croissance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                  <Link
                    href="/contact"
                    className="inline-block bg-cyan-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/20"
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  >
                    Mettre cette IA au service de mon business →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* TIMELINE ULTRA MINIMALISTE */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white">
              <span className="text-cyan-400">2019-2025</span> Evolution
            </h2>
          </div>

          <div className="flex justify-between items-center max-w-4xl mx-auto relative">
            {/* Ligne horizontale */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

            {/* Points clés uniquement */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-gray-400">2019</p>
              <p className="text-xs text-white font-medium">Début</p>
            </motion.div>

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-gray-400">2021</p>
              <p className="text-xs text-white font-medium">Data</p>
            </motion.div>

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-5 h-5 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-gray-400">2023</p>
              <p className="text-xs text-white font-medium">Brevet</p>
            </motion.div>

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-6 h-6 bg-purple-400 rounded-full mx-auto mb-2 animate-pulse"></div>
              <p className="text-xs text-gray-400">2025</p>
              <p className="text-xs text-white font-medium">OSOM</p>
            </motion.div>
          </div>

          {/* Résumé en une ligne */}
          <motion.p
            className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            De l'artisanat web au data-driven marketing. <span className="text-cyan-400">50+ projets</span>, <span className="text-yellow-400">certifications officielles</span>, <span className="text-purple-400">méthodologie éprouvée</span>.
          </motion.p>
        </div>
      </section>

      {/* CERTIFICATIONS SIMPLIFIÉES */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-medium tracking-wide uppercase">EXPERTISE RECONNUE</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-8 leading-tight">
              Certifications <span className="text-green-400 font-bold">officielles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-light text-white mb-2">
                Brevet Fédéral Marketing
              </h3>
              <p className="text-green-400 font-medium mb-4">SAWI • Confédération Suisse</p>
              <p className="text-gray-300 leading-relaxed">
                Formation officielle en marketing stratégique et opérationnel. Expertise reconnue par la Confédération suisse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-light text-white mb-2">
                Google Data Analyst
              </h3>
              <p className="text-cyan-400 font-medium mb-4">Google • Certification Professionnelle</p>
              <p className="text-gray-300 leading-relaxed">
                Maîtrise GA4, tracking avancé, analyse de données et data-driven marketing. Expertise technique certifiée.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA FINAL SIMPLE */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">PRÊT POUR L'EXTRAORDINAIRE ?</span>

            <h3 className="text-4xl md:text-5xl font-light text-white mt-4 mb-8 leading-tight">
              Créons ensemble votre prochain succès
            </h3>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Une question ? Un projet ? Discutons de votre transformation digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all font-bold"
              >
                Démarrons votre projet
              </Link>
              <Link
                href="/outils"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all"
              >
                Calculer votre ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* Fin Desktop Version */}

    </div>
  )
}