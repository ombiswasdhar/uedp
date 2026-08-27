import type { Meta, StoryObj } from '@storybook/react';
import { productcard } from './productcard';

const meta = {
  title: 'Figma Components/productcard',
  component: productcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `product card`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof productcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'productcard-default',
  },
};
