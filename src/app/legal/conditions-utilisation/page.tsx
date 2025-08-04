import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation | OSOM',
  description: 'Conditions générales d\'utilisation du site web et des services de OSOM - Agence digitale en Valais, Suisse.',
}

export default function ConditionsUtilisationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conditions d'Utilisation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Règles d'utilisation de notre site web et de nos services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptation des conditions</h2>
            <p className="text-gray-700">
              En accédant et en utilisant le site web OSOM (osom.ch), vous acceptez 
              d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas 
              ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation du site</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Utilisation autorisée</h3>
                <p className="text-gray-700">
                  Vous pouvez utiliser notre site à des fins personnelles et commerciales 
                  légitimes, notamment pour découvrir nos services et nous contacter.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Utilisation interdite</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Utilisation à des fins illégales ou non autorisées</li>
                  <li>Transmission de virus ou de codes malveillants</li>
                  <li>Tentative d'accès non autorisé aux systèmes</li>
                  <li>Copie ou reproduction non autorisée du contenu</li>
                  <li>Utilisation pour du spam ou du harcèlement</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              Tous les contenus de ce site (textes, images, logos, designs, code) 
              sont protégés par les droits de propriété intellectuelle et appartiennent 
              à OSOM ou à ses partenaires.
            </p>
            <p className="text-gray-700">
              Toute reproduction, distribution, modification ou utilisation commerciale 
              sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services proposés</h2>
            <p className="text-gray-700 mb-4">OSOM propose les services suivants :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Création et développement de sites web</li>
              <li>Programmation et développement IA</li>
              <li>SEO et marketing de contenu</li>
              <li>Publicité payante et croissance</li>
              <li>Automatisation marketing et CRM</li>
              <li>Tracking et analyse de données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conditions contractuelles</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Devis et contrats</h3>
                <p className="text-gray-700">
                  Nos services font l'objet de devis personnalisés et de contrats 
                  spécifiques qui précisent les modalités de livraison, paiement et garanties.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tarification</h3>
                <p className="text-gray-700">
                  Les prix sont indiqués en francs suisses (CHF) et peuvent être 
                  modifiés sans préavis. Les tarifs finaux sont confirmés dans les devis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disponibilité du site</h2>
            <p className="text-gray-700">
              Nous nous efforçons de maintenir le site accessible 24h/7j, mais ne 
              pouvons garantir une disponibilité continue. Le site peut être temporairement 
              indisponible pour maintenance ou raisons techniques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de responsabilité</h2>
            <p className="text-gray-700 mb-4">
              OSOM ne peut être tenue responsable de :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dommages directs ou indirects liés à l'utilisation du site</li>
              <li>Pertes de données ou interruptions de service</li>
              <li>Erreurs ou omissions dans le contenu</li>
              <li>Actions de tiers ou liens externes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
            <p className="text-gray-700">
              OSOM se réserve le droit de modifier ces conditions d'utilisation 
              à tout moment. Les modifications prennent effet dès leur publication 
              sur le site. Il est recommandé de consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable</h2>
            <p className="text-gray-700">
              Ces conditions d'utilisation sont régies par le droit suisse. 
              Tout litige sera soumis à la compétence exclusive des tribunaux suisses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ces conditions d'utilisation, 
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