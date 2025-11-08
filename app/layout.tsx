import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const gtaFont = localFont({
  src: '../public/fonts/gta.ttf',
  display: 'swap',
  variable: '--font-gta',
})

export const metadata: Metadata = {
  title: 'GTA VI - Countdown',
  description: 'GTA VI countdown timer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${gtaFont.variable}`}>{children}</body>
    </html>
  )
}
