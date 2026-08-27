import React from 'react';
import './StateActiveTypeGhost.css';

export interface StateActiveTypeGhostProps {
  /** Figma Node ID: 51:633 */
  testId?: string;
}

export const StateActiveTypeGhost: React.FC<StateActiveTypeGhostProps> = ({ testId }) => {
  return (
    <div className="stateactivetypeghost-root" data-testid={testId}>
      {/* Component Name: State=Active, Type=Ghost */}
      StateActiveTypeGhost Content
    </div>
  );
};
