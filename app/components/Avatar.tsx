import { dancingScript } from '../ui/fonts';

interface AvatarProps {
  initials: string;
}

export function Avatar({ initials }: AvatarProps) {
  return (
    <div className="rounded-full w-24 h-24 mx-auto  mt-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
      <div className="flex justify-center items-center flex-col h-full bg-white text-black dark:bg-gray-800 dark:text-white rounded-full p-4">
        <span className={`${dancingScript.className} text-4xl`}>{initials}</span>
      </div>
    </div>
  );
}
