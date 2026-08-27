import type { Meta, StoryObj } from '@storybook/react';
import { Frame5461 } from './Frame5461';

const meta = {
  title: 'Figma Components/Frame5461',
  component: Frame5461,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5461`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5461>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5461-default',
  },
};
