import type { Meta, StoryObj } from '@storybook/react';
import { SelectedTrueStateFocusedIconFalse } from './SelectedTrueStateFocusedIconFalse';

const meta = {
  title: 'Figma Components/SelectedTrueStateFocusedIconFalse',
  component: SelectedTrueStateFocusedIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=True, State=Focused, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedTrueStateFocusedIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedTrueStateFocusedIconFalse-default',
  },
};
