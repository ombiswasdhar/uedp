import type { Meta, StoryObj } from '@storybook/react';
import { State3DirectionYes } from './State3DirectionYes';

const meta = {
  title: 'Figma Components/State3DirectionYes',
  component: State3DirectionYes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=3, Direction=Yes`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State3DirectionYes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State3DirectionYes-default',
  },
};
