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
      description: '140x plus efficace que la publicité payante. Nos résultats parlent d\'eux-mêmes, preuves à l\'appui.',
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
      description: 'Culture Peinture : 140x plus efficace que les ads. Naissance de la méthodologie OSOM.',
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
    { number: '140x', label: 'ROI Maximum', icon: '' },
    { number: '5+', label: 'Années d\'Expertise', icon: '' },
    { number: '400+', label: 'Jours de Données', icon: '' },
    { number: '100%', label: 'Satisfaction Client', icon: '' },
    { number: '68.6%', label: 'Engagement SEO', icon: '' }
  ]

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Section Creative */}
      <section className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
        {/* Background Pattern Dynamique */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-4 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">AGENCE DIGITALE SUISSE</span>
              <div className="w-3 h-3 rounded-full bg-yellow-400 ml-4 animate-pulse"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              <span className="text-white">We are </span>
              <motion.span 
                className="text-yellow-400 font-bold"
                animate={{ 
                  textShadow: [
                    '0 0 20px #ffd507',
                    '0 0 40px #ffd507',
                    '0 0 20px #ffd507'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                OSOM
              </motion.span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              L'agence qui transforme les <span className="text-yellow-400 font-semibold">données</span> en 
              <span className="text-green-400 font-semibold"> résultats extraordinaires</span>. 
              Basée en Valais, expertise certifiée, impact mondial.
            </p>

            {/* Stats Cards Dynamiques */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="backdrop-blur-sm border border-white/10 rounded-2xl p-4 bg-gradient-to-br from-white/5 to-black/40 group"
                >
                  {stat.icon && <div className="text-2xl mb-2">{stat.icon}</div>}
                  <div className="text-2xl font-light text-yellow-400 mb-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs Section - Interactive */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
              <span className="text-purple-400 text-sm font-medium tracking-wide">NOS VALEURS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Ce qui nous rend <span className="text-purple-400 font-bold">uniques</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={valeur.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setHoveredCard(valeur.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 relative overflow-hidden group cursor-pointer
                  ${hoveredCard === valeur.id ? `border-${valeur.color}-400/50 shadow-2xl` : 'hover:border-white/20'}
                  bg-gradient-to-br ${valeur.gradient} to-black/40`}
              >
                {/* Effet de glow au hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${valeur.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  {valeur.icon && (
                    <motion.div 
                      className="text-6xl mb-6"
                      animate={hoveredCard === valeur.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {valeur.icon}
                    </motion.div>
                  )}
                  
                  <h3 className="text-2xl font-light text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {valeur.title}
                  </h3>
                  
                  <p className={`text-${valeur.color}-400 font-medium mb-4`} style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {valeur.subtitle}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {valeur.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Notre Histoire */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-wide">NOTRE HISTOIRE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              5 ans d'<span className="text-cyan-400 font-bold">innovation</span> continue
            </h2>
          </motion.div>

          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-yellow-400 to-purple-400"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-${item.color}-400/10 to-black/40`}>
                      <div className={`text-${item.color}-400 text-sm font-medium mb-2`}>{item.year}</div>
                      <h3 className="text-xl font-light text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Point central avec icône */}
                  <motion.div 
                    className={`w-16 h-16 bg-${item.color}-400 rounded-full flex items-center justify-center z-10 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon && <span className="text-2xl">{item.icon}</span>}
                  </motion.div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Certifiée */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">EXPERTISE RECONNUE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Certifications <span className="text-green-400 font-bold">officielles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Certifications */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="backdrop-blur-sm border border-green-400/30 rounded-3xl p-8 bg-gradient-to-br from-green-400/10 to-black/60">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl"></span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Brevet Fédéral Marketing
                    </h3>
                    <p className="text-green-400 font-medium">SAWI • Confédération Suisse</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Formation officielle en marketing stratégique et opérationnel. Expertise reconnue 
                  par la Confédération suisse.
                </p>
              </div>

              <div className="backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 bg-gradient-to-br from-cyan-400/10 to-black/60">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl"></span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      Google Data Analyst
                    </h3>
                    <p className="text-cyan-400 font-medium">Google • Certification Professionnelle</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Maîtrise GA4, tracking avancé, analyse de données et data-driven marketing. 
                  Expertise technique certifiée.
                </p>
              </div>
            </motion.div>

            {/* Philosophie */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm border border-white/10 rounded-3xl p-12 bg-gradient-to-br from-white/5 to-black/40"
            >
              <h3 className="text-3xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Notre <span className="text-yellow-400 font-bold">Philosophie</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Mesurer pour Optimiser</h4>
                    <p className="text-gray-300 text-sm">Chaque action doit être trackable et mesurable. Pas de place pour l'approximation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Transparence Absolue</h4>
                    <p className="text-gray-300 text-sm">Nos clients voient exactement d'où viennent leurs résultats. Pas de magie, que de la science.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Innovation Continue</h4>
                    <p className="text-gray-300 text-sm">Toujours à la pointe. Nous testons les nouvelles technologies avant qu'elles deviennent mainstream.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final Creative */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-green-400/5 to-purple-400/5"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm border border-white/10 rounded-3xl p-16 bg-gradient-to-br from-white/5 to-black/40"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-4 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">PRÊT POUR L'EXTRAORDINAIRE ?</span>
              <div className="w-3 h-3 rounded-full bg-yellow-400 ml-4 animate-pulse"></div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Créons ensemble votre<br />
              prochain <span className="text-yellow-400 font-bold">140x ROI</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Une question ? Un projet ? Une envie de révolutionner votre approche digitale ? 
              Discutons de votre <span className="text-yellow-400 font-semibold">transformation OSOM</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-10 py-5 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-yellow-400/25 hover:scale-105"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Démarrons votre projet
              </Link>
              <Link
                href="/calculator"
                className="border-2 border-white/30 text-white px-10 py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm text-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Calculer votre ROI
              </Link>
              <Link
                href="/blog"
                className="border-2 border-purple-400/30 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-medium backdrop-blur-sm text-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Voir nos case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}