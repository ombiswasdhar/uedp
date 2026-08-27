import type { Meta, StoryObj } from '@storybook/react';
import { SelectedFalseStateDisabledIconFalse } from './SelectedFalseStateDisabledIconFalse';

const meta = {
  title: 'Figma Components/SelectedFalseStateDisabledIconFalse',
  component: SelectedFalseStateDisabledIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=False, State=Disabled, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedFalseStateDisabledIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedFalseStateDisabledIconFalse-default',
  },
};
