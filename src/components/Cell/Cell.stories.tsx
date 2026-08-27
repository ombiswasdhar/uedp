import type { Meta, StoryObj } from '@storybook/react';
import { Cell } from './Cell';

const meta = {
  title: 'Figma Components/Cell',
  component: Cell,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Cell`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Cell-default',
  },
};
