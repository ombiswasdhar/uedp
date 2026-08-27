import type { Meta, StoryObj } from '@storybook/react';
import { Property1Filled } from './Property1Filled';

const meta = {
  title: 'Figma Components/Property1Filled',
  component: Property1Filled,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Filled`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Filled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Filled-default',
  },
};
