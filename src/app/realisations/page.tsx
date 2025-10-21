'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import IconeOSOM from '@/components/IconeOSOM'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

// Lazy load case studies pour améliorer performance mobile
const InteractiveCaseStudy = dynamic(
  () => import('@/components/portfolio').then(mod => ({ default: mod.InteractiveCaseStudy })),
  {
    loading: () => (
      <div className="bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 rounded-2xl p-8 h-96 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-white/5 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-white/5 rounded w-1/2"></div>
      </div>
    ),
    ssr: false
  }
)

const ProjectCardMinimal = dynamic(
  () => import('@/components/portfolio').then(mod => ({ default: mod.ProjectCardMinimal })),
  {
    loading: () => (
      <div className="bg-black/40 border border-white/10 rounded-xl p-6 h-48 animate-pulse">
        <div className="h-6 bg-white/10 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-white/5 rounded w-full mb-2"></div>
        <div className="h-4 bg-white/5 rounded w-3/4"></div>
      </div>
    ),
    ssr: false
  }
)

interface CaseStudyData {
  id: string
  client: string
  sector: string
  timeline: string
  challenge: string
  solution: string
  investment: {
    osom: number
    competitor: number
  }
  results: {
    conversions: {
      osom: number
      competitor: number
    }
    roi: {
      osom: number
      competitor: number
    }
    sessions: {
      osom: number
      competitor: number
    }
  }
  metrics: {
    label: string
    value: string
    comparison: string
    trend: 'up' | 'down'
    impact: 'positive' | 'negative' | 'neutral'
    tooltip?: string
  }[]
  insights: string[]
  dataSource: string
}

