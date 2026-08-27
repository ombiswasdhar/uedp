import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame17 } from './Property1Frame17';

const meta = {
  title: 'Figma Components/Property1Frame17',
  component: Property1Frame17,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Frame 17`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Frame17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Frame17-default',
  },
};
