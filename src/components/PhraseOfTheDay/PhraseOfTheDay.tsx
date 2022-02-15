import { RefreshIcon } from '@heroicons/react/outline';

export const PhraseOfTheDay = ({}: PhraseOfTheDayProps) => {
  return (
    <div className="flex space-x-4">
      <div>
        <blockquote className="font-inter text-xs leading-6 tracking-normal text-white">
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </blockquote>
        <p className="font-inter text-xs font-bold leading-6 tracking-normal text-white">
          Ada Lovelace
        </p>
      </div>
      <div>
        <RefreshIcon className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

type PhraseOfTheDayProps = {};
