import type { Meta, StoryObj } from '@storybook/react';
import { Capsule } from '.';

const meta: Meta<typeof Capsule> = {
  component: Capsule,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
    },
    boldText: {
      control: 'boolean',
    },
    background: {
      control: 'radio',
      options: ['reddish-gradient', 'bluish-gradient'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Capsule>;

export const WithoutBackground: Story = {
  args: {
    description: '2017 - 2022',
    boldText: true,
  },
};

export const BluishBackground: Story = {
  args: {
    description: 'Firestore',
    boldText: true,
    background: 'bluish-gradient',
  },
};

export const ReddishVersion: Story = {
  args: {
    description: '@ObservableObject',
    boldText: true,
    background: 'reddish-gradient',
  },
};