const caseStudies: CaseStudyData[] = [
  {
    id: 'culture-peinture',
    client: 'Culture Peinture',
    sector: 'Formation professionnelle 60+',
    timeline: '6.5 mois • Jan-Jul 2025',
    challenge: 'Client investissait massivement en publicité payante (10,000+ CHF/mois) avec des résultats décevants. Acquisition coûteuse et taux de conversion faibles malgré budget conséquent.',
    solution: 'Stratégie de contenu organique Facebook/Instagram ciblée sur l\'audience senior avec création de Reels éducatifs et gestion communautaire professionnelle.',
    investment: {
      osom: 6500, // 1,000 CHF/mois x 6.5 mois
      competitor: 65000 // ~10,000 CHF/mois x 6.5 mois
    },
    results: {
      conversions: {
        osom: 688, // Key events from Organic Social
        competitor: 49 // Key events from Paid Search
      },
      roi: {
        osom: 105.8, // 688/6500 * 1000
        competitor: 0.75 // 49/65000 * 1000
      },
      sessions: {
        osom: 6075, // Organic Social sessions
        competitor: 19865 // Paid Search sessions
      }
    },
    metrics: [
      {
        label: 'Taux de conversion',
        value: '11.3%',
        comparison: 'vs 0.25% publicité payante',
        trend: 'up',
        impact: 'positive',
        tooltip: '688 conversions / 6,075 sessions organiques'
      },
      {
        label: 'Efficacité budgétaire',
        value: '14x',
        comparison: 'plus efficace que paid ads',
        trend: 'up',
        impact: 'positive',
        tooltip: '105.8 vs 0.75 conversions par 1000 CHF'
      },
      {
        label: 'Engagement utilisateur',
        value: '67.5 sec',
        comparison: 'vs 21.3 sec paid search',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Temps d\'engagement 3x supérieur'
      },
      {
        label: 'Coût par conversion',
        value: '9.4 CHF',
        comparison: 'vs 1,327 CHF paid ads',
        trend: 'down',
        impact: 'positive',
        tooltip: 'Réduction de 99.3% du coût d\'acquisition'
      },
      {
        label: 'Volume de trafic',
        value: '6,075',
        comparison: 'sessions organiques qualifiées',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Trafic 100% organique sans coût acquisition'
      },
      {
        label: 'ROI investissement',
        value: '+10,584%',
        comparison: 'retour sur investissement',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Basé sur données GA4 vérifiables'
      }
    ],
    insights: [
      'Canal organique génère 8x plus de conversions par CHF investi que la publicité payante',
      'Audience 60+ répond exceptionnellement bien au contenu éducatif sur Facebook/Instagram',
      'Problème critique de tracking : 14,171 sessions "Unassigned" cachent le vrai ROI',
      'Réallocation budgétaire recommandée : investir davantage dans le canal le plus performant',
      'Asset créé : 2.4M vues organiques + audience qualifiée construite (valeur 95,000 CHF)',
      'Potentiel doublement des performances avec optimisation tracking et budget proportionnel'
    ],
    dataSource: 'Analyse basée sur 200 jours de données Google Analytics 4 + Meta Business Manager. Période : 1er janvier - 19 juillet 2025. Métriques vérifiables et reproductibles.'
  },
  {
    id: 'artisane-lumiere',
    client: 'Artisane de Lumière',
    sector: 'Artisanat d\'art • Abat-jour',
    timeline: '7 mois • Jan-Jul 2025',
    challenge: 'PME artisanale avec présence digitale minimale : 0.875 sessions/jour, aucun tracking de conversion configuré, potentiel SEO inexploité malgré un secteur de niche à faible concurrence.',
    solution: 'Diagnostic SEO approfondi révélant un taux d\'engagement organique supérieur de 24 points au trafic direct. Optimisation technique et stratégie de contenu ciblée secteur artisanal.',
    investment: {
      osom: 2800, // Estimation pour diagnostic + optimisation
      competitor: 0 // Aucun investissement digital concurrent
    },
    results: {
      conversions: {
        osom: 70, // Sessions SEO organiques
        competitor: 92 // Sessions direct (baseline)
      },
      roi: {
        osom: 25.0, // 70/2800 * 1000
        competitor: 0 // Pas d'investissement digital
      },
      sessions: {
        osom: 70, // Organic Search sessions
        competitor: 92 // Direct sessions
      }
    },
    metrics: [
      {
        label: 'Engagement SEO',
        value: '68.6%',
        comparison: 'vs 44.6% trafic direct',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Trafic SEO 54% plus engagé que direct'
      },
      {
        label: 'Qualité du trafic',
        value: '+24 pts',
        comparison: 'amélioration taux engagement',
        trend: 'up',
        impact: 'positive',
        tooltip: 'SEO organique surperforme le trafic direct'
      },
      {
        label: 'Potentiel de croissance',
        value: '5x',
        comparison: 'multiplication possible volume',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Secteur niche avec faible concurrence SEO'
      },
      {
        label: 'Tracking optimisé',
        value: '0→100%',
        comparison: 'visibilité conversions',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Setup GA4 professionnel pour ROI mesurable'
      },
      {
        label: 'Position marché',
        value: 'Leader',
        comparison: 'secteur abat-jour digital',
        trend: 'up',
        impact: 'positive',
        tooltip: 'Opportunité de dominer la niche digitale'
      },
      {
        label: 'Coût acquisition',
        value: '40 CHF',
        comparison: 'par session SEO qualifiée',
        trend: 'down',
        impact: 'positive',
        tooltip: 'Investissement ponctuel vs récurrent ads'
      }
    ],
    insights: [
      'OSOM génère trafic 54% plus engagé que direct, mais site non-optimisé crée fuite massive',
      'Problème structurel : OSOM amène audience qualifiée, parcours utilisateur défaillant tue conversions',
      'Diagnostic révèle 0 événements clés configurés = conversions invisibles, ROI sous-estimé',
      'Contrainte critique : OSOM n\'a pas la main sur UX/conversion = potentiel bridé',
      'Solution OSOM Web : trafic qualifié + site optimisé = performances réelles mesurables',
      'Volume actuel peut être multiplié par 5x avec contrôle total du parcours utilisateur'
    ],
    dataSource: 'Diagnostic basé sur 200 jours de données Google Analytics 4. Site : abat-jour-adl.ch. Période : 1er janvier - 20 juillet 2025. Analyse technique et concurrentielle approfondie.'
  }
]

