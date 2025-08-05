'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function BlogPage() {
  const articles = [
    {
      id: 'culture-peinture-14x-roi',
      title: 'Culture Peinture : 8x plus efficace que la publicité payante',
      excerpt: 'Comment une stratégie organique sur Facebook a généré 688 conversions vs 49 en publicité payante sur la même période.',
      category: 'Case Study',
      readTime: '5 min',
      date: '15 Janvier 2025',
      author: 'OSOM Team',
      image: '/blog/culture-peinture-case-study.jpg',
      tags: ['ROI', 'Organique', 'Facebook', 'Conversions'],
      featured: true,
      metrics: {
        conversions: 688,
        roi: '14x',
        periode: '6 mois'
      }
    },
    {
      id: 'artisane-lumiere-seo',
      title: 'Artisane de Lumière : 68.6% engagement SEO vs 44.6% trafic direct',
      excerpt: 'Analyse GA4 sur 200+ jours : pourquoi le trafic SEO génère un engagement 54% supérieur au trafic direct.',
      category: 'SEO Analysis',
      readTime: '4 min',
      date: '10 Janvier 2025',
      author: 'OSOM Team',
      image: '/blog/artisane-seo-analysis.jpg',
      tags: ['SEO', 'Engagement', 'GA4', 'Analyse'],
      featured: true,
      metrics: {
        engagement: '68.6%',
        amelioration: '+54%',
        donnees: '200+ jours'
      }
    },
    {
      id: 'tracking-invisible-roi',
      title: '14,171 sessions "Unassigned" récupérées : révéler le ROI invisible',
      excerpt: 'Comment un tracking avancé révèle la vraie performance de vos actions marketing et optimise votre attribution.',
      category: 'Data Analysis',
      readTime: '6 min',
      date: '5 Janvier 2025',
      author: 'OSOM Team',
      image: '/blog/tracking-invisible-roi.jpg',
      tags: ['Tracking', 'Attribution', 'GA4', 'ROI'],
      featured: false,
      metrics: {
        sessions: '14,171',
        attribution: 'Récupérée',
        impact: 'ROI visible'
      }
    }
  ]

  // Premium animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Premium Hero Section - Homepage Level */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Premium Gradient Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, #06b6d415, transparent 50%)",
              "radial-gradient(circle at 75% 75%, #06b6d420, transparent 50%)",
              "radial-gradient(circle at 25% 25%, #06b6d415, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#06B6D4" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#FFDD00" }}
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge with Pulse Animation */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-cyan-400 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                EXPERTISE DATA-DRIVEN • CASE STUDIES RÉELS
              </span>
            </motion.div>
            
            {/* TITRE CRÉATIF AUDACIEUX - Jeux Typographiques Blog */}
            <motion.div 
              className="mb-12 leading-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {/* Ligne 1: "Nos" - petite taille */}
              <motion.div
                className="text-xl md:text-2xl font-light text-gray-300 mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nos
              </motion.div>
              
              {/* Ligne 2: "INSIGHTS" - très grande taille cyan */}
              <motion.div
                className="text-7xl md:text-9xl font-black text-cyan-400 leading-none mb-4 relative"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                }}
              >
                INSIGHTS
                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ 
                    duration: 2, 
                    delay: 2,
                    repeat: Infinity, 
                    repeatDelay: 8 
                  }}
                />
              </motion.div>
              
              {/* Ligne 3: "transforment vos" - taille moyenne */}
              <motion.div
                className="text-3xl md:text-4xl font-light text-white mb-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                transforment vos
              </motion.div>
              
              {/* Ligne 4: "STRATÉGIES" - grande taille verte avec animation */}
              <motion.div
                className="text-6xl md:text-8xl font-bold text-green-400 leading-none relative"
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  color: "#10B981",
                  textShadow: "0 0 40px rgba(16, 185, 129, 0.6)"
                }}
              >
                STRATÉGIES
                {/* Particules créatives */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full"
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${30 + (i % 2) * 40}%`
                    }}
                    animate={{
                      y: [-5, -25, -5],
                      opacity: [0.3, 0.9, 0.3],
                      scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: 1.2 + i * 0.3
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Signature créative */}
              <motion.div
                className="text-sm md:text-base text-purple-400 font-medium mt-8 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <motion.div 
                  className="w-8 h-0.5 bg-purple-400 mr-3"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 1, delay: 1.6 }}
                />
                Data-Driven Stories × Real Impact
                <motion.div 
                  className="w-8 h-0.5 bg-purple-400 ml-3"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Enhanced Description */}
            <motion.p 
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transformons les investissements en 
              <span className="text-cyan-400 font-semibold">performances mesurables</span>.
              <br />
              <span className="text-yellow-400 font-semibold">688 conversions</span> vs 
              <span className="text-gray-400">49 paid ads</span> prouvées par GA4.
            </motion.p>
            
            {/* Premium Animated Stats Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { label: "400+", detail: "jours de données", color: "#FFDD00", icon: "", value: 400 },
                { label: "100%", detail: "case studies réels", color: "#10B981", icon: "", value: 100 },
                { label: "3", detail: "analyses GA4 vérifiées", color: "#8B5CF6", icon: "", value: 3 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl px-6 py-4 border transition-all duration-500 group cursor-pointer"
                  style={{ 
                    borderColor: `${stat.color}20`,
                    backgroundColor: 'transparent'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${stat.color}20`,
                    borderColor: `${stat.color}40`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <div className="flex items-center">
                    {stat.icon && <span className="text-lg mr-2">{stat.icon}</span>}
                    <div>
                      <span className="font-bold text-2xl" style={{ color: stat.color }}>
                        {stat.label === "400+" ? (
                          <><AnimatedCounter from={0} to={stat.value} duration={2} />+</>
                        ) : stat.label === "100%" ? (
                          <><AnimatedCounter from={0} to={stat.value} duration={1.5} />%</>
                        ) : (
                          <AnimatedCounter from={0} to={stat.value} duration={1} />
                        )}
                      </span>
                      <span className="text-gray-300 ml-2 text-sm">{stat.detail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ZONE CRÉATIVE SCROLL INCENTIVE - Transition Magnétique */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/50 to-black">
        {/* Logos flottants en cascade pour guider le scroll */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Message de transition subtil */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-gray-400 text-lg font-light"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Découvrez nos analyses détaillées
            </motion.p>
          </motion.div>
          
          {/* Trail créatif de logos OSOM - Effet cascade magnétique */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            
            {/* Logo 1: Icon animé avec pull down effect */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.05, 1]
              }}
              style={{
                animationDuration: '4s',
                animationIterationCount: 'infinite'
              }}
              whileHover={{ scale: 1.1, y: 12 }}
            >
              {/* Logo icon blanc simplifié */}
              <div className="w-16 h-16 md:w-20 md:h-20 opacity-60 hover:opacity-90 transition-all duration-500">
                <svg viewBox="0 0 927.6 900" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFDD00" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <g fill="url(#logoGradient1)">
                    <polygon points="548.6,617 548.6,617 430.3,594.3 430.3,594.3 430.2,594.2 430.2,666.7 548.6,666.7 548.6,617.1"/>
                    <path d="M779.7,261.1c-29.5-31.6-69.4-47.3-119.7-47.3c-59.6,0-107.9,20.8-144.7,62.3c-29.2-41.5-72.2-62.3-128.9-62.3c-51.5,0-92.4,16.1-122.8,48.2v-38.6H154.8V280l0,0L300,338.9c14-12.1,31.6-18.2,53.1-18.2c23.4,0,42.1,7.6,56.1,22.8c11.5,12.5,18.3,28.5,20.4,48l0,0l0,0c0,0,0,0,0-0.1l119,48.3l0.1,0v-37.6c0-24,7.5-43.6,22.4-58.8c14.9-15.2,34.1-22.8,57.4-22.8c23.4,0,42.1,7.6,56.1,22.8c14,15.2,21.1,35.7,21.1,61.4v76.7c0,0,65.3,16.8,76.3,20.3c20.1,5.5,34.1,14.8,42.1,25V388.2C824,335,809.3,292.6,779.7,261.1z"/>
                  </g>
                </svg>
              </div>
              
              {/* Flèche subtile vers le bas */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  y: [0, 4, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 12l-4-4h8l-4 4z" clipRule="evenodd"/>
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Logo 2: Version complète centrale - Point focal */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              animate={{
                y: [0, 12, 0],
                rotate: [0, 2, -2, 0]
              }}
              style={{
                animationDuration: '6s',
                animationIterationCount: 'infinite'
              }}
              whileHover={{ scale: 1.15, y: 16 }}
            >
              {/* Logo complet OSOM stylisé */}
              <div className="w-24 h-12 md:w-32 md:h-16 opacity-70 hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 2150 1080" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#FFDD00" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7"/>
                    </linearGradient>
                  </defs>
                  <g fill="url(#logoGradient2)">
                    <path d="M366,772.7c15.2,0,28.4,7.2,35.7,18.5l-7.6,6c-6.6-9.5-16.1-15.1-28-15.1c-19.4,0-34.2,15.1-34.2,35s14.8,35,34.2,35c11.8,0,21.4-5.6,28-15.1l7.6,6c-7.2,11.3-20.4,18.5-35.7,18.5c-24.3,0.4-45.2-19.8-44.7-44.4C320.8,792.4,341.6,772.3,366,772.7z"/>
                    <path d="M1984.7,646.2c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C1959.2,662.8,1973.4,657.3,1984.7,646.2z"/>
                  </g>
                </svg>
              </div>
              
              {/* Cercles magnétiques autour */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-cyan-400/20 rounded-full"
                  style={{
                    width: `${120 + i * 20}%`,
                    height: `${120 + i * 20}%`,
                    left: `${-10 - i * 10}%`,
                    top: `${-10 - i * 10}%`
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8
                  }}
                />
              ))}
              
              {/* Flèche principale vers le bas */}
              <motion.div 
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3v10l-3-3m6 0l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Logo 3: Version événement avec trail effect */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              animate={{
                y: [0, 6, 0],
                x: [0, 2, -2, 0]
              }}
              style={{
                animationDuration: '5s',
                animationIterationCount: 'infinite'
              }}
              whileHover={{ scale: 1.1, y: 10 }}
            >
              {/* Logo événement simplifié */}
              <div className="w-14 h-14 md:w-18 md:h-18 opacity-60 hover:opacity-90 transition-all duration-500">
                <svg viewBox="0 0 2900 900" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <circle cx="1450" cy="450" r="200" fill="url(#logoGradient3)"/>
                  <path fill="#FFDD00" fillOpacity="0.7" d="M2019.4,650.4c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C1993.9,667,2008.1,661.5,2019.4,650.4z"/>
                </svg>
              </div>
              
              {/* Trail de particules vers le bas */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${50 + (i % 2) * 10}%`,
                    top: `${100 + i * 15}%`
                  }}
                  animate={{
                    y: [0, 20, 40],
                    opacity: [0.8, 0.4, 0],
                    scale: [1, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3 + 1.5
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Message d'invitation au scroll avec animation */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 text-gray-500 text-sm font-light"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              animate={{
                y: [0, 4, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>Explorez nos case studies</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Effet de gradient pour fusion douce avec section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/5" />
      </section>

      {/* Premium Featured Articles Section */}
      <section className="py-32 bg-gradient-to-br from-white/5 via-black to-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Premium Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-400 mr-3"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-green-400 text-sm font-medium tracking-wide">
                CASE STUDIES VÉRIFIÉS • PERFORMANCES TRANSPARENTES
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Résultats par <span className="text-green-400 font-bold">transparence</span>.
              <br />Performance par <span className="text-green-400 font-bold">preuves</span>.
            </h2>
          </motion.div>

          {/* Articles Grid with Premium Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(article => article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-green-400/40 transition-all duration-500 group"
              >
                {/* Article Image Placeholder with Premium Effects */}
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-cyan-400/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.span 
                      className="text-6xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {article.category === 'Case Study' ? '' : ''}
                    </motion.span>
                  </div>
                  
                  {/* Featured Badge */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </motion.div>
                  
                  {/* Premium Metrics Overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {Object.entries(article.metrics).map(([key, value], i) => (
                      <motion.div 
                        key={key} 
                        className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-green-400 font-bold text-sm">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Premium Article Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-400 text-sm font-medium">{article.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-green-400 transition-colors" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.excerpt}
                  </p>

                  {/* Premium Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300 hover:bg-green-400/20 hover:text-green-400 transition-all"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: tagIndex * 0.1 + 0.8 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Premium Read More Link */}
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                    >
                      Lire l'analyse complète
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Premium Other Articles */}
          <div className="mt-20">
            <motion.h3 
              className="text-3xl font-light text-white mb-12 text-center" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Analyses <span className="text-purple-400 font-bold">Techniques</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                  }}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/40 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-400 text-sm font-medium">{article.category}</span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>

                  <h4 className="text-xl font-light text-white mb-3 group-hover:text-purple-400 transition-colors" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.title}
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.excerpt}
                  </p>

                  <motion.div whileHover={{ x: 3 }}>
                    <Link
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                    >
                      Lire plus
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 bg-gradient-to-br from-cyan-400/10 via-transparent to-green-400/5 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#06B6D4" }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#10B981" }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <motion.div 
                className="w-2 h-2 rounded-full bg-cyan-400 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                VOTRE CASE STUDY • RÉSULTATS GARANTIS
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Prêt pour votre <span className="text-cyan-400 font-bold">transformation</span> ?
            </h3>
            
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Créons ensemble votre prochain case study avec des <span className="text-cyan-400 font-semibold">résultats mesurables</span> et vérifiables.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg relative overflow-hidden"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Démarrer mon projet
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
                href="/calculator"
                className="border-2 border-cyan-400/60 text-cyan-400 px-10 py-4 rounded-xl font-medium text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculer mon ROI
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}