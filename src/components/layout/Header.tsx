'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui'
import { locales, type Locale } from '@/lib/i18n'

interface HeaderProps {
  currentLocale: Locale
  dictionary: any
}

export default function Header({ currentLocale, dictionary }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const navigation = [
    { name: dictionary.navigation.services, href: '/services' },
    { name: dictionary.navigation.portfolio, href: '/realisations' },
    { name: dictionary.navigation.calculator, href: '/calculator' },
    { name: dictionary.navigation.blog, href: '/blog' },
    { name: dictionary.navigation.agency, href: '/agence' },
    { name: dictionary.navigation.contact, href: '/contact' },
  ]

  const localeNames = {
    fr: 'FR',
    en: 'EN',
    de: 'DE',
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo size="sm" />
            <span className="text-xl font-bold text-osom-black">OSOM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-brand-dark hover:text-brand-primary transition-colors"
              >
                <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg border border-gray-100">
                  {locales.map((locale) => (
                    <Link
                      key={locale}
                      href={`/${locale}`}
                      className="block px-3 py-2 text-sm text-brand-dark hover:bg-gray-50 hover:text-brand-primary transition-colors"
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      {localeNames[locale]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-osom-teal transition-colors font-medium"
            >
              {dictionary.navigation.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-brand-dark hover:text-brand-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-brand-dark hover:text-brand-primary hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm font-medium text-brand-dark">Language</span>
                  <div className="flex space-x-2">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={`/${locale}`}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          locale === currentLocale
                            ? 'bg-brand-primary text-white'
                            : 'text-brand-dark hover:bg-gray-100'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {localeNames[locale]}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="block mx-3 mt-2 bg-brand-primary text-white text-center px-4 py-2 rounded-md hover:bg-osom-teal transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {dictionary.navigation.contact}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}