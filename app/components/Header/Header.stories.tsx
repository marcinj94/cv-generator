import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Basic/Header',
  component: Header,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
    },
    background: {
      control: 'radio',
      options: ['reddish-gradient', 'bluish-gradient', 'black'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const BlackHeader: Story = {
  args: {
    header: 'Batman app',
  },
};

export const BluishHeader: Story = {
  args: {
    header: 'Batman app',
    background: 'bluish-gradient',
  },
};

export const ReddishHeader: Story = {
  args: {
    header: 'Batman app',
    background: 'reddish-gradient',
  },
};
