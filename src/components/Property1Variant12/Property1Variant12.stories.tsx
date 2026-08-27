import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant12 } from './Property1Variant12';

const meta = {
  title: 'Figma Components/Property1Variant12',
  component: Property1Variant12,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant12`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant12-default',
  },
};
