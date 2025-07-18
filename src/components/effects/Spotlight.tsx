'use client'

import { useEffect, useRef, useState } from 'react'

interface SpotlightProps {
  className?: string
  size?: number
  intensity?: number
  blur?: number
}

export default function Spotlight({ 
  className = '', 
  size = 400, 
  intensity = 0.8, 
  blur = 100 
}: SpotlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      style={{
        background: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255, 221, 0, ${isVisible ? intensity * 0.1 : 0}) 0%, 
          rgba(255, 221, 0, ${isVisible ? intensity * 0.05 : 0}) 20%, 
          transparent 70%)`
      }}
    >
      {/* Cone effect overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(ellipse ${size * 0.8}px ${size * 1.2}px at ${mousePosition.x}px ${mousePosition.y}px, 
            transparent 0%, 
            rgba(0, 0, 0, 0.7) 50%, 
            rgba(0, 0, 0, 0.9) 100%)`
        }}
      />
      
      {/* Inner bright spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(circle ${size * 0.3}px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 221, 0, ${intensity * 0.3}) 0%, 
            rgba(255, 221, 0, ${intensity * 0.1}) 30%, 
            transparent 70%)`
        }}
      />
    </div>
  )
}