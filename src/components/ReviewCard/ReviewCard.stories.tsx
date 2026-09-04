import type { Meta, StoryObj } from '@storybook/react';
import { ReviewCard } from './ReviewCard';
import photo1 from '../../assets/reviews/review-photo-1.png';
import photo2 from '../../assets/reviews/review-photo-2.png';
import photo3 from '../../assets/reviews/review-photo-3.png';

const meta = {
  title: 'Figma Components/Review Card',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Customer Review Card component mapped from Figma Node `24:189`. Displays user avatar badge, date, star rating, verified feedback, and optional customer photo attachments.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    author: { control: 'text' },
    date: { control: 'text' },
    rating: { control: { type: 'range', min: 1, max: 5 } },
    reviewText: { control: 'text' },
    photoUrl: { control: 'text' },
  },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPhoto: Story = {
  args: {
    author: 'Michael T.',
    date: 'April 8, 2026',
    rating: 5,
    reviewText:
      "My 3-year-old absolutely loves this toy car! The colors are vibrant, and it's the perfect size for little hands. The quality is outstanding—it's survived countless crashes and is still in perfect condition. Highly recommend!",
    photoUrl: photo1,
  },
};

export const TextOnly: Story = {
  args: {
    author: 'Jessica L.',
    date: 'April 5, 2026',
    rating: 4,
    reviewText:
      'Really nice toy car with smooth wheels that roll easily. My daughter enjoys playing with it every day. The only minor issue is that the paint chipped slightly after a few weeks, but overall a solid purchase.',
  },
};

export const SustainableToyReview: Story = {
  args: {
    author: 'David K.',
    date: 'April 1, 2026',
    rating: 5,
    reviewText:
      "Bought this for my nephew's birthday and it was a hit! The quality is excellent and it feels very sturdy. Love that it's made from sustainable materials too.",
    photoUrl: photo2,
  },
};

export const ToddlerReview: Story = {
  args: {
    author: 'Emily R.',
    date: 'March 28, 2026',
    rating: 5,
    reviewText:
      "Perfect for toddlers! The size is just right, not too big or small. The wheels move smoothly and it's easy to clean. My twins play with it together and it's holding up great.",
    photoUrl: photo3,
  },
};
