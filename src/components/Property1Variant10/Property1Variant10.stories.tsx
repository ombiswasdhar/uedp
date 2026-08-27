import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant10 } from './Property1Variant10';

const meta = {
  title: 'Figma Components/Property1Variant10',
  component: Property1Variant10,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant10`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant10-default',
  },
};
