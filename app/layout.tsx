import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'GTA 6 Countdown | Official Grand Theft Auto VI Release Date News & Leaks',
  description: 'The ultimate countdown to the official GTA 6 release date. Get the latest news, leaks, trailer analysis, and community discussions for Grand Theft Auto VI. Is the GTA 6 trailer out? When is GTA VI coming out? We have the answers.',
  keywords: ['GTA 6', 'GTA VI', 'Grand Theft Auto 6', 'GTA 6 release date', 'GTA 6 countdown', 'GTA 6 trailer', 'GTA VI news', 'GTA 6 leaks', 'contador', 'Rockstar Games', 'GTA 6 map', 'gta vi countdown'],
  openGraph: {
    title: 'GTA 6 Countdown | Official Grand Theft Auto VI Release Date News & Leaks',
    description: 'The ultimate countdown to the official GTA 6 release date. Get the latest news, leaks, and community discussions for Grand Theft Auto VI.',
    type: 'website',
    url: 'https://www.gta6drop.me/', // Placeholder URL
    images: [
      {
        url: 'https://www.gta6drop.me/og-image.jpg', // Placeholder image
        width: 1200,
        height: 630,
        alt: 'GTA 6 Logo with Countdown Timer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Countdown | Official Grand Theft Auto VI Release Date News & Leaks',
    description: 'The ultimate countdown to the official GTA 6 release date. Get the latest news, leaks, and community discussions for Grand Theft Auto VI.',
    images: ['https://www.gta6drop.me/twitter-image.jpg'], // Placeholder image
  },
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
        <Script async src="https://embed.reddit.com/widgets.js" charSet="UTF-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
