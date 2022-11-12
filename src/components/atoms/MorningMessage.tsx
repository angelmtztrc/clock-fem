import { SunIcon } from '@heroicons/react/solid';

const MorningMessage = () => {
  return (
    <div className="flex items-center space-x-4">
      <SunIcon className="h-6 w-6 text-white" />
      <p className="font-inter text-base uppercase leading-6 tracking-[3px] text-white">
        Good Morning
      </p>
    </div>
  );
};

export default MorningMessage;
