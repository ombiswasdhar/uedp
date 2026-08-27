import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame14 } from './Property1Frame14';

const meta = {
  title: 'Figma Components/Property1Frame14',
  component: Property1Frame14,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Frame 14`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Frame14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Frame14-default',
  },
};
