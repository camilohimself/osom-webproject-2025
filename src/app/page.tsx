import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-osom-light to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-osom-dark mb-6">
            OSOM
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Agence web digitale spécialisée dans la création de sites internet performants, 
            le SEO et le marketing digital en Valais.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-osom-blue text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Nos Services
            </button>
            <button className="border border-osom-blue text-osom-blue px-8 py-4 rounded-lg hover:bg-osom-blue hover:text-white transition-colors font-semibold">
              Contact
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-osom-dark">Création Web</h3>
            <p className="text-gray-600">
              Sites internet modernes et performants avec Next.js et TypeScript
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-osom-dark">SEO & Marketing</h3>
            <p className="text-gray-600">
              Optimisation pour les moteurs de recherche et stratégies marketing digital
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-osom-dark">Design UX/UI</h3>
            <p className="text-gray-600">
              Expériences utilisateur exceptionnelles et interfaces modernes
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}