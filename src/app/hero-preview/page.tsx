'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

export default function HeroPreviewPage() {
  const [animatedText1, setAnimatedText1] = useState('')
  const [animatedText2, setAnimatedText2] = useState('')
  const [currentPhase1, setCurrentPhase1] = useState(0)
  const [currentPhase2, setCurrentPhase2] = useState(0)
  
  const textPhases = [
    "Nous travaillons dans l'ombre",
    "Nous travaillons dans l'ombre pour vous faire briller"
  ]
  
  // Animation VERSION 1 - Progressive
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimatedText1(textPhases[0])
      setCurrentPhase1(1)
    }, 1000)
    
    const timer2 = setTimeout(() => {
      setAnimatedText1(textPhases[1])
      setCurrentPhase1(2)
    }, 3000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Animation VERSION 2 - Typewriter
  useEffect(() => {
    const fullText = "Nous travaillons dans l'ombre pour vous faire briller"
    let currentIndex = 0
    
    const typeWriter = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText2(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeWriter)
      }
    }, 100)
    
    return () => clearInterval(typeWriter)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      
      {/* HEADER DE NAVIGATION */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">PREVIEW HERO VERSIONS</h1>
          <Link href="/services" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Retour aux Services
          </Link>
        </div>
      </header>

      {/* VERSION 1 - ANIMATION PROGRESSIVE */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden border-b-4 border-yellow-400">
        {/* Badge VERSION 1 */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-lg">
            VERSION 1 - ANIMATION PROGRESSIVE
          </div>
        </div>

        {/* Background gradients animés */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-green-400/10"></div>
          
          {/* Particules d'ombre flottantes */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gray-800/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-yellow-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Badge premium */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full mb-8 border border-yellow-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-bold text-sm tracking-wide">GROWTH MARKETING INTENSIF</span>
          </div>
          
          {/* Titre principal avec animation */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-white leading-tight mb-4">
              Accélérez votre <br/>
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent font-bold">
                croissance
              </span>
            </h1>
            
            {/* Slogan animé */}
            <div className="h-16 flex items-center justify-center">
              <p className={`text-2xl md:text-3xl text-gray-300 transition-all duration-1000 ${
                animatedText1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {animatedText1.split(' ').map((word, index) => (
                  <span 
                    key={index}
                    className={`inline-block mr-2 transition-all duration-500 ${
                      word === 'briller' ? 'text-yellow-400 animate-pulse' : ''
                    } ${
                      word === "l'ombre" ? 'text-gray-500' : ''
                    }`}
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Métriques impressionnantes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "15K+", label: "CHF budget/jour", color: "yellow" },
              { value: "3.2x", label: "ROAS moyen", color: "green" },
              { value: "48h", label: "Time to market", color: "blue" },
              { value: "98%", label: "Client retention", color: "purple" }
            ].map((metric, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl border transition-all duration-500 hover:scale-105 bg-gradient-to-br ${
                  metric.color === 'yellow' ? 'from-yellow-400/10 to-yellow-600/5 border-yellow-400/20 hover:border-yellow-400/40' :
                  metric.color === 'green' ? 'from-green-400/10 to-green-600/5 border-green-400/20 hover:border-green-400/40' :
                  metric.color === 'blue' ? 'from-blue-400/10 to-blue-600/5 border-blue-400/20 hover:border-blue-400/40' :
                  'from-purple-400/10 to-purple-600/5 border-purple-400/20 hover:border-purple-400/40'
                }`}
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className={`text-4xl font-bold mb-2 ${
                  metric.color === 'yellow' ? 'text-yellow-400' :
                  metric.color === 'green' ? 'text-green-400' :
                  metric.color === 'blue' ? 'text-blue-400' :
                  'text-purple-400'
                }`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERSION 2 - TYPEWRITER + SPOTLIGHT */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        {/* Badge VERSION 2 */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-green-400 text-black px-6 py-2 rounded-full font-bold text-lg">
            VERSION 2 - TYPEWRITER + SPOTLIGHT
          </div>
        </div>

        {/* Background noir avec spots lumineux animés */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Spots lumineux qui bougent */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-400/20 via-yellow-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-green-400/15 via-green-400/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-radial from-purple-400/10 via-purple-400/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Badge avec pulsation */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl rounded-full mb-12 border border-yellow-400/40">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-ping"></div>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">STRATÉGIE GROWTH INTENSIVE</span>
          </div>
          
          {/* Titre principal avec effet de gradient */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-extralight text-white leading-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                METTRE LE
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-400 bg-clip-text text-transparent font-bold animate-pulse">
                PAQUET
              </span>
            </h1>
            
            {/* Slogan avec effet typewriter */}
            <div className="h-20 flex items-center justify-center">
              <div className="relative">
                <p className="text-3xl md:text-4xl text-gray-300 font-light">
                  {animatedText2.split('').map((char, index) => (
                    <span 
                      key={index}
                      className={`inline transition-all duration-300 ${
                        char === ' ' ? 'w-2' : ''
                      } ${
                        animatedText2.includes('briller') && index >= animatedText2.indexOf('briller') ? 
                        'text-yellow-400 drop-shadow-lg' : 'text-gray-300'
                      } ${
                        animatedText2.includes("l'ombre") && index >= animatedText2.indexOf("l'ombre") && index < animatedText2.indexOf("l'ombre") + 6 ? 
                        'text-gray-600' : ''
                      }`}
                      style={{
                        textShadow: animatedText2.includes('briller') && index >= animatedText2.indexOf('briller') ? 
                          '0 0 20px rgba(250, 204, 21, 0.5)' : 'none'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
                
                {/* Curseur clignotant */}
                <span className="absolute -right-1 top-0 w-1 h-12 bg-yellow-400 animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Métriques avec effet de brillance */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "20K+", label: "CHF déployés/jour", color: "yellow", icon: "💰" },
              { value: "4.2x", label: "ROAS garanti", color: "green", icon: "📈" },
              { value: "24h", label: "Time to launch", color: "blue", icon: "⚡" },
              { value: "100%", label: "Satisfaction", color: "purple", icon: "🎯" }
            ].map((metric, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl border transition-all duration-700 hover:scale-110 bg-gradient-to-br overflow-hidden ${
                  metric.color === 'yellow' ? 'from-yellow-400/10 to-yellow-600/5 border-yellow-400/30 hover:border-yellow-400/60' :
                  metric.color === 'green' ? 'from-green-400/10 to-green-600/5 border-green-400/30 hover:border-green-400/60' :
                  metric.color === 'blue' ? 'from-blue-400/10 to-blue-600/5 border-blue-400/30 hover:border-blue-400/60' :
                  'from-purple-400/10 to-purple-600/5 border-purple-400/30 hover:border-purple-400/60'
                }`}
                style={{animationDelay: `${index * 300}ms`}}
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <div className={`text-5xl font-bold mb-3 ${
                    metric.color === 'yellow' ? 'text-yellow-400' :
                    metric.color === 'green' ? 'text-green-400' :
                    metric.color === 'blue' ? 'text-blue-400' :
                    'text-purple-400'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-400 font-medium">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOUTONS DE CHOIX */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Quelle version préférez-vous ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/60 rounded-2xl p-6 border border-yellow-400/40">
              <h3 className="text-yellow-400 font-bold text-xl mb-4">VERSION 1</h3>
              <p className="text-gray-300 mb-4">Animation progressive élégante, style business sophistiqué</p>
              <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-colors">
                Choisir Version 1
              </button>
            </div>
            
            <div className="bg-black/60 rounded-2xl p-6 border border-green-400/40">
              <h3 className="text-green-400 font-bold text-xl mb-4">VERSION 2</h3>
              <p className="text-gray-300 mb-4">Effet typewriter dynamique, style tech moderne</p>
              <button className="w-full py-3 bg-green-400 text-black font-bold rounded-xl hover:bg-green-300 transition-colors">
                Choisir Version 2
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}