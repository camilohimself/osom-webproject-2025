import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Footer } from '@/components/layout'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'
import { cookies } from 'next/headers'
import AnalyticsScripts from '@/components/analytics/AnalyticsScripts'
import { ABTestProvider } from '@/components/ab-testing/ABTestProvider'
import CookieBanner from '@/components/cookies/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.osom.ch'),
  title: 'OSOM | Agence Web Valais N°1 - Création Site Internet × SEO',
  description: 'Agence Web VALAIS N°1 : 1589 recherches/mois confirment notre expertise. Création site internet (1718 recherches), SEO Valais (772), Marketing digital révolutionnaire.',
  keywords: 'agence web valais, création site internet valais, seo valais, marketing digital valais, agence marketing valais, référencement valais, agence digitale valais, site web valais',
  authors: [{ name: 'osom Agency' }],
  robots: 'index, follow',
  openGraph: {
    title: 'osom - Agence Web Digitale Valais',
    description: 'Agence web spécialisée dans la création de sites internet, SEO, et marketing digital en Valais.',
    url: 'https://www.osom.ch',
    siteName: 'osom',
    locale: 'fr_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.osom.ch',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get locale from cookie (set by middleware)
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  
  let currentLocale = defaultLocale
  if (localeCookie && locales.includes(localeCookie as Locale)) {
    currentLocale = localeCookie as Locale
  }

  const dictionary = await getDictionary(currentLocale)

  return (
    <html lang={currentLocale}>
      <head>
        {/* DNS Prefetch & Preconnect pour performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />

        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />

        {/* Defer Calendly - non-critical */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          defer
        ></script>
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <div id="app-container">
          <ABTestProvider>
            <Header currentLocale={currentLocale} dictionary={dictionary} />
            <Breadcrumb />
            <main>
              {children}
            </main>
            <Footer currentLocale={currentLocale} dictionary={dictionary} />
          </ABTestProvider>

          {/* Cookie Consent Banner */}
          <CookieBanner />
        </div>

        {/* Advanced Analytics Scripts */}
        <AnalyticsScripts />
      </body>
    </html>
  )
}