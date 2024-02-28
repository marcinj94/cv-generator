// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';

interface BoxProps {
  header?: string;
  children: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ header, children }) => (
  <div className="px-10 py-4 rounded-[50px] border border-spacing-1 border-gray-700 dark:border-white">
    {header && (
      <h3 className={`${roboto.className}  font-bold uppercase text-base mb-2`}>{header}</h3>
    )}
    {children}
  </div>
);
