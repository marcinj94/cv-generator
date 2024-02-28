import type { Meta, StoryObj } from '@storybook/react';
import { Experience } from '.';

const meta: Meta<typeof Experience> = {
  title: 'Components/UI/Experience',
  component: Experience,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    jobs: {
      defaultValue: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Experience>;

export const ListOfJobs: Story = {
  args: {
    jobs: [
      {
        jobTitle: 'Front-end developer',
        company: 'Amazon',
        timeline: '2010 - 2015',
        techs: [
          {
            description: 'development new front end applications',
            skills: [
              {
                description: 'HTML',
              },
              {
                description: 'CSS',
              },
              {
                description: 'JavaScript',
              },
            ],
          },
          {
            description: 'development new backend application',
            skills: [
              {
                description: 'Node.JS',
              },
              {
                description: 'ExpressJS',
              },
              {
                description: 'MongoDB',
              },
              {
                description: 'Gitlab CI/CD',
              },
            ],
          },
        ],
      },
      {
        jobTitle: 'Back-end developer',
        company: 'Google',
        timeline: '04.2015 - 12.2022',
        techs: [
          {
            description: 'create new applications',
          },
        ],
      },
    ],
  },
};
