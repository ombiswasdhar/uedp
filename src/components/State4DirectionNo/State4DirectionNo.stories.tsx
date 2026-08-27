import type { Meta, StoryObj } from '@storybook/react';
import { State4DirectionNo } from './State4DirectionNo';

const meta = {
  title: 'Figma Components/State4DirectionNo',
  component: State4DirectionNo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=4, Direction=No`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State4DirectionNo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State4DirectionNo-default',
  },
};
