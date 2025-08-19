'use client'

import { motion } from 'framer-motion'
import DataLineChart from '@/components/ui/DataLineChart'

// ARCHIVE - Section graphique sophistiquée pour réutilisation future
const DataVisualizationSection = () => {
  return (
    <motion.div 
      className="relative z-20 bg-black/20 rounded-2xl p-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <DataLineChart
        title=""
        subtitle=""
        data={[
          { month: "Jan", osomValue: 44.6, industryValue: 35.2 },
          { month: "Fév", osomValue: 52.3, industryValue: 37.1 },
          { month: "Mar", osomValue: 58.7, industryValue: 39.5 },
          { month: "Avr", osomValue: 62.4, industryValue: 41.2 },
          { month: "Mai", osomValue: 65.8, industryValue: 42.8 },
          { month: "Jun", osomValue: 68.6, industryValue: 44.6 }
        ]}
        primaryColor="#06B6D4"
        secondaryColor="#6B7280"
        backgroundColor="rgba(6, 182, 212, 0.05)"
        className="h-56 border-0"
        animate={true}
      />
    </motion.div>
  )
}

export default DataVisualizationSection