'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  number: string
  title: string
  description: string
  duration?: string
}

interface ProcessSimpleProps {
  title: string
  subtitle: string
  steps: ProcessStep[]
  themeColor: 'yellow' | 'purple' | 'cyan' | 'green' | 'pink'
}

const colorConfig = {
  yellow: {
    accent: 'text-yellow-400',
    bg: 'bg-yellow-400',
    border: 'border-yellow-400',
    gradient: 'from-yellow-400/10 to-transparent'
  },
  purple: {
    accent: 'text-purple-400',
    bg: 'bg-purple-400',
    border: 'border-purple-400',
    gradient: 'from-purple-400/10 to-transparent'
  },
  cyan: {
    accent: 'text-cyan-400',
    bg: 'bg-cyan-400',
    border: 'border-cyan-400',
    gradient: 'from-cyan-400/10 to-transparent'
  },
  green: {
    accent: 'text-green-400',
    bg: 'bg-green-400',
    border: 'border-green-400',
    gradient: 'from-green-400/10 to-transparent'
  },
  pink: {
    accent: 'text-pink-400',
    bg: 'bg-pink-400',
    border: 'border-pink-400',
    gradient: 'from-pink-400/10 to-transparent'
  }
}

export default function ProcessSimple({ title, subtitle, steps, themeColor }: ProcessSimpleProps) {
  const colors = colorConfig[themeColor]

  return (
    <section className="py-24 relative">
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} via-transparent to-transparent`} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {title} <span className={`font-bold ${colors.accent}`}>{subtitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className={`w-20 h-20 ${colors.bg}/20 rounded-full flex items-center justify-center mx-auto mb-6 border ${colors.border}/30`}>
                <span className={`text-3xl font-bold ${colors.accent}`}>{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              {step.duration && (
                <div className={`text-sm ${colors.accent} font-medium mb-2`}>
                  {step.duration}
                </div>
              )}
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}