import type { Meta, StoryObj } from '@storybook/react';
import { Property1Active } from './Property1Active';

const meta = {
  title: 'Figma Components/Property1Active',
  component: Property1Active,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Active`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Active>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Active-default',
  },
};
