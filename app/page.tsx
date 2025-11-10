import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'
import Countdown from './Countdown'
import Poll from './Poll'
import Community from './Community'
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/next"
import StructuredData from './StructuredData'
import News from './News'
import Faq from './Faq'
import Legacy from './Legacy'

// Revalidate the page every hour
export const revalidate = 3600

async function getTargetDate() {
  const { data, error } = await supabase
    .from('target_date')
    .select('t_date')
    .eq('event_name', 'countdown_end')
    .single()

  if (error || !data) {
    console.error('Error fetching target date:', error)
    // Return a default or fallback date if needed
    return new Date().toISOString()
  }

  return data.t_date
}

export default async function Home() {
  const targetDate = await getTargetDate()

  return (
    (<div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/gta6-background.jpg"
        alt="Protagonistas de GTA 6 apoyados en un coche en Vice City"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="absolute inset-0 bg-black opacity-50 -z-10" />
      <StructuredData targetDate={targetDate} />
      <main className="flex flex-grow items-center justify-center w-full p-4">
        <div
          className="flex flex-col lg:flex-row items-center justify-around w-full space-y-8 lg:space-y-0 lg:space-x-8"
        >
          {/* Ad Content Left */}
          <div className="order-2 lg:order-1 flex flex-col items-center text-center">
            <div className="mb-8">
              <iframe src="/ad1.html" width="160" height="600" frameBorder="0" scrolling="no"></iframe>
            </div>
          </div>
          {/* Center Content */}
          <div className="flex-grow order-1 lg:order-2 flex flex-col items-center text-center">
            <nav className="mb-8">
              <ul className="flex space-x-4 text-lg text-white">
                <li><a href="#news" className="hover:text-gta-pink">News</a></li>
                <li><a href="#faq" className="hover:text-gta-pink">FAQ</a></li>
                <li><a href="#legacy" className="hover:text-gta-pink">Legacy</a></li>
              </ul>
            </nav>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 text-gta-pink"
              style={{ textShadow: '2px 2px 4px #000' }}
            >
              GTA VI{' '}
              <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                COUNTDOWN
              </span>
            </h1>
            <Countdown targetDate={targetDate} />
            <Poll />
          </div>
          {/* Ad Content Right */}
          <div className="order-3 lg:order-3 flex flex-col items-center text-center">
            <div>
              <iframe src="/ad2.html" width="160" height="600" frameBorder="0" scrolling="no"></iframe>
            </div>
          </div>
        </div>
      </main>
      <Community />
      <News />
      <Faq />
      <div className="my-8 flex justify-center">
        <Script id="ad-banner-options" strategy="afterInteractive">
          {`atOptions = { 'key' : '82c08ce9d0c2b20878a114ac44199f26', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };`}
        </Script>
        <Script
          id="ad-banner-src"
          src="//www.highperformanceformat.com/82c08ce9d0c2b20878a114ac44199f26/invoke.js"
          strategy="afterInteractive"
        />
        <Script type='text/javascript' src='//pl28021491.effectivegatecpm.com/e6/e8/5a/e6e85a1fbd479091b9b99f9494ca4201.js' />
      </div>
      <Legacy />
      <Script
        type="text/javascript"
        src="//pl28018814.effectivegatecpm.com/1a/60/82/1a60827c7a4f8d3fcbd3b4e7796666d7.js"
        strategy="afterInteractive"
      />

      <Analytics/>

      <footer className="w-full p-2 text-center text-sm text-white">
        <p>Developed with ♥ by Jan</p>
      </footer>
    </div>)
  );
}
