// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';
import { Size } from '../types';

interface ProfessionProps {
  title: string;
  size?: Size;
}

interface ParamsProps {
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
}

export const Profession: React.FC<ProfessionProps> = ({ title, size = 'md' }) => {
  const params: ParamsProps = {
    lineHeight: '',
    fontSize: '',
    letterSpacing: '',
  };

  if (size === 'sm') {
    params.fontSize = 'text-sm';
    params.lineHeight = 'leading-4';
    params.letterSpacing = 'tracking-[1px]';
  } else if (size === 'md') {
    params.fontSize = 'text-lg';
    params.lineHeight = 'leading-6';
    params.letterSpacing = 'tracking-[2px]';
  } else if (size === 'lg') {
    params.fontSize = 'text-2xl';
    params.lineHeight = 'leading-8';
    params.letterSpacing = 'tracking-[4px]';
  }

  return (
    <h2
      className={`${roboto.className} text-center font-bold uppercase ${params.letterSpacing} ${params.fontSize} ${params.lineHeight}`}
    >
      {title}
    </h2>
  );
};
