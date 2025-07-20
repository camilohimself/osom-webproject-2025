'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Déclaration du type Calendly pour TypeScript
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string; [key: string]: any }) => void;
    };
  }
}

interface InteractiveBenefitCardsProps {
  onCalendlyEvent?: (eventName: string, eventData: any) => void;
}

interface ChartData {
  label: string
  value: number
  color: string
  description: string
}

const InteractiveBenefitCards = ({ onCalendlyEvent }: InteractiveBenefitCardsProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [animatedValues, setAnimatedValues] = useState({
    diagnostic: 0,
    roi: 0,
    timeline: 0
  })

  // Données réelles OSOM
  const diagnosticData: ChartData[] = [
    { label: 'Sites traditionnels', value: 2.5, color: '#ef4444', description: 'Taux de conversion moyen industrie' },
    { label: 'Sites OSOM', value: 11.3, color: '#eab308', description: 'Performance Culture Peinture GA4' },
  ]

  const roiData: ChartData[] = [
    { label: 'Publicité payante', value: 49, color: '#ef4444', description: 'Conversions 200 jours' },
    { label: 'Stratégie OSOM', value: 688, color: '#22c55e', description: 'Conversions organiques' },
  ]

  const timelineSteps = [
    { day: 0, label: 'Diagnostic', status: 'active', color: '#eab308' },
    { day: 2, label: 'Plan d\'action', status: 'pending', color: '#8b5cf6' },
    { day: 10, label: 'Site live', status: 'pending', color: '#06b6d4' },
    { day: 30, label: 'Premiers résultats', status: 'pending', color: '#22c55e' },
  ]

  // Animation des valeurs au hover
  useEffect(() => {
    if (activeCard === 0) {
      // Animate diagnostic values
      setTimeout(() => setAnimatedValues(prev => ({ ...prev, diagnostic: 11.3 })), 300)
    } else if (activeCard === 1) {
      // Animate ROI values  
      setTimeout(() => setAnimatedValues(prev => ({ ...prev, roi: 140 })), 300)
    } else if (activeCard === 2) {
      // Animate timeline
      setTimeout(() => setAnimatedValues(prev => ({ ...prev, timeline: 10 })), 300)
    }
  }, [activeCard])

  // Reset animations when no card is hovered
  useEffect(() => {
    if (activeCard === null) {
      setAnimatedValues({ diagnostic: 0, roi: 0, timeline: 0 })
    }
  }, [activeCard])

  // Configuration des événements Calendly
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Écouter les événements Calendly
      window.addEventListener('message', function(e) {
        if (e.data.event && e.data.event.indexOf('calendly') === 0) {
          console.log('Calendly Event:', e.data.event)
          
          if (e.data.event === 'calendly.event_scheduled') {
            console.log('RDV planifié!', e.data.event_details)
            // Notifier le parent que le RDV est planifié
            if (onCalendlyEvent) {
              onCalendlyEvent('event_scheduled', e.data.event_details)
            }
          }
        }
      })
    }
  }, [onCalendlyEvent])

  // Fonction pour ouvrir Calendly
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/osomcreativemarketing',
        text: 'Planifier une consultation',
        color: '#eab308',
        textColor: '#000000',
        branding: false
      })
    } else {
      // Fallback : ouvrir dans un nouvel onglet
      window.open('https://calendly.com/osomcreativemarketing', '_blank')
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
      
      {/* Carte 1 - Diagnostic avec graphique de conversion */}
      <motion.div 
        className="group relative overflow-hidden cursor-pointer"
        onHoverStart={() => setActiveCard(0)}
        onHoverEnd={() => setActiveCard(null)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-400/10 to-transparent rounded-2xl"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500"></div>
        
        {/* Contenu */}
        <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[320px]">
          {/* Icon premium */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span className="text-black text-3xl font-bold">🎯</span>
            </div>
            <div className="text-yellow-400 font-mono text-xs tracking-wider uppercase">GRATUIT</div>
          </div>
          
          {/* Titre principal */}
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Diagnostic
              <br />
              <span className="text-yellow-400">Complet</span>
            </h3>
          </div>
          
          {/* Graphique interactif */}
          <div className="mb-4">
            {activeCard === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                {diagnosticData.map((item, index) => (
                  <div key={item.label} className="text-left">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">{item.label}</span>
                      <span className="font-bold" style={{ color: item.color }}>
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.value / 12) * 100}%` }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
                <div className="text-yellow-400 text-sm font-mono mt-3">
                  4x plus performant
                </div>
              </motion.div>
            ) : (
              <div className="text-gray-300 leading-relaxed">
                <p className="text-base mb-3">Analyse approfondie de votre</p>
                <p className="text-sm text-yellow-400 font-medium">situation digitale actuelle</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Carte 2 - Plan d'Action avec ROI */}
      <motion.div 
        className="group relative overflow-hidden cursor-pointer"
        onHoverStart={() => setActiveCard(1)}
        onHoverEnd={() => setActiveCard(null)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background avec dégradé violet */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent rounded-2xl"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500"></div>
        
        {/* Contenu */}
        <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[320px]">
          {/* Icon premium */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span className="text-white text-3xl font-bold">📊</span>
            </div>
            <div className="text-purple-400 font-mono text-xs tracking-wider uppercase">PERSONNALISÉ</div>
          </div>
          
          {/* Titre principal */}
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Plan d'Action
              <br />
              <span className="text-purple-400">Sur Mesure</span>
            </h3>
          </div>
          
          {/* Graphique ROI */}
          <div className="mb-4">
            {activeCard === 1 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* ROI multiplier animé */}
                <div className="relative">
                  <motion.div 
                    className="text-4xl font-bold text-purple-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    {animatedValues.roi}x
                  </motion.div>
                  <div className="text-gray-300 text-sm">Plus de conversions</div>
                </div>
                
                {/* Comparaison rapide */}
                <div className="flex justify-between text-xs">
                  <div className="text-red-400">
                    <div className="font-bold">49</div>
                    <div>Pub payante</div>
                  </div>
                  <div className="text-green-400">
                    <div className="font-bold">688</div>
                    <div>OSOM organique</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-gray-300 leading-relaxed">
                <p className="text-base mb-3">Stratégie adaptée à vos</p>
                <p className="text-sm text-purple-400 font-medium">objectifs & budget spécifique</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Carte 3 - Timeline interactive avec Calendly */}
      <motion.div 
        className="group relative overflow-hidden cursor-pointer"
        onHoverStart={() => setActiveCard(2)}
        onHoverEnd={() => setActiveCard(null)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={openCalendly}
      >
        {/* Background avec dégradé cyan */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-cyan-400/10 to-transparent rounded-2xl"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500"></div>
        
        {/* Contenu */}
        <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[320px]">
          {/* Icon premium avec indication de clic */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl group-hover:shadow-cyan-400/50">
              <span className="text-black text-3xl font-bold">⚡</span>
            </div>
            <div className="text-cyan-400 font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2">
              RAPIDE
              <span className="text-white animate-pulse">👆</span>
            </div>
          </div>
          
          {/* Titre principal */}
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Consultation
              <br />
              <span className="text-cyan-400">Express</span>
            </h3>
          </div>
          
          {/* Timeline interactive */}
          <div className="mb-4">
            {activeCard === 2 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                {timelineSteps.map((step, index) => (
                  <motion.div 
                    key={step.label}
                    className="flex items-center justify-between text-xs"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                      <span className="text-gray-300">{step.label}</span>
                    </div>
                    <span className="text-cyan-400 font-mono">J+{step.day}</span>
                  </motion.div>
                ))}
                <div className="text-cyan-400 text-sm font-mono mt-3 border-t border-cyan-400/20 pt-3">
                  Résultats en {animatedValues.timeline || 10} jours
                </div>
              </motion.div>
            ) : (
              <div className="text-gray-300 leading-relaxed">
                <p className="text-base mb-3">Rendez-vous programmé</p>
                <p className="text-sm text-cyan-400 font-medium mb-2">sous 48h maximum</p>
                <div className="mt-3 px-4 py-2 bg-cyan-400/20 rounded-lg border border-cyan-400/30">
                  <p className="text-cyan-400 text-sm font-bold">🗓️ Cliquer pour réserver</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default InteractiveBenefitCards