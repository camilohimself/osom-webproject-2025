'use client'

import { useState, useEffect, useCallback } from 'react'

export interface RealtimeMetric {
  id: string
  current: number
  trend: 'up' | 'down' | 'stable'
  change: number
  sparkline: number[]
  lastUpdate: number
}

export interface ForceMetrics {
  data: {
    sessions: RealtimeMetric
    conversions: RealtimeMetric
    roi: RealtimeMetric
  }
  code: {
    performance: RealtimeMetric
    uptime: RealtimeMetric
    buildTime: RealtimeMetric
  }
  design: {
    conversionRate: RealtimeMetric
    engagement: RealtimeMetric
    bounceRate: RealtimeMetric
  }
}

// Simulation des données GA4 + Métriques techniques
const initialMetrics: ForceMetrics = {
  data: {
    sessions: { id: 'sessions', current: 14171, trend: 'up', change: 12.3, sparkline: [13800, 14000, 14100, 14171], lastUpdate: Date.now() },
    conversions: { id: 'conversions', current: 688, trend: 'up', change: 8.7, sparkline: [620, 650, 670, 688], lastUpdate: Date.now() },
    roi: { id: 'roi', current: 1400, trend: 'up', change: 15.2, sparkline: [1200, 1300, 1350, 1400], lastUpdate: Date.now() }
  },
  code: {
    performance: { id: 'performance', current: 98.7, trend: 'stable', change: 0.2, sparkline: [98.5, 98.6, 98.7, 98.7], lastUpdate: Date.now() },
    uptime: { id: 'uptime', current: 99.98, trend: 'stable', change: 0.0, sparkline: [99.98, 99.98, 99.98, 99.98], lastUpdate: Date.now() },
    buildTime: { id: 'buildTime', current: 6.2, trend: 'down', change: -0.3, sparkline: [6.8, 6.5, 6.3, 6.2], lastUpdate: Date.now() }
  },
  design: {
    conversionRate: { id: 'conversionRate', current: 11.3, trend: 'up', change: 2.1, sparkline: [9.2, 10.1, 10.8, 11.3], lastUpdate: Date.now() },
    engagement: { id: 'engagement', current: 68.6, trend: 'up', change: 4.2, sparkline: [64.4, 66.1, 67.8, 68.6], lastUpdate: Date.now() },
    bounceRate: { id: 'bounceRate', current: 23.1, trend: 'down', change: -3.4, sparkline: [26.5, 25.2, 24.1, 23.1], lastUpdate: Date.now() }
  }
}

export const useRealtimeMetrics = () => {
  const [metrics, setMetrics] = useState<ForceMetrics>(initialMetrics)
  const [isLive, setIsLive] = useState(false)

  // Simulation de fluctuations réalistes
  const generateRealisticFluctuation = useCallback((baseValue: number, volatility: number = 0.02) => {
    const random = (Math.random() - 0.5) * 2 // -1 to 1
    const fluctuation = baseValue * volatility * random
    return Math.max(0, baseValue + fluctuation)
  }, [])

  // Détermine la tendance basée sur les dernières valeurs
  const calculateTrend = useCallback((sparkline: number[]): 'up' | 'down' | 'stable' => {
    if (sparkline.length < 2) return 'stable'
    const recent = sparkline.slice(-2)
    const change = recent[1] - recent[0]
    if (Math.abs(change) < 0.1) return 'stable'
    return change > 0 ? 'up' : 'down'
  }, [])

  // Met à jour une métrique spécifique
  const updateMetric = useCallback((metric: RealtimeMetric, baseValue: number, volatility: number): RealtimeMetric => {
    const newValue = generateRealisticFluctuation(baseValue, volatility)
    const newSparkline = [...metric.sparkline.slice(-7), newValue] // Garde les 8 dernières valeurs
    const previousValue = metric.current
    const change = ((newValue - previousValue) / previousValue) * 100

    return {
      ...metric,
      current: parseFloat(newValue.toFixed(2)),
      trend: calculateTrend(newSparkline),
      change: parseFloat(change.toFixed(2)),
      sparkline: newSparkline,
      lastUpdate: Date.now()
    }
  }, [generateRealisticFluctuation, calculateTrend])

  // Simulation temps réel
  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      setMetrics(prevMetrics => ({
        data: {
          sessions: updateMetric(prevMetrics.data.sessions, 14171, 0.005), // Très peu volatile
          conversions: updateMetric(prevMetrics.data.conversions, 688, 0.015), // Moyennement volatile
          roi: updateMetric(prevMetrics.data.roi, 1400, 0.02) // Plus volatile
        },
        code: {
          performance: updateMetric(prevMetrics.code.performance, 98.7, 0.002), // Très stable
          uptime: updateMetric(prevMetrics.code.uptime, 99.98, 0.0001), // Ultra stable
          buildTime: updateMetric(prevMetrics.code.buildTime, 6.2, 0.05) // Variable
        },
        design: {
          conversionRate: updateMetric(prevMetrics.design.conversionRate, 11.3, 0.01),
          engagement: updateMetric(prevMetrics.design.engagement, 68.6, 0.008),
          bounceRate: updateMetric(prevMetrics.design.bounceRate, 23.1, 0.012)
        }
      }))
    }, 2000) // Update chaque 2 secondes

    return () => clearInterval(interval)
  }, [isLive, updateMetric])

  // Démarre/arrête la simulation
  const toggleLiveMode = useCallback(() => {
    setIsLive(prev => !prev)
  }, [])

  // Reset aux valeurs initiales
  const resetMetrics = useCallback(() => {
    setMetrics(initialMetrics)
    setIsLive(false)
  }, [])

  return {
    metrics,
    isLive,
    toggleLiveMode,
    resetMetrics
  }
}