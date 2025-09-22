'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const animationFrame = useRef<number | null>(null)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Initialize particles
  useEffect(() => {
    // Colors osom
    const colors = ['#FFDD00', '#14B8A6', '#06B6D4', '#8B5CF6']
    
    const initParticles = () => {
      const newParticles: Particle[] = []
      // Optimize particles for performance - drastically reduced for presentation
      const particleCount = isMobile ? 8 : 15
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      setParticles(newParticles)
    }

    initParticles()
    window.addEventListener('resize', initParticles)
    return () => window.removeEventListener('resize', initParticles)
  }, [isMobile])

  // Mouse move handler - disabled on mobile for performance
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const animate = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Mouse attraction - only on desktop
          if (!isMobile) {
            const dx = mousePosition.x - particle.x
            const dy = mousePosition.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 150) {
              const force = (150 - distance) / 150 * 0.01
              particle.vx += dx * force * 0.1
              particle.vy += dy * force * 0.1
            }
          }

          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Bounds checking
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

          // Damping
          particle.vx *= 0.99
          particle.vy *= 0.99

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
          ctx.fill()

          // Draw connections - reduced on mobile
          if (!isMobile) {
            prevParticles.forEach(otherParticle => {
              const dx2 = particle.x - otherParticle.x
              const dy2 = particle.y - otherParticle.y
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

              if (distance2 < 100) {
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                const opacity = (100 - distance2) / 100 * 0.1
                ctx.strokeStyle = `#FFDD00${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`
                ctx.lineWidth = 0.5
                ctx.stroke()
              }
            })
          }

          return particle
        })
      )

      animationFrame.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [mousePosition, isMobile])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-64 h-64 border border-yellow-400/10 rounded-full"
        style={{
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          rotate: 360,
        }}
        transition={{
          x: { duration: 2, ease: "easeOut" },
          y: { duration: 2, ease: "easeOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-teal-400/5 to-blue-400/5 rounded-lg rotate-45"
        style={{
          right: '15%',
          top: '60%',
        }}
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
          rotate: 45,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { duration: 2.5, ease: "easeOut" },
          y: { duration: 2.5, ease: "easeOut" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="absolute w-48 h-48 border-2 border-purple-400/10"
        style={{
          left: '70%',
          top: '10%',
        }}
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
          rotate: -360,
        }}
        transition={{
          x: { duration: 3, ease: "easeOut" },
          y: { duration: 3, ease: "easeOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      />
    </div>
  )
}

export default InteractiveBackground