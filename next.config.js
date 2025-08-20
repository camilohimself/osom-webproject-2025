/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'osom-webproject-2025.netlify.app'],
  },
  serverExternalPackages: ['@sanity/client'],
  output: 'standalone',
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig