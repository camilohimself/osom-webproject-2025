/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'osom-webproject-2025.netlify.app'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig