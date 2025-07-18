'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer le plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationsProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollAnimations({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  className = '',
}: ScrollAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Configuration initiale basée sur le type d'animation
    const initialState = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 50 },
      slideLeft: { opacity: 0, x: -50 },
      slideRight: { opacity: 0, x: 50 },
      scale: { opacity: 0, scale: 0.8 },
      rotate: { opacity: 0, rotation: 15 },
    }

    // État final
    const finalState = {
      fadeIn: { opacity: 1 },
      slideUp: { opacity: 1, y: 0 },
      slideLeft: { opacity: 1, x: 0 },
      slideRight: { opacity: 1, x: 0 },
      scale: { opacity: 1, scale: 1 },
      rotate: { opacity: 1, rotation: 0 },
    }

    // Appliquer l'état initial
    gsap.set(element, initialState[animation])

    // Créer l'animation avec ScrollTrigger
    const animation_tl = gsap.to(element, {
      ...finalState[animation],
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      animation_tl.kill()
    }
  }, [animation, delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}