'use client'

import { useEffect, useRef, useState } from 'react'

interface SpotlightContentProps {
  children: React.ReactNode
  className?: string
  dimmedOpacity?: number
  highlightRadius?: number
}

export default function SpotlightContent({ 
  children, 
  className = '', 
  dimmedOpacity = 0.25,
  highlightRadius = 300 
}: SpotlightContentProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInView, setIsInView] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        )
        
        setIsInView(distance < highlightRadius)
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [highlightRadius])

  return (
    <div 
      ref={contentRef}
      className={`transition-opacity duration-300 ${className}`}
      style={{
        opacity: isInView ? 1 : dimmedOpacity
      }}
    >
      {children}
    </div>
  )
}