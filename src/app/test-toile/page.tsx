'use client'

import { useState } from 'react'
import ToileAnimation from '@/components/animations/ToileAnimation'
import ToileSimple from '@/components/animations/ToileSimple'
import ToileUltraSimple from '@/components/animations/ToileUltraSimple'

const TestToilePage = () => {
  const [autoPlay, setAutoPlay] = useState(true)
  const [selectedTheme, setSelectedTheme] = useState<'osom' | 'seo' | 'marketing'>('osom')

  // Points de test pour simulation Homepage Services
  const homepagePoints = [
    { id: 'web', x: 150, y: 100, label: 'Sites Web 11.3%', active: true },
    { id: 'seo', x: 400, y: 150, label: 'SEO +54%', active: true },
    { id: 'marketing', x: 650, y: 120, label: 'Marketing 140x', active: true },
    { id: 'data', x: 300, y: 250, label: 'Data Analytics', active: true },
    { id: 'roi', x: 500, y: 280, label: 'ROI Tracking', active: true }
  ]

  // Points de test pour simulation Contact Progress
  const contactPoints = [
    { id: 'questionnaire', x: 200, y: 200, label: 'Questionnaire', active: true },
    { id: 'consultation', x: 400, y: 200, label: 'Consultation', active: true },
    { id: 'transformation', x: 600, y: 200, label: 'Transformation', active: true }
  ]

  // Points de test pour KPI comparaison
  const kpiPoints = [
    { id: 'before1', x: 150, y: 150, label: 'Avant: 2%', active: true },
    { id: 'after1', x: 350, y: 150, label: 'Après: 11.3%', active: true },
    { id: 'before2', x: 150, y: 250, label: 'Concurrent: 49', active: true },
    { id: 'after2', x: 350, y: 250, label: 'OSOM: 688', active: true }
  ]

  const [currentPoints, setCurrentPoints] = useState(homepagePoints)

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Test Toile Animation - Style Assassin's Creed
          </h1>
          <p className="text-gray-300 text-xl">
            Développement des effets de tissage pour OSOM
          </p>
        </div>

        {/* Contrôles */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Contrôles de Test</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sélection du scénario */}
            <div>
              <label className="block text-sm font-medium mb-2">Scénario</label>
              <select 
                className="w-full bg-black border border-gray-600 rounded px-3 py-2"
                onChange={(e) => {
                  const scenario = e.target.value
                  if (scenario === 'homepage') setCurrentPoints(homepagePoints)
                  else if (scenario === 'contact') setCurrentPoints(contactPoints)
                  else if (scenario === 'kpi') setCurrentPoints(kpiPoints)
                }}
              >
                <option value="homepage">Homepage Services</option>
                <option value="contact">Contact Progress</option>
                <option value="kpi">KPI Comparaison</option>
              </select>
            </div>

            {/* Sélection du thème */}
            <div>
              <label className="block text-sm font-medium mb-2">Thème Couleur</label>
              <select 
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value as any)}
                className="w-full bg-black border border-gray-600 rounded px-3 py-2"
              >
                <option value="osom">OSOM (Jaune)</option>
                <option value="seo">SEO (Cyan)</option>
                <option value="marketing">Marketing (Pink)</option>
              </select>
            </div>

            {/* Animation Controls */}
            <div>
              <label className="block text-sm font-medium mb-2">Animation</label>
              <div className="space-y-2">
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`w-full px-4 py-2 rounded transition-colors ${
                    autoPlay 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {autoPlay ? 'Auto Play ON' : 'Auto Play OFF'}
                </button>
                <button
                  onClick={() => {
                    setAutoPlay(false)
                    setTimeout(() => setAutoPlay(true), 100)
                  }}
                  className="w-full px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  🔄 Redémarrer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Zone d'animation principale */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Animation Toile - Effet Tissage
          </h2>
          
          {/* Version Ultra Simple (GARANTIE) */}
          <div className="bg-black rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-green-400">✅ Version Ultra Simple (GARANTIE)</h3>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-500 transition-colors text-sm font-medium"
              >
                🔄 Relancer
              </button>
            </div>
            <ToileUltraSimple />
          </div>

          {/* Version Simple (test de base) */}
          <div className="bg-black rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-yellow-400">🚀 Version Simple (Test)</h3>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors text-sm font-medium"
              >
                🔄 Relancer
              </button>
            </div>
            <ToileSimple />
          </div>

          {/* Version Avancée */}
          <div className="bg-black rounded-lg p-4">
            <h3 className="text-lg text-yellow-400 mb-4">⚡ Version Avancée (Canvas)</h3>
            <ToileAnimation
              points={currentPoints}
              width={800}
              height={400}
              autoPlay={autoPlay}
              theme={selectedTheme}
              triggerOnScroll={false}
              className="w-full"
            />
          </div>
        </div>

        {/* Informations techniques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Stats Performance */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Performance & Optimisation
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>✓ Canvas HTML5 pour rendu optimisé</div>
              <div>✓ IntersectionObserver pour déclenchement efficace</div>
              <div>✓ Framer Motion pour animations fluides</div>
              <div>✓ Responsive design adaptatif</div>
              <div>✓ Thèmes couleur OSOM intégrés</div>
            </div>
          </div>

          {/* Concepts Assassin's Creed */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Inspiration Assassin's Creed
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>🎯 Eagle Vision: Effet de lueur sur les points</div>
              <div>🕸️ Animus Web: Connexions progressives</div>
              <div>💫 Synchronisation: Points d'activation</div>
              <div>⚡ Memory Threads: Lignes de données</div>
              <div>🔮 Golden Ratio: Positionnement harmonieux</div>
            </div>
          </div>
        </div>

        {/* Instructions d'intégration */}
        <div className="bg-gray-900 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Prochaines Étapes d'Intégration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black rounded p-4">
              <div className="text-yellow-400 font-medium mb-2">1. Homepage Services</div>
              <div className="text-gray-300">
                Connecter les 3 blocs services avec animation sur scroll
              </div>
            </div>
            <div className="bg-black rounded p-4">
              <div className="text-cyan-400 font-medium mb-2">2. Contact Progress</div>
              <div className="text-gray-300">
                Intégrer au système de progression existant
              </div>
            </div>
            <div className="bg-black rounded p-4">
              <div className="text-pink-400 font-medium mb-2">3. Service Pages</div>
              <div className="text-gray-300">
                Visualiser les comparaisons KPI avec fils connecteurs
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TestToilePage