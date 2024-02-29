import type { Meta, StoryObj } from '@storybook/react';
import { TbBrandNextjs } from 'react-icons/tb';
import { Projects } from '.';

const meta: Meta<typeof Projects> = {
  title: 'Components/UI/Projects',
  component: Projects,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    projects: {
      defaultValue: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Projects>;

export const ListOfProjects: Story = {
  args: {
    projects: [
      {
        name: 'Google app',
        url: 'google.pl',
        techs: [
          {
            description: 'Front-end:',
            skills: [
              {
                description: 'Next.JS',
                Icon: TbBrandNextjs,
              },
            ],
          },
          {
            description: 'Back-end:',
            skills: [
              {
                description: 'Express.JS',
              },
              {
                description: 'Typescript',
              },
            ],
          },
        ],
      },
    ],
  },
};
