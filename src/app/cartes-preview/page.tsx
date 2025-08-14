'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CartesPreviewPage() {
  const [selectedVersion, setSelectedVersion] = useState<'soft' | 'fallout' | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Preview des Cartes Contact
          </h1>
          <p className="text-xl text-gray-300">
            Choisissez votre version préférée
          </p>
        </motion.div>

        {/* Version Buttons */}
        <div className="flex justify-center gap-8 mb-16">
          <motion.button
            onClick={() => setSelectedVersion('soft')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              selectedVersion === 'soft' 
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Version SOFT
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedVersion('fallout')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              selectedVersion === 'fallout' 
                ? 'bg-green-500 text-black shadow-lg shadow-green-500/50' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Version FALLOUT 4
          </motion.button>
        </div>

        {/* Cards Preview */}
        {selectedVersion && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {selectedVersion === 'soft' ? (
              <>
                {/* SOFT Version - Carte 1: WhatsApp */}
                <motion.div
                  className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-400/40 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-500 cursor-pointer group min-h-[350px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => window.open('https://wa.me/41791289549', '_blank')}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    {/* WhatsApp Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-white mb-4">
                      Contact WhatsApp Direct
                    </h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      Échangez directement avec nous sur WhatsApp pour une réponse rapide et personnalisée.
                    </p>
                    
                    <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                      <p className="text-green-400 font-mono text-lg">
                        +41 79 128 95 49
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-green-400 font-semibold text-sm tracking-wide uppercase">
                      Ouvrir WhatsApp
                    </div>
                  </div>
                </motion.div>

                {/* SOFT Version - Carte 2: Kit */}
                <motion.div
                  className="bg-cyan-400/5 border border-cyan-400/30 rounded-2xl p-8 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group min-h-[350px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-white mb-4">
                      Kit de Contact
                    </h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      Documents et ressources pour préparer efficacement notre rencontre stratégique.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase">
                      Recevoir mon kit
                    </div>
                  </div>
                </motion.div>

                {/* SOFT Version - Carte 3: Questionnaire */}
                <motion.div
                  className="bg-purple-400/5 border border-purple-400/30 rounded-2xl p-8 hover:bg-purple-400/10 hover:border-purple-400/50 transition-all duration-500 cursor-pointer group min-h-[350px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-white mb-4">
                      Diagnostic Automatique
                    </h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      Outil IA pour analyser vos besoins digitaux en quelques minutes seulement.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold text-sm tracking-wide uppercase">
                      Démarrer le diagnostic
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* FALLOUT Version - Carte 1: WhatsApp */}
                <motion.div
                  className="relative bg-black border-2 border-green-500/60 rounded-none p-6 hover:border-green-400 transition-all duration-300 cursor-pointer group min-h-[350px] flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #001a00 0%, #003300 50%, #001a00 100%)',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 20px rgba(0, 255, 0, 0.1)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.open('https://wa.me/41791289549', '_blank')}
                >
                  {/* Terminal Header */}
                  <div className="absolute top-0 left-0 right-0 bg-green-500/20 border-b border-green-500/50 p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-mono">WHATSAPP_PROTOCOL_ACTIVE</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center mt-8">
                    {/* Retro WhatsApp Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 border-2 border-green-500 rounded-none bg-green-500/20 flex items-center justify-center relative">
                        <div className="text-green-400 font-mono text-xl">W</div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 animate-ping"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-mono text-green-400 mb-4 tracking-wider">
                      {'>>> '} DIRECT_COMM_CHANNEL
                    </h3>
                    
                    <div className="bg-black/50 border border-green-500/30 p-4 mb-4 font-mono text-xs text-green-300">
                      <div className="mb-2">{'> '} PROTOCOL: WHATSAPP</div>
                      <div className="mb-2">{'> '} ENCRYPTION: END_TO_END</div>
                      <div>{'> '} RESPONSE_TIME: IMMEDIATE</div>
                    </div>
                    
                    <div className="bg-green-500/20 border border-green-500/50 p-3 mb-4 font-mono">
                      <p className="text-green-400 text-lg">
                        +41.79.128.95.49
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-green-500/30 pt-4">
                    <div className="text-green-400 font-mono text-sm tracking-wider">
                      [INITIATE_CONTACT]
                    </div>
                  </div>
                  
                  {/* Matrix Rain Effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-10">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-green-500 text-xs font-mono"
                        style={{
                          left: `${i * 12}%`,
                          top: '-10px',
                        }}
                        animate={{
                          y: ['0px', '400px'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: 'linear',
                        }}
                      >
                        10110101
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* FALLOUT Version - Carte 2: Kit */}
                <motion.div
                  className="relative bg-black border-2 border-cyan-500/60 rounded-none p-6 hover:border-cyan-400 transition-all duration-300 cursor-pointer group min-h-[350px] flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #001f3f 0%, #0074cc 50%, #001f3f 100%)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-0 left-0 right-0 bg-cyan-500/20 border-b border-cyan-500/50 p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                      <span className="text-cyan-400 text-xs font-mono">RESOURCE_KIT_AVAILABLE</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center mt-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 border-2 border-cyan-500 rounded-none bg-cyan-500/20 flex items-center justify-center">
                        <div className="text-cyan-400 font-mono text-xl">K</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-mono text-cyan-400 mb-4 tracking-wider">
                      {'>>> '} RESOURCE_PACKAGE
                    </h3>
                    
                    <div className="bg-black/50 border border-cyan-500/30 p-4 mb-4 font-mono text-xs text-cyan-300">
                      <div className="mb-2">{'> '} DOCUMENTS: STRATEGIC</div>
                      <div className="mb-2">{'> '} FORMAT: DIGITAL_PKG</div>
                      <div>{'> '} ACCESS: IMMEDIATE</div>
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-cyan-500/30 pt-4">
                    <div className="text-cyan-400 font-mono text-sm tracking-wider">
                      [DOWNLOAD_KIT]
                    </div>
                  </div>
                </motion.div>

                {/* FALLOUT Version - Carte 3: Questionnaire */}
                <motion.div
                  className="relative bg-black border-2 border-purple-500/60 rounded-none p-6 hover:border-purple-400 transition-all duration-300 cursor-pointer group min-h-[350px] flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #2d1b69 0%, #7b2cbf 50%, #2d1b69 100%)',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-0 left-0 right-0 bg-purple-500/20 border-b border-purple-500/50 p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-purple-400 text-xs font-mono">AI_DIAGNOSTIC_READY</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center mt-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 border-2 border-purple-500 rounded-none bg-purple-500/20 flex items-center justify-center">
                        <div className="text-purple-400 font-mono text-xl">AI</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-mono text-purple-400 mb-4 tracking-wider">
                      {'>>> '} AUTO_DIAGNOSTIC
                    </h3>
                    
                    <div className="bg-black/50 border border-purple-500/30 p-4 mb-4 font-mono text-xs text-purple-300">
                      <div className="mb-2">{'> '} ENGINE: NEURAL_AI</div>
                      <div className="mb-2">{'> '} ANALYSIS: DEEP_SCAN</div>
                      <div>{'> '} TIME_REQ: 5_MINUTES</div>
                    </div>
                  </div>
                  
                  <div className="text-center border-t border-purple-500/30 pt-4">
                    <div className="text-purple-400 font-mono text-sm tracking-wider">
                      [START_SCAN]
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        )}

        {/* Action Buttons */}
        {selectedVersion && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-center gap-6">
              <motion.button
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log(`Version sélectionnée: ${selectedVersion}`)
                  alert(`Vous avez choisi la version ${selectedVersion.toUpperCase()}`)
                }}
              >
                Valider cette version
              </motion.button>
              
              <motion.button
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVersion(null)}
              >
                Comparer les deux
              </motion.button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}