import type { Meta, StoryObj } from '@storybook/react';
import { DiSwift } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiStorybook } from 'react-icons/si';
import { Technologies } from '.';

const meta: Meta<typeof Technologies> = {
  component: Technologies,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    elements: {
      defaultValue: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Technologies>;

export const ListOfTechnologies: Story = {
  args: {
    elements: [
      {
        description: 'Swift',
        Icon: DiSwift,
      },
      {
        description: 'Next.JS',
        Icon: TbBrandNextjs,
      },
      {
        description: 'Storybook',
        Icon: SiStorybook,
      },
      {
        description: 'Struktura MVVM',
      },
      {
        description: 'CocoaPods',
      },
      {
        description: 'Core Data',
      },
      {
        description: 'JSON',
      },
      {
        description: 'Firestore',
      },
    ],
  },
};
