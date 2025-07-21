import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Tracking & Data Analytics Valais | Agence Marketing Digital OSOM',
  description: 'Agence marketing digital Valais : tracking avancé et analytics. 14,171 sessions récupérées, ROI transparent pour entreprises valaisannes.',
  keywords: 'agence marketing valais, marketing digital valais, analytics valais, tracking ga4 suisse, data marketing valais',
  openGraph: {
    title: 'Analytics & Tracking Valais | Data Marketing OSOM',
    description: 'Expertise marketing digital Valais : révélez le ROI invisible de vos actions marketing avec notre tracking avancé.',
    type: 'website',
  }
}

export default function TrackingDataPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Data Attribution Recovery */}
      <GraphiqueLinear
        title="Data Attribution Recovery"
        subtitle="Audit tracking - Révélation ROI invisible des actions marketing"
        primaryMetric={{
          label: "Attribution Complète",
          value: "14,171 sessions",
          color: "#EC4899"
        }}
        secondaryMetric={{
          label: "Sessions Perdues",
          value: "Unassigned avant",
          color: "#6B7280"
        }}
        improvement={{
          label: "Visibilité ROI",
          value: "100% transparence"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-pink-400/20 rounded-2xl"
      />

      {/* Lost Sessions Recovery */}
      <AssetValueCounter
        value={14171}
        currency=""
        label="Sessions 'Unassigned' Récupérées"
        description="Trafic invisible révélé par audit tracking"
        color="#8B5CF6"
        duration={3500}
      />

      {/* ROI Visibility Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MetricsPulse
          value={100}
          suffix="%"
          label="Visibilité ROI"
          description="De aveugle à transparent"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={200}
          suffix=" jours"
          prefix="+"
          label="Données Analysées"
          description="GA4 vérifiées et fiables"
          color="#8B5CF6"
        />
      </div>

      {/* Tracking Performance */}
      <div className="mt-8">
        <ComparisonChart
          title="Attribution Tracking: Avant vs Après osom"
          data={[
            { label: "Attribution Complète", value: 87, color: "#8B5CF6" },
            { label: "Sessions Non-Attribuées", value: 13, color: "#6B7280" }
          ]}
          subtitle="Récupération 14,171 sessions perdues - Valeur ROI révélée"
        />
      </div>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={94}
          label="Précision Attribution"
          color="#8B5CF6"
          description="Sources trafic"
        />
        <ProgressMeter
          percentage={98}
          label="Data Quality"
          color="#8B5CF6"
          description="Fiabilité données"
        />
        <ProgressMeter
          percentage={91}
          label="Conversion Tracking"
          color="#8B5CF6"
          description="Events précis"
        />
      </div>

      {/* Hidden Value Revealed */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#8B5CF6] mb-2">
          ROI Invisible Révélé: 14,171 Sessions Perdues
        </div>
        <div className="text-gray-400 text-sm">
          Audit tracking → Visibilité complète performances marketing
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Analytics & Tracking Valais"
      subtitle="Data Valais"
      heroDescription="Agence marketing digital Valais : révélez le ROI invisible de vos actions marketing. Expertise locale pour données vérifiables, décisions éclairées et performance optimisée."
      color="purple"
      heroMetrics={[
        {
          value: "0→100%",
          label: "Visibilité ROI",
          description: "De aveugle à transparent"
        },
        {
          value: "200+",
          label: "Jours Analysés",
          description: "Données GA4 vérifiées"
        },
        {
          value: "14,171",
          label: "Sessions Perdues",
          description: "Trafic 'Unassigned' récupéré"
        }
      ]}
      ctaText="Audit tracking gratuit Valais"
      
      methodTitle="Révélateur ROI Invisible"
      methodDescription="Expertise marketing digital Valais : transformez vos données floues en insights actionnables pour optimiser chaque franc investi sur le marché valaisan"
      processSteps={[
        {
          number: "01",
          title: "Audit Tracking Complet Valais",
          description: "Analyse configuration GA4, GTM, attribution spécifique au marché valaisan et identification gaps tracking"
        },
        {
          number: "02",
          title: "Configuration Avancée",
          description: "Setup tracking précis, events conversions, attribution multi-touch"
        },
        {
          number: "03",
          title: "Dashboard ROI Temps Réel",
          description: "Visibilité performance par canal, campagne et action marketing"
        }
      ]}
      
      proofTitle="14,171 Sessions Récupérées - ROI Révélé"
      proofContent={proofContent}
      
      featuresTitle="Suite Analytics Avancée"
      featuresDescription="Outils professionnels pour tracking précis et décisions data-driven"
      features={[
        {
          icon: "",
          title: "Google Analytics 4 Pro Valais",
          description: "Configuration complète adaptée au marché valaisan, events personnalisés - 98% data quality"
        },
        {
          icon: "",
          title: "Attribution Multi-Touch",
          description: "Tracking parcours client complet - 94% précision attribution"
        },
        {
          icon: "",
          title: "GTM Configuration",
          description: "Google Tag Manager optimisé - Tracking sans erreur technique"
        },
        {
          icon: "",
          title: "Dashboard Temps Réel Valais",
          description: "Visualisation ROI par canal avec expertise locale - Décisions éclairées pour entreprises valaisannes"
        },
        {
          icon: "",
          title: "Automatisation Reporting",
          description: "Reports automatisés - Gain temps 85% vs reporting manuel"
        },
        {
          icon: "",
          title: "GDPR Compliant",
          description: "Tracking respectueux données - Conformité légale 100% garantie"
        }
      ]}
      
      pricingTitle="Analytics osom Pro"
      price="2900 CHF"
      pricingDescription="Audit + Setup + Dashboard + Formation"
      pricingFeatures={[
        "Audit tracking complet",
        "GA4 + GTM configuration",
        "Dashboard personnalisé",
        "Attribution multi-touch",
        "Formation équipe",
        "Support 3 mois"
      ]}
      finalCtaText="Révéler mon ROI invisible Valais"
    />
  )
}