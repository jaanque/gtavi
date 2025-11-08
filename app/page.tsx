import { supabase } from '@/lib/supabaseClient';
import Countdown from './Countdown';

// Revalidate the page every hour
export const revalidate = 3600;

async function getTargetDate() {
  const { data, error } = await supabase
    .from('target_date')
    .select('t_date')
    .eq('event_name', 'countdown_end')
    .single();

  if (error || !data) {
    console.error('Error fetching target date:', error);
    // Return a default or fallback date if needed
    return new Date().toISOString();
  }

  return data.t_date;
}

export default async function Home() {
  const targetDate = await getTargetDate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 font-sans text-white">
      <main className="flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold mb-4">GTA VI Countdown</h1>
        <p className="text-xl mb-8">Until November 16, 2026</p>
        <Countdown targetDate={targetDate} />
      </main>
    </div>
  );
}
