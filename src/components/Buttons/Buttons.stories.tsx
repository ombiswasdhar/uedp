import type { Meta, StoryObj } from '@storybook/react';
import { Buttons } from './Buttons';

const meta = {
  title: 'Figma Components/Buttons',
  component: Buttons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'High-fidelity Buttons component mapped perfectly from Figma node `51:584`. Includes precise pixel measurements, border radius, Rajdhani typography, and strict RGBA color variants extracted directly from the Figma API for Fill, Outline, and Ghost buttons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['Fill', 'Outline', 'Ghost'] 
    },
    forceState: {
      control: 'select',
      options: [undefined, 'default', 'hover', 'active', 'focus', 'disabled'],
      description: 'Force a specific visual state to match Figma variants.',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
      description: 'Text inside the button',
    }
  }
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FillDefault: Story = {
  args: {
    variant: 'Fill',
    children: 'Action',
  },
};

export const OutlineHover: Story = {
  args: {
    variant: 'Outline',
    forceState: 'hover',
    children: 'Action',
  },
};

export const GhostActive: Story = {
  args: {
    variant: 'Ghost',
    forceState: 'active',
    children: 'Action',
  },
};

export const FillDisabled: Story = {
  args: {
    variant: 'Fill',
    disabled: true,
    children: 'Action',
  },
};
