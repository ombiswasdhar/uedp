import type { Meta, StoryObj } from '@storybook/react';
import { SelectedFalseStateFocusedIconFalse } from './SelectedFalseStateFocusedIconFalse';

const meta = {
  title: 'Figma Components/SelectedFalseStateFocusedIconFalse',
  component: SelectedFalseStateFocusedIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=False, State=Focused, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedFalseStateFocusedIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedFalseStateFocusedIconFalse-default',
  },
};
