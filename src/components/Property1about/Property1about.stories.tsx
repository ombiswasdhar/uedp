import type { Meta, StoryObj } from '@storybook/react';
import { Property1about } from './Property1about';

const meta = {
  title: 'Figma Components/Property1about',
  component: Property1about,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=about`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1about>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1about-default',
  },
};
