import React from 'react';
import './Property1Disabled.css';

export interface Property1DisabledProps {
  /** Figma Node ID: 25:576 */
  testId?: string;
}

export const Property1Disabled: React.FC<Property1DisabledProps> = ({ testId }) => {
  return (
    <div className="property1disabled-root" data-testid={testId}>
      {/* Component Name: Property 1=Disabled */}
      Property1Disabled Content
    </div>
  );
};
