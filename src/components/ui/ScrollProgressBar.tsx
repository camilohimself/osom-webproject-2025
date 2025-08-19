'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ScrollProgressBar() {
  const { scrollProgress, isScrollingDown } = useScrollAnimation()
  
  return (
    <>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 origin-left z-50"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
      
      {/* Floating Progress Circle */}
      <motion.div 
        className="fixed bottom-8 right-8 w-16 h-16 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 0.1 ? 1 : 0,
          scale: scrollProgress > 0.1 ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
          {/* Background circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="4"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${28 * 2 * Math.PI}`}
            strokeDashoffset={`${28 * 2 * Math.PI * (1 - scrollProgress)}`}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
        
        {/* Scroll direction indicator */}
        <motion.div 
          className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${
            isScrollingDown ? 'bg-red-400' : 'bg-green-400'
          }`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className={`w-full h-full flex items-center justify-center text-[8px]`}>
            {isScrollingDown ? '↓' : '↑'}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Back to top button */}
      <motion.button
        className="fixed bottom-8 left-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: scrollProgress > 0.3 ? 1 : 0,
          y: scrollProgress > 0.3 ? 0 : 100
        }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </>
  )
}