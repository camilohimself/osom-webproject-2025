'use client'

import { useState, useEffect } from 'react'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('🔍 useLocale hook starting...')
    
    // Get locale from URL parameter first
    const urlParams = new URLSearchParams(window.location.search)
    const urlLocale = urlParams.get('locale')
    
    console.log('📍 URL locale parameter:', urlLocale)
    console.log('📍 Available locales:', locales)
    console.log('📍 Default locale:', defaultLocale)
    
    if (urlLocale && locales.includes(urlLocale as Locale)) {
      console.log('✅ URL locale is valid, setting:', urlLocale)
      // Save to localStorage and set state
      localStorage.setItem('NEXT_LOCALE', urlLocale)
      setLocaleState(urlLocale as Locale)
      
      // Clean URL
      const cleanUrl = window.location.pathname
      console.log('🧹 Cleaning URL to:', cleanUrl)
      window.history.replaceState({}, '', cleanUrl)
    } else {
      console.log('📦 Checking localStorage...')
      // Get from localStorage or use default
      const savedLocale = localStorage.getItem('NEXT_LOCALE')
      console.log('📦 Saved locale in localStorage:', savedLocale)
      
      if (savedLocale && locales.includes(savedLocale as Locale)) {
        console.log('✅ Using saved locale:', savedLocale)
        setLocaleState(savedLocale as Locale)
      } else {
        console.log('⚠️ Using default locale:', defaultLocale)
      }
    }
    
    console.log('🏁 useLocale hook finished, final state will be updated')
    setIsLoading(false)
  }, [])

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('NEXT_LOCALE', newLocale)
    setLocaleState(newLocale)
  }

  return { locale, setLocale, isLoading }
}