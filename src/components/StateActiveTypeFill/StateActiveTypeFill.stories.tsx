import type { Meta, StoryObj } from '@storybook/react';
import { StateActiveTypeFill } from './StateActiveTypeFill';

const meta = {
  title: 'Figma Components/StateActiveTypeFill',
  component: StateActiveTypeFill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `State=Active, Type=Fill`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateActiveTypeFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'StateActiveTypeFill-default',
  },
};
