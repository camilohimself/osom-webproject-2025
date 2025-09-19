'use client'

import { useState, useEffect } from 'react'

export interface CookieConsent {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const COOKIE_CONSENT_KEY = 'osom-cookie-consent'
const CONSENT_VERSION = '1.0'

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(COOKIE_CONSENT_KEY)
        if (saved) {
          const parsed = JSON.parse(saved)
          if (parsed.version === CONSENT_VERSION) {
            setConsent(parsed.consent)
            setShowBanner(false)
          } else {
            // Version mismatch, show banner again
            setShowBanner(true)
          }
        } else {
          setShowBanner(true)
        }
      } catch (error) {
        console.error('Error reading cookie consent:', error)
        setShowBanner(true)
      }
    }
  }, [])

  const updateConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent)
    setShowBanner(false)

    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
        consent: newConsent,
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString()
      }))

      // Trigger analytics setup based on consent
      if (newConsent.analytics && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
      }

      if (newConsent.marketing && (window as any).fbq) {
        (window as any).fbq('consent', 'grant')
      }
    }
  }

  const acceptAll = () => {
    updateConsent({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    })
  }

  const acceptEssential = () => {
    updateConsent({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    })
  }

  const resetConsent = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      setConsent(null)
      setShowBanner(true)
    }
  }

  return {
    consent,
    showBanner,
    updateConsent,
    acceptAll,
    acceptEssential,
    resetConsent
  }
}

