import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export const getTimezoneAbbreviation = (tz: string) => {
  return dayjs().tz(tz).format('z');
};

export const getTimeDay = (tz: string): 'morning' | 'afternoon' | 'evening' => {
  const hour = dayjs().tz(tz).hour();

  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  return 'evening';
};

export const getTime = (tz: string) => {
  return dayjs().tz(tz);
};
