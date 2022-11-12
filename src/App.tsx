import { useQuery } from '@tanstack/react-query';

import { DailyPhrase } from '@atoms';
import { DefaultLayout } from '@layouts';
import { Clock } from '@molecules';

import GeolocationService from '@services/geolocation.service';

const App = () => {
  const { data, isLoading } = useQuery(['geolocation'], () =>
    GeolocationService.findLocation()
  );

  if (isLoading || !data) return <p>Loading...</p>;

  return (
    <DefaultLayout tz={data.time_zone as string}>
      <main className="flex max-h-screen min-h-screen w-full flex-col justify-between bg-black bg-opacity-40">
        <DailyPhrase />
        <Clock />
      </main>
    </DefaultLayout>
  );
};

export default App;
