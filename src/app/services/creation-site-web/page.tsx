import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import RevolutionaryDashboardHero from '@/components/ui/RevolutionaryDashboardHero'
import TechStackCarousel from '@/components/ui/TechStackCarousel'
import DeveloperJourneyTimeline from '@/components/ui/DeveloperJourneyTimeline'
import EngineChoice from '@/components/ui/EngineChoice'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Création Site Internet Valais - 1718 Recherches/Mois | OSOM N°1',
  description: 'Création Site Internet VALAIS : 1718 recherches/mois → Expertise N°1 confirmée. Agence web Valais révolutionnaire : 11.3% conversion vs 2-3% industrie. 1500 CHF, 10 jours.',
  keywords: 'création site internet valais, création site web valais, création de site internet valais, site internet valais, agence web valais, développement web valais, site web valais, création site vitrine valais'
}

export default function CreationSiteWebPage() {
  // Données pour le hero révolutionnaire
  const heroMetrics = [
    {
      value: "11.3%",
      label: "Taux de Conversion OSOM",
      description: "vs 2-3% sites traditionnels",
      animatedValue: 11.3,
      suffix: "%",
      tooltip: {
        title: "Performance Conversion Supérieure",
        details: "Sites OSOM optimisés pour la conversion vs sites traditionnels",
        highlight: "4x plus efficace que la moyenne industrie"
      }
    },
    {
      value: "4500 CHF",
      label: "OSOM Web Formula VALAIS",
      description: "Site VALAIS complet livré 45 jours",
      animatedValue: 4500,
      suffix: " CHF",
      tooltip: {
        title: "Formule Premium Tout Inclus",
        details: "Design, développement, SEO, hébergement 1 an",
        highlight: "Livraison garantie sous 45 jours ouvrés"
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
        details: "Culture Peinture VALAIS - Case Study Complet GA4",
        highlight: "688 conversions organiques vs 49 publicité payante"
      }
    }
  ]

  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Conversion Performance */}
      <GraphiqueLinear
        title="Performance Web VALAIS"
        subtitle="Culture Peinture VALAIS - 200+ jours GA4 marché local"
        primaryMetric={{
          label: "Site Web VALAIS OSOM",
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
          value: "14x marché VALAIS"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* Metrics with Dynamic Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    <div className="min-h-screen bg-black">
      {/* HÉRO RÉVOLUTIONNAIRE DASHBOARD */}
      <RevolutionaryDashboardHero
        title="RÉVOLUTION Site Web VALAIS × CLAUDE IA"
        subtitle="Agence Web N°1"
        description="Spécialiste création site internet Valais : 1718 recherches mensuelles confirment notre expertise N°1. Agence web Valais révolutionnaire avec SEO Valais intégré. Architecture Next.js + TypeScript + Claude IA. 11.3% conversion vs 2-3% industrie dès nos premiers projets valaisans."
        metrics={heroMetrics}
        ctaText="Démarrer mon projet web"
        color="#ffd507"
      />

      {/* TECH STACK CAROUSEL RÉVOLUTIONNAIRE */}
      <TechStackCarousel
        title="Tech Stack Révolutionnaire"
        subtitle="Méthode OSOM"
        description="Agence web Valais nouvelle génération : Stack moderne Next.js 14 + TypeScript + Claude IA maîtrisé à fond. Code snippets interactifs, preview live, animations fluides. Expertise technique révolutionnaire pour projets web VALAIS."
      />

      {/* DEVELOPER JOURNEY TIMELINE RÉVOLUTIONNAIRE */}
      <DeveloperJourneyTimeline
        title="Processus Développement"
        subtitle="Journey révolutionnaire de conception à livraison : UX Psychology + SEO Valais + Performance Beast. 10 jours pour révolutionner votre présence web avec métriques vérifiées."
      />

      {/* POURQUOI CES MOTEURS? - SIMPLIFICATION RÉVOLUTIONNAIRE */}
      <EngineChoice
        title="Pourquoi ces"
        subtitle="Chaque technologie choisie pour une raison précise : votre succès. Explications simples, résultats mesurables."
      />

      {/* SECTION PRICING */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #ffd50705, transparent, #ffd50705)` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Création site internet Valais - <span className="font-bold text-yellow-400">OSOM Formula</span>
          </h2>
          
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/40 mb-12">
            <div className="text-6xl font-light text-yellow-400 mb-4">
              4500 CHF
            </div>
            <div className="text-2xl text-white mb-6">Service Complet</div>
            <div className="text-gray-300 mb-8 text-lg">
              Agence web Valais formule premium : Création site internet Valais complète avec SEO Valais intégré. Design + Développement Next.js + SEO local + Analytics + Formation. Spécialistes création site internet Valais, livraison garantie 45 jours.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              {[
                "Design adapté marché VALAIS",
                "Mobile-first Suisse",
                "SEO local VALAIS optimisé",
                "GA4 marché local configuré", 
                "Formation création contenu + stratégie ",
                "Livraison VALAIS 45 jours"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl text-black"
            style={{ background: 'linear-gradient(135deg, #ffd507, #ffd507dd)' }}
          >
            démarrer mon projet web premium →
          </Link>
        </div>
      </section>
    </div>
  )
}