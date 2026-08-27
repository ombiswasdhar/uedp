import React from 'react';
import './Property1Group1.css';

export interface Property1Group1Props {
  /** Figma Node ID: 65:1223 */
  testId?: string;
}

export const Property1Group1: React.FC<Property1Group1Props> = ({ testId }) => {
  return (
    <div className="property1group1-root" data-testid={testId}>
      {/* Component Name: Property 1=Group 1 */}
      Property1Group1 Content
    </div>
  );
};
