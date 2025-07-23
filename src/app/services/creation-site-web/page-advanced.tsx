import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import RevolutionaryDashboardHero from '@/components/ui/RevolutionaryDashboardHero'
import TechStackCarousel from '@/components/ui/TechStackCarousel'
import DeveloperJourneyTimeline from '@/components/ui/DeveloperJourneyTimeline'
import EngineChoice from '@/components/ui/EngineChoice'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Agence Web Valais 140x Plus Performante - 688 Clients/6 Mois | OSOM',
  description: 'Site Web VALAIS révolutionnaire : 11.3% conversion vs 2-3% industrie. 1718 recherches/mois captées. Culture Peinture : 688 vs 49 conversions. 4500 CHF, 45 jours.',
  keywords: 'création site internet valais, création site web valais, création de site internet valais, site internet valais, agence web valais, développement web valais, site web valais, création site vitrine valais'
}

// VERSION AVANCÉE - GARDÉE POUR RÉUTILISATION FUTURE
export default function CreationSiteWebAdvancedPage() {
  // HERO RÉVOLUTIONNAIRE - PDG VALAIS NON-TECHNIQUE
  const heroMetrics = [
    {
      value: "11.3%",
      label: "Plus de Prospects Automatiquement",
      description: "vs 2-3% sites traditionnels Valais",
      animatedValue: 11.3,
      suffix: "%",
      tooltip: {
        title: "Votre Site Travaille 24h/24",
        details: "Chaque visiteur a 4x plus de chances de devenir client",
        highlight: "Pendant que vous dormez, votre site vend"
      }
    },
    {
      value: "4500 CHF",
      label: "Investissement Transparent",
      description: "Site complet livré en 45 jours ouvrés",
      animatedValue: 4500,
      suffix: " CHF",
      tooltip: {
        title: "Tout Inclus - Aucun Frais Cachés",
        details: "Design + Développement + SEO + Hébergement 1 an + Formation",
        highlight: "Garantie satisfaction ou remboursement"
      }
    },
    {
      value: "140x",
      label: "Plus Performant Que Concurrence",
      description: "688 clients en 6 mois vs 49 publicité payante",
      animatedValue: 140,
      suffix: "x",
      tooltip: {
        title: "Résultat Client Réel - Culture Peinture Genève",
        details: "200+ jours de données Google Analytics vérifiées",
        highlight: "14x plus efficace que publicité payante traditionnelle"
      }
    }
  ]

  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Conversion Performance */}
      <GraphiqueLinear
        title="Résultats Client Réel"
        subtitle="Culture Peinture Genève - 200+ jours de données vérifiées"
        primaryMetric={{
          label: "Site Web OSOM",
          value: "688 clients générés",
          color: "#EAB308"
        }}
        secondaryMetric={{
          label: "Publicité payante",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Performance Supérieure",
          value: "14x plus efficace"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* Metrics with Dynamic Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricsPulse
          value={11.3}
          suffix="%"
          label="Votre Site Génère Plus de Clients"
          description="vs 2-3% sites traditionnels"
          color="#ffd507"
        />
        <MetricsPulse
          value={4693}
          suffix="%"
          label="Retour sur Investissement"
          description="Culture Peinture - 688 clients générés"
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
        title="Agence Web 140x Plus Performante"
        subtitle="688 clients générés en 6 mois - 2 places disponibles ce mois"
        description="Votre entreprise mérite plus de clients. Nous créons des sites web qui travaillent 24h/24 pour vous. Culture Peinture Genève : 688 clients générés automatiquement vs 49 avec publicité payante. Stack technique moderne : SEMrush + Google Analytics + Claude Code pour résultats mesurables."
        metrics={heroMetrics}
        ctaText="Réserver 1 des 2 Places Restantes"
        color="#ffd507"
      />

      {/* TECH STACK CAROUSEL RÉVOLUTIONNAIRE */}
      <TechStackCarousel
        title="Outils Professionnels"
        subtitle="Résultats Mesurables"
        description="Nous utilisons les mêmes outils que Google et les grandes entreprises : SEMrush pour analyser votre marché, PageSpeed pour la vitesse, Google Analytics pour mesurer vos résultats. Plus de 1718 recherches/mois captées grâce à notre expertise technique."
      />

      {/* DEVELOPER JOURNEY TIMELINE RÉVOLUTIONNAIRE */}
      <DeveloperJourneyTimeline
        title="Processus Simple en 45 Jours"
        subtitle="Semaines 1-2 : Stratégie + Design - Vous validez chaque étape. Semaines 3-4 : Développement + Tests - Transparence totale. Semaines 5-6 : SEO + Optimisation - Résultats mesurables. Semaine 7 : Formation + Lancement - Autonomie garantie."
      />

      {/* POURQUOI CES MOTEURS? - SIMPLIFICATION RÉVOLUTIONNAIRE */}
      <EngineChoice
        title="Pourquoi Nous Choisir ?"
        subtitle="Sites 3x plus rapides = moins de visiteurs qui partent. Contenu optimisé IA = 1718 recherches captées automatiquement. Suivi transparent = vous voyez vos résultats en temps réel."
      />

      {/* SECTION PRICING */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #ffd50705, transparent, #ffd50705)` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Investissement <span className="font-bold text-yellow-400">Transparent</span>
          </h2>
          
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/40 mb-12">
            <div className="text-6xl font-light text-yellow-400 mb-4">
              4500 CHF
            </div>
            <div className="text-2xl text-white mb-6">Service Complet</div>
            <div className="text-gray-300 mb-8 text-lg">
              Tout inclus, aucun frais caché. Votre site génère des prospects pendant que vous vous concentrez sur votre métier. Formation incluse pour que vous restiez autonome. Garantie satisfaction ou remboursement.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              {[
                "Design qui convertit (11.3% vs 2-3%)",
                "Mobile parfait (80% de vos clients)",
                "Google vous trouve automatiquement",
                "Résultats mesurables en temps réel", 
                "Formation pour rester autonome",
                "Livraison garantie 45 jours ouvrés"
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
            Réserver Mon Audit Gratuit →
          </Link>
        </div>
      </section>
    </div>
  )
}