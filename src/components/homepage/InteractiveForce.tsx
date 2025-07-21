'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import MiniDashboard from '@/components/ui/MiniDashboard'
import CaseStudyModal from '@/components/ui/CaseStudyModal'
import ProgressBar from '@/components/ui/ProgressBar'

interface ForceData {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  dashboardMetrics: Array<{
    label: string
    value: number
    suffix?: string
    color?: string
    maxValue?: number
    isProgress?: boolean
  }>
  caseStudy: {
    title: string
    client: string
    period: string
    challenge: string
    solution: string
    results: Array<{
      label: string
      before: number
      after: number
      improvement: string
      color: string
    }>
    proof: string
    testimonial?: {
      quote: string
      author: string
      position: string
    }
  }
}

interface InteractiveForceProps {
  force: ForceData
  children: React.ReactNode
  className?: string
}

const InteractiveForce = ({ force, children, className = "" }: InteractiveForceProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className={`backdrop-blur-sm border rounded-3xl overflow-hidden min-h-[600px] relative cursor-pointer ${className}`}
        style={{ borderColor: `${force.color}20` }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 25px 50px ${force.color}20`
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{ 
            background: `linear-gradient(135deg, ${force.color}10, transparent, ${force.color}05)`
          }}
          animate={{ 
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Interactive Indicators */}
        <motion.div
          className="absolute top-6 right-6 flex space-x-2"
          animate={{ 
            opacity: isHovered ? 1 : 0.6
          }}
        >
          {/* Hover indicator */}
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs border"
            style={{ 
              backgroundColor: `${force.color}20`,
              borderColor: `${force.color}40`
            }}
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              rotate: isHovered ? [0, 360] : 0
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          >
            📊
          </motion.div>
          
          {/* Click indicator */}
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs border"
            style={{ 
              backgroundColor: `${force.color}20`,
              borderColor: `${force.color}40`
            }}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1
            }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          >
            🔍
          </motion.div>
        </motion.div>

        {/* Progress Bars at Bottom */}
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {force.dashboardMetrics.slice(0, 3).map((metric, index) => (
              <ProgressBar
                key={metric.label}
                value={metric.value}
                maxValue={metric.maxValue || 100}
                label=""
                color={force.color}
                duration={1.5}
                delay={index * 0.2}
                showPercentage={false}
                className="opacity-80"
              />
            ))}
          </div>
        </motion.div>

        {/* Mini Dashboard */}
        <MiniDashboard
          title={`${force.title} - Dashboard Live`}
          metrics={force.dashboardMetrics}
          isVisible={isHovered}
        />
      </motion.div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        caseStudy={force.caseStudy}
      />
    </>
  )
}

export default InteractiveForce