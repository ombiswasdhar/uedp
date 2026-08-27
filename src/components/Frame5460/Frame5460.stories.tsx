import type { Meta, StoryObj } from '@storybook/react';
import { Frame5460 } from './Frame5460';

const meta = {
  title: 'Figma Components/Frame5460',
  component: Frame5460,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5460`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5460>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5460-default',
  },
};
