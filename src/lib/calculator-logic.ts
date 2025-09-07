import type { CalculatorInputs, CalculatorResults, IndustryMultipliers, CompanySizeFactors } from '@/types/calculator'

export const industryMultipliers: IndustryMultipliers = {
  ecommerce: {
    trafficMultiplier: 1.4,
    conversionMultiplier: 1.2,
    cpcMultiplier: 1.3,
    competitionLevel: 'high'
  },
  services: {
    trafficMultiplier: 1.1,
    conversionMultiplier: 1.5,
    cpcMultiplier: 1.1,
    competitionLevel: 'medium'
  },
  saas: {
    trafficMultiplier: 1.3,
    conversionMultiplier: 1.1,
    cpcMultiplier: 1.8,
    competitionLevel: 'high'
  },
  manufacturing: {
    trafficMultiplier: 0.8,
    conversionMultiplier: 1.3,
    cpcMultiplier: 0.9,
    competitionLevel: 'low'
  },
  healthcare: {
    trafficMultiplier: 1.0,
    conversionMultiplier: 1.4,
    cpcMultiplier: 1.2,
    competitionLevel: 'medium'
  },
  finance: {
    trafficMultiplier: 1.2,
    conversionMultiplier: 1.1,
    cpcMultiplier: 2.0,
    competitionLevel: 'high'
  },
  other: {
    trafficMultiplier: 1.0,
    conversionMultiplier: 1.0,
    cpcMultiplier: 1.0,
    competitionLevel: 'medium'
  }
}

export const companySizeFactors: CompanySizeFactors = {
  startup: {
    budgetMultiplier: 0.7,
    complexityMultiplier: 0.8,
    timelineMultiplier: 1.2,
    resourcesMultiplier: 0.6
  },
  small: {
    budgetMultiplier: 1.0,
    complexityMultiplier: 1.0,
    timelineMultiplier: 1.0,
    resourcesMultiplier: 1.0
  },
  medium: {
    budgetMultiplier: 1.5,
    complexityMultiplier: 1.3,
    timelineMultiplier: 0.9,
    resourcesMultiplier: 1.4
  },
  large: {
    budgetMultiplier: 2.2,
    complexityMultiplier: 1.8,
    timelineMultiplier: 0.8,
    resourcesMultiplier: 2.0
  }
}

export const goalMultipliers = {
  traffic: { trafficFocus: 1.5, conversionFocus: 1.0, brandFocus: 1.1 },
  leads: { trafficFocus: 1.2, conversionFocus: 1.4, brandFocus: 1.0 },
  sales: { trafficFocus: 1.1, conversionFocus: 1.5, brandFocus: 1.0 },
  brand: { trafficFocus: 1.3, conversionFocus: 1.0, brandFocus: 1.6 },
  engagement: { trafficFocus: 1.2, conversionFocus: 1.1, brandFocus: 1.3 }
}

export const websiteQualityMultipliers = {
  none: { baselineMultiplier: 0.5, improvementPotential: 3.0 },
  basic: { baselineMultiplier: 0.7, improvementPotential: 2.5 },
  professional: { baselineMultiplier: 1.0, improvementPotential: 1.8 },
  advanced: { baselineMultiplier: 1.2, improvementPotential: 1.3 }
}

