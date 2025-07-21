'use client'

import { useEffect, useState } from 'react'

const ToileSimple = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Animation séquentielle
    const timeouts = [
      setTimeout(() => setStep(1), 500),   // Points apparaissent
      setTimeout(() => setStep(2), 1500),  // Lignes apparaissent
      setTimeout(() => setStep(3), 2500),  // Particule commence
    ]

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="w-full h-96 bg-black relative rounded-lg border border-yellow-400/30 overflow-hidden">
      
      {/* Points de connexion */}
      <div 
        className={`absolute w-4 h-4 bg-yellow-400 rounded-full transition-all duration-700 ${
          step >= 1 ? 'scale-100 opacity-100 shadow-lg shadow-yellow-400/50' : 'scale-0 opacity-0'
        }`}
        style={{ left: '20%', top: '30%', transform: 'translate(-50%, -50%)' }}
      >
        {step >= 1 && (
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
        )}
      </div>

      <div 
        className={`absolute w-4 h-4 bg-yellow-400 rounded-full transition-all duration-700 delay-200 ${
          step >= 1 ? 'scale-100 opacity-100 shadow-lg shadow-yellow-400/50' : 'scale-0 opacity-0'
        }`}
        style={{ left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}
      >
        {step >= 1 && (
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-40 delay-200"></div>
        )}
      </div>

      <div 
        className={`absolute w-4 h-4 bg-yellow-400 rounded-full transition-all duration-700 delay-400 ${
          step >= 1 ? 'scale-100 opacity-100 shadow-lg shadow-yellow-400/50' : 'scale-0 opacity-0'
        }`}
        style={{ left: '80%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        {step >= 1 && (
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-40 delay-400"></div>
        )}
      </div>

      {/* Lignes de connexion avec SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Ligne 1-2 */}
        <line
          x1="20%" y1="30%" x2="50%" y2="40%"
          stroke="#FFDD00"
          strokeWidth="2"
          className={`transition-all duration-1000 ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255, 221, 0, 0.6))',
            strokeDasharray: step >= 2 ? '0' : '100',
            strokeDashoffset: step >= 2 ? '0' : '100',
            transition: 'stroke-dashoffset 1s ease-in-out, opacity 0.5s'
          }}
        />
        
        {/* Ligne 2-3 */}
        <line
          x1="50%" y1="40%" x2="80%" y2="50%"
          stroke="#FFDD00"
          strokeWidth="2"
          className={`transition-all duration-1000 delay-300 ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255, 221, 0, 0.6))',
            strokeDasharray: step >= 2 ? '0' : '100',
            strokeDashoffset: step >= 2 ? '0' : '100',
            transition: 'stroke-dashoffset 1s ease-in-out 0.3s, opacity 0.5s 0.3s'
          }}
        />
        
        {/* Ligne 1-3 */}
        <line
          x1="20%" y1="30%" x2="80%" y2="50%"
          stroke="#FFDD00"
          strokeWidth="2"
          className={`transition-all duration-1000 delay-600 ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255, 221, 0, 0.6))',
            strokeDasharray: step >= 2 ? '0' : '100',
            strokeDashoffset: step >= 2 ? '0' : '100',
            transition: 'stroke-dashoffset 1s ease-in-out 0.6s, opacity 0.5s 0.6s'
          }}
        />
      </svg>

      {/* Labels KPI */}
      <div 
        className={`absolute text-yellow-400 text-sm font-bold bg-black/80 px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ left: '15%', top: '20%' }}
      >
        Sites Web 11.3%
      </div>
      <div 
        className={`absolute text-yellow-400 text-sm font-bold bg-black/80 px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 delay-200 ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ left: '45%', top: '25%' }}
      >
        SEO +54%
      </div>
      <div 
        className={`absolute text-yellow-400 text-sm font-bold bg-black/80 px-2 py-1 rounded border border-yellow-400/50 transition-all duration-500 delay-400 ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ left: '75%', top: '35%' }}
      >
        Marketing 140x
      </div>

      {/* Particule de données animée */}
      {step >= 3 && (
        <div 
          className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/80 animate-pulse"
          style={{
            left: '20%',
            top: '30%',
            transform: 'translate(-50%, -50%)',
            animation: 'particleFlow 4s ease-in-out infinite'
          }}
        />
      )}

      {/* CSS personnalisé pour l'animation de particule */}
      <style jsx global>{`
        @keyframes particleFlow {
          0% { 
            left: 20%; 
            top: 30%; 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          25% { 
            left: 35%; 
            top: 35%; 
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
          50% { 
            left: 50%; 
            top: 40%; 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          75% { 
            left: 65%; 
            top: 45%; 
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% { 
            left: 80%; 
            top: 50%; 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>

      {/* Effet de grille subtile pour l'ambiance Assassin's Creed */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 221, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 221, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

    </div>
  )
}

export default ToileSimple