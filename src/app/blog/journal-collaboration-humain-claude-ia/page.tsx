import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Journal de Bord : Humain × Claude IA en Action | OSOM Behind The Scenes',
  description: 'Découvrez les coulisses VRAIES de la collaboration Humain × Claude IA chez OSOM. Difficultés, victoires, moments WTF. Journal de bord authentique de la révolution marketing VALAIS.',
  keywords: 'collaboration humain claude ia, journal de bord ia, coulisses osom, marketing humain intelligence artificielle, claude sonnet 4, behind the scenes agence valais',
  openGraph: {
    title: 'Journal Vivant : Humain × Claude IA Behind The Scenes',
    description: 'Les vraies coulisses de la collaboration révolutionnaire. Spoiler : Claude a des opinions bien tranchées sur le SEO...',
    url: 'https://osom.ch/blog/journal-collaboration-humain-claude-ia',
    type: 'article',
  }
}

export default function JournalCollaborationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Journal de Bord : Collaboration Humain × Claude IA',
    description: 'Coulisses authentiques de la collaboration révolutionnaire entre marketing humain et intelligence artificielle chez OSOM Valais.',
    author: {
      '@type': 'Organization',
      name: 'OSOM × Claude IA'
    },
    datePublished: '2025-01-22',
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
        
        {/* Header Article */}
        <section className="pt-32 pb-16 bg-black relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement type="fadeIn">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3 animate-pulse"></div>
                  <span className="text-yellow-400 text-sm font-medium tracking-wide">
                    JOURNAL DE BORD LIVE
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  <span className="text-yellow-400 font-bold">Cher Journal...</span><br />
                  <span className="text-purple-400">Humain × Claude IA</span> Behind The Scenes
                </h1>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Les <strong>vraies coulisses</strong> de la collaboration révolutionnaire. 
                  Spoiler : Claude a des opinions <em>bien tranchées</em> sur le SEO VALAIS...
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Article Content */}
        <article className="pb-16 bg-black relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Entry 1 */}
            <div className="mb-16 p-8 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl border border-yellow-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
                <div className="text-yellow-400 font-bold">22 JANVIER 2025 - 14H37</div>
                <div className="ml-auto text-gray-400">📝 HUMAIN</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Claude, on a un problème..."</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  <strong>Moi :</strong> "Claude, la page d'accueil n'a AUCUN metadata SEO. Genre, zéro. Nada. Le néant."
                </p>
                <p>
                  <strong>Claude :</strong> <span className="text-red-400">"⚠️ PROBLÈME SEO MAJEUR DÉTECTÉ !"</span> (il adore les émojis d'alerte...)
                </p>
                <p>
                  Et là, en 30 secondes, il me pond une analyse complète des 16 pages qui ONT des metadata vs celle qui n'en a pas. 
                  Moi qui cherchais depuis 20 minutes... 🤦‍♂️
                </p>
                <div className="bg-black/50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-400 font-semibold">LESSON LEARNED :</p>
                  <p>Claude = détective SEO avec un OCD du metadata. Respect.</p>
                </div>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="mb-16 p-8 bg-gradient-to-r from-purple-400/10 to-transparent rounded-2xl border border-purple-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                <div className="text-purple-400 font-bold">22 JANVIER 2025 - 15H12</div>
                <div className="ml-auto text-gray-400">🤖 CLAUDE IA</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Les données GSC... RÉVÉLATRICES"</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  <strong>Analyse GSC en cours...</strong>
                </p>
                <p>
                  <span className="text-red-400">ALERTE :</span> "création site internet valais" = <strong className="text-yellow-400">1,718 impressions, 0 clics</strong>
                </p>
                <p>
                  <span className="text-red-400">ALERTE :</span> "agence web valais" = <strong className="text-yellow-400">1,589 impressions, 0 clics</strong>
                </p>
                <p>
                  Mon diagnostic : <span className="text-cyan-400">"Opportunités MASSIVES non exploitées"</span>
                </p>
                <div className="bg-black/50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-400 font-semibold">CLAUDE THOUGHTS :</p>
                  <p>Les humains cherchent OSOM 6,318 fois/mois mais ne nous trouvent pas. Mathematical paradox detected. 🤨</p>
                </div>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="mb-16 p-8 bg-gradient-to-r from-green-400/10 to-transparent rounded-2xl border border-green-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                <div className="text-green-400 font-bold">22 JANVIER 2025 - 16H05</div>
                <div className="ml-auto text-gray-400">👥 COLLABORATION</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Le Moment WTF..."</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  <strong>Moi :</strong> "Attends Claude, les données GSC ne reflètent pas les perfs du site, mais les opportunités keywords !"
                </p>
                <p>
                  <strong>Claude :</strong> <span className="text-cyan-400">"Ah parfaitement ! Les données GSC montrent les opportunités de mots-clés à exploiter, pas les performances actuelles du site."</span>
                </p>
                <p>
                  Plot twist : Claude avait commencé à créer une page dédiée avec nos "résultats" GSC. 
                  J'ai dû l'arrêter genre : "STOP ! Ne compare pas nos résultats avec les données GSC !" 😅
                </p>
                <div className="bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-400 font-semibold">HUMAIN × IA SYNERGY :</p>
                  <p>Claude = puissance brute. Humain = direction stratégique. Perfect combo.</p>
                </div>
              </div>
            </div>

            {/* Entry 4 */}
            <div className="mb-16 p-8 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-2xl border border-cyan-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                <div className="text-cyan-400 font-bold">22 JANVIER 2025 - 17H23</div>
                <div className="ml-auto text-gray-400">⚡ ACTION MODE</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Optimisation Keywords : Claude en Mode Beast"</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  Une fois la stratégie claire, Claude = <strong className="text-cyan-400">MACHINE DE GUERRE</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-yellow-400">✅ Homepage optimisée</span> : "agence web valais" intégré naturellement</li>
                  <li><span className="text-yellow-400">✅ Création site web</span> : "1718 recherches/mois" dans le title</li>
                  <li><span className="text-yellow-400">✅ SEO Valais</span> : "772 impressions" strategy activated</li>
                  <li><span className="text-yellow-400">✅ Page agence</span> : Layout créé avec metadata parfaits</li>
                </ul>
                <p>
                  Temps total : <strong className="text-green-400">47 minutes</strong> pour optimiser 4 pages majeures.
                  Un humain seul ? Minimum 4 heures.
                </p>
                <div className="bg-black/50 p-4 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-cyan-400 font-semibold">PRODUCTIVITY UNLOCK :</p>
                  <p>Humain + Claude = 140x plus rapide (comme nos conversions 😉)</p>
                </div>
              </div>
            </div>

            {/* Entry 5 */}
            <div className="mb-16 p-8 bg-gradient-to-r from-red-400/10 to-transparent rounded-2xl border border-red-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-4"></div>
                <div className="text-red-400 font-bold">22 JANVIER 2025 - 18H41</div>
                <div className="ml-auto text-gray-400">🐛 DEBUGGING</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Props Dupliqués & JSX Chaos"</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  <strong>Build Error :</strong> <span className="text-red-400">Props dupliqués lignes 172 & 175</span>
                </p>
                <p>
                  <strong>Claude :</strong> "Je vais lancer un agent pour diagnostiquer..." 
                  *30 secondes plus tard* 
                  "Même motion.div avec animate + transition définis 2x"
                </p>
                <p>
                  <strong>Moi :</strong> "Fusionne les animations alors !"
                </p>
                <p>
                  <strong>Claude :</strong> *Fixe en 12 secondes*
                </p>
                <div className="bg-black/50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-400 font-semibold">DEBUG MASTER :</p>
                  <p>Claude trouve et fixe les bugs plus vite que moi je lis l'erreur. Légèrement intimidant. 😅</p>
                </div>
              </div>
            </div>

            {/* Entry 6 - Future Predictions */}
            <div className="mb-16 p-8 bg-gradient-to-r from-pink-400/10 to-transparent rounded-2xl border border-pink-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-pink-400 rounded-full mr-4"></div>
                <div className="text-pink-400 font-bold">FUTUR PROCHE</div>
                <div className="ml-auto text-gray-400">🔮 PRÉDICTIONS</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Ce Qui Va Se Passer Maintenant..."</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  Avec nos optimisations GSC, voici ce qu'on anticipe :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-black/50 p-6 rounded-lg border border-green-400/30">
                    <h4 className="text-green-400 font-bold mb-3">📈 DANS 30 JOURS</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Position 41 → Position 15-25</li>
                      <li>• CTR : 1.21% → 3-5%</li>
                      <li>• Clics : 150 → 400+/mois</li>
                      <li>• "création site internet valais" enfin capturé</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-lg border border-yellow-400/30">
                    <h4 className="text-yellow-400 font-bold mb-3">🚀 DANS 90 JOURS</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Top 10 pour tous nos keywords VALAIS</li>
                      <li>• 6,318 impressions → conversions réelles</li>
                      <li>• Lead flow : 5-10 prospects/mois</li>
                      <li>• Proof of concept HUMAIN × IA validé</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border-l-4 border-pink-400">
                  <p className="text-pink-400 font-semibold">BOLD PREDICTION :</p>
                  <p>D'ici 6 mois, OSOM = référence VALAIS pour collaboration Humain × IA. Nos concurrents vont copier, mais ils n'auront pas Claude Sonnet 4. 😎</p>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="mb-16 p-8 bg-gradient-to-r from-indigo-400/10 to-transparent rounded-2xl border border-indigo-400/30">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-indigo-400 rounded-full mr-4 animate-pulse"></div>
                <div className="text-indigo-400 font-bold">MAINTENANT - STATUS LIVE</div>
                <div className="ml-auto text-gray-400">🔴 LIVE</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">"Build Success : 28/28 Pages ✅"</h3>
              
              <div className="prose prose-lg text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-black/50 rounded-lg">
                    <div className="text-3xl font-bold text-green-400 mb-2">✅</div>
                    <div className="text-white font-semibold">Build Success</div>
                    <div className="text-gray-400 text-sm">8.0s compilation</div>
                  </div>
                  
                  <div className="text-center p-4 bg-black/50 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                    <div className="text-white font-semibold">Pages Optimisées</div>
                    <div className="text-gray-400 text-sm">GSC keywords intégrés</div>
                  </div>
                  
                  <div className="text-center p-4 bg-black/50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400 mb-2">6K+</div>
                    <div className="text-white font-semibold">Impressions Ciblées</div>
                    <div className="text-gray-400 text-sm">Potentiel énorme</div>
                  </div>
                </div>
                
                <p className="text-center text-xl">
                  <strong>Site prêt pour le lancement ! 🚀</strong>
                </p>
              </div>
            </div>

            {/* What's Next */}
            <div className="text-center py-16">
              <h3 className="text-3xl font-bold text-white mb-8">
                <span className="text-yellow-400">Next Episode :</span> "Le Lancement"
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Suivez la suite de nos aventures Humain × Claude IA. 
                Spoiler : on va conquérir Google VALAIS. 😈
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                >
                  Rejoindre la révolution
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  Voir tous nos articles
                </Link>
              </div>
            </div>

          </div>
        </article>
      </div>
    </>
  )
}