import React from 'react';
import './typesecondarystateDissabled.css';

export interface typesecondarystateDissabledProps {
  /** Figma Node ID: 25:460 */
  testId?: string;
}

export const typesecondarystateDissabled: React.FC<typesecondarystateDissabledProps> = ({ testId }) => {
  return (
    <div className="typesecondarystatedissabled-root" data-testid={testId}>
      {/* Component Name: type=secondary, state=Dissabled */}
      typesecondarystateDissabled Content
    </div>
  );
};