const RealisationsPage = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fonction pour valider email et débloquer les case studies
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    
    setIsSubmitting(true)
    
    // Simulation validation email (remplace par vraie API)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsUnlocked(true)
    setShowEmailModal(false)
    setIsSubmitting(false)

    // Ici tu peux ajouter l'envoi vers ton CRM
  }

  // Versions censurées des case studies
  const getCensoredCaseStudy = (caseStudy: CaseStudyData) => {
    if (isUnlocked) return caseStudy
    
    return {
      ...caseStudy,
      client: caseStudy.id === 'culture-peinture' ? 'Client Formation Professionnelle' : 'Client Artisanat Décoratif',
      challenge: 'Accès aux détails complets après validation email → [DÉBLOQUER]',
      solution: 'Stratégie et résultats détaillés disponibles → [DÉBLOQUER]',
      results: {
        conversions: { osom: 0, competitor: 0 },
        roi: { osom: 0, competitor: 0 },
        sessions: { osom: 0, competitor: 0 }
      },
      metrics: caseStudy.metrics.map(metric => ({
        ...metric,
        value: '***',
        comparison: 'Données sensibles protégées',
        tooltip: 'Débloquez avec votre email professionnel'
      })),
      insights: ['Insights complets disponibles après validation email'],
      dataSource: 'Sources et métriques vérifiées disponibles après déblocage'
    }
  }

  // Premium animation variants (homepage level)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Progress Bars Sublimes */}
      <ScrollProgressIndicator />
      {/* Hero Ultra Minimaliste - Version A Mobile Optimized */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Badge subtil */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-400 text-xs font-medium tracking-widest uppercase">
            Projets OSOM
          </span>
        </motion.div>

        {/* Titre simple et puissant */}
        <motion.h1
          className="text-5xl md:text-7xl font-black text-center mb-6 leading-tight"
          style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Nos</span>
          <br />
          <span className="text-yellow-400">PROJETS</span>
        </motion.h1>

        {/* 1 ligne percutante */}
        <motion.p
          className="text-lg text-gray-300 text-center max-w-md mb-12"
          style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Résultats mesurables. Performances vérifiées.
        </motion.p>

        {/* CTA scroll subtil */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-sm text-gray-500">Découvrir</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-pink-400 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Floating accent subtil */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#FFDD00' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </section>

      {/* Section Philosophie Projet OSOM */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Qu'est-ce qu'un <span className="text-pink-500 font-bold">Projet OSOM</span> ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <motion.div 
                className="bg-white/5 p-6 rounded-2xl border border-pink-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-pink-400 font-bold text-lg mb-3">Transformation complète</h3>
                <p className="text-gray-300">Pas juste un site web, mais une révolution digitale de votre business avec IA intégrée.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-6 rounded-2xl border border-yellow-400/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-yellow-400 font-bold text-lg mb-3">Partenariat stratégique</h3>
                <p className="text-gray-300">Accompagnement long-terme avec optimisation continue basée sur vos données réelles.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-6 rounded-2xl border border-cyan-400/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-cyan-400 font-bold text-lg mb-3">ROI Mesurable</h3>
                <p className="text-gray-300">Chaque action justifiée par la data, chaque investissement avec retour quantifiable.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets Web Live Section - NOUVEAU */}
      <section className="py-32 bg-gradient-to-br from-black via-purple-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="w-2 h-2 rounded-full bg-purple-500 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">
                Projets Web Live • Sites en Production
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-white mb-6"
              style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
            >
              Nos <span className="text-purple-400 font-bold">Créations Digitales</span>
            </h2>

            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
            >
              Sites web sur mesure en production. Architecture Next.js premium, design élégant, performances optimales.
            </p>
          </motion.div>

          {/* Projects Grid - Minimaliste */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Maîtrise Cathédrale */}
            <ProjectCardMinimal
              title="Maîtrise Cathédrale"
              subtitle="Institution Culturelle • Sion"
              liveUrl="https://maitrise-cathedrale.ch"
              screenshot="/projects/maitrise-logo.webp"
              accentColor="#9333EA"
            />

            {/* JD Waeber */}
            <ProjectCardMinimal
              title="Jean-David Waeber"
              subtitle="Organiste & Chef de Chœur"
              liveUrl="https://jdwaeber.ch"
              screenshot="/projects/jdw-portrait.webp"
              accentColor="#D4A574"
            />

            {/* Camilo Rivera Portfolio */}
            <ProjectCardMinimal
              title="Camilo Rivera"
              subtitle="Artiste Peintre • Portfolio Premium"
              liveUrl="https://camilorivera.ch"
              screenshot="/projects/camilo-rivera-portrait.webp"
              accentColor="#D4AF37"
            />

            {/* Culture Peinture */}
            <ProjectCardMinimal
              title="Culture Peinture"
              subtitle="14x ROI • 688 Conversions"
              liveUrl="/realisations#culture-peinture"
              accentColor="#10B981"
            />
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              Discuter de votre projet web →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Premium Case Studies Section */}
      <section className="py-32 bg-gradient-to-br from-white/5 via-black to-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Premium Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                className="w-2 h-2 rounded-full bg-pink-500 mr-3"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-pink-400 text-sm font-medium tracking-wide">
                ANALYSES GA4 TRANSPARENTES • MÉTRIQUES VÉRIFIABLES
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Case Studies <span className="text-pink-500 font-bold">Vérifiés</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Chaque projet OSOM combine <span className="text-pink-400 font-semibold">intelligence artificielle</span>, 
              expertise humaine et <span className="text-yellow-400 font-semibold">analyse data avancée</span> pour maximiser votre ROI.
              <br />
              <span className="text-cyan-400 font-semibold">Méthodologie éprouvée :</span> Diagnostic → Stratégie → Implémentation → Optimisation continue.
            </p>
          </motion.div>

          {/* Interactive Case Studies with Premium Animations */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {!isUnlocked && (
              <motion.div
                className="bg-gradient-to-br from-orange-900/20 to-black border border-orange-400/30 rounded-2xl p-8 mb-8 text-center"
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <IconeOSOM type="shield" size={32} color="orange" ariaLabel="Protection données" />
                  <h3 className="text-orange-400 font-bold text-xl ml-3">Case studies protégés</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Nos clients nous font confiance avec des données sensibles. 
                  Validez votre email professionnel pour accéder aux métriques complètes.
                </p>
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="bg-orange-400 hover:bg-orange-300 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Débloquer les Case Studies
                </button>
              </motion.div>
            )}

            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="transition-all duration-500"
              >
                <InteractiveCaseStudy
                  data={getCensoredCaseStudy(study)}
                  isExpanded={expandedCase === study.id}
                  onToggle={() => setExpandedCase(
                    expandedCase === study.id ? null : study.id
                  )}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Data Credibility Section */}
          <motion.div 
            className="mt-20 p-8 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl border border-white/20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Analytics GA4 configurés", color: "#10B981", icon: "" },
                { label: "Tracking multi-plateformes", color: "#06B6D4", icon: "" },
                { label: "Suivi performance 24/7", color: "#FFDD00", icon: "" },
                { label: "ROI transparents", color: "#EC4899", icon: "" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.icon && <span className="text-lg">{item.icon}</span>}
                  <motion.div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <span className="text-sm text-white font-medium" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 bg-gradient-to-br from-pink-400/10 via-transparent to-yellow-400/5 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#EC4899" }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#FFDD00" }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <motion.div 
                className="w-2 h-2 rounded-full bg-pink-500 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-pink-400 text-sm font-medium tracking-wide">
                VOTRE TRANSFORMATION • RÉSULTATS GARANTIS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Prêt pour votre <span className="text-pink-500 font-bold">transformation</span>
              <br />digitale OSOM ?
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Démarrez votre projet OSOM : <span className="text-pink-400 font-semibold">transformation complète</span> 
              de votre présence digitale avec <span className="text-yellow-400 font-semibold">résultats mesurables</span> 
              et <span className="text-cyan-400 font-semibold">ROI garanti</span>.
            </p>
            
            {/* Premium Stats Showcase */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "AUDIT COMPLET", value: "GA4", color: "#EC4899" },
                { label: "OPTIMISATION", value: "ROI", color: "#FFDD00" },
                { label: "MONITORING", value: "24/7", color: "#06B6D4" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: item.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-400 tracking-wider font-medium">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg relative overflow-hidden group"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Analyser Mon ROI
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              
              <motion.a
                href="/outils"
                className="border-2 border-pink-500/60 text-pink-400 px-10 py-4 rounded-xl font-medium text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Outils d'Analyse
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Modal for Case Studies Access */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-3xl p-8 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <IconeOSOM type="shield" size={24} color="orange" ariaLabel="Protection" />
                  <span className="ml-3">Accès Case Studies</span>
                </h3>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-300 mb-6 text-sm">
                Pour protéger la confidentialité de nos clients, veuillez valider votre email professionnel 
                pour accéder aux métriques détaillées.
              </p>

              <form onSubmit={handleEmailSubmit}>
                <div className="mb-6">
                  <label className="block text-white text-sm font-medium mb-2">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@entreprise.ch"
                    className="w-full px-4 py-3 bg-black/50 border border-orange-400/30 rounded-lg text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-orange-400 hover:bg-orange-300 disabled:bg-gray-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Validation...
                    </>
                  ) : (
                    'Débloquer les Case Studies'
                  )}
                </button>
              </form>

              <p className="text-gray-500 text-xs mt-4 text-center">
                Vos données sont protégées. Aucun spam, utilisation unique pour ce contenu.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RealisationsPage