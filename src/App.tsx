import { DailyPhrase } from '@atoms';

const App = () => {
  return (
    <div className="bg-daytime-sm bg-cover bg-center">
      <main className="max-h-screen min-h-screen w-full bg-black bg-opacity-40">
        <DailyPhrase />
      </main>
    </div>
  );
};

export default App;
