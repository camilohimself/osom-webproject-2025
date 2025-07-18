import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Footer } from '@/components/layout'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { GSAPProvider } from '@/components/animations'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>
        <GSAPProvider>
          <Header currentLocale={defaultLocale} dictionary={dictionary} />
          <main className="pt-16">
            {children}
          </main>
          <Footer currentLocale={defaultLocale} dictionary={dictionary} />
        </GSAPProvider>
      </body>
    </html>
  )
}