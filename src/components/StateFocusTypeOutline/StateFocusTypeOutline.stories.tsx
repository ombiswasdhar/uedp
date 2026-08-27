import type { Meta, StoryObj } from '@storybook/react';
import { StateFocusTypeOutline } from './StateFocusTypeOutline';

const meta = {
  title: 'Figma Components/StateFocusTypeOutline',
  component: StateFocusTypeOutline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Focus, Type=Outline`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateFocusTypeOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateFocusTypeOutline-default',
  },
};
