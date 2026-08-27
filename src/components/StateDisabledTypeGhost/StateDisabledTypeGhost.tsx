import React from 'react';
import './StateDisabledTypeGhost.css';

export interface StateDisabledTypeGhostProps {
  /** Figma Node ID: 51:625 */
  testId?: string;
}

export const StateDisabledTypeGhost: React.FC<StateDisabledTypeGhostProps> = ({ testId }) => {
  return (
    <div className="statedisabledtypeghost-root" data-testid={testId}>
      {/* Component Name: State=Disabled, Type=Ghost */}
      StateDisabledTypeGhost Content
    </div>
  );
};
