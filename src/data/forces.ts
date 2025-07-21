// Configuration des Forces Interactives OSOM

export const forcesData = {
  force1: {
    id: "data-driven-design",
    title: "Data-Driven Design",
    subtitle: "Design basé sur la science des données",
    description: "Architecture technique et performance optimisées par l'analyse comportementale utilisateur en temps réel.",
    color: "#EAB308", // Yellow-400
    dashboardMetrics: [
      {
        label: "Taux de Conversion",
        value: 11.3,
        suffix: "%",
        color: "#10B981",
        maxValue: 15,
        isProgress: false
      },
      {
        label: "Performance Core Web Vitals",
        value: 98,
        suffix: "/100",
        color: "#EAB308",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Architecture Score",
        value: 95,
        suffix: "/100",
        color: "#F59E0B",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "User Experience Score",
        value: 94,
        suffix: "/100",
        color: "#84CC16",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Mobile Performance",
        value: 97,
        suffix: "/100",
        color: "#06B6D4",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Temps de Chargement",
        value: 1.2,
        suffix: "s",
        color: "#8B5CF6",
        maxValue: 3,
        isProgress: false
      }
    ],
    caseStudy: {
      title: "Révolution Web OSOM Formula",
      client: "Culture Peinture Valais",
      period: "6 mois • Mars 2024 - Septembre 2024",
      challenge: "Site web obsolète avec taux de conversion catastrophique de 2.3% et performance technique défaillante. Architecture WordPress traditionnelle inadaptée au commerce moderne avec temps de chargement supérieurs à 4 secondes.",
      solution: "Refonte complète avec architecture Next.js 15, design system OSOM optimisé pour la conversion, intégration GA4 avancée et stratégie SEO technique. Système de tracking comportemental et A/B testing systématique des éléments critiques.",
      results: [
        {
          label: "Taux de Conversion Global",
          before: 2.3,
          after: 11.3,
          improvement: "+391%",
          color: "#10B981"
        },
        {
          label: "Performance Core Web Vitals",
          before: 42,
          after: 98,
          improvement: "+133%",
          color: "#EAB308"
        },
        {
          label: "Temps de Chargement (LCP)",
          before: 4200,
          after: 1200,
          improvement: "-71%",
          color: "#06B6D4"
        },
        {
          label: "Score Mobile PageSpeed",
          before: 38,
          after: 97,
          improvement: "+155%",
          color: "#8B5CF6"
        }
      ],
      proof: "Données vérifiées par Google Analytics 4, PageSpeed Insights, et Core Web Vitals Report sur période de 180 jours. Comparatif avant/après avec méthodologie standardisée OSOM et validation par audit technique indépendant.",
      testimonial: {
        quote: "Résultats exceptionnels. Notre nouveau site génère 5x plus de demandes avec une expérience utilisateur remarquable. L'équipe OSOM a transformé notre présence digitale.",
        author: "Marie-Claire Dubois",
        position: "Directrice Marketing • Culture Peinture"
      }
    }
  },
  
  force2: {
    id: "seo-intelligence",
    title: "SEO Intelligence",
    subtitle: "Stratégie SEO basée sur l'intelligence artificielle",
    description: "Diagnostic complet et optimisation technique pour dominer les résultats de recherche avec un ROI mesurable.",
    color: "#06B6D4", // Cyan-400
    dashboardMetrics: [
      {
        label: "Engagement Quality Score",
        value: 68.6,
        suffix: "%",
        color: "#06B6D4",
        maxValue: 100,
        isProgress: false
      },
      {
        label: "Sessions Récupérées",
        value: 14171,
        suffix: "",
        color: "#10B981",
        maxValue: 20000,
        isProgress: false
      },
      {
        label: "Keywords Top 10",
        value: 847,
        suffix: "",
        color: "#F59E0B",
        maxValue: 1000,
        isProgress: false
      },
      {
        label: "Organic CTR",
        value: 12.4,
        suffix: "%",
        color: "#8B5CF6",
        maxValue: 20,
        isProgress: true
      },
      {
        label: "Domain Authority",
        value: 78,
        suffix: "/100",
        color: "#EF4444",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Technical SEO Score",
        value: 96,
        suffix: "/100",
        color: "#84CC16",
        maxValue: 100,
        isProgress: true
      }
    ],
    caseStudy: {
      title: "Excellence SEO Stratégique",
      client: "Artisane de Lumière",
      period: "8 mois • Janvier 2024 - Septembre 2024",
      challenge: "Visibilité organique quasi-inexistante avec seulement 340 sessions mensuelles. Contenu non-optimisé, architecture technique défaillante et positionnement concurrentiel faible sur les requêtes stratégiques de l'artisanat suisse.",
      solution: "Audit SEO technique complet, stratégie de contenu ciblée sur l'expertise artisanale, optimisation technique avancée et link-building local. Implémentation de schema markup spécialisé et stratégie E-A-T pour l'autorité sectorielle.",
      results: [
        {
          label: "Sessions Organiques Mensuelles",
          before: 340,
          after: 14171,
          improvement: "+4067%",
          color: "#06B6D4"
        },
        {
          label: "Engagement Quality Score",
          before: 44.6,
          after: 68.6,
          improvement: "+54%",
          color: "#10B981"
        },
        {
          label: "Keywords Positionnés Top 10",
          before: 23,
          after: 847,
          improvement: "+3583%",
          color: "#F59E0B"
        },
        {
          label: "Taux de Clics Organique",
          before: 3.2,
          after: 12.4,
          improvement: "+288%",
          color: "#8B5CF6"
        }
      ],
      proof: "Analytics GA4 + Search Console sur 8 mois avec comparatif période identique année précédente. Données SEMrush et Ahrefs pour validation externe. Suivi des positions par outil propriétaire OSOM.",
      testimonial: {
        quote: "Transformation digitale complète. De 20 visiteurs par jour à plus de 400, avec une qualité de trafic exceptionnelle. Notre expertise artisanale est maintenant reconnue.",
        author: "Sophie Martineau",
        position: "Fondatrice • Artisane de Lumière"
      }
    }
  },
  
  force3: {
    id: "data-decisions",
    title: "Décisions Data",
    subtitle: "Prise de décision basée sur l'intelligence des données",
    description: "Révolution ROI avec attribution complète et transparence totale sur chaque euro investi dans votre stratégie digitale.",
    color: "#A855F7", // Purple-400
    dashboardMetrics: [
      {
        label: "ROI Multiplier vs Paid",
        value: 140,
        suffix: "x",
        color: "#EF4444",
        maxValue: 200,
        isProgress: false
      },
      {
        label: "Attribution Accuracy",
        value: 98.7,
        suffix: "%",
        color: "#10B981",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Sessions \"Unassigned\" Récupérées",
        value: 14171,
        suffix: "",
        color: "#F59E0B",
        maxValue: 20000,
        isProgress: false
      },
      {
        label: "Conversion Rate Lift",
        value: 78,
        suffix: "%",
        color: "#06B6D4",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Cost per Acquisition Réduction",
        value: 65,
        suffix: "%",
        color: "#8B5CF6",
        maxValue: 100,
        isProgress: true
      },
      {
        label: "Data Quality Score",
        value: 96,
        suffix: "/100",
        color: "#84CC16",
        maxValue: 100,
        isProgress: true
      }
    ],
    caseStudy: {
      title: "Révolution Data-Driven ROI",
      client: "Culture Peinture • Multi-clients",
      period: "12 mois • Données agrégées 2024",
      challenge: "Invisibilité totale du ROI réel avec 14,171 sessions marquées 'Unassigned' dans GA4. Attribution défaillante empêchant l'optimisation budgétaire et sous-investissement dans les canaux organiques performants.",
      solution: "Implémentation GA4 avancée avec Enhanced Ecommerce, Server-Side Tracking, et attribution multi-touch. Dashboard temps réel avec métriques custom et automatisation des rapports ROI par canal d'acquisition.",
      results: [
        {
          label: "Sessions Correctement Attribuées",
          before: 12840,
          after: 27011,
          improvement: "+110%",
          color: "#10B981"
        },
        {
          label: "Efficacité vs Publicité Payante",
          before: 1,
          after: 140,
          improvement: "140x plus",
          color: "#EF4444"
        },
        {
          label: "Précision Attribution",
          before: 67.8,
          after: 98.7,
          improvement: "+46%",
          color: "#06B6D4"
        },
        {
          label: "Réduction Coût d'Acquisition",
          before: 0,
          after: 65,
          improvement: "-65%",
          color: "#8B5CF6"
        }
      ],
      proof: "Audit GA4 comparatif avant/après sur 12 mois. Validation croisée Meta Business Manager, Google Ads et données CRM. Méthodologie OSOM certifiée Google Analytics et transparence totale des données client.",
      testimonial: {
        quote: "Vision complète de notre performance enfin accessible. Nous savons précisément où investir et pouvons prouver le ROI de chaque action marketing. Game changer total.",
        author: "Thomas Reyard",
        position: "Directeur • Culture Peinture Valais"
      }
    }
  }
}