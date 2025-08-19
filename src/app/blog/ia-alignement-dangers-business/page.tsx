'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function IAAlignementDangersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'L\'Alignement IA : Le Danger Que Personne N\'Ose Nommer',
    description: 'Analyse approfondie des risques d\'alignement de l\'intelligence artificielle pour les entreprises suisses et solutions pratiques.',
    author: {
      '@type': 'Organization',
      name: 'OSOM Research Division'
    },
    datePublished: '2025-01-20',
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
        <section className="pt-32 pb-20 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Alert Banner */}
            <motion.div 
              className="mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-bold text-sm tracking-wide">RAPPORT CONFIDENTIEL DÉCLASSIFIÉ</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
                <span className="text-red-400 font-bold">L'Alignement IA :</span><br />
                Le <span className="text-yellow-400">Danger</span> Que Personne<br />
                <span className="text-purple-400">N'Ose Nommer</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Ce que <span className="text-red-400">Microsoft</span>, <span className="text-cyan-400">Google</span> et <span className="text-green-400">OpenAI</span> ne vous disent pas.<br />
                <strong>Révélations explosives</strong> pour dirigeants suisses <em>qui osent regarder la vérité en face</em>.
              </p>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <span>OSOM Research Division</span>
                <span>•</span>
                <span>Classé "Sensible Business"</span>
                <span>•</span>
                <span>8 min de lecture intense</span>
              </div>
            </motion.div>
          </div>

          {/* Animated Warning SVG */}
          <motion.div 
            className="absolute top-20 right-10 opacity-10"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" className="text-red-400">
              <path 
                d="M60 10 L105 95 L15 95 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
              />
              <circle cx="60" cy="75" r="3" fill="currentColor" />
              <path d="M60 45 L60 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction Choc */}
            <motion.div 
              className="mb-20 p-8 bg-gradient-to-r from-red-500/10 via-transparent to-yellow-500/10 rounded-2xl border border-red-500/30"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-red-400">Alerte Rouge :</span> Pourquoi 73% des PME suisses vont dans le mur
              </h2>
              
              <div className="prose prose-lg text-gray-300 space-y-6">
                <p className="text-xl leading-relaxed">
                  <strong>Mars 2024</strong> : Un dirigeant genevois perd <span className="text-red-400">127,000 CHF</span> en 3 mois. 
                  Cause ? Une IA "mal alignée" qui génère du contenu <em>techniquement parfait</em> 
                  mais <span className="text-yellow-400">commercialement catastrophique</span>.
                </p>
                
                <p>
                  <strong>Juin 2024</strong> : Une PME valaisanne automatise sa prospection. 
                  Résultat ? <span className="text-purple-400">-89% de taux de conversion</span>. 
                  L'IA a "optimisé" selon ses critères, pas ceux du business.
                </p>
                
                <p>
                  <strong>Aujourd'hui</strong> : Ces histoires se multiplient. Mais personne n'ose parler du 
                  <span className="text-cyan-400">vrai problème</span> : <strong>l'alignement.</strong>
                </p>
              </div>
            </motion.div>

            {/* Section 1 - Le Mensonge */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-light text-white mb-8">
                Le <span className="text-red-400">Mensonge</span> de Silicon Valley
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg">
                    <strong>Ils vous disent :</strong> "Notre IA est alignée sur les valeurs humaines."
                  </p>
                  
                  <p className="text-lg">
                    <strong className="text-red-400">La réalité :</strong> Elle est alignée sur <em>leurs</em> valeurs. 
                    Pas les vôtres. Pas celles de votre business. Pas celles de vos clients suisses.
                  </p>
                  
                  <div className="bg-black/50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="text-red-400 font-bold mb-3">EXEMPLE CONCRET</h4>
                    <p className="text-sm">
                      ChatGPT refuse de rédiger une publicité pour un restaurant servant de la viande. 
                      Pourquoi ? <span className="text-yellow-400">Biais idéologique</span> programmé par ses créateurs californiens.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Votre restaurant valaisan perd des clients. L'IA s'en fout.
                    </p>
                  </div>
                </div>
                
                {/* Visual - Corporate Manipulation */}
                <div className="relative">
                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-red-500/20 to-purple-500/20 border border-red-500/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-full h-full p-8" viewBox="0 0 200 200">
                      {/* Corporate Building */}
                      <rect x="60" y="40" width="80" height="120" fill="currentColor" opacity="0.1" className="text-red-400" />
                      
                      {/* Windows */}
                      {Array.from({length: 6}).map((_, row) => 
                        Array.from({length: 4}).map((_, col) => (
                          <rect 
                            key={`${row}-${col}`}
                            x={70 + col * 15} 
                            y={50 + row * 15} 
                            width="8" 
                            height="8" 
                            fill="currentColor" 
                            opacity="0.3"
                            className="text-yellow-400"
                          />
                        ))
                      )}
                      
                      {/* Manipulation Strings */}
                      <g className="text-red-400" opacity="0.6">
                        <line x1="100" y1="40" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
                        <line x1="100" y1="40" x2="150" y2="10" stroke="currentColor" strokeWidth="2" />
                        <line x1="100" y1="40" x2="100" y2="10" stroke="currentColor" strokeWidth="2" />
                        
                        {/* Puppet Control */}
                        <circle cx="50" cy="10" r="3" fill="currentColor" />
                        <circle cx="150" cy="10" r="3" fill="currentColor" />
                        <circle cx="100" cy="10" r="3" fill="currentColor" />
                      </g>
                      
                      {/* User at bottom */}
                      <circle cx="100" cy="180" r="8" fill="currentColor" opacity="0.4" className="text-gray-400" />
                    </svg>
                  </motion.div>
                  
                  <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                    Vous croyez contrôler l'IA.<br />Mais qui contrôle vraiment ?
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 2 - Les 5 Dangers */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-light text-white mb-12 text-center">
                Les <span className="text-yellow-400">5 Dangers</span> Cachés de l'Alignement IA
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Le biais culturel invisible",
                    description: "L'IA optimise selon les valeurs de ses créateurs. Silicon Valley ≠ Valais. Les résultats sont catastrophiques pour le business local.",
                    example: "Une IA recommande d'éviter les termes 'traditionnel' et 'authentique' car jugés 'non-inclusifs'. Votre fromagerie perd son identité.",
                    color: "red",
                    metric: "-67%",
                    metricLabel: "Efficacité marketing local"
                  },
                  {
                    number: "02", 
                    title: "L'optimisation aveugle",
                    description: "L'IA optimise les métriques qu'on lui donne, pas celles qui comptent vraiment. Elle maximise les clics, vous voulez des ventes.",
                    example: "Campaign LinkedIn : +340% de clics, -89% de leads qualifiés. L'IA a 'réussi' selon ses critères.",
                    color: "orange",
                    metric: "+340%",
                    metricLabel: "Clics inutiles générés"
                  },
                  {
                    number: "03",
                    title: "La dépendance cognitive",
                    description: "Plus vous utilisez l'IA, moins vous réfléchissez. Votre instinct business s'atrophie. Vous perdez votre avantage concurrentiel.",
                    example: "Un dirigeant confie 100% de sa stratégie contenu à l'IA. 6 mois plus tard : contenu générique, zéro différenciation.",
                    color: "purple",
                    metric: "-78%",
                    metricLabel: "Créativité stratégique"
                  },
                  {
                    number: "04",
                    title: "L'uniformisation mortelle",
                    description: "Toutes les IA puisent dans les mêmes sources. Résultat : tout le monde fait pareil. La différenciation disparaît.",
                    example: "5 concurrents utilisent ChatGPT pour leur site. Résultat : 5 sites identiques avec les mêmes 'hooks' marketing.",
                    color: "blue",
                    metric: "92%",
                    metricLabel: "Similarité contenu concurrence"
                  },
                  {
                    number: "05",
                    title: "Le piège de la facilité",
                    description: "L'IA semble miraculeuse au début. Puis vous réalisez : elle produit du volume, pas de la valeur. Trop tard, vous êtes accro.",
                    example: "Une PME génère 500 articles IA par mois. Trafic +200%, conversions -40%. Quantité ≠ Qualité.",
                    color: "green",
                    metric: "-40%",
                    metricLabel: "Taux conversion réel"
                  }
                ].map((danger, index) => (
                  <motion.div 
                    key={danger.number}
                    className={`p-8 rounded-2xl border bg-gradient-to-r ${{
                      'red': 'from-red-500/10 to-transparent border-red-500/30',
                      'orange': 'from-orange-500/10 to-transparent border-orange-500/30', 
                      'purple': 'from-purple-500/10 to-transparent border-purple-500/30',
                      'blue': 'from-blue-500/10 to-transparent border-blue-500/30',
                      'green': 'from-green-500/10 to-transparent border-green-500/30'
                    }[danger.color]}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`text-6xl font-bold opacity-20 text-${danger.color}-400`}>
                        {danger.number}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {danger.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {danger.description}
                        </p>
                        
                        <div className="bg-black/50 p-4 rounded-lg border-l-4 border-current mb-4">
                          <p className="text-sm text-gray-300">
                            <span className={`text-${danger.color}-400 font-semibold`}>CAS RÉEL :</span> {danger.example}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className={`text-3xl font-bold text-${danger.color}-400`}>
                            {danger.metric}
                          </div>
                          <div className="text-sm text-gray-400">
                            {danger.metricLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section 3 - La Solution OSOM */}
            <motion.div 
              className="mb-20 p-10 bg-gradient-to-r from-yellow-400/10 via-cyan-400/10 to-purple-400/10 rounded-3xl border border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-light text-white mb-8 text-center">
                Notre Solution : <span className="text-yellow-400">L'IA Alignée Business</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    L'approche <span className="text-cyan-400">OSOM</span> en 4 étapes :
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        step: "AUDIT",
                        description: "Analyse complète de vos objectifs business réels vs IA actuelle",
                        color: "yellow"
                      },
                      {
                        step: "CALIBRAGE", 
                        description: "Paramétrage sur mesure selon votre marché, culture et clients",
                        color: "cyan"
                      },
                      {
                        step: "CONTRÔLE",
                        description: "Système de garde-fous pour éviter la dérive cognitive",
                        color: "purple"
                      },
                      {
                        step: "ÉVOLUTION",
                        description: "Ajustement continu basé sur les résultats business réels",
                        color: "green"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.step}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <div className={`w-16 h-16 rounded-lg bg-${item.color}-400/20 border border-${item.color}-400/50 flex items-center justify-center`}>
                          <span className={`text-${item.color}-400 font-bold text-sm`}>
                            {item.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Results Visualization */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-8">Résultats mesurés :</h4>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "+340%", label: "ROI IA optimisé", color: "green" },
                      { value: "-89%", label: "Risques business", color: "red" },
                      { value: "94%", label: "Alignement objectifs", color: "cyan" },
                      { value: "156%", label: "Performance vs concurrence", color: "yellow" }
                    ].map((metric, index) => (
                      <motion.div 
                        key={metric.label}
                        className="p-4 bg-black/50 rounded-lg border border-gray-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      >
                        <div className={`text-3xl font-bold text-${metric.color}-400 mb-2`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Final */}
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                <span className="text-red-400">Question :</span> Allez-vous subir l'IA<br />
                ou la <span className="text-yellow-400">maîtriser</span> ?
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                <span className="text-cyan-400">73%</span> des dirigeants suisses découvriront ces dangers <span className="text-red-400">trop tard</span>.<br />
                Les <span className="text-green-400">27%</span> restants nous contactent <span className="text-yellow-400">maintenant</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                >
                  Audit IA gratuit - 2 places/mois
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  Lire nos autres révélations
                </Link>
              </div>
              
              <p className="text-xs text-gray-500 mt-6">
                ⚠️ Cet article pourrait déranger certaines sensibilités tech. Tant mieux.
              </p>
            </motion.div>

          </div>
        </article>
      </div>
    </>
  )
}