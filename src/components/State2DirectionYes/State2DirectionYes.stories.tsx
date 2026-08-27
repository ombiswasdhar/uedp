import type { Meta, StoryObj } from '@storybook/react';
import { State2DirectionYes } from './State2DirectionYes';

const meta = {
  title: 'Figma Components/State2DirectionYes',
  component: State2DirectionYes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=2, Direction=Yes`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State2DirectionYes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State2DirectionYes-default',
  },
};
