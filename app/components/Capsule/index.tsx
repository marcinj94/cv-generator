import clsx from 'clsx';
import { IconType } from 'react-icons';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';
import { BackgroundGradient } from '../types';

export interface CapsuleProps {
  description: string;
  boldText?: boolean;
  background?: BackgroundGradient;
  Icon?: IconType;
}

export const Capsule: React.FC<CapsuleProps> = ({ description, boldText, background, Icon }) => {
  const className = clsx(
    roboto.className,
    `flex items-center gap-1 px-6 py-2 leading-none rounded-[50px] border text-sm w-fit border-spacing-1 border-gray-700 dark:border-gray-600 bg-gradient-to-r`,
    {
      'from-green-100 to-blue-100 dark:from-green-500 dark:to-blue-600':
        background === 'bluish-gradient',
      'from-pink-200 to-yellow-200 dark:from-pink-500 dark:to-yellow-600':
        background === 'reddish-gradient',
      'font-bold': boldText,
    },
  );

  return (
    <div className={className}>
      {Icon && <Icon size={18} />}
      {description}
    </div>
  );
};
