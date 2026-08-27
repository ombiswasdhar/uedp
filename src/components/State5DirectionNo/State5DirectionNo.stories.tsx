import type { Meta, StoryObj } from '@storybook/react';
import { State5DirectionNo } from './State5DirectionNo';

const meta = {
  title: 'Figma Components/State5DirectionNo',
  component: State5DirectionNo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=5, Direction=No`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State5DirectionNo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State5DirectionNo-default',
  },
};
