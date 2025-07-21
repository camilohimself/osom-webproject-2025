'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  suffix?: string
  className?: string
  onComplete?: () => void
}

const AnimatedCounter = ({ 
  from, 
  to, 
  duration = 2, 
  delay = 0, 
  suffix = '', 
  className = '',
  onComplete 
}: AnimatedCounterProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      const controls = animate(count, to, {
        duration,
        ease: [0.25, 0.25, 0.25, 0.75],
        onComplete
      })
      return () => controls.stop()
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [count, to, duration, delay, onComplete])

  return (
    <motion.span 
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: delay }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default AnimatedCounter