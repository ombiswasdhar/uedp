import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant11 } from './Property1Variant11';

const meta = {
  title: 'Figma Components/Property1Variant11',
  component: Property1Variant11,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant11`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant11-default',
  },
};
