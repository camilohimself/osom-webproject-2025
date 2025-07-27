'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Developer Journey Steps
const journeySteps = [
  {
    id: '01',
    title: 'Architecture UX Révolutionnaire',
    subtitle: 'Human Psychology × AI Analysis',
    description: 'Design UX basé sur 6 ans de données comportementales VALAIS. Navigation intuitive, temps de charge ultra-rapide, formulaires psychologiquement optimisés.',
    
    // Before/After Code Comparison
    beforeCode: `// Approche Classique ❌
<form>
  <input type="email" placeholder="Email" />
  <input type="text" placeholder="Nom" />
  <button>Envoyer</button>
</form>`,
    
    afterCode: `// Architecture OSOM × Claude IA ✅
<motion.form
  className="space-y-4 p-6 bg-white/10 rounded-2xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <AnimatedInput
    type="email" 
    label="Votre email professionnel"
    validation={aiValidation}
    conversionOptimized
  />
  <MagneticButton 
    onClick={handleSubmit}
    analytics={trackConversion}
  >
    Démarrer mon projet VALAIS
  </MagneticButton>
</motion.form>`,
    
    metrics: {
      before: { conversion: '2.3%', ux: 'Standard', performance: '65/100' },
      after: { conversion: '11.3%', ux: 'Revolutionary', performance: '95/100' }
    },
    
    icon: '◆',
    color: '#06B6D4', // Cyan
    completionTime: '2-3 jours'
  },
  
  {
    id: '02', 
    title: 'SEO Technique × Claude Intelligence',
    subtitle: 'Local VALAIS × AI Optimization',
    description: 'SEO Valais expert intégré dès le développement. Google Business Profile, schema markup géolocalisé, contenu optimisé par Claude IA pour marché valaisan.',
    
    beforeCode: `<!-- SEO Basique ❌ -->
<head>
  <title>Mon Site Web</title>
  <meta name="description" content="Site web">
</head>`,
    
    afterCode: `<!-- SEO VALAIS × Claude IA ✅ -->
<head>
  <title>Création Site Internet Valais - 1718 Recherches/Mois | OSOM</title>
  <meta name="description" content="Création Site Internet VALAIS : 1718 recherches/mois → Expertise N°1 confirmée. 11.3% conversion vs 2-3% industrie." />
  
  {/* Schema.org structured data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "address": { "addressRegion": "Valais" },
      "geo": { "latitude": 46.2276, "longitude": 7.3597 }
    })}
  </script>
</head>`,
    
    metrics: {
      before: { ranking: 'Page 5-8', clicks: '12/mois', visibility: '2%' },
      after: { ranking: 'Page 1-3', clicks: '400+/mois', visibility: '85%' }
    },
    
    icon: '▦',
    color: '#10B981', // Green
    completionTime: '3-4 jours'
  },
  
  {
    id: '03',
    title: 'Stack Next.js × Performance Beast',
    subtitle: 'Modern Architecture × Speed Optimization',
    description: 'Next.js 14 + TypeScript + Server Components maîtrisés. CDN Suisse, optimisation images automatique, Core Web Vitals parfaits. Technologies 2025 future-proof.',
    
    beforeCode: `// WordPress/PHP Classique ❌
<?php
  $posts = get_posts();
  foreach($posts as $post) {
    echo '<div>' . $post->title . '</div>';
    // 3+ secondes de chargement
  }
?>`,
    
    afterCode: `// Next.js 14 Server Components ✅
export default async function Page() {
  // Server-side rendering
  const data = await getData() // < 200ms
  
  return (
    <Suspense fallback={<OptimizedSkeleton />}>
      {data.map(item => (
        <OptimizedCard 
          key={item.id}
          data={item}
          priority={item.featured}
        />
      ))}
    </Suspense>
  )
}`,
    
    metrics: {
      before: { loading: '3.2s', lighthouse: '45/100', mobile: 'Lent' },
      after: { loading: '<0.8s', lighthouse: '95/100', mobile: 'Ultra-rapide' }
    },
    
    icon: '▲',
    color: '#F59E0B', // Yellow
    completionTime: '4-5 jours'
  }
]

interface DeveloperJourneyTimelineProps {
  title: string
  subtitle: string
  className?: string
}

