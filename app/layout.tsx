import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const DOMAIN = 'https://www.gta6drop.me';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: 'GTA 6 Countdown | Is GTA 6 Out Yet? Official Release Date News & Leaks',
  description: 'The ultimate countdown to the official GTA 6 release date. Get the latest news, leaks, trailer analysis, and community discussions for Grand Theft Auto VI. Is the GTA 6 trailer out? When is GTA VI coming out? We have the answers.',
  keywords: ['GTA 6', 'GTA VI', 'Grand Theft Auto 6', 'GTA 6 release date', 'GTA 6 countdown', 'GTA 6 trailer', 'GTA VI news', 'GTA 6 leaks', 'contador', 'Rockstar Games', 'GTA 6 map', 'gta vi countdown', 'gta 6 release', 'gta 6 news', 'gta 6 leaks', 'gta 6 trailer date', 'gta 6 official', 'grand theft auto vi', 'when is gta 6 coming out'],
  authors: [{ name: 'gta6drop.me' }],
  creator: 'gta6drop.me',
  publisher: 'gta6drop.me',
  robots: 'index, follow',
  alternates: {
    canonical: DOMAIN,
  },
  openGraph: {
    title: 'GTA 6 Countdown | Is GTA 6 Out Yet? Official Release Date News & Leaks',
    description: 'The ultimate countdown to the official GTA 6 release date. Get the latest news, leaks, and community discussions for Grand Theft Auto VI.',
    type: 'website',
    url: DOMAIN,
    images: [
      {
        url: `${DOMAIN}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'GTA 6 Logo with Countdown Timer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Countdown | Is GTA 6 Out Yet? Official Release Date News & Leaks',
    description: 'The ultimate countdown to the official GTA 6 release date. Get the latest news, leaks, and community discussions for Grand Theft Auto VI.',
    images: [`${DOMAIN}/twitter-image.jpg`],
  },
  icons: {
    icon: "/globe.svg",
    shortcut: "/globe.svg",
    apple: "/globe.svg",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMH2MMRV');
          `}
        </Script>
        <Script async src="https://embed.reddit.com/widgets.js" charSet="UTF-8" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMH2MMRV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
