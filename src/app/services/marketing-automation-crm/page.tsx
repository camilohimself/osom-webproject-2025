import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ProgressMeter, ComparisonChart, AssetValueCounter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'
import MarketingAutomationCRMClient from './MarketingAutomationCRMClient'


export const metadata: Metadata = {
  title: 'Expert CRM × Claude Automation VALAIS | Setup Révolutionnaire - osom',
  description: 'La révolution Marketing Automation : Expert humain CRM × Intelligence Claude. +78% conversions, -65% temps manuel. HubSpot, Pipedrive, ActiveCampaign maîtrisés avec IA.',
  keywords: 'marketing automation valais, crm setup claude, hubspot expert ia, pipedrive automation claude, activecampaign intelligence artificielle, automation révolutionnaire, crm claude ai suisse',
  openGraph: {
    title: 'Expert CRM × Claude Automation | Révolution +78% Conversions VALAIS',
    description: 'Collaboration révolutionnaire humain-IA : Expert CRM × Claude Automation. +78% conversions, setup technique parfait.',
    type: 'website',
  }
}

export default function MarketingAutomationCRMPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Automation Performance */}
      <GraphiqueLinear
        title="Expert CRM × Claude Automation Performance"
        subtitle="Collaboration révolutionnaire - Impact sur conversion et efficacité"
        primaryMetric={{
          label: "Expert CRM × Claude",
          value: "+78% conversions",
          color: "#10B981"
        }}
        secondaryMetric={{
          label: "Processus Manuel",
          value: "Baseline 22%",
          color: "#6B7280"
        }}
        improvement={{
          label: "Efficacité IA",
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
          description="Expert CRM × Claude vs manuel"
          color="#70c1a9"
        />
        <MetricsPulse
          value={65}
          suffix="%"
          prefix="-"
          label="Réduction Temps Manuel"
          description="Intelligence automatisée"
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
          description="Lifetime Value via Expert CRM × Claude"
          color="#70c1a9"
          duration={2500}
        />
      </div>

      {/* Performance Comparison */}
      <div className="mt-8">
        <ComparisonChart
          title="Performance Funnel: Expert CRM × Claude vs Manuel"
          data={[
            { label: "Expert CRM × Claude", value: 78, color: "#70c1a9" },
            { label: "Processus Manuel", value: 22, color: "#6B7280" }
          ]}
          subtitle="Taux de conversion prospect → client révolutionnaire"
        />
      </div>

      {/* Automation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={92}
          label="Email Automation IA"
          color="#70c1a9"
          description="Claude-optimized rates"
        />
        <ProgressMeter
          percentage={87}
          label="Lead Scoring Intelligence"
          color="#70c1a9"
          description="AI precision targeting"
        />
        <ProgressMeter
          percentage={94}
          label="CRM × Claude Integration"
          color="#70c1a9"
          description="Perfect data sync"
        />
      </div>

      {/* Summary */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#70c1a9] mb-2">
          Expert CRM × Claude = 3.2x Plus de Valeur
        </div>
        <div className="text-gray-400 text-sm">
          Collaboration révolutionnaire: +78% conversions, -65% temps, +220% valeur client
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      <MarketingAutomationCRMClient />
      
      <ServicePageTemplatePremium
        title="Expert CRM × Claude Automation"
        subtitle="révolution marketing automation"
        heroDescription="La rencontre révolutionnaire entre expertise humaine CRM et intelligence Claude. Configuration HubSpot, Pipedrive, ActiveCampaign optimisée par IA. +78% conversions via collaboration humain-machine parfaite."
        color="cyan"
        heroMetrics={[
          {
            value: "+78%",
            label: "Taux Conversion",
            description: "Expert CRM × Claude collaboration"
          },
          {
            value: "-65%",
            label: "Temps Manuel",
            description: "Intelligence automatisée"
          },
          {
            value: "3.2x",
            label: "Valeur Client",
            description: "Lifetime value révolutionnaire"
          }
        ]}
        ctaText="Révolutionner mon automation avec Claude"
        
        methodTitle="collaboration expert crm × claude"
        methodDescription="Révolution marketing automation : expertise humaine CRM rencontre intelligence Claude. Configuration technique obsessionnelle amplifiée par IA pour workflows comportementaux, sequences intelligentes, scoring prédictif révolutionnaire. Résultats immédiats via collaboration humain-machine parfaite."
        processSteps={[
          {
            number: "01",
            title: "audit funnel expert crm × claude",
            description: "Analyse humaine 50+ points friction + intelligence Claude pour détection opportunités invisibles. Mapping customer journey optimisé IA avec identification gaps automation révolutionnaires."
          },
          {
            number: "02",
            title: "setup crm × intelligence claude parfait",
            description: "Configuration experte HubSpot/Pipedrive amplifiée Claude : triggers comportementaux IA, sequences optimisées machine learning, scoring prédictif intelligence artificielle. Setup révolutionnaire."
          },
          {
            number: "03",
            title: "optimisation continue expert × claude",
            description: "A/B testing automatisé IA, analytics comportementaux Claude, optimisation permanente humain-machine. Amélioration révolutionnaire mesurée en temps réel."
          }
        ]}
        
        proofTitle="preuves expert crm × claude révolutionnaires"
        proofContent={proofContent}
        
        featuresTitle="arsenal expert crm × claude"
        featuresDescription="Maîtrise experte CRM amplifiée intelligence Claude : HubSpot, Pipedrive, ActiveCampaign optimisés IA. Setup révolutionnaire avec analyse comportementale Claude, mesure performance permanente humain-machine."
        features={[
          {
            icon: "",
            title: "email automation × claude intelligence",
            description: "ActiveCampaign/HubSpot expert + Claude optimization : triggers comportementaux IA, segmentation dynamique intelligence artificielle, personnalisation Claude-powered. +92% open rates révolutionnaires."
          },
          {
            icon: "",
            title: "lead scoring × intelligence prédictive claude",
            description: "Configuration scoring multidimensionnel expert + Claude machine learning : engagement + fit + comportement + timing + IA prediction. 87% accuracy révolutionnaire prouvée."
          },
          {
            icon: "",
            title: "workflows omnichannel × claude orchestration",
            description: "Zapier/Make integration experte + Claude coordination : email + SMS + retargeting + social media orchestrés intelligence artificielle. Customer journey révolutionnaire."
          },
          {
            icon: "",
            title: "crm sync × claude data management",
            description: "HubSpot/Pipedrive expert + Claude intelligence : data hygiene IA, deduplication intelligente, field mapping optimisé, API sync Claude-powered temps réel."
          },
          {
            icon: "",
            title: "chatbot × claude qualification révolutionnaire",
            description: "Setup intelligent expert + Claude AI : qualification automatique intelligente, routing contextualisé IA, escalation rules Claude-optimized. Support révolutionnaire sans friction."
          },
          {
            icon: "",
            title: "analytics automation × claude insights",
            description: "Dashboard custom expert + Claude intelligence : attribution multi-touch IA, cohort analysis intelligente, LTV prediction Claude, ROI workflow révolutionnaire optimisé."
          }
        ]}
        
        pricingTitle="expert crm × claude setup révolutionnaire"
        price="8900 CHF"
        pricingDescription="Setup révolutionnaire Expert CRM × Claude : Configuration technique obsessionnelle + Intelligence artificielle + Formation collaboration humain-IA + Optimisation continue 6 mois. +78% conversions révolutionnaires garanties."
        pricingFeatures={[
          "CRM setup expert × Claude intelligence (HubSpot/Pipedrive)",
          "Email sequences × Claude behavioral optimization",
          "Lead scoring prédictif × Claude machine learning",
          "Workflows omnichannel × Claude orchestration",
          "AI chatbot × Claude qualification intelligente", 
          "Formation révolutionnaire + support Expert × Claude 6 mois"
        ]}
        
        faqTitle="Questions Fréquentes - Expert CRM × Claude Révolution"
        faqItems={[
          {
            question: "Comment l'expertise CRM humaine se combine-t-elle concrètement avec l'intelligence Claude pour garantir +78% conversions ?",
            answer: "Collaboration révolutionnaire unique : Expert humain configure triggers HubSpot/Pipedrive/ActiveCampaign + Claude analyse comportements, optimise sequences, prédit conversions. Humain = expertise technique setup parfait, Claude = intelligence comportementale continue. +78% conversions = setup expert amplifié IA pour triggers précis + sequences Claude-optimisées + scoring intelligence artificielle. Pas d'IA seule, pas d'humain seul : collaboration symbiotique révolutionnaire."
          },
          {
            question: "Claude peut-il vraiment améliorer la configuration HubSpot, Pipedrive, ActiveCampaign ou c'est du marketing IA ?",
            answer: "Claude ne configure pas directement les outils, mais révolutionne la stratégie : analyse comportements prospects, optimise timing sequences, prédit scoring effectiveness, suggère trigger improvements. Expert humain = maîtrise technique complète + certifications CRM, Claude = intelligence comportementale + pattern recognition + optimization suggestions. Demo révolutionnaire : on montre setup avant/après Claude optimization sur votre funnel réel."
          },
          {
            question: "8900 CHF pour Expert CRM × Claude, quelle est la différence réelle versus setup CRM classique à 3000 CHF ?",
            answer: "Différence révolutionnaire : Setup classique = configuration basique statique. Expert CRM × Claude = configuration experte + intelligence comportementale continue + optimisation IA permanente. 8900 CHF inclus : audit expert + Claude analysis, setup révolutionnaire, sequences Claude-optimized, scoring IA, formation collaboration humain-machine, support 6 mois. ROI récupéré 2-3 mois via efficacité révolutionnaire. Investissement transformation vs dépense configuration."
          },
          {
            question: "Après setup Expert CRM × Claude, mon équipe peut-elle gérer sans dépendance à l'IA ou expertise technique ?",
            answer: "Objectif révolutionnaire : autonomie équipe amplifiée intelligence. Formation incluse : maîtrise interface CRM + compréhension insights Claude + interprétation recommendations IA. Équipe gère quotidien en autonomie, Claude provides ongoing behavioral insights, expert available pour évolutions stratégiques. Indépendance progressive : 80% autonomie mois 3, 95% mois 6. Support révolutionnaire : humain + IA accessible selon besoins."
          },
          {
            question: "Comment mesurez-vous concrètement les résultats de la collaboration Expert CRM × Claude ?",
            answer: "Mesure révolutionnaire multicouche : Analytics expert (conversion rates, attribution multi-touch, LTV tracking) + Claude behavioral analysis (engagement patterns, prediction accuracy, optimization impact). Dashboard révolutionnaire : métriques expert + insights IA + recommendations Claude + ROI collaboration humain-machine. Reporting mensuel : performance before/after, Claude optimization impact, expert adjustments effectiveness. Transparence totale révolutionnaire collaboration."
          },
          {
            question: "La collaboration Expert CRM × Claude est-elle évolutive avec la croissance de mon business ?",
            answer: "Architecture révolutionnaire scalable : setup expert extensible + Claude learning continu + intelligence adaptive. Croissance business = plus de data pour Claude optimization + insights plus précis + recommendations évolutives. Expert maintient structure technique, Claude améliore intelligence comportementale. Évolutivité révolutionnaire : collaboration humain-IA grandit avec business, pas de refonte nécessaire, que expansion intelligente du système révolutionnaire existant."
          }
        ]}
        
        finalCtaText="révolutionner mon automation avec expert crm × claude"
        skipCustomHero={true}
      />
    </div>
  )
}