import type { Meta, StoryObj } from '@storybook/react';
import { typesecondarystateDissabled } from './typesecondarystateDissabled';

const meta = {
  title: 'Figma Components/typesecondarystateDissabled',
  component: typesecondarystateDissabled,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `type=secondary, state=Dissabled`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof typesecondarystateDissabled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'typesecondarystateDissabled-default',
  },
};
