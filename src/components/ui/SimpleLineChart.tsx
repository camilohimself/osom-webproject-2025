'use client'

import React from 'react'

interface DataPoint {
  label: string
  value: number
}

interface SimpleLineChartProps {
  data: DataPoint[]
  title?: string
  subtitle?: string
  color?: string
  maxValue?: number
  width?: number
  height?: number
  className?: string
}

export default function SimpleLineChart({
  data,
  title,
  subtitle,
  color = '#70C1A9',
  maxValue,
  width = 300,
  height = 200,
  className = ''
}: SimpleLineChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value))
  const chartWidth = width - 60
  const chartHeight = height - 60
  const pointSpacing = chartWidth / (data.length - 1)

  // Generate path for line
  const pathData = data.map((point, index) => {
    const x = 30 + index * pointSpacing
    const y = 20 + chartHeight - (point.value / max) * chartHeight
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  // Generate path for area fill
  const areaData = `${pathData} L ${30 + (data.length - 1) * pointSpacing} ${20 + chartHeight} L 30 ${20 + chartHeight} Z`

  return (
    <div className={`bg-black/40 rounded-xl p-4 ${className}`}>
      {title && (
        <div className="text-center mb-2">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
      )}
      
      <svg width={width} height={height} className="mx-auto">
        {/* Grid lines */}
        {[0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={30}
            y1={20 + chartHeight * (1 - ratio)}
            x2={width - 30}
            y2={20 + chartHeight * (1 - ratio)}
            stroke="#374151"
            strokeWidth={0.5}
            opacity={0.5}
          />
        ))}
        
        {/* Area fill */}
        <path
          d={areaData}
          fill={color}
          fillOpacity={0.1}
        />
        
        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={2}
          className="transition-all duration-300"
        />
        
        {/* Points */}
        {data.map((point, index) => {
          const x = 30 + index * pointSpacing
          const y = 20 + chartHeight - (point.value / max) * chartHeight
          
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r={4}
                fill={color}
                className="transition-all duration-300 hover:r-6"
              />
              
              {/* Value label */}
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                className="fill-white text-xs font-medium"
              >
                {point.value}%
              </text>
            </g>
          )
        })}
        
        {/* Labels */}
        {data.map((point, index) => {
          const x = 30 + index * pointSpacing
          return (
            <text
              key={index}
              x={x}
              y={height - 5}
              textAnchor="middle"
              className="fill-gray-300 text-xs"
            >
              {point.label}
            </text>
          )
        })}
        
        {/* Y-axis */}
        <line x1={30} y1={20} x2={30} y2={height - 30} stroke="#6B7280" strokeWidth={1} />
        
        {/* X-axis */}
        <line x1={30} y1={height - 30} x2={width - 30} y2={height - 30} stroke="#6B7280" strokeWidth={1} />
      </svg>
    </div>
  )
}