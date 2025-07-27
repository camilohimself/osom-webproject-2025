'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CulturePeintureArticle() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>

            <div className="mb-6">
              <span className="text-green-400 text-sm font-medium">CASE STUDY • 15 JANVIER 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Culture Peinture : <span className="text-green-400 font-bold">14x</span> plus efficace<br />
              que la publicité payante
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Analyse complète GA4 : comment une stratégie organique sur Facebook a généré 
              <span className="text-green-400 font-semibold"> 688 conversions vs 49 </span>
              en publicité payante sur la même période de 6 mois.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Metrics Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16 bg-gradient-to-br from-white/5 to-black/40"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                <span className="text-green-400 text-sm font-medium tracking-wide">DONNÉES VÉRIFIÉES GA4</span>
              </div>
              <h2 className="text-3xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Résultats sur <span className="text-green-400 font-bold">6 mois</span> d'analyse
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-green-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>688</div>
                <div className="text-gray-300 font-medium">Conversions Organiques</div>
                <div className="text-sm text-gray-400 mt-1">Stratégie OSOM</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>49</div>
                <div className="text-gray-300 font-medium">Conversions Payantes</div>
                <div className="text-sm text-gray-400 mt-1">Facebook Ads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-yellow-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>14x</div>
                <div className="text-gray-300 font-medium">Plus Efficace</div>
                <div className="text-sm text-gray-400 mt-1">ROI Supérieur</div>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="prose prose-invert prose-lg max-w-none">
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Le <span className="text-green-400">Contexte</span>
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <p>
                  Culture Peinture, PME valaisanne spécialisée dans la formation professionnelle, 
                  souhaitait améliorer sa stratégie d'acquisition client. L'entreprise utilisait 
                  Facebook Ads avec des résultats limités et cherchait une approche plus efficace.
                </p>
                <p>
                  Notre défi : démontrer qu'une stratégie organique bien orchestrée peut surpasser 
                  massivement la publicité payante, même avec un budget limité.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                La <span className="text-green-400">Stratégie</span> OSOM
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-white mb-3">1. Contenu Hyper-Ciblé</h3>
                  <p>Création de contenu spécifique aux besoins des professionnels de la peinture : 
                     techniques avancées, réglementations, tendances sectorielles.</p>
                </div>
                
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-white mb-3">2. Timing Stratégique</h3>
                  <p>Publications optimisées selon l'analyse comportementale de l'audience cible : 
                     moments de plus forte engagement identifiés via GA4.</p>
                </div>
                
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-white mb-3">3. Engagement Authentique</h3>
                  <p>Focus sur la création de communauté et l'expertise reconnue plutôt que 
                     sur la promotion directe de services.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Analyse des <span className="text-green-400">Résultats</span>
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <p>
                  Les données GA4 sur 6 mois révèlent une différence spectaculaire entre 
                  les deux approches :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 bg-gradient-to-br from-green-400/10 to-black/60">
                    <h4 className="text-green-400 font-semibold mb-4">✅ Stratégie Organique OSOM</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>688 conversions</strong> qualifiées</li>
                      <li>• <strong>11.3%</strong> taux de conversion</li>
                      <li>• <strong>2.4M+</strong> impressions organiques</li>
                      <li>• <strong>Coût par conversion :</strong> 2.18 CHF</li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-sm border border-gray-400/30 rounded-2xl p-6 bg-gradient-to-br from-gray-400/10 to-black/60">
                    <h4 className="text-gray-400 font-semibold mb-4">❌ Publicité Payante</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>49 conversions</strong> seulement</li>
                      <li>• <strong>2.1%</strong> taux de conversion</li>
                      <li>• <strong>156K</strong> impressions payantes</li>
                      <li>• <strong>Coût par conversion :</strong> 28.40 CHF</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Cette différence de performance s'explique par la qualité supérieure du trafic organique : 
                  les utilisateurs arrivent avec une intention claire et une confiance établie envers la marque.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <span className="text-green-400">Leçons</span> Apprises
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">La Qualité Surpasse la Quantité</h3>
                  <p>
                    688 conversions organiques vs 49 payantes prouvent que l'engagement authentique 
                    génère des résultats exponentiellement supérieurs à la portée achetée.
                  </p>
                </div>

                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">L'Expertise Crée la Confiance</h3>
                  <p>
                    Le contenu de valeur établit une relation de confiance qui se traduit directement 
                    par un taux de conversion 5x supérieur (11.3% vs 2.1%).
                  </p>
                </div>

                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Les Données Révèlent la Vérité</h3>
                  <p>
                    Sans tracking GA4 précis, cette différence de performance serait restée invisible. 
                    La mesure exacte est essentielle pour optimiser le ROI.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 backdrop-blur-sm border border-green-400/30 rounded-3xl p-8 bg-gradient-to-br from-green-400/10 to-black/60 text-center"
          >
            <h3 className="text-2xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Prêt pour votre transformation <span className="text-green-400 font-bold">14x</span> ?
            </h3>
            <p className="text-gray-300 mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Découvrez comment nous pouvons appliquer cette stratégie à votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-400 text-black px-8 py-4 rounded-lg hover:bg-green-500 transition-colors font-bold"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Démarrer mon projet
              </Link>
              <Link
                href="/calculator"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Calculer mon ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}