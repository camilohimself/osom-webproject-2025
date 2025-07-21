'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ToilePoint {
  id: string
  x: number
  y: number
  label?: string
  active: boolean
  color?: string
}

interface ToileAnimationProps {
  points: ToilePoint[]
  width?: number
  height?: number
  className?: string
  autoPlay?: boolean
  triggerOnScroll?: boolean
  theme?: 'osom' | 'seo' | 'marketing'
}

const ToileAnimation = ({
  points,
  width = 800,
  height = 400,
  className = '',
  autoPlay = false,
  triggerOnScroll = true,
  theme = 'osom'
}: ToileAnimationProps) => {
  const [activeConnections, setActiveConnections] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Couleurs thématiques OSOM
  const themeColors = {
    osom: {
      primary: '#FFDD00', // Jaune OSOM
      secondary: '#FFF',
      glow: 'rgba(255, 221, 0, 0.3)'
    },
    seo: {
      primary: '#06B6D4', // Cyan
      secondary: '#FFF',
      glow: 'rgba(6, 182, 212, 0.3)'
    },
    marketing: {
      primary: '#EC4899', // Pink
      secondary: '#FFF',
      glow: 'rgba(236, 72, 153, 0.3)'
    }
  }

  const currentTheme = themeColors[theme]

  // Observer pour déclenchement au scroll
  useEffect(() => {
    if (!triggerOnScroll) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [triggerOnScroll])

  // Activer immédiatement si pas de scroll trigger
  useEffect(() => {
    if (!triggerOnScroll) {
      setIsVisible(true)
    }
  }, [triggerOnScroll])

  // Réinitialiser les connexions quand les points changent
  useEffect(() => {
    setActiveConnections([])
  }, [points])

  // Animation progressive des connexions
  useEffect(() => {
    if (!isVisible || !autoPlay) return

    const activePoints = points.filter(p => p.active)
    if (activePoints.length < 2) return

    // Réinitialiser d'abord
    setActiveConnections([])

    const createConnections = () => {
      const connections: string[] = []
      
      // Créer des connexions entre points actifs
      for (let i = 0; i < activePoints.length; i++) {
        for (let j = i + 1; j < activePoints.length; j++) {
          connections.push(`${activePoints[i].id}-${activePoints[j].id}`)
        }
      }

      // Animer les connexions progressivement
      connections.forEach((connectionId, index) => {
        setTimeout(() => {
          setActiveConnections(prev => [...prev, connectionId])
        }, index * 400)
      })
    }

    const timeout = setTimeout(createConnections, 800)
    return () => clearTimeout(timeout)
  }, [isVisible, points, autoPlay])

  // Rendu Canvas pour les lignes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Effacer le canvas
    ctx.clearRect(0, 0, width, height)

    // Dessiner les connexions actives
    activeConnections.forEach(connectionId => {
      const [pointAId, pointBId] = connectionId.split('-')
      const pointA = points.find(p => p.id === pointAId)
      const pointB = points.find(p => p.id === pointBId)

      if (pointA && pointB) {
        // Effet de lueur
        ctx.shadowColor = currentTheme.glow
        ctx.shadowBlur = 10
        
        // Ligne principale
        ctx.strokeStyle = currentTheme.primary
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(pointA.x, pointA.y)
        ctx.lineTo(pointB.x, pointB.y)
        ctx.stroke()

        // Ligne plus fine superposée
        ctx.shadowBlur = 0
        ctx.strokeStyle = currentTheme.secondary
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(pointA.x, pointA.y)
        ctx.lineTo(pointB.x, pointB.y)
        ctx.stroke()
      }
    })
  }, [activeConnections, points, width, height, currentTheme])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Canvas pour les lignes */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Points de connexion */}
      <div className="relative w-full h-full">
        {points.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute"
            style={{
              left: `${(point.x / width) * 100}%`,
              top: `${(point.y / height) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={point.active && isVisible ? { 
              scale: 1, 
              opacity: 1,
              boxShadow: `0 0 20px ${currentTheme.glow}`
            } : {}}
            transition={{ 
              delay: index * 0.2,
              duration: 0.6,
              type: 'spring',
              stiffness: 300
            }}
          >
            {/* Cercle principal */}
            <div
              className="w-4 h-4 rounded-full border-2 relative"
              style={{
                backgroundColor: point.active ? currentTheme.primary : 'transparent',
                borderColor: currentTheme.primary,
              }}
            >
              {/* Effet de pulsation */}
              {point.active && (
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    backgroundColor: currentTheme.primary,
                    opacity: 0.3
                  }}
                />
              )}
            </div>

            {/* Label optionnel */}
            {point.label && (
              <div
                className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium px-2 py-1 rounded whitespace-nowrap"
                style={{
                  color: currentTheme.primary,
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: `1px solid ${currentTheme.primary}`
                }}
              >
                {point.label}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Particules d'effet (optionnel) */}
      {activeConnections.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: currentTheme.primary }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, width * 0.8, width],
                y: [height * 0.2, height * 0.5, height * 0.8]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ToileAnimation