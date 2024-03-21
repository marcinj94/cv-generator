import clsx from 'clsx';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';

interface BoxProps {
  header?: string;
  children: React.ReactNode;
  minHeight?: 'min-h-full' | 'min-h-[95%]';
}

export const Box: React.FC<BoxProps> = ({ header, children, minHeight }) => (
  <div
    className={clsx(
      'px-10 py-4 rounded-[50px] border border-spacing-1 border-gray-700 dark:border-gray-600 h-fit',
      minHeight,
    )}
  >
    {header && (
      <h3 className={`${roboto.className} font-bold uppercase text-base mb-2`}>{header}</h3>
    )}
    {children}
  </div>
);
