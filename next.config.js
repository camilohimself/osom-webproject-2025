/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig