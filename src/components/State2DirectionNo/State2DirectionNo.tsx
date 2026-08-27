import React from 'react';
import './State2DirectionNo.css';

export interface State2DirectionNoProps {
  /** Figma Node ID: 60:835 */
  testId?: string;
}

export const State2DirectionNo: React.FC<State2DirectionNoProps> = ({ testId }) => {
  return (
    <div className="state2directionno-root" data-testid={testId}>
      {/* Component Name: State=2, Direction=No */}
      State2DirectionNo Content
    </div>
  );
};
