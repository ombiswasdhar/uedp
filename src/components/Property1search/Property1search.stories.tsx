import type { Meta, StoryObj } from '@storybook/react';
import { Property1search } from './Property1search';

const meta = {
  title: 'Figma Components/Property1search',
  component: Property1search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=search`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1search-default',
  },
};
