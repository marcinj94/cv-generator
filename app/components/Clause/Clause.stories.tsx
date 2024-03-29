import type { Meta, StoryObj } from '@storybook/react';
import { Clause } from '.';

const meta: Meta<typeof Clause> = {
  title: 'Components/Basic/Clause',
  component: Clause,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clause>;

export const MainVersion: Story = {
  args: {
    description:
      '„Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb rekrutacji (zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).”',
  },
};
