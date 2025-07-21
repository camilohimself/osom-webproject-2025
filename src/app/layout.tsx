import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ClientLayout } from '@/components/ClientLayout'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}