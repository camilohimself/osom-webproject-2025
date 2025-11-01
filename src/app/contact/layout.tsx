import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Développeur Web Valais | Devis Gratuit | OSOM',
  description: 'Contactez OSOM pour votre projet web. Réponse en 24h. WhatsApp, téléphone, email. Développeur web basé à Bramois, Valais.',
  keywords: 'contact développeur web valais, devis site web gratuit, agence web contact, bramois valais',
  alternates: {
    canonical: 'https://www.osom.ch/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
