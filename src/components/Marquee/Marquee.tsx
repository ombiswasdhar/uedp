import React from 'react';
import './Marquee.css';

export interface MarqueeProps {
  /** Figma Node ID: 60:827 */
  testId?: string;
  direction?: 'Yes' | 'No';
  text?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  testId = 'marquee-component',
  direction = 'Yes',
  text = 'KONKAN GHATS ✕  BOMBAY DREAMS ✕  LADAKH NIGHTS ✕  JAIPUR SKIES ✕  VAGATOR SURF ✕  SOURCED FROM NATURE ✕  BUILT FOR THE FUTURE ✕  SOLID HARDWOOD ✕'
}) => {
  return (
    <div className="marquee-root" data-testid={testId}>
      <div className={`marquee-track direction-${direction.toLowerCase()}`}>
        {/* We duplicate the text twice to allow a seamless CSS scroll by translating 0% to -50% */}
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
};
