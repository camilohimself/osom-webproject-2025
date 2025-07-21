'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useLocale } from '@/hooks/useLocale'
import { type Locale } from '@/lib/i18n'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  isLoading: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const localeData = useLocale()

  return (
    <LocaleContext.Provider value={localeData}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within a LocaleProvider')
  }
  return context
}