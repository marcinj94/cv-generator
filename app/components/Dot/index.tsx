import clsx from 'clsx';
import { BackgroundGradient } from '../types';

interface DotProps {
  isAbsolute?: boolean;
  background?: BackgroundGradient;
}

export const Dot: React.FC<DotProps> = ({ isAbsolute, background = 'reddish-gradient' }) => (
  <div
    className={clsx('w-2 h-2 rounded-full top-1/2 -left-4 -translate-y-1/2  bg-gradient-to-r', {
      absolute: isAbsolute,
      'from-pink-500 to-yellow-500': background === 'reddish-gradient',
      'from-green-500 to-blue-500': background === 'bluish-gradient',
    })}
  />
);
