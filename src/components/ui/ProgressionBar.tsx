'use client'

import { useEffect, useState } from 'react'

export default function ProgressionBar() {
  const [width, setWidth] = useState(0)
  const [count, setCount] = useState(5)

  useEffect(() => {
    // Déclencher l'animation après un court délai
    const timer = setTimeout(() => {
      setWidth(75)
    }, 100)

    // Animation du compteur de 5 à 15 sur 2.5 secondes
    const duration = 2500
    const steps = 10 // 5 → 15
    const stepDuration = duration / steps
    let currentStep = 0

    const counterInterval = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(5 + currentStep)
      } else {
        clearInterval(counterInterval)
      }
    }, stepDuration)

    return () => {
      clearTimeout(timer)
      clearInterval(counterInterval)
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto mb-16 px-4">
      <div className="relative">
        {/* Ligne de fond */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          {/* Ligne qui se remplit avec gradient */}
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-[2500ms] ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>

        {/* Flèche à la fin */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2">
          <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </div>
      </div>

      {/* Labels avec compteur */}
      <div className="flex justify-between items-center mt-4 px-2">
        <div className="text-sm text-gray-400 font-medium">
          <span className="text-purple-400 font-bold text-lg">{count}</span> employés
        </div>
        <div className="text-sm text-purple-400 font-medium tracking-wide uppercase">
          Croissance continue
        </div>
      </div>
    </div>
  )
}
