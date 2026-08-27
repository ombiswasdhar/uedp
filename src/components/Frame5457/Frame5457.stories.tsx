import type { Meta, StoryObj } from '@storybook/react';
import { Frame5457 } from './Frame5457';

const meta = {
  title: 'Figma Components/Frame5457',
  component: Frame5457,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5457`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5457>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5457-default',
  },
};
