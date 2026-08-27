import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame16 } from './Property1Frame16';

const meta = {
  title: 'Figma Components/Property1Frame16',
  component: Property1Frame16,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Frame 16`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Frame16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Frame16-default',
  },
};
