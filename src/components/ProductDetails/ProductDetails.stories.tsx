import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetails } from './ProductDetails';

const meta = {
  title: 'Figma Components/Product Details Page',
  component: ProductDetails,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'High-fidelity Product Details Page mapped from Figma node `24:340`. Features responsive layout, integrated Nav and Marquee, exact typography mappings (Rajdhani, Poppins, Barlow Condensed), and semantic specs separation.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
