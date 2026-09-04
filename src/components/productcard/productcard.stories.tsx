import type { Meta, StoryObj } from '@storybook/react';
import { productcard } from './productcard';

const meta = {
  title: 'Figma Components/Product Card',
  component: productcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'High-fidelity Product Card component directly mapped from Figma Node `44:624`. Features exact Barlow Condensed & Rajdhani typography, dual-box stacked outline layout, metadata tags (Bestseller badge and model code), series subtitle, and price.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bombay dreams', 'konkan ghats', 'Kaali - Peeli', 'Retro rohtak'],
      description: 'The product card variant mapped from Figma',
    },
    title: { control: 'text', description: 'Product title' },
    price: { control: 'text', description: 'Price display' },
    series: { control: 'text', description: 'Vehicle series classification' },
    badge: { control: 'text', description: 'Highlight badge (e.g. BESTSELLER)' },
    code: { control: 'text', description: 'Product SKU code' },
    imageUrl: { control: 'text', description: 'Vehicle image source' },
  },
} satisfies Meta<typeof productcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BombayDreams: Story = {
  args: {
    variant: 'bombay dreams',
  },
};

export const KonkanGhats: Story = {
  args: {
    variant: 'konkan ghats',
  },
};

export const KaaliPeeli: Story = {
  args: {
    variant: 'Kaali - Peeli',
  },
};

export const RetroRohtak: Story = {
  args: {
    variant: 'Retro rohtak',
  },
};

export const AllVariantsGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 456px))', gap: '32px', padding: '32px', maxWidth: '1400px', margin: '0 auto', background: '#F8F9FA' }}>
      <productcard variant="bombay dreams" />
      <productcard variant="konkan ghats" />
      <productcard variant="Kaali - Peeli" />
      <productcard variant="Retro rohtak" />
    </div>
  ),
};
