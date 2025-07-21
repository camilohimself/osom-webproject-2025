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
  const url = request.nextUrl.clone()
  
  // Handle locale changes via URL parameters
  const localeParam = url.searchParams.get('locale')
  
  if (localeParam && locales.includes(localeParam as any)) {
    // Set locale cookie and redirect to clean URL
    const cleanUrl = url.origin + pathname
    const response = NextResponse.redirect(cleanUrl)
    response.cookies.set('NEXT_LOCALE', localeParam, { 
      httpOnly: false, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 31536000 // 1 year
    })
    return response
  }

  // Get current locale from cookie or default
  const currentLocale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale
  
  // Ensure we have a valid locale
  const validLocale = locales.includes(currentLocale as any) ? currentLocale : defaultLocale
  
  // Set locale header for the app to read
  const response = NextResponse.next()
  response.headers.set('x-locale', validLocale)
  
  // Refresh cookie with current locale
  response.cookies.set('NEXT_LOCALE', validLocale, { 
    httpOnly: false, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 31536000 // 1 year
  })
  
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
}