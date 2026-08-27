import type { Meta, StoryObj } from '@storybook/react';
import { SelectedTrueStatePressedIconFalse } from './SelectedTrueStatePressedIconFalse';

const meta = {
  title: 'Figma Components/SelectedTrueStatePressedIconFalse',
  component: SelectedTrueStatePressedIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=True, State=Pressed, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedTrueStatePressedIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedTrueStatePressedIconFalse-default',
  },
};
