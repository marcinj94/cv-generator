import type { Meta, StoryObj } from '@storybook/react';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiStorybook } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
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
    Icon: {
      description: 'Icon component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Capsule>;

export const WithoutBackground: Story = {
  args: {
    description: 'JavaScript',
    boldText: true,
  },
};

export const WithoutBackgroundWithIcon: Story = {
  args: {
    description: 'JavaScript',
    boldText: true,
    Icon: IoLogoJavascript,
  },
};

export const BluishBackground: Story = {
  args: {
    description: 'Storybook',
    boldText: true,
    background: 'bluish-gradient',
  },
};

export const BluishBackgroundWithIcon: Story = {
  args: {
    description: 'Storybook',
    boldText: true,
    background: 'bluish-gradient',
    Icon: SiStorybook,
  },
};

export const ReddishBackground: Story = {
  args: {
    description: 'Next.JS',
    boldText: true,
    background: 'reddish-gradient',
  },
};

export const ReddishBackgroundWithIcon: Story = {
  args: {
    description: 'Next.JS',
    boldText: true,
    background: 'reddish-gradient',
    Icon: TbBrandNextjs,
  },
};
