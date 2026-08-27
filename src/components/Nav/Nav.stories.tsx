import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';
import type { NavItem } from './Nav';

const meta = {
  title: 'Figma Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'High-fidelity Nav component mapped from Figma node `17:1960`. Showcases exact Flexbox conversions from absolute positioning, active state red buttons (`rgba(255, 81, 89, 1)`), and strict typography using `Barlow Condensed` with precise letter-spacing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeItem: { 
      control: 'select', 
      options: ['Shop', 'Vehicles', 'Taxis', 'About', 'search']
    },
  },
  render: function Render(args) {
    const [active, setActive] = useState<NavItem>(args.activeItem || 'Shop');
    return (
      <Nav
        {...args}
        activeItem={active}
        onItemClick={(item) => setActive(item)}
      />
    );
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItem: 'Shop',
  },
};

export const VehiclesActive: Story = {
  args: {
    activeItem: 'Vehicles',
  },
};

export const SearchActive: Story = {
  args: {
    activeItem: 'search',
  },
};
