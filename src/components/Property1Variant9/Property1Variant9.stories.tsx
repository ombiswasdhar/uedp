import type { Meta, StoryObj } from '@storybook/react';
import { Property1Variant9 } from './Property1Variant9';

const meta = {
  title: 'Figma Components/Property1Variant9',
  component: Property1Variant9,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Variant9`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Variant9>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Variant9-default',
  },
};
