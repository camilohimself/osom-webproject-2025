import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'

export default function CreationSiteWebPage() {
  const proofContent = (
    <div className="space-y-6">
      {/* Metrics with Dynamic Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <MetricsPulse
          value={11.3}
          suffix="%"
          label="Taux de Conversion OSOM"
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

      {/* Comparison Chart */}
      <ComparisonChart
        title="Performance Sites OSOM vs Traditionnels"
        data={[
          { label: "Sites OSOM", value: 688, color: "#10B981" },
          { label: "Sites traditionnels", value: 49, color: "#EF4444" }
        ]}
        subtitle="Basé sur l'analyse Culture Peinture (GA4 - 200+ jours)"
      />

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
    <ServicePageTemplate
      title="Création de Sites Web"
      subtitle="Sites"
      heroDescription="Sites optimisés conversion + SEO technique. Notre approche OSOM Web génère des résultats mesurables dès la mise en ligne."
      color="yellow"
      heroMetrics={[
        {
          value: "11.3%",
          label: "Taux de Conversion",
          description: "vs 2-3% sites traditionnels"
        },
        {
          value: "1500 CHF",
          label: "OSOM Web Formula",
          description: "Site complet livré en 10 jours"
        },
        {
          value: "14x",
          label: "Plus Performant",
          description: "688 vs 49 conversions (Culture Peinture)"
        }
      ]}
      ctaText="Démarrer mon projet web"
      
      methodTitle="La Méthode OSOM"
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
          icon: "⚡",
          title: "Performance Optimale",
          description: "Score 95+ PageSpeed, temps de chargement inférieur à 2 secondes"
        },
        {
          icon: "📱", 
          title: "Responsive Design",
          description: "Parfait sur mobile, tablette et desktop avec animations fluides"
        },
        {
          icon: "🔒",
          title: "Sécurité Renforcée", 
          description: "SSL, protection DDoS, sauvegardes automatiques"
        },
        {
          icon: "📊",
          title: "Analytics Intégré",
          description: "Google Analytics 4, tracking conversions, ROI mesurable"
        },
        {
          icon: "🚀",
          title: "SEO Ready",
          description: "Structure optimisée, meta tags, sitemap automatique"
        },
        {
          icon: "⚙️",
          title: "CMS Intuitif",
          description: "Interface simple pour gérer votre contenu en autonomie"
        }
      ]}
      
      pricingTitle="OSOM Web Formula"
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
      finalCtaText="Commander mon site OSOM"
    />
  )
}