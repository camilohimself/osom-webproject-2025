import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export default function CreationSiteWebPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Conversion Performance */}
      <GraphiqueLinear
        title="Conversion Performance"
        subtitle="Culture Peinture - Données GA4 vérifiées sur 200+ jours"
        primaryMetric={{
          label: "Sites osom",
          value: "688 conversions",
          color: "#EAB308"
        }}
        secondaryMetric={{
          label: "Publicité payante",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Performance",
          value: "14x supérieur"
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
      title="Création de Sites Web"
      subtitle="Sites"
      heroDescription="Sites optimisés conversion + SEO technique. Notre approche osom Web génère des résultats mesurables dès la mise en ligne."
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
          label: "osom Web Formula",
          description: "Site complet livré en 10 jours",
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
      
      methodTitle="La Méthode osom"
      methodDescription="Chaque site est conçu pour maximiser les conversions et performer en SEO dès le lancement"
      processSteps={[
        {
          number: "01",
          title: "Architecture Conversion",
          description: "Design centré sur l'expérience utilisateur et l'optimisation du parcours client"
        },
        {
          number: "02", 
          title: "SEO Technique Intégré",
          description: "Structure optimisée, vitesse de chargement, et tracking GA4 configuré"
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
      
      pricingTitle="osom Web Formula"
      price="1500 CHF"
      pricingDescription="Design + Développement + SEO + Analytics + Formation"
      pricingFeatures={[
        "Design sur mesure",
        "Responsive mobile",
        "SEO optimisé",
        "Analytics configuré", 
        "Formation incluse",
        "Livraison 10 jours"
      ]}
      finalCtaText="Commander mon site osom"
    />
  )
}