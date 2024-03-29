import clsx from 'clsx';
import { IconType } from 'react-icons';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { roboto } from '@/app/ui/fonts';

type BaseButtonProps = React.ComponentPropsWithoutRef<'button'>;

interface ButtonProps extends BaseButtonProps {
  label: string;
  disabled?: boolean;
  Icon?: IconType;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  type = 'button',
  Icon,
  onClick,
  fullWidth = false,
}) => (
  <button
    type={type}
    className={clsx(
      roboto.className,
      'min-w-36 focus:outline-none focus:ring focus:ring-blue-300  transition text-white font-bold  py-2 px-4 rounded inline-flex justify-center gap-2 items-s',
      {
        'bg-blue-600 hover:bg-blue-800': !disabled,
        'bg-gray-400 hover:bg-gray-400 cursor-not-allowed': disabled,
        'w-full': fullWidth,
      },
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {Icon && <Icon size={18} />}
    <span>{label}</span>
  </button>
);
