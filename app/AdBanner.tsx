'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  adKey: string
  width: number
  height: number
}

const AdBanner: React.FC<AdBannerProps> = ({ adKey, width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length === 0) {
      const configScript = document.createElement('script')
      configScript.type = 'text/javascript'
      configScript.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `
      containerRef.current.appendChild(configScript)

      const invokeScript = document.createElement('script')
      invokeScript.type = 'text/javascript'
      invokeScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`
      containerRef.current.appendChild(invokeScript)
    }
  }, [adKey, width, height])

  return <div ref={containerRef} />
}

export default AdBanner
