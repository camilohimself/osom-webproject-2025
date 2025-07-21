import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export default function IdentiteDesignPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Brand Asset Value */}
      <GraphiqueLinear
        title="Brand Asset Generation"
        subtitle="Culture Peinture - Mesure d'impact sur la valeur de marque"
        primaryMetric={{
          label: "Asset Créé OSOM",
          value: "95K CHF value",
          color: "#8B5CF6"
        }}
        secondaryMetric={{
          label: "Investissement",
          value: "3.5K CHF cout",
          color: "#6B7280"
        }}
        improvement={{
          label: "ROI Brand",
          value: "27x retour investissement"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-purple-400/20 rounded-2xl"
      />

      {/* Asset Value Counter - Brand Value */}
      <AssetValueCounter
        value={95000}
        currency="CHF"
        label="Valeur Brand Asset Créée"
        description="Culture Peinture - Équivalent publicité payante"
        color="#8B5CF6"
        duration={3000}
      />

      {/* Metrics Pulse - Organic Reach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MetricsPulse
          value={2.4}
          suffix="M"
          label="Impressions Organiques"
          description="Visibilité sur 6 mois"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={67}
          suffix="%"
          label="Reconnaissance Brand"
          description="Notoriété marque Valais"
          color="#8B5CF6"
        />
      </div>

      {/* Progress Meters - Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={90}
          label="Temps Engagement"
          color="#8B5CF6"
          comparison={{
            label: "Industrie",
            percentage: 35
          }}
          description="67.5s vs 21.3s"
        />
        <ProgressMeter
          percentage={78}
          label="Brand Recall"
          color="#8B5CF6"
          description="Après 1 exposition"
        />
        <ProgressMeter
          percentage={85}
          label="Share Rate"
          color="#8B5CF6"
          comparison={{
            label: "Standard",
            percentage: 15
          }}
          description="12.8% contenu viral"
        />
      </div>

      {/* Impact Summary */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#8B5CF6] mb-2">
          Impact Mesurable Culture Peinture
        </div>
        <div className="text-gray-400 text-sm">
          Formation 60+ avec identité visuelle forte → Reach 2.4M sur 6 mois
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Identité & Design"
      subtitle="Design"
      heroDescription="Créons une identité visuelle qui marque les esprits et génère de la confiance instantanée avec des résultats mesurables."
      color="purple"
      heroMetrics={[
        {
          value: "+67%",
          label: "Reconnaissance",
          description: "Identité cohérente multi-canal"
        },
        {
          value: "2.4M",
          label: "Impressions",
          description: "Visibilité brand Culture Peinture"
        },
        {
          value: "95K CHF",
          label: "Valeur Créée",
          description: "Asset brand généré"
        }
      ]}
      ctaText="Créer mon identité de marque"
      
      methodTitle="Design System Complet"
      methodDescription="De la conception du logo à l'identité digitale complète, nous créons des marques mémorables"
      processSteps={[
        {
          number: "01",
          title: "Découverte",
          description: "Analyse de votre marché, concurrence, positionnement unique et objectifs business"
        },
        {
          number: "02",
          title: "Concept",
          description: "Création de 3 directions créatives alignées sur vos objectifs et votre audience"
        },
        {
          number: "03",
          title: "Réalisation",
          description: "Développement complet de l'identité et déclinaisons pour tous supports"
        },
        {
          number: "04",
          title: "Déploiement",
          description: "Livraison des assets et guide d'utilisation pour cohérence 360°"
        }
      ]}
      
      proofTitle="Cas Culture Peinture - ROI Mesurable"
      proofContent={proofContent}
      
      featuresTitle="Services Design Complets"
      featuresDescription="Identité visuelle forte pour impact maximum sur votre marché"
      features={[
        {
          icon: "🎨",
          title: "Logo & Identité",
          description: "Création de logo, charte graphique, déclinaisons - Design unique & mémorable"
        },
        {
          icon: "📱",
          title: "UI/UX Design",
          description: "Interface utilisateur optimisée conversion - +45% engagement moyen"
        },
        {
          icon: "🖼️",
          title: "Supports Print",
          description: "Cartes visite, brochures, signalétique - Cohérence 360° garantie"
        },
        {
          icon: "📊",
          title: "Infographies",
          description: "Visualisation de données impactante - +78% partages sociaux moyens"
        },
        {
          icon: "🎬",
          title: "Motion Design",
          description: "Animations, vidéos, Reels - Content viral-ready pour réseaux sociaux"
        },
        {
          icon: "📋",
          title: "Brand Guidelines",
          description: "Guide d'utilisation complet - Manuel de marque pour équipes"
        }
      ]}
      
      pricingTitle="Identité OSOM Formula"
      price="3500 CHF"
      pricingDescription="Logo + Charte + Déclinaisons + Guidelines"
      pricingFeatures={[
        "Logo & variations",
        "Charte graphique complète",
        "Supports print & digital",
        "Motion design assets",
        "Brand guidelines",
        "Formation équipe"
      ]}
      finalCtaText="Créer ma signature visuelle"
    />
  )
}