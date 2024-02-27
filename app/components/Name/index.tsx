// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';

type Size = 'sm' | 'md' | 'lg';

interface NameProps {
  name: string;
  surname: string;
  size?: Size;
}

export const Name: React.FC<NameProps> = ({ name, surname, size = 'md' }) => {
  let fontSize = '';
  if (size === 'sm') {
    fontSize = 'text-lg';
  } else if (size === 'md') {
    fontSize = 'text-4xl';
  } else if (size === 'lg') {
    fontSize = 'text-7xl';
  }

  return (
    <h1 className={`${roboto.className} text-center capitalize ${fontSize}`}>
      {name} {surname}
    </h1>
  );
};
