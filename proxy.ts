import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr', 'es'] as const
type Locale = (typeof locales)[number]
const defaultLocale: Locale = 'en'

function getLocale(request: NextRequest): Locale {
  const acceptLang = request.headers.get('accept-language') || ''
  for (const entry of acceptLang.split(',')) {
    const code = entry.trim().split(/[-;]/)[0].toLowerCase()
    if ((locales as readonly string[]).includes(code)) return code as Locale
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }

  // Forward locale as a request header so the root layout can set <html lang>
  const locale =
    locales.find(l => pathname.startsWith(`/${l}`)) ?? defaultLocale
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api|favicon\\.ico|.*\\..*).*) '],
}
