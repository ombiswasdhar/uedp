import type { Meta, StoryObj } from '@storybook/react';
import { State2DirectionNo } from './State2DirectionNo';

const meta = {
  title: 'Figma Components/State2DirectionNo',
  component: State2DirectionNo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=2, Direction=No`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State2DirectionNo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State2DirectionNo-default',
  },
};
