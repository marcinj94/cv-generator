'use client';

import clsx from 'clsx';
import { HTMLInputTypeAttribute, useState } from 'react';
import { IconType } from 'react-icons';
import { BiHide, BiShow } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  value?: string | number | readonly string[] | undefined;
  type: HTMLInputTypeAttribute;
  error: boolean;
  errorDescription: string;
  togglePassword?: boolean;
  Icon?: IconType;
}

const ICON_SIZE = 24;

export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  error,
  errorDescription,
  togglePassword,
  Icon,
  value,
}) => {
  const [showDefaultType, setShowDefaultType] = useState(true);

  const togglePasswordType = () => {
    setShowDefaultType(!showDefaultType);
  };

  return (
    <div className="relative my-2">
      <input
        className={clsx(
          'peer shadow appearance-none border-2 rounded w-full py-2 px-3 bg-white dark:bg-gray-800 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-36 focus:border-blue-600 transition valid:border-blue-600',
          {
            'border-red-600': error,
            'pr-10': togglePassword,
            'pl-10': Icon,
          },
        )}
        id={id}
        type={showDefaultType ? type : 'text'}
        name={id}
        value={value}
        required
      />
      {Icon && (
        <Icon
          className="absolute top-1/2 left-3 translate-y-[-50%]"
          size={ICON_SIZE}
          color={error ? '#dc2626' : '#2563eb'}
        />
      )}
      <label
        className={clsx(
          'transition-all cursor-text block absolute top-1/2 px-1 py-0 bg-white dark:bg-gray-800 translate-y-[-50%]  text-sm peer-focus:font-bold peer-focus:text-blue-600 peer-focus:top-0 peer-focus:left-6 peer-valid:font-bold peer-valid:text-blue-600 peer-valid:top-0 peer-valid:left-6',
          {
            'peer-invalid:font-bold peer-invalid:top-0 peer-invalid:left-6 peer-invalid:text-red-600':
              error,
            'left-10': Icon,
            'left-3': !Icon,
          },
        )}
        htmlFor={id}
      >
        {label}
      </label>
      {error && <span className="text-red-600 pl-3 text-xs ">{errorDescription}</span>}
      {togglePassword && (
        <button
          aria-label="Show / hide password"
          className="absolute top-1/2 right-3 translate-y-[-50%]"
          onClick={togglePasswordType}
        >
          {showDefaultType ? <BiShow size={ICON_SIZE} /> : <BiHide size={ICON_SIZE} />}
        </button>
      )}
    </div>
  );
};
