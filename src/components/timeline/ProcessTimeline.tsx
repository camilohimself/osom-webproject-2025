'use client'

import { useEffect, useRef, useState } from 'react'

interface ProcessTimelineProps {
  steps: {
    number: number;
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
  }[]
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = parseInt(entry.target.getAttribute('data-step') || '0')
            setVisibleSteps(prev => new Set([...prev, stepNumber]))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
      }
    )

    // Observer chaque étape individuellement avec un délai
    const timer = setTimeout(() => {
      const stepElements = timelineRef.current?.querySelectorAll('.timeline-step-vertical')
      stepElements?.forEach(step => observer.observe(step))
    }, 200)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
      {/* Ligne verticale de timeline */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300">
        <div 
          className="w-full bg-osom-yellow transition-all duration-2000 ease-out"
          style={{ 
            height: visibleSteps.size > 0 ? `${(visibleSteps.size / steps.length) * 100}%` : '0%'
          }}
        ></div>
      </div>
      
      {/* Étapes verticales */}
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className={`timeline-step-vertical flex items-center transition-all duration-700 ease-out ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } opacity-100 translate-y-0`}
            data-step={step.number}
          >
            {/* Contenu à gauche/droite */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} ml-20 md:ml-0`}>
              <div className={`bg-white p-8 rounded-xl shadow-lg border-2 transition-all duration-500 ${
                visibleSteps.has(step.number) 
                  ? 'border-osom-yellow transform scale-100 opacity-100' 
                  : 'border-gray-100 transform scale-95 opacity-70'
              }`}>
                <h3 className="text-2xl font-bold mb-4 text-osom-black">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
            
            {/* Cercle central */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
              <div className="relative group">
                <div className={`w-16 h-16 ${step.bgColor} ${step.textColor} rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110 border-4 border-white shadow-lg ${
                  visibleSteps.has(step.number) ? 'animate-bounce-in scale-110' : 'scale-100'
                }`}>
                  {step.number}
                </div>
                {visibleSteps.has(step.number) && (
                  <div className={`absolute inset-0 ${step.bgColor} rounded-full opacity-30 animate-ping`}></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}