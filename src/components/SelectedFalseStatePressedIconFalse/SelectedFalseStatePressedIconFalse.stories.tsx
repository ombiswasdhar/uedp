import type { Meta, StoryObj } from '@storybook/react';
import { SelectedFalseStatePressedIconFalse } from './SelectedFalseStatePressedIconFalse';

const meta = {
  title: 'Figma Components/SelectedFalseStatePressedIconFalse',
  component: SelectedFalseStatePressedIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=False, State=Pressed, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedFalseStatePressedIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedFalseStatePressedIconFalse-default',
  },
};
