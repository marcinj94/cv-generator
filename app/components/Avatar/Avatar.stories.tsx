import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    initials: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    initials: 'MJ',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    initials: 'AK',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    initials: 'JJ',
    size: 'lg',
  },
};
