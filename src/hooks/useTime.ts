import { useEffect, useMemo, useState } from 'react';

import { getTime } from '@libs/day';

const useTime = (tz: string) => {
  const [timer, setTimer] = useState(0);
  const time = useMemo(() => {
    const date = getTime(tz);

    return [date.hour(), date.minute()];
  }, [timer]);

  useEffect(() => {
    const TEN_SECONDS = 10000;

    const id = setInterval(() => {
      setTimer(timer => timer + 1);
    }, TEN_SECONDS);

    return () => {
      clearInterval(id);
    };
  }, []);

  return time;
};

export default useTime;
