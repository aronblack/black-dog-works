import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}