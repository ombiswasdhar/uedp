import type { Meta, StoryObj } from '@storybook/react';
import { StateHoverTypeGhost } from './StateHoverTypeGhost';

const meta = {
  title: 'Figma Components/StateHoverTypeGhost',
  component: StateHoverTypeGhost,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Hover, Type=Ghost`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateHoverTypeGhost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateHoverTypeGhost-default',
  },
};
