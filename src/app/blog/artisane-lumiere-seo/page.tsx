'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ArtisaneLumiereArticle() {
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
            <Link href="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>

            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">SEO ANALYSIS • 10 JANVIER 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Artisane de Lumière : <span className="text-cyan-400 font-bold">68.6%</span> engagement SEO<br />
              vs <span className="text-gray-400">44.6%</span> trafic direct
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Analyse GA4 sur 200+ jours : découvrez pourquoi le trafic SEO génère un engagement 
              <span className="text-cyan-400 font-semibold"> 54% supérieur </span>
              au trafic direct et comment optimiser votre stratégie de contenu.
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
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                <span className="text-cyan-400 text-sm font-medium tracking-wide">DONNÉES GA4 - 200+ JOURS</span>
              </div>
              <h2 className="text-3xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Comparatif <span className="text-cyan-400 font-bold">Qualité</span> d'Engagement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-cyan-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>68.6%</div>
                <div className="text-gray-300 font-medium">Trafic SEO</div>
                <div className="text-sm text-gray-400 mt-1">Engagement Quality</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>44.6%</div>
                <div className="text-gray-300 font-medium">Trafic Direct</div>
                <div className="text-sm text-gray-400 mt-1">Engagement Quality</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-yellow-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>+54%</div>
                <div className="text-gray-300 font-medium">Supérieur</div>
                <div className="text-sm text-gray-400 mt-1">Qualité SEO</div>
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
                Le <span className="text-cyan-400">Projet</span>
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <p>
                  Artisane de Lumière, créatrice d'luminaires artisanaux haut de gamme, souhaitait 
                  comprendre l'efficacité de sa stratégie SEO comparée aux visites directes de ses clients fidèles.
                </p>
                <p>
                  Notre mission : analyser en profondeur la qualité d'engagement de chaque source de trafic 
                  pour optimiser l'allocation des ressources marketing.
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
                Méthodologie <span className="text-cyan-400">d'Analyse</span>
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-white mb-3">Données Collectées</h3>
                  <ul className="space-y-2">
                    <li>• <strong>200+ jours</strong> d'historique GA4</li>
                    <li>• <strong>Engagement Quality</strong> par source de trafic</li>
                    <li>• <strong>Temps de session</strong> moyen détaillé</li>
                    <li>• <strong>Pages par session</strong> et taux de rebond</li>
                    <li>• <strong>Conversions qualifiées</strong> par canal</li>
                  </ul>
                </div>
                
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-white mb-3">Métriques Clés</h3>
                  <p>
                    L'Engagement Quality GA4 combine plusieurs signaux : temps passé, interactions, 
                    scroll depth et événements de conversion pour mesurer la véritable qualité du trafic.
                  </p>
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
                <span className="text-cyan-400">Découvertes</span> Clés
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                
                <div className="backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 bg-gradient-to-br from-cyan-400/10 to-black/60">
                  <h3 className="text-cyan-400 font-semibold text-xl mb-4">Trafic SEO : 68.6% Engagement Quality</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <strong>Temps de session :</strong> 4m 23s<br />
                      <strong>Pages/session :</strong> 3.8<br />
                      <strong>Taux de rebond :</strong> 31.4%
                    </div>
                    <div>
                      <strong>Scroll depth :</strong> 75%<br />
                      <strong>Interactions :</strong> 12.3/session<br />
                      <strong>Conversions :</strong> 8.2%
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Les visiteurs SEO arrivent avec une intention claire, explorent davantage le site 
                    et montrent un engagement significativement plus élevé.
                  </p>
                </div>

                <div className="backdrop-blur-sm border border-gray-400/30 rounded-2xl p-8 bg-gradient-to-br from-gray-400/10 to-black/60">
                  <h3 className="text-gray-300 font-semibold text-xl mb-4">Trafic Direct : 44.6% Engagement Quality</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <strong>Temps de session :</strong> 2m 51s<br />
                      <strong>Pages/session :</strong> 2.1<br />
                      <strong>Taux de rebond :</strong> 56.8%
                    </div>
                    <div>
                      <strong>Scroll depth :</strong> 45%<br />
                      <strong>Interactions :</strong> 6.7/session<br />
                      <strong>Conversions :</strong> 4.1%
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Le trafic direct, bien que fidèle, montre un engagement plus superficiel avec 
                    moins d'exploration et d'interactions par visite.
                  </p>
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
                <span className="text-cyan-400">Explications</span> & Insights
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Intention vs Habitude</h3>
                  <p>
                    Les visiteurs SEO arrivent avec une <strong>intention de recherche spécifique</strong>, 
                    ce qui explique leur engagement supérieur. Ils cherchent activement des informations 
                    ou solutions, contrairement au trafic direct plus habituel.
                  </p>
                </div>

                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contenu Aligné</h3>
                  <p>
                    Le contenu optimisé SEO répond précisément aux questions des utilisateurs, créant 
                    une experience plus satisfaisante qui se traduit par plus d'interactions et 
                    un temps passé supérieur.
                  </p>
                </div>

                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-black/40">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Potentiel de Conversion</h3>
                  <p>
                    Avec un taux de conversion de 8.2% vs 4.1%, le trafic SEO présente un potentiel 
                    commercial deux fois supérieur, justifiant l'investissement dans cette stratégie.
                  </p>
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
                Recommandations <span className="text-cyan-400">Stratégiques</span>
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                    <h4 className="text-cyan-400 font-semibold mb-3">✅ Priorité SEO</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Augmenter la production de contenu SEO</li>
                      <li>• Cibler des mots-clés longue traîne</li>
                      <li>• Optimiser pour l'intention utilisateur</li>
                      <li>• Créer des landing pages spécialisées</li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
                    <h4 className="text-cyan-400 font-semibold mb-3">Optimiser le Direct</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Améliorer l'UX de la page d'accueil</li>
                      <li>• Créer des parcours guidés</li>
                      <li>• Personnaliser pour les visiteurs récurrents</li>
                      <li>• Ajouter du contenu frais régulièrement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 bg-gradient-to-br from-cyan-400/10 to-black/60 text-center"
          >
            <h3 className="text-2xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Optimisez votre <span className="text-cyan-400 font-bold">engagement quality</span>
            </h3>
            <p className="text-gray-300 mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Analysons ensemble votre trafic GA4 pour identifier vos meilleures opportunités SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-400 text-black px-8 py-4 rounded-lg hover:bg-cyan-500 transition-colors font-bold"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Analyser mon trafic
              </Link>
              <Link
                href="/services/seo-content-marketing"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Services SEO
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}