import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

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
      <head>
        <Script type='text/javascript' src='//pl28021491.effectivegatecpm.com/e6/e8/5a/e6e85a1fbd479091b9b99f9494ca4201.js' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
