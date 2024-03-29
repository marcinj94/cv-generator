import type { Meta, StoryObj } from '@storybook/react';
import { FaDownload, FaRegFilePdf } from 'react-icons/fa6';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Basic/App/Button',
  component: Button,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
    },
    onClick: {
      action: 'clicked',
      defaultValue: null,
      description: '(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    label: 'Download',
  },
};

export const FullWidthButton: Story = {
  args: {
    label: 'Download',
    fullWidth: true,
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: 'Download',
    Icon: FaDownload,
  },
};

export const ButtonWithIconFullWidth: Story = {
  args: {
    label: 'Download',
    Icon: FaDownload,
    fullWidth: true,
  },
};

export const DisabledButton: Story = {
  args: {
    label: 'Generate PDF',
    disabled: true,
  },
};

export const DisabledButtonFullWidth: Story = {
  args: {
    label: 'Generate PDF',
    disabled: true,
    fullWidth: true,
  },
};

export const DisabledButtonWithIcon: Story = {
  args: {
    label: 'Generate PDF',
    Icon: FaRegFilePdf,
    disabled: true,
  },
};

export const DisabledButtonWithIconFullWidth: Story = {
  args: {
    label: 'Generate PDF',
    Icon: FaRegFilePdf,
    disabled: true,
    fullWidth: true,
  },
};
