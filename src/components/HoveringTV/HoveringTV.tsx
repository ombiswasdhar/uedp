import React, { useState } from 'react';
import './HoveringTV.css';

// Import all 13 exact assets from Figma prototype
import tvCasingPrimary from '../../assets/tv/64be2eccb7fd5d02b8f18b02fd799197716bd14f.png';
import tvCasingSecondary from '../../assets/tv/b2d1dacfa4cfd8a02c43cc1ac892510a9a671cb3.png';

import screenImage0 from '../../assets/tv/28b85475091f157411e0f5af8eb13a159101dc9a.png';
import screenImage1 from '../../assets/tv/fcb0da10123b3fb0c11354f36e64da716bf6a6af.png';
import screenImage2 from '../../assets/tv/f25d4aea331d46654c9154e7a5bb5fd0c80af2d1.png';
import screenImage3 from '../../assets/tv/e9d02907258369b4c4147e996f61b53072a22944.png';
import screenImage4 from '../../assets/tv/2e64e7ad435c17fb93a5577b82ca4dd2ced6f480.png';
import screenImage5 from '../../assets/tv/12f8e25dc143dbd49360c1bc883822fcf98df942.png';
import screenImage6 from '../../assets/tv/dbfbe3df4d49aede2b39c29d17529916d9467a13.png';
import screenImage7 from '../../assets/tv/99d35d77a91d115d9322b4a228edaa93af8a7c0e.png';
import screenImage8 from '../../assets/tv/677d6a2a67e1bbed76f5cf347abd1438d00f017c.png';
import screenImage9 from '../../assets/tv/fdab1680e52c85677bfc1114705f90a4ce174043.png';

export interface HoveringTVItemConfig {
  id: string;
  name: string;
  screenImage: string;
  casingImage: string;
  title?: string;
  alt?: string;
}

export const DEFAULT_HOVERING_TV_ITEMS: HoveringTVItemConfig[] = [
  {
    id: 'tv-0',
    name: 'Frame 485',
    screenImage: screenImage0,
    casingImage: tvCasingPrimary,
    title: 'Vintage Sedan Frontal',
    alt: 'Vintage Sedan Classic Front View',
  },
  {
    id: 'tv-1',
    name: 'Frame 483',
    screenImage: screenImage1,
    casingImage: tvCasingPrimary,
    title: 'Retro Highway Sunset',
    alt: 'Retro car highway sunset drive',
  },
  {
    id: 'tv-2',
    name: 'Frame 484',
    screenImage: screenImage2,
    casingImage: tvCasingSecondary,
    title: 'Speedway Racer',
    alt: 'Vintage speedway racer on track',
  },
  {
    id: 'tv-3',
    name: 'Frame 520',
    screenImage: screenImage3,
    casingImage: tvCasingPrimary,
    title: 'Classic Road Journey',
    alt: 'Classic vehicle countryside journey',
  },
  {
    id: 'tv-4',
    name: 'Frame 519',
    screenImage: screenImage4,
    casingImage: tvCasingPrimary,
    title: 'Kaali-Peeli Taxi',
    alt: 'Iconic Bombay Kaali-Peeli Taxi',
  },
  {
    id: 'tv-5',
    name: 'Group 5449',
    screenImage: screenImage5,
    casingImage: tvCasingPrimary,
    title: 'Coastal Convertible',
    alt: 'Vintage convertible along coastal drive',
  },
  {
    id: 'tv-6',
    name: 'Frame 522',
    screenImage: screenImage6,
    casingImage: tvCasingPrimary,
    title: 'Chrome Grille Detail',
    alt: 'Classic chrome grille detail view',
  },
  {
    id: 'tv-7',
    name: 'Frame 521',
    screenImage: screenImage7,
    casingImage: tvCasingPrimary,
    title: 'Side Profile Cruiser',
    alt: 'Retro automobile side profile view',
  },
  {
    id: 'tv-8',
    name: 'Frame 523',
    screenImage: screenImage8,
    casingImage: tvCasingPrimary,
    title: 'Retro Dashboard Interior',
    alt: 'Vintage automotive dashboard and dials',
  },
  {
    id: 'tv-9',
    name: 'Frame 524',
    screenImage: screenImage9,
    casingImage: tvCasingPrimary,
    title: 'Mountain Pass Panorama',
    alt: 'Vintage vehicle mountain pass panorama',
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
   * Display retro CRT phosphor scanline texture overlay
   * @default true
   */
  showScanlines?: boolean;
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
 * Featuring 10 floating vintage CRT TV sets smoothly looping through the 4 Figma keyframe variants.
 */
export const HoveringTV: React.FC<HoveringTVProps> = ({
  variant = 'animated',
  speed = 8.296,
  items,
  showScanlines = true,
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
            <div className="hovering-tv-screen-wrapper">
              <img
                src={item.screenImage}
                alt={item.alt || item.title || `Retro TV ${idx + 1}`}
                className="hovering-tv-screen-img"
                loading="lazy"
              />
              {showScanlines && <div className="hovering-tv-scanlines" />}
              <img
                src={item.casingImage}
                alt="Vintage CRT TV Casing"
                className="hovering-tv-casing-img"
                loading="lazy"
              />
            </div>
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
              <div className="hovering-tv-screen-wrapper">
                <img
                  src={selectedTV.item.screenImage}
                  alt={selectedTV.item.alt}
                  className="hovering-tv-screen-img"
                />
                {showScanlines && <div className="hovering-tv-scanlines" />}
                <img
                  src={selectedTV.item.casingImage}
                  alt="Vintage CRT TV Casing"
                  className="hovering-tv-casing-img"
                />
              </div>
            </div>
            <div className="hovering-tv-modal-info">
              <h3 className="hovering-tv-modal-title">{selectedTV.item.title}</h3>
              <p className="hovering-tv-modal-desc">
                {selectedTV.item.name} • CRT Vintage Broadcast Display
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
  screenImage?: string;
  casingImage?: string;
  floating?: boolean;
  showScanlines?: boolean;
  width?: number | string;
  title?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * HoveringTVUnit Component
 * A standalone retro vintage CRT television set with gentle floating oscillation.
 */
export const HoveringTVUnit: React.FC<HoveringTVUnitProps> = ({
  screenImage = screenImage4,
  casingImage = tvCasingPrimary,
  floating = true,
  showScanlines = true,
  width = '320px',
  title = 'Retro Television',
  alt = 'Vintage CRT Television Unit',
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
      <div className="hovering-tv-screen-wrapper">
        <img src={screenImage} alt={alt} className="hovering-tv-screen-img" />
        {showScanlines && <div className="hovering-tv-scanlines" />}
        <img src={casingImage} alt="Vintage CRT TV Casing" className="hovering-tv-casing-img" />
      </div>
    </div>
  );
};

// Aliases for convenience matching Figma exact name
export const hovering_tv = HoveringTV;
export default HoveringTV;
