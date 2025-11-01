import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique des Cookies | OSOM',
  description: 'Politique d\'utilisation des cookies sur le site web de OSOM - Agence digitale en Valais, Suisse.',
  alternates: {
    canonical: 'https://www.osom.ch/legal/cookies',
  },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politique des Cookies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Information sur l'utilisation des cookies sur notre site web
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-700">
              Un cookie est un petit fichier texte déposé sur votre appareil lors 
              de la visite d'un site web. Il permet de mémoriser des informations 
              sur votre navigation et d'améliorer votre expérience utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies essentiels</h3>
                <p className="text-gray-700 mb-2">
                  Nécessaires au fonctionnement du site web. Ils ne peuvent pas être désactivés.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Cookies de session pour la navigation</li>
                  <li>Cookies de sécurité CSRF</li>
                  <li>Cookies de préférence de langue</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies analytiques</h3>
                <p className="text-gray-700 mb-2">
                  Nous aident à comprendre comment vous utilisez notre site web.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Google Analytics (GA4) - analyse du trafic</li>
                  <li>Mesure des performances du site</li>
                  <li>Statistiques de consultation anonymisées</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Durée de conservation :</strong> 26 mois maximum
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies fonctionnels</h3>
                <p className="text-gray-700 mb-2">
                  Améliorent votre expérience en mémorisant vos préférences.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Préférences d'affichage</li>
                  <li>Mémorisation des formulaires</li>
                  <li>Choix de consentement aux cookies</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies marketing</h3>
                <p className="text-gray-700 mb-2">
                  Nous permettent de mesurer l'efficacité de nos campagnes.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Tracking des conversions</li>
                  <li>Pixels de suivi (Meta, Google)</li>
                  <li>Attribution des sources de trafic</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Durée de conservation :</strong> 90 jours maximum
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services tiers</h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise des services tiers qui peuvent déposer leurs propres cookies :
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                <p className="text-gray-700 text-sm">
                  Analyse du trafic et des performances du site web.
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Politique de confidentialité Google
                  </a>
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Meta Pixel</h4>
                <p className="text-gray-700 text-sm">
                  Suivi des conversions et optimisation publicitaire.
                  <a href="https://www.facebook.com/privacy/policy/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Politique de confidentialité Meta
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestion de vos préférences</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paramètres du navigateur</h3>
                <p className="text-gray-700">
                  Vous pouvez configurer votre navigateur pour refuser les cookies 
                  ou être averti avant leur acceptation. Attention : désactiver 
                  certains cookies peut affecter le fonctionnement du site.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consentement</h3>
                <p className="text-gray-700">
                  Lors de votre première visite, une bannière vous permet de choisir 
                  les types de cookies que vous acceptez. Vous pouvez modifier vos 
                  préférences à tout moment.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outils de désactivation</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                <p className="text-gray-700 text-sm">
                  Désactivez le suivi Google Analytics avec le module complémentaire :
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out
                  </a>
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Publicité ciblée</h4>
                <p className="text-gray-700 text-sm">
                  Gérez vos préférences publicitaires :
                  <a href="https://www.youronlinechoices.com/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Your Online Choices
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-50 rounded-lg">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Type de cookie</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Cookies de session</td>
                    <td className="py-3 px-4 text-gray-700">Fin de session</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Cookies analytiques</td>
                    <td className="py-3 px-4 text-gray-700">26 mois</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Cookies marketing</td>
                    <td className="py-3 px-4 text-gray-700">90 jours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Cookies fonctionnels</td>
                    <td className="py-3 px-4 text-gray-700">12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant notre utilisation des cookies, 
              contactez-nous à : contact@osom.ch
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Dernière mise à jour : Août 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}