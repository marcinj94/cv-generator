import clsx from 'clsx';
import { BackgroundGradient } from '../types';

interface HeaderProps {
  header: string;
  background?: BackgroundGradient | 'black';
}

export const Header: React.FC<HeaderProps> = ({ header, background = 'black' }) => (
  <h4
    className={clsx('font-bold inline-block', {
      'bg-gradient-to-r text-transparent bg-clip-text': [
        'bluish-gradient',
        'reddish-gradient',
      ].includes(background),
      'from-green-600 to-blue-600 dark:from-green-300 dark:to-blue-400':
        background === 'bluish-gradient',
      'from-orange-500 to-red-500 dark:from-orange-300 dark:to-red-300':
        background === 'reddish-gradient',
    })}
  >
    {header}
  </h4>
);
