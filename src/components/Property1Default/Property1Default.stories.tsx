import type { Meta, StoryObj } from '@storybook/react';
import { Property1Default } from './Property1Default';

const meta = {
  title: 'Figma Components/Property1Default',
  component: Property1Default,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Default`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Default>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Default-default',
  },
};
