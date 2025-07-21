'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import AnimatedCounter from './AnimatedCounter'
import ProgressBar from './ProgressBar'

interface Metric {
  label: string
  value: number
  suffix?: string
  color?: string
  maxValue?: number
  isProgress?: boolean
}

interface MiniDashboardProps {
  title: string
  metrics: Metric[]
  isVisible: boolean
  className?: string
}

const MiniDashboard = ({ title, metrics, isVisible, className = "" }: MiniDashboardProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`absolute top-4 right-4 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-2xl border border-yellow-400/30 shadow-2xl p-6 min-w-80 z-30 ${className}`}
          initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.4 
          }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-cyan-400/5 rounded-2xl blur-sm" />
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center mb-4">
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-400 mr-3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h3 className="text-yellow-400 font-bold text-lg">{title}</h3>
              <div className="ml-auto text-xs text-gray-400">LIVE</div>
            </div>

            {/* Metrics Grid */}
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-white/5 to-transparent rounded-lg p-3 border-l-2"
                  style={{ borderLeftColor: metric.color || '#EAB308' }}
                >
                  {metric.isProgress ? (
                    <ProgressBar
                      value={metric.value}
                      maxValue={metric.maxValue || 100}
                      label={metric.label}
                      color={metric.color}
                      duration={1.5}
                      delay={index * 0.2}
                      showPercentage={false}
                    />
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{metric.label}</span>
                        <div className="flex items-center">
                          <AnimatedCounter
                            from={0}
                            to={metric.value}
                            duration={1.5}
                            delay={index * 0.1}
                            suffix={metric.suffix || ''}
                            className="text-xl font-bold text-white"
                          />
                        </div>
                      </div>
                      {/* Mini progress indicator */}
                      <motion.div
                        className="mt-2 h-1 rounded-full"
                        style={{ backgroundColor: `${metric.color}20` }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: metric.color }}
                          initial={{ width: '0%' }}
                          animate={{ width: `${Math.min((metric.value / (metric.maxValue || 100)) * 100, 100)}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400 mr-2"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-gray-400">Données en temps réel</span>
              </div>
              <div className="text-xs text-gray-500">GA4 + Analytics</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MiniDashboard