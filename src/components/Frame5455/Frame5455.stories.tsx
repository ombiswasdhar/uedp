import type { Meta, StoryObj } from '@storybook/react';
import { Frame5455 } from './Frame5455';

const meta = {
  title: 'Figma Components/Frame5455',
  component: Frame5455,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5455`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5455>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5455-default',
  },
};
