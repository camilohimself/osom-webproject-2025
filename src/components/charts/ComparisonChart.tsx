'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ComparisonData {
  label: string
  value: number
  color: string
}

interface ComparisonChartProps {
  data: ComparisonData[]
  title: string
  subtitle?: string
  maxValue?: number
}

export default function ComparisonChart({ 
  data, 
  title, 
  subtitle,
  maxValue 
}: ComparisonChartProps) {
  const [isVisible, setIsVisible] = useState(false)
  const max = maxValue || Math.max(...data.map(d => d.value))

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-[#0D1117] border border-[#21262D]"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {subtitle && (
          <p className="text-gray-400 text-sm">{subtitle}</p>
        )}
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">{item.label}</span>
              <motion.span 
                className="font-bold text-lg"
                style={{ color: item.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {item.value.toLocaleString()}
              </motion.span>
            </div>
            
            <div className="relative h-3 bg-[#21262D] rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                animate={{ 
                  width: isVisible ? `${(item.value / max) * 100}%` : 0 
                }}
                transition={{ 
                  duration: 1.5,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{ x: [-32, 300] }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.3 + 1,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Ratio */}
      {data.length === 2 && (
        <motion.div 
          className="mt-4 pt-4 border-t border-[#21262D]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-center">
            <span className="text-gray-400 text-sm">Ratio: </span>
            <span className="text-white font-bold">
              {Math.round(Math.max(...data.map(d => d.value)) / Math.min(...data.map(d => d.value)))}x
            </span>
            <span className="text-gray-400 text-sm"> plus efficace</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}