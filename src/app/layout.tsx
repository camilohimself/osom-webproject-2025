import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Footer } from '@/components/layout'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'
import { headers, cookies } from 'next/headers'

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

async function getLocaleFromRequest(): Promise<Locale> {
  const headersList = await headers()
  const cookieStore = await cookies()
  
  const locale = headersList.get('x-locale') || 
    cookieStore.get('NEXT_LOCALE')?.value || 
    defaultLocale
  
  return locales.includes(locale as Locale) ? locale as Locale : defaultLocale
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentLocale = await getLocaleFromRequest()
  const dictionary = await getDictionary(currentLocale)

  return (
    <html lang={currentLocale}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={inter.className}>
        <Header currentLocale={currentLocale} dictionary={dictionary} />
        <main>
          {children}
        </main>
        <Footer currentLocale={currentLocale} dictionary={dictionary} />
      </body>
    </html>
  )
}