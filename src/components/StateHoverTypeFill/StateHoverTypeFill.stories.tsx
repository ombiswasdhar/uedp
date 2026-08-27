import type { Meta, StoryObj } from '@storybook/react';
import { StateHoverTypeFill } from './StateHoverTypeFill';

const meta = {
  title: 'Figma Components/StateHoverTypeFill',
  component: StateHoverTypeFill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Hover, Type=Fill`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateHoverTypeFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateHoverTypeFill-default',
  },
};
