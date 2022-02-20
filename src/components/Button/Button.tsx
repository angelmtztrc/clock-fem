import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

export const Button = ({
  className,
  children,
  isActive,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'relative rounded-full bg-white py-3 px-5'
      )}
      {...rest}
    >
      <span className="font-inter mr-10 text-xs font-bold leading-4 tracking-[3.75px] text-black opacity-50">
        {children}
      </span>
      <div className="bg-jet absolute top-1 right-1 flex h-10 w-10 items-center justify-center rounded-full">
        {isActive ? (
          <ChevronUpIcon className="h-5 w-5 text-white" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-white" />
        )}
      </div>
    </button>
  );
};

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}
