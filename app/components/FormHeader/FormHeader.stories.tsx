import type { Meta, StoryObj } from '@storybook/react';
import { FormHeader } from '.';

const meta: Meta<typeof FormHeader> = {
  title: 'Components/Basic/App/FormHeader',
  component: FormHeader,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormHeader>;

export const DefaultFormHeader: Story = {
  args: {
    header: 'CV generator - formularz',
  },
};
