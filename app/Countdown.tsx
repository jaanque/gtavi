'use client';

import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft: TimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return null; // Or a loading spinner
  }

  const timerComponents: ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const timeValue = timeLeft[interval as keyof typeof timeLeft];
    if (timeValue === undefined) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center p-2 mx-2">
        <span
          className="font-gta text-5xl sm:text-6xl md:text-7xl text-white"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          {timeValue}
        </span>
        <span className="font-gta text-lg sm:text-xl uppercase text-gta-pink">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center mt-8 space-x-4">
      {timerComponents.length ? timerComponents : <span className="font-gta text-4xl text-white">Time's up!</span>}
    </div>
  );
};

export default Countdown;
