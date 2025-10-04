import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | OSOM',
  description: 'Mentions légales et informations légales de OSOM - Agence digitale spécialisée en IA et développement web en Valais, Suisse.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Informations légales et réglementaires concernant OSOM
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations sur l'entreprise</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> OSOM - Agence Marketing</p>
              <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
              <p><strong>Adresse :</strong> Rue de Clodevis 13, 1e étage, 1967 Bramois, Valais, Suisse</p>
              <p><strong>Téléphone :</strong> +41 79 128 95 49</p>
              <p><strong>Email :</strong> hello@osom.ch</p>
              <p><strong>Site web :</strong> https://www.osom.ch</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Activité</h2>
            <p className="text-gray-700">
              OSOM est une agence digitale spécialisée dans la création de sites web, 
              le développement d'applications basées sur l'intelligence artificielle, 
              le SEO et marketing digital, et l'automatisation marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations contenues sur ce site sont données à titre informatif 
              et peuvent être modifiées sans préavis. OSOM met tout en œuvre pour 
              fournir des informations exactes et à jour.
            </p>
            <p className="text-gray-700">
              OSOM ne peut être tenue responsable des dommages directs ou indirects 
              résultant de l'utilisation de ce site web ou des services proposés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700">
              Tous les contenus présents sur ce site (textes, images, logos, graphiques) 
              sont protégés par les droits de propriété intellectuelle et appartiennent 
              à OSOM ou à ses partenaires. Toute reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loi applicable</h2>
            <p className="text-gray-700">
              Ces mentions légales sont régies par le droit suisse. En cas de litige, 
              les tribunaux suisses sont seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ces mentions légales, vous pouvez nous 
              contacter à l'adresse : contact@osom.ch
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