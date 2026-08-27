import type { Meta, StoryObj } from '@storybook/react';
import { SelectedTrueStateHoveredIconFalse } from './SelectedTrueStateHoveredIconFalse';

const meta = {
  title: 'Figma Components/SelectedTrueStateHoveredIconFalse',
  component: SelectedTrueStateHoveredIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=True, State=Hovered, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedTrueStateHoveredIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedTrueStateHoveredIconFalse-default',
  },
};
