import type { Meta, StoryObj } from '@storybook/react';
import { Education } from '.';

const meta: Meta<typeof Education> = {
  component: Education,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    firstProp: {
      control: 'text',
    },
    secondProp: {
      control: 'radio',
      options: ['option1', 'option2'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Education>;

export const FirstVersion: Story = {
  args: {
    firstProp: 'first-prop-v1',
    secondProp: 'option1',
  },
};

export const SecondVersion: Story = {
  args: {
    firstProp: 'first-prop-v2',
    secondProp: 'option1',
  },
};
