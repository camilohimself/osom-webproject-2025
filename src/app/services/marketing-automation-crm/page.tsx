import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ProgressMeter, ComparisonChart, AssetValueCounter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export default function MarketingAutomationCRMPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Automation Performance */}
      <GraphiqueLinear
        title="Automation Performance"
        subtitle="Funnel automatisé - Impact sur conversion et temps manuel"
        primaryMetric={{
          label: "Funnel Automatisé osom",
          value: "+78% conversions",
          color: "#10B981"
        }}
        secondaryMetric={{
          label: "Processus Manuel",
          value: "Baseline 22%",
          color: "#6B7280"
        }}
        improvement={{
          label: "Efficacité",
          value: "-65% temps manuel"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-green-400/20 rounded-2xl"
      />

      {/* Conversion Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricsPulse
          value={78}
          suffix="%"
          prefix="+"
          label="Amélioration Conversions"
          description="Nurturing automatisé vs manuel"
          color="#70c1a9"
        />
        <MetricsPulse
          value={65}
          suffix="%"
          prefix="-"
          label="Réduction Temps Manuel"
          description="Processus automatisés"
          color="#70c1a9"
        />
      </div>

      {/* Lifetime Value Increase */}
      <div className="mt-8">
        <AssetValueCounter
          value={320}
          currency=""
          suffix="%"
          label="Augmentation Valeur Client"
          description="Lifetime Value grâce à l'automatisation"
          color="#70c1a9"
          duration={2500}
        />
      </div>

      {/* Performance Comparison */}
      <div className="mt-8">
        <ComparisonChart
          title="Performance Funnel: Automatisé vs Manuel"
          data={[
            { label: "Funnel Automatisé osom", value: 78, color: "#70c1a9" },
            { label: "Processus Manuel", value: 22, color: "#6B7280" }
          ]}
          subtitle="Taux de conversion prospect → client"
        />
      </div>

      {/* Automation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={92}
          label="Email Automation"
          color="#70c1a9"
          description="Taux d'ouverture"
        />
        <ProgressMeter
          percentage={87}
          label="Lead Scoring"
          color="#70c1a9"
          description="Précision qualification"
        />
        <ProgressMeter
          percentage={94}
          label="CRM Integration"
          color="#70c1a9"
          description="Data synchronisation"
        />
      </div>

      {/* Summary */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#70c1a9] mb-2">
          Système Automatisé = 3.2x Plus de Valeur
        </div>
        <div className="text-gray-400 text-sm">
          Conversion +78%, Temps -65%, Lifetime Value +220%
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Marketing Automation & CRM"
      subtitle="CRM"
      heroDescription="Automatisez vos conversions et transformez chaque prospect en client avec des systèmes intelligents qui travaillent 24/7."
      color="cyan"
      heroMetrics={[
        {
          value: "+78%",
          label: "Taux Conversion",
          description: "Nurturing automatisé"
        },
        {
          value: "-65%",
          label: "Temps Manuel",
          description: "Processus automatisés"
        },
        {
          value: "3.2x",
          label: "Valeur Client",
          description: "Lifetime value améliorée"
        }
      ]}
      ctaText="Automatiser mes conversions"
      
      methodTitle="Système Automatisation Intelligente"
      methodDescription="Transformez votre funnel en machine à convertir qui fonctionne sans intervention"
      processSteps={[
        {
          number: "01",
          title: "Audit Funnel Actuel",
          description: "Analyse des points de friction et opportunités d'automatisation"
        },
        {
          number: "02",
          title: "Setup Automation",
          description: "Configuration CRM + email sequences + lead scoring + workflows"
        },
        {
          number: "03",
          title: "Optimisation Continue",
          description: "A/B testing automatisé et amélioration performances en temps réel"
        }
      ]}
      
      proofTitle="ROI Automatisation Mesurable"
      proofContent={proofContent}
      
      featuresTitle="Suite Automation Complète"
      featuresDescription="Tous les outils pour automatiser et optimiser votre acquisition client"
      features={[
        {
          icon: "",
          title: "Email Marketing Automation",
          description: "Sequences personnalisées, segmentation avancée - +92% taux ouverture"
        },
        {
          icon: "",
          title: "Lead Scoring Intelligent",
          description: "Qualification automatique prospects - 87% précision qualification"
        },
        {
          icon: "",
          title: "Workflows Multi-Canal",
          description: "Automation email + SMS + social + retargeting coordonné"
        },
        {
          icon: "",
          title: "CRM Intégration Complète",
          description: "Synchronisation données temps réel - 94% accuracy data"
        },
        {
          icon: "",
          title: "Chatbot & AI Support",
          description: "Réponses automatisées 24/7 - Qualification premier niveau"
        },
        {
          icon: "",
          title: "Analytics & Reporting",
          description: "Dashboard automation performance - ROI transparent par canal"
        }
      ]}
      
      pricingTitle="Automation osom Suite"
      price="3900 CHF"
      pricingDescription="Setup + Formation + Support 6 mois"
      pricingFeatures={[
        "CRM setup complet",
        "Email automation sequences",
        "Lead scoring configuration",
        "Workflows multi-canal",
        "Chatbot & AI integration", 
        "Formation équipe + support"
      ]}
      finalCtaText="Lancer mon système automatisé"
    />
  )
}