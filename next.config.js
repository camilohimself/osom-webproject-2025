/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'osom-webproject-2025.netlify.app'],
  },
  serverExternalPackages: ['@sanity/client'],
}

module.exports = nextConfig