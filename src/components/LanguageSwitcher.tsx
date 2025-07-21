'use client'

import { useState } from 'react'
import Link from 'next/link'
import { locales, type Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

const localeNames = {
  fr: 'FR',
  en: 'EN', 
  de: 'DE',
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (locale: Locale) => {
    setIsOpen(false)
    // Simple redirect - let the server handle the rest
    window.location.href = `/?locale=${locale}`
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-3 bg-black/60 border border-white/10 hover:border-yellow-400/30 text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl backdrop-blur-sm hover:scale-105"
        style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
      >
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-current"></div>
          </div>
          <span className="text-sm font-semibold uppercase tracking-wide">{localeNames[currentLocale]}</span>
        </div>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="py-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`group flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-yellow-400/10 hover:scale-105 w-full text-left ${
                  locale === currentLocale 
                    ? 'text-yellow-400 bg-yellow-400/5' 
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                  locale === currentLocale 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-white/10 text-gray-300 group-hover:bg-yellow-400/20 group-hover:text-yellow-400'
                }`}>
                  {locale.toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold">{localeNames[locale]}</div>
                  <div className="text-xs text-gray-400">
                    {locale === 'fr' && 'Français'}
                    {locale === 'en' && 'English'}
                    {locale === 'de' && 'Deutsch'}
                  </div>
                </div>
                {locale === currentLocale && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3">
            <div className="text-xs text-gray-400 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Professional B2B Content
            </div>
          </div>
        </div>
      )}
    </div>
  )
}