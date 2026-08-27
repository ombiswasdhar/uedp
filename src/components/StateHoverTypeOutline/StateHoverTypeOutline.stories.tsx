import type { Meta, StoryObj } from '@storybook/react';
import { StateHoverTypeOutline } from './StateHoverTypeOutline';

const meta = {
  title: 'Figma Components/StateHoverTypeOutline',
  component: StateHoverTypeOutline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Hover, Type=Outline`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateHoverTypeOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateHoverTypeOutline-default',
  },
};
