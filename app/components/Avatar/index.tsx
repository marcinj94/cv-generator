// eslint-disable-next-line import/no-unresolved, import/extensions
import { dancingScript } from '@/app/ui/fonts';

export interface ParamsProps {
  avatarSize: string;
  fontSize: string;
}

type Size = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  initials: string;
  size?: Size;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, size = 'md' }) => {
  const params: ParamsProps = {
    avatarSize: '',
    fontSize: '',
  };

  if (size === 'sm') {
    params.avatarSize = 'w-16 h-16 p-1';
    params.fontSize = 'text-lg';
  } else if (size === 'md') {
    params.avatarSize = 'w-24 h-24 p-1';
    params.fontSize = 'text-4xl';
  } else if (size === 'lg') {
    params.avatarSize = 'w-48 h-48 p-2';
    params.fontSize = 'text-8xl';
  }

  return (
    <div
      className={`rounded-full overflow-hidden ${params.avatarSize} bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1`}
    >
      <div className="flex justify-center items-center h-full bg-white text-black dark:bg-gray-800 dark:text-white rounded-full p-4">
        <span className={`${dancingScript.className} ${params.fontSize}`}>{initials}</span>
      </div>
    </div>
  );
};
