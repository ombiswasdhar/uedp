import React from 'react';
import './Property1Active.css';

export interface Property1ActiveProps {
  /** Figma Node ID: 25:573 */
  testId?: string;
}

export const Property1Active: React.FC<Property1ActiveProps> = ({ testId }) => {
  return (
    <div className="property1active-root" data-testid={testId}>
      {/* Component Name: Property 1=Active */}
      Property1Active Content
    </div>
  );
};
