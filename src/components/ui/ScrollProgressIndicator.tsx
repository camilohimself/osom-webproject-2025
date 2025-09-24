'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const ScrollProgressIndicator = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll()

  // Optimized spring physics - reduced calculations for performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.01
  })

  // Transform scroll to different values
  const scaleProgress = useTransform(smoothProgress, [0, 1], [0, 1])
  const opacityProgress = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const percentProgress = useTransform(smoothProgress, latest => Math.round(latest * 100))

  // MOBILE VERSION: Only top bar, no circular indicator
  if (isMobile) {
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%"
        }}
      />
    )
  }

  // DESKTOP VERSION: Full power with animations
  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-purple-400 z-50 transform-gpu"
        style={{
          scaleX: scaleProgress,
          opacity: opacityProgress,
          transformOrigin: "0%"
        }}
      />

      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        style={{ opacity: opacityProgress }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-16 h-16">
          {/* Background circle */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(255, 221, 0, 0.2)"
              strokeWidth="4"
              fill="none"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="#FFDD00"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: scaleProgress,
                pathOffset: 0
              }}
              strokeDasharray="175.929 175.929" // 2 * π * 28
            />
          </svg>
          
          {/* Center arrow */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Reading progress text */}
      <motion.div
        className="fixed bottom-8 left-8 bg-black/80 backdrop-blur-sm border border-yellow-400/20 rounded-lg px-4 py-2 z-50"
        style={{ opacity: opacityProgress }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-yellow-400 text-sm font-medium">
          Progress: <motion.span>{percentProgress}</motion.span>%
        </div>
        <div className="text-gray-400 text-xs">
          Scroll for premium experience
        </div>
      </motion.div>
    </>
  )
}

export default ScrollProgressIndicator