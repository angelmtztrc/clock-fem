import { useMemo } from 'react';

import { AfternoonMessage, MorningMessage, NightMessage } from '@atoms';

import { useTime } from '@hooks';
import { getTimeDay } from '@libs/day';

type DayMessageProps = {
  tz: string;
};

const DayMessage = ({ tz }: DayMessageProps) => {
  const [hours] = useTime(tz);
  const timeDay = useMemo(() => getTimeDay(tz), [hours]);

  if (timeDay === 'morning') return <MorningMessage />;

  if (timeDay === 'afternoon') return <AfternoonMessage />;

  return <NightMessage />;
};

export default DayMessage;
