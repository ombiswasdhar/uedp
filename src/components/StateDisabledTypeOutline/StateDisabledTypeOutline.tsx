import React from 'react';
import './StateDisabledTypeOutline.css';

export interface StateDisabledTypeOutlineProps {
  /** Figma Node ID: 51:605 */
  testId?: string;
}

export const StateDisabledTypeOutline: React.FC<StateDisabledTypeOutlineProps> = ({ testId }) => {
  return (
    <div className="statedisabledtypeoutline-root" data-testid={testId}>
      {/* Component Name: State=Disabled, Type=Outline */}
      StateDisabledTypeOutline Content
    </div>
  );
};
