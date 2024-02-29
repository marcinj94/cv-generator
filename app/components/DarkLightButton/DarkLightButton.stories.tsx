import type { Meta, StoryObj } from '@storybook/react';
import DarkLightButton from '.';

// TODO: Dodać switch theme from the toolbar https://storybook.js.org/blog/how-to-add-a-theme-switcher-to-storybook/

const meta: Meta<typeof DarkLightButton> = {
  title: 'Components/Basic/DarkLightButton',
  component: DarkLightButton,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DarkLightButton>;

// eslint-disable-next-line object-curly-newline
export const Default: Story = {};