export default function DeveloperJourneyTimeline({
  title,
  subtitle,
  className = ""
}: DeveloperJourneyTimelineProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(0)
  
  // Scroll progress for timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Auto-advance steps based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.floor(latest * journeySteps.length)
      const clampedIndex = Math.max(0, Math.min(stepIndex, journeySteps.length - 1))
      setActiveStep(clampedIndex)
    })
    
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section 
      ref={containerRef}
      className={`py-32 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden ${className}`}
    >
      
      {/* Background Binary Code Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd507' fill-opacity='0.1'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='8'%3E01%3C/text%3E%3Ctext x='20' y='30' font-family='monospace' font-size='8'%3E10%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s infinite linear'
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
            {title} <span className="font-bold text-yellow-400">OSOM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {subtitle}
          </p>
          
          {/* Progress Overview */}
          <div className="flex justify-center items-center space-x-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className={`w-10 h-10 flex items-center justify-center text-xl font-bold ${
                    activeStep >= index
                      ? `text-yellow-400`
                      : `text-gray-400`
                  }`}
                >
                  {step.icon}
                </motion.div>
                
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeStep > index ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ transformOrigin: "left" }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative">
          
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full"
              style={{ height: progressHeight }}
              initial={{ height: "0%" }}
            />
          </div>

          <div className="space-y-32">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                
                {/* Step Content */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  
                  {/* Timeline Node - Simplifié */}
                  <motion.div
                    className="absolute -left-8 lg:left-1/2 top-8 w-12 h-12 flex items-center justify-center text-xl font-bold lg:-translate-x-1/2 z-10"
                    style={{ 
                      color: step.color
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 ml-12 lg:ml-0"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 20px 40px ${step.color}20`
                    }}
                    animate={activeStep === index ? {
                      borderColor: [`${step.color}30`, `${step.color}80`, `${step.color}30`]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                      >
                        {step.id}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-gray-400">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-8">
                      {step.description}
                    </p>
                    
                    {/* Metrics Comparison */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4">
                        <h4 className="text-red-400 font-bold text-sm mb-3">❌ AVANT</h4>
                        {Object.entries(step.metrics.before).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-400 capitalize">{key}:</span>
                            <span className="text-red-300">{value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4">
                        <h4 className="text-green-400 font-bold text-sm mb-3">✅ APRÈS</h4>
                        {Object.entries(step.metrics.after).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-400 capitalize">{key}:</span>
                            <span className="text-green-300">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Completion Time Badge */}
                    <div className="flex justify-between items-center">
                      <motion.div
                        className="px-4 py-2 rounded-full text-sm font-bold"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {step.completionTime}
                      </motion.div>
                      
                      <motion.div
                        className="text-yellow-400 font-bold"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {activeStep >= index ? '✅ Complété' : '⏳ En cours...'}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Code Comparison */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Before Code */}
                    <motion.div
                      className="bg-gray-900 rounded-2xl overflow-hidden border border-red-500/30"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                    >
                      <div className="bg-red-500/20 p-3 border-b border-red-500/30">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-300 text-sm font-mono">before.tsx</span>
                        </div>
                      </div>
                      <div className="p-4 font-mono text-xs">
                        <pre className="text-red-200 whitespace-pre-wrap overflow-x-auto">
                          {step.beforeCode}
                        </pre>
                      </div>
                    </motion.div>

                    {/* After Code */}
                    <motion.div
                      className="bg-gray-900 rounded-2xl overflow-hidden border border-green-500/30"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                    >
                      <div className="bg-green-500/20 p-3 border-b border-green-500/30">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-300 text-sm font-mono">after.tsx</span>
                        </div>
                      </div>
                      <div className="p-4 font-mono text-xs">
                        <pre className="text-green-200 whitespace-pre-wrap overflow-x-auto">
                          {step.afterCode}
                        </pre>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-32"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/20 to-yellow-400/10 rounded-3xl p-12 border border-yellow-400/30">
            <h3 className="text-3xl font-bold text-white mb-6">
              Votre Projet Web VALAIS en <span className="text-yellow-400">10 Jours</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Architecture révolutionnaire + Performance 14x + SEO local maîtrisé = 
              <strong className="text-yellow-400"> Votre avantage concurrentiel VALAIS</strong>
            </p>
            
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,212,7,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Démarrer la révolution de mon site →
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          from { transform: translateY(-100px); }
          to { transform: translateY(100vh); }
        }
      `}</style>
    </section>
  )
}