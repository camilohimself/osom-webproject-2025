'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROICalculatorEducatif = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    secteur: '',
    chiffreAffaires: '',
    nombreEmployes: '',
    budgetMarketing: '',
    objectifCroissance: ''
  })

  const steps = [
    {
      id: 'intro',
      title: 'Calculateur ROI avancé',
      subtitle: 'Découvrez votre potentiel digital en Suisse',
      content: (
        <div className="text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-8"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Combien pesez-vous sur Internet ?
              </h3>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                En 5 minutes, découvrez votre vrai potentiel digital par rapport à vos concurrents suisses.
              </p>

              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-2xl p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Analyse basée sur des données réelles</h4>
                    <p className="text-gray-300 text-sm">
                      Comparaison avec 247 entreprises suisses analysées par OSOM en 2025.
                      Métriques Google Analytics vérifiées.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => setCurrentStep(1)}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-400 text-black px-12 py-6 rounded-xl font-bold text-2xl hover:from-yellow-500 hover:via-yellow-600 hover:to-green-500 transition-all shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Commencer l'analyse
            </motion.button>

            <p className="text-xs text-gray-500 mt-6">
              Résultats personnalisés • 100% confidentiel • Aucun engagement
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'email-consent',
      title: 'Résultats par email',
      subtitle: 'Pour des raisons de confidentialité',
      content: (
        <div className="text-center space-y-6">
          <div className="bg-purple-400/10 border border-purple-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Confidentialité garantie</h3>

            <div className="text-gray-300 space-y-4 text-left">
              <p>
                Pour protéger les données sensibles de votre entreprise, nous envoyons votre analyse détaillée directement par email.
              </p>
              <p>
                <span className="text-purple-400 font-semibold">Délai :</span> Sous 24 heures ouvrables (nous on dort aussi).
              </p>
              <p>
                <span className="text-cyan-400 font-semibold">Contenu :</span> Analyse complète + recommandations personnalisées + comparaison sectorielle.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4 mt-6">
              <div className="flex items-center justify-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Aucun spam • Zéro démarchage • Analyse authentique
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            className="bg-gradient-to-r from-purple-400 to-cyan-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg"
          >
            J'accepte de recevoir les résultats par email
          </button>
        </div>
      )
    },
    {
      id: 'disclaimer',
      title: 'Important à savoir',
      subtitle: 'Quelques précisions avant de commencer',
      content: (
        <div className="text-center space-y-6">
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Avertissement</h3>
            <div className="text-gray-300 space-y-4 text-left">
              <p>
                Ce calculateur est un outil d'estimation basé sur des données réelles d'entreprises suisses.
              </p>
              <p>
                Les résultats sont indicatifs et dépendent de nombreux facteurs spécifiques à votre business.
              </p>
              <p className="text-yellow-400 font-semibold">
                Aucune garantie de performance n'est donnée. Chaque projet est unique.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(3)}
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors"
          >
            J'ai compris, continuer
          </button>
        </div>
      )
    },
    {
      id: 'methodology',
      title: 'Notre méthodologie',
      subtitle: 'Sur quoi se basent nos calculs',
      content: (
        <div className="text-center space-y-6">
          <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Base de calcul</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Données sources</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Analytics GA4 de nos clients</li>
                  <li>• Études sectorielles Suisse 2025</li>
                  <li>• Benchmarks industrie digitale</li>
                  <li>• ROI moyen par type d'entreprise</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Métriques clés</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Taux de conversion moyen</li>
                  <li>• Coût acquisition client</li>
                  <li>• Lifetime value secteur</li>
                  <li>• Impact SEO local Suisse</li>
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(4)}
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-500 transition-colors"
          >
            Compris, voir les données
          </button>
        </div>
      )
    },
    {
      id: 'data',
      title: 'Données suisses 2025',
      subtitle: 'Insights exclusifs du marché helvétique',
      content: (
        <div className="text-center space-y-6">
          <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Statistiques exclusives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">73%</div>
                <div className="text-sm text-gray-300">des PME suisses sous-investissent en digital</div>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2,840 CHF</div>
                <div className="text-sm text-gray-300">budget marketing digital moyen PME</div>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">4.2x</div>
                <div className="text-sm text-gray-300">ROI moyen digital vs traditionnel</div>
              </div>
            </div>
            <div className="mt-8 text-left space-y-4 text-gray-300">
              <p>
                <span className="text-yellow-400 font-semibold">Valais spécifiquement :</span> 67% des recherches
                "service + localité" ne trouvent pas de réponse optimisée.
              </p>
              <p>
                <span className="text-cyan-400 font-semibold">Opportunité unique :</span> Marché local peu
                saturé, concurrence faible sur le digital avancé.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(5)}
            className="bg-green-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition-colors"
          >
            Parfait, commencer l'évaluation
          </button>
        </div>
      )
    },
    {
      id: 'questionnaire',
      title: 'Votre situation actuelle',
      subtitle: 'Quelques questions pour personnaliser votre projection',
      content: (
        <div className="max-w-3xl mx-auto">
          <div className="bg-purple-400/10 border border-purple-400/30 rounded-2xl p-8">
            <div className="space-y-8">

              {/* Question 1 */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Dans quel secteur évoluez-vous ?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Services B2B', 'Commerce local', 'Santé',
                    'Construction', 'Industrie', 'Autre'
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({...formData, secteur: option})}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.secteur === option
                          ? 'bg-purple-400 text-black border-purple-400'
                          : 'bg-black/30 text-gray-300 border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Chiffre d'affaires annuel approximatif
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    '< 500K CHF', '500K - 1M CHF', '1M - 5M CHF', '> 5M CHF'
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({...formData, chiffreAffaires: option})}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.chiffreAffaires === option
                          ? 'bg-purple-400 text-black border-purple-400'
                          : 'bg-black/30 text-gray-300 border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Combien d'employés dans votre entreprise ?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    '1-5', '6-20', '21-50', '50+'
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({...formData, nombreEmployes: option})}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.nombreEmployes === option
                          ? 'bg-purple-400 text-black border-purple-400'
                          : 'bg-black/30 text-gray-300 border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4 */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Budget marketing digital actuel (mensuel)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    '0 CHF', '< 500 CHF', '500-2000 CHF', '> 2000 CHF'
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({...formData, budgetMarketing: option})}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.budgetMarketing === option
                          ? 'bg-purple-400 text-black border-purple-400'
                          : 'bg-black/30 text-gray-300 border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 5 */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Objectif de croissance souhaité
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Stabiliser', '+20% CA', '+50% CA', 'Doubler', 'Exploser', 'Pas sûr'
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({...formData, objectifCroissance: option})}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.objectifCroissance === option
                          ? 'bg-purple-400 text-black border-purple-400'
                          : 'bg-black/30 text-gray-300 border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bouton de calcul */}
              {Object.values(formData).every(value => value !== '') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center pt-6"
                >
                  <button
                    onClick={() => setCurrentStep(6)}
                    className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-12 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-green-500 transition-all shadow-lg"
                  >
                    Voir ma projection personnalisée
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'email',
      title: 'Une dernière chose',
      subtitle: 'Votre email pour recevoir votre analyse personnalisée',
      content: (
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-purple-400/10 border border-purple-400/30 rounded-2xl p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Votre analyse est prête
            </h3>

            <p className="text-gray-300 mb-8">
              Nous vous envoyons votre projection ROI personnalisée + nos recommandations sectorielles par email.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@entreprise.ch"
                className="w-full px-4 py-4 bg-black/40 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                disabled={isSubmitting}
              />

              {email && email.includes('@') && email.includes('.') && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={async () => {
                    setIsSubmitting(true)

                    try {
                      // Envoyer lead avec données ROI à OSOM
                      const response = await fetch('/api/contact-lead', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          email,
                          name: formData.secteur ? `Prospect ${formData.secteur}` : 'Prospect ROI Calculator',
                          source: 'roi_calculator',
                          questionnaire: {
                            secteur: formData.secteur,
                            chiffreAffaires: formData.chiffreAffaires,
                            nombreEmployes: formData.nombreEmployes,
                            budgetMarketing: formData.budgetMarketing,
                            objectifCroissance: formData.objectifCroissance
                          }
                        }),
                      })

                      if (!response.ok) {
                        throw new Error('Erreur envoi')
                      }

                      // Analytics
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'lead_capture', {
                          event_category: 'conversion',
                          event_label: 'roi_calculator_submit',
                          value: 50
                        })
                      }

                      setCurrentStep(7)
                    } catch (error) {
                      console.error('Erreur:', error)
                      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.')
                    } finally {
                      setIsSubmitting(false)
                    }
                  }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-green-500 transition-all shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Envoi en cours...
                    </div>
                  ) : (
                    'Recevoir mon analyse'
                  )}
                </motion.button>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Aucun spam. Juste votre analyse + conseils stratégiques OSOM.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'thank-you',
      title: 'Merci !',
      subtitle: 'Vous aurez rapidement des nouvelles de OSOM',
      content: (
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 relative overflow-hidden">
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                style={{ transform: 'skewX(-20deg)' }}
              />

              <svg className="w-16 h-16 text-black relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Analyse envoyée sur {email}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-yellow-400/10 via-green-400/10 to-cyan-400/10 border border-yellow-400/30 rounded-2xl p-8 mb-8"
          >
            <p className="text-xl text-gray-300 mb-6">
              Votre projection ROI personnalisée arrive dans votre boîte mail avec nos recommandations sectorielles détaillées.
            </p>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-yellow-400 mr-3"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Un expert OSOM vous contactera sous 24h</span>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400 mr-3"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span>Stratégie personnalisée gratuite disponible</span>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-cyan-400 mr-3"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>Première consultation offerte</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-green-500 transition-all shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Nous contacter directement
            </motion.a>

            <button
              onClick={() => {
                setCurrentStep(0)
                setEmail('')
                setFormData({
                  secteur: '',
                  chiffreAffaires: '',
                  nombreEmployes: '',
                  budgetMarketing: '',
                  objectifCroissance: ''
                })
              }}
              className="border-2 border-yellow-400/60 text-yellow-400 px-8 py-4 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all"
            >
              Nouvelle analyse
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="text-sm text-gray-500">
              <span className="text-yellow-400">●</span> Confidentialité garantie <span className="text-yellow-400">●</span> Aucun engagement <span className="text-yellow-400">●</span> Support expert inclus
            </div>
          </motion.div>
        </div>
      )
    }
  ]

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="min-h-[600px]"
        >
          {/* Progress indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentStep ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
              {steps[currentStep]?.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {steps[currentStep]?.subtitle}
            </p>
          </div>

          {/* Content */}
          <div>
            {steps[currentStep]?.content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ROICalculatorEducatif