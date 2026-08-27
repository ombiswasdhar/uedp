import type { Meta, StoryObj } from '@storybook/react';
import { typesecondarystateDefault } from './typesecondarystateDefault';

const meta = {
  title: 'Figma Components/typesecondarystateDefault',
  component: typesecondarystateDefault,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `type=secondary, state=Default`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof typesecondarystateDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'typesecondarystateDefault-default',
  },
};
