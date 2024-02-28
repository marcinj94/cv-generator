import type { Meta, StoryObj } from '@storybook/react';
import { Education } from '.';

const meta: Meta<typeof Education> = {
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
        school: 'Josip Juraj Strossmayer University of Osijek',
        years: '10/2017 - 02/2018',
        level: 'Master of Engineering | Erasmus+',
      },
      {
        school: 'Lublin University of Technologi',
        years: '2017 - 2018',
        level: 'Master of Engineering in Computer Science | spec. Internet Application',
      },
      {
        school: 'Suleyman Demirel University',
        years: '02/2016 - 06/2016',
        level: 'Bachelor of Engineering | Erasmus+',
      },
      {
        school: 'Lublin University of Technologi',
        years: '2013 - 2017',
        level: 'Bachelor of Engineering in Computer Science',
      },
    ],
  },
};
