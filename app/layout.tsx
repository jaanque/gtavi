import type { Metadata } from 'next'
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
      <body>
        {children}
        <script type='text/javascript' src='//pl28018814.effectivegatecpm.com/1a/60/82/1a60827c7a4f8d3fcbd3b4e7796666d7.js'></script>
      </body>
    </html>
  )
}
