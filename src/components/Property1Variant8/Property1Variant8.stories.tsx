import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant8 } from './Property1Variant8';

const meta = {
  title: 'Figma Components/Property1Variant8',
  component: Property1Variant8,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant8`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant8>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant8-default',
  },
};
