'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DashboardProps {
  className?: string
  showFullDashboard?: boolean
}

const CulturePeintureDashboard = ({ className = '', showFullDashboard = false }: DashboardProps) => {
  const [activeMetric, setActiveMetric] = useState('conversions')
  
  const dashboardMetrics = {
    conversions: {
      title: 'Conversions Performance',
      value: 688,
      comparison: 49,
      label: 'osom vs Paid Ads',
      color: '#FFDD00',
      improvement: '14x supérieur'
    },
    engagement: {
      title: 'Engagement Time',
      value: 67.5,
      comparison: 21.3,
      label: 'Organic vs Direct',
      color: '#8B5CF6',
      improvement: '+216%'
    },
    attribution: {
      title: 'Sessions Récupérées',
      value: 14171,
      comparison: 0,
      label: 'Unassigned Traffic',
      color: '#10B981',
      improvement: '100% visibilité'
    }
  }

  const socialMetrics = {
    views: '2.4M vues organiques',
    followers: '+2,100 followers',
    interactions: '50K+ interactions',
    peak: '38,971 vues/jour'
  }

  return (
    <div className={`bg-gradient-to-br from-black/95 to-gray-900/95 rounded-3xl border border-yellow-400/20 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-800/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Culture Peinture Dashboard
            </h3>
            <p className="text-gray-400">
              Intelligence Data + Content Performance • 200 jours
            </p>
          </div>
          <div className="text-right">
            <div className="text-yellow-400 font-bold text-sm">LIVE</div>
            <div className="text-gray-500 text-xs">Temps réel</div>
          </div>
        </div>
      </div>

      {/* Metrics Navigation */}
      <div className="p-4 border-b border-gray-800/30">
        <div className="flex gap-2 overflow-x-auto">
          {Object.entries(dashboardMetrics).map(([key, metric]) => (
            <button
              key={key}
              onClick={() => setActiveMetric(key)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeMetric === key 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {metric.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Analytics Chart Simulation */}
          <motion.div 
            className="space-y-6"
            key={activeMetric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-gray-900/50 to-black/60 rounded-xl p-6 border border-gray-700/50">
              <div className="text-lg font-semibold text-white mb-4">
                {dashboardMetrics[activeMetric as keyof typeof dashboardMetrics].title}
              </div>
              
              {/* Chart Visualization */}
              <div className="h-32 flex items-end justify-between gap-2 mb-4">
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    className="bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t"
                    style={{ 
                      height: '80px', 
                      width: '40px',
                      backgroundColor: dashboardMetrics[activeMetric as keyof typeof dashboardMetrics].color 
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: '80px' }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <div className="text-xs text-gray-400">osom</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    className="bg-gradient-to-t from-gray-600 to-gray-500 rounded-t"
                    style={{ height: '20px', width: '40px' }}
                    initial={{ height: 0 }}
                    animate={{ height: '20px' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <div className="text-xs text-gray-400">Standard</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-white">
                    {dashboardMetrics[activeMetric as keyof typeof dashboardMetrics].value.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">
                    vs {dashboardMetrics[activeMetric as keyof typeof dashboardMetrics].comparison}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">
                    {dashboardMetrics[activeMetric as keyof typeof dashboardMetrics].improvement}
                  </div>
                  <div className="text-xs text-gray-400">performance</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Performance */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-400/30">
              <div className="text-lg font-semibold text-white mb-4">
                Campagne Réels Performance
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(socialMetrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-bold text-purple-400 mb-1">
                      {value.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-400">
                      {value.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-400/30">
              <div className="text-lg font-semibold text-white mb-4">
                ROI Business Impact
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Investissement total</span>
                  <span className="text-white font-semibold">6,000 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Conversions générées</span>
                  <span className="text-green-400 font-bold">688</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Coût par conversion</span>
                  <span className="text-green-400 font-bold">8.7 CHF</span>
                </div>
                <div className="pt-2 border-t border-gray-700/50">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Performance vs Ads</span>
                    <span className="text-yellow-400 font-bold">14x supérieur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
          <div className="text-yellow-400 font-bold text-lg mb-2">
            Dashboard Complet Disponible
          </div>
          <div className="text-gray-400 text-sm mb-4">
            7 graphiques interactifs • Export PDF • Données temps réel
          </div>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            Voir Dashboard Complet
          </button>
        </div>
      </div>
    </div>
  )
}

export default CulturePeintureDashboard