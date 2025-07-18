import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OSOM - Agence Web Digitale Valais | Création Site Internet',
  description: 'Agence web spécialisée dans la création de sites internet, SEO, et marketing digital en Valais. Expertise Next.js, design UX/UI moderne.',
  keywords: 'agence web valais, création site internet, SEO, marketing digital, Next.js, design UX/UI',
  authors: [{ name: 'OSOM Agency' }],
  viewport: 'width=device-width, initial-scale=1',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}