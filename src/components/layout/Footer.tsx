import Link from 'next/link'
import { Logo } from '@/components/ui'
import { type Locale } from '@/lib/i18n'

interface FooterProps {
  currentLocale: Locale
  dictionary: any
}

export default function Footer({ currentLocale, dictionary }: FooterProps) {
  const services = [
    { name: dictionary.services['web-development'], href: '/services/creation-site-web' },
    { name: 'Programmation & IA', href: '/services/programmation-ia' },
    { name: dictionary.services['seo-marketing'], href: '/services/seo-content-marketing' },
    { name: dictionary.services['marketing-automation'], href: '/services/marketing-automation-crm' },
    { name: dictionary.services['tracking-data'], href: '/services/tracking-data' },
  ]

  const localPages = [
    { name: 'Valais', href: '/local/valais' },
    { name: 'Sion', href: '/local/sion' },
    { name: 'Lausanne', href: '/local/lausanne' },
    { name: 'Genève', href: '/local/geneve' },
    { name: 'Fribourg', href: '/local/fribourg' },
    { name: 'Neuchâtel', href: '/local/neuchatel' },
  ]

  const legalPages = [
    { name: 'Mentions légales', href: '/legal/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/legal/politique-confidentialite' },
    { name: 'Conditions générales', href: '/legal/conditions-generales' },
    { name: 'Politique des cookies', href: '/legal/cookies' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/osom-ch/posts/?feedView=all', icon: 'linkedin' },
    { name: 'Instagram', href: 'https://www.instagram.com/osom.ch/', icon: 'instagram' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@osom.ch', icon: 'tiktok' },
    { name: 'X', href: 'http://x.com/osom_ch', icon: 'twitter' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61562483814741', icon: 'facebook' },
  ]

  return (
    <footer className="bg-osom-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo size="sm" variant="white" />
              <span className="text-xl font-bold">osom</span>
            </div>
            <p className="text-brand-light text-sm">
              Agence web digitale spécialisée dans la création de sites internet performants, 
              le SEO et le marketing digital en Valais.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@osom.ch</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+41 79 128 95 49</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rue de Clodevis 13, 1967 Bramois</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{dictionary.navigation.services}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-brand-light hover:text-brand-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{dictionary.navigation.local}</h3>
            <ul className="space-y-2">
              {localPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="text-brand-light hover:text-brand-primary transition-colors text-sm"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-brand-light text-sm">
              Recevez nos dernières actualités et conseils digitaux.
            </p>
            <form className="space-y-2" action="/api/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                required
              />
              <button
                type="submit"
                className="w-full bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-osom-teal transition-colors font-medium"
              >
                S&apos;abonner
              </button>
            </form>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.691.307 3.966.598c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.339 4.864.158 5.7.102 6.929.046 8.162.032 8.569.032 12.017c0 3.447.014 3.854.07 5.086.056 1.23.236 2.065.527 2.79.306.788.717 1.457 1.384 2.124.667.666 1.336 1.079 2.124 1.384.725.292 1.561.472 2.79.528 1.233.056 1.639.07 5.087.07 3.447 0 3.854-.014 5.086-.07 1.23-.056 2.065-.236 2.79-.527.788-.306 1.457-.718 2.124-1.384.666-.667 1.079-1.335 1.384-2.124.291-.725.471-1.56.527-2.79.056-1.232.07-1.639.07-5.086 0-3.448-.014-3.855-.07-5.087-.056-1.229-.236-2.064-.527-2.79-.305-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.862.63c-.725-.291-1.56-.471-2.79-.527C15.841.016 15.434.002 12.017.002h-.002zm-.017 2.158c3.362 0 3.754.013 5.077.067 1.225.056 1.89.26 2.333.432.586.228 1.005.5 1.444.939.44.44.71.859.94 1.444.171.443.375 1.108.43 2.333.055 1.323.068 1.715.068 5.077 0 3.361-.013 3.754-.068 5.077-.055 1.225-.259 1.89-.43 2.333-.23.586-.5 1.005-.94 1.444-.44.44-.858.71-1.444.94-.443.171-1.108.375-2.333.43-1.323.055-1.715.068-5.077.068-3.361 0-3.754-.013-5.077-.068-1.225-.055-1.89-.259-2.333-.43-.586-.23-1.005-.5-1.444-.94-.44-.44-.71-.858-.94-1.444-.171-.443-.375-1.108-.43-2.333-.055-1.323-.068-1.715-.068-5.077 0-3.362.013-3.754.068-5.077.055-1.225.259-1.89.43-2.333.23-.586.5-1.005.94-1.444.44-.44.858-.71 1.444-.94.443-.171 1.108-.375 2.333-.43 1.323-.055 1.715-.068 5.077-.068z"/>
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-brand-light">
            {legalPages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className="hover:text-brand-primary transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-brand-light mt-4 md:mt-0">
            © {new Date().getFullYear()} osom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}