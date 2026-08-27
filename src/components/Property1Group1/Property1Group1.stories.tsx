import type { Meta, StoryObj } from '@storybook/react';
import { Property1Group1 } from './Property1Group1';

const meta = {
  title: 'Figma Components/Property1Group1',
  component: Property1Group1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Group 1`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Group1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Group1-default',
  },
};
