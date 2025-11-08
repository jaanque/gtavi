'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  bannerKey: string;
  adKey: string;
}

const AdBanner = ({ bannerKey, adKey }: AdBannerProps) => {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current;
    if (banner && banner.children.length === 0) {
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };`;

      const adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = `//engagementlawfully.com/${adKey}/invoke.js`;

      banner.appendChild(configScript);
      banner.appendChild(adScript);
    }
  }, [bannerKey, adKey])

  return <div ref={bannerRef} className="ad-banner-container" id={`ad-banner-${bannerKey}`}></div>
}

export default AdBanner
