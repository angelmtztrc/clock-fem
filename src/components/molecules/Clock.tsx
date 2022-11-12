import { DayMessage, MorningMessage, ToggleButton } from '@atoms';
import { useCache, useTime } from '@hooks';

import { IGeolocation } from '@interfaces/geolocation';
import { getTimezoneAbbreviation } from '@libs/day';

const Clock = () => {
  const geolocation = useCache<IGeolocation>(['geolocation']);
  const [hours, minutes] = useTime(geolocation.time_zone);

  return (
    <div className="px-6 py-8">
      <DayMessage tz={geolocation.time_zone} />

      <div className="mt-4">
        <h1 className="font-inter text-8xl font-bold leading-[100px] text-white">
          {hours}:{minutes}
          <span className="text-base font-normal uppercase leading-7 text-white">
            {getTimezoneAbbreviation(geolocation.time_zone)}
          </span>
        </h1>
        <p className="text-base font-bold uppercase leading-7 tracking-[3px] text-white">
          In {geolocation.region_name}, {geolocation.country_code}
        </p>
      </div>
      <div className="mt-12">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Clock;
