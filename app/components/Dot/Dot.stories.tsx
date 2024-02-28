import type { Meta, StoryObj } from '@storybook/react';
import { Dot } from '.';

const meta: Meta<typeof Dot> = {
  title: 'Components/Basic/Dot',
  component: Dot,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    isAbsolute: {
      control: 'boolean',
      description: 'If is true component position is absolute',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dot>;

// eslint-disable-next-line object-curly-newline
export const DotDefault: Story = {};

export const DotAbsolute: Story = {
  args: {
    isAbsolute: true,
  },
};
