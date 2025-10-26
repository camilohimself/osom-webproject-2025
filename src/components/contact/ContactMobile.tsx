'use client'

import { useState } from 'react'

export function ContactMobile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Analytics handlers
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_click', {
        event_category: 'conversion',
        event_label: 'contact_mobile_call_hero',
        value: 30
      })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: 'contact_mobile_whatsapp_hero',
        value: 25
      })
    }
  }

  const handleEmailClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_click', {
        event_category: 'conversion',
        event_label: 'contact_mobile_email_hero',
        value: 20
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name || !formData.phone) {
      setError('Nom et téléphone obligatoires')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      // Succès!
      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '', project: '' })

      // Auto-reset après 5 secondes
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)

    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="lg:hidden min-h-screen bg-black text-white pb-24">
      {/* Hero Mobile Simplifié */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-gray-300 mb-8">
            30 min pour clarifier vos objectifs et voir si on peut vous aider
          </p>

          {/* Contact Direct PRIORITY */}
          <div className="space-y-4 mb-8">
            {/* CTA 1 : CALL - Priority */}
            <a
              href="tel:+41791289549"
              onClick={handleCallClick}
              className="block w-full bg-yellow-400 text-black font-bold py-6 rounded-2xl text-center active:scale-95 transition-transform shadow-lg shadow-yellow-400/20"
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div className="text-xl font-bold mb-1">Appeler maintenant</div>
              <div className="text-sm opacity-80">079 128 95 49</div>
            </a>

            {/* CTA 2 : WhatsApp - Priority 2 */}
            <a
              href="https://wa.me/41791289549"
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white font-bold py-6 rounded-2xl text-center active:scale-95 transition-transform shadow-lg shadow-green-500/20"
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <div className="text-xl font-bold mb-1">WhatsApp</div>
              <div className="text-sm opacity-80">Réponse rapide</div>
            </a>

            {/* CTA 3 : Email - Priority 3 */}
            <a
              href="mailto:hello@osom.ch"
              onClick={handleEmailClick}
              className="block w-full bg-gray-800 border-2 border-gray-700 text-white font-bold py-6 rounded-2xl text-center active:scale-95 transition-transform"
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div className="text-xl font-bold mb-1">Email</div>
              <div className="text-sm text-gray-400">hello@osom.ch</div>
            </a>
          </div>
        </div>
      </section>

      {/* Formulaire MINIMAL 2 champs */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto">
          {isSuccess ? (
            // Message de succès
            <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Demande enregistrée !
              </h3>
              <p className="text-gray-300 mb-6">
                On vous rappelle sous 2h (jours ouvrés)
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  Besoin d'une réponse immédiate ?
                </p>
                <div className="flex gap-3">
                  <a
                    href="tel:+41791289549"
                    className="flex-1 bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors"
                  >
                    Appeler maintenant
                  </a>
                  <a
                    href="https://wa.me/41791289549"
                    className="flex-1 bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2">
                  Ou laissez vos coordonnées
                </h2>
                <p className="text-gray-400 text-sm">
                  On vous rappelle sous 2h (jours ouvrés)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-5 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-lg disabled:opacity-50"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre téléphone *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-5 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-lg disabled:opacity-50"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 text-center">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black font-bold py-5 px-8 rounded-xl active:scale-95 transition-transform text-lg shadow-lg shadow-yellow-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    'Je veux être rappelé'
                  )}
                </button>

                <div className="text-center text-yellow-400 text-sm font-medium flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Réponse garantie sous 2h</span>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Info Pratiques */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Informations pratiques</h2>

          <div className="space-y-4">
            <div className="bg-gray-900/30 rounded-xl p-4">
              <div className="font-bold text-yellow-400 mb-2">📍 Adresse</div>
              <div className="text-gray-300 text-sm">
                Rue de Clodevis 13<br />
                1967 Bramois, Valais
              </div>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-4">
              <div className="font-bold text-yellow-400 mb-2">⏰ Disponibilité</div>
              <div className="text-gray-300 text-sm">
                Lun-Ven : 9h-18h<br />
                Réponse rapide WhatsApp/Email
              </div>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-4">
              <div className="font-bold text-yellow-400 mb-2">💰 Consultation</div>
              <div className="text-gray-300 text-sm">
                Premier échange gratuit<br />
                Devis transparent sous 48h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-lg mx-auto">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 text-center">
            <div className="text-lg font-bold mb-4">Besoin d'une réponse rapide ?</div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/41791289549"
                className="flex-1 bg-green-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="tel:+41791289549"
                className="flex-1 bg-yellow-400 text-black font-bold py-3 px-4 rounded-xl hover:bg-yellow-500 transition-colors"
              >
                Appel direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}