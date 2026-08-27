import React from 'react';
import './Property1Hover.css';

export interface Property1HoverProps {
  /** Figma Node ID: 25:571 */
  testId?: string;
}

export const Property1Hover: React.FC<Property1HoverProps> = ({ testId }) => {
  return (
    <div className="property1hover-root" data-testid={testId}>
      {/* Component Name: Property 1=Hover */}
      Property1Hover Content
    </div>
  );
};
