import clsx from 'clsx';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';

interface FormHeaderProps {
  header: string;
}

export const FormHeader: React.FC<FormHeaderProps> = ({ header }) => (
  <h1 className={clsx(roboto.className, 'text-center capitalize text-4xl')}>{header}</h1>
);
