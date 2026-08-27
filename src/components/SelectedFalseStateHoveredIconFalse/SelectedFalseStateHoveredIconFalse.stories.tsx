import type { Meta, StoryObj } from '@storybook/react';
import { SelectedFalseStateHoveredIconFalse } from './SelectedFalseStateHoveredIconFalse';

const meta = {
  title: 'Figma Components/SelectedFalseStateHoveredIconFalse',
  component: SelectedFalseStateHoveredIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=False, State=Hovered, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedFalseStateHoveredIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedFalseStateHoveredIconFalse-default',
  },
};
