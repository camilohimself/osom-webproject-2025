'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  life: number
  maxLife: number
}

interface PrismParticlesProps {
  isActive: boolean
  rayColor: string
  rayAngle: number
  startPosition: { x: number; y: number }
  intensity?: number
}

export default function PrismParticles({ 
  isActive, 
  rayColor, 
  rayAngle, 
  startPosition, 
  intensity = 1 
}: PrismParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [isSupported, setIsSupported] = useState(true)

  // Couleurs basées sur le rayColor prop
  const getParticleColors = (rayColor: string) => {
    switch (rayColor) {
      case 'from-white via-cyan-400 to-cyan-500':
        return ['#00d4ff', '#00bcd4', '#0080ff', '#40e0d0']
      case 'from-white via-green-400 to-green-500':
        return ['#00ff80', '#00e676', '#4caf50', '#00c853']
      case 'from-white via-purple-400 to-pink-500':
        return ['#e91e63', '#9c27b0', '#ba68c8', '#f06292']
      default:
        return ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0']
    }
  }

  // Crée une nouvelle particule
  const createParticle = useCallback((colors: string[]): Particle => {
    const angle = (rayAngle * Math.PI) / 180
    const speed = 0.5 + Math.random() * 1.5
    const spread = 0.2 // Dispersion du rayon
    
    return {
      x: startPosition.x,
      y: startPosition.y,
      vx: Math.cos(angle + (Math.random() - 0.5) * spread) * speed,
      vy: Math.sin(angle + (Math.random() - 0.5) * spread) * speed,
      size: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.8 + Math.random() * 0.2,
      life: 0,
      maxLife: 60 + Math.random() * 40
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Animation loop
  const animate = useCallback(() => {
    if (!canvasRef.current || !isActive) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas avec effet de traînée
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const colors = getParticleColors(rayColor)
    const maxParticles = Math.floor(20 * intensity)

    // Ajoute de nouvelles particules
    if (particlesRef.current.length < maxParticles) {
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push(createParticle(colors))
      }
    }

    // Met à jour et dessine les particules
    particlesRef.current = particlesRef.current.filter(particle => {
      // Mise à jour position
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life += 1

      // Calcul alpha basé sur la vie
      const lifeRatio = particle.life / particle.maxLife
      particle.alpha = (1 - lifeRatio) * (0.8 + Math.random() * 0.2)

      // Légère déviation pour effet naturel
      particle.vx += (Math.random() - 0.5) * 0.02
      particle.vy += (Math.random() - 0.5) * 0.02

      // Dessine la particule avec glow effect
      if (particle.alpha > 0.1) {
        // Glow externe
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${particle.color}00`)
        
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core brillant
        ctx.beginPath()
        ctx.fillStyle = `${particle.color}${Math.floor((particle.alpha * 1.5) * 255).toString(16).padStart(2, '0')}`
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Retire les particules mortes ou hors écran
      return particle.life < particle.maxLife && 
             particle.x > -50 && particle.x < canvas.width + 50 &&
             particle.y > -50 && particle.y < canvas.height + 50
    })

    if (isActive) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }
  }, [isActive, rayColor, createParticle]) // eslint-disable-line react-hooks/exhaustive-deps

  // Configuration canvas
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    
    // Résolution haute pour écrans Retina
    const dpr = window.devicePixelRatio || 1
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
      // Vérifie le support WebGL
      try {
        const testCanvas = document.createElement('canvas')
        const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')
        setIsSupported(!!gl)
      } catch {
        setIsSupported(false)
      }
    }
  }, [])

  // Démarre/arrête l'animation
  useEffect(() => {
    if (isActive && isSupported) {
      animate()
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      particlesRef.current = []
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isActive, isSupported, animate])

  if (!isSupported) {
    // Fallback CSS pour appareils non supportés
    return (
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '200px',
          height: '4px',
          left: startPosition.x,
          top: startPosition.y,
          transform: `translate(-50%, -50%) rotate(${rayAngle}deg)`,
          transformOrigin: 'left center',
          background: rayColor.replace('from-white via-', 'from-').replace(' to-', ' to-'),
          filter: 'blur(1px)',
          opacity: isActive ? 0.6 : 0
        }}
        animate={{
          opacity: isActive ? [0.4, 0.8, 0.4] : 0,
          scale: isActive ? [1, 1.1, 1] : 1
        }}
        transition={{
          duration: 2,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        width: '100%',
        height: '100%',
        mixBlendMode: 'screen' // Effet de fusion lumineux
      }}
    />
  )
}