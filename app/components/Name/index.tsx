import clsx from 'clsx';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';
import { Size } from '../types';

interface NameProps {
  name: string;
  surname: string;
  size?: Size;
}

export const Name: React.FC<NameProps> = ({ name, surname, size = 'md' }) => (
  <h1
    className={clsx(roboto.className, 'text-center capitalize', {
      'text-lg': size === 'sm',
      'text-4xl': size === 'md',
      'text-7xl': size === 'lg',
    })}
  >
    {name} {surname}
  </h1>
);
