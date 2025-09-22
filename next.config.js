/** @type {import('next').NextConfig} */
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
      '@react-three/fiber',
      'recharts',
      'lucide-react'
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

module.exports = nextConfig