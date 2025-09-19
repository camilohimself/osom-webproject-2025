'use client'

import { motion } from 'framer-motion'
import SEOAuditTool from '@/components/tools/SEOAuditTool'
import ROICalculatorEducatif from '@/components/tools/ROICalculatorEducatif'
import AnimatedElement from '@/components/ui/AnimatedElement'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export default function OutilsPage() {

  // Premium animation variants (homepage level)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const badgeVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black">

      {/* Progress Bars Sublimes */}
      <ScrollProgressIndicator />
      {/* Premium Hero Section - Homepage Level */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Premium Gradient Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, #ffd50715, transparent 50%)",
              "radial-gradient(circle at 75% 75%, #ffd50720, transparent 50%)",
              "radial-gradient(circle at 25% 25%, #ffd50715, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#ffd507" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#10B981" }}
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge with Pulse Animation */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              variants={badgeVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-yellow-400 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-yellow-400 text-sm font-medium tracking-wide">
                OUTILS PREMIUM GRATUITS • RÉSULTATS INSTANTANÉS
              </span>
            </motion.div>
            
            {/* Premium Title with Word-by-Word Animation */}
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={titleVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {'Outils Marketing Professionnels'.split(' ').map((word, index) => {
                const isHighlight = word === 'Marketing' || word === 'Professionnels'
                return (
                  <motion.span
                    key={index}
                    className={isHighlight ? 'text-yellow-400 font-bold' : ''}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                  >
                    {word}{' '}
                  </motion.span>
                )
              })}
            </motion.h1>
            
            {/* Enhanced Description */}
            <motion.p 
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Analysez votre potentiel SEO et calculez votre performance avec nos outils professionnels.
              <br />
              <span className="text-yellow-400 font-semibold">Audit complet</span> et 
              <span className="text-green-400 font-semibold"> projection personnalisée</span> gratuits.
            </motion.p>
            
            {/* Premium Animated Stats Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { label: "2 outils", detail: "essentiels", color: "#ffd507", icon: "" },
                { label: "100%", detail: "gratuit", color: "#10B981", icon: "" },
                { label: "< 30 sec", detail: "chrono", color: "#06B6D4", icon: "" },
                { label: "Data GA4", detail: "vérifiée", color: "#8B5CF6", icon: "" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl px-6 py-4 border transition-all duration-500 group cursor-pointer"
                  style={{ 
                    borderColor: `${stat.color}20`,
                    backgroundColor: 'transparent'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${stat.color}20`,
                    borderColor: `${stat.color}40`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <div className="flex items-center">
                    {stat.icon && <span className="text-lg mr-2">{stat.icon}</span>}
                    <div>
                      <span className="font-bold" style={{ color: stat.color }}>
                        {stat.label}
                      </span>
                      <span className="text-gray-300 ml-2 text-sm">{stat.detail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Données GA4 Vérifiées</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-yellow-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span>Culture Peinture: performance supérieure</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-cyan-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>Artisane Lumière: engagement élevé</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools Content with Premium Loading */}
      <section className="py-32 bg-gradient-to-br from-white/5 via-black to-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* SEO Audit Tool Section */}
          <AnimatedElement type="slideUp" delay={0.2}>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center mb-6">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-cyan-400 mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-cyan-400 text-sm font-medium tracking-wide">
                  AUDIT SEO PROFESSIONNEL • ALGORITHME ÉPROUVÉ
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                <span className="text-cyan-400 font-bold">Audit SEO</span> Automatisé
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Analysez les performances SEO de votre site et recevez des recommandations personnalisées. 
                <span className="text-cyan-400 font-semibold"> Même outil utilisé pour nos clients à CHF 1,500</span>.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slideUp" delay={0.4}>
            <div className="mb-32">
              <SEOAuditTool />
            </div>
          </AnimatedElement>

          {/* ROI Calculator Section - Desktop uniquement */}
          <div className="hidden lg:block">
            <ROICalculatorEducatif />
          </div>

          {/* Message mobile */}
          <div className="lg:hidden text-center py-20">
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Calculateur disponible sur desktop</h3>
              <p className="text-gray-300 mb-6">
                Pour une expérience optimale, utilisez un ordinateur pour accéder au calculateur roi interactif.
              </p>
              <motion.a
                href="/contact"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Consultation directe
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/10 via-transparent to-green-400/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement type="scale" delay={0.2}>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Prêt à <span className="text-yellow-400 font-bold">transformer</span> vos résultats ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez les entreprises qui ont multiplié leur ROI par <strong className="text-green-400">14x</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(255, 221, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Stratégie Gratuite
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              
              <motion.a
                href="/realisations"
                className="border-2 border-yellow-400/60 text-yellow-400 px-8 py-4 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir Case Studies
              </motion.a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}