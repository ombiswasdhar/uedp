import type { Meta, StoryObj } from '@storybook/react';
import { Property1Hover } from './Property1Hover';

const meta = {
  title: 'Figma Components/Property1Hover',
  component: Property1Hover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Hover`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Hover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Hover-default',
  },
};
