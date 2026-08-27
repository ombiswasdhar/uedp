import type { Meta, StoryObj } from '@storybook/react';
import { StateActiveTypeGhost } from './StateActiveTypeGhost';

const meta = {
  title: 'Figma Components/StateActiveTypeGhost',
  component: StateActiveTypeGhost,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Active, Type=Ghost`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateActiveTypeGhost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateActiveTypeGhost-default',
  },
};
