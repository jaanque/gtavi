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
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `atOptions = { 'key' : '79fce5ea83b8ef210e7c4000c6597a03', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };`;

      const adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = '//engagementlawfully.com/79fce5ea83b8ef210e7c4000c6597a03/invoke.js';

      banner.appendChild(configScript);
      banner.appendChild(adScript);
    }
  }, [bannerKey])

  return <div ref={bannerRef} className="ad-banner-container" id={`ad-banner-${bannerKey}`}></div>
}

export default AdBanner
