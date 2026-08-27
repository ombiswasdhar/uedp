import type { Meta, StoryObj } from '@storybook/react';
import { State4DirectionYes } from './State4DirectionYes';

const meta = {
  title: 'Figma Components/State4DirectionYes',
  component: State4DirectionYes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=4, Direction=Yes`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State4DirectionYes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State4DirectionYes-default',
  },
};
