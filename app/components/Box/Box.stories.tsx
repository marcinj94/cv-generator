import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Components/Basic/Box',
  component: Box,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
    },
    children: {
      description: 'JSX prop called children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const WithoutHeader: Story = {
  args: {
    children: 'React JSX children prop',
  },
};

export const WithHeader: Story = {
  args: {
    header: 'Education',
    children: 'React JSX children prop',
  },
};
