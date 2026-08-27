import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './Marquee';

const meta = {
  title: 'Figma Components/Marquee',
  component: Marquee,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'High-fidelity Marquee component mapped from Figma node `60:827`. Uses seamless CSS keyframe animations to translate the duplicated text container, preserving the `178px` height, `rgba(239, 68, 68, 1)` red background, and bold `Rajdhani` text at `64px`.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: { 
      control: 'select', 
      options: ['Yes', 'No'] 
    },
    text: { control: 'text' }
  }
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DirectionYes: Story = {
  args: {
    direction: 'Yes',
  },
};

export const DirectionNo: Story = {
  args: {
    direction: 'No',
  },
};
