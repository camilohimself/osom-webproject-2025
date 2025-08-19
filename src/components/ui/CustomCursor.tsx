'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CustomCursorProps {
  isActive?: boolean
}

export default function CustomCursor({ isActive = false }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState<'default' | 'danger' | 'solution' | 'data' | 'interactive' | 'prism' | 'force'>('default')
  const [hoverText, setHoverText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Détecte les zones spéciales - Blog IA + Prisme
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const textContent = target.textContent?.toLowerCase() || ''
      
      // Blog IA - Détection dangers
      if (target.closest('.text-red-400') || 
          textContent.includes('danger') || 
          textContent.includes('risque') ||
          textContent.includes('alerte') ||
          target.closest('[data-cursor="danger"]')) {
        setCursorVariant('danger')
        setHoverText('⚠️ DANGER')
      }
      // Blog IA - Solutions
      else if (target.closest('.text-green-400') || 
               textContent.includes('solution') || 
               textContent.includes('libération') ||
               textContent.includes('success') ||
               target.closest('[data-cursor="solution"]')) {
        setCursorVariant('solution')
        setHoverText('✨ SOLUTION')
      }
      // Blog IA - Data/Métriques
      else if (target.closest('.text-purple-400') || 
               target.closest('.text-cyan-400') ||
               /\d+%/.test(textContent) ||
               /\d+\s?chf/i.test(textContent) ||
               /\d+h/.test(textContent) ||
               target.closest('[data-cursor="data"]')) {
        setCursorVariant('data')
        setHoverText('📊 DATA')
      }
      // Éléments interactifs
      else if (target.closest('a') || 
               target.closest('button') || 
               target.closest('.group') ||
               target.closest('[role="button"]') ||
               target.closest('[data-cursor="interactive"]')) {
        setCursorVariant('interactive')
        setHoverText('👆 CLIC')
      }
      // Zone prisme principal (legacy)
      else if (target.closest('[data-prism="triangle"]')) {
        setCursorVariant('prism')
        setHoverText('DÉCOUVRIR')
      }
      // Zones des forces (legacy)
      else if (target.closest('[data-force="data"]')) {
        setCursorVariant('force')
        setHoverText('DATA POWER')
      }
      else if (target.closest('[data-force="code"]')) {
        setCursorVariant('force')
        setHoverText('CODE POWER')
      }
      else if (target.closest('[data-force="design"]')) {
        setCursorVariant('force')
        setHoverText('DESIGN POWER')
      }
      else {
        setCursorVariant('default')
        setHoverText('')
      }
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isActive])

  if (!isActive) return null

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(255, 221, 0, 0.8)',
      border: '2px solid rgba(255, 221, 0, 0.4)',
      rotate: 0
    },
    danger: {
      scale: 1.8,
      backgroundColor: 'rgba(239, 68, 68, 0.9)',
      border: '3px solid rgba(239, 68, 68, 1)',
      rotate: [0, 5, -5, 0]
    },
    solution: {
      scale: 1.4,
      backgroundColor: 'rgba(34, 197, 94, 0.8)',
      border: '2px solid rgba(34, 197, 94, 1)',
      rotate: 0
    },
    data: {
      scale: 1.3,
      backgroundColor: 'rgba(168, 85, 247, 0.8)',
      border: '2px solid rgba(168, 85, 247, 1)',
      rotate: 0
    },
    interactive: {
      scale: 1.2,
      backgroundColor: 'rgba(6, 182, 212, 0.8)',
      border: '2px solid rgba(6, 182, 212, 1)',
      rotate: 0
    },
    prism: {
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '3px solid rgba(255, 221, 0, 0.8)',
      rotate: 0
    },
    force: {
      scale: 1.2,
      backgroundColor: 'rgba(0, 255, 255, 0.7)',
      border: '2px solid rgba(0, 255, 255, 0.9)',
      rotate: 0
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Cursor principal */}
          <motion.div
            className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
            style={{
              left: mousePosition.x - 10,
              top: mousePosition.y - 10,
              width: 20,
              height: 20
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={variants[cursorVariant]}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />

          {/* Texte contextuel */}
          {hoverText && (
            <motion.div
              className="fixed pointer-events-none z-[9999] bg-black/90 text-white px-3 py-1 rounded-lg text-sm font-bold backdrop-blur-sm"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 30
              }}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {hoverText}
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-black/90 rotate-45" />
            </motion.div>
          )}

          {/* Particules spéciales par type de cursor */}
          
          {/* Danger: Ondes d'alerte */}
          {cursorVariant === 'danger' && (
            <div className="fixed pointer-events-none z-[9998]">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-red-400 rounded-full"
                  style={{
                    left: mousePosition.x - 20 - i * 10,
                    top: mousePosition.y - 20 - i * 10,
                    width: 40 + i * 20,
                    height: 40 + i * 20
                  }}
                  animate={{
                    scale: [0.8, 1.3, 0.8],
                    opacity: [0.8, 0.2, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Solution: Particules de succès */}
          {cursorVariant === 'solution' && (
            <div className="fixed pointer-events-none z-[9998]">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y
                  }}
                  animate={{
                    x: [0, Math.cos(i * Math.PI / 3) * 25],
                    y: [0, Math.sin(i * Math.PI / 3) * 25],
                    opacity: [1, 0],
                    scale: [0.5, 1, 0]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeOut'
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Data: Flux de données */}
          {cursorVariant === 'data' && (
            <div className="fixed pointer-events-none z-[9998]">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-6 bg-purple-400 rounded-full opacity-70"
                  style={{
                    left: mousePosition.x - 2 + i * 4,
                    top: mousePosition.y - 15
                  }}
                  animate={{
                    height: [6, 12, 6],
                    y: [0, -5, 0],
                    opacity: [0.4, 0.9, 0.4]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Interactive: Pulse de clic */}
          {cursorVariant === 'interactive' && (
            <div className="fixed pointer-events-none z-[9998]">
              <motion.div
                className="absolute border-2 border-cyan-400 rounded-full"
                style={{
                  left: mousePosition.x - 15,
                  top: mousePosition.y - 15,
                  width: 30,
                  height: 30
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 0.2, 0.6]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          )}
          
          {/* Prisme: Particules (legacy) */}
          {cursorVariant === 'prism' && (
            <div className="fixed pointer-events-none z-[9998]">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 40],
                    y: [0, (Math.random() - 0.5) * 40],
                    opacity: [1, 0],
                    scale: [1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeOut'
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  )
}