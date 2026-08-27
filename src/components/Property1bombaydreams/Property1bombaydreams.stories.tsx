import type { Meta, StoryObj } from '@storybook/react';
import { Property1bombaydreams } from './Property1bombaydreams';

const meta = {
  title: 'Figma Components/Property1bombaydreams',
  component: Property1bombaydreams,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `Property 1=bombay dreams`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property1bombaydreams>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'Property1bombaydreams-default',
  },
};
