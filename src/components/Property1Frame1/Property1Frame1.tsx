import React from 'react';
import './Property1Frame1.css';

export interface Property1Frame1Props {
  /** Figma Node ID: 65:1208 */
  testId?: string;
}

export const Property1Frame1: React.FC<Property1Frame1Props> = ({ testId }) => {
  return (
    <div className="property1frame1-root" data-testid={testId}>
      {/* Component Name: Property 1=Frame 1 */}
      Property1Frame1 Content
    </div>
  );
};
