import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { ROIVisualization, ComparisonChart, MetricsPulse, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export default function PaidMediaGrowthPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Organic vs Paid Performance */}
      <GraphiqueLinear
        title="Organic vs Paid Performance"
        subtitle="Culture Peinture - Révolution marketing 140x supérieur"
        primaryMetric={{
          label: "Stratégie Organique OSOM",
          value: "688 conversions",
          color: "#EAB308"
        }}
        secondaryMetric={{
          label: "Publicité Payante",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Révolution",
          value: "140x plus efficace"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* ROI Visualization - Organic vs Paid */}
      <ROIVisualization
        multiplier={140}
        beforeValue={49}
        afterValue={688}
        label="Efficacité Organique vs Payant"
        color="#ffd507"
        description="Culture Peinture - Conversions sur 6 mois"
      />

      {/* Metrics Pulse - Cost Reduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MetricsPulse
          value={99.3}
          suffix="%"
          label="Réduction Coût Acquisition"
          description="vs publicité payante traditionnelle"
          color="#ffd507"
        />
        <MetricsPulse
          value={4693}
          suffix="%"
          label="ROI Supérieur"
          description="Stratégie organique Culture Peinture"
          color="#ffd507"
        />
      </div>

      {/* Comparison Chart */}
      <div className="mt-8">
        <ComparisonChart
          title="Conversion Organique vs Payante - Culture Peinture"
          data={[
            { label: "Stratégie Organique OSOM", value: 688, color: "#ffd507" },
            { label: "Publicité Payante", value: 49, color: "#6B7280" }
          ]}
          subtitle="Données GA4 - 6 mois d'analyse comparative"
        />
      </div>

      {/* Performance Summary */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#ffd507] mb-2">
          140x Plus Performant que la Pub Payante
        </div>
        <div className="text-gray-400 text-sm">
          Culture Peinture: 688 conversions organiques vs 49 payantes (même période)
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplate
      title="Paid Media & Growth"
      subtitle="Growth"
      heroDescription="Stratégie organique 140x plus performante que la publicité payante. Conversions durables et coût d'acquisition réduit de 99.3%."
      color="yellow"
      heroMetrics={[
        {
          value: "140x",
          label: "Plus Efficace",
          description: "Que publicité payante"
        },
        {
          value: "99.3%",
          label: "Coût Réduit",
          description: "vs acquisition payante"
        },
        {
          value: "688",
          label: "Conversions",
          description: "vs 49 ads payantes"
        }
      ]}
      ctaText="Révolutionner mon acquisition"
      
      methodTitle="Révolution Growth Organique"
      methodDescription="Pourquoi dépenser en publicité quand l'organique génère 140x plus de conversions ?"
      processSteps={[
        {
          number: "🎯",
          title: "Audit Concurrentiel",
          description: "Analyse des gaps d'acquisition et opportunités organiques cachées"
        },
        {
          number: "🚀",
          title: "Stratégie Organique",
          description: "Développement écosystème content + SEO pour croissance durable"
        },
        {
          number: "📊",
          title: "Optimisation Continue",
          description: "Suivi performances et réinvestissement gains dans croissance organique"
        }
      ]}
      
      proofTitle="Culture Peinture: 140x ROI Prouvé"
      proofContent={proofContent}
      
      featuresTitle="Services Growth Révolutionnaires"
      featuresDescription="Abandonnons la publicité payante pour la croissance organique durable"
      features={[
        {
          icon: "🎯",
          title: "Growth Hacking Organique",
          description: "Stratégies viral + SEO + content pour croissance exponentielle naturelle"
        },
        {
          icon: "📊",
          title: "Analytics Avancée",
          description: "Tracking conversions organiques vs payantes - ROI transparent en temps réel"
        },
        {
          icon: "🚀",
          title: "Acquisition Durable",
          description: "Clients acquis organiquement = LTV 300% supérieure vs payant"
        },
        {
          icon: "💡",
          title: "Content Viral",
          description: "Création contenus organiques qui génèrent plus que les ads payantes"
        },
        {
          icon: "🔄",
          title: "Funnel Organique",
          description: "Parcours client naturel optimisé pour conversion automatique"
        },
        {
          icon: "📈",
          title: "Scaling Sans Limites",
          description: "Croissance organique infinie sans augmenter budgets publicitaires"
        }
      ]}
      
      pricingTitle="Growth OSOM Revolution"
      price="4500 CHF"
      pricingDescription="Stratégie + Exécution + Suivi 12 mois"
      pricingFeatures={[
        "Audit acquisition complète",
        "Stratégie growth organique",
        "Content viral mensuel",
        "SEO growth optimisé",
        "Analytics & optimisation",
        "Support growth 12 mois"
      ]}
      finalCtaText="Abandonner la pub payante maintenant"
    />
  )
}