'use client'

import { motion } from 'framer-motion'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export default function ProgrammationIAPage() {
  // Custom Hero Section - Collaboration Humain x Claude Code
  const CustomHeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Liquid Chrome Background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(255,221,0,0.2) 0%, rgba(138,92,246,0.15) 25%, transparent 70%)',
              'radial-gradient(circle at 70% 60%, rgba(138,92,246,0.2) 0%, rgba(255,221,0,0.15) 25%, transparent 70%)',
              'radial-gradient(circle at 30% 40%, rgba(255,221,0,0.2) 0%, rgba(138,92,246,0.15) 25%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Binary Code Rain */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/20 text-xs font-mono whitespace-nowrap"
              style={{
                left: `${(i * 6.67)}%`,
                top: 0,
                transform: 'rotate(-90deg)',
                transformOrigin: 'left top',
              }}
              animate={{
                y: ['-10%', '110%'],
                opacity: [0, 0.3, 0.8, 0.3, 0],
              }}
              transition={{
                duration: 15 + (i * 2),
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'linear',
              }}
            >
              {Array.from({ length: 200 }, () => {
                const rand = Math.random()
                if (rand > 0.95) return 'CLAUDE '
                if (rand > 0.9) return 'CODE '
                if (rand > 0.85) return 'REACT '
                if (rand > 0.8) return 'PYTHON '
                return Math.random() > 0.5 ? '1' : '0'
              }).join('')}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title - Collaboration Story */}
        <div className="text-center mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Super title avec cascade */}
            <div className="flex flex-col items-center space-y-6">
              <motion.div 
                className="text-lg text-gray-400 font-mono tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                La première collaboration officielle entre
              </motion.div>
              
              {/* Human + IA Typography Cascade FOLLE */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                <motion.div 
                  className="text-4xl lg:text-6xl font-light text-cyan-400"
                  initial={{ opacity: 0, x: -100, rotate: -15 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    rotate: 0,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.5 },
                    x: { duration: 1, delay: 0.5, type: 'spring', stiffness: 100 },
                    rotate: { duration: 1, delay: 0.5 },
                    scale: { 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: 'easeInOut',
                      delay: 2
                    }
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.5))'
                  }}
                >
                  développeur
                </motion.div>
                
                <motion.div 
                  className="text-3xl lg:text-4xl text-white font-mono"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.8 },
                    scale: { duration: 0.8, delay: 0.8, type: 'spring', stiffness: 150 },
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 3
                    }
                  }}
                >
                  ×
                </motion.div>
                
                <motion.div 
                  className="text-5xl lg:text-8xl font-black text-yellow-400"
                  initial={{ opacity: 0, x: 100, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1 },
                    x: { duration: 1.2, delay: 1, type: 'spring', stiffness: 80 },
                    scale: { duration: 1.2, delay: 1, type: 'spring', stiffness: 120 },
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1.5
                    }
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #FFDD00 0%, #ffffff 30%, #8B5CF6 70%, #FFDD00 100%)',
                    backgroundSize: '400% 400%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(255,221,0,0.7))',
                  }}
                >
                  claude
                </motion.div>
              </div>
              
              <motion.div 
                className="text-4xl lg:text-5xl text-purple-400 font-bold mt-4"
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 1.4 },
                  y: { duration: 1, delay: 1.4, type: 'spring', stiffness: 100 },
                  scale: { duration: 1, delay: 1.4, type: 'spring', stiffness: 150, damping: 8 },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4
                  }
                }}
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(139,92,246,0.6))'
                }}
              >
                code
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Premier développeur-créatif épaulé par l'IA la plus puissante au monde. 
            <span className="text-yellow-400 font-semibold"> Marketing humain</span> × 
            <span className="text-purple-400 font-semibold"> Puissance artificielle</span> = 
            <span className="text-cyan-400 font-bold"> Résultats extraordinaires</span>
          </motion.div>
        </div>

        {/* Split Screen Collaboration Visual */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Human Developer */}
          <motion.div 
            className="bg-gradient-to-br from-cyan-400/10 to-blue-600/20 rounded-3xl p-8 border border-cyan-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                👨‍💻 Développeur Humain
              </div>
              <div className="text-gray-300">Créativité • Intuition • Vision</div>
            </div>
            
            {/* Code Editor Mock */}
            <motion.div 
              className="bg-black/60 rounded-xl p-4 font-mono text-sm border border-cyan-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
            >
              <div className="text-cyan-400 mb-2"># Culture Peinture - Vision Créative</div>
              <div className="text-gray-400">def create_viral_strategy():</div>
              <div className="text-white ml-4">emotion = "authentique"</div>
              <div className="text-white ml-4">hook = "irrésistible"</div>
              <div className="text-yellow-400 ml-4">return inspiration_humaine() 🎨</div>
            </motion.div>
            
            <div className="mt-6 space-y-3">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.2, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Idées créatives originales</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.4, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Empathie utilisateur</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.6, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Vision artistique</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Claude Code */}
          <motion.div 
            className="bg-gradient-to-br from-yellow-400/10 to-purple-600/20 rounded-3xl p-8 border border-yellow-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                🤖 Claude Code
              </div>
              <div className="text-gray-300">Puissance • Précision • Performance</div>
            </div>
            
            {/* AI Analysis Mock */}
            <motion.div 
              className="bg-black/60 rounded-xl p-4 font-mono text-sm border border-yellow-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <div className="text-yellow-400 mb-2"># Claude-Powered Analytics</div>
              <div className="text-gray-400">claude_analysis = &#123;</div>
              <div className="text-white ml-4">"performance": "140x superior",</div>
              <div className="text-white ml-4">"conversions": "688 tracked",</div>
              <div className="text-purple-400 ml-4">"viral_potential": "2.4M views" 🚀</div>
              <div className="text-gray-400">&#125;</div>
            </motion.div>
            
            <div className="mt-6 space-y-3">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.2, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Optimisation technique</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.4, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Analyse de données</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.6, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Scaling intelligent</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Fusion Result - Culture Peinture Metrics */}
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-gradient-to-r from-cyan-400/20 via-yellow-400/20 to-purple-400/20 rounded-full border border-white/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 0.8, type: 'spring', stiffness: 150 }}
          >
            <span className="text-cyan-400 text-xl">👨‍💻</span>
            <span className="text-white font-mono">+</span>
            <span className="text-yellow-400 text-xl">🤖</span>
            <span className="text-white font-mono">=</span>
            <span className="text-purple-400 text-xl">🚀</span>
            <span className="text-white font-semibold">Résultats Extraordinaires</span>
          </motion.div>
        </div>

        {/* Metrics Grid - Culture Peinture Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 text-center border border-yellow-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3.2, duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <motion.div 
              className="text-5xl font-black text-yellow-400 mb-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 3.5, 
                duration: 1, 
                type: 'spring', 
                stiffness: 200,
                damping: 8 
              }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255,221,0,0.8))',
              }}
            >
              2.4M
            </motion.div>
            <div className="text-white font-semibold mb-2">Vues Virales</div>
            <div className="text-gray-400 text-sm">Créativité humaine × Optimisation IA</div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl p-8 text-center border border-purple-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3.4, duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <motion.div 
              className="text-5xl font-black text-purple-400 mb-3"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 3.7, 
                duration: 1, 
                type: 'spring', 
                stiffness: 200,
                damping: 8 
              }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.8))',
              }}
            >
              140×
            </motion.div>
            <div className="text-white font-semibold mb-2">Performance</div>
            <div className="text-gray-400 text-sm">vs Publicité payante traditionnelle</div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl p-8 text-center border border-cyan-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3.6, duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <motion.div 
              className="text-5xl font-black text-cyan-400 mb-3"
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                delay: 3.9, 
                duration: 1, 
                type: 'spring', 
                stiffness: 200,
                damping: 8 
              }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.8))',
              }}
            >
              688
            </motion.div>
            <div className="text-white font-semibold mb-2">Conversions</div>
            <div className="text-gray-400 text-sm">Dashboard tracking intelligent</div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button 
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 text-black font-bold text-xl rounded-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255,221,0,0.4)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🤝</span>
            <span>Collaborer avec nous</span>
            <span>🚀</span>
          </motion.button>
        </div>
      </div>
    </section>
  )

  const proofContent = (
    <div className="space-y-8">
      {/* Culture Peinture Case Study Hero */}
      <motion.div 
        className="bg-gradient-to-br from-yellow-400/10 to-purple-600/20 rounded-3xl p-8 border border-yellow-400/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Culture Peinture : La Preuve de la Collaboration
          </h3>
          <p className="text-xl text-gray-300">
            Développeur Humain × Claude Code = Performance ROI Extraordinaire
          </p>
        </div>
        
        {/* Métriques Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-yellow-400 mb-2">2.4M</div>
            <div className="text-white font-semibold">Vues Virales</div>
            <div className="text-gray-400 text-sm">Créativité humaine + IA</div>
          </motion.div>
          <motion.div 
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-purple-400 mb-2">688</div>
            <div className="text-white font-semibold">Conversions</div>
            <div className="text-gray-400 text-sm">Dashboard Claude tracking</div>
          </motion.div>
          <motion.div 
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-400/20"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-green-400 mb-2">140×</div>
            <div className="text-white font-semibold">ROI Performance</div>
            <div className="text-gray-400 text-sm">vs Publicité traditionnelle</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Dashboard Collaboration Preview */}
      <motion.div 
        className="bg-gradient-to-br from-gray-900/50 to-black/80 rounded-3xl p-6 border border-purple-400/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-purple-400 mb-2">
            Dashboard Développé en Collaboration
          </h4>
          <p className="text-gray-300">
            Vision humaine + Architecture Claude = Intelligence perfecte
          </p>
        </div>
        
        {/* Mock Dashboard Interface */}
        <motion.div 
          className="bg-black/60 rounded-xl p-4 border border-gray-600/30 min-h-96 flex items-center justify-center"
          whileHover={{ 
            borderColor: 'rgba(139, 92, 246, 0.6)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <motion.div 
              className="text-6xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              📊
            </motion.div>
            <div className="text-xl text-yellow-400 font-bold mb-2">
              Dashboard Culture Peinture
            </div>
            <div className="text-gray-400 mb-4">
              7 graphiques interactifs • Données temps réel • Export PDF
            </div>
            <div className="text-sm text-purple-400">
              → Conçu ensemble : Humain + Claude Code
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Performance Collaboration Results */}
      <GraphiqueLinear
        title="Synergie Humain × Claude Code"
        subtitle="Culture Peinture - Marketing Humain amplifié par IA"
        primaryMetric={{
          label: "Collaboration Humain-Claude",
          value: "688 conversions",
          color: "#FFDD00"
        }}
        secondaryMetric={{
          label: "Méthodes Traditionnelles",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Synergie Révolutionnaire",
          value: "140× plus efficace"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* Collaboration Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <MetricsPulse
          value={11.3}
          suffix="%"
          label="Taux Conversion"
          description="Optimisation collaborative"
          color="#FFDD00"
        />
        <MetricsPulse
          value={67.5}
          suffix="s"
          label="Engagement Temps"
          description="Contenu humain-IA optimisé"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={92.2}
          suffix="%"
          label="Engagement Rate"
          description="Audience parfaitement ciblée"
          color="#10B981"
        />
      </div>

      {/* Success Summary */}
      <motion.div 
        className="pt-6 border-t border-gray-700 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="text-2xl font-bold text-yellow-400 mb-2">
          Culture Peinture: Première Collaboration Humain × Claude Code
        </div>
        <div className="text-gray-400 text-sm">
          Marketing humain authentique amplifié par la puissance de l'intelligence artificielle
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="bg-black">
      {/* Custom Hero Section */}
      <CustomHeroSection />
      
      {/* BLOC 2 - DÉMONSTRATION LIVE CODE COLLABORATION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-yellow-400/20 rounded-full text-yellow-400 text-lg font-bold mb-6">
              Live coding session révolutionnaire
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Code Collaboration <span className="font-bold text-yellow-400">Humain × Claude en temps réel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Assistez à la première collaboration de développement entre créatif humain et Claude Code
            </p>
          </div>

          {/* CODE COLLABORATION DASHBOARD */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-yellow-400/20 overflow-hidden mb-12">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM Collaborative Development Studio</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* DÉVELOPPEUR HUMAIN CRÉATIF */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Développeur Humain Créatif</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <span className="text-cyan-400 text-sm">Creative Flow</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 rounded-xl p-4 font-mono text-sm overflow-hidden">
                    <div className="text-cyan-400 mb-2">// Vision créative Culture Peinture</div>
                    <div className="text-green-400 inline">const </div>
                    <div className="text-yellow-400 inline">campagneVirale </div>
                    <div className="text-white inline">= &#123;</div>
                    <div className="ml-4 text-white">emotion: <span className="text-cyan-400">&apos;authenticité&apos;</span>,</div>
                    <div className="ml-4 text-white">hook: <span className="text-cyan-400">&apos;irrésistible&apos;</span>,</div>
                    <div className="ml-4 text-white">storytelling: <span className="text-cyan-400">&apos;captivant&apos;</span>,</div>
                    <div className="ml-4 text-white">target: <span className="text-cyan-400 animate-pulse">&apos;cœur client&apos;</span></div>
                    <div className="text-white">&#125;</div>
                    
                    <div className="mt-4 text-cyan-400">✓ Concept créatif défini</div>
                    <div className="text-cyan-400">✓ Story board émotionnel</div>
                    <div className="text-cyan-400">✓ UX expérience utilisateur</div>
                    <div className="text-cyan-400 animate-pulse">🎨 En attente analyse Claude...</div>
                  </div>
                </div>
                
                {/* CLAUDE CODE OPTIMIZATION */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Claude Code Intelligence</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Potentiel Viral Analysé</span>
                        <span className="text-yellow-400 font-bold text-xl">2.4M vues</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-3000 ease-out" style={{width: '96%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Claude prédiction tendances</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Code Optimization</span>
                        <span className="text-yellow-400 font-bold text-xl">94% efficace</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full transition-all duration-4000 ease-out" style={{width: '94%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Architecture Python optimisée</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Performance Tracking</span>
                        <span className="text-yellow-400 font-bold text-2xl animate-pulse">688</span>
                      </div>
                      <div className="text-xs text-gray-400">Conversions mesurées précisément</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-xl p-4 border border-yellow-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                        <span className="text-white font-semibold">Humain × Claude synchronisés</span>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Collaboration parfaite créativité + IA</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CODE SNIPPETS COLLABORATION */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Code Collaboratif Culture Peinture</h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm">
                  <div className="text-yellow-400 mb-4">// Fusion créativité humaine × optimisation Claude</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-cyan-400 mb-2">/* Concept Humain */</div>
                      <div className="text-green-400">function </div>
                      <div className="text-white inline">createViralContent() &#123;</div>
                      <div className="ml-4 text-gray-300">// Emotion authentique</div>
                      <div className="ml-4 text-gray-300">// Storytelling captivant</div>
                      <div className="ml-4 text-gray-300">// Hook irrésistible</div>
                      <div className="text-white">&#125;</div>
                    </div>
                    
                    <div>
                      <div className="text-purple-400 mb-2">/* Optimisation Claude */</div>
                      <div className="text-green-400">function </div>
                      <div className="text-white inline">optimizePerformance() &#123;</div>
                      <div className="ml-4 text-gray-300">// Prédiction viralité: 2.4M</div>
                      <div className="ml-4 text-gray-300">// Tracking précis: 688</div>
                      <div className="ml-4 text-gray-300">// ROI calculé: 140x</div>
                      <div className="text-white">&#125;</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full border border-yellow-400/30">
                      <span className="text-yellow-400 font-bold">Résultat = 2.4M vues virales documentées</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 - PERFORMANCE CULTURE PEINTURE MESURÉE */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Culture Peinture <span className="font-bold text-yellow-400">Résultats Vérifiés</span>
            </h2>
            <p className="text-xl text-gray-300">
              Première collaboration officielle Humain × Claude Code - Performance mesurée
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Timeline collaboration */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold">J1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Créativité Humaine</span>
                      <span className="text-cyan-400 font-bold">Concept viral défini</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">J2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Analyse Claude</span>
                      <span className="text-purple-400 font-bold">2.4M potentiel prédit</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold">J3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Lancement Collaboratif</span>
                      <span className="text-yellow-400 font-bold">2.4M vues atteintes</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-3000 ease-out" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Résultats Culture Peinture */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-8xl md:text-9xl font-black transition-all duration-2000 text-yellow-400">
                    140x
                  </div>
                  <div className="text-2xl text-white mt-4">
                    Plus Performant
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-yellow-400 font-bold text-2xl">2.4M</div>
                    <div className="text-gray-300">Vues Virales</div>
                  </div>
                  <div className="text-gray-400 text-sm">+</div>
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-purple-400 font-bold text-2xl">688</div>
                    <div className="text-gray-300">Conversions Trackées</div>
                  </div>
                  <div className="text-gray-400 text-sm">=</div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-cyan-400 font-bold text-2xl">140x</div>
                    <div className="text-gray-300">vs Publicité Payante</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-400">
                Données GA4 certifiées • Première collaboration Humain × Claude Code documentée
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">Projets développés en collaboration Humain × Claude</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">DASHBOARDS IA</div>
              <div className="text-white font-semibold">AUTOMATION PYTHON</div>
              <div className="text-white font-semibold">CAMPAGNES VIRALES</div>
              <div className="text-yellow-400 font-semibold">+ 12 PROJETS</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regular Template Starting from Method Section */}
      <div className="pt-0">
        <ServicePageTemplatePremium
          title="" // Empty car on a notre custom hero
          subtitle=""
          heroDescription=""
          color="yellow"
          heroMetrics={[]} // Empty car on a notre custom hero
          ctaText=""
          
          methodTitle="méthodologie humain × claude code"
          methodDescription="Collaboration inédite : développeur humain créatif + Claude Code pour l'analyse et l'optimisation technique. Marketing humain (empathie, créativité, intuition) amplifié par puissance IA (data analysis, scaling, précision). Culture Peinture case study : 2.4M vues virales grâce à cette synergie unique. Première agence née de la collaboration Humain-IA."
          
          processSteps={[
            {
              number: "01",
              title: "conception humaine + architecture claude",
              description: "Humain conçoit la vision créative et l'expérience utilisateur. Claude Code optimise l'architecture technique, analyse les performances et suggère les améliorations. Synergie parfaite créativité-technique."
            },
            {
              number: "02",
              title: "créativité humaine × optimisation ia",
              description: "Humain crée le contenu émotionnel et authentique. Claude analyse les tendances, optimise les hooks psychologiques, prédit le potentiel viral. Marketing humain amplifié par intelligence artificielle."
            },
            {
              number: "03",
              title: "tracking intelligent humain-claude",
              description: "Développeur humain implémente le tracking custom. Claude Code analyse les données en temps réel, détecte les patterns et recommande les optimisations. 14,171 sessions récupérées grâce à cette précision."
            },
            {
              number: "04",
              title: "scaling collaboratif humain-claude",
              description: "Humain supervise la stratégie et prend les décisions créatives. Claude Code automatise l'exécution, monitore les performances et alerte sur les opportunités. Croissance intelligente et humaine."
            }
          ]}
          
          proofTitle="culture peinture: la preuve de la collaboration humain-claude"
          proofContent={proofContent}
          
          featuresTitle="synergie humain × claude code"
          featuresDescription="Première collaboration officielle développeur humain + Claude Code. Marketing humain (empathie, créativité, vision) amplifié par puissance IA (analyse, optimisation, scaling). Résultats impossibles en solo."
          features={[
            {
              icon: "",
              title: "dashboards conçus ensemble humain-claude",
              description: "Humain conçoit l'UX et l'esthétique. Claude Code optimise l'architecture Python, suggère les améliorations techniques et analyse les performances. Collaboration parfaite design-technique."
            },
            {
              icon: "",
              title: "stratégie virale humain × claude",
              description: "Créativité humaine authentique + analyse Claude des tendances et optimisations. 2.4M vues Culture Peinture = synergie parfaite émotion humaine et précision artificielle."
            },
            {
              icon: "",
              title: "tracking code attribution collaborative",
              description: "JavaScript custom events implémentés par humain + Python data processing optimisé par Claude. Attribution multi-touch, user journey mapping, sessions recovery perfectionnés."
            },
            {
              icon: "",
              title: "automation scripts intelligente duo",
              description: "Python automation conçue ensemble : content optimization, A/B testing auto, performance monitoring. Code humain supervisé et optimisé par Claude Code."
            },
            {
              icon: "",
              title: "predictive analytics machine learning",
              description: "Algorithmes Python ML développés en collaboration : prédiction performance contenu, recommandations personnalisées, trend forecasting. Data science humain-IA."
            },
            {
              icon: "",
              title: "duo créatif humain-claude exclusif",
              description: "Première collaboration officielle avec Claude Code. Humain pour l'émotion et la créativité, Claude pour l'analyse et l'optimisation technique. Combo inédit sur le marché."
            }
          ]}
          
          pricingTitle="collaboration humain × claude code"
          price="15000 CHF"
          pricingDescription="Première agence officielle Humain + Claude Code. Marketing humain amplifié par IA la plus puissante. Dashboard Python + Stratégie virale + Formation collaborative. Synergie inédite exclusive."
          pricingFeatures={[
            "Dashboard Python développé en collaboration Humain-Claude",
            "Campagne réels viraux optimisée par IA + créativité humaine",
            "Tracking code JavaScript + analyse Claude en temps réel",
            "Scripts automation Python supervisés et optimisés",
            "Content IA Claude + human creativity hybrid authentique",
            "Formation technique collaborative + code handover complet"
          ]}
          
          faqTitle="Questions Fréquentes - Collaboration Humain × Claude Code"
          faqItems={[
            {
              question: "Comment fonctionne concrètement la collaboration avec Claude Code ?",
              answer: "Collaboration officielle unique : développeur humain conçoit la vision créative et l'expérience, Claude Code analyse, optimise l'architecture technique et suggère des améliorations en temps réel. Culture Peinture exemple concret : humain crée contenu émotionnel viral, Claude analyse performance, optimise hooks, prédit viralité = 2.4M vues documentées. Synergie créativité humaine + puissance analytique IA."
            },
            {
              question: "Quelle est la différence avec un développeur qui utilise simplement l'IA comme outil ?",
              answer: "Différence fondamentale : pas juste utiliser l'IA comme outil, mais véritable collaboration développeur-IA. Claude Code participe activement aux décisions techniques, architecture, optimisations. Humain + Claude = duo complémentaire : empathie humaine + analyse IA, créativité authentique + optimisation technique, vision artistique + précision analytique. Résultats Culture Peinture impossibles avec approche traditionnelle."
            },
            {
              question: "15,000 CHF pour cette collaboration, comment justifiez-vous ce prix premium ?",
              answer: "Prix justifié par exclusivité collaboration officielle Humain-Claude Code : premier développeur-créatif épaulé par IA la plus puissante au monde. Résultats prouvés Culture Peinture : 2.4M vues virales, 140x performance vs publicité payante, 688 conversions trackées. Duo unique marché : marketing humain authentique + puissance analytique Claude. Investment dans synergie révolutionnaire, pas simple prestation."
            },
            {
              question: "Après livraison, puis-je continuer à bénéficier de l'optimisation Claude ?",
              answer: "Formation complète collaboration humain-Claude incluse : méthodes de travail avec IA, prompting technique optimal, architecture collaborative. Code documenté avec annotations Claude, évolutivité maximale. Support 3 mois : questions techniques + optimisations Claude. Objectif : autonomie dans collaboration humain-IA. Dashboard + scripts conçus pour évolution continue avec assistance IA."
            },
            {
              question: "Les résultats Culture Peinture sont-ils vraiment dus à cette collaboration Humain-Claude ?",
              answer: "Résultats Culture Peinture 100% authentiques et vérifiables : 2.4M vues GA4 trackées, 688 conversions dashboard custom, 140x performance vs ads payantes documentée. Collaboration Humain-Claude démontrée : code Python optimisé par IA, stratégie contenu analysée et améliorée, tracking perfectionné par intelligence artificielle. Synergie créativité humaine + analyse IA = performance impossible en solo."
            },
            {
              question: "Cette approche Humain × IA est-elle reproductible sur d'autres projets ?",
              answer: "Méthodologie collaboration Humain-Claude reproductible et systematisée : frameworks de travail développés, méthodes de prompting optimisées, processus créatifs documentés. Chaque projet bénéficie synergie unique : analyse IA personnalisée + créativité humaine adaptée. Culture Peinture premier cas, méthodes affinées depuis. Approche évolutive : collaboration s'améliore avec expérience, résultats futurs potentiellement supérieurs."
            }
          ]}
          
          finalCtaText="collaborer avec nous"
        />
      </div>
    </div>
  )
}