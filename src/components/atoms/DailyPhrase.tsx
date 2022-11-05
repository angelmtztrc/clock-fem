import { RefreshIcon } from '@heroicons/react/solid';
import { useQuery } from '@tanstack/react-query';
import { LeapFrog } from '@uiball/loaders';

import QuotesService from '@services/quotes.service';

const DailyPhrase = () => {
  const { data, isLoading, isFetching, refetch } = useQuery(['quote'], () =>
    QuotesService.findOne()
  );

  return (
    <div className="px-6 py-8">
      <div className="flex space-x-4">
        <div className="flex-1">
          {isLoading || isFetching ? (
            <LeapFrog color="#fff" />
          ) : (
            <>
              {data ? (
                <>
                  <p className="flex-1 font-inter text-xs leading-6 text-white">
                    {data.content}
                  </p>
                  <p className="text-xs font-bold leading-6 text-white">
                    {data.author}
                  </p>
                </>
              ) : (
                <>
                  <p className="flex-1 font-inter text-xs leading-6 text-white">
                    “The science of operations, as derived from mathematics more
                    especially, is a science of itself, and has its own abstract
                    truth and value.”
                  </p>
                  <p className="text-xs font-bold leading-6 text-white">
                    Ada Lovelace
                  </p>
                </>
              )}
            </>
          )}
        </div>
        <div>
          <button onClick={() => refetch()}>
            <RefreshIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyPhrase;
