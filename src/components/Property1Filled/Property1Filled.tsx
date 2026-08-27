import React from 'react';
import './Property1Filled.css';

export interface Property1FilledProps {
  /** Figma Node ID: 25:575 */
  testId?: string;
}

export const Property1Filled: React.FC<Property1FilledProps> = ({ testId }) => {
  return (
    <div className="property1filled-root" data-testid={testId}>
      {/* Component Name: Property 1=Filled */}
      Property1Filled Content
    </div>
  );
};
