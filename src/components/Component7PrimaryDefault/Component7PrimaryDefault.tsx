import React from 'react';
import './Component7PrimaryDefault.css';

export interface Component7PrimaryDefaultProps {
  /** Figma Node ID: 25:463 */
  testId?: string;
}

export const Component7PrimaryDefault: React.FC<Component7PrimaryDefaultProps> = ({ testId }) => {
  return (
    <div className="component7primarydefault-root" data-testid={testId}>
      {/* Component Name: Component 7/Primary/Default */}
      Component7PrimaryDefault Content
    </div>
  );
};
