import type { Meta, StoryObj } from '@storybook/react';
import { Name } from '.';

const meta: Meta<typeof Name> = {
  component: Name,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
    },
    surname: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Name>;

export const Small: Story = {
  args: {
    name: 'Marcin',
    surname: 'Jusiak',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    name: 'John',
    surname: 'Doe',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'David',
    surname: 'Fincher',
    size: 'lg',
  },
};
