'use client'

import { useEffect, useRef } from 'react'

const AdBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bannerRef.current && bannerRef.current.children.length === 0) {
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.src =
        '//pl23333333.highcpmgate.com/8f94503931cf23631933405763953f27/invoke.js'

      const container = document.createElement('div')
      container.id = 'container-8f94503931cf23631933405763953f27'

      bannerRef.current.appendChild(container)
      bannerRef.current.appendChild(script)
    }
  }, [])

  return <div ref={bannerRef} className="ad-banner-container"></div>
}

export default AdBanner
