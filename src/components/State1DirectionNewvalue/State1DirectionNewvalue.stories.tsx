import type { Meta, StoryObj } from '@storybook/react';
import { State1DirectionNewvalue } from './State1DirectionNewvalue';

const meta = {
  title: 'Figma Components/State1DirectionNewvalue',
  component: State1DirectionNewvalue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=1, Direction=New value`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof State1DirectionNewvalue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'State1DirectionNewvalue-default',
  },
};
