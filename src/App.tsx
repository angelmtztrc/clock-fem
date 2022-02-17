import { useState } from 'react';

import { Clock } from '@/components/Clock';
import { Button } from '@/components/Button';
import { PhraseOfTheDay } from '@/components/PhraseOfTheDay';
import { DateDetails } from './components/DateDetails';

const App = () => {
  const [displayDetails, setDisplayDetails] = useState(false);

  return (
    <div className="before:bg-daytime-banner relative min-h-screen before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[.6] before:content-['']">
      <div className="relative flex min-h-screen flex-col">
        <div className="relative flex flex-1 flex-col px-6 pt-8 pb-10">
          <div className="flex flex-1 flex-col justify-between">
            <PhraseOfTheDay />
            <main>
              <Clock />
              <Button
                className="mt-12"
                onClick={() => setDisplayDetails(!displayDetails)}
              >
                MORE
              </Button>
            </main>
          </div>
        </div>
        <DateDetails display={displayDetails} />
      </div>
    </div>
  );
};

export default App;
