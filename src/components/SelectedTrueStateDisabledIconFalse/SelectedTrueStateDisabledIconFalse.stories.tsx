import type { Meta, StoryObj } from '@storybook/react';
import { SelectedTrueStateDisabledIconFalse } from './SelectedTrueStateDisabledIconFalse';

const meta = {
  title: 'Figma Components/SelectedTrueStateDisabledIconFalse',
  component: SelectedTrueStateDisabledIconFalse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Selected=True, State=Disabled, Icon=False`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedTrueStateDisabledIconFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'SelectedTrueStateDisabledIconFalse-default',
  },
};
