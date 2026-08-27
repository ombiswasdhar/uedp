import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame18 } from './Property1Frame18';

const meta = {
  title: 'Figma Components/Property1Frame18',
  component: Property1Frame18,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Frame 18`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Frame18>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Frame18-default',
  },
};
