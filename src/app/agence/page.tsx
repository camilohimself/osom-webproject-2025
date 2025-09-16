'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AgencePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const valeurs = [
    {
      id: 'data-driven',
      icon: '',
      title: 'Data-Driven',
      subtitle: 'Zéro intuition, que des faits',
      description: 'Chaque décision basée sur des données vérifiables. 400+ jours d\'analyses GA4 ne mentent jamais.',
      color: 'yellow',
      gradient: 'from-yellow-400/20 to-yellow-600/10'
    },
    {
      id: 'transparence',
      icon: '',
      title: 'Transparence Totale',
      subtitle: 'ROI visible et mesurable',
      description: '8x plus efficace que la publicité payante. Nos résultats parlent d\'eux-mêmes, preuves à l\'appui.',
      color: 'green',
      gradient: 'from-green-400/20 to-green-600/10'
    },
    {
      id: 'innovation',
      icon: '',
      title: 'Innovation Continue',
      subtitle: 'Technologies premium',
      description: 'Next.js, IA, tracking avancé. Nous adoptons les meilleures technologies avant qu\'elles deviennent mainstream.',
      color: 'purple',
      gradient: 'from-purple-400/20 to-purple-600/10'
    }
  ]

  const timeline = [
    {
      year: '2019',
      title: 'Les Débuts',
      description: 'Premiers projets web avec une approche artisanale. Focus sur la qualité technique et l\'expérience utilisateur.',
      icon: '',
      color: 'cyan'
    },
    {
      year: '2021',
      title: 'Certification Data',
      description: 'Formation Google Data Analyst. Pivot vers une approche 100% data-driven avec tracking avancé GA4.',
      icon: '',
      color: 'green'
    },
    {
      year: '2023',
      title: 'Brevet Fédéral',
      description: 'Obtention du Brevet Fédéral en Marketing SAWI. Expertise reconnue officiellement par la Confédération.',
      icon: '',
      color: 'yellow'
    },
    {
      year: '2024',
      title: 'Révolution ROI',
      description: 'Culture Peinture : 8x plus efficace que les ads. Naissance de la méthodologie OSOM.',
      icon: '',
      color: 'purple'
    },
    {
      year: '2025',
      title: 'OSOM Today',
      description: '200+ projets, méthodologie éprouvée, résultats transparents. L\'agence qui mesure tout.',
      icon: '',
      color: 'pink'
    }
  ]

  const stats = [
    { number: '200+', label: 'Projets Réalisés', icon: '' },
    { number: '14x', label: 'ROI Maximum', icon: '' },
    { number: '5+', label: 'Années d\'Expertise', icon: '' },
    { number: '400+', label: 'Jours de Données', icon: '' },
    { number: '100%', label: 'Satisfaction Client', icon: '' },
    { number: '68.6%', label: 'Engagement SEO', icon: '' }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      {/* HERO SIMPLIFIÉ - Sans vidéo background */}
      <section className="h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">


        {/* CONTENU HERO */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4">
            
            {/* Badge simple */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase">
                AGENCE DIGITALE PREMIUM
              </span>
            </motion.div>
            
            {/* Titre OSOM dramatique */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-light leading-none"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 50px rgba(255, 221, 0, 0.8)"
                }}
              >
                <span className="text-white/90">WE ARE </span>
                <span className="text-yellow-400 font-black">
                  OSOM
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Sous-titre simple */}
            <motion.p
              className="text-2xl md:text-3xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-yellow-400 font-bold">Créatifs mesurables</span>: on raconte et on prouve.<br/>
              <span className="text-gray-300">Brevet fédéral marketing, certif. Google Data Analyst, 200+ projets.</span>
            </motion.p>

            {/* CTA Buttons Premium */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 221, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 hover:bg-yellow-300 relative overflow-hidden group"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  onMouseEnter={() => setHoveredCard('cta-primary')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <span className="relative z-10">Consultation gratuite 30 min</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255, 221, 0, 0.8)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#video-showcase"
                  className="border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-medium text-xl hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  onMouseEnter={() => setHoveredCard('cta-secondary')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  Voir nos réalisations
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR STATIQUE */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full relative">
              <div className="w-1 h-3 bg-yellow-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

      </section>

      {/* VIDÉO SHOWCASE - Après le hero */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">NOTRE VISION</span>
            <h2 className="text-4xl font-light text-white mt-4 mb-8">
              OSOM en <span className="text-yellow-400 font-bold">mouvement</span>
            </h2>
          </div>

          {/* Vidéo centrée */}
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/osom-motion.MP4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* SECTION VALEURS SIMPLIFIÉE */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header simple */}
          <div className="text-center mb-20">
            <span className="text-purple-400 text-sm font-medium tracking-[0.15em] uppercase">
              NOS VALEURS
            </span>
            
            <h2 className="text-5xl md:text-6xl font-light text-white mt-4 mb-8 leading-tight">
              Ce qui nous rend <span className="text-purple-400 font-bold">uniques</span>
            </h2>
          </div>

          {/* Cards Valeurs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={valeur.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-light text-white mb-3">
                    {valeur.title}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-4">
                    {valeur.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
              
                  
                  
                  
                  

      {/* STATS SIMPLIFIÉES */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



                
                  
                  
                  

      {/* TIMELINE SIMPLIFIÉE */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">NOTRE HISTOIRE</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-8 leading-tight">
              5 ans d'<span className="text-cyan-400 font-bold">innovation</span> continue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-${item.color}-400 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-black font-bold">{item.year.slice(-2)}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SIMPLIFIÉES */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-medium tracking-wide uppercase">EXPERTISE RECONNUE</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-8 leading-tight">
              Certifications <span className="text-green-400 font-bold">officielles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-light text-white mb-2">
                Brevet Fédéral Marketing
              </h3>
              <p className="text-green-400 font-medium mb-4">SAWI • Confédération Suisse</p>
              <p className="text-gray-300 leading-relaxed">
                Formation officielle en marketing stratégique et opérationnel. Expertise reconnue par la Confédération suisse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-light text-white mb-2">
                Google Data Analyst
              </h3>
              <p className="text-cyan-400 font-medium mb-4">Google • Certification Professionnelle</p>
              <p className="text-gray-300 leading-relaxed">
                Maîtrise GA4, tracking avancé, analyse de données et data-driven marketing. Expertise technique certifiée.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA FINAL SIMPLE */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">PRÊT POUR L'EXTRAORDINAIRE ?</span>

            <h3 className="text-4xl md:text-5xl font-light text-white mt-4 mb-8 leading-tight">
              Créons ensemble votre prochain succès
            </h3>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Une question ? Un projet ? Discutons de votre transformation digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all font-bold"
              >
                Démarrons votre projet
              </Link>
              <Link
                href="/outils"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all"
              >
                Calculer votre ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}