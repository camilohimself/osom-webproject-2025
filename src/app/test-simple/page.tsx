'use client'

import { useEffect, useState } from 'react'

export default function TestSimplePage() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500)   
    const timer2 = setTimeout(() => setStep(2), 1500)  
    const timer3 = setTimeout(() => setStep(3), 2500)  
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          🕸️ Test Animation Toile - Style Assassin's Creed
        </h1>

        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-green-400">✅ Test Ultra Simple</h2>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-500 transition-colors"
            >
              🔄 Relancer
            </button>
          </div>

          {/* Zone d'animation */}
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

            {/* Ligne 1-2 */}
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
                boxShadow: '0 0 10px rgba(255, 221, 0, 0.6)'
              }}
            />

            {/* Ligne 2-3 */}
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

            {/* Ligne 1-3 */}
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

            {/* Labels KPI */}
            <div 
              className={`absolute text-yellow-400 text-sm font-bold bg-black px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
                step >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ left: '10%', top: '20%' }}
            >
              Sites Web 11.3%
            </div>

            <div 
              className={`absolute text-yellow-400 text-sm font-bold bg-black px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
                step >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ left: '45%', top: '25%', transitionDelay: '200ms' }}
            >
              SEO +54%
            </div>

            <div 
              className={`absolute text-yellow-400 text-sm font-bold bg-black px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
                step >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ left: '75%', top: '35%', transitionDelay: '400ms' }}
            >
              Marketing 140x
            </div>

            {/* Particule */}
            {step >= 3 && (
              <div 
                className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
                style={{
                  left: '20%',
                  top: '30%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 15px rgba(255, 221, 0, 1)'
                }}
              />
            )}

            {/* Message de succès */}
            {step >= 3 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-green-400 font-bold text-xl animate-pulse">
                ✅ TOILE ANIMATION FONCTIONNE !
              </div>
            )}

          </div>
        </div>

        {/* Statut */}
        <div className="text-center">
          <div className="text-yellow-400 text-lg mb-4">
            Étape actuelle: <span className="font-bold">{step}/3</span>
          </div>
          <div className="text-gray-400">
            {step === 0 && "🔄 Démarrage..."}
            {step === 1 && "🎯 Points activés !"}
            {step === 2 && "🕸️ Lignes tissées !"}
            {step === 3 && "🚀 Animation complète !"}
          </div>
        </div>

      </div>
    </div>
  )
}