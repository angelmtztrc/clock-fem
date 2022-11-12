import { useMemo } from 'react';
import cls from 'classnames';

import { useTime } from '@hooks';
import { getTimeDay } from '@libs/day';

type DefaultLayoutProps = {
  tz: string;
  children: React.ReactNode;
};

const DefaultLayout = ({ tz, children }: DefaultLayoutProps) => {
  const [hours] = useTime(tz);
  const timeDay = useMemo(() => getTimeDay(tz), [hours]);

  return (
    <div
      className={cls(
        (timeDay === 'morning' || timeDay === 'afternoon') &&
          'bg-daytime-sm md:bg-daytime-md lg:bg-daytime-lg',
        timeDay === 'evening' &&
          'bg-nighttime-sm md:bg-nighttime-md lg:bg-nighttime-lg',
        'bg-cover bg-center'
      )}
    >
      {children}
    </div>
  );
};

export default DefaultLayout;
