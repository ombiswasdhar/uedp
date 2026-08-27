import type { Meta, StoryObj } from '@storybook/react';
import { typePrimarystateHover } from './typePrimarystateHover';

const meta = {
  title: 'Figma Components/typePrimarystateHover',
  component: typePrimarystateHover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated component from Figma layer `type=Primary, state=Hover`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof typePrimarystateHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testId: 'typePrimarystateHover-default',
  },
};
