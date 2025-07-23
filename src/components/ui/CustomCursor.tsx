'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CustomCursorProps {
  isActive?: boolean
}

export default function CustomCursor({ isActive = false }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState<'default' | 'prism' | 'force'>('default')
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

    // Détecte les zones spéciales du prisme
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Zone prisme principal
      if (target.closest('[data-prism="triangle"]')) {
        setCursorVariant('prism')
        setHoverText('DÉCOUVRIR')
      }
      // Zones des forces
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
      border: '2px solid rgba(255, 221, 0, 0.4)'
    },
    prism: {
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '3px solid rgba(255, 221, 0, 0.8)'
    },
    force: {
      scale: 1.2,
      backgroundColor: 'rgba(0, 255, 255, 0.7)',
      border: '2px solid rgba(0, 255, 255, 0.9)'
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

          {/* Particules qui suivent le cursor dans les zones prisme */}
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