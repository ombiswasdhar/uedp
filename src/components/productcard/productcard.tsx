import React from 'react';
import './productcard.css';

export interface productcardProps {
  /** Figma Node ID: 44:624 */
  testId?: string;
}

export const productcard: React.FC<productcardProps> = ({ testId }) => {
  return (
    <div className="productcard-root" data-testid={testId}>
      {/* Component Name: product card */}
      productcard Content
    </div>
  );
};
