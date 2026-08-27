import React from 'react';
import './typePrimarystateDissabled.css';

export interface typePrimarystateDissabledProps {
  /** Figma Node ID: 25:461 */
  testId?: string;
}

export const typePrimarystateDissabled: React.FC<typePrimarystateDissabledProps> = ({ testId }) => {
  return (
    <div className="typeprimarystatedissabled-root" data-testid={testId}>
      {/* Component Name: type=Primary, state=Dissabled */}
      typePrimarystateDissabled Content
    </div>
  );
};
