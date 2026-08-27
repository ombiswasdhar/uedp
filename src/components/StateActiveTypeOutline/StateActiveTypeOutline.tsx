import React from 'react';
import './StateActiveTypeOutline.css';

export interface StateActiveTypeOutlineProps {
  /** Figma Node ID: 51:613 */
  testId?: string;
}

export const StateActiveTypeOutline: React.FC<StateActiveTypeOutlineProps> = ({ testId }) => {
  return (
    <div className="stateactivetypeoutline-root" data-testid={testId}>
      {/* Component Name: State=Active, Type=Outline */}
      StateActiveTypeOutline Content
    </div>
  );
};
