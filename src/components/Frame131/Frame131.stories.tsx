import type { Meta, StoryObj } from '@storybook/react';
import { Frame131 } from './Frame131';

const meta = {
  title: 'Figma Components/Frame131',
  component: Frame131,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Frame 131`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame131>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Frame131-default',
  },
};
