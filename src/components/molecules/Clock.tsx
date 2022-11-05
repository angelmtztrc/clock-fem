import { SunIcon } from '@heroicons/react/solid';

import { ToggleButton } from '@atoms';

const Clock = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex items-center space-x-4">
        <SunIcon className="h-6 w-6 text-white" />
        <p className="font-inter text-base uppercase leading-6 tracking-[3px] text-white">
          Good Morning
        </p>
      </div>
      <div className="mt-4">
        <h1 className="font-inter text-8xl font-bold leading-[100px] text-white">
          11:37
          <span className="text-base font-normal uppercase leading-7 text-white">
            bst
          </span>
        </h1>
        <p className="text-base font-bold uppercase leading-7 tracking-[3px] text-white">
          In London, Uk
        </p>
      </div>
      <div className="mt-12">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Clock;
