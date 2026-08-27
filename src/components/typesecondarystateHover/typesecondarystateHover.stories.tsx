import type { Meta, StoryObj } from '@storybook/react';
import { typesecondarystateHover } from './typesecondarystateHover';

const meta = {
  title: 'Figma Components/typesecondarystateHover',
  component: typesecondarystateHover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `type=secondary, state=Hover`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof typesecondarystateHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'typesecondarystateHover-default',
  },
};
