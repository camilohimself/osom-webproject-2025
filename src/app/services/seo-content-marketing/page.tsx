import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { ComparisonChart, ProgressMeter, ROIVisualization, AssetValueCounter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export default function SEOContentMarketingPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Style Linear avec données réelles */}
      <GraphiqueLinear
        title="Engagement Quality Impact"
        subtitle="Artisane de Lumière - 200+ jours d'analyse GA4 temps réel"
        primaryMetric={{
          label: "Trafic SEO OSOM",
          value: "68.6% engagement",
          color: "#06B6D4"
        }}
        secondaryMetric={{
          label: "Trafic Direct",
          value: "44.6% engagement", 
          color: "#6B7280"
        }}
        improvement={{
          label: "Qualité Supérieure",
          value: "+54% plus qualifié"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-cyan-400/20 rounded-2xl"
      />

      {/* ROI Visualization - Gérance Swiss */}
      <ROIVisualization
        multiplier={397}
        beforeValue={0.07}
        afterValue={28.35}
        label="Potentiel SEO Révélé"
        color="#70c1a9"
        description="Audit Gérance Swiss - Visibilité vs concurrent leader"
      />

      {/* Asset Value Counter */}
      <div className="mt-8">
        <AssetValueCounter
          value={22}
          currency=""
          label="Mots-Clés Commerciaux Manqués"
          description="Révélés par audit externe exclusivement"
          color="#70c1a9"
          suffix=" keywords"
          duration={2000}
        />
      </div>

      {/* Performance Meter */}
      <div className="pt-6 border-t border-gray-700">
        <ProgressMeter
          percentage={78}
          label="Amélioration Trafic Organique"
          color="#70c1a9"
          comparison={{
            label: "Avant optimisation",
            percentage: 25
          }}
          description="Content marketing + SEO technique"
        />
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="SEO & Content Marketing"
      subtitle="Marketing"
      heroDescription="Notre diagnostic SEO révèle les opportunités cachées. Trafic qualifié supérieur garanti avec méthodes éprouvées."
      color="cyan"
      heroMetrics={[
        {
          value: "397x",
          label: "Potentiel Révélé",
          description: "vs concurrents sans GA4/GSC"
        },
        {
          value: "68.6%",
          label: "Engagement SEO",
          description: "vs 44.6% trafic direct"
        },
        {
          value: "22",
          label: "Mots-Clés Manqués", 
          description: "Audit externe exclusivement"
        }
      ]}
      ctaText="Audit SEO gratuit"
      
      methodTitle="Diagnostic Révélateur"
      methodDescription="Notre audit externe révèle les gaps invisibles même sans accès GA4/GSC"
      processSteps={[
        {
          number: "🔍",
          title: "Audit Externe",
          description: "Analyse sans accès GA4/GSC révèle gaps invisibles des propriétaires"
        },
        {
          number: "⚡",
          title: "Benchmarking Concurrentiel", 
          description: "Comparaison précise avec leaders du secteur, potentiel quantifié"
        },
        {
          number: "🎯",
          title: "Opportunités Cachées",
          description: "22 mots-clés commerciaux non exploités révélés par analyse externe"
        }
      ]}
      
      proofTitle="Cas d'Études Mesurables"
      proofContent={proofContent}
      
      featuresTitle="Services SEO Complets"
      featuresDescription="De l'audit à l'optimisation, tout pour dominer votre secteur"
      features={[
        {
          icon: "🔍",
          title: "Audit SEO Technique",
          description: "Diagnostic complet de 150+ points techniques - Rapport détaillé 48h"
        },
        {
          icon: "🎯",
          title: "Recherche Mots-Clés", 
          description: "Analyse secteur + concurrence + opportunités - 500+ keywords analysés"
        },
        {
          icon: "✍️",
          title: "Content Marketing",
          description: "Création contenu optimisé conversion - +78% trafic organique moyen"
        },
        {
          icon: "🔗",
          title: "Link Building",
          description: "Stratégie backlinks haute autorité - White-hat exclusivement"
        },
        {
          icon: "📱",
          title: "SEO Local",
          description: "Optimisation Google My Business + citations - Domination locale Valais"
        },
        {
          icon: "📊",
          title: "Analytics & Reporting",
          description: "Dashboard temps réel + rapports mensuels - ROI transparent"
        }
      ]}
      
      pricingTitle="SEO OSOM Formula"
      price="2500 CHF"
      pricingDescription="Audit + Stratégie + Content + Suivi 6 mois"
      pricingFeatures={[
        "Audit technique complet",
        "Recherche mots-clés approfondie", 
        "Content marketing mensuel",
        "Link building éthique",
        "SEO local optimisé",
        "Reporting mensuel ROI"
      ]}
      finalCtaText="Dominer mon secteur sur Google"
    />
  )
}