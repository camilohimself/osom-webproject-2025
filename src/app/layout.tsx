import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Footer } from '@/components/layout'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OSOM - Agence Web Digitale Valais | Création Site Internet',
  description: 'Agence web spécialisée dans la création de sites internet, SEO, et marketing digital en Valais. Expertise Next.js, design UX/UI moderne.',
  keywords: 'agence web valais, création site internet, SEO, marketing digital, Next.js, design UX/UI',
  authors: [{ name: 'OSOM Agency' }],
  robots: 'index, follow',
  openGraph: {
    title: 'OSOM - Agence Web Digitale Valais',
    description: 'Agence web spécialisée dans la création de sites internet, SEO, et marketing digital en Valais.',
    url: 'https://osom.ch',
    siteName: 'OSOM',
    locale: 'fr_CH',
    type: 'website',
  },
}

function getLocaleFromUrl(url?: string): Locale {
  if (!url) return defaultLocale
  
  // Check for ?locale= parameter
  const urlObj = new URL(url, 'http://localhost')
  const localeParam = urlObj.searchParams.get('locale')
  
  if (localeParam && locales.includes(localeParam as Locale)) {
    return localeParam as Locale
  }
  
  return defaultLocale
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Try to get locale from URL - this is a simple approach
  let currentLocale = defaultLocale
  
  // In production, we'll default to French and let client-side handle it
  const dictionary = await getDictionary(currentLocale)

  return (
    <html lang={currentLocale}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={inter.className}>
        <div id="app-container">
          <Header currentLocale={currentLocale} dictionary={dictionary} />
          <main>
            {children}
          </main>
          <Footer currentLocale={currentLocale} dictionary={dictionary} />
        </div>
      </body>
    </html>
  )
}