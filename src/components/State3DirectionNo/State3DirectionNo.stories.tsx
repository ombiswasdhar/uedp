import type { Meta, StoryObj } from '@storybook/react';
import { State3DirectionNo } from './State3DirectionNo';

const meta = {
  title: 'Figma Components/State3DirectionNo',
  component: State3DirectionNo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=3, Direction=No`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State3DirectionNo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State3DirectionNo-default',
  },
};
