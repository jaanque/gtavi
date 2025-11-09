import { supabase } from '@/lib/supabaseClient'
import Countdown from './Countdown'

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
      <main className="flex flex-grow items-center justify-center w-full p-4">
        <div
          className="flex flex-col lg:flex-row items-center justify-around w-full space-y-8 lg:space-y-0 lg:space-x-8"
        >
          {/* Center Content */}
          <div
            className="order-1 lg:order-2 flex flex-col items-center text-center"
          >
            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 text-gta-pink"
              style={{ textShadow: '2px 2px 4px #000' }}
            >
              GTA VI
            </h1>
            <p
              className="text-3xl sm:text-4xl md:text-5xl mb-8 text-white"
              style={{ textShadow: '2px 2px 4px #000' }}
            >
              COUNTDOWN
            </p>
            <Countdown targetDate={targetDate} />
          </div>
        </div>
      </main>
      <footer className="w-full p-2 text-center text-sm text-white">
        <p>Developed with ♥ by Jan</p>
      </footer>
    </div>)
  );
}
