import type { Meta, StoryObj } from '@storybook/react';
import { Frame135 } from './Frame135';

const meta = {
  title: 'Figma Components/Frame135',
  component: Frame135,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 135`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame135>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame135-default',
  },
};
