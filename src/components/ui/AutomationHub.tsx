'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Pipeline automation steps
const automationPipeline = [
  {
    id: 'prompt',
    title: 'Prompt Engineering',
    description: 'Optimized prompts for specific development tasks',
    icon: '◆',
    color: '#10B981',
    tools: ['Context Window', 'Temperature Control', 'Response Format'],
    templates: [
      { name: 'API Generator', usage: '340+ times' },
      { name: 'Component Builder', usage: '280+ times' },
      { name: 'Test Creator', usage: '190+ times' }
    ],
    status: 'active'
  },
  {
    id: 'generate',
    title: 'Code Generation',
    description: 'AI-powered code creation with best practices',
    icon: '▲',
    color: '#8B5CF6',
    tools: ['Pattern Recognition', 'Best Practices', 'Context Awareness'],
    metrics: { speed: '3.4x faster', quality: '95%', consistency: '100%' },
    status: 'processing'
  },
  {
    id: 'review',
    title: 'Intelligent Review',
    description: 'Automated code review and optimization suggestions',
    icon: '◯',
    color: '#F59E0B',
    tools: ['Security Scan', 'Performance Check', 'Best Practice Validation'],
    findings: { security: '0 issues', performance: 'A+ rating', maintainability: '9.2/10' },
    status: 'complete'
  },
  {
    id: 'test',
    title: 'Auto Testing',
    description: 'Comprehensive test suite generation and execution',
    icon: '■',
    color: '#06B6D4',
    tools: ['Unit Tests', 'Integration Tests', 'E2E Scenarios'],
    coverage: { unit: '92%', integration: '87%', e2e: '78%' },
    status: 'testing'
  },
  {
    id: 'deploy',
    title: 'Smart Deployment',
    description: 'Intelligent deployment with monitoring and rollback',
    icon: '▼',
    color: '#EF4444',
    tools: ['CI/CD Pipeline', 'Health Monitoring', 'Auto Rollback'],
    uptime: '99.9%',
    status: 'deployed'
  }
]

// Prompt library examples
const promptLibrary = [
  {
    category: 'API Development',
    templates: [
      {
        name: 'REST API Generator',
        prompt: 'Create a robust REST API for [entity] with CRUD operations, validation, error handling, and OpenAPI documentation',
        usage: 156,
        rating: 4.9
      },
      {
        name: 'GraphQL Schema',
        prompt: 'Generate GraphQL schema for [domain] with resolvers, mutations, and subscriptions using modern patterns',
        usage: 89,
        rating: 4.8
      }
    ]
  },
  {
    category: 'Frontend Components',
    templates: [
      {
        name: 'React Component',
        prompt: 'Build reusable React component [name] with TypeScript, props validation, accessibility, and Storybook stories',
        usage: 234,
        rating: 4.9
      },
      {
        name: 'Form Builder',
        prompt: 'Create form component with validation, error handling, accessibility, and responsive design using react-hook-form',
        usage: 178,
        rating: 4.7
      }
    ]
  },
  {
    category: 'DevOps & Testing',
    templates: [
      {
        name: 'Test Suite Generator',
        prompt: 'Generate comprehensive test suite for [component/function] with unit, integration tests and edge cases',
        usage: 145,
        rating: 4.8
      },
      {
        name: 'CI/CD Pipeline',
        prompt: 'Create GitHub Actions workflow with build, test, security scan, and deployment for [project]',
        usage: 67,
        rating: 4.9
      }
    ]
  }
]

interface AutomationHubProps {
  title: string
  subtitle: string
}

