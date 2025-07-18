'use client'

import { useEffect, useState } from 'react'

interface FloatingCTAProps {
  text?: string
  href?: string
  className?: string
}

export default function FloatingCTA({ 
  text = "💡 Parler à un expert", 
  href = "#contact",
  className = ""
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } ${className}`}
    >
      <a
        href={href}
        className="group relative inline-flex items-center gap-3 bg-osom-yellow hover:bg-osom-black text-osom-black hover:text-osom-yellow px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        style={{
          boxShadow: '0 0 20px rgba(255, 221, 0, 0.4)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <span className="text-lg animate-pulse">💡</span>
        <span className="text-sm font-medium whitespace-nowrap">
          {text}
        </span>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-osom-yellow opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Magnetic effect indicator */}
        <div className="absolute -inset-2 rounded-full border border-osom-yellow opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse" />
      </a>
    </div>
  )
}