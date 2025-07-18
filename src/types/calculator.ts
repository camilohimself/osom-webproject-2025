export interface CalculatorInputs {
  companySize: 'startup' | 'small' | 'medium' | 'large'
  industry: 'ecommerce' | 'services' | 'saas' | 'manufacturing' | 'healthcare' | 'finance' | 'other'
  currentWebsite: 'none' | 'basic' | 'professional' | 'advanced'
  monthlyBudget: number
  primaryGoal: 'traffic' | 'leads' | 'sales' | 'brand' | 'engagement'
  timeline: '3months' | '6months' | '12months' | '24months'
  hasInternalTeam: boolean
  currentMonthlyVisitors: number
  currentConversionRate: number
  averageOrderValue: number
}

export interface CalculatorResults {
  roi: number
  projectedRevenue: number
  projectedTraffic: number
  projectedLeads: number
  projectedConversionRate: number
  investmentBreakdown: {
    webDevelopment: number
    seoOptimization: number
    contentMarketing: number
    paidAdvertising: number
    analytics: number
    maintenance: number
  }
  timeline: {
    month3: { revenue: number; traffic: number; leads: number }
    month6: { revenue: number; traffic: number; leads: number }
    month12: { revenue: number; traffic: number; leads: number }
    month24: { revenue: number; traffic: number; leads: number }
  }
  recommendations: string[]
  confidence: number
}

export interface IndustryMultipliers {
  [key: string]: {
    trafficMultiplier: number
    conversionMultiplier: number
    cpcMultiplier: number
    competitionLevel: 'low' | 'medium' | 'high'
  }
}

export interface CompanySizeFactors {
  [key: string]: {
    budgetMultiplier: number
    complexityMultiplier: number
    timelineMultiplier: number
    resourcesMultiplier: number
  }
}