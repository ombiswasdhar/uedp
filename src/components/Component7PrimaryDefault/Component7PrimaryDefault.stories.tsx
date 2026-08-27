import type { Meta, StoryObj } from '@storybook/react';
import { Component7PrimaryDefault } from './Component7PrimaryDefault';

const meta = {
  title: 'Figma Components/Component7PrimaryDefault',
  component: Component7PrimaryDefault,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Component 7/Primary/Default`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component7PrimaryDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Component7PrimaryDefault-default',
  },
};
