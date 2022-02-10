import { HelloWorld } from '@/components/HelloWorld';

const App = () => {
  return (
    <div className="before:bg-daytime-banner relative min-h-screen before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[.6] before:content-['']">
      <div className="relative">
        <HelloWorld />
        <h1 className="font-inter text-white">Hello, World!</h1>
      </div>
    </div>
  );
};

export default App;
