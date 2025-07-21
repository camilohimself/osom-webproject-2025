'use client'

import { useState, useEffect } from 'react'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get locale from URL parameter first
    const urlParams = new URLSearchParams(window.location.search)
    const urlLocale = urlParams.get('locale')
    
    if (urlLocale && locales.includes(urlLocale as Locale)) {
      // Save to localStorage and set state
      localStorage.setItem('NEXT_LOCALE', urlLocale)
      setLocaleState(urlLocale as Locale)
      
      // Clean URL
      const cleanUrl = window.location.pathname
      window.history.replaceState({}, '', cleanUrl)
    } else {
      // Get from localStorage or use default
      const savedLocale = localStorage.getItem('NEXT_LOCALE')
      if (savedLocale && locales.includes(savedLocale as Locale)) {
        setLocaleState(savedLocale as Locale)
      }
    }
    
    setIsLoading(false)
  }, [])

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('NEXT_LOCALE', newLocale)
    setLocaleState(newLocale)
  }

  return { locale, setLocale, isLoading }
}