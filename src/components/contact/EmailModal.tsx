'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent, trackLead } from '@/lib/analytics'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSuccess(true)

        // Track lead qualified conversion
        trackLead({
          email,
          source: 'contact_kit',
          intent_score: 7,
          business_size: 'unknown',
          budget_range: 'unknown'
        })

        // Track conversion event
        trackEvent({
          action: 'lead_qualified',
          category: 'conversion',
          label: 'contact_kit_modal',
          value: 7,
          custom_parameters: {
            conversion_type: 'email_kit',
            email_provided: true
          }
        })

        setTimeout(() => {
          setIsSuccess(false)
          setEmail('')
          onClose()
        }, 3000)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      setEmail('')
      setError('')
      setIsSuccess(false)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black border border-cyan-400/30 rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-10">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='m0 0h60v60H0z'/%3E%3Cpath d='m15 15h30v30H15z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
                className="absolute inset-0"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              disabled={isLoading}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10">
              {isSuccess ? (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Email envoyé !
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Vérifiez votre boîte mail (et vos spams) dans quelques minutes
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      Recevez votre <span className="text-cyan-400 font-bold">kit de contact</span>
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Nous vous envoyons instantanément toutes les informations nécessaires pour démarrer
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setError('')
                        }}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        required
                        disabled={isLoading}
                      />
                      {error && (
                        <motion.p
                          className="text-red-400 text-sm mt-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {error}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:bg-gray-600 text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                      whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                          Envoi en cours...
                        </div>
                      ) : (
                        'Recevoir mon kit de contact'
                      )}
                    </motion.button>
                  </form>

                  <div className="text-center mt-6">
                    <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-xs">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        <span>Questionnaire intelligent</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                        <span>Contact direct WhatsApp</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        <span>Exemples de résultats</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EmailModal