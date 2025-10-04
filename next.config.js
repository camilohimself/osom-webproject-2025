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
  // Redirections sous-pages services vers contact
  async redirects() {
    return [
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