'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

// Enregistrer le plugin TextPlugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

interface HeroAnimationsProps {
  children: React.ReactNode
  className?: string
}

export default function HeroAnimations({ children, className = '' }: HeroAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const logo = container.querySelector('[data-animate="logo"]')
    const title = container.querySelector('[data-animate="title"]')
    const subtitle = container.querySelector('[data-animate="subtitle"]')
    const buttons = container.querySelectorAll('[data-animate="button"]')

    // Timeline principale
    const tl = gsap.timeline()

    // Animation du logo
    if (logo) {
      tl.fromTo(
        logo,
        { opacity: 0, scale: 0.5, rotationY: 180 },
        { opacity: 1, scale: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.7)' }
      )
    }

    // Animation du titre avec effet typewriter
    if (title) {
      tl.fromTo(
        title,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
    }

    // Animation du sous-titre
    if (subtitle) {
      tl.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      )
    }

    // Animation des boutons
    if (buttons.length > 0) {
      tl.fromTo(
        buttons,
        { opacity: 0, y: 20, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          ease: 'power2.out',
          stagger: 0.1 
        },
        '-=0.2'
      )
    }

    // Animation continue de flottement pour le logo
    if (logo) {
      gsap.to(logo, {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      })
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}