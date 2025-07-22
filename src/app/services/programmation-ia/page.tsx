import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { AssetValueCounter, MetricsPulse, ProgressMeter, ComparisonChart } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Code Obsessionnel & IA Virale | Dashboards + 2.4M Vues - osom',
  description: 'Jeunes développeurs obsessés code + créativité IA. Dashboards techniques + réels viraux. 2.4M vues Culture Peinture, 140x ROI. Python + JavaScript + créativité pure.',
  keywords: 'programmation obsessionnelle, code python javascript, ia créative, dashboards interactifs, réels viraux, développeur créatif VALAIS, code + content',
  openGraph: {
    title: 'Code + Créativité | 2.4M Vues Documentees VALAIS',
    description: 'Développeurs-créatifs : code technique + contenu viral. Dashboards + 2.4M vues réels.',
    type: 'website',
  }
}

export default function ProgrammationIAPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* Hero Section - Dashboard Culture Peinture */}
      <div className="bg-gradient-to-br from-yellow-400/10 to-purple-600/20 rounded-3xl p-8 border border-yellow-400/30">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Case Study Culture Peinture
          </h3>
          <p className="text-xl text-gray-300">
            Dashboard Intelligence + Campagne Réels = Performance ROI
          </p>
        </div>
        
        {/* Métriques Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2.4M</div>
            <div className="text-white font-semibold">Vues Réels</div>
            <div className="text-gray-400 text-sm">Campagne 6 mois</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">688</div>
            <div className="text-white font-semibold">Conversions</div>
            <div className="text-gray-400 text-sm">Dashboard tracking</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">140x</div>
            <div className="text-white font-semibold">ROI Performance</div>
            <div className="text-gray-400 text-sm">vs Publicité payante</div>
          </div>
        </div>
      </div>

      {/* Dashboard Interactif Preview */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black/80 rounded-3xl p-6 border border-purple-400/30">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-purple-400 mb-2">
            Dashboard Temps Réel Intégré
          </h4>
          <p className="text-gray-300">
            Analytics intelligence avec visualisations interactives
          </p>
        </div>
        
        {/* Iframe Dashboard ou Preview */}
        <div className="bg-black/60 rounded-xl p-4 border border-gray-600/30 min-h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <div className="text-xl text-yellow-400 font-bold mb-2">
              Dashboard Culture Peinture
            </div>
            <div className="text-gray-400 mb-4">
              7 graphiques interactifs • Données temps réel • Export PDF
            </div>
            <div className="text-sm text-purple-400">
              → Démo live disponible sur demande
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Réels Performance */}
      <div className="bg-gradient-to-br from-yellow-400/10 to-orange-600/20 rounded-3xl p-8 border border-yellow-400/30">
        <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Performance Campagne Réels Instagram/TikTok
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">38,971</div>
            <div className="text-white font-semibold">Pic de Vues</div>
            <div className="text-gray-400 text-sm">Single day record</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2,100+</div>
            <div className="text-white font-semibold">Nouveaux Followers</div>
            <div className="text-gray-400 text-sm">Growth organique</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-white font-semibold">Interactions</div>
            <div className="text-gray-400 text-sm">Engagement total</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">200</div>
            <div className="text-white font-semibold">Jours Actifs</div>
            <div className="text-gray-400 text-sm">Consistency</div>
          </div>
        </div>
      </div>

      {/* GraphiqueLinear - Performance Comparison */}
      <GraphiqueLinear
        title="Intelligence Data + Créativité Virale"
        subtitle="Culture Peinture - Dashboard Analytics + Campagne Content"
        primaryMetric={{
          label: "Approche osom Complète",
          value: "688 conversions",
          color: "#FFDD00"
        }}
        secondaryMetric={{
          label: "Publicités Classiques",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Performance Supérieure",
          value: "140x plus efficace"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* Metrics Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <MetricsPulse
          value={11.3}
          suffix="%"
          label="Taux Conversion"
          description="Dashboard optimisation"
          color="#FFDD00"
        />
        <MetricsPulse
          value={67.5}
          suffix="s"
          label="Engagement Temps"
          description="Contenu viral quality"
          color="#8B5CF6"
        />
        <MetricsPulse
          value={92.2}
          suffix="%"
          label="Engagement Rate"
          description="Audience qualifiée"
          color="#10B981"
        />
      </div>

      {/* Progress Meters - Technical Excellence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <ProgressMeter
          percentage={95}
          label="Data Accuracy"
          color="#FFDD00"
          comparison={{
            label: "Standard",
            percentage: 60
          }}
          description="Attribution tracking"
        />
        <ProgressMeter
          percentage={88}
          label="Viral Potential"
          color="#8B5CF6"
          description="Content optimization AI"
        />
        <ProgressMeter
          percentage={90}
          label="ROI Mesurabilité"
          color="#10B981"
          comparison={{
            label: "Industrie",
            percentage: 45
          }}
          description="Dashboard intelligence"
        />
      </div>

      {/* Impact Final */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-yellow-400 mb-2">
          Culture Peinture: De 0 à 2.4M de vues
        </div>
        <div className="text-gray-400 text-sm">
          Dashboard Intelligence + Réels Strategy = Performance ROI Mesurable
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Code Obsessionnel & Créativité IA"
      subtitle="code + créativité virale"
      heroDescription="Jeunes développeurs obsessés par le code ET la créativité. Dashboards techniques Python + réels Instagram viraux. Culture Peinture : 2.4M vues + 688 conversions. Cerveau gauche + cerveau droit = performance décoiffante."
      color="yellow"
      heroMetrics={[
        {
          value: "2.4M",
          label: "Vues Virales",
          description: "Campagne réels Culture Peinture"
        },
        {
          value: "140x",
          label: "ROI Supérieur",
          description: "vs Publicité payante"
        },
        {
          value: "688",
          label: "Conversions",
          description: "Dashboard tracking intelligent"
        }
      ]}
      ctaText="lancer mon combo code+créativité"
      
      methodTitle="obsession code + créativité virale"
      methodDescription="Développeur-créatif hybrid : code Python/JavaScript obsessionnel + créativité virale Instagram. Dashboards techniques sur-mesure + réels qui cartonnent. Culture Peinture première expérience : from zero to 2.4M vues + 140x ROI. Approche unique marché : technique + créatif dans même cerveau."
      processSteps={[
        {
          number: "01",
          title: "code dashboard sur-mesure python",
          description: "Développement dashboard interactif custom : Python data processing, JavaScript visualisations, API connections temps réel. Code from scratch, pas de template."
        },
        {
          number: "02",
          title: "créativité réels instagram viraux",
          description: "Analyse audience data + création contenus optimisés pour viralite : hooks psychologiques, storytelling data-driven, hashtag research. Culture Peinture method."
        },
        {
          number: "03",
          title: "monitoring performance technique",
          description: "Tracking code custom : événements sur-mesure, attribution multi-touch, analytics comportementaux. Data science approach pour optimisation continue."
        },
        {
          number: "04",
          title: "scaling intelligent automatise",
          description: "Scripts automation Python pour amplification contenus performants + dashboard alertes performance. Code qui scale, pas manual work."
        }
      ]}
      
      proofTitle="culture peinture: 0 → 2.4m vues documentées"
      proofContent={proofContent}
      
      featuresTitle="stack technique + créativité"
      featuresDescription="Maîtrise technique complète : Python data analysis, JavaScript interactifs, React dashboards + obsession créativité virale. Combo rare : développeur qui sait faire du contenu viral."
      features={[
        {
          icon: "",
          title: "dashboards python interactifs custom",
          description: "Code sur-mesure Python + Plotly/Dash : visualisations temps réel, API integrations multi-sources, analytics comportementaux. 0% template, 100% custom code."
        },
        {
          icon: "",
          title: "réels viraux instagram engineering",
          description: "Méthodologie virale data-driven : analyse trends, hooks psychologiques, storytelling optimisé. Culture Peinture case : 0 → 2.4M vues reproduisible."
        },
        {
          icon: "",
          title: "tracking code attribution avance",
          description: "JavaScript custom events + Python data processing : attribution multi-touch, user journey mapping, sessions recovery. Technical precision 14,171+ sessions."
        },
        {
          icon: "",
          title: "automation scripts intelligent",
          description: "Python automation : content optimization, A/B testing auto, performance monitoring. Code qui travaille 24/7 pour optimiser vos campagnes."
        },
        {
          icon: "",
          title: "predictive analytics machine learning",
          description: "Algorithmes Python ML : prédiction performance contenu, recommandations personnalisées, trend forecasting. Data science appliquée marketing."
        },
        {
          icon: "",
          title: "content ia créative virale",
          description: "IA analysis + human creativity : viral potential scoring, hashtag optimization, audience psychology. Technical + créatif = combo gagnant."
        }
      ]}
      
      pricingTitle="code + créativité premium"
      price="15000 CHF"
      pricingDescription="Formule code+créativité world-class unique : Dashboard Python custom + Réels viraux 2.4M + Formation technique. Combo développeur-créatif rarissime."
      pricingFeatures={[
        "Dashboard Python custom code from scratch",
        "Campagne réels viraux 3 mois + créativité",
        "Tracking code JavaScript attribution avancé",
        "Scripts automation Python monitoring",
        "Content IA + human creativity hybrid",
        "Formation technique + code handover complet"
      ]}
      
      faqTitle="Questions Fréquentes - Code Obsessionnel + Créativité Virale"
      faqItems={[
        {
          question: "Comment garantissez-vous 2.4M vues alors que vous combinez développement et créativité ?",
          answer: "Combo rare : développeur Python/JavaScript obsessionnel + créatif Instagram passionné. Culture Peinture première expérience révélatrice : dashboard technique tracking performances + réels créatifs viraux = 2.4M vues documentées GA4. Approche data-driven créativité : chaque contenu analysé, hooks psychologiques testés, performance mesurée. Code pour tracker, créativité pour viral, data pour optimiser."
        },
        {
          question: "Maîtrisez-vous vraiment Python, JavaScript ET création contenu viral ou c'est du marketing ?",
          answer: "Double expertise prouvable : Python data analysis + Plotly dashboards (code review sur demande), JavaScript custom events + API integrations (démo technique live), création réels Instagram (2.4M vues Culture Peinture tracées). Formation technique : Computer Science + passion créative personnelle. Portfolio code + portfolio créatif disponibles. Rare combo technique + créatif authentique."
        },
        {
          question: "4500 CHF pour code + créativité, c'est justifié versus développeur pur ou créatif pur ?",
          answer: "4500 CHF = développeur senior Python/JavaScript + créatif viral expérimenté + data scientist marketing. Développeur pur = dashboard mais 0 contenu. Créatif pur = viral mais 0 tracking. Nous = dashboard custom codé + réels qui cartonnent + attribution technique parfaite. Culture Peinture ROI 140x prouve valeur combo. Investment unique pour expertise double rare."
        },
        {
          question: "Après 3 mois, puis-je maintenir le dashboard code et continuer création réels en autonomie ?",
          answer: "Objectif : autonomie technique ET créative. Code handover complet : documentation Python, architecture JavaScript expliquée, APIs documentées. Formation créative : méthodes viralité, psychology hooks, hashtag research, content calendar. Dashboard évolutif : ajout métriques possible, nouveaux graphiques intégrables. Réels : méthodologie reproductible enseignée. Support technique 3 mois : code + créatif."
        },
        {
          question: "Vos dashboards Python sont-ils vraiment custom ou basés sur templates existants ?",
          answer: "100% custom code from scratch, 0% template. Python pur : pandas data processing, Plotly visualisations interactives, API connections sur-mesure, algorithmes analytics propriétaires. Code source fourni, architecture expliquée, évolutivité maximale. Démo live : montrer code en direct, expliquer logique, modifier en temps réel. Dashboard Culture Peinture : 100% custom, performance tracking spécifique métier."
        },
        {
          question: "Comment assurez-vous la reproductibilité de vos succès viraux sur d'autres projets ?",
          answer: "Méthodologie virale systematisée : analyse audience data, hooks psychologiques testés, storytelling frameworks, timing optimization, hashtag research algorithmique. Culture Peinture success factors documentés : type contenu, posting schedule, engagement strategies. Process reproductible mais adapté chaque audience. Pas de copier-coller créatif, mais méthodes éprouvées personnalisées. Code analytics pour mesurer viralité + créativité humaine pour exécution."
        }
      ]}
      
      finalCtaText="lancer mon combo code+créativité"
    />
  )
}