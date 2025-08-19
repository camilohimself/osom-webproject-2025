'use client'

import { motion } from 'framer-motion'
import CTRCircularChart from '@/components/ui/CTRCircularChart'
import IconeOSOM from '@/components/IconeOSOM'

const PilierSwiss1 = () => {
  const technologies = [
    { icon: "lightning", title: "Veille & Mise à Jour", desc: "Technologies constamment actualisées, formation continue et adaptation aux nouveautés du marché digital." },
    { icon: "star", title: "IA Sur Mesure", desc: "Solutions d'intelligence artificielle personnalisées selon vos besoins spécifiques et votre secteur d'activité." },
    { icon: "tools", title: "Itérations Rapides", desc: "Développement agile avec feedback continu, ajustements en temps réel et livraisons fréquentes." }
  ]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full max-w-7xl mx-auto">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-purple-400"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-1 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-t border-purple-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-1 bg-purple-400 mb-8"></div>
          <div className="text-sm tracking-wider text-gray-400 font-light">
            PILIER #1 — CRÉATION AUGMENTÉE
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-4 font-sans text-white mb-12">
              <div className="text-3xl md:text-4xl font-light text-gray-400">
                CRÉATIVITÉ AUGMENTÉE
              </div>
              <div className="text-7xl md:text-8xl font-black text-purple-400 leading-none">
                GUIDÉE PAR
              </div>
              <div className="text-7xl md:text-8xl font-black leading-none">
                L'HUMAIN
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-400 mt-8">
                IA sur mesure — rapide, utile, orienté client
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              <span className="text-purple-400 font-semibold">L'IA accélère, l'expertise dirige.</span> Contenus qui émeuvent et convertissent. Développement agile par sprints.
            </p>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 hover:bg-purple-400/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <IconeOSOM type={tech.icon as any} size={24} color="purple" ariaLabel={tech.title} />
                    <div className="text-purple-400 font-bold text-lg ml-3">{tech.title}</div>
                  </div>
                  <div className="text-gray-300">{tech.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <CTRCircularChart
              title="PERFORMANCE IA"
              subtitle="CTR OSOM vs Industrie — Données vérifiées"
              className="rounded-none border-0 bg-transparent"
            />

            <motion.div 
              className="grid grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="border-l-2 border-purple-400 pl-4">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">CTR MOYEN</div>
                <div className="text-3xl font-bold text-purple-400">25%</div>
                <div className="text-xs text-gray-400">vs 2-3% standard</div>
              </div>
              
              <div className="border-l-2 border-purple-400 pl-4">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">TEMPS CRÉATION</div>
                <div className="text-3xl font-bold text-purple-400">-75%</div>
                <div className="text-xs text-gray-400">vs méthode classique</div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 p-6 border-l-4 border-purple-400 bg-purple-400/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="text-lg text-white italic">
                "Contenus qui émeuvent et convertissent"
              </div>
              <div className="text-xs text-gray-400 mt-2">— Philosophie OSOM</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PilierSwiss1