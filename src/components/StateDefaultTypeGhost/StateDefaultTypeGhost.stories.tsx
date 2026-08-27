import type { Meta, StoryObj } from '@storybook/react';
import { StateDefaultTypeGhost } from './StateDefaultTypeGhost';

const meta = {
  title: 'Figma Components/StateDefaultTypeGhost',
  component: StateDefaultTypeGhost,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Default, Type=Ghost`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateDefaultTypeGhost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateDefaultTypeGhost-default',
  },
};
