'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export default function ExpertiseMarketingPage() {
  return (
    <>
      <ScrollProgressIndicator />
      <div className="min-h-screen bg-black">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
          {/* Background subtle grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium tracking-widest uppercase">
                Méthodologie OSOM
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              <span className="text-white">Comment on transforme</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-500 to-purple-600">
                des PME en leaders digitaux
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Nous partageons ouvertement notre framework de travail. Pas de secrets. Pas de boîte noire.
              Juste de la stratégie éprouvée sur 50+ projets en Suisse romande.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#frameworks"
                className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                Découvrir notre approche
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-yellow-400/30 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
              >
                Discutons de votre projet
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-yellow-400/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Frameworks Section */}
        <section id="frameworks" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-white">Nos 4 frameworks</span>
                <br />
                <span className="text-yellow-400">stratégiques</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Voici exactement comment on pense, analyse et exécute chaque projet.
                Transparence totale sur notre méthodologie de travail.
              </p>
            </div>

            {/* Framework 1: Diagnostic 360° */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-yellow-400 text-sm font-semibold mb-6">
                    Framework #1
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Diagnostic 360° OSOM
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Avant toute stratégie, on analyse 8 dimensions critiques de votre présence digitale.
                    Notre système de scoring sur 47 points de contrôle nous permet d'identifier précisément
                    où sont les opportunités et comment prioriser les actions.
                  </p>

                  {/* 8 axes */}
                  <div className="space-y-4">
                    {[
                      { name: 'Performance technique', color: 'yellow' },
                      { name: 'SEO on-page', color: 'purple' },
                      { name: 'Contenu & mots-clés', color: 'purple' },
                      { name: 'Backlinks & autorité', color: 'purple' },
                      { name: 'Expérience utilisateur', color: 'yellow' },
                      { name: 'Taux de conversion', color: 'yellow' },
                      { name: 'Veille concurrentielle', color: 'purple' },
                      { name: 'Opportunités marché local', color: 'purple' }
                    ].map((axe, index) => (
                      <motion.div
                        key={axe.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">{axe.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-purple-900/20 border border-purple-500/20 rounded-lg">
                    <p className="text-sm text-gray-300 italic">
                      <span className="font-semibold text-purple-400">Exemple réel:</span> Score 8/10 en technique
                      mais 3/10 en contenu. Priorisation création contenu stratégique. Résultat: Position top 3 Google
                      sur mots-clés stratégiques en 6 mois.
                    </p>
                  </div>
                </motion.div>

                {/* Visual - Radar diagram with labels */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
                >
                  {/* Desktop: Full radar with labels */}
                  <div className="hidden lg:block relative w-full h-full max-w-lg">
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                      {/* Grid lines */}
                      {[1, 2, 3, 4, 5].map((level) => (
                        <polygon
                          key={level}
                          points="250,70 355,130 410,250 355,370 250,430 145,370 90,250 145,130"
                          fill="none"
                          stroke="rgba(250, 204, 21, 0.1)"
                          strokeWidth="1"
                          style={{ transform: `scale(${level * 0.2})`, transformOrigin: 'center' }}
                        />
                      ))}

                      {/* Axis lines */}
                      {Array.from({ length: 8 }).map((_, i) => {
                        const angle = (i * Math.PI * 2) / 8 - Math.PI / 2
                        const x = 250 + Math.cos(angle) * 180
                        const y = 250 + Math.sin(angle) * 180
                        return (
                          <line
                            key={i}
                            x1="250"
                            y1="250"
                            x2={x}
                            y2={y}
                            stroke="rgba(250, 204, 21, 0.2)"
                            strokeWidth="1"
                          />
                        )
                      })}

                      {/* Data polygon (example scores) */}
                      <polygon
                        points="250,100 320,150 370,250 320,340 250,380 180,340 130,250 190,150"
                        fill="rgba(250, 204, 21, 0.15)"
                        stroke="rgb(250, 204, 21)"
                        strokeWidth="3"
                      />

                      {/* Labels for each axis */}
                      {[
                        { label: 'Performance\ntechnique', angle: 0 },
                        { label: 'SEO\non-page', angle: 1 },
                        { label: 'Contenu &\nmots-clés', angle: 2 },
                        { label: 'Backlinks &\nautorité', angle: 3 },
                        { label: 'Expérience\nutilisateur', angle: 4 },
                        { label: 'Taux de\nconversion', angle: 5 },
                        { label: 'Veille\nconcurrentielle', angle: 6 },
                        { label: 'Opportunités\nmarché local', angle: 7 }
                      ].map((item, i) => {
                        const angle = (item.angle * Math.PI * 2) / 8 - Math.PI / 2
                        const labelDistance = 210
                        const x = 250 + Math.cos(angle) * labelDistance
                        const y = 250 + Math.sin(angle) * labelDistance

                        return (
                          <text
                            key={i}
                            x={x}
                            y={y}
                            fill="rgba(250, 204, 21, 0.9)"
                            fontSize="11"
                            fontWeight="600"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="pointer-events-none"
                          >
                            {item.label.split('\n').map((line, idx) => (
                              <tspan key={idx} x={x} dy={idx === 0 ? 0 : 14}>
                                {line}
                              </tspan>
                            ))}
                          </text>
                        )
                      })}

                      {/* Center label */}
                      <text
                        x="250"
                        y="250"
                        fill="rgba(255, 255, 255, 0.4)"
                        fontSize="14"
                        fontWeight="700"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        DIAGNOSTIC
                      </text>
                    </svg>
                  </div>

                  {/* Mobile: Simplified list version */}
                  <div className="lg:hidden w-full px-4">
                    <div className="bg-gradient-to-br from-yellow-400/5 to-purple-500/5 border border-yellow-400/20 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-yellow-400 mb-4 text-center">8 dimensions analysées</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { name: 'Performance technique', score: 8 },
                          { name: 'SEO on-page', score: 7 },
                          { name: 'Contenu & mots-clés', score: 6 },
                          { name: 'Backlinks & autorité', score: 7 },
                          { name: 'Expérience utilisateur', score: 9 },
                          { name: 'Taux de conversion', score: 8 },
                          { name: 'Veille concurrentielle', score: 6 },
                          { name: 'Opportunités marché local', score: 7 }
                        ].map((dimension, idx) => (
                          <div key={idx} className="bg-black/40 p-3 rounded-lg border border-yellow-400/10">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-300 font-medium">{dimension.name}</span>
                              <span className="text-sm font-bold text-yellow-400">{dimension.score}/10</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5">
                              <div
                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 rounded-full"
                                style={{ width: `${dimension.score * 10}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-4 italic">
                        Exemple de scores diagnostic client
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Framework 2: Analyse Concurrentielle 5D */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Visual first on desktop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative order-2 lg:order-1"
                >
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8 h-[500px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="bg-black/40 p-6 rounded-lg border border-purple-500/20">
                          <div className="text-3xl font-black text-purple-400 mb-2">23</div>
                          <div className="text-sm text-gray-400">Mots-clés<br/>opportunités</div>
                        </div>
                        <div className="bg-black/40 p-6 rounded-lg border border-purple-500/20">
                          <div className="text-3xl font-black text-purple-400 mb-2">5</div>
                          <div className="text-sm text-gray-400">Concurrents<br/>analysés</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {['Positionnement mots-clés', 'Qualité contenu', 'Autorité domaine', 'UX & performance', 'Stratégie conversion'].map((dim, i) => (
                          <div key={i} className="flex items-center gap-3 bg-black/40 p-3 rounded-lg">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">{dim}</span>
                            <div className="ml-auto flex gap-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <div key={j} className={`w-2 h-4 rounded ${j < (5 - i) ? 'bg-purple-400' : 'bg-gray-700'}`}></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-1 lg:order-2"
                >
                  <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-sm font-semibold mb-6">
                    Framework #2
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Analyse concurrentielle 5D
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    On ne réinvente pas la roue. On analyse en profondeur vos concurrents directs,
                    les leaders du marché, et des benchmarks internationaux pour identifier les gaps
                    et opportunités que personne ne voit.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Les 5 dimensions</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-purple-400 font-bold">1</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold mb-1">Positionnement mots-clés</div>
                            <div className="text-sm text-gray-400">Qui ranke sur quoi, volumes, difficultés</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-purple-400 font-bold">2</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold mb-1">Qualité contenu</div>
                            <div className="text-sm text-gray-400">Profondeur, fraîcheur, structure</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-purple-400 font-bold">3</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold mb-1">Autorité domaine</div>
                            <div className="text-sm text-gray-400">Backlinks, DA/DR, trust signals</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-purple-400 font-bold">4</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold mb-1">Expérience utilisateur</div>
                            <div className="text-sm text-gray-400">Vitesse, mobile, navigation</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-purple-400 font-bold">5</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold mb-1">Stratégie conversion</div>
                            <div className="text-sm text-gray-400">CTAs, funnels, propositions de valeur</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-purple-900/20 border border-purple-500/20 rounded-lg">
                    <p className="text-sm text-gray-300 italic">
                      <span className="font-semibold text-purple-400">Exemple LMDI:</span> Analyse de 5 concurrents e-commerce
                      a révélé 23 mots-clés ignorés avec volume 50-200/mois. Création contenu ciblé. Résultat: +180% trafic organique.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Framework 3: Stratégie Mots-Clés 3 Horizons */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-sm font-semibold mb-6">
                    Framework #3
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Stratégie mots-clés 3 horizons
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    On ne cible pas tout en même temps (erreur classique). On priorise par ROI/effort
                    avec une approche progressive: quick wins → momentum → domination.
                  </p>

                  <div className="space-y-6">
                    {/* Horizon 1 */}
                    <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                          <span className="text-lg text-purple-400 font-black">H1</span>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">Quick wins</div>
                          <div className="text-sm text-gray-400">Mois 1-3</div>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Mots-clés faible concurrence, volume modéré</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Optimisations on-page rapides</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Enrichissement contenu existant</span>
                        </li>
                      </ul>
                    </div>

                    {/* Horizon 2 */}
                    <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                          <span className="text-lg text-purple-400 font-black">H2</span>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">Momentum</div>
                          <div className="text-sm text-gray-400">Mois 4-9</div>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Mots-clés moyenne concurrence, volume élevé</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Nouveau contenu stratégique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Campagnes backlinks ciblées</span>
                        </li>
                      </ul>
                    </div>

                    {/* Horizon 3 */}
                    <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                          <span className="text-lg text-yellow-400 font-black">H3</span>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">Domination</div>
                          <div className="text-sm text-gray-400">Mois 10-18</div>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Mots-clés forte concurrence, volume massif</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Contenus piliers (guides 5000+ mots)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Autorité domaine renforcée</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-purple-900/20 border border-purple-500/20 rounded-lg">
                    <p className="text-sm text-gray-300 italic">
                      <span className="font-semibold text-purple-400">Exemple Maîtrise Cathédrale:</span> H1 ciblé
                      "concerts cathédrale sion" (0 concurrence). Position #1 en 30 jours, 200 visites/mois immédiatement.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[500px] md:h-[600px]"
                >
                  <div className="relative h-full flex flex-col justify-between py-8 md:py-12">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-12 top-8 md:top-12 bottom-8 md:bottom-12 w-1 bg-gradient-to-b from-purple-500 via-purple-500 to-yellow-500"></div>

                    {/* Timeline items */}
                    <div className="relative flex items-center gap-4 md:gap-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-purple-500 flex items-center justify-center text-xl md:text-2xl font-black text-white border-4 border-black z-10">
                        H1
                      </div>
                      <div className="flex-1 bg-purple-900/20 border border-purple-500/20 rounded-lg p-6">
                        <div className="font-bold text-white mb-2">Quick wins</div>
                        <div className="text-sm text-gray-400">Premiers résultats rapides</div>
                      </div>
                    </div>

                    <div className="relative flex items-center gap-4 md:gap-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-purple-500 flex items-center justify-center text-xl md:text-2xl font-black text-white border-4 border-black z-10">
                        H2
                      </div>
                      <div className="flex-1 bg-purple-900/20 border border-purple-500/20 rounded-lg p-6">
                        <div className="font-bold text-white mb-2">Momentum</div>
                        <div className="text-sm text-gray-400">Accélération croissance</div>
                      </div>
                    </div>

                    <div className="relative flex items-center gap-4 md:gap-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-400 flex items-center justify-center text-xl md:text-2xl font-black text-black border-4 border-black z-10">
                        H3
                      </div>
                      <div className="flex-1 bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-6">
                        <div className="font-bold text-white mb-2">Domination</div>
                        <div className="text-sm text-gray-400">Leadership marché local</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Framework 4: Monitoring & Optimisation */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Dashboard mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative order-2 lg:order-1"
                >
                  <div className="bg-gradient-to-br from-purple-600/10 to-yellow-400/10 border border-purple-600/20 rounded-2xl p-4 md:p-6 overflow-hidden">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Dashboard Live</div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-yellow-400">Temps réel</span>
                        </div>
                      </div>
                      <div className="text-xl md:text-2xl font-black text-white">Performance marketing</div>
                    </div>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/40 p-4 rounded-lg border border-purple-600/20">
                        <div className="text-xs text-gray-400 mb-1">Impressions organiques</div>
                        <div className="text-2xl font-black text-purple-400">9,133</div>
                        <div className="text-xs text-yellow-400">+47% vs mois dernier</div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-yellow-400/20">
                        <div className="text-xs text-gray-400 mb-1">Position moyenne</div>
                        <div className="text-2xl font-black text-yellow-400">4.2</div>
                        <div className="text-xs text-yellow-400">-1.3 positions</div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-purple-500/20">
                        <div className="text-xs text-gray-400 mb-1">CTR moyen</div>
                        <div className="text-2xl font-black text-purple-400">3.45%</div>
                        <div className="text-xs text-yellow-400">+0.8 points</div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-yellow-500/20">
                        <div className="text-xs text-gray-400 mb-1">Nouveaux backlinks</div>
                        <div className="text-2xl font-black text-yellow-400">12</div>
                        <div className="text-xs text-gray-400">Ce mois-ci</div>
                      </div>
                    </div>

                    {/* Mini chart placeholder */}
                    <div className="bg-black/40 p-4 rounded-lg border border-purple-600/20">
                      <div className="text-xs text-gray-400 mb-3">Évolution trafic 90 jours</div>
                      <div className="flex items-end justify-between gap-1 h-20">
                        {[40, 45, 42, 50, 55, 52, 60, 65, 62, 70, 75, 80].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-1 lg:order-2"
                >
                  <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-lg text-purple-400 text-sm font-semibold mb-6">
                    Framework #4
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Monitoring & optimisation continue
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    On ne fait pas des rapports mensuels statiques. On monitore en temps réel avec des seuils
                    d'alerte automatiques. Drop de position? Investigation en 24h au lieu de 1 mois.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">3 catégories de métriques</h4>

                      <div className="space-y-4">
                        <div className="bg-purple-900/20 border border-purple-600/20 rounded-lg p-4">
                          <div className="font-semibold text-purple-400 mb-2">Acquisition</div>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Impressions organiques (évolution)</li>
                            <li>• Positions moyennes top 10/20/50</li>
                            <li>• CTR par page/mot-clé</li>
                            <li>• Nouveaux backlinks</li>
                          </ul>
                        </div>

                        <div className="bg-purple-900/20 border border-yellow-400/20 rounded-lg p-4">
                          <div className="font-semibold text-yellow-400 mb-2">Engagement</div>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Temps passé par page</li>
                            <li>• Taux rebond par source</li>
                            <li>• Pages/session</li>
                            <li>• Scroll depth</li>
                          </ul>
                        </div>

                        <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                          <div className="font-semibold text-purple-400 mb-2">Conversion</div>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Leads générés</li>
                            <li>• Coût par lead</li>
                            <li>• Taux conversion formulaires</li>
                            <li>• Attribution multi-touch</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-purple-900/20 border border-purple-600/20 rounded-lg">
                    <p className="text-sm text-gray-300 italic">
                      <span className="font-semibold text-purple-400">Exemple réel:</span> Dashboard live a détecté
                      un bug technique causant drop de 3 positions en 24h (au lieu de découvrir ça 1 mois plus tard).
                      Correction immédiate, positions récupérées en 48h.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Behind the Scenes */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-white">Behind the scenes:</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
                  comment on a vraiment fait
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pas juste des résultats. La stratégie exacte, mois par mois, décisions prises et pourquoi.
              </p>
            </div>

            {/* Client B2B Technique Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 bg-gradient-to-br from-yellow-900/10 to-purple-900/10 border border-yellow-400/20 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Client B2B technique</h3>
                  <p className="text-yellow-400 font-semibold">De 0 à top 3 Google en 6 mois</p>
                  <p className="text-gray-400 text-sm mt-1">Secteur services techniques - Arc Lémanique</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Contexte initial</h4>
                  <div className="bg-black/40 p-6 rounded-lg border border-yellow-400/10">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Performance technique</div>
                        <div className="text-2xl font-black text-yellow-400">65/100</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Positions Google</div>
                        <div className="text-2xl font-black text-purple-400">0</div>
                        <div className="text-xs text-gray-500">Top 10</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Trafic organique</div>
                        <div className="text-2xl font-black text-purple-400">~50</div>
                        <div className="text-xs text-gray-500">visites/mois</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Stratégie appliquée (timeline)</h4>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="text-sm font-semibold text-yellow-400">Mois 1</span>
                      </div>
                      <div className="flex-1 bg-black/40 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">Migration technique + Performance 95+.</span> Optimisation
                          complète, compression images, critical CSS inline.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="text-sm font-semibold text-yellow-400">Mois 2</span>
                      </div>
                      <div className="flex-1 bg-black/40 p-4 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">Analyse concurrentielle identifie opportunité:</span> Mots-clés
                          sectoriels régionaux = 170 recherches/mois, faible concurrence. Création page pilier 2,800 mots + 3 articles satellites.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="text-sm font-semibold text-yellow-400">Mois 3</span>
                      </div>
                      <div className="flex-1 bg-black/40 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">Position Top 3 atteinte.</span> 89 visites/mois sur ce cluster uniquement.
                          Dashboard monitoring installé.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="text-sm font-semibold text-yellow-400">Mois 4-6</span>
                      </div>
                      <div className="flex-1 bg-black/40 p-4 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">Expansion Horizon 2:</span> 15 mots-clés techniques moyenne concurrence ciblés.
                          Campagne backlinks locaux. Résultat final: 1,200+ impressions/mois, +150% visibilité.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-yellow-400/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">Résultats mesurés</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-300 mb-1">Performance PageSpeed</div>
                      <div className="text-3xl font-black text-yellow-400">95+</div>
                      <div className="text-xs text-gray-500">vs 65 avant</div>
                    </div>
                    <div>
                      <div className="text-gray-300 mb-1">Position Google</div>
                      <div className="text-3xl font-black text-yellow-400">Top 3</div>
                      <div className="text-xs text-gray-500">Région ciblée</div>
                    </div>
                    <div>
                      <div className="text-gray-300 mb-1">Visibilité</div>
                      <div className="text-3xl font-black text-yellow-400">+150%</div>
                      <div className="text-xs text-gray-500">1,200+ impressions/mois</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LMDI Case Study (shorter) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 bg-gradient-to-br from-purple-900/10 to-purple-900/10 border border-purple-400/20 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-400/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">LMDI</h3>
                  <p className="text-purple-400 font-semibold">Veille concurrentielle × 3 trafic</p>
                  <p className="text-gray-400 text-sm mt-1">E-commerce premium - Mode & design</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 p-6 rounded-lg border border-purple-400/10">
                  <h4 className="text-lg font-bold text-white mb-3">Stratégie</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Analyse 5 concurrents e-commerce premium</li>
                    <li>• Identification 23 mots-clés ignorés (vol. 50-200/mois)</li>
                    <li>• Création contenu ciblé + optimisations catégories</li>
                    <li>• Monitoring CTR mensuel pour A/B tests titres</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 border border-yellow-400/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">Résultats</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-gray-300 text-sm mb-1">Clics organiques/mois</div>
                      <div className="text-3xl font-black text-yellow-400">315</div>
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm mb-1">CTR moyen</div>
                      <div className="text-3xl font-black text-yellow-400">3.45%</div>
                      <div className="text-xs text-gray-500">Excellent pour e-commerce</div>
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm mb-1">Impressions</div>
                      <div className="text-3xl font-black text-yellow-400">9,133</div>
                      <div className="text-xs text-gray-500">par mois</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Maîtrise Cathédrale Case Study (shorter) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/10 to-yellow-900/10 border border-purple-400/20 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-400/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Maîtrise Cathédrale Sion</h3>
                  <p className="text-purple-400 font-semibold">SEO Local Culturel Valais</p>
                  <p className="text-gray-400 text-sm mt-1">Institution Culturelle - Événements & Concerts</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 p-6 rounded-lg border border-purple-400/10">
                  <h4 className="text-lg font-bold text-white mb-3">Approche H1</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Stratégie quick wins sur mots-clés hyper-locaux zéro concurrence. Cible prioritaire:
                    visibilité immédiate pour saison concerts 2025-2026.
                  </p>
                  <div className="bg-purple-900/20 border border-purple-500/20 rounded p-3">
                    <div className="text-xs text-gray-400 mb-1">Mot-clé principal</div>
                    <div className="font-semibold text-purple-400">"concerts cathédrale sion"</div>
                    <div className="text-xs text-gray-500 mt-1">0 concurrence • Position #1 en 30 jours</div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-yellow-400/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">Impact</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>200 visites/mois organiques immédiates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>Crédibilité institutionnelle renforcée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>Communication événements centralisée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>Base solide pour expansion H2 (Valais culturel)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transparence Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-yellow-900/20 to-purple-900/20 border-2 border-yellow-400/30 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Pourquoi cette transparence ?
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Vous vous demandez peut-être pourquoi on partage autant de notre méthodologie ?
                  Deux raisons simples.
                </p>

                <div className="bg-black/40 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">1. Notre valeur n'est pas dans les secrets, mais dans l'exécution</h3>
                  <p className="text-gray-300">
                    Connaître un framework SEO et l'appliquer avec succès sont deux choses totalement différentes.
                    On a passé 5 ans et 50+ projets à affiner cette méthodologie. Les raccourcis, les pièges,
                    les optimisations - ça ne s'apprend pas en lisant une page web. C'est 1000+ heures d'expérience
                    qui fait la différence.
                  </p>
                </div>

                <div className="bg-black/40 p-6 rounded-lg border border-purple-400/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">2. On veut des clients qui comprennent notre approche</h3>
                  <p className="text-gray-300">
                    Si vous lisez cette page et pensez "je peux le faire moi-même", parfait - vous avez raison,
                    et on vous encourage sincèrement. Mais si vous pensez "c'est exactement ce dont j'ai besoin,
                    et je veux ces experts dans mon équipe pour l'exécuter", alors on devrait parler.
                  </p>
                </div>

                <p className="text-center italic text-gray-400">
                  Transparence = confiance. Confiance = meilleurs partenariats. C'est aussi simple que ça.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-yellow-900/5 to-black">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-white">Prêt à appliquer</span>
                <br />
                <span className="text-yellow-400">cette méthodologie ?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Discutons de votre situation spécifique et voyons comment notre approche
                peut transformer votre présence digitale.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Audit gratuit 30 minutes
                </Link>
                <Link
                  href="/realisations"
                  className="px-10 py-5 border-2 border-yellow-400/30 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
                >
                  Voir tous nos projets
                </Link>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Vous voulez découvrir nos packages ?</p>
                <Link
                  href="/services"
                  className="text-yellow-400 hover:text-yellow-300 underline text-sm transition-colors"
                >
                  Voir nos offres Essentiel, Performance et Sur Mesure
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  )
}
