import React from 'react';
import './State2DirectionYes.css';

export interface State2DirectionYesProps {
  /** Figma Node ID: 60:870 */
  testId?: string;
}

export const State2DirectionYes: React.FC<State2DirectionYesProps> = ({ testId }) => {
  return (
    <div className="state2directionyes-root" data-testid={testId}>
      {/* Component Name: State=2, Direction=Yes */}
      State2DirectionYes Content
    </div>
  );
};
