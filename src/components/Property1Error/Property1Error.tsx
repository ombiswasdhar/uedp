import React from 'react';
import './Property1Error.css';

export interface Property1ErrorProps {
  /** Figma Node ID: 25:574 */
  testId?: string;
}

export const Property1Error: React.FC<Property1ErrorProps> = ({ testId }) => {
  return (
    <div className="property1error-root" data-testid={testId}>
      {/* Component Name: Property 1=Error */}
      Property1Error Content
    </div>
  );
};
