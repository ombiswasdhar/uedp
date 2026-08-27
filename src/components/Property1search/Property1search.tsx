import React from 'react';
import './Property1search.css';

export interface Property1searchProps {
  /** Figma Node ID: 43:512 */
  testId?: string;
}

export const Property1search: React.FC<Property1searchProps> = ({ testId }) => {
  return (
    <div className="property1search-root" data-testid={testId}>
      {/* Component Name: Property 1=search */}
      Property1search Content
    </div>
  );
};
