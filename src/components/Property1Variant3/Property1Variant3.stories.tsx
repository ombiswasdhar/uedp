import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant3 } from './Property1Variant3';

const meta = {
  title: 'Figma Components/Property1Variant3',
  component: Property1Variant3,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant3`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant3-default',
  },
};
