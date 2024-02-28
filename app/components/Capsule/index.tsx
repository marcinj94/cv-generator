import clsx from 'clsx';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';

interface CapsuleProps {
  description: string;
  boldText?: boolean;
  background?: 'reddish-gradient' | 'bluish-gradient';
}

export const Capsule: React.FC<CapsuleProps> = ({ description, boldText, background }) => {
  const className = clsx(
    `${roboto.className} px-6 py-2 rounded-[50px] border text-sm w-fit border-spacing-1 border-gray-700 dark:border-white bg-gradient-to-r`,
    {
      'from-green-100 to-blue-100 dark:from-green-500 dark:to-blue-600':
        background === 'bluish-gradient',
      'from-pink-200 to-yellow-200 dark:from-pink-500 dark:to-yellow-600':
        background === 'reddish-gradient',
      'font-bold': boldText,
    },
  );

  return <div className={className}>{description}</div>;
};
