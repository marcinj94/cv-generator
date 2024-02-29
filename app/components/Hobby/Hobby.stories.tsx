import type { Meta, StoryObj } from '@storybook/react';
import { GiFullMotorcycleHelmet, GiGuitarBassHead, GiHops } from 'react-icons/gi';
import { Hobby } from '.';

const meta: Meta<typeof Hobby> = {
  title: 'Components/UI/Hobby',
  component: Hobby,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    hobby: {
      defaultValue: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hobby>;

export const ListOfHobbies: Story = {
  args: {
    hobby: [
      {
        description: 'Home brewing',
        Icon: GiHops,
      },
      {
        description: 'Motorcycle',
        Icon: GiFullMotorcycleHelmet,
      },
      {
        description: 'Music',
        Icon: GiGuitarBassHead,
      },
      {
        description: 'Skydiving',
      },
    ],
  },
};
