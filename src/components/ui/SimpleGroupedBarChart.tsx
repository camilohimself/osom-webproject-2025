'use client'

import React from 'react'

interface DataGroup {
  label: string
  values: {
    label: string
    value: number
    color: string
  }[]
}

interface SimpleGroupedBarChartProps {
  data: DataGroup[]
  title?: string
  subtitle?: string
  maxValue?: number
  width?: number
  height?: number
  className?: string
}

export default function SimpleGroupedBarChart({
  data,
  title,
  subtitle,
  maxValue,
  width = 350,
  height = 220,
  className = ''
}: SimpleGroupedBarChartProps) {
  const max = maxValue || Math.max(...data.flatMap(group => group.values.map(v => v.value)))
  const groupWidth = (width - 80) / data.length
  const barWidth = groupWidth / data[0]?.values.length - 5
  const chartHeight = height - 80

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
            x1={40}
            y1={30 + chartHeight * (1 - ratio)}
            x2={width - 40}
            y2={30 + chartHeight * (1 - ratio)}
            stroke="#374151"
            strokeWidth={0.5}
            opacity={0.5}
          />
        ))}
        
        {/* Grouped bars */}
        {data.map((group, groupIndex) => {
          const groupX = 40 + groupIndex * groupWidth
          
          return (
            <g key={groupIndex}>
              {group.values.map((bar, barIndex) => {
                const barHeight = (bar.value / max) * chartHeight
                const x = groupX + barIndex * (barWidth + 2)
                const y = 30 + chartHeight - barHeight
                
                return (
                  <g key={barIndex}>
                    {/* Bar */}
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      fill={bar.color}
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
                      {bar.value}
                    </text>
                  </g>
                )
              })}
              
              {/* Group label */}
              <text
                x={groupX + (groupWidth / 2)}
                y={height - 10}
                textAnchor="middle"
                className="fill-gray-300 text-sm font-medium"
              >
                {group.label}
              </text>
            </g>
          )
        })}
        
        {/* Legend */}
        {data[0]?.values && (
          <g transform={`translate(${width - 120}, 40)`}>
            {data[0].values.map((item, index) => (
              <g key={index} transform={`translate(0, ${index * 20})`}>
                <rect x={0} y={0} width={12} height={12} fill={item.color} rx={2} />
                <text x={18} y={10} className="fill-gray-300 text-xs">
                  {item.label}
                </text>
              </g>
            ))}
          </g>
        )}
        
        {/* Y-axis */}
        <line x1={40} y1={30} x2={40} y2={height - 40} stroke="#6B7280" strokeWidth={1} />
        
        {/* X-axis */}
        <line x1={40} y1={height - 40} x2={width - 40} y2={height - 40} stroke="#6B7280" strokeWidth={1} />
      </svg>
    </div>
  )
}