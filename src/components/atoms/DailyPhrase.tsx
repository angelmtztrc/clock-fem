import { RefreshIcon } from '@heroicons/react/solid';

const DailyPhrase = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex flex-col">
        <div className="flex space-x-4">
          <p className="font-inter text-xs leading-6 text-white">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <div>
            <RefreshIcon className="h-4 w-4 text-white" />
          </div>
        </div>
        <p className="text-xs font-bold leading-6 text-white">Ada Lovelace</p>
      </div>
    </div>
  );
};

export default DailyPhrase;
