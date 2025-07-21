// Advanced Analytics Configuration for OSOM
// GA4 + Hotjar + Search Console automation

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
    dataLayer: Array<Record<string, any>>;
    hj: (command: string, ...args: any[]) => void;
  }
}

// GA4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || '1234567';

// Enhanced Event Tracking
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Track Page Views with Enhanced Data
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
      // Enhanced tracking
      custom_map: {
        'custom_dimension_1': 'user_type',
        'custom_dimension_2': 'page_section',
        'custom_dimension_3': 'conversion_intent'
      }
    });

    // Hotjar Page Tracking
    window.hj?.('stateChange', url);
  }
};

// Enhanced Event Tracking with Business Context
export const trackEvent = ({ action, category, label, value, custom_parameters }: AnalyticsEvent) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      // OSOM-specific tracking
      business_context: 'osom_digital_agency',
      tracking_version: '2.0',
      ...custom_parameters
    });

    // Hotjar Event Tracking
    window.hj?.('event', action);
  }
};

// Conversion Tracking (ROI Focus)
export const trackConversion = (conversionType: string, value?: number, currency = 'CHF') => {
  trackEvent({
    action: 'conversion',
    category: 'business_goal',
    label: conversionType,
    value: value,
    custom_parameters: {
      currency: currency,
      conversion_type: conversionType,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent
    }
  });

  // Enhanced Conversion for GA4
  if (typeof window !== 'undefined' && value) {
    window.gtag('event', 'purchase', {
      transaction_id: `osom_${Date.now()}`,
      value: value,
      currency: currency,
      items: [{
        item_id: conversionType,
        item_name: `OSOM Service: ${conversionType}`,
        category: 'digital_service',
        quantity: 1,
        price: value
      }]
    });
  }
};

// Lead Quality Scoring
interface LeadData {
  email: string;
  source: string;
  intent_score: number;
  business_size?: string;
  budget_range?: string;
}

export const trackLead = (leadData: LeadData) => {
  trackEvent({
    action: 'lead_generated',
    category: 'lead_generation',
    label: leadData.source,
    value: leadData.intent_score,
    custom_parameters: {
      lead_quality: leadData.intent_score > 7 ? 'high' : leadData.intent_score > 4 ? 'medium' : 'low',
      business_context: leadData.business_size,
      budget_indicated: leadData.budget_range,
      source_channel: leadData.source
    }
  });

  // Hotjar Identify User
  window.hj?.('identify', leadData.email, {
    source: leadData.source,
    intent_score: leadData.intent_score
  });
};

// Interactive Element Tracking (Premium Components)
export const trackInteractiveElement = (elementType: string, elementId: string, interactionType: string) => {
  trackEvent({
    action: 'interactive_element',
    category: 'engagement',
    label: `${elementType}_${interactionType}`,
    custom_parameters: {
      element_type: elementType,
      element_id: elementId,
      interaction_type: interactionType,
      page_section: document.querySelector(`#${elementId}`)?.closest('section')?.id || 'unknown'
    }
  });
};

// Performance Monitoring Integration
export const trackPerformance = (metricName: string, value: number, unit: string) => {
  trackEvent({
    action: 'performance_metric',
    category: 'technical',
    label: metricName,
    value: Math.round(value),
    custom_parameters: {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit,
      page_url: window.location.pathname,
      timestamp: performance.now()
    }
  });
};

// A/B Test Tracking
export const trackABTest = (testName: string, variant: string, isConversion = false) => {
  trackEvent({
    action: isConversion ? 'ab_test_conversion' : 'ab_test_view',
    category: 'ab_testing',
    label: `${testName}_${variant}`,
    custom_parameters: {
      test_name: testName,
      variant: variant,
      is_conversion: isConversion
    }
  });
};

// Search Console Data Integration (via API)
export const initSearchConsoleIntegration = () => {
  // This would integrate with GSC API for automated reporting
  // Implementation depends on server-side setup
  console.log('🔍 Search Console integration initialized');
};

// Attribution Tracking (Multi-touch)
interface AttributionData {
  touchpoint: string;
  channel: string;
  campaign?: string;
  timestamp: number;
}

export const trackAttribution = (attribution: AttributionData) => {
  // Store attribution data in localStorage for multi-touch attribution
  const existingAttribution = JSON.parse(localStorage.getItem('osom_attribution') || '[]');
  existingAttribution.push({
    ...attribution,
    session_id: sessionStorage.getItem('osom_session_id') || 'unknown'
  });
  
  // Keep only last 10 touchpoints
  if (existingAttribution.length > 10) {
    existingAttribution.shift();
  }
  
  localStorage.setItem('osom_attribution', JSON.stringify(existingAttribution));
  
  trackEvent({
    action: 'attribution_touchpoint',
    category: 'attribution',
    label: attribution.channel,
    custom_parameters: {
      touchpoint_sequence: existingAttribution.length,
      channel: attribution.channel,
      campaign: attribution.campaign
    }
  });
};

// Initialize Analytics on App Start
export const initAnalytics = () => {
  // Generate or retrieve session ID
  if (!sessionStorage.getItem('osom_session_id')) {
    sessionStorage.setItem('osom_session_id', `osom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  }

  // Track initial page load performance
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        trackPerformance('page_load_time', navigation.loadEventEnd - navigation.fetchStart, 'ms');
        trackPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.fetchStart, 'ms');
        trackPerformance('first_paint', performance.getEntriesByType('paint')?.[0]?.startTime || 0, 'ms');
      }, 1000);
    });
  }

  console.log('🚀 OSOM Analytics initialized');
};

// Export utility functions
export const analytics = {
  trackPageView,
  trackEvent,
  trackConversion,
  trackLead,
  trackInteractiveElement,
  trackPerformance,
  trackABTest,
  trackAttribution,
  initAnalytics
};