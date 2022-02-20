import { useEffect, useState } from 'react';
import { SunIcon } from '@heroicons/react/outline';

import dayjs from '@/libs/helpers/dayjs.helper';

export const Clock = ({}: ClockProps) => {
  const [timezone, setTimezone] = useState(dayjs.tz.guess());
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timerId = setInterval(() => setTime(dayjs()), 30000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-4">
        <SunIcon className="h-6 w-6 text-white" />
        <p className="font-inter text-base uppercase leading-6 tracking-[4px] text-white">
          GOOD MORNING
        </p>
      </div>

      <div>
        <p className="font-inter text-8xl font-bold leading-[100px] -tracking-[2.5px] text-white">
          {time.format('HH:mm')}{' '}
          <span className="text-base font-light leading-7 tracking-normal">
            BST
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
