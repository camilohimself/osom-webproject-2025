'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'
import { useABTest, activeTests } from './ABTestProvider'
import { useEffect, useState } from 'react'

interface ABTestedCTAProps {
  defaultPrimary?: string
  defaultSecondary?: string
  className?: string
  onConversion?: () => void
}

const ABTestedCTA: React.FC<ABTestedCTAProps> = ({
  defaultPrimary = 'Démarrer mon projet',
  defaultSecondary = 'Calculer mon ROI',
  className = '',
  onConversion
}) => {
  const { variant, isParticipating, trackConversion } = useABTest('hero_cta_variants')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration issues
  if (!mounted) {
    return (
      <div className={`flex flex-col sm:flex-row gap-6 ${className}`}>
        <MagneticButton 
          href="/contact" 
          variant="primary" 
          className="text-lg px-10 py-5"
        >
          {defaultPrimary}
        </MagneticButton>
        <MagneticButton 
          href="/calculator" 
          variant="secondary" 
          className="text-lg px-10 py-5"
        >
          {defaultSecondary}
        </MagneticButton>
      </div>
    )
  }

  // Use variant config or defaults
  const config = variant || {
    primary_text: defaultPrimary,
    secondary_text: defaultSecondary,
    color_scheme: 'yellow',
    urgency: false
  }

  const handlePrimaryClick = () => {
    trackConversion('primary_cta')
    onConversion?.()
  }

  const handleSecondaryClick = () => {
    trackConversion('secondary_cta')
    onConversion?.()
  }

  // Color scheme variants
  const getColorClasses = (scheme: string, isPrimary: boolean) => {
    switch (scheme) {
      case 'green':
        return isPrimary 
          ? 'bg-green-500 text-white hover:bg-green-600' 
          : 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
      case 'gradient':
        return isPrimary
          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
          : 'border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-border text-white hover:from-purple-600 hover:to-blue-600'
      default: // yellow
        return isPrimary
          ? 'bg-yellow-400 text-black hover:bg-yellow-500'
          : 'border-2 border-white/30 text-white hover:bg-white hover:text-black'
    }
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-6 ${className}`}>
      
      {/* Primary CTA */}
      <div className="relative">
        <MagneticButton
          href="/contact"
          variant={config.color_scheme === 'yellow' ? 'primary' : 'secondary'}
          className={`text-lg px-10 py-5 relative overflow-hidden ${
            config.color_scheme !== 'yellow' ? getColorClasses(config.color_scheme, true) : ''
          }`}
          analyticsId={`hero_cta_primary_${variant?.primary_text.replace(/\s+/g, '_').toLowerCase()}`}
        >
          <span className="relative z-10">
            {config.primary_text}
          </span>
          
          {/* Urgency indicator */}
          {config.urgency && (
            <motion.div
              className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              URGENT
            </motion.div>
          )}
        </MagneticButton>

        {/* Results badge for results variant */}
        {config.primary_text.includes('14x') && (
          <motion.div
            className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            PROUVÉ
          </motion.div>
        )}
      </div>

      {/* Secondary CTA */}
      <div className="relative">
        <MagneticButton
          href="/calculator"
          variant="secondary"
          className={`text-lg px-10 py-5 ${
            config.color_scheme !== 'yellow' ? getColorClasses(config.color_scheme, false) : ''
          }`}
          analyticsId={`hero_cta_secondary_${variant?.secondary_text.replace(/\s+/g, '_').toLowerCase()}`}
        >
          <span className="relative z-10 flex flex-col items-center">
            <span>{config.secondary_text}</span>
            
            {/* Urgency sub-text */}
            {config.urgency && config.secondary_text.includes('limitées') && (
              <motion.span 
                className="text-xs opacity-80 mt-1"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⏰ 12 places restantes
              </motion.span>
            )}
          </span>
        </MagneticButton>
      </div>

      {/* Variant indicator for development */}
      {process.env.NODE_ENV === 'development' && isParticipating && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white text-xs px-3 py-2 rounded-lg border border-yellow-400/30 z-50">
          🧪 Test: hero_cta_variants
          <br />
          Variant: {variant ? Object.keys(variant).find(key => 
            activeTests.find(test => test.testId === 'hero_cta_variants')
              ?.variants.find(v => JSON.stringify(v.config) === JSON.stringify(variant))?.id
          ) : 'control'}
        </div>
      )}
    </div>
  )
}

export default ABTestedCTA