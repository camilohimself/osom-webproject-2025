'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function AgencePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  // Parallax transforms créatifs
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const videoScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8])
  const videoRotate = useTransform(scrollYProgress, [0, 1], [0, 5])
  
  // Mouse tracking pour interactions premium
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Auto-play vidéo avec gestion d'état améliorée
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      
      // Configuration optimale pour la compatibilité
      video.muted = true
      video.playsInline = true
      video.autoplay = true
      video.loop = true
      
      // Tentative de lecture avec gestion d'erreur robuste
      const attemptPlay = async () => {
        try {
          await video.play()
          setIsPlaying(true)
          setVideoLoaded(true)
        } catch (error) {
          console.log('Video autoplay blocked, will play on user interaction')
          setIsPlaying(false)
        }
      }
      
      // Écouter l'événement canplay pour s'assurer que la vidéo est prête
      video.addEventListener('canplay', attemptPlay)
      video.addEventListener('loadeddata', () => setVideoLoaded(true))
      
      return () => {
        video.removeEventListener('canplay', attemptPlay)
        video.removeEventListener('loadeddata', () => setVideoLoaded(true))
      }
    }
  }, [])

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

  const timeline = [
    {
      year: '2019',
      title: 'Les Débuts',
      description: 'Premiers projets web avec une approche artisanale. Focus sur la qualité technique et l\'expérience utilisateur.',
      icon: '',
      color: 'cyan'
    },
    {
      year: '2021',
      title: 'Certification Data',
      description: 'Formation Google Data Analyst. Pivot vers une approche 100% data-driven avec tracking avancé GA4.',
      icon: '',
      color: 'green'
    },
    {
      year: '2023',
      title: 'Brevet Fédéral',
      description: 'Obtention du Brevet Fédéral en Marketing SAWI. Expertise reconnue officiellement par la Confédération.',
      icon: '',
      color: 'yellow'
    },
    {
      year: '2024',
      title: 'Révolution ROI',
      description: 'Culture Peinture : 8x plus efficace que les ads. Naissance de la méthodologie OSOM.',
      icon: '',
      color: 'purple'
    },
    {
      year: '2025',
      title: 'OSOM Today',
      description: '200+ projets, méthodologie éprouvée, résultats transparents. L\'agence qui mesure tout.',
      icon: '',
      color: 'pink'
    }
  ]

  const stats = [
    { number: '200+', label: 'Projets Réalisés', icon: '' },
    { number: '14x', label: 'ROI Maximum', icon: '' },
    { number: '5+', label: 'Années d\'Expertise', icon: '' },
    { number: '400+', label: 'Jours de Données', icon: '' },
    { number: '100%', label: 'Satisfaction Client', icon: '' },
    { number: '68.6%', label: 'Engagement SEO', icon: '' }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      
      {/* CURSEUR MAGNÉTIQUE CRÉATIF - Z-index réduit pour éviter masquage */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-30 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: hoveredCard ? 1.5 : 1,
          backgroundColor: hoveredCard ? "#FFDD00" : "#FFFFFF"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-60" />
      </motion.div>
      
      {/* HERO CINÉMATOGRAPHIQUE RÉVOLUTIONNAIRE */}
      <section className="h-screen relative overflow-hidden">
        
        {/* VIDÉO OSOM MOTION - Integration Directe Optimisée */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            scale: videoScale,
            rotateX: videoRotate 
          }}
        >
          {/* Container vidéo avec fallback */}
          <div className="relative w-full h-full bg-black">
            <motion.video
              ref={videoRef}
              className="w-full h-full object-cover"
              style={{ 
                filter: "brightness(0.6) contrast(1.1) saturate(1.05)",
                transition: "filter 0.3s ease"
              }}
              animate={{
                // Twist Effect: Léger mouvement de rotation et zoom cyclique
                scale: [1, 1.03, 1],
                rotateZ: [0, 0.5, 0, -0.5, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              preload="metadata"
              webkit-playsinline="true"
            >
              <source src="/osom-motion.MP4" type="video/mp4" />
            </motion.video>
            
            {/* Fallback pour navigateurs non compatibles - Visible uniquement si vidéo échoue */}
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-purple-400/10 to-black flex items-center justify-center">
                <div className="text-white text-center max-w-md">
                  <h2 className="text-4xl font-bold mb-4">OSOM</h2>
                  <p className="text-lg opacity-80">Agence digitale premium</p>
                </div>
              </div>
            )}
            
            {/* Loading indicator stylé */}
            {!videoLoaded && (
              <motion.div 
                className="absolute inset-0 bg-black flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: videoLoaded ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            )}
          </div>
          
          {/* Overlay gradient optimisé */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          {/* Twist Effect: Overlay dynamique avec vagues de couleur */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-400/5"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(255, 221, 0, 0.05), transparent, rgba(168, 85, 247, 0.05))",
                "linear-gradient(135deg, rgba(168, 85, 247, 0.08), transparent, rgba(16, 185, 129, 0.05))",
                "linear-gradient(180deg, rgba(16, 185, 129, 0.05), transparent, rgba(255, 221, 0, 0.08))",
                "linear-gradient(225deg, rgba(255, 221, 0, 0.05), transparent, rgba(168, 85, 247, 0.05))",
                "linear-gradient(270deg, rgba(168, 85, 247, 0.05), transparent, rgba(255, 221, 0, 0.05))"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Twist Effect: Particules magnétiques qui suivent la vidéo - Optimisées */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`video-particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-yellow-400/40 rounded-full"
                style={{
                  left: `${25 + (i * 10)}%`,
                  top: `${35 + (i * 6)}%`,
                }}
                animate={{
                  x: [0, 15, -10, 8, 0],
                  y: [0, -20, 12, -8, 0],
                  opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
                  scale: [1, 1.3, 0.9, 1.1, 1]
                }}
                transition={{
                  duration: 6 + (i * 0.4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* PARTICULES INTERACTIVES AVANCÉES - Réduites et contrôlées */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: (mousePosition.x - 960) * 0.01 * (i % 5),
                y: (mousePosition.y - 540) * 0.01 * (i % 3),
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                x: { type: "spring", stiffness: 50, damping: 50 },
                y: { type: "spring", stiffness: 50, damping: 50 },
                opacity: { duration: 3 + (i % 3), repeat: Infinity },
                scale: { duration: 2 + (i % 2), repeat: Infinity, delay: i * 0.1 }
              }}
            />
          ))}
        </div>

        {/* TYPOGRAPHY CINÉMATOGRAPHIQUE PARALLAX */}
        <motion.div 
          className="absolute inset-0 z-15 flex items-center justify-center"
          style={{ 
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY 
          }}
        >
          <div className="text-center max-w-6xl mx-auto px-4">
            
            {/* Badge premium animé */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-400 mr-4"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase">
                CINEMATIC AGENCY EXPERIENCE
              </span>
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-400 ml-4"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
            
            {/* Titre OSOM dramatique */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-8xl md:text-9xl lg:text-[12rem] font-light leading-none"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 50px rgba(255, 221, 0, 0.8)"
                }}
              >
                <span className="text-white/90">WE ARE </span>
                <motion.span 
                  className="text-yellow-400 font-black relative inline-block"
                  animate={{ 
                    textShadow: [
                      '0 0 20px #ffd507',
                      '0 0 60px #ffd507, 0 0 100px #ffd507',
                      '0 0 20px #ffd507'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  OSOM
                  {/* Effet de scan */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ 
                      duration: 2,
                      delay: 1.5,
                      repeat: Infinity, 
                      repeatDelay: 5 
                    }}
                  />
                </motion.span>
              </motion.h1>
            </motion.div>
            
            {/* Sous-titre dynamique */}
            <motion.p 
              className="text-2xl md:text-3xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              L'agence qui transforme les{' '}
              <motion.span 
                className="text-yellow-400 font-bold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                données
              </motion.span>
              {' '}en{' '}
              <motion.span 
                className="text-green-400 font-bold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                résultats extraordinaires
              </motion.span>
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
                  className="bg-yellow-400 text-black px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:bg-yellow-300 relative overflow-hidden group"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  onMouseEnter={() => setHoveredCard('cta-primary')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <span className="relative z-10">Révolutionner Mon ROI</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
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
                  onMouseEnter={() => setHoveredCard('cta-secondary')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  Découvrir Notre Vision
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR CRÉATIF */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-25"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm tracking-wider">SCROLL TO EXPLORE</span>
            <motion.div 
              className="w-6 h-10 border-2 border-white/40 rounded-full relative"
              whileHover={{ borderColor: "#FFDD00" }}
            >
              <motion.div
                className="w-1 h-3 bg-yellow-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                animate={{ 
                  y: [0, 16, 0],
                  opacity: [1, 0, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* SECTION VIDEO SHOWCASE IMMERSIVE */}
      <section id="video-showcase" className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          {/* Header avec animation révélatrice */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-purple-400 mr-3"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-purple-400 text-sm font-medium tracking-[0.15em] uppercase">
                NOTRE VISION EN MOUVEMENT
              </span>
              <motion.div 
                className="w-2 h-2 rounded-full bg-purple-400 ml-3"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              L'innovation en{' '}
              <motion.span 
                className="text-purple-400 font-bold relative inline-block"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 30px rgba(168, 85, 247, 0.8)"
                }}
              >
                mouvement
                {/* Particules autour du mot */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Showcase Video Directement Intégré */}
          <motion.div
            className="relative mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Video Showcase avec effet morphing */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onMouseEnter={() => setHoveredCard('video-showcase')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Éclairage dynamique */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-purple-400/10 via-yellow-400/15 to-green-400/10 rounded-3xl blur-2xl"
                animate={{
                  opacity: hoveredCard === 'video-showcase' ? 0.8 : 0.3,
                  scale: hoveredCard === 'video-showcase' ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Container principal minimaliste */}
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                
                {/* Video direct et centré */}
                <div className="relative aspect-video">
                  <motion.video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ 
                      filter: hoveredCard === 'video-showcase'
                        ? "brightness(1.2) contrast(1.15) saturate(1.1) hue-rotate(10deg)" 
                        : "brightness(1.0) contrast(1.05) saturate(1.0)"
                    }}
                    animate={{
                      scale: hoveredCard === 'video-showcase' ? 1.08 : 1.02,
                      // Twist Effect: Rotation subtile continue
                      rotateZ: hoveredCard === 'video-showcase' ? [0, 1, -1, 0] : [0, 0.3, 0],
                      // Twist Effect: Léger effet de perspective
                      rotateY: hoveredCard === 'video-showcase' ? [0, 2, -2, 0] : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.3 },
                      rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <source src="/osom-motion.MP4" type="video/mp4" />
                  </motion.video>
                  
                  {/* Twist Effect: Overlay interactif avec vagues de lumière */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: hoveredCard === 'video-showcase' ? [
                        "radial-gradient(circle at 30% 40%, rgba(255, 221, 0, 0.15), transparent 50%)",
                        "radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.15), transparent 50%)",
                        "radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.15), transparent 50%)",
                        "radial-gradient(circle at 30% 40%, rgba(255, 221, 0, 0.15), transparent 50%)"
                      ] : [
                        "radial-gradient(circle at 50% 50%, rgba(255, 221, 0, 0.05), transparent 70%)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Twist Effect: Scan laser animé */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255, 221, 0, 0.3), transparent)",
                      width: "2px"
                    }}
                    animate={{
                      x: ["-10px", "100vw"],
                      opacity: hoveredCard === 'video-showcase' ? [0, 1, 0] : 0
                    }}
                    transition={{
                      x: { duration: 2, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Badge flottant minimaliste */}
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-yellow-400/30">
                      <span className="text-yellow-400 text-xs font-medium tracking-wider">
                        VISION DIRECTE
                      </span>
                    </div>
                  </motion.div>
                  
                  {/* Titre intégré dans la vidéo */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                      <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        OSOM en Mouvement
                      </h3>
                      <p className="text-white/80 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Notre créativité, votre succès - directement visible
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
            </motion.div>
          </motion.div>

          {/* Stats Premium Animées */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, staggerChildren: 0.1 }}
          >
            {stats.slice(0, 4).map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                onMouseEnter={() => setHoveredCard(`stat-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-yellow-400/50 transition-all duration-500"
                  animate={hoveredCard === `stat-${index}` ? {
                    background: "linear-gradient(135deg, rgba(255, 221, 0, 0.1), rgba(255, 221, 0, 0.05), transparent)"
                  } : {}}
                >
                  <motion.div 
                    className="text-5xl font-bold text-yellow-400 mb-3"
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                    animate={hoveredCard === `stat-${index}` ? {
                      scale: 1.2,
                      textShadow: "0 0 20px rgba(255, 221, 0, 0.8)"
                    } : {
                      scale: 1,
                      textShadow: "none"
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 font-medium" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {stat.label}
                  </div>
                  
                  {/* Animated progress bar */}
                  <motion.div
                    className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, delay: index * 0.2 + 1 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALEURS SECTION - INTERACTIONS 3D RÉVOLUTIONNAIRES */}
      <section className="py-32 bg-black relative overflow-hidden">
        
        {/* Background liquide animé */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 221, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 221, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(255, 221, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 221, 0, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          
          {/* Header avec morphing text */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full bg-purple-400 mr-4"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 360, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="text-purple-400 text-sm font-medium tracking-[0.2em] uppercase">
                NOS SUPER-POUVOIRS
              </span>
              <motion.div 
                className="w-3 h-3 rounded-full bg-purple-400 ml-4"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [360, 0, 360]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Ce qui nous rend{' '}
              <motion.span 
                className="text-purple-400 font-black relative inline-block"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 40px rgba(168, 85, 247, 0.8)",
                }}
                onHoverStart={() => setHoveredCard('title-unique')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                UNIQUES
                {/* Aura énergétique */}
                <motion.div
                  className="absolute -inset-4 bg-purple-400/20 rounded-full blur-xl"
                  animate={hoveredCard === 'title-unique' ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3]
                  } : {
                    scale: 1,
                    opacity: 0
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Cards 3D Ultra-Premium */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={valeur.id}
                className="relative group cursor-pointer"
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateX: 45,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -20,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  z: 50
                }}
                onHoverStart={() => setHoveredCard(valeur.id)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{ perspective: "1000px" }}
              >
                
                {/* Glow magnétique externe */}
                <motion.div
                  className={`absolute -inset-6 bg-gradient-to-r from-${valeur.color}-400/20 via-${valeur.color}-400/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100`}
                  animate={hoveredCard === valeur.id ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Card principale avec glass morphism */}
                <motion.div
                  className={`relative backdrop-blur-2xl border rounded-3xl p-10 overflow-hidden transition-all duration-700
                    ${hoveredCard === valeur.id 
                      ? `border-${valeur.color}-400/80 shadow-2xl shadow-${valeur.color}-400/20` 
                      : 'border-white/10 hover:border-white/30'
                    }
                    bg-gradient-to-br ${valeur.gradient} to-black/60`}
                  animate={hoveredCard === valeur.id ? {
                    background: `linear-gradient(135deg, var(--${valeur.color}-400) 0.05, transparent 50%)`
                  } : {}}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  
                  {/* Particules flottantes autour de la card */}
                  <AnimatePresence>
                    {hoveredCard === valeur.id && (
                      <>
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-${valeur.color}-400 rounded-full`}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              x: [0, (Math.random() - 0.5) * 100],
                              y: [0, (Math.random() - 0.5) * 100],
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                  
                  {/* Onde de choc au hover */}
                  <motion.div
                    className={`absolute inset-0 border-2 border-${valeur.color}-400/30 rounded-3xl`}
                    animate={hoveredCard === valeur.id ? {
                      scale: [1, 1.05, 1.1],
                      opacity: [0.5, 0.2, 0]
                    } : {
                      scale: 1,
                      opacity: 0
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    
                    {/* Icône créative animée */}
                    <motion.div 
                      className="mb-8 flex justify-center"
                      animate={hoveredCard === valeur.id ? { 
                        scale: 1.3, 
                        rotate: [0, 10, -10, 0],
                        y: [-5, -15, -5]
                      } : { 
                        scale: 1, 
                        rotate: 0,
                        y: 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br from-${valeur.color}-400/20 to-${valeur.color}-600/30 rounded-2xl flex items-center justify-center`}>
                        <motion.div
                          className={`text-4xl`}
                          animate={hoveredCard === valeur.id ? {
                            textShadow: `0 0 20px var(--${valeur.color}-400)`
                          } : {}}
                        >
                          {valeur.icon || '⚡'}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Titre avec effet de typing */}
                    <motion.h3 
                      className="text-3xl font-light text-white mb-4 text-center" 
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                      animate={hoveredCard === valeur.id ? {
                        scale: 1.05,
                        color: `var(--${valeur.color}-400)`
                      } : {
                        scale: 1,
                        color: "#ffffff"
                      }}
                    >
                      {valeur.title}
                    </motion.h3>
                    
                    {/* Sous-titre pulsant */}
                    <motion.p 
                      className={`text-${valeur.color}-400 font-semibold mb-6 text-center text-lg`} 
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                      animate={hoveredCard === valeur.id ? {
                        scale: 1.1,
                        opacity: [0.7, 1, 0.7]
                      } : {
                        scale: 1,
                        opacity: 1
                      }}
                      transition={{ 
                        scale: { type: "spring", stiffness: 300 },
                        opacity: { duration: 2, repeat: Infinity }
                      }}
                    >
                      {valeur.subtitle}
                    </motion.p>
                    
                    {/* Description avec reveal progressif */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-center"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                      animate={hoveredCard === valeur.id ? {
                        opacity: 1,
                        y: 0
                      } : {
                        opacity: 0.8,
                        y: 5
                      }}
                    >
                      {valeur.description}
                    </motion.p>
                    
                    {/* Barre de progression dynamique */}
                    <motion.div
                      className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 1 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r from-${valeur.color}-400 to-${valeur.color}-600 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, delay: index * 0.3 + 1.5 }}
                        animate={hoveredCard === valeur.id ? {
                          background: `linear-gradient(90deg, var(--${valeur.color}-400), var(--${valeur.color}-600), var(--${valeur.color}-400))`
                        } : {}}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Notre Histoire */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-wide">NOTRE HISTOIRE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              5 ans d'<span className="text-cyan-400 font-bold">innovation</span> continue
            </h2>
          </motion.div>

          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-yellow-400 to-purple-400"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-${item.color}-400/10 to-black/40`}>
                      <div className={`text-${item.color}-400 text-sm font-medium mb-2`}>{item.year}</div>
                      <h3 className="text-xl font-light text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Point central avec icône */}
                  <motion.div 
                    className={`w-16 h-16 bg-${item.color}-400 rounded-full flex items-center justify-center z-10 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon && <span className="text-2xl">{item.icon}</span>}
                  </motion.div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Certifiée */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">EXPERTISE RECONNUE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Certifications <span className="text-green-400 font-bold">officielles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Certifications */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="backdrop-blur-sm border border-green-400/30 rounded-3xl p-8 bg-gradient-to-br from-green-400/10 to-black/60">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl"></span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Brevet Fédéral Marketing
                    </h3>
                    <p className="text-green-400 font-medium">SAWI • Confédération Suisse</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Formation officielle en marketing stratégique et opérationnel. Expertise reconnue 
                  par la Confédération suisse.
                </p>
              </div>

              <div className="backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 bg-gradient-to-br from-cyan-400/10 to-black/60">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl"></span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Google Data Analyst
                    </h3>
                    <p className="text-cyan-400 font-medium">Google • Certification Professionnelle</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Maîtrise GA4, tracking avancé, analyse de données et data-driven marketing. 
                  Expertise technique certifiée.
                </p>
              </div>
            </motion.div>

            {/* Philosophie */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm border border-white/10 rounded-3xl p-12 bg-gradient-to-br from-white/5 to-black/40"
            >
              <h3 className="text-3xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Notre <span className="text-yellow-400 font-bold">Philosophie</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Mesurer pour Optimiser</h4>
                    <p className="text-gray-300 text-sm">Chaque action doit être trackable et mesurable. Pas de place pour l'approximation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Transparence Absolue</h4>
                    <p className="text-gray-300 text-sm">Nos clients voient exactement d'où viennent leurs résultats. Pas de magie, que de la science.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Innovation Continue</h4>
                    <p className="text-gray-300 text-sm">Toujours à la pointe. Nous testons les nouvelles technologies avant qu'elles deviennent mainstream.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final Creative */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-green-400/5 to-purple-400/5"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-50">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm border border-white/10 rounded-3xl p-16 bg-gradient-to-br from-white/5 to-black/40"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-4 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">PRÊT POUR L'EXTRAORDINAIRE ?</span>
              <div className="w-3 h-3 rounded-full bg-yellow-400 ml-4 animate-pulse"></div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Créons ensemble votre<br />
              prochain <span className="text-yellow-400 font-bold">14x ROI</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Une question ? Un projet ? Une envie de révolutionner votre approche digitale ? 
              Discutons de votre <span className="text-yellow-400 font-semibold">transformation OSOM</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-10 py-5 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-yellow-400/25 hover:scale-105"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Démarrons votre projet
              </Link>
              <Link
                href="/calculator"
                className="border-2 border-white/30 text-white px-10 py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm text-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Calculer votre ROI
              </Link>
              <Link
                href="/blog"
                className="border-2 border-purple-400/30 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-medium backdrop-blur-sm text-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Voir nos case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}