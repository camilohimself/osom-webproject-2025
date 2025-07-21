import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './src/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const localeParam = searchParams.get('locale')
  
  // If there's a locale parameter, set it as a cookie and redirect without the parameter
  if (localeParam && locales.includes(localeParam as any)) {
    const response = NextResponse.redirect(new URL(pathname, request.url))
    response.cookies.set('NEXT_LOCALE', localeParam, { 
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
    })
    return response
  }

  // Handle direct URL slugs like /en, /de, /fr
  const pathSegments = pathname.split('/')
  const firstSegment = pathSegments[1]
  
  if (firstSegment && locales.includes(firstSegment as any)) {
    // Set the locale cookie and rewrite to the path without locale
    const pathWithoutLocale = '/' + pathSegments.slice(2).join('/')
    const response = NextResponse.rewrite(new URL(pathWithoutLocale || '/', request.url))
    
    response.cookies.set('NEXT_LOCALE', firstSegment, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
    })
    
    // Also set a header so layout can read it immediately
    response.headers.set('x-current-locale', firstSegment)
    
    return response
  }

  // For all other requests, just continue
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
}