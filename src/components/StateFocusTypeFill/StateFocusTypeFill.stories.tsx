import type { Meta, StoryObj } from '@storybook/react';
import { StateFocusTypeFill } from './StateFocusTypeFill';

const meta = {
  title: 'Figma Components/StateFocusTypeFill',
  component: StateFocusTypeFill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Focus, Type=Fill`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateFocusTypeFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateFocusTypeFill-default',
  },
};
