import type { Meta, StoryObj } from '@storybook/react';
import { Languages } from '.';

const meta: Meta<typeof Languages> = {
  title: 'Components/UI/Languages',
  component: Languages,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    languages: {
      defaultValue: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Languages>;

export const ListOfLanguages: Story = {
  args: {
    languages: [
      {
        name: 'Polski',
        level: 'natywny',
      },
      {
        name: 'Angielski',
        level: 'B2',
      },
    ],
  },
};
