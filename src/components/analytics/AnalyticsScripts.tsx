'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { initAnalytics, GA_TRACKING_ID, HOTJAR_ID } from '@/lib/analytics'

const AnalyticsScripts = () => {
  useEffect(() => {
    // Wait for gtag to be available before initializing analytics
    const checkGtagAvailability = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        initAnalytics();
      } else {
        // Retry after 100ms if gtag is not ready
        setTimeout(checkGtagAvailability, 100);
      }
    };

    // Start checking after a small delay to let scripts load
    setTimeout(checkGtagAvailability, 200);
  }, []);

  return (
    <>
      {/* Google Analytics 4 - Deferred for mobile performance */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="lazyOnload"
        onLoad={() => {
          console.log('📊 GA4 loaded successfully');
        }}
      />

      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              // Enhanced ecommerce
              send_page_view: false, // We'll handle this manually
              // Custom parameters for OSOM
              custom_map: {
                'custom_dimension_1': 'user_type',
                'custom_dimension_2': 'engagement_level', 
                'custom_dimension_3': 'business_intent'
              },
              // Performance optimization
              transport_type: 'beacon',
              // Privacy settings
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });

            // Track initial page view with context
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              business_context: 'osom_digital_agency',
              site_version: '2.0_premium'
            });
          `
        }}
      />

      {/* Hotjar - Heatmaps & Session Recording - Deferred */}
      <Script
        id="hotjar"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `
        }}
        onLoad={() => {
          console.log('🔥 Hotjar loaded successfully');
        }}
      />

      {/* Search Console Verification */}
      <meta name="google-site-verification" content="your-search-console-code" />

      {/* Structured Data for Enhanced Analytics */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "osom Digital Agency",
            "description": "Agence web spécialisée en création de sites internet, SEO et marketing digital en Valais",
            "url": "https://osom.ch",
            "telephone": "+41-XX-XXX-XX-XX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sion",
              "addressRegion": "Valais",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.2276",
              "longitude": "7.3608"
            },
            "serviceType": ["Web Development", "SEO", "Digital Marketing", "Analytics"],
            "areaServed": {
              "@type": "State",
              "name": "Valais"
            }
          })
        }}
      />

      {/* Performance Monitoring Integration - Deferred */}
      <Script
        id="performance-monitoring"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Web Vitals tracking
            function trackWebVitals() {
              // LCP - Largest Contentful Paint
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  gtag('event', 'web_vitals', {
                    metric_name: 'LCP',
                    metric_value: Math.round(entry.startTime),
                    metric_unit: 'ms'
                  });
                }
              }).observe({entryTypes: ['largest-contentful-paint']});

              // FID - First Input Delay  
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  gtag('event', 'web_vitals', {
                    metric_name: 'FID',
                    metric_value: Math.round(entry.processingStart - entry.startTime),
                    metric_unit: 'ms'
                  });
                }
              }).observe({entryTypes: ['first-input']});

              // CLS - Cumulative Layout Shift
              let clsValue = 0;
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                  }
                }
                gtag('event', 'web_vitals', {
                  metric_name: 'CLS',
                  metric_value: Math.round(clsValue * 1000) / 1000,
                  metric_unit: 'ratio'
                });
              }).observe({entryTypes: ['layout-shift']});
            }

            // Initialize when DOM is ready
            if (document.readyState === 'complete') {
              trackWebVitals();
            } else {
              window.addEventListener('load', trackWebVitals);
            }
          `
        }}
      />

      {/* Attribution Tracking Script - Deferred */}
      <Script
        id="attribution-tracking"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Track referrer and UTM parameters
            function trackAttribution() {
              const urlParams = new URLSearchParams(window.location.search);
              const referrer = document.referrer;
              
              const attribution = {
                utm_source: urlParams.get('utm_source'),
                utm_medium: urlParams.get('utm_medium'),
                utm_campaign: urlParams.get('utm_campaign'),
                utm_content: urlParams.get('utm_content'),
                utm_term: urlParams.get('utm_term'),
                referrer: referrer,
                landing_page: window.location.pathname,
                timestamp: new Date().toISOString()
              };

              // Store in sessionStorage for cross-page attribution
              sessionStorage.setItem('osom_attribution', JSON.stringify(attribution));

              // Send to GA4
              gtag('event', 'session_start', {
                source: attribution.utm_source || 'direct',
                medium: attribution.utm_medium || 'none',
                campaign: attribution.utm_campaign || 'none',
                referrer_domain: referrer ? new URL(referrer).hostname : 'direct'
              });
            }

            trackAttribution();
          `
        }}
      />
    </>
  );
};

export default AnalyticsScripts;