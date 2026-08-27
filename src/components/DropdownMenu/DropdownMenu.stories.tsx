import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';

const meta = {
  title: 'Figma Components/Dropdown Menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'High-fidelity Dropdown Menu mapped perfectly from Figma node `65:1207`. Includes exact hover states, padding, bounding boxes, and transition properties based on `Property 1` variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectMenuText: { control: 'text' },
    items: { control: 'object' },
  }
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectMenuText: 'Most Recent',
    items: ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'],
  },
};
