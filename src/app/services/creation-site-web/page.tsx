import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Agence Web Valais 140x Plus Performante - 688 Clients/6 Mois | OSOM',
  description: '688 clients générés en 6 mois pour Culture Peinture Genève. Agence web 140x plus performante que publicité payante. 2 places disponibles ce mois. 4500 CHF tout inclus.',
  keywords: 'création site internet valais, création site web valais, création de site internet valais, site internet valais, agence web valais, développement web valais, site web valais, création site vitrine valais'
}

// VERSION CEO-FRIENDLY - OPTIMISÉE DÉCISION RAPIDE PDG PME
export default function CreationSiteWebPage() {

  return (
    <div className="min-h-screen bg-black">
      {/* HERO SECTION - SCAN 5 SECONDES */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              Plus que 2 places disponibles ce mois
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              <span className="font-bold text-yellow-400">688 clients</span> générés<br />en 6 mois
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Culture Peinture Genève a généré 688 nouveaux clients avec leur site OSOM.<br />
              <span className="text-yellow-400 font-semibold">140x plus efficace</span> que leur ancienne publicité payante.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #ffd507, #ffd507dd)' }}
          >
            Réserver Ma Place →
          </Link>

          <div className="text-sm text-gray-400">
            Audit gratuit • Sans engagement • Résultats garantis
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - CONFIANCE 30 SECONDES */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Résultats <span className="font-bold text-yellow-400">Vérifiés</span>
            </h2>
          </div>

          {/* Case Study Visuel Simple */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/20 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-yellow-400 font-semibold mb-2">CULTURE PEINTURE • GENÈVE</div>
                <h3 className="text-3xl font-light text-white mb-6">
                  "Mon site me génère plus de clients que toute ma publicité"
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-black/40 rounded-xl">
                    <span className="text-gray-300">Site OSOM</span>
                    <span className="text-yellow-400 font-bold text-xl">688 clients</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/40 rounded-xl">
                    <span className="text-gray-300">Publicité payante</span>
                    <span className="text-gray-400 font-bold text-xl">49 clients</span>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  Données Google Analytics • 200+ jours vérifiés
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-light text-yellow-400 mb-4">
                  140x
                </div>
                <div className="text-xl text-white">
                  Plus performant
                </div>
              </div>
            </div>
          </div>

          {/* Logos Entreprises Valais */}
          <div className="text-center">
            <div className="text-gray-400 mb-8">Ils nous font confiance en Valais</div>
            <div className="flex justify-center items-center space-x-8 opacity-50">
              <div className="text-white font-semibold">CULTURE PEINTURE</div>
              <div className="text-white font-semibold">ARTISANE LUMIÈRE</div>
              <div className="text-white font-semibold">+ 15 AUTRES</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - ACTION 10 SECONDES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/40">
            <div className="mb-8">
              <div className="text-yellow-400 font-semibold mb-4">FORMULE TOUT INCLUS</div>
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4">
                4500 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                Site qui génère des clients • Livré en 45 jours • Formation incluse
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-2xl mb-2">688</div>
                <div className="text-gray-300">Clients générés en 6 mois</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-2xl mb-2">45</div>
                <div className="text-gray-300">Jours de livraison</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-2xl mb-2">2</div>
                <div className="text-gray-300">Places restantes ce mois</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #ffd507, #ffd507dd)' }}
            >
              Réserver Ma Place Maintenant
            </Link>
            
            <div className="text-sm text-gray-400">
              Audit gratuit 800 CHF offert • Call de 15min • Aucun engagement
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}