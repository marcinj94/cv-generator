---
to: app/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= h.capitalize(name) %> } from '.';

const meta: Meta<typeof <%= h.capitalize(name) %>> = {
  component: <%= h.capitalize(name) %>,
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
type Story = StoryObj<typeof <%= h.capitalize(name) %>>;

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
