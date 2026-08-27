import type { Meta, StoryObj } from '@storybook/react';
import { Property1Disabled } from './Property1Disabled';

const meta = {
  title: 'Figma Components/Property1Disabled',
  component: Property1Disabled,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=Disabled`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1Disabled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1Disabled-default',
  },
};
