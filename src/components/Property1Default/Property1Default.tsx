import React from 'react';
import './Property1Default.css';

export interface Property1DefaultProps {
  /** Figma Node ID: 17:1961 */
  testId?: string;
}

export const Property1Default: React.FC<Property1DefaultProps> = ({ testId }) => {
  return (
    <div className="property1default-root" data-testid={testId}>
      {/* Component Name: Property 1=Default */}
      Property1Default Content
    </div>
  );
};
