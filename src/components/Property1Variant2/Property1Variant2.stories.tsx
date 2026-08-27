import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant2 } from './Property1Variant2';

const meta = {
  title: 'Figma Components/Property1Variant2',
  component: Property1Variant2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant2`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant2-default',
  },
};
