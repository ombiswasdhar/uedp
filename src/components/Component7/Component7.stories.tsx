import type { Meta, StoryObj } from '@storybook/react';
import { Component7 } from './Component7';

const meta = {
  title: 'Figma Components/Component7',
  component: Component7,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Component 7`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component7>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Component7-default',
  },
};
