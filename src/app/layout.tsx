import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Footer } from '@/components/layout'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'
import { cookies } from 'next/headers'
import AnalyticsScripts from '@/components/analytics/AnalyticsScripts'
import { ABTestProvider } from '@/components/ab-testing/ABTestProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://osom.ch'),
  title: 'OSOM | Agence Web Valais N°1 - Création Site Internet × SEO',
  description: 'Agence Web VALAIS N°1 : 1589 recherches/mois confirment notre expertise. Création site internet (1718 recherches), SEO Valais (772), Marketing digital révolutionnaire.',
  keywords: 'agence web valais, création site internet valais, seo valais, marketing digital valais, agence marketing valais, référencement valais, agence digitale valais, site web valais',
  authors: [{ name: 'osom Agency' }],
  robots: 'index, follow',
  openGraph: {
    title: 'osom - Agence Web Digitale Valais',
    description: 'Agence web spécialisée dans la création de sites internet, SEO, et marketing digital en Valais.',
    url: 'https://osom.ch',
    siteName: 'osom',
    locale: 'fr_CH',
    type: 'website',
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={inter.className}>
        <div id="app-container">
          <ABTestProvider>
            <Header currentLocale={currentLocale} dictionary={dictionary} />
            <main>
              {children}
            </main>
            <Footer currentLocale={currentLocale} dictionary={dictionary} />
          </ABTestProvider>
        </div>
        
        {/* Advanced Analytics Scripts */}
        <AnalyticsScripts />
      </body>
    </html>
  )
}