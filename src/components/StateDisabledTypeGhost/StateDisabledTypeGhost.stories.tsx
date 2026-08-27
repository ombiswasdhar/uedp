import type { Meta, StoryObj } from '@storybook/react';
import { StateDisabledTypeGhost } from './StateDisabledTypeGhost';

const meta = {
  title: 'Figma Components/StateDisabledTypeGhost',
  component: StateDisabledTypeGhost,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Disabled, Type=Ghost`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateDisabledTypeGhost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateDisabledTypeGhost-default',
  },
};
