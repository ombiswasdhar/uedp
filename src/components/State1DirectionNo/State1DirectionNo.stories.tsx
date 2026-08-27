import type { Meta, StoryObj } from '@storybook/react';
import { State1DirectionNo } from './State1DirectionNo';

const meta = {
  title: 'Figma Components/State1DirectionNo',
  component: State1DirectionNo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=1, Direction=No`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State1DirectionNo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State1DirectionNo-default',
  },
};
