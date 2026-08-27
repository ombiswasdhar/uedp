import type { Meta, StoryObj } from '@storybook/react';
import { Property1taxis } from './Property1taxis';

const meta = {
  title: 'Figma Components/Property1taxis',
  component: Property1taxis,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=taxis`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1taxis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1taxis-default',
  },
};
