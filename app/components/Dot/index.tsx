import clsx from 'clsx';

interface DotProps {
  isAbsolute?: boolean;
}

// TODO: dodać odcien pomaranczowo czerwony!! np uzyc go w doswiadczeniu

export const Dot: React.FC<DotProps> = ({ isAbsolute }) => (
  <div
    className={clsx(
      'w-2 h-2 rounded-full top-1/2 -left-4 -translate-y-1/2  bg-gradient-to-r from-green-500 to-blue-500',
      {
        absolute: isAbsolute,
      },
    )}
  />
);
