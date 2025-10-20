'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'
// import LanguageSwitcher from '@/components/LanguageSwitcher' // Temporairement désactivé Phase 1

interface HeaderProps {
  currentLocale: Locale
  dictionary: any
}

export default function Header({ currentLocale, dictionary }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const [servicesMenuTimeout, setServicesMenuTimeout] = useState<NodeJS.Timeout | null>(null)

  // Fonction pour fermer immédiatement le menu services au clic
  const closeServicesMenu = () => {
    if (servicesMenuTimeout) {
      clearTimeout(servicesMenuTimeout)
      setServicesMenuTimeout(null)
    }
    setIsServicesMenuOpen(false)
  }

  // Packages craftsman pour dropdown
  const packages = [
    {
      name: 'Essentiel',
      price: '1,500 CHF/mois',
      href: '/services/essentiel',
      description: 'Vous démarrez',
    },
    {
      name: 'Évolution',
      price: '2,500 CHF/mois',
      href: '/services/evolution',
      description: 'Vous grandissez',
      badge: 'NOUVEAU'
    },
    {
      name: 'Performance',
      price: '4,000 CHF/mois',
      href: '/services/performance',
      description: 'Vous dominez',
      badge: 'POPULAIRE'
    },
    {
      name: 'Sur Mesure',
      price: 'Devis personnalisé',
      href: '/services/sur-mesure',
      description: 'Unique',
    },
    {
      name: 'Expertise Marketing',
      price: 'Méthodologie & Frameworks',
      href: '/expertise-marketing',
      description: 'Notre approche stratégique',
    },
  ]

  const ressources = [
    { name: 'Audit SEO gratuit', href: '/outils#audit' },
    { name: 'Calculateur ROI', href: '/outils#roi' },
  ]

  const navigation = [
    { name: dictionary.navigation.services, href: '/services', hasDropdown: true },
    { name: dictionary.navigation.portfolio, href: '/realisations' },
    { name: dictionary.navigation.agency, href: '/agence' },
  ]


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image 
                src="/osom-logo.svg" 
                alt="OSOM - Agence digitale Valais" 
                width={60} 
                height={60} 
                className="group-hover:scale-105 transition-transform duration-300 filter group-hover:brightness-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 ml-auto mr-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (servicesMenuTimeout) {
                        clearTimeout(servicesMenuTimeout)
                        setServicesMenuTimeout(null)
                      }
                      setIsServicesMenuOpen(true)
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setIsServicesMenuOpen(false)
                      }, 800)
                      setServicesMenuTimeout(timeout)
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors font-light text-base relative group flex items-center"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                    >
                      {item.name}
                      <svg className="w-3.5 h-3.5 ml-1 transition-transform duration-200" style={{ transform: isServicesMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    
                    {/* Menu déroulant Services - Craftsman */}
                    {isServicesMenuOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[420px] bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-yellow-400/20 z-50"
                        onMouseEnter={() => {
                          if (servicesMenuTimeout) {
                            clearTimeout(servicesMenuTimeout)
                            setServicesMenuTimeout(null)
                          }
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => {
                            setIsServicesMenuOpen(false)
                          }, 800)
                          setServicesMenuTimeout(timeout)
                        }}
                      >
                        <div className="p-6">
                          {/* Packages sur mesure */}
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wide mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Packages sur mesure</h3>
                            <div className="space-y-2">
                              {packages.map((pkg) => (
                                <Link
                                  key={pkg.name}
                                  href={pkg.href}
                                  className="block px-3 py-3 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 rounded-md relative group"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                  onClick={closeServicesMenu}
                                >
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <div className="font-semibold text-sm flex items-center gap-2">
                                        {pkg.name}
                                        {pkg.badge && (
                                          <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">
                                            {pkg.badge}
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-xs text-gray-400 mt-0.5">{pkg.description}</div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Ressources gratuites */}
                          <div className="pt-4 border-t border-yellow-400/20">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Ressources gratuites</h3>
                            <div className="space-y-1">
                              {ressources.map((ressource) => (
                                <Link
                                  key={ressource.name}
                                  href={ressource.href}
                                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm rounded-md"
                                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                                  onClick={closeServicesMenu}
                                >
                                  {ressource.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors font-light text-base relative group"
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
          <div className="hidden md:flex items-center space-x-3">
            {/* Audit gratuit - Subtle */}
            <Link
              href="/outils"
              className="relative px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 text-yellow-400/80 hover:text-yellow-400 hover:bg-yellow-400/10 group"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit gratuit
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            </Link>

            {/* CTA Contact - Plus fin */}
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-md"
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
                        <div className="ml-4 mt-2 space-y-2 pb-2">
                          <div className="px-3 py-1 text-xs text-yellow-400 font-semibold uppercase">Packages</div>
                          {packages.map((pkg) => (
                            <Link
                              key={pkg.href}
                              href={pkg.href}
                              className="block px-4 py-2 text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors text-sm rounded-lg"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsServicesMenuOpen(false)
                              }}
                            >
                              <div className="font-medium">{pkg.name}</div>
                              <div className="text-xs text-gray-500">{pkg.description}</div>
                            </Link>
                          ))}
                          <div className="px-3 py-1 mt-2 text-xs text-gray-500 font-semibold uppercase">Ressources</div>
                          {ressources.map((ressource) => (
                            <Link
                              key={ressource.href}
                              href={ressource.href}
                              className="block px-4 py-2 text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors text-sm rounded-lg"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsServicesMenuOpen(false)
                              }}
                            >
                              {ressource.name}
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

              <div className="pt-4 border-t border-yellow-400/20 px-4 space-y-3">
                <Link
                  href="/outils"
                  className="block text-center border-2 border-yellow-400 text-yellow-400 px-4 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors font-bold"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Audit gratuit
                </Link>

                <Link
                  href="/contact"
                  className="block bg-yellow-400 text-black text-center px-4 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
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