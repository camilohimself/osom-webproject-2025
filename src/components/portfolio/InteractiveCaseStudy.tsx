'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Metric {
  label: string
  value: string
  comparison: string
  trend: 'up' | 'down'
  impact: 'positive' | 'negative' | 'neutral'
  tooltip?: string
}

interface CaseStudyData {
  id: string
  client: string
  sector: string
  timeline: string
  challenge: string
  solution: string
  investment: {
    osom: number
    competitor: number
  }
  results: {
    conversions: {
      osom: number
      competitor: number
    }
    roi: {
      osom: number
      competitor: number
    }
    sessions: {
      osom: number
      competitor: number
    }
  }
  metrics: Metric[]
  insights: string[]
  dataSource: string
}

interface InteractiveCaseStudyProps {
  data: CaseStudyData
  isExpanded?: boolean
  onToggle?: () => void
}

const MetricCard = ({ metric, index }: { metric: Metric; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white border border-gray-200 p-6 rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isHovered ? 'border-yellow-400' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Metric Value */}
      <div className="flex items-center justify-between mb-4">
        <div className={`text-3xl font-light ${
          metric.impact === 'positive' ? 'text-green-600' : 
          metric.impact === 'negative' ? 'text-red-600' : 'text-gray-900'
        }`}>
          {metric.value}
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
        }`}>
          <svg className={`w-4 h-4 ${
            metric.trend === 'up' ? 'text-green-600 rotate-0' : 'text-red-600 rotate-180'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M17 7v10M17 7H7" />
          </svg>
        </div>
      </div>

      {/* Metric Label */}
      <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
      
      {/* Comparison */}
      <div className="text-xs text-gray-400 font-mono">{metric.comparison}</div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && metric.tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap"
          >
            {metric.tooltip}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ROIComparison = ({ data }: { data: CaseStudyData }) => {
  const [animatedValues, setAnimatedValues] = useState({ osom: 0, competitor: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        osom: data.results.roi.osom,
        competitor: data.results.roi.competitor
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [data.results.roi])

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
      <h4 className="text-lg font-medium mb-6 text-center">ROI Comparison Analysis</h4>
      
      <div className="grid grid-cols-2 gap-8">
        {/* OSOM Results */}
        <div className="text-center">
          <div className="text-xs text-gray-400 font-mono mb-2 tracking-wider">OSOM STRATEGY</div>
          <div className="text-4xl font-light text-green-600 mb-4">
            {animatedValues.osom.toLocaleString()}x
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              {data.results.conversions.osom} conversions
            </div>
            <div className="text-sm text-gray-600">
              {data.investment.osom.toLocaleString()} CHF investment
            </div>
            <div className="text-xs text-green-600 font-medium">
              {(data.results.conversions.osom / data.investment.osom * 1000).toFixed(1)} conv/1k CHF
            </div>
          </div>
        </div>

        {/* Competitor Results */}
        <div className="text-center">
          <div className="text-xs text-gray-400 font-mono mb-2 tracking-wider">PAID ADVERTISING</div>
          <div className="text-4xl font-light text-red-600 mb-4">
            {animatedValues.competitor.toLocaleString()}x
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              {data.results.conversions.competitor} conversions
            </div>
            <div className="text-sm text-gray-600">
              {data.investment.competitor.toLocaleString()} CHF investment
            </div>
            <div className="text-xs text-red-600 font-medium">
              {(data.results.conversions.competitor / data.investment.competitor * 1000).toFixed(1)} conv/1k CHF
            </div>
          </div>
        </div>
      </div>

      {/* Performance Ratio */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <div className="text-xs text-gray-400 font-mono mb-2">PERFORMANCE MULTIPLIER</div>
        <div className="text-2xl font-light text-yellow-600">
          {(data.results.roi.osom / data.results.roi.competitor).toFixed(0)}x more efficient
        </div>
      </div>
    </div>
  )
}

export default function InteractiveCaseStudy({ data, isExpanded = false, onToggle }: InteractiveCaseStudyProps) {
  const [activeTab, setActiveTab] = useState<'metrics' | 'insights' | 'data'>('metrics')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div 
        className="p-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-black mb-2">{data.client}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{data.sector}</span>
              <span>•</span>
              <span>{data.timeline}</span>
              <span>•</span>
              <span className="text-green-600 font-medium">
                {(data.results.roi.osom / data.results.roi.competitor).toFixed(0)}x ROI
              </span>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 flex items-center justify-center text-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'metrics', label: 'Performance Metrics' },
                  { id: 'insights', label: 'Strategic Insights' },
                  { id: 'data', label: 'Data Sources' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-yellow-400 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* ROI Comparison */}
                    <ROIComparison data={data} />
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'insights' && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-lg font-medium mb-4">Strategic Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{data.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4">OSOM Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{data.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-4">Key Insights</h4>
                      <ul className="space-y-3">
                        {data.insights.map((insight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{insight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'data' && (
                  <motion.div
                    key="data"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Data Sources & Methodology</h4>
                      <p className="text-gray-700 mb-4">{data.dataSource}</p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-2">TRACKING PERIOD</div>
                          <div className="font-medium">{data.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">TOTAL SESSIONS ANALYZED</div>
                          <div className="font-medium">
                            {(data.results.sessions.osom + data.results.sessions.competitor).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}