'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { analytics } from '@/lib/analytics'

// Custom hook for analytics integration
export const useAnalytics = () => {
  const pathname = usePathname()

  // Track page views automatically
  useEffect(() => {
    const title = document.title
    analytics.trackPageView(window.location.href, title)
    
    // Track attribution for new page views
    const attribution = {
      touchpoint: pathname,
      channel: document.referrer ? 'referral' : 'direct',
      timestamp: Date.now()
    }
    analytics.trackAttribution(attribution)
  }, [pathname])

  // Enhanced event tracking with business context
  const trackBusinessEvent = useCallback((
    eventName: string, 
    category: string, 
    additionalData?: Record<string, any>
  ) => {
    analytics.trackEvent({
      action: eventName,
      category: category,
      label: pathname,
      custom_parameters: {
        page_path: pathname,
        timestamp: new Date().toISOString(),
        ...additionalData
      }
    })
  }, [pathname])

  // Track service interest (high-value events)
  const trackServiceInterest = useCallback((serviceName: string, action: string) => {
    analytics.trackEvent({
      action: `service_${action}`,
      category: 'service_engagement',
      label: serviceName,
      value: action === 'contact' ? 10 : action === 'quote' ? 8 : 5,
      custom_parameters: {
        service: serviceName,
        intent_level: action === 'contact' ? 'high' : action === 'quote' ? 'medium' : 'low',
        page_context: pathname
      }
    })
  }, [pathname])

  // Track interactive element usage (MagneticButtons, etc.)
  const trackInteraction = useCallback((
    elementType: string, 
    elementId: string, 
    interactionType: string = 'click'
  ) => {
    analytics.trackInteractiveElement(elementType, elementId, interactionType)
  }, [])

  // Track conversion events with lead data
  const trackConversionWithLead = useCallback((
    conversionType: string, 
    value?: number,
    leadData?: {
      email?: string
      source?: string
      intent_score?: number
    }
  ) => {
    analytics.trackConversion(conversionType, value)
    
    if (leadData) {
      analytics.trackLead({
        email: leadData.email || 'anonymous',
        source: leadData.source || pathname,
        intent_score: leadData.intent_score || 5
      })
    }
  }, [pathname])

  // Track scroll depth and engagement
  const trackEngagement = useCallback((engagementType: string, value?: number) => {
    analytics.trackEvent({
      action: 'engagement',
      category: 'user_behavior',
      label: engagementType,
      value: value,
      custom_parameters: {
        engagement_type: engagementType,
        page_section: pathname,
        session_duration: Date.now() - (parseInt(sessionStorage.getItem('session_start') || '0'))
      }
    })
  }, [pathname])

  return {
    trackBusinessEvent,
    trackServiceInterest, 
    trackInteraction,
    trackConversionWithLead,
    trackEngagement,
    // Direct access to analytics functions
    ...analytics
  }
}

// Hook for A/B testing
export const useABTest = (testName: string, variants: string[]) => {
  const pathname = usePathname()
  
  // Simple A/B test based on pathname hash
  const getVariant = useCallback(() => {
    const hash = pathname.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const variantIndex = Math.abs(hash) % variants.length
    return variants[variantIndex]
  }, [pathname, variants])

  const variant = getVariant()

  // Track A/B test view
  useEffect(() => {
    analytics.trackABTest(testName, variant, false)
  }, [testName, variant])

  // Track A/B test conversion
  const trackABConversion = useCallback(() => {
    analytics.trackABTest(testName, variant, true)
  }, [testName, variant])

  return { variant, trackABConversion }
}

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Track Core Web Vitals when available
    const trackWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Track LCP
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          analytics.trackPerformance('LCP', lastEntry.startTime, 'ms')
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Track CLS
        let clsValue = 0
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries() as any[]) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          }
          analytics.trackPerformance('CLS', clsValue, 'score')
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // Clean up observers after 10 seconds
        setTimeout(() => {
          lcpObserver.disconnect()
          clsObserver.disconnect()
        }, 10000)
      }
    }

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackWebVitals()
    } else {
      window.addEventListener('load', trackWebVitals)
    }
  }, [])
}