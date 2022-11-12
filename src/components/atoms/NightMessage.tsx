import { MoonIcon } from '@heroicons/react/solid';

const NightMessage = () => {
  return (
    <div className="flex items-center space-x-4">
      <MoonIcon className="h-6 w-6 text-white" />
      <p className="font-inter text-base uppercase leading-6 tracking-[3px] text-white">
        Good Night
      </p>
    </div>
  );
};

export default NightMessage;
