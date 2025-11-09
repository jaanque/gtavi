'use client'

import Script from 'next/script'

interface AdBannerProps {
  adId: string
}

const AdBanner = ({ adId }: AdBannerProps) => {
  if (adId === '1') {
    return (
      <div>
        <Script id="ad-banner-1-options" strategy="lazyOnload">
          {`
            atOptions = {
              'key' : 'd97b3dd76bbbdc0e528b11f98aecee87',
              'format' : 'iframe',
              'height' : 300,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script
          id="ad-banner-1-src"
          strategy="lazyOnload"
          src="//engagementlawfully.com/d97b3dd76bbbdc0e528b11f98aecee87/invoke.js"
        />
      </div>
    )
  }

  if (adId === '2') {
    return (
      <div>
        <Script id="ad-banner-2-options" strategy="lazyOnload">
          {`
            atOptions = {
              'key' : 'e76e70afe16fb278b51cac1e43d1f1b0',
              'format' : 'iframe',
              'height' : 300,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script
          id="ad-banner-2-src"
          strategy="lazyOnload"
          src="//engagementlawfully.com/e76e70afe16fb278b51cac1e43d1f1b0/invoke.js"
        />
      </div>
    )
  }

  return null
}

export default AdBanner
