import type { Meta, StoryObj } from '@storybook/react';
import { MdOutlineEmail } from 'react-icons/md';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Basic/App/Input',
  component: Input,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    type: {
      control: 'radio',
      options: ['email', 'number', 'password', 'tel', 'text'],
    },
    error: {
      control: 'boolean',
    },
    errorDescription: {
      control: 'text',
    },
    togglePassword: {
      control: 'boolean',
    },
    Icon: {
      description: 'Icon component',
    },
    value: {
      description: 'Input value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    id: 'test_ID_1',
    label: 'Text value',
    type: 'text',
    error: false,
    errorDescription: 'Opis błędu',
  },
};

export const TextInputWithError: Story = {
  args: {
    id: 'test_ID_2',
    label: 'Text input',
    type: 'text',
    error: true,
    errorDescription: 'Opis błędu',
  },
};

export const PasswordInput: Story = {
  args: {
    id: 'test_ID_3',
    label: 'Text input with error',
    type: 'password',
  },
};

export const PasswordInputWithToggleParameter: Story = {
  args: {
    id: 'test_ID_4',
    label: 'Password input with error',
    type: 'password',
    togglePassword: true,
  },
};

export const EmailInput: Story = {
  args: {
    id: 'test_ID_5',
    label: 'Email input',
    type: 'email',
    Icon: MdOutlineEmail,
  },
};
