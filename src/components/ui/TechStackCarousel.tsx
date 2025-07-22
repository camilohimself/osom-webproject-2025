'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Tech Stack Data avec code snippets
const techStack = [
  {
    name: 'Next.js 14',
    icon: '▲',
    color: '#000000',
    description: 'App Router + Server Components',
    power: 'RÉVOLUTION 2024: React Server Components = 0 JS côté client. Loading 10x plus rapide que WordPress. Auto-optimisation images/fonts = PageSpeed 95+ automatique.',
    code: `// Next.js 14 Server Component
export default async function Page() {
  const data = await getData() // < 200ms server-side
  return <Component data={data} /> // 0 KB client
}`,
    benefits: ['SSR/SSG Hybrid', 'Auto Optimization', 'Zero Config'],
    metrics: { before: 'WordPress 3.2s', after: 'Next.js 0.8s', improvement: '4x plus rapide' }
  },
  {
    name: 'React 18',
    icon: '◯', 
    color: '#61DAFB',
    description: 'Concurrent Features + Suspense',
    power: 'RÉVOLUTION UX: Concurrent Mode = interface jamais bloquée. Auto Batching = 3x moins re-renders. Streaming SSR = contenu progressif ultra-smooth.',
    code: `// React 18 Concurrent Features
function App() {
  return (
    <Suspense fallback={<OptimizedSkeleton />}>
      <AsyncComponent priority="high" />
    </Suspense>
  )
}`,
    benefits: ['Concurrent Mode', 'Auto Batching', 'Streaming SSR'],
    metrics: { before: 'Interface freeze', after: 'Toujours fluide', improvement: 'UX révolutionnaire' }
  },
  {
    name: 'TypeScript',
    icon: 'TS',
    color: '#3178C6',
    description: 'Type Safety + Developer Experience',
    power: 'RÉVOLUTION CODE: 90% bugs éliminés avant production. IntelliSense = développement 3x plus rapide. Refactoring safe = évolution code sans casse.',
    code: `// TypeScript Interface OSOM
interface ProjectMetrics {
  conversion: 11.3 // % guaranteed
  performance: 140 // x vs competition  
  delivery: 10 // jours maximum
  bugs: 0 // production errors
}`,
    benefits: ['Type Safety', 'IntelliSense', 'Refactor Safe'],
    metrics: { before: '30+ bugs/mois', after: '0-2 bugs/mois', improvement: '95% erreurs évitées' }
  },
  {
    name: 'Tailwind CSS',
    icon: '■',
    color: '#06B6D4',
    description: 'Utility-First Styling',
    power: 'RÉVOLUTION CSS: JIT Compiler = CSS 10x plus petit. Utility-First = design 5x plus rapide. Mobile-First = responsive parfait automatique.',
    code: `// Tailwind: 1 ligne = design complet
<div className="
  flex flex-col lg:flex-row items-center
  p-4 lg:p-8 m-4 rounded-3xl
  bg-gradient-to-r from-yellow-400 to-yellow-500
  hover:scale-105 transform transition-all duration-300
  shadow-2xl border border-yellow-300
">`,
    benefits: ['Utility First', 'Mobile First', 'JIT Compiler'],
    metrics: { before: '500KB CSS', after: '15KB CSS', improvement: '97% plus léger' }
  },
  {
    name: 'Framer Motion',
    icon: '◆',
    color: '#0055FF', 
    description: 'Production-Ready Animations',
    power: 'RÉVOLUTION UX: GPU-accelerated = 60fps garanti. Layout animations = morphing fluide. Gesture support = interaction naturelle mobile.',
    code: `// Framer: Animations production-ready
<motion.div
  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
  whileHover={{ scale: 1.05, rotateX: 5 }}
  transition={{ type: "spring", stiffness: 300 }}
>`,
    benefits: ['Gesture Support', 'Layout Animations', 'SVG Support'],
    metrics: { before: 'CSS animations 30fps', after: 'Motion 60fps', improvement: '2x fluidité' }
  },
  {
    name: 'Claude IA',
    icon: '◆',
    color: '#ff6b35',
    description: 'Marketing Humain × IA',
    power: 'RÉVOLUTION MARKETING: Analyse comportementale = 140x ROI. Content generation = 10x plus rapide. UX optimization = conversion 11.3% vs 2-3% industrie.',
    code: `// Claude: Marketing révolutionnaire
const optimizeConversion = async (userData) => {
  const psychology = await claude.analyzeUser(userData)
  const content = await claude.generateOptimized(psychology)
  return { roi: 140, conversion: 11.3 } // vs 2.3% standard
}`,
    benefits: ['Content Gen', 'Code Review', 'UX Analysis'],
    metrics: { before: '2.3% conversion', after: '11.3% conversion', improvement: '140x ROI' }
  }
]

interface TechStackCarouselProps {
  title: string
  subtitle: string
  description: string
}

