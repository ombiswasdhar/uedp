import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Figma Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'High-fidelity Switch component mapped from Figma node `37:671`. Fully interactive with hover, focus, and pressed states driven natively by React and CSS transitions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultSelected: { control: 'boolean' }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultSelected: false,
    disabled: false,
  },
};

export const Selected: Story = {
  args: {
    defaultSelected: true,
    disabled: false,
  },
};

export const DisabledUnselected: Story = {
  args: {
    defaultSelected: false,
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    defaultSelected: true,
    disabled: true,
  },
};
