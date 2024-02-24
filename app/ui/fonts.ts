// eslint-disable-next-line camelcase
import { Dancing_Script, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const dancingScript = Dancing_Script({
  weight: ['700'],
  subsets: ['latin'],
});
