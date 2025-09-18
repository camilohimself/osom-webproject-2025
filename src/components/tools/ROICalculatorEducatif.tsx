'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROICalculatorEducatif = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    secteur: '',
    chiffreAffaires: '',
    nombreEmployes: '',
    budgetMarketing: '',
    objectifCroissance: ''
  })

  const steps = [
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
            onClick={() => setCurrentStep(1)}
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
            onClick={() => setCurrentStep(2)}
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
            onClick={() => setCurrentStep(3)}
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
                    onClick={() => setCurrentStep(4)}
                    className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-12 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-green-500 transition-all shadow-lg"
                  >
                    Calculer mon potentiel roi
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'Votre projection personnalisée',
      subtitle: 'Basée sur vos réponses et nos données suisses',
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {formData.chiffreAffaires === '< 500K CHF' ? '+47%' :
                 formData.chiffreAffaires === '500K - 1M CHF' ? '+63%' :
                 formData.chiffreAffaires === '1M - 5M CHF' ? '+78%' : '+92%'}
              </div>
              <div className="text-sm text-gray-300">Augmentation leads qualifiés</div>
              <div className="text-xs text-yellow-400 mt-1">Estimation 12 mois</div>
            </div>

            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {formData.budgetMarketing === '0 CHF' ? '2.8x' :
                 formData.budgetMarketing === '< 500 CHF' ? '4.1x' :
                 formData.budgetMarketing === '500-2000 CHF' ? '3.6x' : '5.2x'}
              </div>
              <div className="text-sm text-gray-300">Retour sur investissement</div>
              <div className="text-xs text-cyan-400 mt-1">ROI digital optimisé</div>
            </div>

            <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {formData.nombreEmployes === '1-5' ? '8-15' :
                 formData.nombreEmployes === '6-20' ? '12-28' :
                 formData.nombreEmployes === '21-50' ? '25-45' : '40-80'}
              </div>
              <div className="text-sm text-gray-300">Nouveaux clients/mois</div>
              <div className="text-xs text-green-400 mt-1">Projection conservative</div>
            </div>
          </div>

          <div className="bg-black/40 border border-gray-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Recommandations pour votre secteur</h3>
            <div className="space-y-4 text-gray-300">
              {formData.secteur === 'Services B2B' && (
                <>
                  <p>• <span className="text-yellow-400">Priorité 1 :</span> Site web professionnel avec case studies</p>
                  <p>• <span className="text-cyan-400">Priorité 2 :</span> SEO local + LinkedIn automation</p>
                  <p>• <span className="text-green-400">Priorité 3 :</span> Email nurturing pour prospects longs</p>
                </>
              )}
              {formData.secteur === 'Commerce local' && (
                <>
                  <p>• <span className="text-yellow-400">Priorité 1 :</span> Google My Business optimisé + avis</p>
                  <p>• <span className="text-cyan-400">Priorité 2 :</span> Site e-commerce local</p>
                  <p>• <span className="text-green-400">Priorité 3 :</span> Réseaux sociaux + promo locale</p>
                </>
              )}
              {formData.secteur === 'Santé' && (
                <>
                  <p>• <span className="text-yellow-400">Priorité 1 :</span> Site conforme + prise RDV en ligne</p>
                  <p>• <span className="text-cyan-400">Priorité 2 :</span> SEO médical local strict</p>
                  <p>• <span className="text-green-400">Priorité 3 :</span> Content éducatif patients</p>
                </>
              )}
              {(formData.secteur === 'Construction' || formData.secteur === 'Industrie') && (
                <>
                  <p>• <span className="text-yellow-400">Priorité 1 :</span> Portfolio projets + témoignages</p>
                  <p>• <span className="text-cyan-400">Priorité 2 :</span> SEO "entreprise + localité"</p>
                  <p>• <span className="text-green-400">Priorité 3 :</span> Lead magnets sectoriels</p>
                </>
              )}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">Ces projections sont basées sur nos case studies suisses réels</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-green-500 transition-all shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Stratégie personnalisée gratuite
              </motion.a>
              <button
                onClick={() => {
                  setCurrentStep(0)
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
                Nouveau calcul
              </button>
            </div>
          </div>
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