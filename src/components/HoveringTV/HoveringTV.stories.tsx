import type { Meta, StoryObj } from '@storybook/react';
import { HoveringTV, HoveringTVUnit } from './HoveringTV';

const meta = {
  title: 'Figma Components/Hovering TV',
  component: HoveringTV,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Hovering TV (\`Component 2\`)
Directly mapped from Figma Node \`190:68\` (\`PlayStaples--Copy-\`).

Features:
- **10 Floating Vintage CRT TVs**: Each displays an authentic retro vehicle / highway photograph behind a detailed CRT television bezel with glass glare and antennas.
- **Smart Animate Floating Loop**: Faithfully replicates the 4-variant linear animation sequence (\`Default\` → \`Variant2\` → \`Variant3\` → \`Variant4\` → \`Default\`) with an exact 8.296s duration.
- **Interactive CRT Focus Modal**: Click any TV set to open a high-definition retro inspection view.
- **CRT Phosphor Scanlines**: Authentic scanline texture overlay.
- **Standalone TV Unit**: Comes with \`HoveringTVUnit\` for placing individual floating vintage TV sets across the site.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['animated', 'Default', 'Variant2', 'Variant3', 'Variant4'],
      description: 'Animation mode or specific keyframe variant from Figma',
    },
    speed: {
      control: { type: 'range', min: 2, max: 20, step: 0.5 },
      description: 'Cycle duration in seconds (default is Figma\'s exact 8.296s)',
    },
    showScanlines: {
      control: 'boolean',
      description: 'Display retro CRT scanline texture overlay',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause the floating animation when mouse hovers over the stage',
    },
    interactive: {
      control: 'boolean',
      description: 'Allow clicking a TV to open retro CRT inspection modal',
    },
  },
} satisfies Meta<typeof HoveringTV>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Continuous floating hovering animation through all 4 Figma variants
 */
export const AnimatedFloatingLoop: Story = {
  args: {
    variant: 'animated',
    speed: 8.296,
    showScanlines: true,
    pauseOnHover: true,
    interactive: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      <HoveringTV {...args} />
    </div>
  ),
};

/**
 * Keyframe 1: Default variant from Figma
 */
export const KeyframeDefault: Story = {
  args: {
    variant: 'Default',
    showScanlines: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      <HoveringTV {...args} />
    </div>
  ),
};

/**
 * Keyframe 2: Variant 2 from Figma
 */
export const KeyframeVariant2: Story = {
  args: {
    variant: 'Variant2',
    showScanlines: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      <HoveringTV {...args} />
    </div>
  ),
};

/**
 * Keyframe 3: Variant 3 from Figma
 */
export const KeyframeVariant3: Story = {
  args: {
    variant: 'Variant3',
    showScanlines: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      <HoveringTV {...args} />
    </div>
  ),
};

/**
 * Keyframe 4: Variant 4 from Figma
 */
export const KeyframeVariant4: Story = {
  args: {
    variant: 'Variant4',
    showScanlines: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      <HoveringTV {...args} />
    </div>
  ),
};

/**
 * Immersive dark ambient gallery background
 */
export const DarkAmbientGallery: Story = {
  args: {
    variant: 'animated',
    speed: 8.296,
  },
  render: (args) => (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #181824 0%, #0C0C12 70%, #060608 100%)',
        padding: '60px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: '48px',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '0.05em',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
          }}
        >
          Hovering TV Gallery
        </h1>
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '18px',
            fontWeight: 500,
            color: '#A1A1AA',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Vintage 3D CRT Floating Showcase // 10 Channel Broadcast
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '1400px' }}>
        <HoveringTV {...args} />
      </div>
    </div>
  ),
};

/**
 * Standalone Hovering TV Unit
 */
export const StandaloneTVUnit: StoryObj = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '48px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        flexWrap: 'wrap',
        background: '#0E0E13',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <HoveringTVUnit width="320px" floating={true} />
        <p style={{ color: '#A1A1AA', marginTop: '16px', fontFamily: "'Rajdhani', sans-serif", fontSize: '16px' }}>
          Floating Vintage CRT (Animated)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HoveringTVUnit width="320px" floating={false} />
        <p style={{ color: '#A1A1AA', marginTop: '16px', fontFamily: "'Rajdhani', sans-serif", fontSize: '16px' }}>
          Static Vintage CRT
        </p>
      </div>
    </div>
  ),
};
