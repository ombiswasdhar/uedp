import React from 'react';
import './productcard.css';

export type ProductCardVariant = 
  | 'bombay dreams' 
  | 'konkan ghats' 
  | 'Variant3' 
  | 'Kaali - Peeli' 
  | 'Variant4' 
  | 'Retro rohtak';

export interface productcardProps {
  /** Figma Node ID: 44:624 */
  testId?: string;
  variant?: ProductCardVariant;
  title?: string;
  price?: string;
  series?: string;
  badge?: string;
  code?: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

const VARIANT_DEFAULTS: Record<string, { title: string; price: string; series: string; badge: string; code: string }> = {
  'bombay dreams': {
    title: 'Bombay dreams',
    price: '₹1,850',
    series: 'SEDAN & HATCHBACK — SERIES 01',
    badge: 'BESTSELLER',
    code: 'PS-KG-01',
  },
  'konkan ghats': {
    title: 'KONKAN GHATS',
    price: '₹1,850',
    series: 'MINI VANS & BUSES — SERIES 01',
    badge: 'BESTSELLER',
    code: 'PS-KG-01',
  },
  'Variant3': {
    title: 'Kaali - Peeli',
    price: '₹1,850',
    series: 'SEDAN & HATCHBACK — SERIES 01',
    badge: 'BESTSELLER',
    code: 'PS-KG-01',
  },
  'Kaali - Peeli': {
    title: 'Kaali - Peeli',
    price: '₹1,850',
    series: 'SEDAN & HATCHBACK — SERIES 01',
    badge: 'BESTSELLER',
    code: 'PS-KG-01',
  },
  'Variant4': {
    title: 'Retro rohtak',
    price: '₹1,850',
    series: 'SEDAN & HATCHBACK — SERIES 01',
    badge: 'BESTSELLER',
    code: 'PS-KG-01',
  },
  'Retro rohtak': {
    title: 'Retro rohtak',
    price: '₹1,850',
    series: 'SEDAN & HATCHBACK — SERIES 01',
    badge: 'BESTSELLER',
    code: 'PS-KG-01',
  },
};

export const productcard: React.FC<productcardProps> = ({
  testId = 'productcard-44-624',
  variant = 'bombay dreams',
  title,
  price,
  series,
  badge,
  code,
  imageUrl = '/car.png',
  onClick,
  className = '',
}) => {
  const defaults = VARIANT_DEFAULTS[variant] || VARIANT_DEFAULTS['bombay dreams'];
  
  const displayTitle = title ?? defaults.title;
  const displayPrice = price ?? defaults.price;
  const displaySeries = series ?? defaults.series;
  const displayBadge = badge ?? defaults.badge;
  const displayCode = code ?? defaults.code;

  // Custom styling for Kaali-Peeli title to highlight dual tone if desired
  const isKaaliPeeli = displayTitle.toLowerCase().includes('kaali') && displayTitle.toLowerCase().includes('peeli');

  return (
    <div 
      className={`product-card-root ${className}`} 
      data-testid={testId}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Top Image Frame (Frame 466) */}
      <div className="product-card-image-box">
        {/* Top Header Tag Container */}
        <div className="product-card-meta-container">
          {displayBadge && (
            <div className="product-card-bestseller-tag">
              <span>{displayBadge}</span>
            </div>
          )}
          {displayCode && (
            <div className="product-card-code-tag">
              <span>{displayCode}</span>
            </div>
          )}
        </div>

        {/* Center Vehicle Image */}
        <div className="product-card-image-container">
          <img 
            src={imageUrl} 
            alt={displayTitle} 
            className="product-card-car-img" 
          />
        </div>

        {/* Series Subtitle Label */}
        {displaySeries && (
          <div className="product-card-series-label">
            <span>{displaySeries}</span>
          </div>
        )}
      </div>

      {/* Bottom Info Bar (Frame 5454) */}
      <div className="product-card-info-box">
        <h3 className="product-card-title">
          {isKaaliPeeli ? (
            <>
              <span className="title-part-black">KAALI - </span>
              <span className="title-part-yellow">PEELI</span>
            </>
          ) : (
            displayTitle
          )}
        </h3>
        <span className="product-card-price">{displayPrice}</span>
      </div>
    </div>
  );
};
export default productcard;
