import type { Meta, StoryObj } from '@storybook/react';
import { Frame5459 } from './Frame5459';

const meta = {
  title: 'Figma Components/Frame5459',
  component: Frame5459,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5459`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5459>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5459-default',
  },
};
