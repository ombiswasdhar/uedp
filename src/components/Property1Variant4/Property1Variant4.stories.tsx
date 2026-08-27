import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant4 } from './Property1Variant4';

const meta = {
  title: 'Figma Components/Property1Variant4',
  component: Property1Variant4,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant4`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant4-default',
  },
};
