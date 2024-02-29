import React from 'react';
import { ThemeProvider } from 'next-themes';
import type { Preview } from '@storybook/react';
import '../app/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// activated dark/light themes
export const decorators = [
  (Story) => (
    <ThemeProvider enableSystem={true} attribute="class">
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
