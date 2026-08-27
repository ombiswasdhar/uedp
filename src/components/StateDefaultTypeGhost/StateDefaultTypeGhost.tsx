import React from 'react';
import './StateDefaultTypeGhost.css';

export interface StateDefaultTypeGhostProps {
  /** Figma Node ID: 51:641 */
  testId?: string;
}

export const StateDefaultTypeGhost: React.FC<StateDefaultTypeGhostProps> = ({ testId }) => {
  return (
    <div className="statedefaulttypeghost-root" data-testid={testId}>
      {/* Component Name: State=Default, Type=Ghost */}
      StateDefaultTypeGhost Content
    </div>
  );
};
