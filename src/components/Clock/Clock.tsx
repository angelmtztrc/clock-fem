import { SunIcon } from '@heroicons/react/outline';

export const Clock = ({}: ClockProps) => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <SunIcon className="h-6 w-6 text-white" />
        <p className="font-inter text-base uppercase leading-6 tracking-[4px] text-white">
          GOOD MORNING
        </p>
      </div>

      <div>
        <p className="font-inter text-8xl font-bold leading-[100px] -tracking-[2.5px] text-white">
          11:37{' '}
          <span className="text-base font-light leading-7 tracking-normal">
            BST
          </span>
        </p>
        <p className="font-inter font-base font-bold uppercase leading-7 tracking-[4px] text-white">
          IN LONDON, UK
        </p>
      </div>
    </div>
  );
};

type ClockProps = {};
