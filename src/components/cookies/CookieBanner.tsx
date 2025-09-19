'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useCookieConsent, type CookieConsent } from '@/hooks/useCookieConsent'

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptEssential, updateConsent } = useCookieConsent()
  const [showRecipe, setShowRecipe] = useState(false)
  const [customConsent, setCustomConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  if (!showBanner) return null

  const handleRecipeClick = () => {
    setShowRecipe(true)
    acceptAll() // Accept all cookies when asking for recipe
  }

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-yellow-400/20"
          >
            <div className="max-w-4xl mx-auto p-6">
              <div className="text-center">
                <p className="text-white text-lg mb-6">
                  Ce site génial utilise des cookies pour vous offrir la meilleure expérience.
                  <br />
                  <span className="text-gray-300">Acceptez-vous ?</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    OUI
                  </button>

                  <button
                    onClick={handleRecipeClick}
                    className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2"
                  >
                    🍪 JE VEUX LA RECETTE
                  </button>

                  <button
                    onClick={acceptEssential}
                    className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    NON
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recipe Popup */}
      <AnimatePresence>
        {showRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowRecipe(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  🍪 Recette des Cookies OSOM
                </h2>
                <p className="text-gray-600">La recette secrète enfin révélée !</p>
              </div>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Ingrédients :</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>1 dose de pixels magiques</li>
                    <li>2 cuillères de data analytics</li>
                    <li>Une pincée de marketing personnalisé</li>
                    <li>Beaucoup d'amour pour l'UX</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Préparation :</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Mélanger délicatement dans votre navigateur</li>
                    <li>Laisser reposer en localStorage</li>
                    <li>Cuire à feu doux pendant votre navigation</li>
                    <li>Déguster une expérience optimisée ! 🎉</li>
                  </ol>
                </div>
              </div>

              <button
                onClick={() => setShowRecipe(false)}
                className="w-full mt-6 px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Merci pour la recette ! 😋
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CookieBanner