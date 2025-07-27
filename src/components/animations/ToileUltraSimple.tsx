'use client'

import { useEffect, useState } from 'react'

const ToileUltraSimple = () => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500)   // Points
    const timer2 = setTimeout(() => setStep(2), 1500)  // Lignes
    const timer3 = setTimeout(() => setStep(3), 2500)  // Particule
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="w-full h-96 bg-black relative rounded-lg border border-yellow-400/30">
      
      {/* Point 1 */}
      <div 
        className={`absolute w-4 h-4 bg-yellow-400 rounded-full transition-all duration-700 ${
          step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ 
          left: '20%', 
          top: '30%', 
          transform: 'translate(-50%, -50%)',
          boxShadow: step >= 1 ? '0 0 20px rgba(255, 221, 0, 0.8)' : 'none'
        }}
      />

      {/* Point 2 */}
      <div 
        className={`absolute w-4 h-4 bg-yellow-400 rounded-full transition-all duration-700 ${
          step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ 
          left: '50%', 
          top: '40%', 
          transform: 'translate(-50%, -50%)',
          boxShadow: step >= 1 ? '0 0 20px rgba(255, 221, 0, 0.8)' : 'none',
          transitionDelay: '200ms'
        }}
      />

      {/* Point 3 */}
      <div 
        className={`absolute w-4 h-4 bg-yellow-400 rounded-full transition-all duration-700 ${
          step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ 
          left: '80%', 
          top: '50%', 
          transform: 'translate(-50%, -50%)',
          boxShadow: step >= 1 ? '0 0 20px rgba(255, 221, 0, 0.8)' : 'none',
          transitionDelay: '400ms'
        }}
      />

      {/* Ligne 1-2 avec div */}
      <div
        className={`absolute bg-yellow-400 transition-all duration-1000 ${
          step >= 2 ? 'w-60 opacity-100' : 'w-0 opacity-0'
        }`}
        style={{
          height: '2px',
          left: '20%',
          top: '30%',
          transformOrigin: 'left center',
          transform: 'rotate(5deg)',
          boxShadow: '0 0 10px rgba(255, 221, 0, 0.6)',
          transitionDelay: '0ms'
        }}
      />

      {/* Ligne 2-3 avec div */}
      <div
        className={`absolute bg-yellow-400 transition-all duration-1000 ${
          step >= 2 ? 'w-52 opacity-100' : 'w-0 opacity-0'
        }`}
        style={{
          height: '2px',
          left: '50%',
          top: '40%',
          transformOrigin: 'left center',
          transform: 'rotate(8deg)',
          boxShadow: '0 0 10px rgba(255, 221, 0, 0.6)',
          transitionDelay: '300ms'
        }}
      />

      {/* Ligne 1-3 avec div */}
      <div
        className={`absolute bg-yellow-400 transition-all duration-1000 ${
          step >= 2 ? 'w-80 opacity-100' : 'w-0 opacity-0'
        }`}
        style={{
          height: '2px',
          left: '20%',
          top: '35%',
          transformOrigin: 'left center',
          transform: 'rotate(12deg)',
          boxShadow: '0 0 10px rgba(255, 221, 0, 0.6)',
          transitionDelay: '600ms'
        }}
      />

      {/* Labels */}
      <div 
        className={`absolute text-yellow-400 text-sm font-bold bg-black px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ left: '10%', top: '20%' }}
      >
        Sites Web 11.3%
      </div>

      <div 
        className={`absolute text-yellow-400 text-sm font-bold bg-black px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ left: '45%', top: '25%', transitionDelay: '200ms' }}
      >
        SEO +54%
      </div>

      <div 
        className={`absolute text-yellow-400 text-sm font-bold bg-black px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ left: '75%', top: '35%', transitionDelay: '400ms' }}
      >
        Marketing 14x
      </div>

      {/* Particule animée simple */}
      {step >= 3 && (
        <div 
          className="absolute w-3 h-3 bg-yellow-400 rounded-full"
          style={{
            left: '20%',
            top: '30%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px rgba(255, 221, 0, 1)',
            animation: 'bounce 2s infinite'
          }}
        />
      )}

      {/* Message de réussite */}
      {step >= 3 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-green-400 font-bold text-lg">
          ✅ Animation Toile Active !
        </div>
      )}

    </div>
  )
}

export default ToileUltraSimple