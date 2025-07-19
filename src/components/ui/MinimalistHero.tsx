'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui'

export default function MinimalistHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return

    const tl = gsap.timeline()
    
    // Animation d'entrée sophistiquée et subtile
    tl.fromTo(contentRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )

    setIsLoaded(true)
  }, [])

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative bg-white"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Main Content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        
        {/* Logo/Brand */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-tight mb-4">
            OSOM
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto" />
        </div>

        {/* Main Value Proposition */}
        <div className="hero-subtitle mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Nous donnons vie aux collaborations
          </h2>
          <p className="text-base md:text-lg text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            L'agence marketing qui transforme vos idées en succès digitaux mesurables
          </p>
        </div>

        {/* Single, Premium CTA */}
        <div className="hero-cta">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/10"
          >
            Démarrer un projet
          </Button>
          
          {/* Subtle indicator */}
          <div className="mt-8 text-xs text-gray-400 tracking-wide uppercase">
            Découvrez notre approche
          </div>
        </div>
      </div>

      {/* Minimal floating elements - very subtle */}
      {isLoaded && (
        <>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-gray-200 rounded-full opacity-60" />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gray-200 rounded-full opacity-60" />
        </>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mt-2 animate-pulse" />
      </div>
    </div>
  )
}