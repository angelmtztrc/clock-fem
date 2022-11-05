import { DailyPhrase } from '@atoms';
import { Clock } from '@molecules';

const App = () => {
  return (
    <div className="bg-daytime-sm bg-cover bg-center">
      <main className="flex max-h-screen min-h-screen w-full flex-col justify-between bg-black bg-opacity-40">
        <DailyPhrase />
        <Clock />
      </main>
    </div>
  );
};

export default App;
