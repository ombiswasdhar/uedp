import type { Meta, StoryObj } from '@storybook/react';
import { Property1Error } from './Property1Error';

const meta = {
  title: 'Figma Components/Property1Error',
  component: Property1Error,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Error`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Error-default',
  },
};
