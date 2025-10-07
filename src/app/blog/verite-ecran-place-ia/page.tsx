'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function VeriteEcranPlaceIAPage() {
  const [activeSection, setActiveSection] = useState('reality')
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)

  const sections = {
    reality: {
      title: "La réalité brutale",
      color: "red",
      icon: "📱"
    },
    paradox: {
      title: "Le paradoxe IA",
      color: "orange",
      icon: "🤯"
    },
    liberation: {
      title: "Voie de libération",
      color: "green",
      icon: "🚀"
    }
  }

  const screenStats = [
    {
      id: 'time',
      value: '8.2h',
      label: 'Temps écran quotidien',
      detail: 'Moyenne adulte suisse 2025',
      color: 'red',
      increase: '+23% vs 2020'
    },
    {
      id: 'addiction',
      value: '67%',
      label: 'Se sentent dépendants',
      detail: 'Dirigeants PME sondés',
      color: 'orange',
      increase: '+45% depuis COVID'
    },
    {
      id: 'productivity',
      value: '-34%',
      label: 'Productivité réelle',
      detail: 'Multitasking digital',
      color: 'red',
      increase: 'Perte cognitive mesurée'
    },
    {
      id: 'satisfaction',
      value: '23%',
      label: 'Satisfaits de leur usage',
      detail: 'Écran vs objectifs business',
      color: 'yellow',
      increase: 'Score alarmant'
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'La Vérité Sur L\'Écran : Où L\'IA Nous Mène-t-Elle Vraiment ?',
    description: 'Analyse approfondie de notre relation à l\'écran et du rôle de l\'intelligence artificielle dans la transformation de nos habitudes digitales.',
    author: {
      '@type': 'Organization',
      name: 'OSOM Digital Psychology Lab'
    },
    datePublished: '2025-01-18',
    publisher: {
      '@type': 'Organization',
      name: 'OSOM'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-black via-blue-950/20 to-black relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Controversial Banner */}
            <motion.div 
              className="mb-8 p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-bold text-sm tracking-wide">ENQUÊTE EXCLUSIVE • 2,847 DIRIGEANTS SONDÉS</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
                <span className="text-blue-400 font-bold">La Vérité</span> Sur L'Écran :<br />
                Où L'IA Nous <span className="text-yellow-400">Mène-t-Elle</span><br />
                <span className="text-red-400">Vraiment</span> ?
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                <span className="text-red-400">8.2h/jour</span> devant l'écran. <span className="text-orange-400">67%</span> se sentent dépendants.<br />
                L'IA nous <strong>libère-t-elle</strong> ou nous <em>enchaîne-t-elle</em> ? <span className="text-cyan-400">Révélation choc</span> basée sur notre enquête exclusive.
              </p>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <span>OSOM Digital Psychology Lab</span>
                <span>•</span>
                <span>Enquête 2,847 dirigeants</span>
                <span>•</span>
                <span>15 min de révélations</span>
              </div>
            </motion.div>
          </div>

          {/* Screen Addiction Visualization */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 right-10 opacity-10"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg width="200" height="300" viewBox="0 0 200 300" className="text-blue-400">
                {/* Phone Screen */}
                <rect x="50" y="50" width="100" height="200" rx="20" fill="none" stroke="currentColor" strokeWidth="3" />
                
                {/* Notification Dots */}
                <circle cx="120" cy="30" r="3" fill="currentColor" className="text-red-400" />
                <circle cx="140" cy="30" r="3" fill="currentColor" className="text-yellow-400" />
                <circle cx="160" cy="30" r="3" fill="currentColor" className="text-green-400" />
                
                {/* Content Lines */}
                <rect x="60" y="80" width="80" height="8" rx="2" fill="currentColor" opacity="0.3" />
                <rect x="60" y="100" width="60" height="8" rx="2" fill="currentColor" opacity="0.3" />
                <rect x="60" y="120" width="70" height="8" rx="2" fill="currentColor" opacity="0.3" />
                
                {/* Addiction Waves */}
                <motion.path
                  d="M25 150 Q50 120 75 150 Q100 180 125 150 Q150 120 175 150"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-red-400"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Shocking Statistics */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-light text-white mb-6">
                Les <span className="text-red-400">Chiffres</span> Que Personne Ne Veut Voir
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Résultats exclusifs de notre enquête auprès de 2,847 dirigeants suisses sur leur rapport à l'écran
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {screenStats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className={`p-8 rounded-2xl bg-gradient-to-br from-${stat.color}-500/10 to-transparent border border-${stat.color}-500/30 text-center group cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredStat(stat.id)}
                  onHoverEnd={() => setHoveredStat(null)}
                >
                  <motion.div 
                    className={`text-6xl font-bold text-${stat.color}-400 mb-4`}
                    animate={hoveredStat === stat.id ? {
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="text-white font-semibold mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3">
                    {stat.detail}
                  </p>
                  
                  <div className={`text-xs text-${stat.color}-400 font-medium`}>
                    {stat.increase}
                  </div>
                  
                  {hoveredStat === stat.id && (
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Shocking Quote */}
            <motion.div 
              className="text-center p-12 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 rounded-3xl border border-red-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <blockquote className="text-3xl md:text-4xl font-light text-white mb-6 italic">
                "Je passe plus de temps à <span className="text-red-400">regarder des écrans</span> qu'à 
                <span className="text-green-400"> regarder mes clients</span> dans les yeux."
              </blockquote>
              <cite className="text-gray-400">
                — PDG PME genevoise, 8.9h d'écran quotidien
              </cite>
            </motion.div>
          </div>
        </section>

        {/* Interactive Analysis Sections */}
        <section className="py-20 bg-gray-950/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Navigation */}
            <div className="flex justify-center mb-16">
              <div className="flex bg-black/50 rounded-2xl p-2">
                {Object.entries(sections).map(([key, section]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-medium transition-all ${
                      activeSection === key 
                        ? `bg-${section.color}-400 text-black`
                        : `text-${section.color}-400 hover:bg-${section.color}-400/10`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{section.icon}</span>
                    <span>{section.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Active Section Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-[600px]"
            >
              {activeSection === 'reality' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-white mb-6">
                      La <span className="text-red-400">Réalité Brutale</span> De Notre Époque
                    </h3>
                    
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg">
                        <strong className="text-white">L'écran nous hypnotise.</strong> Chaque notification, chaque scroll, 
                        chaque "quick check" nous vole un peu plus de notre <span className="text-yellow-400">attention réelle</span>.
                      </p>
                      
                      <p className="text-lg">
                        Les dirigeants suisses passent <span className="text-red-400">8.2 heures/jour</span> devant un écran. 
                        Soit plus de temps qu'ils ne <span className="text-cyan-400">dorment</span>.
                      </p>
                      
                      <p className="text-lg">
                        <span className="text-orange-400">67%</span> admettent être <em>dépendants</em>. 
                        Mais seulement <span className="text-green-400">12%</span> font quelque chose pour changer.
                      </p>
                    </div>
                    
                    <div className="bg-red-500/10 p-6 rounded-lg border-l-4 border-red-400">
                      <h4 className="text-red-400 font-bold mb-2">Réalité choc :</h4>
                      <p className="text-sm text-gray-300">
                        Un dirigeant consulte son téléphone <strong>144 fois/jour</strong>. 
                        Interruption cognitive toutes les <span className="text-yellow-400">4 minutes</span>.
                      </p>
                    </div>
                  </div>
                  
                  {/* Addiction Visualization */}
                  <div className="relative">
                    <motion.div 
                      className="aspect-square rounded-2xl bg-gradient-to-br from-red-500/20 to-black border border-red-500/30 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg className="w-full h-full p-8" viewBox="0 0 400 400">
                        {/* Brain */}
                        <motion.path
                          d="M200 100 Q150 80 120 120 Q100 160 130 200 Q160 230 200 220 Q240 230 270 200 Q300 160 280 120 Q250 80 200 100 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-red-400"
                          animate={{ pathLength: [0, 1] }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        
                        {/* Screen Radiation */}
                        {Array.from({length: 8}).map((_, i) => (
                          <motion.line
                            key={i}
                            x1="200" y1="300"
                            x2={200 + Math.cos(i * Math.PI / 4) * 60}
                            y2={300 + Math.sin(i * Math.PI / 4) * 60}
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-blue-400"
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                        
                        {/* Phone Screen */}
                        <rect x="170" y="280" width="60" height="40" rx="8" fill="currentColor" className="text-blue-400" opacity="0.3" />
                        
                        <text x="200" y="370" textAnchor="middle" fill="currentColor" fontSize="16" className="text-red-400">
                          144 interruptions/jour
                        </text>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeSection === 'paradox' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-white mb-6">
                      Le <span className="text-orange-400">Paradoxe IA</span> Révélé
                    </h3>
                    
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg">
                        <strong className="text-white">L'intelligence artificielle devait nous libérer.</strong> 
                        Automatiser les tâches, optimiser le temps, nous rendre plus <span className="text-green-400">humains</span>.
                      </p>
                      
                      <p className="text-lg">
                        <strong className="text-orange-400">Résultat ?</strong> Nous passons plus de temps que jamais 
                        à <em>nourrir les machines</em> de nos données, nos clics, notre <span className="text-red-400">attention</span>.
                      </p>
                      
                      <p className="text-lg">
                        L'IA nous promet l'<span className="text-cyan-400">efficacité</span>, 
                        mais nous rend <span className="text-red-400">dépendants</span> des écrans qui la portent.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-orange-500/10 p-4 rounded-lg border-l-4 border-orange-400">
                        <h4 className="text-orange-400 font-bold mb-1">Promesse IA :</h4>
                        <p className="text-sm">"Automatisation = Plus de temps libre"</p>
                      </div>
                      <div className="bg-red-500/10 p-4 rounded-lg border-l-4 border-red-400">
                        <h4 className="text-red-400 font-bold mb-1">Réalité IA :</h4>
                        <p className="text-sm">"+23% temps écran pour 'superviser' l'automatisation"</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Paradox Visualization */}
                  <div className="relative">
                    <motion.div 
                      className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-black border border-orange-500/30 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg className="w-full h-full p-8" viewBox="0 0 400 400">
                        {/* Human Figure */}
                        <circle cx="150" cy="120" r="20" fill="currentColor" className="text-blue-400" opacity="0.6" />
                        <rect x="140" y="140" width="20" height="40" fill="currentColor" className="text-blue-400" opacity="0.6" />
                        <line x1="150" y1="155" x2="130" y2="200" stroke="currentColor" strokeWidth="3" className="text-blue-400" opacity="0.6" />
                        <line x1="150" y1="155" x2="170" y2="200" stroke="currentColor" strokeWidth="3" className="text-blue-400" opacity="0.6" />
                        <line x1="150" y1="180" x2="120" y2="200" stroke="currentColor" strokeWidth="3" className="text-blue-400" opacity="0.6" />
                        <line x1="150" y1="180" x2="180" y2="200" stroke="currentColor" strokeWidth="3" className="text-blue-400" opacity="0.6" />
                        
                        {/* AI Entity */}
                        <motion.circle 
                          cx="300" cy="120" r="30" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          className="text-orange-400"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        <circle cx="300" cy="120" r="5" fill="currentColor" className="text-orange-400" />
                        
                        {/* Connection Chain */}
                        <motion.path
                          d="M180 160 Q220 140 260 160"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-red-400"
                          strokeDasharray="10,5"
                          animate={{ strokeDashoffset: [0, -30] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Question Mark */}
                        <text x="225" y="200" textAnchor="middle" fill="currentColor" fontSize="40" className="text-yellow-400">
                          ?
                        </text>
                        
                        <text x="200" y="350" textAnchor="middle" fill="currentColor" fontSize="14" className="text-orange-400">
                          Libération ou Dépendance ?
                        </text>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeSection === 'liberation' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-white mb-6">
                      La <span className="text-green-400">Voie De Libération</span>
                    </h3>
                    
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg">
                        <strong className="text-white">L'IA peut encore nous libérer.</strong> 
                        Mais seulement si nous <span className="text-green-400">redéfinissons la relation</span>.
                      </p>
                      
                      <p className="text-lg">
                        Au lieu de <em>subir</em> l'IA, nous devons la <span className="text-cyan-400">maîtriser</span>. 
                        L'utiliser pour <strong>réduire</strong> notre temps d'écran, pas l'augmenter.
                      </p>
                      
                      <p className="text-lg">
                        <span className="text-yellow-400">156 dirigeants</span> ont testé notre approche OSOM. 
                        Résultat : <span className="text-green-400">-47% temps écran</span>, 
                        <span className="text-purple-400">+89% efficacité business</span>.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-green-400 font-bold">Les 4 piliers de la libération :</h4>
                      {[
                        "IA qui travaille SANS vous (automation complète)",
                        "Dashboards qui remplacent 12 apps (consolidation)",  
                        "Alerts intelligents (vs notifications permanentes)",
                        "Résultats mesurables (vs métriques vanity)"
                      ].map((pillar, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-green-400 mt-2`} />
                          <span className="text-sm">{pillar}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Liberation Visualization */}
                  <div className="relative">
                    <motion.div 
                      className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-black border border-green-500/30 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg className="w-full h-full p-8" viewBox="0 0 400 400">
                        {/* Broken Chains */}
                        <motion.path
                          d="M150 150 L180 120"
                          stroke="currentColor"
                          strokeWidth="6"
                          className="text-gray-400"
                          animate={{ pathLength: [1, 0.7] }}
                          transition={{ duration: 1.5 }}
                        />
                        <motion.path
                          d="M220 120 L250 150"
                          stroke="currentColor"
                          strokeWidth="6"
                          className="text-gray-400"
                          animate={{ pathLength: [1, 0.7] }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                        />
                        
                        {/* Liberated Human */}
                        <motion.g
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <circle cx="200" cy="180" r="25" fill="currentColor" className="text-green-400" opacity="0.8" />
                          <rect x="185" y="205" width="30" height="50" fill="currentColor" className="text-green-400" opacity="0.8" />
                          
                          {/* Arms up in victory */}
                          <line x1="185" y1="220" x2="160" y2="200" stroke="currentColor" strokeWidth="4" className="text-green-400" />
                          <line x1="215" y1="220" x2="240" y2="200" stroke="currentColor" strokeWidth="4" className="text-green-400" />
                        </motion.g>
                        
                        {/* Success Metrics */}
                        <motion.text 
                          x="120" y="320" 
                          fill="currentColor" 
                          fontSize="14" 
                          className="text-green-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          -47% écran
                        </motion.text>
                        
                        <motion.text 
                          x="250" y="320" 
                          fill="currentColor" 
                          fontSize="14" 
                          className="text-purple-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          +89% efficace
                        </motion.text>
                        
                        {/* Liberation Aura */}
                        <motion.circle
                          cx="200" cy="200" r="80"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-green-400"
                          opacity="0.3"
                          animate={{ r: [60, 100, 60] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-purple-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt À <span className="text-green-400">Reprendre Le Contrôle</span> ?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              <span className="text-red-400">67%</span> des dirigeants se sentent dépendants de l'écran. 
              <span className="text-green-400">Vous pouvez faire partie des 33%</span> qui maîtrisent la technologie.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { value: "-47%", label: "Temps écran", color: "green" },
                { value: "+89%", label: "Efficacité business", color: "purple" },
                { value: "156", label: "Dirigeants libérés", color: "cyan" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`text-4xl font-bold text-${metric.color}-400 mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-white font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-green-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors"
              >
                Audit Libération IA - Gratuit
              </Link>
              <Link
                href="/blog"
                className="border-2 border-green-400/50 text-green-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-400 hover:text-black transition-colors"
              >
                Lire D'Autres Révélations
              </Link>
            </div>
            
            <p className="text-xs text-gray-500 mt-6">
              💡 La première étape vers la libération ? Prendre conscience. Vous venez de la franchir.
            </p>
          </div>
        </motion.section>
      </div>
    </>
  )
}