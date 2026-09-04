import React, { useState } from 'react';
import './HoveringTV.css';

// Import all 10 high-resolution Red TV assets rendered directly from Figma prototype
import tvImage0 from '../../assets/tv/tv-0.png';
import tvImage1 from '../../assets/tv/tv-1.png';
import tvImage2 from '../../assets/tv/tv-2.png';
import tvImage3 from '../../assets/tv/tv-3.png';
import tvImage4 from '../../assets/tv/tv-4.png';
import tvImage5 from '../../assets/tv/tv-5.png';
import tvImage6 from '../../assets/tv/tv-6.png';
import tvImage7 from '../../assets/tv/tv-7.png';
import tvImage8 from '../../assets/tv/tv-8.png';
import tvImage9 from '../../assets/tv/tv-9.png';

export interface HoveringTVItemConfig {
  id: string;
  name: string;
  tvImage: string;
  title?: string;
  alt?: string;
}

export const DEFAULT_HOVERING_TV_ITEMS: HoveringTVItemConfig[] = [
  {
    id: 'tv-0',
    name: 'Frame 485',
    tvImage: tvImage0,
    title: 'Wooden Car Stacks',
    alt: 'Solid hardwood carved car blanks stacked in workshop',
  },
  {
    id: 'tv-1',
    name: 'Frame 483',
    tvImage: tvImage1,
    title: 'Wooden Toy Fleet',
    alt: 'Handcrafted wooden toy cars on dark woodgrain surface',
  },
  {
    id: 'tv-2',
    name: 'Frame 484',
    tvImage: tvImage2,
    title: 'Wooden Car Prototypes',
    alt: 'Miniature wooden toy car prototype models on white background',
  },
  {
    id: 'tv-3',
    name: 'Frame 520',
    tvImage: tvImage3,
    title: 'Modular Assembly Kit',
    alt: 'Disassembled toy car kit with chassis, roof, wheels, axles, and hex wrench',
  },
  {
    id: 'tv-4',
    name: 'Frame 519',
    tvImage: tvImage4,
    title: 'Hands at Play',
    alt: 'Two hands rolling miniature wooden toy cars towards each other',
  },
  {
    id: 'tv-5',
    name: 'Group 5449',
    tvImage: tvImage5,
    title: 'Top-Down Vehicle Lineup',
    alt: 'Top-down perspective of miniature wooden play cars and branded chassis',
  },
  {
    id: 'tv-6',
    name: 'Frame 522',
    tvImage: tvImage6,
    title: 'Towering Toy Car Pile',
    alt: 'Sculptural stack of miniature blue and white toy cars',
  },
  {
    id: 'tv-7',
    name: 'Frame 521',
    tvImage: tvImage7,
    title: 'Circuit Race Track',
    alt: 'Curving grey slot car road circuit track with transport truck',
  },
  {
    id: 'tv-8',
    name: 'Frame 523',
    tvImage: tvImage8,
    title: 'Vintage Bus Circle',
    alt: 'Classic red and white toy buses arranged facing outward in a circle',
  },
  {
    id: 'tv-9',
    name: 'Frame 524',
    tvImage: tvImage9,
    title: 'Camper Van Fleet',
    alt: 'Retro green and white miniature camper vans in formation',
  },
];

export interface HoveringTVProps {
  /**
   * Animation mode or static keyframe variant from Figma
   * @default 'animated'
   */
  variant?: 'animated' | 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
  /**
   * Animation cycle speed in seconds (Figma transition duration is 8.296s)
   * @default 8.296
   */
  speed?: number;
  /**
   * Custom list of TV items or overrides
   */
  items?: Partial<HoveringTVItemConfig>[];
  /**
   * Pause floating animation on hover
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Enable interactive click inspection modal
   * @default true
   */
  interactive?: boolean;
  /**
   * Callback fired when a TV set is clicked
   */
  onTVClick?: (item: HoveringTVItemConfig, index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * HoveringTV Component
 * Mapped directly from Figma Node `190:68` ("Component 2")
 * Featuring 10 floating red vintage CRT TV sets displaying authentic PlayStaples wooden toy cars,
 * smoothly looping through the 4 Figma keyframe variants.
 */
export const HoveringTV: React.FC<HoveringTVProps> = ({
  variant = 'animated',
  speed = 8.296,
  items,
  pauseOnHover = true,
  interactive = true,
  onTVClick,
  className = '',
  style = {},
}) => {
  const [selectedTV, setSelectedTV] = useState<{ item: HoveringTVItemConfig; index: number } | null>(null);

  // Merge default items with any caller overrides
  const tvItems: HoveringTVItemConfig[] = DEFAULT_HOVERING_TV_ITEMS.map((defaultItem, idx) => {
    if (items && items[idx]) {
      return {
        ...defaultItem,
        ...items[idx],
      };
    }
    return defaultItem;
  });

  const handleTVClick = (item: HoveringTVItemConfig, index: number) => {
    if (onTVClick) {
      onTVClick(item, index);
    }
    if (interactive) {
      setSelectedTV({ item, index });
    }
  };

  const containerClasses = [
    'hovering-tv-container',
    `hovering-tv-variant-${variant}`,
    pauseOnHover ? 'hovering-tv-pause-on-hover' : '',
    className,
  ].filter(Boolean).join(' ');

  const cssVariables = {
    '--hovering-tv-speed': `${speed}s`,
    ...style,
  } as React.CSSProperties;

  return (
    <div className={containerClasses} style={cssVariables} data-testid="hovering-tv">
      <div className="hovering-tv-stage">
        {tvItems.map((item, idx) => (
          <div
            key={item.id}
            className={`hovering-tv-item hovering-tv-item-${idx}`}
            onClick={() => handleTVClick(item, idx)}
            title={item.title || item.name}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleTVClick(item, idx);
              }
            }}
          >
            <img
              src={item.tvImage}
              alt={item.alt || item.title || `Red TV ${idx + 1}`}
              className="hovering-tv-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Retro Focus Inspection Modal */}
      {selectedTV && (
        <div className="hovering-tv-modal-backdrop" onClick={() => setSelectedTV(null)}>
          <div className="hovering-tv-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="hovering-tv-modal-close"
              onClick={() => setSelectedTV(null)}
              aria-label="Close TV view"
            >
              ✕
            </button>
            <div className="hovering-tv-modal-tv">
              <img
                src={selectedTV.item.tvImage}
                alt={selectedTV.item.alt}
              />
            </div>
            <div className="hovering-tv-modal-info">
              <h3 className="hovering-tv-modal-title">{selectedTV.item.title}</h3>
              <p className="hovering-tv-modal-desc">
                {selectedTV.item.name} • PlayStaples Vintage Red CRT Display
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Also export single standalone TV unit
export interface HoveringTVUnitProps {
  tvImage?: string;
  floating?: boolean;
  width?: number | string;
  title?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * HoveringTVUnit Component
 * A standalone retro vintage red television set with gentle floating oscillation.
 */
export const HoveringTVUnit: React.FC<HoveringTVUnitProps> = ({
  tvImage = tvImage4,
  floating = true,
  width = '340px',
  title = 'Retro Red Television',
  alt = 'PlayStaples Red Vintage CRT Television Unit',
  className = '',
  style = {},
  onClick,
}) => {
  return (
    <div
      className={`hovering-tv-unit ${floating ? 'hovering-tv-unit-floating' : ''} ${className}`}
      style={{ width, ...style }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      title={title}
    >
      <img src={tvImage} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  );
};

// Aliases for convenience matching Figma exact name
export const hovering_tv = HoveringTV;
export default HoveringTV;
