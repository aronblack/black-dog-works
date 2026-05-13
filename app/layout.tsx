import './globals.css'
import type { Metadata } from 'next'
import { Bebas_Neue, Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas-neue' })
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
    <html lang={locale} className={`${manrope.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}