'use client'

import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Custom Hero Section - Data Forensics × Claude Intelligence
const CustomHeroSection = () => {
  const [dataStream, setDataStream] = useState('')
  const [recoveredSessions, setRecoveredSessions] = useState(0)
  
  useEffect(() => {
    const generateDataStream = () => {
      const events = ['GA4_EVENT', 'UTM_TRACK', 'SESSION_ID', 'CONVERSION', 'ATTRIBUTION']
      const stream = []
      for (let i = 0; i < 30; i++) {
        stream.push(`${events[Math.floor(Math.random() * events.length)]}_${Math.floor(Math.random() * 9999)}`)
      }
      return stream.join(' • ')
    }
    
    const interval = setInterval(() => {
      setDataStream(generateDataStream())
    }, 3000)
    
    // Animate counter
    const counterInterval = setInterval(() => {
      setRecoveredSessions(prev => {
        if (prev < 14171) {
          return prev + Math.floor(Math.random() * 500) + 100
        }
        return 14171
      })
    }, 100)
    
    return () => {
      clearInterval(interval)
      clearInterval(counterInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Data Stream Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="text-purple-400 font-mono text-xs leading-relaxed p-4 whitespace-nowrap overflow-hidden"
        >
          {dataStream}
        </motion.div>
      </div>

      {/* Prismatic Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top - Lost Sessions Counter */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-black/60 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-8"
          >
            <div className="text-red-400 text-sm font-medium mb-2">SESSIONS PERDUES DÉTECTÉES</div>
            <motion.div
              key={recoveredSessions}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-6xl font-black text-purple-400 mb-2"
            >
              {recoveredSessions.toLocaleString()}
            </motion.div>
            <div className="text-gray-400 text-sm">'Unassigned' → Attribution Complète</div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Human Forensics */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl font-light text-gray-300 tracking-wide"
              >
                DATA FORENSICS HUMAIN
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="space-y-2"
              >
                <div className="text-purple-400 text-lg font-medium">● GA4 Configuration Expert</div>
                <div className="text-purple-400 text-lg font-medium">● GTM Debugging Master</div>
                <div className="text-purple-400 text-lg font-medium">● Attribution Investigation</div>
                <div className="text-purple-400 text-lg font-medium">● 14,171 Sessions Récupérées</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-gray-400 text-sm max-w-md leading-relaxed"
              >
                Investigation technique obsessionnelle • Configuration chirurgicale • 
                Audit forensics approfondi • ROI invisible révélé
              </motion.div>
            </div>

            {/* Forensics Tools */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4">
                <div className="text-purple-400 text-2xl font-bold">100%</div>
                <div className="text-gray-300 text-sm">Visibilité ROI</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4">
                <div className="text-purple-400 text-2xl font-bold">200+</div>
                <div className="text-gray-300 text-sm">Jours Analysés</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Claude Intelligence */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-2xl font-light text-gray-300 tracking-wide text-right"
              >
                CLAUDE DATA INTELLIGENCE
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="space-y-2 text-right"
              >
                <div className="text-cyan-400 text-lg font-medium">● Pattern Recognition Advanced</div>
                <div className="text-cyan-400 text-lg font-medium">● Anomaly Detection Smart</div>
                <div className="text-cyan-400 text-lg font-medium">● Attribution Modeling AI</div>
                <div className="text-cyan-400 text-lg font-medium">● 94% Data Accuracy Achieved</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-gray-400 text-sm max-w-md leading-relaxed text-right ml-auto"
              >
                Intelligence comportementale • Prédiction attribution • 
                Analyse multidimensionnelle • Insights automatisés
              </motion.div>
            </div>

            {/* AI Analytics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl font-bold">94%</div>
                <div className="text-gray-300 text-sm">Data Accuracy</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl font-bold">91%</div>
                <div className="text-gray-300 text-sm">Event Precision</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Center Data Flow Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1.6, type: "spring", stiffness: 80 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="text-4xl font-bold text-black"
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom - Cascade Typography */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center mt-20 space-y-4"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            data forensics × claude intelligence
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-xl text-gray-400 font-light tracking-wide"
          >
            L'alliance révolutionnaire entre investigation forensics et intelligence artificielle Claude
          </motion.p>

          {/* Live Data Recovery Display */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex justify-center items-center space-x-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">7500 CHF</div>
              <div className="text-sm text-gray-400">Forensics Premium</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">3 mois</div>
              <div className="text-sm text-gray-400">Support Intelligence</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">14,171</div>
              <div className="text-sm text-gray-400">Sessions Révélées</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Data Forensics × Claude Intelligence VALAIS | ROI Invisible Révélé - osom',
  description: 'Révolution Data Analytics : Forensics Humain × Intelligence Claude. 14,171 sessions récupérées, ROI invisible révélé. GA4, GTM, attribution maîtrisés avec IA.',
  keywords: 'data forensics valais, claude intelligence analytics, ga4 expert ia, gtm debugging claude, attribution multi-touch ia, data analyst claude, roi invisible révélé',
  openGraph: {
    title: 'Data Forensics × Claude Intelligence | 14,171 Sessions Récupérées VALAIS',
    description: 'Investigation révolutionnaire humain-IA : Data Forensics × Claude Intelligence. ROI invisible révélé, 100% transparence.',
    type: 'website',
  }
}

export default function TrackingDataPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Data Attribution Recovery */}
      <GraphiqueLinear
        title="Data Forensics × Claude Intelligence Recovery"
        subtitle="Investigation révolutionnaire - ROI invisible révélé par collaboration humain-IA"
        primaryMetric={{
          label: "Forensics × Claude",
          value: "14,171 sessions",
          color: "#EC4899"
        }}
        secondaryMetric={{
          label: "Sessions Perdues",
          value: "Unassigned avant",
          color: "#6B7280"
        }}
        improvement={{
          label: "Visibilité ROI IA",
          value: "100% transparence"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-pink-400/20 rounded-2xl"
      />

      {/* Lost Sessions Recovery */}
      <AssetValueCounter
        value={14171}
        currency=""
        label="Sessions 'Unassigned' × Claude Récupérées"
        description="Trafic invisible révélé par investigation forensics IA"
        color="#8B5CF6"
        duration={3500}
      />

      {/* ROI Visibility Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MetricsPulse
          value={100}
          suffix="%"
          label="Visibilité ROI × Claude"
          description="De aveugle à transparent IA"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={200}
          suffix=" jours"
          prefix="+"
          label="Données × Claude Analysées"
          description="GA4 vérifiées intelligence artificielle"
          color="#8B5CF6"
        />
      </div>

      {/* Tracking Performance */}
      <div className="mt-8">
        <ComparisonChart
          title="Attribution Forensics × Claude: Avant vs Après Révolutionnaire"
          data={[
            { label: "Attribution Complète IA", value: 87, color: "#8B5CF6" },
            { label: "Sessions Non-Attribuées", value: 13, color: "#6B7280" }
          ]}
          subtitle="Récupération 14,171 sessions perdues - Valeur ROI révélée Claude"
        />
      </div>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={94}
          label="Précision Attribution × Claude"
          color="#8B5CF6"
          description="Sources trafic IA"
        />
        <ProgressMeter
          percentage={98}
          label="Data Quality × Claude"
          color="#8B5CF6"
          description="Fiabilité données IA"
        />
        <ProgressMeter
          percentage={91}
          label="Conversion Tracking × Claude"
          color="#8B5CF6"
          description="Events précis IA"
        />
      </div>

      {/* Hidden Value Revealed */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#8B5CF6] mb-2">
          ROI Invisible × Claude Révélé: 14,171 Sessions Perdues
        </div>
        <div className="text-gray-400 text-sm">
          Forensics × Claude Intelligence → Visibilité complète performances révolutionnaire
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      <CustomHeroSection />
      
      <ServicePageTemplatePremium
        title="Data Forensics × Claude Intelligence"
        subtitle="roi invisible révélé"
        heroDescription="La révolution Data Analytics : Investigation forensics humaine rencontre intelligence Claude. 14,171 sessions 'Unassigned' récupérées via collaboration révolutionnaire. GA4, GTM, attribution technique parfaitement optimisés IA."
        color="purple"
        heroMetrics={[
          {
            value: "0→100%",
            label: "Visibilité ROI",
            description: "Forensics × Claude transparency"
          },
          {
            value: "200+",
            label: "Jours Analysés",
            description: "Données Claude-verified"
          },
          {
            value: "14,171",
            label: "Sessions × Claude",
            description: "Trafic révélé intelligence IA"
          }
        ]}
        ctaText="Révéler mon ROI invisible avec Claude"
        
        methodTitle="forensics × claude intelligence révolutionnaire"
        methodDescription="Approche révolutionnaire data forensics : investigation humaine obsessionnelle rencontre intelligence Claude pour détecter chaque euro perdu dans les trous noirs analytics. 14,171 sessions récupérées = preuve collaboration humain-IA. Setup GA4/GTM chirurgical amplifié Claude pour ROI 100% transparent."
        processSteps={[
          {
            number: "01",
            title: "audit forensics × claude obsessionnel",
            description: "Investigation humaine 100+ points GA4/GTM + intelligence Claude pour détection patterns invisibles : configuration errors, data leaks, attribution gaps. Forensics révolutionnaire chaque euro invisible."
          },
          {
            number: "02",
            title: "setup technique × claude chirurgical",
            description: "Configuration GA4 experte amplifiée Claude : enhanced ecommerce IA, custom events optimisés, attribution modeling intelligente, GTM Claude-advanced. Setup révolutionnaire capture 100% data."
          },
          {
            number: "03",
            title: "dashboard × claude transparent permanent",
            description: "Data Studio advanced + Claude insights : attribution multi-touch IA, cohort analysis intelligente, LTV tracking Claude, ROI transparent temps réel. Visibilité révolutionnaire performance marketing."
          }
        ]}
        
        proofTitle="14,171 sessions × claude récupérées révolutionnaires"
        proofContent={proofContent}
        
        featuresTitle="arsenal forensics × claude révolutionnaire"
        featuresDescription="Maîtrise technique data forensics amplifiée intelligence Claude : GA4 advanced + Claude insights, GTM expert + IA optimization, Data Studio pro + Claude intelligence. Obsession révolutionnaire débusquer chaque centime perdu."
        features={[
          {
            icon: "",
            title: "google analytics 4 × claude forensics expert",
            description: "Configuration GA4 chirurgicale + Claude intelligence : enhanced ecommerce IA, custom dimensions optimisées, calculated metrics Claude, audience modeling intelligente. 98% data quality révolutionnaire."
          },
          {
            icon: "",
            title: "attribution modeling × claude multi-touch",
            description: "Tracking parcours complet + Claude analysis : first-click IA, last-click optimisé, linear Claude, time-decay intelligent, data-driven attribution révolutionnaire. 94% précision Claude-powered."
          },
          {
            icon: "",
            title: "google tag manager × claude architecture",
            description: "GTM setup expert + Claude optimization : triggers complexes IA, variables custom Claude, data layer optimization intelligente, debugging Claude-powered. Capture révolutionnaire parfaite."
          },
          {
            icon: "",
            title: "data studio × claude dashboards révolutionnaires",
            description: "Visualisation data obsessionnelle + Claude insights : blended data IA, calculated fields Claude, cohort analysis intelligente, ROI attribution révolutionnaire. Dashboards révèlent vérité Claude-powered."
          },
          {
            icon: "",
            title: "reporting automation × claude intelligent",
            description: "Google Apps Script + Zapier + Claude intelligence : reports automatisés IA, alertes performance Claude, data export programmé intelligent. 85% gain temps, précision révolutionnaire 100%."
          },
          {
            icon: "",
            title: "privacy × claude compliance révolutionnaire",
            description: "GDPR + iOS14 + cookieless tracking + Claude intelligence : server-side tracking IA, consent management Claude, first-party data strategy intelligente. Conformité révolutionnaire garantie."
          }
        ]}
        
        pricingTitle="data forensics × claude premium révolutionnaire"
        price="7500 CHF"
        pricingDescription="Audit forensics × Claude premium révolutionnaire : Investigation technique obsessionnelle + Intelligence artificielle + Setup chirurgical + Dashboard transparent + Formation. 14,171 sessions type récupérées Claude-guaranteed."
        pricingFeatures={[
          "Audit forensics × Claude 100+ points intelligents",
          "GA4 + GTM setup × Claude chirurgical expert",
          "Data Studio × Claude dashboards révolutionnaires",
          "Attribution modeling × Claude multi-touch intelligent",
          "Formation technique × Claude obsessionnelle",
          "Support data forensics × Claude 3 mois révolutionnaire"
        ]}
        
        faqTitle="Questions Fréquentes - Data Forensics × Claude Révolution"
        faqItems={[
          {
            question: "Comment avez-vous récupéré exactement 14,171 sessions avec Claude et que représente cette collaboration révolutionnaire ?",
            answer: "Investigation forensics × Claude révolutionnaire : Audit technique humain approfondi + Claude pattern recognition pour analyse GA4 configuration, GTM debugging IA, attribution gaps intelligence artificielle. 14,171 sessions = trafic réel révélé collaboration humain-Claude. Investigation révèle sources via Claude : email campaigns mal trackées détectées IA, social media links sans UTM identifiés Claude, redirections cassées découvertes intelligence artificielle. Récupération setup révolutionnaire Claude-powered."
          },
          {
            question: "Claude peut-il vraiment améliorer GA4, GTM, Data Studio ou c'est du marketing intelligence artificielle ?",
            answer: "Claude révolutionne l'analyse, pas la configuration directe : Pattern recognition advanced pour GA4 enhanced ecommerce + behaviour analysis pour GTM triggers + intelligent insights pour Data Studio blended data. Humain = maîtrise technique certifiée + configuration experte, Claude = intelligence comportementale + anomaly detection + optimization recommendations révolutionnaires. Demo technique Claude live : analyse before/after intelligence IA sur vos données réelles."
          },
          {
            question: "7500 CHF pour Forensics × Claude, justification versus audit data automatique 1500 CHF ?",
            answer: "Différence révolutionnaire : Audit automatique = surface scanning statique. Forensics × Claude = investigation manuelle obsessionnelle + intelligence comportementale IA + pattern recognition révolutionnaire. 7500 CHF inclus : audit forensics 40h + Claude behavioral analysis, setup expert + IA optimization, dashboards custom + Claude insights, formation révolutionnaire. 14,171 sessions = valeur client potentiel énorme Claude-revealed. ROI récupéré révolutionnaire 1-2 mois."
          },
          {
            question: "Après setup Forensics × Claude, mes équipes interprètent-elles données sans dépendance intelligence artificielle ?",
            answer: "Objectif révolutionnaire : autonomie data amplifiée Claude intelligence. Formation incluse : lecture dashboards + compréhension Claude insights + interprétation recommendations IA + prise décision basée intelligence artificielle. Setup conçu user-friendly : dashboards intuitifs + Claude recommendations highlighted + alertes automatiques IA. Équipe autonomous pour optimisations quotidiennes + Claude insights disponibles + nous pour évolutions révolutionnaires complexes."
          },
          {
            question: "Comment garantissez-vous précision données avec GDPR, iOS14 et intelligence Claude ?",
            answer: "Approche compliance × Claude révolutionnaire : server-side tracking Google Cloud + Claude privacy intelligence + consent management Cookiebot + IA compliance + first-party data strategy Claude + iOS14 SKAdNetwork intelligent. Privacy-first setup + Claude analysis : data anonymization IA + IP masking Claude + storage EU intelligent + retention policies IA. Testing rigoureux + Claude validation : cross-browser IA + cross-device Claude + privacy modes intelligent. 98% data accuracy révolutionnaire Claude-maintained."
          },
          {
            question: "Vos dashboards × Claude sont-ils évolutifs avec croissance business et nouveaux besoins intelligence ?",
            answer: "Architecture × Claude révolutionnaire scalable : structure modulaire + Claude learning continu + métriques extensibles IA + sources data multiples Claude-intégrables. Dashboards évolutifs + Claude intelligence : nouveaux KPIs ajoutables IA + segmentations affinables Claude + périodes comparables intelligentes. Croissance business = data plus riches + Claude insights plus précis + ROI mieux attribué IA. Expansion révolutionnaire intelligente système Claude-powered existant."
          }
        ]}
        
        finalCtaText="révéler mon roi invisible avec forensics × claude"
        skipCustomHero={true}
      />
    </div>
  )
}