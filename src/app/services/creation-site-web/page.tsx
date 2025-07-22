import ServicePageTemplatePremium from '@/components/templates/ServicePageTemplatePremium'
import { MetricsPulse, ComparisonChart, ProgressMeter } from '@/components/charts'
import { GraphiqueLinear } from '@/components/ui'

export const metadata = {
  title: 'Création Site Internet Valais | Agence Web Premium - osom',
  description: 'Agence web Valais experte création site internet haute performance. 11.3% conversion (4x industrie), Next.js, SEO local. 1500 CHF, livraison 10 jours garantie.',
  keywords: 'création site internet valais, agence web valais, site web performance valais, développement web next.js valais, site vitrine conversion valais, e-commerce valais, agence digitale martigny sion'
}

export default function CreationSiteWebPage() {
  const proofContent = (
    <div className="space-y-8">
      {/* GraphiqueLinear - Conversion Performance */}
      <GraphiqueLinear
        title="Performance Web Valais"
        subtitle="Culture Peinture Valais - 200+ jours GA4 marché local"
        primaryMetric={{
          label: "Site Web Valais osom",
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
          value: "14x marché Valais"
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
      title="Création Site Internet Valais"
      subtitle="Agence Web Valais"
      heroDescription="Agence web Valais spécialisée sites internet haute performance. Architecture Next.js + SEO local expert. 11.3% conversion (4x industrie) - Méthodologie éprouvée Culture Peinture."
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
          value: "1500 CHF",
          label: "osom Web Formula Valais",
          description: "Site Valais complet livré 10 jours",
          animatedValue: 1500,
          suffix: " CHF",
          tooltip: {
            title: "Formule Premium Tout Inclus",
            details: "Design, développement, SEO, hébergement 1 an",
            highlight: "Livraison garantie sous 10 jours ouvrés"
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
            details: "Culture Peinture Valais - Case Study Complet GA4",
            highlight: "688 conversions organiques vs 49 publicité payante"
          }
        }
      ]}
      ctaText="Démarrer mon projet web"
      
      methodTitle="Méthode Web Valais osom"
      methodDescription="Développement web Valais moderne : Next.js + React + SEO technique. Méthode OSOM validée 140x performance vs publicité payante. Spécialistes conversion locale Sion, Martigny, Monthey."
      processSteps={[
        {
          number: "01",
          title: "Architecture Conversion Valais",
          description: "Design adapté marché Valais, UX optimisée clients locaux Sion/Martigny/Monthey"
        },
        {
          number: "02", 
          title: "SEO Local Valais Intégré",
          description: "Structure technique + SEO local Valais, vitesse optimisée, GA4 marché local"
        },
        {
          number: "03",
          title: "Stack Technique Premium", 
          description: "Next.js 14, TypeScript, Tailwind CSS, Framer Motion. Hébergement Suisse, CDN global, scores 95+ PageSpeed"
        }
      ]}
      
      proofTitle="Preuve d'Impact Mesurable"
      proofContent={proofContent}
      
      featuresTitle="Technologies Premium"
      featuresDescription="Stack technique moderne pour des performances maximales"
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
      
      faqTitle="Questions Fréquentes - Site Web Valais"
      faqItems={[
        {
          question: "Combien coûte un site internet professionnel en Valais ?",
          answer: "Notre OSOM Web Formula est fixée à 1500 CHF tout inclus : design sur-mesure, développement Next.js, SEO local Valais, analytics GA4, formation et hébergement 1 an. Prix transparent sans surprise, livraison garantie 10 jours."
        },
        {
          question: "Pourquoi choisir Next.js plutôt que WordPress pour mon site ?",
          answer: "Next.js offre des performances supérieures : temps de chargement 3x plus rapide, sécurité renforcée, SEO technique optimal et évolutivité. Nos sites atteignent 95+ PageSpeed vs 60-70 pour WordPress standard."
        },
        {
          question: "Comment garantissez-vous 11.3% de taux de conversion ?",
          answer: "Notre méthodologie OSOM combine : architecture UX optimisée marché Valais, A/B testing systématique, analytics comportementaux et optimisation continue. Case study Culture Peinture : 11.3% vs 2.5% industrie sur 200+ jours GA4."
        },
        {
          question: "Quelle est la différence avec une agence web traditionnelle ?",
          answer: "OSOM = approche data-driven transparente. Chaque décision design/technique est mesurée et justifiée. Résultat : 140x plus efficace que publicité payante (688 vs 49 conversions Culture Peinture). ROI tracé et prouvé."
        },
        {
          question: "Proposez-vous le référencement SEO local Valais ?",
          answer: "Oui, SEO local intégré dans chaque projet : Google Business Profile, citations locales Sion/Martigny/Monthey, schema markup LocalBusiness, contenu géolocalisé. Case study Artisane de Lumière : position 21 → page 1 en 6 mois."
        },
        {
          question: "Puis-je gérer mon site en autonomie après livraison ?",
          answer: "Absolument. Interface admin intuitive + formation complète incluse : gestion contenu, ajout pages, optimisation images, suivi analytics. Support technique 3 mois offert pour totale autonomie."
        }
      ]}
      
      pricingTitle="osom Web Formula Valais"
      price="1500 CHF"
      pricingDescription="Site Internet Valais : Design + Développement + SEO Local + Analytics + Formation"
      pricingFeatures={[
        "Design adapté marché Valais",
        "Mobile-first Suisse",
        "SEO local Valais optimisé",
        "GA4 marché local configuré", 
        "Formation création contenu",
        "Livraison Valais 10 jours"
      ]}
      finalCtaText="Commander mon site web Valais"
    />
  )
}