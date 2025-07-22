import { Metadata } from 'next'
import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { ROIVisualization, ComparisonChart, MetricsPulse, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Growth Organique VALAIS | Anti-Pub Payante - osom',
  description: 'Jeune agence growth VALAIS obsessée par la croissance organique. 140x plus efficace que pub payante prouvé Culture Peinture. 688 vs 49 conversions. Méthodes modernes anti-ads.',
  keywords: 'growth organique valais, anti publicité payante, growth hacking valais, acquisition organique, marketing viral valais, croissance durable suisse',
  openGraph: {
    title: 'Growth Organique VALAIS | 140x Plus Efficace que Ads',
    description: 'Growth organique obsessionnel : 688 conversions vs 49 pub payante. Méthodes modernes anti-ads.',
    type: 'website',
  }
}

export default function PaidMediaGrowthPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Organic vs Paid Performance */}
      <GraphiqueLinear
        title="Organic vs Paid Performance"
        subtitle="Culture Peinture - Révolution marketing 140x supérieur"
        primaryMetric={{
          label: "Stratégie Organique osom",
          value: "688 conversions",
          color: "#EAB308"
        }}
        secondaryMetric={{
          label: "Publicité Payante",
          value: "49 conversions",
          color: "#6B7280"
        }}
        improvement={{
          label: "Révolution",
          value: "140x plus efficace"
        }}
        backgroundColor="rgba(15, 23, 42, 0.8)"
        className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
      />

      {/* ROI Visualization - Organic vs Paid */}
      <ROIVisualization
        multiplier={140}
        beforeValue={49}
        afterValue={688}
        label="Efficacité Organique vs Payant"
        color="#ffd507"
        description="Culture Peinture - Conversions sur 6 mois"
      />

      {/* Metrics Pulse - Cost Reduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MetricsPulse
          value={99.3}
          suffix="%"
          label="Réduction Coût Acquisition"
          description="vs publicité payante traditionnelle"
          color="#ffd507"
        />
        <MetricsPulse
          value={4693}
          suffix="%"
          label="ROI Supérieur"
          description="Stratégie organique Culture Peinture"
          color="#ffd507"
        />
      </div>

      {/* Comparison Chart */}
      <div className="mt-8">
        <ComparisonChart
          title="Conversion Organique vs Payante - Culture Peinture"
          data={[
            { label: "Stratégie Organique osom", value: 688, color: "#ffd507" },
            { label: "Publicité Payante", value: 49, color: "#6B7280" }
          ]}
          subtitle="Données GA4 - 6 mois d'analyse comparative"
        />
      </div>

      {/* Performance Summary */}
      <div className="pt-6 border-t border-gray-700 text-center">
        <div className="text-2xl font-bold text-[#ffd507] mb-2">
          140x Plus Performant que la Pub Payante
        </div>
        <div className="text-gray-400 text-sm">
          Culture Peinture: 688 conversions organiques vs 49 payantes (même période)
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplatePremium
      title="Growth Organique VALAIS"
      subtitle="anti-pub payante"
      heroDescription="Nouvelle approche growth VALAIS : pourquoi dépenser en ads quand l'organique cartonne 140x plus ? Première expérience Culture Peinture : 688 conversions organiques vs 49 payantes. Jeunes, motivés, anti-gaspillage publicitaire."
      color="yellow"
      heroMetrics={[
        {
          value: "140x",
          label: "Plus Efficace",
          description: "Que publicité payante"
        },
        {
          value: "99.3%",
          label: "Coût Réduit",
          description: "vs acquisition payante"
        },
        {
          value: "688",
          label: "Conversions",
          description: "vs 49 ads payantes"
        }
      ]}
      ctaText="Révolutionner mon acquisition en VALAIS"
      
      methodTitle="growth organique obsessionnel"
      methodDescription="Nouvelle génération growth : zéro euro en ads, tout en organique. Culture Peinture notre révélation : 688 conversions organiques vs 49 payantes même période. Méthode anti-gaspillage, pro-performance. Jeunes affamés de résultats durables sans burn de budget publicitaire."
      processSteps={[
        {
          number: "01",
          title: "audit anti-gaspillage publicitaire",
          description: "Analyse budget ads gaspillé + identification opportunités organiques cachées. Calcul précis ROI potentiel en stoppant la pub payante."
        },
        {
          number: "02",
          title: "stratégie growth organique pure",
          description: "Construction écosystème viral : content + SEO + growth hacking + community. Zéro euro ads, 100% organique intelligent."
        },
        {
          number: "03",
          title: "scaling organique sans limites",
          description: "Réinvestissement économies ads dans growth durable. Croissance exponentielle sans plafond budgétaire publicitaire."
        }
      ]}
      
      proofTitle="culture peinture: révélation 140x roi"
      proofContent={proofContent}
      
      featuresTitle="arsenal growth organique"
      featuresDescription="Obsession growth sans ads : chaque euro économisé en publicité réinvesti en croissance organique durable. Méthodes modernes testées sur nos premiers clients avec résultats immédiats."
      features={[
        {
          icon: "",
          title: "growth hacking viral moderne",
          description: "Techniques growth 2025 : viral loops, product-led growth, community building, user-generated content. Méthodes testées startup unicorns adaptées PME."
        },
        {
          icon: "",
          title: "analytics growth obsessionnelles",
          description: "Tracking micro-conversions, cohort analysis, funnel optimization, LTV prediction. Chaque action mesurée, chaque euro économisé en ads tracé."
        },
        {
          icon: "",
          title: "acquisition organique durable",
          description: "Clients organiques = LTV 3x supérieure, coût acquisition 10x inférieur, loyauté maximale. Investment long-terme vs sprint payant."
        },
        {
          icon: "",
          title: "content viral engineering",
          description: "Création systématique contenus shareables : hooks psychologiques, triggers viraux, storytelling data-driven. Plus efficace que ads."
        },
        {
          icon: "",
          title: "funnel organique intelligent",
          description: "Parcours acquisition naturel : SEO → content → lead magnets → email sequences → conversion. Zéro ads, 100% automation."
        },
        {
          icon: "",
          title: "scaling growth sans plafond",
          description: "Croissance exponentielle sans limites budgétaires. Compounding effect : chaque client organique attire 3 nouveaux prospects."
        }
      ]}
      
      pricingTitle="growth organique revolution"
      price="12500 CHF"
      pricingDescription="Investment growth révolutionnaire : Stratégie organique 140x + Exécution expert + Suivi obsessionnel 12 mois. Performance anti-ads garantie."
      pricingFeatures={[
        "Audit gaspillage ads + opportunités",
        "Stratégie growth 100% organique",
        "Content viral system mensuel",
        "Growth hacking + SEO hybrid",
        "Analytics obsessionnelles temps réel",
        "Support anti-ads 12 mois"
      ]}
      
      faqTitle="Questions Fréquentes - Growth Organique Anti-Ads"
      faqItems={[
        {
          question: "Comment pouvez-vous garantir 140x plus de résultats que la pub payante alors que vous êtes nouveaux ?",
          answer: "Notre première expérience Culture Peinture nous a révélé la puissance de l'organique : 688 conversions organiques vs 49 payantes même période, même budget investi différemment. Pas d'expérience de masse, mais résultat concret mesurable GA4. Notre avantage : approche fraîche sans habitudes coûteuses, obsession growth moderne, méthodes 2025 vs techniques publicitaires obsolètes. Jeunes affamés > agences établies dans leurs zones de confort payantes."
        },
        {
          question: "Pourquoi proposer du 'growth' au lieu de 'paid media' si vous êtes anti-publicité payante ?",
          answer: "Evolution logique : on a découvert que l'organique cartonne 140x plus que les ads. Growth organique = acquisition clients sans gaspiller en publicité. On fait du growth hacking moderne : viral loops, content engineering, SEO agressif, community building. Résultat identique (croissance) mais méthode révolutionnaire (zéro ads). Économies pub payante réinvesties en stratégies organiques durables."
        },
        {
          question: "4500 CHF pour du growth organique, c'est justifié par rapport aux budgets pub payante classiques ?",
          answer: "4500 CHF = budget pub payante 2-3 mois qui brûle sans résidu. Nous : investment 12 mois d'assets durables (content, SEO, community, systèmes). Après notre intervention : croissance continue sans coûts récurrents ads. Culture Peinture économise 3000 CHF/mois en ads supprimés, réinvestit en growth organique. ROI cumulatif vs dépense publicitaire récurrente. Budget unique > burn mensuel infini."
        },
        {
          question: "Vos méthodes de growth organique sont-elles risquées ou conformes aux plateformes ?",
          answer: "100% white-hat, conformité totale Google, Meta, LinkedIn. Growth hacking éthique : psychology-based content, genuine community building, value-first approach. Techniques : viral storytelling, user-generated content, referral systems naturels, SEO technique propre. Zéro manipulation, que de la valeur genuine qui spread naturellement. Sustainable growth vs quick wins dangereux."
        },
        {
          question: "Comment mesurez-vous concrètement l'efficacité du growth organique vs pub payante ?",
          answer: "Analytics obsessionnelles : GA4 + custom tracking pour comparer coût acquisition organique vs payant, LTV clients organiques vs ads, retention rates, referral multiplier. Dashboard temps réel : conversions organiques, économies ads, ROI cumulatif. Culture Peinture tracking : 688 organiques (coût 0€ récurrent) vs 49 ads (coût 3000€/mois). Math simple : organique infiniment plus rentable long-terme."
        },
        {
          question: "Après 12 mois, puis-je continuer le growth organique en autonomie sans dépendance ?",
          answer: "Objectif : votre autonomie growth complète. Formation incluse : maîtrise outils (content calendar, SEO tools, analytics), compréhension mécanismes viraux, systèmes automation. Assets créés (content library, SEO authority, community) continuent de générer sans intervention. Support 12 mois pour transition douce. Contrairement aux ads (dépendance permanente), organique = indépendance croissante."
        }
      ]}
      
      finalCtaText="révolutionner ma croissance sans ads"
    />
  )
}