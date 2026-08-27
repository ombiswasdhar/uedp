import React from 'react';
import './Property1Variant4.css';

export interface Property1Variant4Props {
  /** Figma Node ID: 66:1593 */
  testId?: string;
}

export const Property1Variant4: React.FC<Property1Variant4Props> = ({ testId }) => {
  return (
    <div className="property1variant4-root" data-testid={testId}>
      {/* Component Name: Property 1=Variant4 */}
      Property1Variant4 Content
    </div>
  );
};
