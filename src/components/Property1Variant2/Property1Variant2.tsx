import React from 'react';
import './Property1Variant2.css';

export interface Property1Variant2Props {
  /** Figma Node ID: 39:355 */
  testId?: string;
}

export const Property1Variant2: React.FC<Property1Variant2Props> = ({ testId }) => {
  return (
    <div className="property1variant2-root" data-testid={testId}>
      {/* Component Name: Property 1=Variant2 */}
      Property1Variant2 Content
    </div>
  );
};
