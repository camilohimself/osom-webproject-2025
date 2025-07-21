import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { ComparisonChart, ProgressMeter, ROIVisualization, AssetValueCounter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata = {
  title: 'Agence SEO Valais | Marketing Digital & Content - osom',
  description: 'Agence marketing Valais expert SEO. Audit gratuit, position 21.67 → page 1, 68.6% engagement supérieur. Domination locale Valais garantie.',
  keywords: 'agence seo valais, marketing digital valais, seo valais, agence marketing valais, audit seo, content marketing valais'
}

export default function SEOContentMarketingPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Style Linear avec données réelles */}
      <GraphiqueLinear
        title="SEO Valais Performance Impact"
        subtitle="Artisane de Lumière Valais - 200+ jours GA4 marché local"
        primaryMetric={{
          label: "SEO Valais osom",
          value: "68.6% engagement",
          color: "#06B6D4"
        }}
        secondaryMetric={{
          label: "Trafic Direct Valais",
          value: "44.6% engagement", 
          color: "#6B7280"
        }}
        improvement={{
          label: "Avantage Local",
          value: "+54% marché Valais"
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
      title="SEO & Content Marketing Valais"
      subtitle="Agence Marketing Valais"
      heroDescription="Agence SEO Valais expert : notre diagnostic révèle les opportunités cachées du marché local. Trafic qualifié 68.6% supérieur, domination Valais garantie."
      color="cyan"
      heroMetrics={[
        {
          value: "397x",
          label: "Potentiel Valais Révélé",
          description: "vs concurrents marché local"
        },
        {
          value: "68.6%",
          label: "Engagement SEO Valais",
          description: "vs 44.6% trafic direct"
        },
        {
          value: "22",
          label: "Mots-Clés Valais Manqués", 
          description: "Opportunités locales cachées"
        }
      ]}
      ctaText="Audit SEO gratuit"
      
      methodTitle="Diagnostic Révélateur"
      methodDescription="Notre audit externe révèle les gaps invisibles même sans accès GA4/GSC"
      processSteps={[
        {
          number: "01",
          title: "Audit Externe Valais",
          description: "Analyse sans accès GA4/GSC révèle gaps marché local - 397x potentiel vs leaders Valais"
        },
        {
          number: "02",
          title: "Benchmarking Concurrents Valais", 
          description: "Comparaison précise avec leaders secteur Sion/Martigny - Position 21.67 analysée"
        },
        {
          number: "03",
          title: "Mots-Clés Valais Cachés",
          description: "22 keywords commerciaux locaux non exploités - 'agence marketing valais' à 6 positions Page 1"
        }
      ]}
      
      proofTitle="Cas d'Études Mesurables"
      proofContent={proofContent}
      
      featuresTitle="Services SEO Complets"
      featuresDescription="De l'audit à l'optimisation, tout pour dominer votre secteur"
      features={[
        {
          icon: "",
          title: "Audit SEO Technique",
          description: "Diagnostic complet de 150+ points techniques - Rapport détaillé 48h"
        },
        {
          icon: "",
          title: "Recherche Mots-Clés", 
          description: "Analyse secteur + concurrence + opportunités - 500+ keywords analysés"
        },
        {
          icon: "",
          title: "Content Marketing",
          description: "Création contenu optimisé conversion - +78% trafic organique moyen"
        },
        {
          icon: "",
          title: "Link Building",
          description: "Stratégie backlinks haute autorité - White-hat exclusivement"
        },
        {
          icon: "",
          title: "SEO Local Valais",
          description: "Domination marché Valais : GMB optimisé + citations locales Sion/Martigny/Monthey - Position 21.67 → Page 1"
        },
        {
          icon: "",
          title: "Analytics & Reporting",
          description: "Dashboard temps réel + rapports mensuels - ROI transparent"
        }
      ]}
      
      pricingTitle="SEO Valais Formula"
      price="2500 CHF"
      pricingDescription="Domination locale Valais : Audit + Stratégie + Content + Suivi 6 mois"
      pricingFeatures={[
        "Audit technique Valais complet",
        "Keywords locaux Sion/Martigny/Monthey", 
        "Content marketing Valais mensuel",
        "Link building autorités locales",
        "SEO local Valais optimisé",
        "ROI marché Valais transparent"
      ]}
      finalCtaText="Dominer le marché Valais sur Google"
    />
  )
}