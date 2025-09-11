'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const TrustSignalsB2B = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Fini les 8 secondes de chargement. Maintenant mes patients trouvent mes infos en 2 clics.",
      author: "Dr. M. Dubois",
      role: "Cabinet médical, Sion",
      result: "3x plus de rendez-vous en ligne",
      tech: "Next.js + Calendly"
    },
    {
      quote: "Mon site WordPress plantait chaque semaine. Depuis Next.js : zéro problème.",
      author: "Jean-Pierre M.",
      role: "PME construction, 25 employés",
      result: "15% leads supplémentaires",
      tech: "Performance garantie"
    },
    {
      quote: "L'IA Claude génère mes textes SEO automatiquement. Je gagne 5h par semaine.",
      author: "Sarah K.",
      role: "Artiste professionnelle",
      result: "Position #3 Google local",
      tech: "Claude IA intégrée"
    }
  ]

  const certifications = [
    {
      name: "Next.js Expert",
      icon: "⚡",
      description: "Certified Advanced Next.js Development",
      color: "text-cyan-400"
    },
    {
      name: "Claude IA Partner",
      icon: "🤖",
      description: "Official Anthropic Integration",
      color: "text-purple-400"
    },
    {
      name: "Swiss Quality",
      icon: "🇨🇭",
      description: "Made in Valais, Standards Suisses",
      color: "text-red-400"
    },
    {
      name: "GA4 Certified",
      icon: "📊",
      description: "Google Analytics 4 Expert",
      color: "text-green-400"
    }
  ]

  const stats = [
    {
      value: "156",
      label: "CEO ont choisi Next.js",
      sublabel: "en 2024",
      color: "text-yellow-400"
    },
    {
      value: "< 2s",
      label: "Temps de chargement",
      sublabel: "garanti",
      color: "text-green-400"
    },
    {
      value: "95%",
      label: "Clients satisfaits",
      sublabel: "recommandent",
      color: "text-cyan-400"
    },
    {
      value: "24/7",
      label: "Site toujours en ligne",
      sublabel: "uptime garanti",
      color: "text-purple-400"
    }
  ]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,221,0,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pourquoi nous <span className="text-yellow-400">font confiance</span>
            </div>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des CEO, médecins et artistes qui ont choisi la performance Next.js
            </div>
          </motion.div>
        </div>

        {/* Statistics Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-2xl md:text-3xl text-white mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-yellow-400 font-bold text-lg">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-green-400 font-semibold">
                      {testimonials[activeTestimonial].result}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[activeTestimonial].tech}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/20 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <div className={`font-bold text-lg mb-2 ${cert.color}`}>
                {cert.name}
              </div>
              <div className="text-gray-400 text-sm">
                {cert.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee */}
        <motion.div 
          className="text-center bg-gradient-to-r from-yellow-400/10 to-green-400/10 border border-yellow-400/20 rounded-3xl p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl font-bold text-white mb-6">
            Garantie Performance Next.js
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">
                &lt; 2 secondes
              </div>
              <div className="text-gray-300">
                Temps de chargement ou remboursement
              </div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                99.9% uptime
              </div>
              <div className="text-gray-300">
                Disponibilité garantie
              </div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">
                Formation incluse
              </div>
              <div className="text-gray-300">
                2h pour devenir autonome
              </div>
            </div>
          </div>
          
          <div className="text-yellow-400 font-semibold text-lg">
            ✓ 30 jours satisfait ou remboursé
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSignalsB2B