import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata = {
  title: 'Création Site Internet Valais | Agence Web - osom',
  description: 'Agence web Valais spécialisée création site internet. 1500 CHF, 10 jours, 11.3% conversion vs 2.5% industrie. 688 conversions Culture Peinture.',
  keywords: 'création site internet valais, agence web valais, site web valais, développement web valais, site vitrine valais, e-commerce valais'
}

export default function CreationSiteWebPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Conversion Performance */}
      <GraphiqueLinear
        title="Performance Web Valais"
        subtitle="Culture Peinture Valais - 200+ jours GA4 marché local"
        primaryMetric={{
          label: "Site Web Valais osom",
          value: "688 conversions",
          color: "#EAB308"
        }}
        secondaryMetric={{
          label: "Publicité payante",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Avantage Local",
          value: "14x marché Valais"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* Metrics with Dynamic Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricsPulse
          value={11.3}
          suffix="%"
          label="Taux de Conversion osom"
          description="vs 2-3% sites traditionnels"
          color="#ffd507"
        />
        <MetricsPulse
          value={4693}
          suffix="%"
          label="ROI Généré"
          description="Culture Peinture - 688 conversions"
          color="#ffd507"
        />
      </div>

      {/* Engagement Quality */}
      <div className="pt-6 border-t border-gray-700">
        <ProgressMeter
          percentage={85}
          label="Score Performance Global"
          color="#ffd507"
          comparison={{
            label: "Sites standards",
            percentage: 22
          }}
          description="PageSpeed + SEO + Conversions"
        />
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Création Site Internet Valais"
      subtitle="Agence Web Valais"
      heroDescription="Agence web Valais expert création site internet. Sites optimisés conversion + SEO. 11.3% vs 2.5% industrie - Culture Peinture Valais validé."
      color="yellow"
      heroMetrics={[
        {
          value: "11.3%",
          label: "Taux de Conversion",
          description: "vs 2-3% sites traditionnels",
          animatedValue: 11.3,
          suffix: "%",
          tooltip: {
            title: "Performance Conversion Supérieure",
            details: "Sites osom optimisés pour la conversion vs sites traditionnels",
            highlight: "4x plus efficace que la moyenne industrie"
          }
        },
        {
          value: "1500 CHF",
          label: "osom Web Formula Valais",
          description: "Site Valais complet livré 10 jours",
          animatedValue: 1500,
          suffix: " CHF",
          tooltip: {
            title: "Formule Premium Tout Inclus",
            details: "Design, développement, SEO, hébergement 1 an",
            highlight: "Livraison garantie sous 10 jours ouvrés"
          }
        },
        {
          value: "140x",
          label: "Plus Performant",
          description: "688 vs 49 conversions (Culture Peinture)",
          animatedValue: 140,
          suffix: "x",
          tooltip: {
            title: "Performance Révolutionnaire Vérifiée",
            details: "Culture Peinture Valais - Case Study Complet GA4",
            highlight: "688 conversions organiques vs 49 publicité payante"
          }
        }
      ]}
      ctaText="Démarrer mon projet web"
      
      methodTitle="Méthode Web Valais osom"
      methodDescription="Sites internet Valais conçus pour dominer le marché local. Performance 11.3% vs 2.5% industrie validée."
      processSteps={[
        {
          number: "01",
          title: "Architecture Conversion Valais",
          description: "Design adapté marché Valais, UX optimisée clients locaux Sion/Martigny/Monthey"
        },
        {
          number: "02", 
          title: "SEO Local Valais Intégré",
          description: "Structure technique + SEO local Valais, vitesse optimisée, GA4 marché local"
        },
        {
          number: "03",
          title: "Technologies Modernes", 
          description: "Next.js, React, optimisation mobile-first et performances maximales"
        }
      ]}
      
      proofTitle="Preuve d'Impact Mesurable"
      proofContent={proofContent}
      
      featuresTitle="Technologies Premium"
      featuresDescription="Stack technique moderne pour des performances maximales"
      features={[
        {
          icon: "",
          title: "Performance Optimale",
          description: "Score 95+ PageSpeed, temps de chargement inférieur à 2 secondes"
        },
        {
          icon: "", 
          title: "Responsive Design",
          description: "Parfait sur mobile, tablette et desktop avec animations fluides"
        },
        {
          icon: "",
          title: "Sécurité Renforcée", 
          description: "SSL, protection DDoS, sauvegardes automatiques"
        },
        {
          icon: "",
          title: "Analytics Intégré",
          description: "Google Analytics 4, tracking conversions, ROI mesurable"
        },
        {
          icon: "",
          title: "SEO Ready",
          description: "Structure optimisée, meta tags, sitemap automatique"
        },
        {
          icon: "",
          title: "CMS Intuitif",
          description: "Interface simple pour gérer votre contenu en autonomie"
        }
      ]}
      
      pricingTitle="osom Web Formula Valais"
      price="1500 CHF"
      pricingDescription="Site Internet Valais : Design + Développement + SEO Local + Analytics + Formation"
      pricingFeatures={[
        "Design adapté marché Valais",
        "Mobile-first Suisse",
        "SEO local Valais optimisé",
        "GA4 marché local configuré", 
        "Formation création contenu",
        "Livraison Valais 10 jours"
      ]}
      finalCtaText="Commander mon site web Valais"
    />
  )
}