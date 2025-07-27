'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const OSOMMotionHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const handlePlayVideo = () => {
    setShowVideo(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Pattern OSOM */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Video Background */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          >
            <source src="/osom-motion.MP4" type="video/mp4" />
          </video>
          
          {/* Overlay pour maintenir la lisibilité */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      )}

      {/* Content principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo OSOM avec effet glow */}
        <motion.div 
          className="mb-12 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative group">
            {/* Glow effect jaune OSOM */}
            <div className="absolute inset-0 bg-yellow-400/30 blur-3xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-1000"></div>
            
            {/* Logo container */}
            <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500 shadow-2xl">
              <Image 
                src="/osom-logo.svg" 
                alt="osom Digital Agency" 
                width={256}
                height={256}
                priority
                className="h-32 md:h-48 lg:h-64 w-auto group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Particles effet OSOM */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </motion.div>

        {/* Titre principal avec typographie Cera PRO */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
            <span className="text-yellow-400 font-bold">14x</span> Plus Performant
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
            L'agence qui transforme vos investissements marketing en <span className="text-yellow-400 font-bold">machines à résultats</span>
          </p>
        </motion.div>

        {/* Bouton Motion Video */}
        {!showVideo && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button
              onClick={handlePlayVideo}
              className="group relative inline-flex items-center justify-center"
            >
              {/* Cercles animés */}
              <div className="absolute inset-0 rounded-full">
                <div className="w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 rounded-full">
                <div className="w-32 h-32 border border-yellow-400/20 rounded-full animate-ping delay-500"></div>
              </div>
              
              {/* Bouton principal */}
              <div className="relative w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300 shadow-2xl group-hover:shadow-yellow-400/50">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>
            
            <p className="mt-4 text-yellow-400 font-medium" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Découvrir notre approche révolutionnaire
            </p>
          </motion.div>
        )}

        {/* KPI Cards animées */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: showVideo ? 2 : 1.2, duration: 0.8 }}
        >
          
          {/* KPI 1 - ROI */}
          <motion.div 
            className="group bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                14x
              </div>
              <div className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Plus Performant
              </div>
              <div className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Que la publicité payante traditionnelle selon nos analyses GA4
              </div>
            </div>
          </motion.div>
          
          {/* KPI 2 - Prix */}
          <motion.div 
            className="group bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/40 hover:border-yellow-400 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                1500
              </div>
              <div className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                CHF Site Premium
              </div>
              <div className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Site complet optimisé conversion + SEO technique inclus
              </div>
            </div>
          </motion.div>
          
          {/* KPI 3 - Rapidité */}
          <motion.div 
            className="group bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                10
              </div>
              <div className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Jours Livraison
              </div>
              <div className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                De l'idée au site live générant du chiffre d'affaires
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: showVideo ? 2.5 : 1.8, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg hover:shadow-yellow-400/25 hover:scale-105 transform duration-300"
            style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
          >
            Démarrer un projet
          </Link>
          <Link
            href="/realisations"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm hover:scale-105 transform duration-300"
            style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default OSOMMotionHero