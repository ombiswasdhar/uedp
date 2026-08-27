import React from 'react';
import './Property1taxis.css';

export interface Property1taxisProps {
  /** Figma Node ID: 17:1983 */
  testId?: string;
}

export const Property1taxis: React.FC<Property1taxisProps> = ({ testId }) => {
  return (
    <div className="property1taxis-root" data-testid={testId}>
      {/* Component Name: Property 1=taxis */}
      Property1taxis Content
    </div>
  );
};
