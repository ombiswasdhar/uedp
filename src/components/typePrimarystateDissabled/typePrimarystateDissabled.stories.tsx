import type { Meta, StoryObj } from '@storybook/react';
import { typePrimarystateDissabled } from './typePrimarystateDissabled';

const meta = {
  title: 'Figma Components/typePrimarystateDissabled',
  component: typePrimarystateDissabled,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `type=Primary, state=Dissabled`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof typePrimarystateDissabled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'typePrimarystateDissabled-default',
  },
};
