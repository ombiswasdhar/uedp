import type { Meta, StoryObj } from '@storybook/react';
import { StateDisabledTypeOutline } from './StateDisabledTypeOutline';

const meta = {
  title: 'Figma Components/StateDisabledTypeOutline',
  component: StateDisabledTypeOutline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Disabled, Type=Outline`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateDisabledTypeOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateDisabledTypeOutline-default',
  },
};
