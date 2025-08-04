'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { useAnalytics } from '@/hooks/useAnalytics'

// A/B Test Configuration
interface ABTestConfig {
  testId: string
  variants: {
    id: string
    name: string
    weight: number
    config: Record<string, any>
  }[]
  audience?: {
    pages?: string[]
    userTypes?: string[]
    trafficPercentage?: number
  }
}

// Active A/B Tests for OSOM
const activeTests: ABTestConfig[] = [
  {
    testId: 'hero_cta_variants',
    variants: [
      {
        id: 'control',
        name: 'Original CTA',
        weight: 40,
        config: {
          primary_text: 'Démarrer mon projet',
          secondary_text: 'Calculer mon ROI',
          color_scheme: 'yellow',
          urgency: false
        }
      },
      {
        id: 'urgency_variant',
        name: 'Urgency CTA',
        weight: 30,
        config: {
          primary_text: 'Réservez votre audit gratuit',
          secondary_text: 'Places limitées - Janvier 2025',
          color_scheme: 'yellow',
          urgency: true
        }
      },
      {
        id: 'results_variant',
        name: 'Results-focused CTA',
        weight: 30,
        config: {
          primary_text: 'Multiplier mes conversions par 14x',
          secondary_text: 'Voir les résultats Culture Peinture',
          color_scheme: 'green',
          urgency: false
        }
      }
    ],
    audience: {
      pages: ['/', '/services/programmation-ia'],
      trafficPercentage: 100
    }
  },
  {
    testId: 'service_pricing_variants',
    variants: [
      {
        id: 'control',
        name: 'Standard Pricing',
        weight: 50,
        config: {
          show_price: true,
          pricing_format: 'fixed',
          discount: false
        }
      },
      {
        id: 'value_variant',
        name: 'Value-based Pricing',
        weight: 50,
        config: {
          show_price: false,
          pricing_format: 'roi_based',
          discount: true,
          discount_text: '50% Early Bird - Janvier seulement'
        }
      }
    ],
    audience: {
      pages: ['/services'],
      trafficPercentage: 80
    }
  },
  {
    testId: 'magnetic_button_variants',
    variants: [
      {
        id: 'control',
        name: 'Standard Magnetic',
        weight: 50,
        config: {
          magnetic_intensity: 'normal',
          particle_effects: true,
          color_variant: 'yellow'
        }
      },
      {
        id: 'enhanced_variant',
        name: 'Enhanced Magnetic',
        weight: 50,
        config: {
          magnetic_intensity: 'high',
          particle_effects: true,
          color_variant: 'gradient',
          sound_effects: false // Pour l'instant
        }
      }
    ]
  }
]

// A/B Test Context
interface ABTestContextType {
  getVariant: (testId: string) => any
  trackConversion: (testId: string, conversionType?: string) => void
  isParticipating: (testId: string) => boolean
}

const ABTestContext = createContext<ABTestContextType | null>(null)

// A/B Test Provider
interface ABTestProviderProps {
  children: React.ReactNode
}

export const ABTestProvider: React.FC<ABTestProviderProps> = ({ children }) => {
  const [userVariants, setUserVariants] = useState<Record<string, string>>({})
  const pathname = usePathname()
  const { trackABTest } = useAnalytics()

  // Get user hash for consistent assignment
  const getUserHash = useCallback((): number => {
    const userAgent = navigator.userAgent
    const timestamp = Date.now().toString().slice(-4)
    const combined = userAgent + timestamp + pathname
    
    return combined.split('').reduce((hash, char) => {
      return ((hash << 5) - hash) + char.charCodeAt(0)
    }, 0) >>> 0 // Ensure positive number
  }, [pathname])

  // Check if user should participate in test
  const shouldParticipate = useCallback((test: ABTestConfig): boolean => {
    // Check page targeting
    if (test.audience?.pages && !test.audience.pages.some(page => 
      page === '/' ? pathname === '/' : pathname.startsWith(page)
    )) {
      return false
    }

    // Check traffic percentage
    if (test.audience?.trafficPercentage) {
      const userHash = getUserHash()
      return (userHash % 100) < test.audience.trafficPercentage
    }

    return true
  }, [pathname, getUserHash])

  // Initialize user variants
  const initializeVariants = useCallback(() => {
    const stored = localStorage.getItem('osom_ab_variants')
    let variants = stored ? JSON.parse(stored) : {}
    
    activeTests.forEach(test => {
      // Check if user should participate
      if (!shouldParticipate(test)) return
      
      // If no variant assigned, assign one
      if (!variants[test.testId]) {
        variants[test.testId] = selectVariant(test)
        
        // Track participation
        trackABTest(test.testId, variants[test.testId], false)
      }
    })

    setUserVariants(variants)
    localStorage.setItem('osom_ab_variants', JSON.stringify(variants))
  }, [shouldParticipate, trackABTest])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeVariants()
    }
  }, [initializeVariants])

  // shouldParticipate moved above

  // Select variant based on weights
  const selectVariant = (test: ABTestConfig): string => {
    const random = Math.random() * 100
    let cumulative = 0
    
    for (const variant of test.variants) {
      cumulative += variant.weight
      if (random <= cumulative) {
        return variant.id
      }
    }
    
    // Fallback to control
    return test.variants[0].id
  }

  // getUserHash moved above shouldParticipate

  // Get variant configuration
  const getVariant = (testId: string) => {
    const variantId = userVariants[testId]
    if (!variantId) return null

    const test = activeTests.find(t => t.testId === testId)
    if (!test) return null

    const variant = test.variants.find(v => v.id === variantId)
    return variant?.config || null
  }

  // Track conversion
  const trackConversion = (testId: string, conversionType = 'general') => {
    const variantId = userVariants[testId]
    if (variantId) {
      trackABTest(testId, variantId, true)
      
      // Store conversion for analysis
      const conversions = JSON.parse(localStorage.getItem('osom_ab_conversions') || '{}')
      const key = `${testId}_${variantId}_${conversionType}`
      conversions[key] = (conversions[key] || 0) + 1
      localStorage.setItem('osom_ab_conversions', JSON.stringify(conversions))
    }
  }

  // Check participation
  const isParticipating = (testId: string): boolean => {
    return testId in userVariants
  }

  return (
    <ABTestContext.Provider value={{
      getVariant,
      trackConversion,
      isParticipating
    }}>
      {children}
    </ABTestContext.Provider>
  )
}

// Hook to use A/B testing
export const useABTest = (testId: string) => {
  const context = useContext(ABTestContext)
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider')
  }

  const variant = context.getVariant(testId)
  const isParticipating = context.isParticipating(testId)

  return {
    variant,
    isParticipating,
    trackConversion: (conversionType?: string) => 
      context.trackConversion(testId, conversionType)
  }
}

// Export test configurations for admin dashboard
export { activeTests }