import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata = {
  title: 'Création Site Internet Valais - 1718 Recherches/Mois | OSOM N°1',
  description: 'Création Site Internet VALAIS : 1718 recherches/mois → Expertise N°1 confirmée. Agence web Valais révolutionnaire : 11.3% conversion vs 2-3% industrie. 1500 CHF, 10 jours.',
  keywords: 'création site internet valais, création site web valais, création de site internet valais, site internet valais, agence web valais, développement web valais, site web valais, création site vitrine valais'
}

export default function CreationSiteWebPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Conversion Performance */}
      <GraphiqueLinear
        title="Performance Web VALAIS"
        subtitle="Culture Peinture VALAIS - 200+ jours GA4 marché local"
        primaryMetric={{
          label: "Site Web VALAIS osom",
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
      title="Création Site Internet Valais - Agence Web N°1"
      subtitle="Création site internet valais - 1718 recherches/mois"
      heroDescription="Spécialiste création site internet Valais : 1718 recherches mensuelles confirment notre expertise N°1. Agence web Valais révolutionnaire avec SEO Valais intégré. Architecture Next.js + TypeScript maîtrisée. 11.3% conversion vs 2-3% industrie dès nos premiers projets valaisans."
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
          value: "4500 CHF",
          label: "osom Web Formula VALAIS",
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
      ]}
      ctaText="Démarrer mon projet web"
      
      methodTitle="Méthode création site internet Valais OSOM"
      methodDescription="Agence web Valais nouvelle génération : création site internet Valais avec SEO Valais intégré. Stack moderne Next.js 14 + TypeScript maîtrisé à fond. Spécialistes création site internet Valais, résultats immédiats : 140x performance vs publicité payante (Culture Peinture). Expertise technique supérieure, jeunes et motivés pour réussir vos projets web en Valais."
      processSteps={[
        {
          number: "01",
          title: "architecture conversion moderne",
          description: "Design UX basé sur les dernières recherches comportementales. Navigation intuitive, temps de charge ultra-rapide, formulaires optimisés. Approche moderne sans préjugés, testée sur nos premiers clients valaisans."
        },
        {
          number: "02", 
          title: "SEO Valais technique avancé",
          description: "SEO Valais expert : création site internet Valais optimisée pour Google local. Maîtrise technique SEO Valais moderne : Google Business Profile, schema markup, contenu géolocalisé. Agence web Valais spécialisée SEO avec GA4 configuré proprement pour le marché valaisan."
        },
        {
          number: "03",
          title: "stack technique de pointe", 
          description: "Maîtrise complète : Next.js 14, React Server Components, TypeScript, Tailwind CSS, Framer Motion. Hébergement Suisse, Cloudflare CDN. Technologies modernes parfaitement maîtrisées par des développeurs passionnés."
        }
      ]}
      
      proofTitle="preuves d'impact mesurable"
      proofContent={proofContent}
      
      featuresTitle="Stack technique premium - Création site internet Valais"
      featuresDescription="Agence web Valais : stack technique création site internet Valais de pointe avec SEO Valais intégré. Technologies modernes maîtrisées par développeurs obsessés par la performance. Spécialistes création site internet Valais, approche fraîche optimisée pour le marché local valaisan."
      features={[
        {
          icon: "",
          title: "Architecture Next.js 14",
          description: "Framework React moderne, rendu hybride SSR/SSG, optimisation automatique images et fonts"
        },
        {
          icon: "", 
          title: "Performance Web Core Vitals",
          description: "Score 95+ PageSpeed, LCP < 1.5s, CLS optimisé, hébergement CDN Suisse"
        },
        {
          icon: "",
          title: "SEO Technique Avancé", 
          description: "Schema markup, sitemap dynamique, meta tags optimisés, internal linking intelligent"
        },
        {
          icon: "",
          title: "Tracking & Analytics Pro",
          description: "GA4 configuré, événements conversion, attribution multi-touch, ROI transparent"
        },
        {
          icon: "",
          title: "Mobile-First Responsive",
          description: "Design system Tailwind, animations Framer Motion, touch-friendly interface"
        },
        {
          icon: "",
          title: "Sécurité & Maintenance",
          description: "SSL A+, protection DDoS Cloudflare, sauvegardes automatiques, monitoring 24/7"
        }
      ]}
      
      faqTitle="Questions Fréquentes - Site Web VALAIS"
      faqItems={[
        {
          question: "Combien coûte la création site internet Valais vraiment professionnelle avec votre agence web Valais ?",
          answer: "Notre création site internet Valais OSOM Formula est fixée à 4500 CHF tout inclus - prix transparent, zéro surprise. Agence web Valais premium comprend : design sur-mesure marché valaisan, développement Next.js 14 haute performance, SEO Valais expert (Google Business + citations locales + contenu géo), analytics GA4 configuré secteur, formation complète 2h, hébergement premium Suisse 1 an, support technique 3 mois. Création site internet Valais livrée 45 jours ouvrables ou remboursé."
        },
        {
          question: "Pourquoi choisir Next.js plutôt que WordPress ou Wix pour mon site d'entreprise valaisanne ?",
          answer: "Next.js représente l'état de l'art en développement web moderne. Performances : 3x plus rapide que WordPress, 5x plus que Wix. Sécurité : aucune vulnérabilité plugin, mises à jour automatiques. SEO : structure technique parfaite, rendu serveur optimisé. Évolutivité : croissance illimitée sans refonte. Nos sites atteignent 95+ PageSpeed vs 60-70 WordPress, 40-50 Wix. Investissement pérenne, technologie future-proof utilisée par Netflix, TikTok, Hulu."
        },
        {
          question: "Comment garantissez-vous concrètement 11.3% de taux de conversion face aux 2.5% industrie ?",
          answer: "Méthodologie OSOM scientifique éprouvée : 1) Étude comportementale spécifique marché valaisan (6 ans de données), 2) Architecture UX optimisée psychologie locale, 3) A/B testing continu sur boutons/textes/couleurs, 4) Analytics comportementaux pour détecter frictions, 5) Optimisation permanente basée data réelles. Preuve : Culture Peinture VALAIS, 11.3% maintenu sur 200+ jours GA4, vs 2.5% concurrent direct même période. Méthode reproductible, documentee, transférable."
        },
        {
          question: "Quelle est concrètement votre différence avec les 50+ agences web valaisannes traditionnelles ?",
          answer: "Différence fondamentale : approche 100% data-driven vs créativité subjective. Chaque pixel, couleur, texte est décidé par la data, jamais par opinion. Résultat mesurable : 140x plus efficace que publicité payante (688 vs 49 conversions Culture Peinture, GA4 + Meta Business Manager vérifiables). Transparence totale : accès vos analytics, code source, méthodologie. Spécialisation VALAIS unique : 6 ans d'étude comportementale locale, comprendre saisonnalité, multilinguisme, spécificités alpines. Agences traditionnelles = templates génériques. OSOM = science appliquée marché valaisan."
        },
        {
          question: "Votre référencement SEO local VALAIS est-il vraiment efficace et comment le prouvez-vous ?",
          answer: "SEO local VALAIS maîtrisé depuis 2019, méthodologie éprouvée. Technique : Google Business Profile optimisé + 50+ citations locales structurées + schema markup LocalBusiness + contenu géolocalisé par commune + maillage interne intelligent. Preuve concrète : Artisane de Lumière, position 21.67 → page 1 position 3 en 6 mois, trafic +340%, conversions +180%. Suivi transparent : Search Console partagée, rapports mensuels détaillés, call reviews stratégie. Garantie : amélioration positions ou optimisation gratuite 3 mois supplémentaires."
        },
        {
          question: "Après livraison, puis-je vraiment gérer et faire évoluer mon site en totale autonomie sans dépendance technique ?",
          answer: "Autonomie totale garantie, zéro dépendance. Formation incluse 2h : gestion contenu via interface visuelle intuitive, ajout pages/produits, optimisation images automatique, suivi analytics interprté (ROI, sources trafic, conversions). Documentation vidéo personnalisée. Support technique 3 mois : réponse <24h questions, ajustements mineurs inclus. Code source fourni, hébergement transférable. Objectif OSOM : votre indépendance digitale complète. 95% clients gèrent seuls après formation. Si bloqué : hotline gratuite première année."
        }
      ]}
      
      pricingTitle="Création site internet Valais - OSOM Formula"
      price="4500 CHF"
      pricingDescription="Agence web Valais formule premium : Création site internet Valais complète avec SEO Valais intégré. Design + Développement Next.js + SEO local + Analytics + Formation. Spécialistes création site internet Valais, livraison garantie 45 jours."
      pricingFeatures={[
        "Design adapté marché VALAIS",
        "Mobile-first Suisse",
        "SEO local VALAIS optimisé",
        "GA4 marché local configuré", 
        "Formation création contenu + stratégie ",
        "Livraison VALAIS 45 jours"
      ]}
      finalCtaText="démarrer mon projet web premium"
    />
  )
}