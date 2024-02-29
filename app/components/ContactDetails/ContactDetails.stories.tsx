import type { Meta, StoryObj } from '@storybook/react';
import { ContactDetails } from '.';

const meta: Meta<typeof ContactDetails> = {
  title: 'Components/UI/ContactDetails',
  component: ContactDetails,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    mail: {
      control: 'text',
    },
    linkedin: {
      control: 'text',
    },
    github: {
      control: 'text',
    },
    phone: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactDetails>;

export const Full: Story = {
  args: {
    mail: 'john.doe@gmail.com',
    linkedin: 'John Doe',
    github: 'GitHub',
    phone: '+48 123 123 123',
  },
};

export const OnlyEmail: Story = {
  args: {
    mail: 'john.doe@gmail.com',
  },
};

export const WithoutPhone: Story = {
  args: {
    mail: 'john.doe@gmail.com',
    linkedin: 'John Doe',
    github: 'GitHub',
  },
};

export const WithLinkedIn: Story = {
  args: {
    mail: 'john.doe@gmail.com',
    linkedin: 'John Doe',
  },
};
