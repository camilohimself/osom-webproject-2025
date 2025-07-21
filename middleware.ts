import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './src/lib/i18n'

// Get the preferred locale
function getLocale(request: NextRequest): string {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Check for locale in cookies
  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale
    return locale
  }

  // Extract locale from pathname
  const segments = pathname.split('/')
  const localeFromPath = segments[1]
  return locales.includes(localeFromPath as any) ? localeFromPath : defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Handle locale changes via URL parameters
  const url = request.nextUrl.clone()
  const localeParam = url.searchParams.get('locale')
  
  if (localeParam && locales.includes(localeParam as any)) {
    // Set locale cookie and redirect to clean URL
    const response = NextResponse.redirect(url.origin + pathname)
    response.cookies.set('NEXT_LOCALE', localeParam, { 
      httpOnly: false, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    return response
  }

  // For root path or locale-specific paths, serve the content with the right locale
  if (pathname === '/' || pathname.startsWith('/fr') || pathname.startsWith('/en') || pathname.startsWith('/de')) {
    const locale = pathname === '/' ? getLocale(request) : pathname.split('/')[1]
    
    // Rewrite to the actual page while preserving the URL
    const newUrl = request.nextUrl.clone()
    
    // If it's a locale-specific path, remove the locale from the pathname for internal routing
    if (pathname !== '/') {
      const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
      newUrl.pathname = pathWithoutLocale
    }
    
    // Set locale in headers for the app to use
    const response = NextResponse.rewrite(newUrl)
    response.headers.set('x-locale', locale)
    response.cookies.set('NEXT_LOCALE', locale, { 
      httpOnly: false, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
}