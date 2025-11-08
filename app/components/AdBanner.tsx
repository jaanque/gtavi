'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  bannerKey: string;
}

const AdBanner = ({ bannerKey }: AdBannerProps) => {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current;
    if (banner && banner.children.length === 0) {
      const iframe = document.createElement('iframe');
      iframe.width = '160';
      iframe.height = '600';
      iframe.frameBorder = '0';
      iframe.scrolling = 'no';
      banner.appendChild(iframe);

      const iframeDoc = iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <html>
            <head>
              <script type="text/javascript">
                atOptions = { 'key' : '79fce5ea83b8ef210e7c4000c6597a03', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };
              </script>
              <script type="text/javascript" src="//engagementlawfully.com/79fce5ea83b8ef210e7c4000c6597a03/invoke.js"></script>
            </head>
            <body></body>
          </html>
        `);
        iframeDoc.close();
      }
    }
  }, [bannerKey])

  return <div ref={bannerRef} className="ad-banner-container" id={`ad-banner-${bannerKey}`}></div>
}

export default AdBanner
