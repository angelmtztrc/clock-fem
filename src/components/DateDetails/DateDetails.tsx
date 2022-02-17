import classNames from 'classnames';

export const DateDetails = ({ display }: DateDetailsProps) => {
  return (
    <div
      className={classNames(
        !display && 'hidden',
        'relative z-10 py-12 px-6 backdrop-blur-xl'
      )}
    >
      <div className="absolute inset-0 -z-10 bg-white opacity-70" />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Current Timezone
          </p>
          <p className="text-jet font-inter text-xl font-bold">Europe/London</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Day of the year
          </p>
          <p className="text-jet font-inter text-xl font-bold">295</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Day of the week
          </p>
          <p className="text-jet font-inter text-xl font-bold">5</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-jet font-inter text-xs uppercase leading-7 tracking-[2px]">
            Week number
          </p>
          <p className="text-jet font-inter text-xl font-bold">42</p>
        </div>
      </div>
    </div>
  );
};

type DateDetailsProps = {
  display: boolean;
};
