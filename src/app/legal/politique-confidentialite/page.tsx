import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | OSOM',
  description: 'Politique de confidentialité et protection des données personnelles de OSOM - Agence digitale en Valais, Suisse.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protection et traitement de vos données personnelles
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecte des données</h2>
            <p className="text-gray-700 mb-4">
              OSOM collecte les données personnelles que vous nous fournissez 
              volontairement lors de :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>La prise de contact via nos formulaires</li>
              <li>L'inscription à notre newsletter</li>
              <li>La demande de devis ou consultation</li>
              <li>L'utilisation de nos calculateurs en ligne</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de données collectées</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Données d'identification</h3>
                <p className="text-gray-700">Nom, prénom, email, téléphone, entreprise</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Données techniques</h3>
                <p className="text-gray-700">Adresse IP, navigateur, données de navigation (cookies)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Données de projet</h3>
                <p className="text-gray-700">Informations sur vos besoins et projets digitaux</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation des données</h2>
            <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Fournir nos services digitaux</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Base légale</h2>
            <p className="text-gray-700">
              Le traitement de vos données personnelles se base sur :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Votre consentement explicite</li>
              <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
              <li>Notre intérêt légitime à développer nos activités</li>
              <li>Le respect d'obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Partage des données</h2>
            <p className="text-gray-700 mb-4">
              OSOM ne vend pas vos données personnelles. Nous pouvons partager 
              vos données avec :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Nos prestataires techniques (hébergement, analytics)</li>
              <li>Nos partenaires pour la réalisation de projets (avec votre accord)</li>
              <li>Les autorités légales si requis par la loi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conservation des données</h2>
            <p className="text-gray-700">
              Vos données sont conservées pendant la durée nécessaire aux finalités 
              pour lesquelles elles ont été collectées, ou selon les obligations légales 
              de conservation (généralement 3 à 10 ans).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
            <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Droit d'accès :</strong> connaître les données que nous détenons</li>
              <li><strong>Droit de rectification :</strong> corriger vos données</li>
              <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Pour exercer ces droits, contactez-nous à : contact@osom.ch
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité</h2>
            <p className="text-gray-700">
              Nous mettons en place des mesures techniques et organisationnelles 
              appropriées pour protéger vos données contre la perte, l'utilisation 
              abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant cette politique de confidentialité ou 
              vos données personnelles, contactez-nous à : contact@osom.ch
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