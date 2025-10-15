/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'osom-webproject-2025.netlify.app',
      }
    ],
  },
  serverExternalPackages: ['@sanity/client'],
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react'
    ],
    // Note: browserslist du package.json est utilisé automatiquement par Next.js 15
    // pour cibler uniquement les navigateurs modernes (-12KB, +4 points PageSpeed)
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // Headers SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
  // Redirections SEO - Récupération jus SEO anciennes pages
  async redirects() {
    return [
      // ===== REDIRECTS 301 STRATÉGIQUES - Récupération 6,676 impressions/mois =====

      // 1. Création sites web → Package Essentiel (2852 impressions/mois)
      {
        source: '/creation-sites-web-valais',
        destination: '/services/essentiel',
        permanent: true, // 301 redirect
      },

      // 2. Référencement SEO → Page locale Valais (2422 impressions/mois)
      {
        source: '/referencement-seo-valais',
        destination: '/local/valais',
        permanent: true,
      },

      // 3. Marketing digital → Package Performance (1324 impressions/mois)
      {
        source: '/marketing-digital-valais',
        destination: '/services/performance',
        permanent: true,
      },

      // 4. Gestion réseaux sociaux → Optimisation Continue (78 impressions/mois)
      {
        source: '/gestion-reseaux-sociaux-valais',
        destination: '/services/optimisation-continue',
        permanent: true,
      },

      // 5. Google My Business → Page locale Valais (96 impressions/mois)
      {
        source: '/optimisation-google-my-business',
        destination: '/local/valais',
        permanent: true,
      },

      // 6. Pages anciennes contact/à propos → Nouvelles pages
      {
        source: '/a-propos-osom',
        destination: '/agence',
        permanent: true,
      },
      {
        source: '/a-propos-agence-marketing-valais-osom',
        destination: '/agence',
        permanent: true,
      },
      {
        source: '/contact-agence-marketing-valais',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-osom',
        destination: '/contact',
        permanent: true,
      },

      // 7. Anciennes pages SEO locales → Pages locales existantes
      {
        source: '/referencement-seo-lausanne',
        destination: '/local/lausanne',
        permanent: true,
      },

      // ===== REDIRECTS ANCIENS SERVICES OBSOLÈTES =====
      {
        source: '/services/creation-site-web',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/marketing-automation-crm',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/programmation-ia',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/seo-content-marketing',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/tracking-data',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)