export function calculateROI(inputs: CalculatorInputs): CalculatorResults {
  const industryData = industryMultipliers[inputs.industry]
  const companySizeData = companySizeFactors[inputs.companySize]
  const goalData = goalMultipliers[inputs.primaryGoal]
  const websiteData = websiteQualityMultipliers[inputs.currentWebsite]

  // Base calculations
  const monthlyBudget = inputs.monthlyBudget * companySizeData.budgetMultiplier
  const currentVisitors = Math.max(inputs.currentMonthlyVisitors, 100)
  const currentConversion = Math.max(inputs.currentConversionRate, 0.5)
  const avgOrderValue = Math.max(inputs.averageOrderValue, 100)

  // Investment breakdown
  const investmentBreakdown = {
    webDevelopment: monthlyBudget * 0.35,
    seoOptimization: monthlyBudget * 0.25,
    contentMarketing: monthlyBudget * 0.15,
    paidAdvertising: monthlyBudget * 0.15,
    analytics: monthlyBudget * 0.05,
    maintenance: monthlyBudget * 0.05
  }

  // Timeline-based improvements
  const timelineFactors = {
    '3months': { traffic: 1.3, conversion: 1.1 },
    '6months': { traffic: 1.8, conversion: 1.3 },
    '12months': { traffic: 2.5, conversion: 1.6 },
    '24months': { traffic: 3.8, conversion: 2.0 }
  }

  const timelineFactor = timelineFactors[inputs.timeline]
  
  // Calculate projected metrics
  const projectedTraffic = Math.round(
    currentVisitors * 
    timelineFactor.traffic * 
    industryData.trafficMultiplier * 
    goalData.trafficFocus * 
    websiteData.improvementPotential
  )

  const projectedConversionRate = Math.min(
    currentConversion * 
    timelineFactor.conversion * 
    industryData.conversionMultiplier * 
    goalData.conversionFocus * 
    websiteData.improvementPotential,
    15.0 // Cap at 15% conversion rate
  )

  const projectedLeads = Math.round(projectedTraffic * (projectedConversionRate / 100))
  const projectedRevenue = projectedLeads * avgOrderValue

  // Calculate ROI
  const totalInvestment = monthlyBudget * (inputs.timeline === '3months' ? 3 : 
                                          inputs.timeline === '6months' ? 6 : 
                                          inputs.timeline === '12months' ? 12 : 24)
  const roi = Math.round(((projectedRevenue - totalInvestment) / totalInvestment) * 100)

  // Timeline projections
  const timeline = {
    month3: {
      revenue: Math.round(projectedRevenue * 0.25),
      traffic: Math.round(projectedTraffic * 0.3),
      leads: Math.round(projectedLeads * 0.25)
    },
    month6: {
      revenue: Math.round(projectedRevenue * 0.5),
      traffic: Math.round(projectedTraffic * 0.6),
      leads: Math.round(projectedLeads * 0.5)
    },
    month12: {
      revenue: Math.round(projectedRevenue * 0.8),
      traffic: Math.round(projectedTraffic * 0.85),
      leads: Math.round(projectedLeads * 0.8)
    },
    month24: {
      revenue: projectedRevenue,
      traffic: projectedTraffic,
      leads: projectedLeads
    }
  }

  // Generate recommendations
  const recommendations = generateRecommendations(inputs, industryData, companySizeData)

  // Calculate confidence level
  const confidence = calculateConfidence(inputs, industryData)

  return {
    roi,
    projectedRevenue,
    projectedTraffic,
    projectedLeads,
    projectedConversionRate,
    investmentBreakdown,
    timeline,
    recommendations,
    confidence
  }
}

function generateRecommendations(
  inputs: CalculatorInputs, 
  industryData: any, 
  companySizeData: any
): string[] {
  const recommendations: string[] = []

  // Website quality recommendations
  if (inputs.currentWebsite === 'none' || inputs.currentWebsite === 'basic') {
    recommendations.push('Priorité absolue : Développer un site web professionnel et optimisé')
  }

  // Budget recommendations
  if (inputs.monthlyBudget < 2000) {
    recommendations.push('Augmenter le budget marketing pour des résultats plus rapides')
  }

  // Industry-specific recommendations
  if (inputs.industry === 'ecommerce') {
    recommendations.push('Focus sur l\'optimisation du taux de conversion et le SEO produit')
  } else if (inputs.industry === 'services') {
    recommendations.push('Développer une stratégie de content marketing et de lead nurturing')
  } else if (inputs.industry === 'saas') {
    recommendations.push('Investir dans le SEO technique et les campagnes de remarketing')
  }

  // Goal-specific recommendations
  if (inputs.primaryGoal === 'traffic') {
    recommendations.push('Stratégie SEO agressive avec création de contenu premium')
  } else if (inputs.primaryGoal === 'leads') {
    recommendations.push('Optimisation des landing pages et mise en place de lead magnets')
  } else if (inputs.primaryGoal === 'sales') {
    recommendations.push('Focus sur l\'optimisation du tunnel de conversion')
  }

  // Timeline recommendations
  if (inputs.timeline === '3months') {
    recommendations.push('Résultats rapides avec du marketing digital et optimisation CRO')
  } else if (inputs.timeline === '24months') {
    recommendations.push('Stratégie long-terme avec focus sur l\'autorité de domaine')
  }

  // Team recommendations
  if (!inputs.hasInternalTeam) {
    recommendations.push('Externaliser complètement ou former une équipe interne')
  }

  return recommendations.slice(0, 5) // Limit to 5 recommendations
}

function calculateConfidence(inputs: CalculatorInputs, industryData: any): number {
  let confidence = 85 // Base confidence

  // Adjust based on data quality
  if (inputs.currentMonthlyVisitors < 100) confidence -= 10
  if (inputs.currentConversionRate < 0.5) confidence -= 5
  if (inputs.averageOrderValue < 50) confidence -= 5

  // Adjust based on industry competition
  if (industryData.competitionLevel === 'high') confidence -= 5
  if (industryData.competitionLevel === 'low') confidence += 5

  // Adjust based on budget adequacy
  if (inputs.monthlyBudget < 1000) confidence -= 10
  if (inputs.monthlyBudget > 5000) confidence += 5

  // Adjust based on timeline realism
  if (inputs.timeline === '3months') confidence -= 5
  if (inputs.timeline === '12months' || inputs.timeline === '24months') confidence += 5

  return Math.max(60, Math.min(95, confidence))
}