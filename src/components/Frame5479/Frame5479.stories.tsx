import type { Meta, StoryObj } from '@storybook/react';
import { Frame5479 } from './Frame5479';

const meta = {
  title: 'Figma Components/Frame5479',
  component: Frame5479,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5479`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5479>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5479-default',
  },
};
