import clsx from 'clsx';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';
import { Size } from '../types';

interface ProfessionProps {
  title: string;
  size?: Size;
}

export const Profession: React.FC<ProfessionProps> = ({ title, size = 'md' }) => (
  <h2
    className={clsx(roboto.className, 'text-center font-bold uppercase', {
      'text-sm leading-4 tracking-[1px]': size === 'sm',
      'text-lg leading-6 tracking-[2px]': size === 'md',
      'text-2xl leading-8 tracking-[4px]': size === 'lg',
    })}
  >
    {title}
  </h2>
);
