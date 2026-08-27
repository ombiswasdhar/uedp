import React from 'react';
import './Property1Variant3.css';

export interface Property1Variant3Props {
  /** Figma Node ID: 66:1577 */
  testId?: string;
}

export const Property1Variant3: React.FC<Property1Variant3Props> = ({ testId }) => {
  return (
    <div className="property1variant3-root" data-testid={testId}>
      {/* Component Name: Property 1=Variant3 */}
      Property1Variant3 Content
    </div>
  );
};
