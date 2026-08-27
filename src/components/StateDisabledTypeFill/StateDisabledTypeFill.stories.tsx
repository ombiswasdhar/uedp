import type { Meta, StoryObj } from '@storybook/react';
import { StateDisabledTypeFill } from './StateDisabledTypeFill';

const meta = {
  title: 'Figma Components/StateDisabledTypeFill',
  component: StateDisabledTypeFill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Disabled, Type=Fill`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateDisabledTypeFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateDisabledTypeFill-default',
  },
};
