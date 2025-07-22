import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ProgressMeter, ComparisonChart, AssetValueCounter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Marketing Automation Obsessionnelle VALAIS | CRM Setup - osom',
  description: 'Jeunes experts automation VALAIS obsessés par l\'efficacité. +78% conversions, -65% temps manuel dès premiers setups. HubSpot, Pipedrive, ActiveCampaign maîtrisés. Setup technique parfait.',
  keywords: 'marketing automation valais, crm setup technique, hubspot expert, pipedrive automation, activecampaign valais, automation obsessionnelle, crm technique suisse',
  openGraph: {
    title: 'Marketing Automation Technique | +78% Conversions VALAIS',
    description: 'Setup automation obsessionnel : +78% conversions, -65% temps manuel. Expertise technique CRM moderne.',
    type: 'website',
  }
}

export default function MarketingAutomationCRMPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Automation Performance */}
      <GraphiqueLinear
        title="Automation Performance"
        subtitle="Funnel automatisé - Impact sur conversion et temps manuel"
        primaryMetric={{
          label: "Funnel Automatisé osom",
          value: "+78% conversions",
          color: "#10B981"
        }}
        secondaryMetric={{
          label: "Processus Manuel",
          value: "Baseline 22%",
          color: "#6B7280"
        }}
        improvement={{
          label: "Efficacité",
          value: "-65% temps manuel"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-green-400/20 rounded-2xl"
      />

      {/* Conversion Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricsPulse
          value={78}
          suffix="%"
          prefix="+"
          label="Amélioration Conversions"
          description="Nurturing automatisé vs manuel"
          color="#70c1a9"
        />
        <MetricsPulse
          value={65}
          suffix="%"
          prefix="-"
          label="Réduction Temps Manuel"
          description="Processus automatisés"
          color="#70c1a9"
        />
      </div>

      {/* Lifetime Value Increase */}
      <div className="mt-8">
        <AssetValueCounter
          value={320}
          currency=""
          suffix="%"
          label="Augmentation Valeur Client"
          description="Lifetime Value grâce à l'automatisation"
          color="#70c1a9"
          duration={2500}
        />
      </div>

      {/* Performance Comparison */}
      <div className="mt-8">
        <ComparisonChart
          title="Performance Funnel: Automatisé vs Manuel"
          data={[
            { label: "Funnel Automatisé osom", value: 78, color: "#70c1a9" },
            { label: "Processus Manuel", value: 22, color: "#6B7280" }
          ]}
          subtitle="Taux de conversion prospect → client"
        />
      </div>

      {/* Automation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={92}
          label="Email Automation"
          color="#70c1a9"
          description="Taux d'ouverture"
        />
        <ProgressMeter
          percentage={87}
          label="Lead Scoring"
          color="#70c1a9"
          description="Précision qualification"
        />
        <ProgressMeter
          percentage={94}
          label="CRM Integration"
          color="#70c1a9"
          description="Data synchronisation"
        />
      </div>

      {/* Summary */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#70c1a9] mb-2">
          Système Automatisé = 3.2x Plus de Valeur
        </div>
        <div className="text-gray-400 text-sm">
          Conversion +78%, Temps -65%, Lifetime Value +220%
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Marketing Automation Obsessionnelle"
      subtitle="setup technique parfait"
      heroDescription="Jeunes experts automation obsessés par l'efficacité technique. HubSpot, Pipedrive, ActiveCampaign setup parfait. +78% conversions dès nos premiers clients. Pas d'expérience de masse, mais maîtrise technique complète des outils."
      color="cyan"
      heroMetrics={[
        {
          value: "+78%",
          label: "Taux Conversion",
          description: "Nurturing automatisé"
        },
        {
          value: "-65%",
          label: "Temps Manuel",
          description: "Processus automatisés"
        },
        {
          value: "3.2x",
          label: "Valeur Client",
          description: "Lifetime value améliorée"
        }
      ]}
      ctaText="Automatiser mes conversions en VALAIS"
      
      methodTitle="setup automation obsessionnel"
      methodDescription="Obsession technique automation : chaque workflow pensé, testé, optimisé. Setup CRM moderne avec triggers intelligents, sequences comportementales, scoring prédictif. Jeunes experts tools passionés par la performance mesurable. Résultats immédiats : automation qui fonctionne vraiment."
      processSteps={[
        {
          number: "01",
          title: "audit funnel technique obsessionnel",
          description: "Analyse complète 50+ points friction, mapping customer journey, identification gaps automation. Détection opportunités invisibles avec outils pro."
        },
        {
          number: "02",
          title: "setup crm & automation parfait",
          description: "Configuration experte HubSpot/Pipedrive : triggers intelligents, sequences comportementales, scoring prédictif, workflows multi-touch. Setup qui fonctionne vraiment."
        },
        {
          number: "03",
          title: "optimisation performance continue",
          description: "A/B testing automatisé, analytics comportementaux, machine learning optimization. Amélioration permanente mesurée au % près."
        }
      ]}
      
      proofTitle="preuves automation technique"
      proofContent={proofContent}
      
      featuresTitle="stack automation moderne"
      featuresDescription="Maîtrise complète des outils automation leaders : HubSpot, Pipedrive, ActiveCampaign, Zapier, Make. Setup technique obsessionnel avec mesure permanente performance. Pas de bricolage, que de la config pro."
      features={[
        {
          icon: "",
          title: "email automation sequences expertes",
          description: "ActiveCampaign/HubSpot maîtrisé : triggers comportementaux, segmentation dynamique, personalisation avancée. +92% open rates via optimisation obsessionnelle."
        },
        {
          icon: "",
          title: "lead scoring prédictif intelligent",
          description: "Configuration scoring multidimensionnel : engagement + fit + comportement + timing. Machine learning pour prédiction conversion. 87% accuracy prouvee."
        },
        {
          icon: "",
          title: "workflows omnichannel orchestrés",
          description: "Zapier/Make integration : email + SMS + retargeting + social media coordonnés. Customer journey fluide cross-plateforme."
        },
        {
          icon: "",
          title: "crm sync & data management parfait",
          description: "HubSpot/Pipedrive setup : data hygiene, deduplication, field mapping, API sync temps réel. 94% data accuracy maintenue."
        },
        {
          icon: "",
          title: "chatbot & ai qualification 24/7",
          description: "Setup intelligent : qualification automatique, routing contextualisé, escalation rules. AI pour premier niveau support sans friction."
        },
        {
          icon: "",
          title: "analytics automation avancées",
          description: "Dashboard custom : attribution multi-touch, cohort analysis, LTV prediction, ROI par workflow. Métriques qui comptent vraiment."
        }
      ]}
      
      pricingTitle="automation setup premium"
      price="8900 CHF"
      pricingDescription="Setup automation premium HubSpot/Pipedrive expert : Configuration technique obsessionnelle + Formation équipe + Optimisation continue 6 mois. +78% conversions garanties."
      pricingFeatures={[
        "CRM setup technique expert (HubSpot/Pipedrive)",
        "Email sequences comportementales avancées",
        "Lead scoring prédictif + machine learning",
        "Workflows omnichannel orchestrés",
        "AI chatbot + qualification intelligente", 
        "Formation obsessionnelle + support 6 mois"
      ]}
      
      faqTitle="Questions Fréquentes - Setup Automation Obsessionnel"
      faqItems={[
        {
          question: "Comment garantissez-vous +78% conversions et -65% temps manuel dès le setup alors que vous êtes jeunes ?",
          answer: "Obsession technique pure : on maîtrise HubSpot, Pipedrive, ActiveCampaign à fond, pas en surface. +78% conversions = setup triggers comportementaux précis + sequences testées + scoring prédictif. -65% temps = automation workflows intelligence vs processus manuels. Pas d'expérience de masse, mais expertise tools moderne supérieure aux méthodes obsolètes. Résultats immédiats car setup technique parfait dès premier projet."
        },
        {
          question: "Maîtrisez-vous vraiment HubSpot, Pipedrive, ActiveCampaign ou c'est du marketing ?",
          answer: "Maîtrise technique complète prouvable : certifications HubSpot (Sales, Marketing, Service), Pipedrive advanced user, ActiveCampaign automation expert. Setup custom fields, triggers multi-conditions, API integrations, webhook automation, advanced segmentation. Pas de surface, que de la config experte. Demo live sur demande : on setup votre automation en direct pour prouver notre niveau technique."
        },
        {
          question: "3900 CHF pour un setup CRM, c'est justifié par rapport aux solutions DIY ou freelances ?",
          answer: "3900 CHF = setup professionnel vs bricolage amateur. Inclus : audit 50+ points, config experte multi-outils, workflows comportementaux, lead scoring prédictif, formation équipe, support 6 mois. DIY = 200h learning curve + erreurs coûteuses. Freelances = config basique sans vision système. Notre setup génère +78% conversions pendant des années. ROI récupéré en 2-3 mois via efficacité accrue."
        },
        {
          question: "Après setup, mon équipe peut-elle gérer l'automation en autonomie ou y a-t-il dépendance ?",
          answer: "Objectif : autonomie complète de votre équipe. Formation incluse : maîtrise interface CRM, création sequences, modification triggers, lecture analytics. Documentation complète : processus, best practices, troubleshooting. Support 6 mois pour transition douce. Système conçu pour évolutivité : équipe peut ajouter workflows, modifier segmentation, optimiser performances. Indépendance technique garantie post-formation."
        },
        {
          question: "Comment mesurez-vous concrètement les résultats automation et optimisez-vous en continu ?",
          answer: "Analytics obsessionnelles : dashboard custom tracking conversion par étape funnel, attribution multi-touch, cohort analysis, LTV prediction. Métriques clés : open rates, click rates, conversion rates par sequence, scoring accuracy, time-to-conversion. A/B testing automatisé : subject lines, send times, content variations. Optimisation continue basée data : ajustement triggers, refinement scoring, amélioration sequences. Reporting mensuel transparent avec recommandations d'amélioration."
        },
        {
          question: "Votre setup automation est-il évolutif et compatible avec la croissance de mon entreprise ?",
          answer: "Architecture scalable dès le setup : structure modulaire, workflows extensibles, segmentation dynamique. Compatible croissance : plus de leads = automation plus efficace (economies échelle). Integration APIs pour outils futurs, migration data facilitée si changement CRM. Setup anticipant besoins futurs : scoring évolutif, sequences adaptables, reporting extensible. Pas de refonte nécessaire avec croissance, que de l'expansion intelligente du système existant."
        }
      ]}
      
      finalCtaText="setup mon automation technique parfait"
    />
  )
}