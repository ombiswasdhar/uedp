import type { Meta, StoryObj } from '@storybook/react';
import { State5DirectionYes } from './State5DirectionYes';

const meta = {
  title: 'Figma Components/State5DirectionYes',
  component: State5DirectionYes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=5, Direction=Yes`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State5DirectionYes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State5DirectionYes-default',
  },
};
