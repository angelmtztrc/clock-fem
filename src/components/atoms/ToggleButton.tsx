import { ChevronDownIcon } from '@heroicons/react/solid';

const ToggleButton = () => {
  return (
    <button className="relative rounded-full bg-white px-4 py-3">
      <span className="mr-10 text-sm font-bold uppercase leading-4 tracking-[3.75px] opacity-50">
        More
      </span>
      <div className="absolute top-0 right-0 mt-1 mr-1 inline-block rounded-full bg-black p-3">
        <ChevronDownIcon className="h-4 w-4 text-white" />
      </div>
    </button>
  );
};

export default ToggleButton;
