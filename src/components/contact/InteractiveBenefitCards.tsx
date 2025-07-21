'use client'

import { useState, useEffect, useCallback } from 'react'
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
  onConversionEvent?: (eventName: string, eventData: any) => void;
}

interface ChartData {
  label: string
  value: number
  color: string
  description: string
}

const InteractiveBenefitCards = ({ onCalendlyEvent, onConversionEvent }: InteractiveBenefitCardsProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isUrgentMode, setIsUrgentMode] = useState(false)
  const [showExpectations, setShowExpectations] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState<string>('general')
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

  const urgentTimelineSteps = [
    { day: 0, label: 'Contact immédiat', status: 'active', color: '#ef4444' },
    { day: 0, label: 'Analyse express', status: 'pending', color: '#eab308' },
    { day: 1, label: 'Solutions pro', status: 'pending', color: '#06b6d4' },
    { day: 2, label: 'Mise en œuvre', status: 'pending', color: '#22c55e' },
  ]

  // Témoignages clients réels par secteur
  const testimonials = [
    {
      type: 'diagnostic',
      text: 'Le diagnostic OSOM a révélé 14,171 sessions perdues dans nos données. Exactement ce dont nous avions besoin.',
      author: 'Dr. Sarah M.',
      role: 'Directrice Cabinet Médical',
      industry: 'Santé'
    },
    {
      type: 'strategy',
      text: 'Leur approche data-driven nous a permis de multiplier nos conversions par 4. Outils professionnels, résultats mesurables.',
      author: 'Me Jean-Paul R.',
      role: 'Avocat Associé',
      industry: 'Juridique'  
    },
    {
      type: 'urgent',
      text: 'Réponse sous 90 minutes pour notre urgence marketing. Professionnalisme exemplaire.',
      author: 'Claire D.',
      role: 'Responsable Fondation',
      industry: 'Associatif'
    }
  ]

  // Messages spécifiques par industrie
  const industryMessages = {
    general: {
      title: 'Tous Professionnels',
      description: 'Solutions digitales adaptées à votre secteur d\'activité',
      urgentCases: 'Site en panne, campagne critique, deadline importante'
    },
    healthcare: {
      title: 'Professionnels de Santé',
      description: 'Conformité HIPAA, prise RDV patients, visibilité locale',
      urgentCases: 'Nouvelle clinique, crise réputation, concurrence agressive'
    },
    legal: {
      title: 'Cabinets Juridiques',
      description: 'Conformité déontologique, génération clients, autorité légale',
      urgentCases: 'Lancement cabinet, litige public, expertise médiatique'
    },
    nonprofit: {
      title: 'Fondations & ONG',
      description: 'Collecte de fonds, transparence, engagement communautaire',
      urgentCases: 'Campagne urgente, financement critique, crise communication'
    },
    services: {
      title: 'Entreprises Services',
      description: 'Lead generation B2B, crédibilité secteur, différenciation',
      urgentCases: 'Nouveau marché, concurrence déloyale, pivot stratégique'
    }
  }

  const industries = [
    { key: 'general', label: 'Général', icon: 'briefcase' },
    { key: 'healthcare', label: 'Santé', icon: 'medical' },
    { key: 'legal', label: 'Juridique', icon: 'scales' },
    { key: 'nonprofit', label: 'Associatif', icon: 'heart' },
    { key: 'services', label: 'Services', icon: 'network' }
  ]

  // SVG Icons Component
  const IconSVG = ({ type, className = "w-4 h-4" }: { type: string, className?: string }) => {
    const icons = {
      calendar: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <rect x="8" y="14" width="2" height="2" rx="1"/>
        </svg>
      ),
      lightning: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      briefcase: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      medical: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      scales: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v18"/>
          <path d="M8 6l4-4 4 4"/>
          <path d="M4 14a4 4 0 0 0 8 0c0-1-1-3-4-3s-4 2-4 3"/>
          <path d="M12 14a4 4 0 0 0 8 0c0-1-1-3-4-3s-4 2-4 3"/>
        </svg>
      ),
      heart: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      network: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2"/>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49"/>
          <path d="M7.76 16.24a6 6 0 0 1 0-8.49"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M4.93 19.07a10 10 0 0 1 0-14.14"/>
        </svg>
      ),
      chevronDown: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      ),
      target: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      strategy: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      ),
      rocket: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        </svg>
      )
    }
    
    return icons[type as keyof typeof icons] || null
  }

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

  // Fonction de tracking des conversions
  const trackConversion = useCallback((eventName: string, eventData: any = {}) => {
    const trackingData = {
      timestamp: new Date().toISOString(),
      industry: selectedIndustry,
      urgentMode: isUrgentMode,
      ...eventData
    }
    
    // Appel du callback parent
    if (onConversionEvent) {
      onConversionEvent(eventName, trackingData)
    }
    
    // Log pour debugging
    console.log('Conversion Event:', eventName, trackingData)
    
    // Envoi vers analytics (GA4, Mixpanel, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        custom_parameter_1: selectedIndustry,
        custom_parameter_2: isUrgentMode ? 'urgent' : 'standard',
        ...eventData
      })
    }
  }, [selectedIndustry, isUrgentMode, onConversionEvent])

  // Configuration des événements Calendly
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Écouter les événements Calendly
      window.addEventListener('message', function(e) {
        if (e.data.event && e.data.event.indexOf('calendly') === 0) {
          console.log('Calendly Event:', e.data.event)
          
          if (e.data.event === 'calendly.event_scheduled') {
            console.log('RDV planifié!', e.data.event_details)
            
            // Track conversion
            trackConversion('calendly_booking_completed', {
              event_details: e.data.event_details,
              card_step: 3,
              conversion_type: isUrgentMode ? 'urgent_booking' : 'standard_booking'
            })
            
            // Notifier le parent que le RDV est planifié
            if (onCalendlyEvent) {
              onCalendlyEvent('event_scheduled', e.data.event_details)
            }
          }
        }
      })
    }
  }, [onCalendlyEvent, selectedIndustry, isUrgentMode, trackConversion])

  // Fonction pour ouvrir Calendly
  const openCalendly = () => {
    // Track Calendly opening
    trackConversion('calendly_opened', {
      method: typeof window !== 'undefined' && window.Calendly ? 'popup' : 'new_tab',
      step: 4,
      final_step: true
    })
    
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
    <div className="mt-16 max-w-6xl mx-auto">
      
      {/* Industry Selector */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
          <span className="text-green-400 text-sm font-medium tracking-wide">VOTRE SECTEUR</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <button
              key={industry.key}
              onClick={() => {
                setSelectedIndustry(industry.key)
                trackConversion('industry_selected', {
                  industry: industry.key,
                  industry_label: industry.label,
                  step: 1
                })
              }}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 font-medium text-base hover:scale-105 ${
                selectedIndustry === industry.key
                  ? 'bg-green-400 text-black shadow-2xl shadow-green-400/25'
                  : 'bg-black/60 text-gray-400 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm'
              }`}
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              <IconSVG 
                type={industry.icon} 
                className={`w-5 h-5 transition-transform duration-300 ${
                  selectedIndustry === industry.key ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />
              <span className="font-semibold">{industry.label}</span>
            </button>
          ))}
        </div>
        
        <p className="text-gray-300 text-sm mt-4 max-w-2xl mx-auto">
          {industryMessages[selectedIndustry as keyof typeof industryMessages]?.description}
        </p>
      </div>

      {/* Toggle Mode Urgent */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
          <span className="text-yellow-400 text-sm font-medium tracking-wide">MODE DE CONSULTATION</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsUrgentMode(false)
              trackConversion('consultation_mode_selected', {
                mode: 'standard',
                step: 2
              })
            }}
            className={`group flex items-center space-x-4 px-8 py-6 rounded-2xl transition-all duration-500 font-semibold text-lg hover:scale-105 ${
              !isUrgentMode 
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-black shadow-2xl shadow-cyan-400/30 scale-105' 
                : 'bg-black/60 text-gray-300 hover:text-white border border-white/10 hover:border-cyan-400/30 backdrop-blur-sm'
            }`}
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
          >
            <IconSVG 
              type="calendar" 
              className={`w-6 h-6 transition-all duration-300 ${
                !isUrgentMode ? 'text-black' : 'text-cyan-400 group-hover:scale-110'
              }`}
            />
            <span>Consultation Standard</span>
          </button>
          
          <button
            onClick={() => {
              setIsUrgentMode(true)
              trackConversion('consultation_mode_selected', {
                mode: 'urgent',
                step: 2
              })
            }}
            className={`group flex items-center space-x-4 px-8 py-6 rounded-2xl transition-all duration-500 font-semibold text-lg hover:scale-105 ${
              isUrgentMode 
                ? 'bg-gradient-to-r from-red-400 to-red-500 text-black shadow-2xl shadow-red-400/30 scale-105' 
                : 'bg-black/60 text-gray-300 hover:text-white border border-white/10 hover:border-red-400/30 backdrop-blur-sm'
            }`}
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
          >
            <IconSVG 
              type="lightning" 
              className={`w-6 h-6 transition-all duration-300 ${
                isUrgentMode ? 'text-black' : 'text-red-400 group-hover:scale-110'
              }`}
            />
            <span>Urgence Professionnelle</span>
          </button>
        </div>
        
        <p className="text-gray-300 text-sm mt-4 max-w-2xl mx-auto">
          {isUrgentMode 
            ? `Situations urgentes : ${industryMessages[selectedIndustry as keyof typeof industryMessages]?.urgentCases}`
            : `Idéal pour planifier votre stratégie digitale sur le long terme`
          }
        </p>
        
        {/* Progress indicator */}
        <div className="mt-8 flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black text-sm font-bold">1</span>
            </div>
            <span className="text-gray-300 text-sm">Diagnostic gratuit</span>
          </div>
          <div className="w-8 h-px bg-gray-600"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500/30 border border-purple-500 rounded-full flex items-center justify-center">
              <span className="text-purple-400 text-sm font-bold">2</span>
            </div>
            <span className="text-gray-400 text-sm">Plan sur-mesure</span>
          </div>
          <div className="w-8 h-px bg-gray-600"></div>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 ${isUrgentMode ? 'bg-red-400/30 border-red-400' : 'bg-cyan-400/30 border-cyan-400'} border rounded-full flex items-center justify-center`}>
              <span className={`${isUrgentMode ? 'text-red-400' : 'text-cyan-400'} text-sm font-bold`}>3</span>
            </div>
            <span className="text-gray-400 text-sm">{isUrgentMode ? 'Contact 2h' : 'RDV 48h'}</span>
          </div>
        </div>
        
        {/* Expandable expectations section */}
        <div className="mt-8">
          <button
            onClick={() => {
              setShowExpectations(!showExpectations)
              trackConversion('expectations_toggled', {
                action: showExpectations ? 'collapsed' : 'expanded',
                step: 2.5
              })
            }}
            className="group mx-auto flex items-center space-x-3 px-6 py-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105"
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
          >
            <span>À quoi s'attendre ?</span>
            <motion.div
              animate={{ rotate: showExpectations ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <IconSVG type="chevronDown" className="w-4 h-4" />
            </motion.div>
          </button>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showExpectations ? 'auto' : 0, 
              opacity: showExpectations ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <IconSVG type="target" className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Étape 1: Diagnostic</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Analyse de vos outils actuels</li>
                  <li>• Identification des lacunes</li>
                  <li>• Rapport détaillé en 48h</li>
                  <li>• 100% gratuit, sans engagement</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <IconSVG type="strategy" className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Étape 2: Stratégie</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Plan d'action personnalisé</li>
                  <li>• Priorisation des actions</li>
                  <li>• Budget transparent</li>
                  <li>• Timeline réaliste</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className={`w-12 h-12 ${isUrgentMode ? 'bg-red-400/20' : 'bg-cyan-400/20'} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <IconSVG 
                    type={isUrgentMode ? 'lightning' : 'rocket'} 
                    className={`w-6 h-6 ${isUrgentMode ? 'text-red-400' : 'text-cyan-400'}`} 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Étape 3: {isUrgentMode ? 'Urgence' : 'Lancement'}</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  {isUrgentMode ? (
                    <>
                      <li>• Réponse sous 2h garantie</li>
                      <li>• Solutions immédiates</li>
                      <li>• Support prioritaire</li>
                      <li>• Intervention express</li>
                    </>
                  ) : (
                    <>
                      <li>• Planification détaillée</li>
                      <li>• Mise en œuvre progressive</li>
                      <li>• Suivi des résultats</li>
                      <li>• Optimisation continue</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Carte 1 - Diagnostic avec graphique de conversion */}
      <motion.div 
        className="group relative overflow-hidden cursor-pointer"
        onHoverStart={() => {
          setActiveCard(0)
          trackConversion('card_hovered', {
            card: 'diagnostic',
            card_number: 1,
            step: 3
          })
        }}
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
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-yellow-400/25">
              <IconSVG type="target" className="w-10 h-10 text-black" />
            </div>
            <div className="text-yellow-400 font-mono text-xs tracking-wider uppercase font-bold">GRATUIT</div>
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
          
          {/* Testimonial social proof */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: activeCard === 0 ? 1 : 0, y: activeCard === 0 ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 px-4 py-3 bg-black/60 rounded-lg border border-yellow-400/20"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <IconSVG type="medical" className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  "{testimonials.find(t => t.type === 'diagnostic')?.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-400 text-xs font-semibold">
                      {testimonials.find(t => t.type === 'diagnostic')?.author}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonials.find(t => t.type === 'diagnostic')?.role}
                    </p>
                  </div>
                  <span className="text-yellow-400/60 text-xs font-mono">
                    {testimonials.find(t => t.type === 'diagnostic')?.industry}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Carte 2 - Plan d'Action avec ROI */}
      <motion.div 
        className="group relative overflow-hidden cursor-pointer"
        onHoverStart={() => {
          setActiveCard(1)
          trackConversion('card_hovered', {
            card: 'strategy',
            card_number: 2,
            step: 3
          })
        }}
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-purple-500/25">
              <IconSVG type="strategy" className="w-10 h-10 text-white" />
            </div>
            <div className="text-purple-400 font-mono text-xs tracking-wider uppercase font-bold">PERSONNALISÉ</div>
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
          
          {/* Testimonial social proof */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: activeCard === 1 ? 1 : 0, y: activeCard === 1 ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 px-4 py-3 bg-black/60 rounded-lg border border-purple-400/20"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center">
                  <IconSVG type="scales" className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  "{testimonials.find(t => t.type === 'strategy')?.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-400 text-xs font-semibold">
                      {testimonials.find(t => t.type === 'strategy')?.author}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonials.find(t => t.type === 'strategy')?.role}
                    </p>
                  </div>
                  <span className="text-purple-400/60 text-xs font-mono">
                    {testimonials.find(t => t.type === 'strategy')?.industry}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Carte 3 - Timeline interactive avec Calendly et mode urgent */}
      <motion.div 
        className="group relative overflow-hidden cursor-pointer"
        onHoverStart={() => {
          setActiveCard(2)
          trackConversion('card_hovered', {
            card: 'consultation',
            card_number: 3,
            step: 3
          })
        }}
        onHoverEnd={() => setActiveCard(null)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={openCalendly}
      >
        {/* Background avec dégradé cyan ou rouge selon le mode */}
        <div className={`absolute inset-0 bg-gradient-to-br ${isUrgentMode ? 'from-red-400/20 via-red-400/10' : 'from-cyan-400/20 via-cyan-400/10'} to-transparent rounded-2xl`}></div>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border ${isUrgentMode ? 'border-red-400/30 group-hover:border-red-400/60' : 'border-cyan-400/30 group-hover:border-cyan-400/60'} transition-all duration-500`}></div>
        
        {/* Contenu */}
        <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[320px]">
          {/* Icon premium avec indication de clic */}
          <div className="mb-6">
            <div className={`w-20 h-20 ${isUrgentMode ? 'bg-gradient-to-br from-red-400 to-red-500' : 'bg-gradient-to-br from-cyan-400 to-cyan-500'} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl ${isUrgentMode ? 'shadow-red-400/25 group-hover:shadow-red-400/40' : 'shadow-cyan-400/25 group-hover:shadow-cyan-400/40'}`}>
              <IconSVG 
                type={isUrgentMode ? 'lightning' : 'calendar'} 
                className="w-10 h-10 text-black" 
              />
            </div>
            <div className={`${isUrgentMode ? 'text-red-400' : 'text-cyan-400'} font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2`}>
              {isUrgentMode ? 'URGENT' : 'RAPIDE'}
              <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
            </div>
          </div>
          
          {/* Titre principal */}
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              {isUrgentMode ? 'Urgence' : 'Consultation'}
              <br />
              <span className={isUrgentMode ? 'text-red-400' : 'text-cyan-400'}>
                {isUrgentMode ? 'Professionnelle' : 'Express'}
              </span>
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
                {(isUrgentMode ? urgentTimelineSteps : timelineSteps).map((step, index) => (
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
                    <span className={`${isUrgentMode ? 'text-red-400' : 'text-cyan-400'} font-mono`}>
                      {step.day === 0 ? 'Immédiat' : `J+${step.day}`}
                    </span>
                  </motion.div>
                ))}
                <div className={`${isUrgentMode ? 'text-red-400 border-red-400/20' : 'text-cyan-400 border-cyan-400/20'} text-sm font-mono mt-3 border-t pt-3`}>
                  {isUrgentMode ? 'Réponse sous 2h' : `Résultats en ${animatedValues.timeline || 10} jours`}
                </div>
              </motion.div>
            ) : (
              <div className="text-gray-300 leading-relaxed">
                {isUrgentMode ? (
                  <>
                    <p className="text-base mb-3">Contact immédiat</p>
                    <p className="text-sm text-red-400 font-medium mb-2">Réponse garantie sous 2h</p>
                    <div className="mt-3 px-4 py-2 bg-red-400/20 rounded-lg border border-red-400/30">
                      <p className="text-red-400 text-sm font-bold">Urgence professionnelle</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-base mb-3">Rendez-vous programmé</p>
                    <p className="text-sm text-cyan-400 font-medium mb-2">sous 48h maximum</p>
                    <div className="mt-3 px-4 py-2 bg-cyan-400/20 rounded-lg border border-cyan-400/30">
                      <p className="text-cyan-400 text-sm font-bold">Cliquer pour réserver</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          
          {/* Testimonial social proof */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: activeCard === 2 ? 1 : 0, y: activeCard === 2 ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`mt-4 px-4 py-3 bg-black/60 rounded-lg border ${isUrgentMode ? 'border-red-400/20' : 'border-cyan-400/20'}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 ${isUrgentMode ? 'bg-red-400/20' : 'bg-cyan-400/20'} rounded-lg flex items-center justify-center`}>
                  <IconSVG 
                    type="heart" 
                    className={`w-4 h-4 ${isUrgentMode ? 'text-red-400' : 'text-cyan-400'}`} 
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  "{testimonials.find(t => t.type === 'urgent')?.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isUrgentMode ? 'text-red-400' : 'text-cyan-400'} text-xs font-semibold`}>
                      {testimonials.find(t => t.type === 'urgent')?.author}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonials.find(t => t.type === 'urgent')?.role}
                    </p>
                  </div>
                  <span className={`${isUrgentMode ? 'text-red-400/60' : 'text-cyan-400/60'} text-xs font-mono`}>
                    {testimonials.find(t => t.type === 'urgent')?.industry}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      </div>
    </div>
  )
}

export default InteractiveBenefitCards