import type { Meta, StoryObj } from '@storybook/react';
import { Component9 } from './Component9';

const meta = {
  title: 'Figma Components/Component9',
  component: Component9,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Component 9`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component9>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Component9-default',
  },
};
