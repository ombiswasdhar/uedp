import type { Meta, StoryObj } from '@storybook/react';
import { Frame5458 } from './Frame5458';

const meta = {
  title: 'Figma Components/Frame5458',
  component: Frame5458,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 5458`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame5458>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame5458-default',
  },
};