export default function AutomationHub({ title, subtitle }: AutomationHubProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [pipelineActive, setPipelineActive] = useState(false)

  // Auto-advance pipeline
  useEffect(() => {
    if (!isInView) return
    
    setPipelineActive(true)
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % automationPipeline.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isInView])

  const getStatusIcon = (status: string) => {
    const icons = {
      'active': '●',
      'processing': '◐',
      'complete': '✓',
      'testing': '◯',
      'deployed': '▲'
    }
    return icons[status as keyof typeof icons] || '○'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'active': '#10B981',
      'processing': '#8B5CF6', 
      'complete': '#10B981',
      'testing': '#F59E0B',
      'deployed': '#EF4444'
    }
    return colors[status as keyof typeof colors] || '#6B7280'
  }

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-black to-purple-950/30 relative overflow-hidden">
      {/* Background Automation Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #8B5CF6 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #10B981 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            {title} <span className="font-bold text-purple-400">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Automation Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              ▲ PIPELINE AUTOMATISATION
            </h3>
            
            {/* Pipeline Visualization */}
            <div className="relative">
              {/* Pipeline Flow Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700">
                <motion.div
                  className="w-full bg-gradient-to-b from-purple-500 to-green-500"
                  initial={{ height: 0 }}
                  animate={{ height: pipelineActive ? '100%' : 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>

              <div className="space-y-8">
                {automationPipeline.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative ml-12 transition-all duration-500 ${
                      activeStep === index 
                        ? 'transform scale-105' 
                        : activeStep > index 
                          ? 'opacity-80' 
                          : 'opacity-60'
                    }`}
                  >
                    {/* Step Node */}
                    <motion.div
                      className="absolute -left-12 top-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2 z-10"
                      style={{ 
                        backgroundColor: activeStep >= index ? step.color : '#374151',
                        borderColor: step.color,
                        color: activeStep >= index ? '#000' : '#9CA3AF'
                      }}
                      animate={activeStep === index ? {
                        scale: [1, 1.2, 1],
                        boxShadow: [`0 0 0 0 ${step.color}40`, `0 0 0 15px ${step.color}00`]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step Content */}
                    <div
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500"
                      style={{ 
                        borderColor: activeStep === index ? `${step.color}60` : 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold text-lg">{step.title}</h4>
                        <div 
                          className="flex items-center space-x-2 text-xs font-mono px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: `${getStatusColor(step.status)}20`,
                            color: getStatusColor(step.status)
                          }}
                        >
                          <span>{getStatusIcon(step.status)}</span>
                          <span>{step.status.toUpperCase()}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                      
                      {/* Step Tools */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {step.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Step-specific data */}
                      {step.templates && activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-2"
                        >
                          {step.templates.map((template, i) => (
                            <div key={i} className="flex items-center justify-between text-xs bg-black/20 rounded-lg p-2">
                              <span className="text-white">{template.name}</span>
                              <span className="text-green-400">{template.usage}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      
                      {step.metrics && activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="grid grid-cols-3 gap-2 text-xs"
                        >
                          <div className="text-center bg-green-500/10 rounded p-2">
                            <div className="text-green-400 font-bold">{step.metrics.speed}</div>
                            <div className="text-gray-400">Speed</div>
                          </div>
                          <div className="text-center bg-blue-500/10 rounded p-2">
                            <div className="text-blue-400 font-bold">{step.metrics.quality}</div>
                            <div className="text-gray-400">Quality</div>
                          </div>
                          <div className="text-center bg-purple-500/10 rounded p-2">
                            <div className="text-purple-400 font-bold">{step.metrics.consistency}</div>
                            <div className="text-gray-400">Consistency</div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Prompt Library */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-xl rounded-3xl border border-purple-400/30 overflow-hidden">
              
              {/* Library Header */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 border-b border-purple-400/20">
                <h3 className="text-white font-bold text-lg flex items-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-purple-400 mr-3"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  PROMPT LIBRARY
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Templates optimisés pour développement IA
                </p>
              </div>

              {/* Category Tabs */}
              <div className="flex border-b border-gray-700/50">
                {promptLibrary.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(index)}
                    className={`flex-1 p-3 text-sm font-medium transition-all duration-300 ${
                      selectedCategory === index
                        ? 'bg-purple-500/20 text-purple-400 border-b-2 border-purple-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>

              {/* Template List */}
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {promptLibrary[selectedCategory].templates.map((template, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-white font-semibold group-hover:text-purple-300">
                            {template.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="text-yellow-400">★ {template.rating}</span>
                            <span className="text-gray-400">{template.usage} uses</span>
                          </div>
                        </div>
                        
                        <div className="bg-black/30 rounded-lg p-3 font-mono text-xs text-gray-300 group-hover:text-white transition-colors">
                          {template.prompt}
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            {[1,2,3,4,5].map(star => (
                              <span 
                                key={star} 
                                className={`text-xs ${star <= Math.floor(template.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <button className="text-purple-400 text-xs font-medium hover:text-purple-300 transition-colors">
                            Utiliser Template →
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-400/30"
            >
              <h4 className="text-green-400 font-bold mb-4 flex items-center">
                ■ AUTOMATION IMPACT
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">1247</div>
                  <div className="text-gray-400 text-sm">Code generations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">89%</div>
                  <div className="text-gray-400 text-sm">Time saved</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-center text-yellow-400 font-bold">
                  ◆ 2400+ heures développement automatisées
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}