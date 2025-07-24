import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timer Industriel - OSOM',
  description: 'Application de gestion du temps par QR code pour l\'industrie',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-industrial">
        <div className="min-h-screen bg-industrial-100">
          {children}
        </div>
      </body>
    </html>
  )
}