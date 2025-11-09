import { supabase } from '@/lib/supabaseClient'
import Countdown from './Countdown'
import Script from 'next/script'

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
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.rockstargames.com/gta-vi/2/_next/dist/images/jason-and-lucia-02-phone-b.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between p-4">
        {/* Top Spacer */}
        <div className="w-full h-16"></div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center">
          <h1 className="font-gta text-6xl text-gta-pink sm:text-7xl md:text-8xl" style={{ textShadow: '2px 2px 4px #000' }}>
            GTA VI
          </h1>
          <p
            className="font-gta text-3xl text-white sm:text-4xl md:text-5xl"
            style={{ textShadow: '2px 2px 4px #000' }}
          >
            COUNTDOWN
          </p>
          <Countdown targetDate={targetDate} />
        </div>

        {/* Bottom Content */}
        <footer className="w-full text-center text-sm text-white">
          <p>Developed with ♥ by Jan</p>
          <Script
            type="text/javascript"
            src="//pl28018814.effectivegatecpm.com/1a/60/82/1a60827c7a4f8d3fcbd3b4e7796666d7.js"
            strategy="afterInteractive"
          />
        </footer>
      </main>
    </div>
  );
}
