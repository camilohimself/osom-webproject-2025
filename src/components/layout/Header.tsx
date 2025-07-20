'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/osom-logo.svg" 
                alt="OSOM" 
                width={48} 
                height={48} 
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">OSOM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-yellow-400/20">
                  {locales.map((locale) => (
                    <Link
                      key={locale}
                      href={`/${locale}`}
                      className="block px-3 py-2 text-sm text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
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
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold shadow-lg hover:shadow-yellow-400/25 hover:scale-105"
            >
              {dictionary.navigation.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-300 hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/10"
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
          <div className="md:hidden border-t border-yellow-400/20 bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/10 transition-colors font-medium rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-yellow-400/20">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm font-medium text-gray-300">Language</span>
                  <div className="flex space-x-2">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={`/${locale}`}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          locale === currentLocale
                            ? 'bg-yellow-400 text-black'
                            : 'text-gray-300 hover:bg-white/10'
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
                  className="block mx-4 mt-3 bg-yellow-400 text-black text-center px-4 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
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