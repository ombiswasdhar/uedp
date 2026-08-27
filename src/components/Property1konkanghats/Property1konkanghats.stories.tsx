import type { Meta, StoryObj } from '@storybook/react';
import { Property1konkanghats } from './Property1konkanghats';

const meta = {
  title: 'Figma Components/Property1konkanghats',
  component: Property1konkanghats,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=konkan ghats`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1konkanghats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1konkanghats-default',
  },
};
