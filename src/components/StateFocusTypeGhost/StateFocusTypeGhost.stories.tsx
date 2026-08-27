import type { Meta, StoryObj } from '@storybook/react';
import { StateFocusTypeGhost } from './StateFocusTypeGhost';

const meta = {
  title: 'Figma Components/StateFocusTypeGhost',
  component: StateFocusTypeGhost,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Focus, Type=Ghost`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateFocusTypeGhost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateFocusTypeGhost-default',
  },
};
