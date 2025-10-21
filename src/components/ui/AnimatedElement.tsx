'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  type?: 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scale'
}

const AnimatedElement = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  type = 'slideUp'
}: AnimatedElementProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()

  // Optimisation mobile: réduire delays et durée pour meilleure performance
  const mobileDelay = Math.min(delay, 0.1)
  const mobileDuration = Math.min(duration, 0.4)
  const finalDelay = isMobile ? mobileDelay : delay
  const finalDuration = isMobile ? mobileDuration : duration

  const variants = {
    slideUp: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    slideLeft: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    slideRight: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[type]}
      transition={{
        duration: finalDuration,
        delay: finalDelay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedElement