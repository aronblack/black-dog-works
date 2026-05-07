import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { headers } from 'next/headers'
import { ThemeProvider, ThemeScript } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Black Dog Works',
  description:
    'Custom replacement parts, rapid prototyping, and modern fabrication solutions.',
  keywords: [
    '3D printing',
    'custom parts',
    'replacement parts',
    'rapid prototyping',
    'Montreal 3D printing',
    'prototype service',
  ],
  openGraph: {
    title: 'Black Dog Works',
    description:
      'Custom replacement parts and rapid prototyping.',
    images: ['/og-image.png'],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const locale = headersList.get('x-locale') || 'en'
  return (
    <html lang={locale} className={GeistSans.className} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}