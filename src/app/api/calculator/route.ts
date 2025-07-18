import { NextRequest, NextResponse } from 'next/server'
import { calculateROI } from '@/lib/calculator-logic'
import type { CalculatorInputs } from '@/types/calculator'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = [
      'companySize', 'industry', 'currentWebsite', 'monthlyBudget',
      'primaryGoal', 'timeline', 'hasInternalTeam', 'currentMonthlyVisitors',
      'currentConversionRate', 'averageOrderValue'
    ]

    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate data types and ranges
    const inputs: CalculatorInputs = {
      companySize: body.companySize,
      industry: body.industry,
      currentWebsite: body.currentWebsite,
      monthlyBudget: Math.max(0, Number(body.monthlyBudget)),
      primaryGoal: body.primaryGoal,
      timeline: body.timeline,
      hasInternalTeam: Boolean(body.hasInternalTeam),
      currentMonthlyVisitors: Math.max(0, Number(body.currentMonthlyVisitors)),
      currentConversionRate: Math.max(0, Math.min(100, Number(body.currentConversionRate))),
      averageOrderValue: Math.max(0, Number(body.averageOrderValue))
    }

    // Validate enum values
    const validCompanySizes = ['startup', 'small', 'medium', 'large']
    const validIndustries = ['ecommerce', 'services', 'saas', 'manufacturing', 'healthcare', 'finance', 'other']
    const validWebsiteTypes = ['none', 'basic', 'professional', 'advanced']
    const validGoals = ['traffic', 'leads', 'sales', 'brand', 'engagement']
    const validTimelines = ['3months', '6months', '12months', '24months']

    if (!validCompanySizes.includes(inputs.companySize)) {
      return NextResponse.json(
        { error: 'Invalid company size' },
        { status: 400 }
      )
    }

    if (!validIndustries.includes(inputs.industry)) {
      return NextResponse.json(
        { error: 'Invalid industry' },
        { status: 400 }
      )
    }

    if (!validWebsiteTypes.includes(inputs.currentWebsite)) {
      return NextResponse.json(
        { error: 'Invalid website type' },
        { status: 400 }
      )
    }

    if (!validGoals.includes(inputs.primaryGoal)) {
      return NextResponse.json(
        { error: 'Invalid primary goal' },
        { status: 400 }
      )
    }

    if (!validTimelines.includes(inputs.timeline)) {
      return NextResponse.json(
        { error: 'Invalid timeline' },
        { status: 400 }
      )
    }

    // Calculate ROI
    const results = calculateROI(inputs)

    // Log for analytics (in production, send to analytics service)
    console.log('Calculator usage:', {
      timestamp: new Date().toISOString(),
      inputs: {
        companySize: inputs.companySize,
        industry: inputs.industry,
        monthlyBudget: inputs.monthlyBudget,
        primaryGoal: inputs.primaryGoal,
        timeline: inputs.timeline
      },
      results: {
        roi: results.roi,
        projectedRevenue: results.projectedRevenue,
        confidence: results.confidence
      }
    })

    return NextResponse.json({
      success: true,
      data: results
    })

  } catch (error) {
    console.error('Calculator API Error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Something went wrong'
      },
      { status: 500 }
    )
  }
}

// Handle GET requests for API documentation
export async function GET() {
  return NextResponse.json({
    name: 'OSOM ROI Calculator API',
    version: '1.0.0',
    description: 'Calculate ROI projections for digital marketing investments',
    endpoints: {
      'POST /api/calculator': {
        description: 'Calculate ROI based on business parameters',
        parameters: {
          companySize: 'startup | small | medium | large',
          industry: 'ecommerce | services | saas | manufacturing | healthcare | finance | other',
          currentWebsite: 'none | basic | professional | advanced',
          monthlyBudget: 'number (minimum 0)',
          primaryGoal: 'traffic | leads | sales | brand | engagement',
          timeline: '3months | 6months | 12months | 24months',
          hasInternalTeam: 'boolean',
          currentMonthlyVisitors: 'number (minimum 0)',
          currentConversionRate: 'number (0-100)',
          averageOrderValue: 'number (minimum 0)'
        },
        response: {
          roi: 'number (percentage)',
          projectedRevenue: 'number',
          projectedTraffic: 'number',
          projectedLeads: 'number',
          projectedConversionRate: 'number',
          investmentBreakdown: 'object',
          timeline: 'object',
          recommendations: 'string[]',
          confidence: 'number (60-95)'
        }
      }
    },
    examples: {
      request: {
        companySize: 'small',
        industry: 'services',
        currentWebsite: 'basic',
        monthlyBudget: 3000,
        primaryGoal: 'leads',
        timeline: '12months',
        hasInternalTeam: false,
        currentMonthlyVisitors: 500,
        currentConversionRate: 2.5,
        averageOrderValue: 1200
      }
    }
  })
}