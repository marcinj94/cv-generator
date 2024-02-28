import type { Meta, StoryObj } from '@storybook/react';
import { Education } from '.';

const meta: Meta<typeof Education> = {
  title: 'Components/UI/Education',
  component: Education,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    educations: {
      defaultValue: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Education>;

export const ListOfUniversities: Story = {
  args: {
    educations: [
      {
        school: 'Cambridge University',
        years: '2012 - 2013',
        level: 'Master of Engineering',
      },
      {
        school: 'Scranton University',
        years: '2011 - 2012',
        level: 'Master of Engineering in Computer Science',
      },
      {
        school: 'Scranton University',
        years: '2009 - 2011',
        level: 'Bachelor of Engineering in Computer Science',
      },
    ],
  },
};
