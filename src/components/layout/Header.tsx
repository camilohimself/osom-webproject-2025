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
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)

  // Liste des services avec les vraies pages
  const services = [
    { name: 'Création Sites Web', href: '/services/creation-site-web' },
    { name: 'Identité & Design', href: '/services/identite-design' },
    { name: 'SEO & Marketing', href: '/services/seo-content-marketing' },
    { name: 'Paid Media & Growth', href: '/services/paid-media-growth' },
    { name: 'Marketing Automation', href: '/services/marketing-automation-crm' },
    { name: 'Tracking & Data', href: '/services/tracking-data' },
  ]

  const navigation = [
    { name: dictionary.navigation.services, href: '/services', hasDropdown: true },
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
            <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>OSOM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    onMouseLeave={() => setIsServicesMenuOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-lg relative group flex items-center"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1 transition-transform duration-200" style={{ transform: isServicesMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    
                    {/* Menu déroulant Services */}
                    {isServicesMenuOpen && (
                      <div className="absolute top-full left-0 mt-2 w-[520px] bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-yellow-400/20 z-50">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-8">
                            {/* Services Digitaux */}
                            <div>
                              <div className="mb-4">
                                <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wide mb-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Services Digitaux</h3>
                                <p className="text-xs text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Solutions techniques & créatives professionnelles</p>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/services/creation-site-web"
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                >
                                  Création Site Web
                                </Link>
                                <Link
                                  href="/services/identite-design"
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                >
                                  Identité & Design
                                </Link>
                                <Link
                                  href="/services/seo-content-marketing"
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                >
                                  SEO & Content Marketing
                                </Link>
                              </div>
                            </div>

                            {/* Growth & Performance */}
                            <div>
                              <div className="mb-4">
                                <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wide mb-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Growth & Performance</h3>
                                <p className="text-xs text-gray-400" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Acquisition client & optimisation ROI</p>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/services/paid-media-growth"
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                >
                                  Paid Media & Growth
                                </Link>
                                <Link
                                  href="/services/marketing-automation-crm"
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                >
                                  Marketing Automation & CRM
                                </Link>
                                <Link
                                  href="/services/tracking-data"
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                >
                                  Tracking & Data
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-lg relative group"
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Modern Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="group flex items-center space-x-3 bg-black/60 border border-white/10 hover:border-yellow-400/30 text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl backdrop-blur-sm hover:scale-105"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide">{currentLocale}</span>
                </div>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                  <div className="py-2">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={`/?locale=${locale}`}
                        className={`group flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-yellow-400/10 hover:scale-105 ${
                          locale === currentLocale 
                            ? 'text-yellow-400 bg-yellow-400/5' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={() => setIsLangMenuOpen(false)}
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
                      </Link>
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

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold shadow-lg hover:shadow-yellow-400/25 hover:scale-105"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
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
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/10 transition-colors font-medium rounded-lg"
                      >
                        {item.name}
                        <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: isServicesMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isServicesMenuOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-2 text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors text-sm rounded-lg"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/10 transition-colors font-medium rounded-lg"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-yellow-400/20">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm font-medium text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Language</span>
                  <div className="flex space-x-2">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={`/?locale=${locale}`}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          locale === currentLocale
                            ? 'bg-yellow-400 text-black'
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                        style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
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
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
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