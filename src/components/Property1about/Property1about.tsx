import React from 'react';
import './Property1about.css';

export interface Property1aboutProps {
  /** Figma Node ID: 17:1994 */
  testId?: string;
}

export const Property1about: React.FC<Property1aboutProps> = ({ testId }) => {
  return (
    <div className="property1about-root" data-testid={testId}>
      {/* Component Name: Property 1=about */}
      Property1about Content
    </div>
  );
};
