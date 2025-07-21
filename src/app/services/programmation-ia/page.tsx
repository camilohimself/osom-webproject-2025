import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Programmation & IA Valais | Dashboards Intelligents + Campagnes Virales OSOM',
  description: 'Agence IA Valais: Dashboards intelligents + Content viral. 2.4M vues, 688 conversions, ROI 140x. Intelligence data + Performance créative.',
  keywords: 'programmation ia valais, dashboard interactif, campagne réels instagram, analyse data valais, intelligence artificielle marketing',
  openGraph: {
    title: 'Programmation & IA | Dashboards + Réels Viraux | OSOM Valais',
    description: 'De l\'analyse data aux contenus viraux : 2.4M vues, 140x ROI. L\'approche OSOM complète.',
    type: 'website',
  }
}

export default function ProgrammationIAPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* Hero Section - Dashboard Culture Peinture */}
      <div className="bg-gradient-to-br from-yellow-400/10 to-purple-600/20 rounded-3xl p-8 border border-yellow-400/30">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Case Study Culture Peinture
          </h3>
          <p className="text-xl text-gray-300">
            Dashboard Intelligence + Campagne Réels = Performance ROI
          </p>
        </div>
        
        {/* Métriques Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2.4M</div>
            <div className="text-white font-semibold">Vues Réels</div>
            <div className="text-gray-400 text-sm">Campagne 6 mois</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">688</div>
            <div className="text-white font-semibold">Conversions</div>
            <div className="text-gray-400 text-sm">Dashboard tracking</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">140x</div>
            <div className="text-white font-semibold">ROI Performance</div>
            <div className="text-gray-400 text-sm">vs Publicité payante</div>
          </div>
        </div>
      </div>

      {/* Dashboard Interactif Preview */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black/80 rounded-3xl p-6 border border-purple-400/30">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-purple-400 mb-2">
            Dashboard Temps Réel Intégré
          </h4>
          <p className="text-gray-300">
            Analytics intelligence avec visualisations interactives
          </p>
        </div>
        
        {/* Iframe Dashboard ou Preview */}
        <div className="bg-black/60 rounded-xl p-4 border border-gray-600/30 min-h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <div className="text-xl text-yellow-400 font-bold mb-2">
              Dashboard Culture Peinture
            </div>
            <div className="text-gray-400 mb-4">
              7 graphiques interactifs • Données temps réel • Export PDF
            </div>
            <div className="text-sm text-purple-400">
              → Démo live disponible sur demande
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Réels Performance */}
      <div className="bg-gradient-to-br from-yellow-400/10 to-orange-600/20 rounded-3xl p-8 border border-yellow-400/30">
        <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Performance Campagne Réels Instagram/TikTok
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">38,971</div>
            <div className="text-white font-semibold">Pic de Vues</div>
            <div className="text-gray-400 text-sm">Single day record</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2,100+</div>
            <div className="text-white font-semibold">Nouveaux Followers</div>
            <div className="text-gray-400 text-sm">Growth organique</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-white font-semibold">Interactions</div>
            <div className="text-gray-400 text-sm">Engagement total</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">200</div>
            <div className="text-white font-semibold">Jours Actifs</div>
            <div className="text-gray-400 text-sm">Consistency</div>
          </div>
        </div>
      </div>

      {/* GraphiqueLinear - Performance Comparison */}
      <GraphiqueLinear
        title="Intelligence Data + Créativité Virale"
        subtitle="Culture Peinture - Dashboard Analytics + Campagne Content"
        primaryMetric={{
          label: "Approche osom Complète",
          value: "688 conversions",
          color: "#FFDD00"
        }}
        secondaryMetric={{
          label: "Publicités Classiques",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Performance Supérieure",
          value: "140x plus efficace"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* Metrics Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <MetricsPulse
          value={11.3}
          suffix="%"
          label="Taux Conversion"
          description="Dashboard optimisation"
          color="#FFDD00"
        />
        <MetricsPulse
          value={67.5}
          suffix="s"
          label="Engagement Temps"
          description="Contenu viral quality"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={92.2}
          suffix="%"
          label="Engagement Rate"
          description="Audience qualifiée"
          color="#10B981"
        />
      </div>

      {/* Progress Meters - Technical Excellence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={95}
          label="Data Accuracy"
          color="#FFDD00"
          comparison={{
            label: "Standard",
            percentage: 60
          }}
          description="Attribution tracking"
        />
        <ProgressMeter
          percentage={88}
          label="Viral Potential"
          color="#8B5CF6"
          description="Content optimization AI"
        />
        <ProgressMeter
          percentage={90}
          label="ROI Mesurabilité"
          color="#10B981"
          comparison={{
            label: "Industrie",
            percentage: 45
          }}
          description="Dashboard intelligence"
        />
      </div>

      {/* Impact Final */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-yellow-400 mb-2">
          Culture Peinture: De 0 à 2.4M de vues
        </div>
        <div className="text-gray-400 text-sm">
          Dashboard Intelligence + Réels Strategy = Performance ROI Mesurable
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Programmation & IA Valais"
      subtitle="Data + Content"
      heroDescription="Au-delà des dashboards : nous créons l'intelligence data ET les campagnes virales qui génèrent des résultats mesurables. L'approche osom complète."
      color="yellow"
      heroMetrics={[
        {
          value: "2.4M",
          label: "Vues Virales",
          description: "Campagne réels Culture Peinture"
        },
        {
          value: "140x",
          label: "ROI Supérieur",
          description: "vs Publicité payante"
        },
        {
          value: "688",
          label: "Conversions",
          description: "Dashboard tracking intelligent"
        }
      ]}
      ctaText="Lancer ma stratégie Data+Content"
      
      methodTitle="Approche Intelligence Complète"
      methodDescription="De l'analyse data aux contenus viraux : nous maîtrisons toute la chaîne de performance digitale"
      processSteps={[
        {
          number: "01",
          title: "Data Intelligence Setup",
          description: "Installation tracking avancé, dashboards temps réel, attribution complète pour visibilité ROI"
        },
        {
          number: "02",
          title: "Content Strategy IA",
          description: "Analyse audience, création réels optimisés, stratégie virale basée sur data insights"
        },
        {
          number: "03",
          title: "Performance Monitoring",
          description: "Suivi temps réel, optimisation continue, ajustements basés sur métriques"
        },
        {
          number: "04",
          title: "Scale & Optimize",
          description: "Amplification des contenus performants, automatisation, scaling intelligent"
        }
      ]}
      
      proofTitle="Culture Peinture - Résultats Vérifiables"
      proofContent={proofContent}
      
      featuresTitle="Services Programmation & IA"
      featuresDescription="Intelligence data + Créativité virale = Performance mesurable"
      features={[
        {
          icon: "",
          title: "Dashboards Intelligents",
          description: "Analytics temps réel, visualisations interactives, attribution tracking - ROI transparent 24/7"
        },
        {
          icon: "",
          title: "Campagnes Réels Virales",
          description: "Content création optimisée IA, stratégie Instagram/TikTok - 2.4M vues documentées"
        },
        {
          icon: "",
          title: "Attribution Tracking",
          description: "Suivi multi-canal, récupération trafic 'unassigned' - 14,171 sessions récupérées"
        },
        {
          icon: "",
          title: "Automation Intelligence",
          description: "Optimisation campagnes IA, A/B testing auto - +78% performance moyenne"
        },
        {
          icon: "",
          title: "Predictive Analytics",
          description: "Prévision performance, recommandations IA - Décisions data-driven"
        },
        {
          icon: "",
          title: "Content Performance AI",
          description: "Analyse virale potential, optimisation hashtags - Viral-ready guarantee"
        }
      ]}
      
      pricingTitle="Intelligence osom Formula"
      price="4500 CHF"
      pricingDescription="Dashboard + Campagne Réels + Tracking Intelligence"
      pricingFeatures={[
        "Dashboard interactif temps réel",
        "Campagne réels 3 mois",
        "Attribution tracking setup",
        "Performance monitoring IA",
        "Content creation optimisée",
        "Formation équipe + handover"
      ]}
      finalCtaText="Démarrer mon Intelligence Marketing"
    />
  )
}