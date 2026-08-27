import React from 'react';
import './StateDefaultTypeOutline.css';

export interface StateDefaultTypeOutlineProps {
  /** Figma Node ID: 51:621 */
  testId?: string;
}

export const StateDefaultTypeOutline: React.FC<StateDefaultTypeOutlineProps> = ({ testId }) => {
  return (
    <div className="statedefaulttypeoutline-root" data-testid={testId}>
      {/* Component Name: State=Default, Type=Outline */}
      StateDefaultTypeOutline Content
    </div>
  );
};
