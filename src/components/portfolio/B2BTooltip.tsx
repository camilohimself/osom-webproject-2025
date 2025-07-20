'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface B2BTooltipProps {
  term: string
  explanation: string
  children: React.ReactNode
  variant?: 'light' | 'dark'
}

export default function B2BTooltip({ 
  term, 
  explanation, 
  children, 
  variant = 'dark' 
}: B2BTooltipProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-help border-b border-dashed border-yellow-400 text-yellow-600">
        {children}
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 max-w-xs p-4 rounded-lg shadow-xl ${
              variant === 'dark' 
                ? 'bg-gray-900 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full`}
          >
            {/* Term */}
            <div className={`font-semibold text-sm mb-2 ${
              variant === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
            }`}>
              {term}
            </div>
            
            {/* Explanation */}
            <div className={`text-xs leading-relaxed ${
              variant === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {explanation}
            </div>
            
            {/* Arrow */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
              variant === 'dark' ? 'border-t-gray-900' : 'border-t-white'
            }`}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}