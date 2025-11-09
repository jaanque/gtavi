'use client'

import Script from 'next/script'

const LeftAdBanner = () => {
  return (
    <div>
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
        src="//www.highperformanceformat.com/91ffbae0e27639900d17d6be98b4/invoke.js"
      />
    </div>
  );
};

export default LeftAdBanner;
