import type { Meta, StoryObj } from '@storybook/react';
import { Frame5456 } from './Frame5456';

const meta = {
  title: 'Figma Components/Frame5456',
  component: Frame5456,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5456`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5456>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5456-default',
  },
};
