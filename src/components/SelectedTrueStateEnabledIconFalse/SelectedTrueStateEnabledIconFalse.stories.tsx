import type { Meta, StoryObj } from '@storybook/react';
import { SelectedTrueStateEnabledIconFalse } from './SelectedTrueStateEnabledIconFalse';

const meta = {
  title: 'Figma Components/SelectedTrueStateEnabledIconFalse',
  component: SelectedTrueStateEnabledIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=True, State=Enabled, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedTrueStateEnabledIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedTrueStateEnabledIconFalse-default',
  },
};
