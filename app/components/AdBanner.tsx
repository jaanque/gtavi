'use client'

import { useEffect, useRef } from 'react'

const AdBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bannerRef.current && bannerRef.current.children.length === 0) {
      const configScript = document.createElement('script')
      configScript.type = 'text/javascript'
      configScript.innerHTML = `atOptions = { 'key' : '79fce5ea83b8ef210e7c4000c6597a03', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };`
      bannerRef.current.appendChild(configScript)

      const adScript = document.createElement('script')
      adScript.type = 'text/javascript'
      adScript.src =
        '//engagementlawfully.com/79fce5ea83b8ef210e7c4000c6597a03/invoke.js'
      bannerRef.current.appendChild(adScript)
    }
  }, [])

  return <div ref={bannerRef} className="ad-banner-container"></div>
}

export default AdBanner
