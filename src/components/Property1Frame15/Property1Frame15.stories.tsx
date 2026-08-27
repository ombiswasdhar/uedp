import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame15 } from './Property1Frame15';

const meta = {
  title: 'Figma Components/Property1Frame15',
  component: Property1Frame15,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Frame 15`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Frame15>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Frame15-default',
  },
};
