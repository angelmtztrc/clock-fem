import { useState } from 'react';
import classNames from 'classnames';

import dayjs from '@/libs/helpers/dayjs.helper';

export const DateDetails = ({ display }: DateDetailsProps) => {
  const [timezone, setTimezone] = useState(dayjs.tz.guess());

  return (
    <div
      className={classNames(
        !display && 'hidden',
        'relative z-10 py-12 px-6 backdrop-blur-xl'
      )}
    >
      <div className="absolute inset-0 -z-10 bg-white opacity-70" />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Current Timezone
          </p>
          <p className="text-jet font-inter text-xl font-bold capitalize">
            {timezone}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Day of the year
          </p>
          <p className="text-jet font-inter text-xl font-bold">
            {dayjs().dayOfYear()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Day of the week
          </p>
          <p className="text-jet font-inter text-xl font-bold">
            {dayjs().day()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Week number
          </p>
          <p className="text-jet font-inter text-xl font-bold">
            {dayjs().week()}
          </p>
        </div>
      </div>
    </div>
  );
};

type DateDetailsProps = {
  display: boolean;
};
