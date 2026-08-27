import React from 'react';
import './Property1Variant10.css';

export interface Property1Variant10Props {
  /** Figma Node ID: 65:1280 */
  testId?: string;
}

export const Property1Variant10: React.FC<Property1Variant10Props> = ({ testId }) => {
  return (
    <div className="property1variant10-root" data-testid={testId}>
      {/* Component Name: Property 1=Variant10 */}
      Property1Variant10 Content
    </div>
  );
};
