'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export default function AnimatedCounter({ 
  from, 
  to, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '',
  delay = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now() + delay
    const endTime = startTime + duration
    
    const timer = setInterval(() => {
      const now = Date.now()
      
      if (now < startTime) return
      
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = from + (to - from) * easeOutQuart
      
      setCount(currentCount)
      
      if (progress >= 1) {
        clearInterval(timer)
        setCount(to)
      }
    }, 16) // ~60fps
    
    return () => clearInterval(timer)
  }, [isInView, from, to, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
    >
      {prefix}{Math.round(count).toLocaleString()}{suffix}
    </motion.div>
  )
}