import type { Meta, StoryObj } from '@storybook/react';
import { Property1Frame1 } from './Property1Frame1';

const meta = {
  title: 'Figma Components/Property1Frame1',
  component: Property1Frame1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Frame 1`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Frame1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Frame1-default',
  },
};
