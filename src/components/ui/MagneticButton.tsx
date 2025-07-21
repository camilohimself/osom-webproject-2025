'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

interface MagneticButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  style?: React.CSSProperties
}

const MagneticButton = ({ 
  href, 
  children, 
  className = '', 
  variant = 'primary',
  style = {}
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Mouse position relative to button
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring physics for smooth movement
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  
  // Transform values for different effects
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const scale = useTransform([springX, springY], (values: number[]) => {
    const x = values[0]
    const y = values[1]
    return isHovered ? 1.05 + Math.sqrt(x * x + y * y) * 0.1 : 1
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Normalize mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height
    
    x.set(normalizedX)
    y.set(normalizedY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const baseClasses = variant === 'primary' 
    ? 'bg-yellow-400 text-black hover:bg-yellow-500'
    : 'border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm'

  return (
    <motion.div
      style={{ 
        rotateX, 
        rotateY, 
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        ref={ref}
        href={href}
        className={`
          relative px-8 py-4 rounded-lg font-bold shadow-lg transition-all duration-300 
          flex items-center justify-center overflow-hidden group
          ${baseClasses} ${className}
        `}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Glowing background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0"
          initial={{ x: '-100%' }}
          animate={isHovered ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 221, 0, 0.1) 0%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 2, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <motion.span 
          className="relative z-10 flex items-center gap-2"
          style={{
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          }}
        >
          {children}
          
          {/* Arrow animation */}
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </motion.span>

        {/* Particles on hover */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? {
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [-20, 20],
              x: [0, Math.cos(i) * 30],
            } : {}}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 2
            }}
          />
        ))}
      </Link>
    </motion.div>
  )
}

export default MagneticButton