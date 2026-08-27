import type { Meta, StoryObj } from '@storybook/react';
import { Component10 } from './Component10';

const meta = {
  title: 'Figma Components/Component10',
  component: Component10,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Component 10`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Component10-default',
  },
};
