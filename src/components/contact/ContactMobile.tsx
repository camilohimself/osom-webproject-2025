'use client'

import { useState } from 'react'

export function ContactMobile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation simple
    if (!formData.name || !formData.phone) {
      alert('Nom et téléphone obligatoires')
      return
    }

    // Redirect vers Calendly avec paramètres
    const calendlyUrl = `https://calendly.com/osom-consultation/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`
    window.open(calendlyUrl, '_blank')

    // Reset form
    setFormData({ name: '', email: '', phone: '', project: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="lg:hidden min-h-screen bg-black text-white">
      {/* Hero Mobile Simplifié */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-gray-300 mb-8">
            30 min pour clarifier vos objectifs et voir si on peut vous aider
          </p>

          {/* Contact Direct */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <a
              href="tel:+41791289549"
              className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-4 text-center hover:bg-yellow-400/20 transition-colors"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="text-yellow-400 font-bold text-sm">Appeler</div>
              <div className="text-gray-300 text-xs">079 128 95 49</div>
            </a>

            <a
              href="mailto:hello@osom.ch"
              className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-4 text-center hover:bg-yellow-400/20 transition-colors"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-yellow-400 font-bold text-sm">Email</div>
              <div className="text-gray-300 text-xs">hello@osom.ch</div>
            </a>
          </div>
        </div>
      </section>

      {/* Formulaire Express */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">
            Ou remplissez ce formulaire express
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <textarea
                name="project"
                placeholder="Décrivez votre projet en quelques mots"
                value={formData.project}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl hover:bg-yellow-500 transition-colors"
            >
              Envoyer ma demande
            </button>

            <div className="text-center text-gray-400 text-sm">
              Réponse garantie sous 24h
            </div>
          </form>
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