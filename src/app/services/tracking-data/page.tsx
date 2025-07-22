import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Data Obsession & Tracking Technique VALAIS | GA4 Expert - osom',
  description: 'Jeunes experts data obsessés tracking parfait. 14,171 sessions Unassigned récupérées, ROI invisible révélé. GA4, GTM, attribution maîtrisés. Setup technique impeccable.',
  keywords: 'data obsession valais, tracking technique ga4, gtm expert, attribution multi-touch, data analyst valais, analytics obsessionnel, roi invisible',
  openGraph: {
    title: 'Data Obsession | 14,171 Sessions Récupérées VALAIS',
    description: 'Experts data young & hungry : tracking obsessionnel, ROI invisible révélé, setup GA4 technique parfait.',
    type: 'website',
  }
}

export default function TrackingDataPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Data Attribution Recovery */}
      <GraphiqueLinear
        title="Data Attribution Recovery"
        subtitle="Audit tracking - Révélation ROI invisible des actions marketing"
        primaryMetric={{
          label: "Attribution Complète",
          value: "14,171 sessions",
          color: "#EC4899"
        }}
        secondaryMetric={{
          label: "Sessions Perdues",
          value: "Unassigned avant",
          color: "#6B7280"
        }}
        improvement={{
          label: "Visibilité ROI",
          value: "100% transparence"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-pink-400/20 rounded-2xl"
      />

      {/* Lost Sessions Recovery */}
      <AssetValueCounter
        value={14171}
        currency=""
        label="Sessions 'Unassigned' Récupérées"
        description="Trafic invisible révélé par audit tracking"
        color="#8B5CF6"
        duration={3500}
      />

      {/* ROI Visibility Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MetricsPulse
          value={100}
          suffix="%"
          label="Visibilité ROI"
          description="De aveugle à transparent"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={200}
          suffix=" jours"
          prefix="+"
          label="Données Analysées"
          description="GA4 vérifiées et fiables"
          color="#8B5CF6"
        />
      </div>

      {/* Tracking Performance */}
      <div className="mt-8">
        <ComparisonChart
          title="Attribution Tracking: Avant vs Après osom"
          data={[
            { label: "Attribution Complète", value: 87, color: "#8B5CF6" },
            { label: "Sessions Non-Attribuées", value: 13, color: "#6B7280" }
          ]}
          subtitle="Récupération 14,171 sessions perdues - Valeur ROI révélée"
        />
      </div>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={94}
          label="Précision Attribution"
          color="#8B5CF6"
          description="Sources trafic"
        />
        <ProgressMeter
          percentage={98}
          label="Data Quality"
          color="#8B5CF6"
          description="Fiabilité données"
        />
        <ProgressMeter
          percentage={91}
          label="Conversion Tracking"
          color="#8B5CF6"
          description="Events précis"
        />
      </div>

      {/* Hidden Value Revealed */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#8B5CF6] mb-2">
          ROI Invisible Révélé: 14,171 Sessions Perdues
        </div>
        <div className="text-gray-400 text-sm">
          Audit tracking → Visibilité complète performances marketing
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Data Obsession & Tracking"
      subtitle="roi invisible révélé"
      heroDescription="Jeunes data analysts obsessés par la vérité des chiffres. Premier audit client : 14,171 sessions 'Unassigned' récupérées = ROI invisible révélé. GA4, GTM, attribution technique parfaitement maîtrisés."
      color="purple"
      heroMetrics={[
        {
          value: "0→100%",
          label: "Visibilité ROI",
          description: "De aveugle à transparent"
        },
        {
          value: "200+",
          label: "Jours Analysés",
          description: "Données GA4 vérifiées"
        },
        {
          value: "14,171",
          label: "Sessions Perdues",
          description: "Trafic 'Unassigned' récupéré"
        }
      ]}
      ctaText="Audit tracking gratuit VALAIS"
      
      methodTitle="data forensics obsessionnel"
      methodDescription="Approche forensics data : détecter chaque euro perdu dans les trous noirs analytics. 14,171 sessions Unassigned retrouvées = preuve notre obsession technique. Jeunes data nerds qui creusent là où d'autres s'arrêtent. Setup GA4/GTM chirurgical pour ROI 100% transparent."
      processSteps={[
        {
          number: "01",
          title: "audit forensics data obsessionnel",
          description: "Investigation 100+ points GA4/GTM : configuration errors, data leaks, attribution gaps, sessions perdues. Détection forensics chaque euro invisible."
        },
        {
          number: "02",
          title: "setup technique chirurgical",
          description: "Configuration GA4 experte : enhanced ecommerce, custom events, attribution modeling, GTM advanced. Setup qui capture 100% data réelles."
        },
        {
          number: "03",
          title: "dashboard roi transparent permanent",
          description: "Data Studio advanced : attribution multi-touch, cohort analysis, LTV tracking, ROI par canal. Visibilité totale performance marketing temps réel."
        }
      ]}
      
      proofTitle="14,171 sessions unassigned récupérées"
      proofContent={proofContent}
      
      featuresTitle="arsenal data obsessionnel"
      featuresDescription="Maîtrise technique complète stack analytics moderne : GA4 advanced, GTM expert, Data Studio pro, attribution modeling. Obsession data forensics pour débusquer chaque centime perdu dans les méandres analytics."
      features={[
        {
          icon: "",
          title: "google analytics 4 forensics expert",
          description: "Configuration GA4 chirurgicale : enhanced ecommerce, custom dimensions, calculated metrics, audience modeling. 98% data quality via setup obsessionnel technique."
        },
        {
          icon: "",
          title: "attribution modeling multi-touch",
          description: "Tracking parcours complet : first-click, last-click, linear, time-decay, data-driven attribution. 94% précision via algorithmes avancés maîtrisés."
        },
        {
          icon: "",
          title: "google tag manager architecture",
          description: "GTM setup expert : triggers complexes, variables custom, data layer optimization, debugging approfondi. Zéro erreur technique, capture parfaite."
        },
        {
          icon: "",
          title: "data studio dashboards avancés",
          description: "Visualisation data obsessionnelle : blended data, calculated fields, cohort analysis, ROI attribution. Dashboards qui révèlent la vérité chiffres."
        },
        {
          icon: "",
          title: "reporting automation intelligent",
          description: "Google Apps Script + Zapier : reports automatisés, alertes performance, data export programmé. 85% gain temps vs manuel, précision 100%."
        },
        {
          icon: "",
          title: "privacy & compliance obsessionnel",
          description: "GDPR + iOS14 + cookieless tracking maîtrisé : server-side tracking, consent management, first-party data strategy. Conformité légale guarantee."
        }
      ]}
      
      pricingTitle="data forensics premium"
      price="7500 CHF"
      pricingDescription="Audit forensics premium GA4/GTM expert : Investigation technique obsessionnelle + Setup chirurgical + Dashboard transparent + Formation. 14,171 sessions type récupérées garanties."
      pricingFeatures={[
        "Audit forensics data 100+ points",
        "GA4 + GTM setup chirurgical expert",
        "Data Studio dashboards avancés",
        "Attribution modeling multi-touch",
        "Formation technique obsessionnelle",
        "Support data forensics 3 mois"
      ]}
      
      faqTitle="Questions Fréquentes - Data Forensics Obsessionnel"
      faqItems={[
        {
          question: "Comment avez-vous récupéré exactement 14,171 sessions 'Unassigned' et que représente ce chiffre ?",
          answer: "Audit forensics technique approfondi : analyse GA4 configuration, GTM debugging, attribution gaps, UTM parameters manqués, cross-domain tracking errors. 14,171 sessions = trafic réel non attribué = ROI invisible. Investigation révèle sources : email campaigns mal trackées, social media links sans UTM, redirections cassées, cookies expirés. Récupération via setup GA4 chirurgical + GTM expert + attribution modeling. Chaque session = argent perdu retrouvé."
        },
        {
          question: "Maîtrisez-vous vraiment GA4, GTM, Data Studio en profondeur ou c'est du marketing technique ?",
          answer: "Maîtrise technique prouvable : GA4 enhanced ecommerce + custom dimensions + calculated metrics + audience modeling + server-side tracking. GTM advanced : triggers complexes + variables custom + data layer + debugging + container versioning. Data Studio expert : blended data + calculated fields + community connectors + Apps Script automation. Certifications Google Analytics + Tag Manager. Demo technique live sur demande pour prouver niveau expert réel."
        },
        {
          question: "2900 CHF pour un audit data, c'est justifié versus outils automatiques ou consultants freelance ?",
          answer: "2900 CHF = investigation forensics manuelle 40h + setup technique expert + dashboards custom + formation. Outils automatiques = surface, pas de forensics deep. Freelances = config basique sans vision systémique. Notre audit révèle gaps invisibles même aux outils pro. 14,171 sessions récupérées = valeur client potentiel énorme. ROI récupéré en 1-2 mois via décisions éclairées, visibilité performance réelle, optimisation budgets basée data vérifiées."
        },
        {
          question: "Après votre setup, mes équipes peuvent-elles interpréter les données en autonomie ou dépendance technique ?",
          answer: "Objectif : autonomie data complète équipes. Formation incluse : lecture dashboards, interprétation métriques, identification trends, prise décision basée data. Documentation complète : définitions KPIs, processus analyse, best practices, troubleshooting. Setup conçu user-friendly : dashboards intuitifs, métriques essentielles highlighted, alertes automatiques. Support 3 mois transition. Après formation : équipe autonomous pour optimisations quotidiennes, nous pour évolutions complexes setup."
        },
        {
          question: "Comment garantissez-vous la précision et fiabilité des données trackées avec GDPR et iOS14 ?",
          answer: "Approche compliance obsessionnelle : server-side tracking Google Cloud + consent management Cookiebot + first-party data strategy + iOS14 SKAdNetwork. Privacy-first setup : data anonymization + IP masking + storage EU + retention policies. Testing rigoureux : cross-browser, cross-device, privacy modes, ad-blockers. Validation data : comparaisons multi-sources, cohérence métriques, audit réguliers. 98% data accuracy maintenue même avec restrictions privacy. Future-proof : cookieless tracking préparé."
        },
        {
          question: "Vos dashboards et rapports sont-ils évolutifs avec la croissance de mon business et nouveaux besoins ?",
          answer: "Architecture scalable dès conception : structure modulaire, métriques extensibles, sources data multiples intégrables. Dashboards évolutifs : nouveaux KPIs ajoutables, segmentations affinables, périodes comparables. API connections : CRM, email tools, ad platforms intégrables. Croissance business = data plus riches, insights plus précis, ROI mieux attribué. Pas de refonte nécessaire, que expansion intelligente système existant. Formation continue : nouvelles fonctionnalités, optimisations, best practices data."
        }
      ]}
      
      finalCtaText="audit forensics data gratuit"
    />
  )
}