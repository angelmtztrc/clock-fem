import { useEffect, useMemo, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

import dayjs from '@/libs/helpers/dayjs.helper';
import { shortTimezone } from '@/libs/helpers/timezone.helper';
import { dayState } from '@/libs/helpers/day-time.helper';

export const Clock = ({}: ClockProps) => {
  const [time, setTime] = useState(dayjs());
  const dayStatus = useMemo(
    () => dayState(time.format('HH')),
    [time.format('HH')]
  );

  useEffect(() => {
    const timerId = setInterval(() => setTime(dayjs()), 30000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-4">
        {dayStatus === 'morning' ? (
          <SunIcon className="h-6 w-6 text-white" />
        ) : (
          <MoonIcon className="h-6 w-6 text-white" />
        )}

        <p className="font-inter text-base uppercase leading-6 tracking-[4px] text-white">
          GOOD {dayStatus}
        </p>
      </div>

      <div>
        <p className="font-inter text-8xl font-bold leading-[100px] -tracking-[2.5px] text-white">
          {time.format('HH:mm')}{' '}
          <span className="text-base font-light leading-7 tracking-normal">
            {shortTimezone()}
          </span>
        </p>
        <p className="font-inter font-base font-bold uppercase leading-7 tracking-[4px] text-white">
          IN LONDON, UK
        </p>
      </div>
    </div>
  );
};

type ClockProps = {};
