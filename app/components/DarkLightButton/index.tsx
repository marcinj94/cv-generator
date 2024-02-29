'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ICON_SIZE = 36;

const DarkLightButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={ICON_SIZE}
        height={ICON_SIZE}
        sizes={`${ICON_SIZE}x${ICON_SIZE}`}
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === 'dark') {
    return (
      <button type="button" aria-label="Theme-switch to light mode">
        <FiSun size={ICON_SIZE} onClick={() => setTheme('light')} />
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button type="button" aria-label="Theme-switch to dark mode">
        <FiMoon size={ICON_SIZE} onClick={() => setTheme('dark')} />
      </button>
    );
  }

  return null;
};

export default DarkLightButton;
