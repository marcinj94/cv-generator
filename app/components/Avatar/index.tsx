import clsx from 'clsx';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { dancingScript } from '@/app/ui/fonts';
import { Size } from '../types';

export interface AvatarProps {
  initials: string;
  size?: Size;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, size = 'md' }) => (
  <div
    className={clsx(
      'rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1',
      {
        'w-16 h-16 p-1': size === 'sm',
        'w-24 h-24 p-1': size === 'md',
        'w-48 h-48 p-2': size === 'lg',
      },
    )}
  >
    <div className="flex justify-center items-center h-full bg-white text-black dark:bg-gray-800 dark:text-white rounded-full p-4">
      <span
        className={clsx(dancingScript.className, {
          'text-lg': size === 'sm',
          'text-4xl': size === 'md',
          'text-8xl': size === 'lg',
        })}
      >
        {initials}
      </span>
    </div>
  </div>
);
