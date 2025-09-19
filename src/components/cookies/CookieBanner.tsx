'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useCookieConsent, type CookieConsent } from '@/hooks/useCookieConsent'

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptEssential, updateConsent } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [customConsent, setCustomConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  if (!showBanner) return null

  const handleCustomSave = () => {
    updateConsent(customConsent)
  }

  const toggleCustomConsent = (type: keyof CookieConsent) => {
    if (type === 'essential') return // Essential cookies cannot be disabled

    setCustomConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-yellow-400/20"
        >
          <div className="max-w-7xl mx-auto p-4 lg:p-6">
            {/* Simple Banner */}
            {!showDetails && (
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                {/* Icon + Content */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Nous utilisons des cookies
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Pour améliorer votre expérience, nous utilisons des cookies essentiels au fonctionnement du site
                      et des cookies optionnels pour les analyses et le marketing.
                      <Link href="/legal/cookies" className="text-yellow-400 hover:text-yellow-300 ml-1 underline">
                        En savoir plus
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Personnaliser
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="px-4 py-2 text-sm border border-yellow-400/40 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-colors"
                  >
                    Essentiel uniquement
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2 text-sm bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Tout accepter
                  </button>
                </div>
              </div>
            )}

            {/* Detailed Settings */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Préférences de cookies
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid gap-4">
                  {/* Essential Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-medium">Cookies essentiels</h4>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                          Requis
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Nécessaires au bon fonctionnement du site web. Ne peuvent pas être désactivés.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-green-600 rounded-full flex items-center cursor-not-allowed">
                        <div className="w-5 h-5 bg-white rounded-full ml-6 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">Cookies analytiques</h4>
                      <p className="text-gray-400 text-sm">
                        Nous aident à comprendre comment vous utilisez notre site (Google Analytics).
                      </p>
                    </div>
                    <button
                      onClick={() => toggleCustomConsent('analytics')}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        customConsent.analytics ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-all ${
                          customConsent.analytics ? 'ml-6' : 'ml-1'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">Cookies marketing</h4>
                      <p className="text-gray-400 text-sm">
                        Pour mesurer l'efficacité de nos campagnes et personnaliser la publicité.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleCustomConsent('marketing')}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        customConsent.marketing ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-all ${
                          customConsent.marketing ? 'ml-6' : 'ml-1'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">Cookies fonctionnels</h4>
                      <p className="text-gray-400 text-sm">
                        Améliorent votre expérience en mémorisant vos préférences.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleCustomConsent('functional')}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        customConsent.functional ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-all ${
                          customConsent.functional ? 'ml-6' : 'ml-1'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Custom Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
                  <Link
                    href="/legal/cookies"
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors text-center"
                  >
                    Politique complète
                  </Link>
                  <div className="flex gap-3 sm:ml-auto">
                    <button
                      onClick={acceptEssential}
                      className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Essentiel uniquement
                    </button>
                    <button
                      onClick={handleCustomSave}
                      className="px-6 py-2 text-sm bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                      Sauvegarder les préférences
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner