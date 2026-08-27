import React from 'react';
import './Component7.css';

export interface Component7Props {
  /** Figma Node ID: 25:464 */
  testId?: string;
}

export const Component7: React.FC<Component7Props> = ({ testId }) => {
  return (
    <div className="component7-root" data-testid={testId}>
      {/* Component Name: Component 7 */}
      Component7 Content
    </div>
  );
};
