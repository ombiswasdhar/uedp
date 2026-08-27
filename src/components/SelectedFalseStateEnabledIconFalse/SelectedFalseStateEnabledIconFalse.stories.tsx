import type { Meta, StoryObj } from '@storybook/react';
import { SelectedFalseStateEnabledIconFalse } from './SelectedFalseStateEnabledIconFalse';

const meta = {
  title: 'Figma Components/SelectedFalseStateEnabledIconFalse',
  component: SelectedFalseStateEnabledIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=False, State=Enabled, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedFalseStateEnabledIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedFalseStateEnabledIconFalse-default',
  },
};
