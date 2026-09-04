import type { Meta, StoryObj } from '@storybook/react';
import { CustomerReviews } from './CustomerReviews';

const meta = {
  title: 'Figma Components/Customer Reviews Section',
  component: CustomerReviews,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Customer Review Section directly mapped from Figma Node `24:126`. Features rating aggregation (4.7 rating based on 128 reviews), interactive sort filtering (Most Recent, Highest Rated, Lowest Rated, With Photos), Write a Review modal submission, and verified customer feedback cards with real prototype photos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    overallRating: { control: { type: 'number', step: 0.1, min: 0, max: 5 } },
    totalReviews: { control: 'number' },
  },
} satisfies Meta<typeof CustomerReviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overallRating: 4.7,
    totalReviews: 128,
  },
};
