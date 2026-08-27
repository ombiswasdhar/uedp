import type { Meta, StoryObj } from '@storybook/react';
import { Frame5477 } from './Frame5477';

const meta = {
  title: 'Figma Components/Frame5477',
  component: Frame5477,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5477`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5477>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5477-default',
  },
};
