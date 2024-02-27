import type { Meta, StoryObj } from '@storybook/react';
import { Profession } from '.';

const meta: Meta<typeof Profession> = {
  component: Profession,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profession>;

export const Small: Story = {
  args: {
    title: 'Front-end developer',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    title: 'Back-end developer',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    title: 'Front-end developer',
    size: 'lg',
  },
};
