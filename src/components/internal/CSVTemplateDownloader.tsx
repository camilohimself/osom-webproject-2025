'use client'

import { motion } from 'framer-motion'

interface CSVTemplate {
  id: string
  title: string
  description: string
  filename: string
  columns: string[]
  icon: string
}

const templates: CSVTemplate[] = [
  {
    id: 'competitors',
    title: 'Analyse Concurrence',
    description: 'URLs, trafic estimé, mots-clés, forces/faiblesses, pricing',
    filename: 'concurrents-template.csv',
    columns: ['url', 'traffic', 'keywords', 'strengths', 'weaknesses', 'price_range'],
    icon: '🏢'
  },
  {
    id: 'personas',
    title: 'Personas Détaillés',
    description: 'Profils clients: âge, secteur, budget, besoins, objections',
    filename: 'personas-template.csv',
    columns: ['name', 'age', 'sector', 'budget', 'needs', 'objections', 'digital_maturity'],
    icon: '👥'
  },
  {
    id: 'keywords',
    title: 'Recherche Mots-clés',
    description: 'Volume, difficulté, intention, CPC, opportunités SEO',
    filename: 'mots-cles-template.csv',
    columns: ['keyword', 'volume', 'difficulty', 'intent', 'cpc', 'opportunity'],
    icon: '🔍'
  }
]

export default function CSVTemplateDownloader() {
  const downloadTemplate = (template: CSVTemplate) => {
    const link = document.createElement('a')
    link.href = `/templates/${template.filename}`
    link.download = template.filename
    link.click()
  }

  return (
    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20 mb-8">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        📥 Templates CSV Prêts à Utiliser
      </h3>
      <p className="text-gray-300 text-sm mb-6">
        Téléchargez nos modèles avec exemples concrets pour structurer vos données efficacement
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            className="bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-blue-400/50 transition-all cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => downloadTemplate(template)}
          >
            <div className="text-center mb-3">
              <div className="text-2xl mb-2">{template.icon}</div>
              <div className="font-semibold text-white text-sm">{template.title}</div>
            </div>
            
            <div className="text-xs text-gray-400 mb-3 text-center">
              {template.description}
            </div>
            
            <div className="mb-3">
              <div className="text-xs text-gray-500 mb-1">Colonnes incluses:</div>
              <div className="flex flex-wrap gap-1">
                {template.columns.slice(0, 3).map((col) => (
                  <span key={col} className="px-1.5 py-0.5 bg-gray-800 text-gray-300 text-xs rounded">
                    {col}
                  </span>
                ))}
                {template.columns.length > 3 && (
                  <span className="px-1.5 py-0.5 bg-gray-800 text-gray-400 text-xs rounded">
                    +{template.columns.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            <motion.button
              className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-3 rounded text-xs font-semibold transition-colors"
              whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
            >
              📥 Télécharger Template
            </motion.button>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
        <div className="text-yellow-400 text-xs font-semibold mb-1">💡 Conseil Pro</div>
        <div className="text-yellow-300 text-xs">
          Utilisez ces templates comme base, puis adaptez les colonnes selon vos besoins spécifiques.
          Gardez les colonnes principales pour une analyse optimale.
        </div>
      </div>
    </div>
  )
}