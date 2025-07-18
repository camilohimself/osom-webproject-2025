/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['fr', 'en', 'de'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig