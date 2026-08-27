import type { Meta, StoryObj } from '@storybook/react';
import { StateDefaultTypeOutline } from './StateDefaultTypeOutline';

const meta = {
  title: 'Figma Components/StateDefaultTypeOutline',
  component: StateDefaultTypeOutline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Default, Type=Outline`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateDefaultTypeOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateDefaultTypeOutline-default',
  },
};