export default function TechStackCarousel({
  title,
  subtitle, 
  description
}: TechStackCarouselProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStack.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, isInView])

  const activeTech = techStack[activeIndex]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-white/5 via-black to-white/5 relative overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd507' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            {title} <span className="font-bold text-yellow-400">OSOM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Tech Stack Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              ▲ Stack Technique Premium
            </h3>
            
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`relative cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-white/10 to-white/5 border-yellow-400/50 shadow-2xl' 
                    : 'bg-white/5 border-gray-700/50 hover:border-gray-600/50'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  {/* Tech Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `2px solid ${tech.color}30`
                    }}
                    animate={activeIndex === index ? { 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  
                  {/* Tech Info */}
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg">{tech.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{tech.description}</p>
                    {activeIndex === index && tech.power && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-yellow-400 leading-relaxed font-medium mt-2"
                      >
                        {tech.power}
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Active Indicator - Fixed animation */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-3 h-3 rounded-full bg-yellow-400"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                
                {/* Benefits Tags */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {/* Benefits Pills */}
                    {tech.benefits.map((benefit, i) => (
                      <motion.span
                        key={benefit}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30"
                      >
                        {benefit}
                      </motion.span>
                    ))}
                    
                    {/* Performance Metrics */}
                    {tech.metrics && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-3 grid grid-cols-3 gap-2 text-xs"
                      >
                        <div className="bg-red-500/10 px-2 py-1 rounded border border-red-500/30">
                          <div className="text-red-300 font-mono">{tech.metrics.before}</div>
                        </div>
                        <div className="bg-green-500/10 px-2 py-1 rounded border border-green-500/30">
                          <div className="text-green-300 font-mono">{tech.metrics.after}</div>
                        </div>
                        <div className="bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/30">
                          <div className="text-yellow-300 font-mono font-bold">{tech.metrics.improvement}</div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Code Editor Window */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">
                    osom-{activeTech.name.toLowerCase().replace(/\s+/g, '-')}.tsx
                  </span>
                </div>
                <motion.div
                  className="flex items-center space-x-2 text-xs text-gray-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>LIVE</span>
                </motion.div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Code with syntax highlighting simulation */}
                    <pre className="text-gray-300 whitespace-pre-wrap">
                      {activeTech.code.split('\n').map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="hover:bg-gray-800/50 px-2 py-1 rounded"
                        >
                          <span className="text-gray-500 mr-4 select-none">
                            {(i + 1).toString().padStart(2, ' ')}
                          </span>
                          <span 
                            dangerouslySetInnerHTML={{
                              __html: line
                                .replace(/\/\/.*$/g, '<span class="text-green-400">$&</span>')
                                .replace(/(['"`])([^'"`]*)\1/g, '<span class="text-yellow-300">$&</span>')
                                .replace(/\b(const|let|var|function|async|await|return|export|import|interface|type)\b/g, '<span class="text-blue-400">$&</span>')
                                .replace(/\b(from|as|default)\b/g, '<span class="text-purple-400">$&</span>')
                            }}
                          />
                        </motion.div>
                      ))}
                    </pre>
                  </motion.div>
                </AnimatePresence>
                
                {/* WHY This Matters - Argumentaire */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-6 p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 rounded-xl border border-yellow-400/30"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-yellow-400 text-xs font-bold">WHY {activeTech.name}?</span>
                  </div>
                  <div className="text-yellow-100 text-xs leading-relaxed mb-3">
                    {activeTech.power}
                  </div>
                  
                  {/* Impact Metrics */}
                  {activeTech.metrics && (
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-red-500/20 px-2 py-1 rounded border border-red-400/30 text-center">
                        <div className="text-red-200 font-bold text-xs mb-1">AVANT</div>
                        <div className="text-red-300 font-mono text-xs">{activeTech.metrics.before}</div>
                      </div>
                      <div className="bg-green-500/20 px-2 py-1 rounded border border-green-400/30 text-center">
                        <div className="text-green-200 font-bold text-xs mb-1">APRÈS</div>
                        <div className="text-green-300 font-mono text-xs">{activeTech.metrics.after}</div>
                      </div>
                      <div className="bg-yellow-500/20 px-2 py-1 rounded border border-yellow-400/30 text-center">
                        <div className="text-yellow-200 font-bold text-xs mb-1">GAIN</div>
                        <div className="text-yellow-300 font-mono text-xs font-bold">{activeTech.metrics.improvement}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Floating Performance Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-2xl font-bold text-sm shadow-xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              ★ 140x PERFORMANCE
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Stack technique maîtrisé par des développeurs obsessés par la performance
          </p>
          <div className="flex justify-center space-x-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                  activeIndex === index ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                animate={activeIndex === index ? { 
                  boxShadow: ['0 0 0 0 rgba(255, 212, 7, 0.7)', '0 0 0 15px rgba(255, 212, 7, 0)']
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}