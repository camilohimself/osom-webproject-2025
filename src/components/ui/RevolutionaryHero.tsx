'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui'

export default function RevolutionaryHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLSpanElement[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline()
    
    // Animation d'entrée spectaculaire
    tl.fromTo(heroRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    .fromTo('.hero-letter', 
      { 
        y: 100, 
        opacity: 0, 
        rotationX: 90,
        scale: 0.5
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    )
    .fromTo('.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo('.hero-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      "-=0.2"
    )
    .fromTo('.hero-cta',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
      "-=0.1"
    )

    setIsLoaded(true)
  }, [])

  const handleLetterHover = (index: number) => {
    if (!lettersRef.current[index]) return
    
    gsap.to(lettersRef.current[index], {
      scale: 1.2,
      y: -10,
      rotationY: 15,
      color: '#ffdd00',
      duration: 0.3,
      ease: "power2.out"
    })

    // Effet de particules simulé avec des éléments
    const letter = lettersRef.current[index]
    for (let i = 0; i < 3; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #ffdd00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 100;
      `
      letter.appendChild(particle)
      
      gsap.fromTo(particle,
        { x: 0, y: 0, opacity: 1 },
        { 
          x: (Math.random() - 0.5) * 60,
          y: -30 - Math.random() * 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => particle.remove()
        }
      )
    }
  }

  const handleLetterLeave = (index: number) => {
    if (!lettersRef.current[index]) return
    
    gsap.to(lettersRef.current[index], {
      scale: 1,
      y: 0,
      rotationY: 0,
      color: '#ffffff',
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const letters = ['O', 'S', 'O', 'M']

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-osom-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-osom-black via-gray-900 to-osom-black opacity-90" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="bg-osom-yellow rounded-sm" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        
        {/* Logo Letters with Extreme Impact */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {letters.map((letter, index) => (
              <span
                key={index}
                ref={el => {
                  if (el) lettersRef.current[index] = el
                }}
                className="hero-letter text-8xl md:text-9xl lg:text-[12rem] font-black text-white cursor-pointer select-none relative inline-block transition-all duration-300"
                style={{
                  fontFamily: 'Arial Black, sans-serif',
                  textShadow: '0 0 30px rgba(255, 221, 0, 0.3)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={() => handleLetterHover(index)}
                onMouseLeave={() => handleLetterLeave(index)}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Revolutionary Tagline */}
        <div className="hero-subtitle mb-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-osom-yellow mb-4 tracking-wide">
            Nous donnons vie aux collaborations
          </h2>
          <div className="w-24 h-1 bg-osom-yellow mx-auto animate-pulse" />
        </div>

        {/* Subtitle with Emphasis */}
        <p className="hero-description text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          L'agence marketing <span className="text-osom-yellow font-semibold">pionnier</span> qui transforme 
          vos idées en <span className="text-osom-yellow font-semibold">succès digitaux mesurables</span>
        </p>

        {/* Single Powerful CTA */}
        <div className="hero-cta">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            className="bg-osom-yellow text-osom-black hover:bg-white hover:text-osom-black text-xl md:text-2xl px-12 py-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-osom-yellow/30"
            animated={true}
          >
            🚀 Transformer mon business maintenant
          </Button>
          
          {/* Subtle Call to Action Indicator */}
          <div className="mt-6 text-white/60 text-sm animate-bounce">
            ↓ Découvrez comment nous faisons la différence
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-osom-yellow opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-osom-yellow opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Elements */}
      {isLoaded && (
        <>
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-osom-yellow rounded-full animate-ping" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 right-20 w-3 h-3 bg-osom-yellow rounded-full animate-ping" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        </>
      )}
    </div>
  )
}