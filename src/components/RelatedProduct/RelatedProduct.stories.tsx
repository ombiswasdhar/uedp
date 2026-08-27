import type { Meta, StoryObj } from '@storybook/react';
import { RelatedProduct } from './RelatedProduct';

const meta = {
  title: 'Figma Components/RelatedProduct',
  component: RelatedProduct,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Related Product`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RelatedProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'RelatedProduct-default',
  },
};
