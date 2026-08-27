import type { Meta, StoryObj } from '@storybook/react';
import { StateActiveTypeOutline } from './StateActiveTypeOutline';

const meta = {
  title: 'Figma Components/StateActiveTypeOutline',
  component: StateActiveTypeOutline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Active, Type=Outline`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateActiveTypeOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateActiveTypeOutline-default',
  },
};
