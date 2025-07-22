'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Custom Hero Section - Expert CRM × Claude Automation Revolution
const CustomHeroSection = () => {
  const [binaryCode, setBinaryCode] = useState('')
  
  useEffect(() => {
    const generateBinary = () => {
      const codes = []
      for (let i = 0; i < 50; i++) {
        codes.push(Math.random() > 0.5 ? '1' : '0')
      }
      return codes.join('')
    }
    
    const interval = setInterval(() => {
      setBinaryCode(generateBinary())
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-emerald-900">
      {/* Animated Binary Rain Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="text-emerald-400 font-mono text-xs leading-tight"
        >
          {binaryCode.split('').map((bit, i) => (
            <span key={i} className="inline-block mr-1">
              {bit}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Liquid Chrome Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Human Expertise */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl font-light text-gray-300 tracking-wide"
              >
                L'EXPERT HUMAIN
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-2"
              >
                <div className="text-emerald-400 text-lg font-medium">● HubSpot Advanced Certified</div>
                <div className="text-emerald-400 text-lg font-medium">● Pipedrive Automation Expert</div>
                <div className="text-emerald-400 text-lg font-medium">● ActiveCampaign Mastery</div>
                <div className="text-emerald-400 text-lg font-medium">● +78% Conversions Prouvées</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-gray-400 text-sm max-w-md leading-relaxed"
              >
                Configuration technique obsessionnelle • Triggers comportementaux précis • 
                Scoring prédictif intelligent • Setup qui fonctionne vraiment
              </motion.div>
            </div>

            {/* Human Metrics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-4">
                <div className="text-emerald-400 text-2xl font-bold">+78%</div>
                <div className="text-gray-300 text-sm">Conversions</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-4">
                <div className="text-emerald-400 text-2xl font-bold">-65%</div>
                <div className="text-gray-300 text-sm">Temps Manuel</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Claude AI Power */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl font-light text-gray-300 tracking-wide text-right"
              >
                CLAUDE AUTOMATION
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="space-y-2 text-right"
              >
                <div className="text-cyan-400 text-lg font-medium">● Workflow Logic Optimization</div>
                <div className="text-cyan-400 text-lg font-medium">● Sequence Behavior Analysis</div>
                <div className="text-cyan-400 text-lg font-medium">● Lead Scoring Intelligence</div>
                <div className="text-cyan-400 text-lg font-medium">● 3.2x Valeur Client Générée</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-gray-400 text-sm max-w-md leading-relaxed text-right ml-auto"
              >
                Analyse comportementale avancée • Optimisation continue • 
                Prédiction conversion • Intelligence artificielle appliquée
              </motion.div>
            </div>

            {/* AI Metrics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl font-bold">3.2x</div>
                <div className="text-gray-300 text-sm">Valeur Client</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl font-bold">94%</div>
                <div className="text-gray-300 text-sm">Data Accuracy</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Center Collaboration Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1.2, type: "spring", stiffness: 100 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-4xl font-bold text-black"
            >
              ×
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom - Cascade Typography */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center mt-20 space-y-4"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            expert crm × claude automation
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-xl text-gray-400 font-light tracking-wide"
          >
            L'alliance révolutionnaire entre expertise humaine CRM et intelligence artificielle Claude
          </motion.p>

          {/* Live Metrics Display */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex justify-center items-center space-x-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">8900 CHF</div>
              <div className="text-sm text-gray-400">Setup Premium</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">6 mois</div>
              <div className="text-sm text-gray-400">Support Expert</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">+78%</div>
              <div className="text-sm text-gray-400">ROI Garanti</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomHeroSection