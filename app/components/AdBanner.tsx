'use client'

import Script from 'next/script'

interface AdBannerProps {
  bannerKey: string;
}

const AdBanner = ({ bannerKey }: AdBannerProps) => {
  if (bannerKey === 'left-banner') {
    return (
      <>
        <Script id="left-banner-options" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '91ffbae04bc1e27639900d17d6be98b4',
              'format' : 'iframe',
              'height' : 600,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script
          id="left-banner-invoke"
          strategy="afterInteractive"
          src="//www.highperformanceformat.com/91ffbae04bc1e27639900d17d6be98b4/invoke.js"
        />
      </>
    )
  }

  if (bannerKey === 'right-banner') {
    return (
      <>
        <Script id="right-banner-options" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '90f1d9e1f2eb5f8442de64c2a0bd80e9',
              'format' : 'iframe',
              'height' : 300,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script
          id="right-banner-invoke"
          strategy="afterInteractive"
          src="//www.highperformanceformat.com/90f1d9e1f2eb5f8442de64c2a0bd80e9/invoke.js"
        />
      </>
    )
  }

  if (bannerKey === 'social-bar') {
      return (
          <Script
            id="social-bar-invoke"
            strategy="afterInteractive"
            src="//pl28018814.effectivegatecpm.com/1a/60/82/1a60827c7a4f8d3fcbd3b4e7796666d7.js"
            />
      )
  }

  return null
}

export default AdBanner
