'use client'

import React from 'react'

interface DataPoint {
  label: string
  value: number
  color?: string
}

interface SimpleBarChartProps {
  data: DataPoint[]
  title?: string
  subtitle?: string
  maxValue?: number
  width?: number
  height?: number
  className?: string
}

export default function SimpleBarChart({
  data,
  title,
  subtitle,
  maxValue,
  width = 300,
  height = 200,
  className = ''
}: SimpleBarChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value))
  const barWidth = (width - 60) / data.length - 10
  const chartHeight = height - 60

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
        
        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.value / max) * chartHeight
          const x = 30 + index * (barWidth + 10)
          const y = 20 + chartHeight - barHeight
          
          return (
            <g key={index}>
              {/* Bar */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color || '#FACC15'}
                rx={2}
                className="transition-all duration-300 hover:opacity-80"
              />
              
              {/* Value label */}
              <text
                x={x + barWidth / 2}
                y={y - 5}
                textAnchor="middle"
                className="fill-white text-xs font-medium"
              >
                {item.value}
              </text>
              
              {/* Label */}
              <text
                x={x + barWidth / 2}
                y={height - 5}
                textAnchor="middle"
                className="fill-gray-300 text-xs"
              >
                {item.label}
              </text>
            </g>
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