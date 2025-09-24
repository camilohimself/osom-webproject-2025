'use client'

interface MobileChartProps {
  title: string
  value: string
  change: string
  color?: 'green' | 'blue' | 'purple' | 'yellow'
}

const colorClasses = {
  green: 'bg-green-500 text-green-500',
  blue: 'bg-blue-500 text-blue-500',
  purple: 'bg-purple-500 text-purple-500',
  yellow: 'bg-yellow-500 text-yellow-500'
}

export default function MobileChartPlaceholder({
  title,
  value,
  change,
  color = 'green'
}: MobileChartProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <div className={`w-3 h-3 rounded-full ${colorClasses[color].split(' ')[0]}`} />
      </div>

      <div className="space-y-2">
        <div className={`text-2xl font-bold ${colorClasses[color].split(' ')[1]}`}>
          {value}
        </div>
        <div className="text-gray-400 text-xs">
          {change}
        </div>
      </div>

      <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className={`h-full ${colorClasses[color].split(' ')[0]} rounded-full`} style={{width: '75%'}} />
      </div>
    </div>
  )
}

// Composants spécialisés pour mobile
export const MobileHorizontalBars = () => (
  <MobileChartPlaceholder
    title="Culture Peinture"
    value="688"
    change="vs 49 avant"
    color="green"
  />
)

export const MobileCTRChart = () => (
  <MobileChartPlaceholder
    title="Taux de Conversion"
    value="14.2%"
    change="ROI optimisé"
    color="blue"
  />
)

export const MobileDataLine = () => (
  <MobileChartPlaceholder
    title="Performance"
    value="+340%"
    change="Croissance"
    color="purple"
  />
)

export const MobileGauge = () => (
  <MobileChartPlaceholder
    title="Vitesse Site"
    value="< 2s"
    change="Garanti OSOM"
    color="yellow"
  />
)