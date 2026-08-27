import React from 'react';
import './State1DirectionNo.css';

export interface State1DirectionNoProps {
  /** Figma Node ID: 60:828 */
  testId?: string;
}

export const State1DirectionNo: React.FC<State1DirectionNoProps> = ({ testId }) => {
  return (
    <div className="state1directionno-root" data-testid={testId}>
      {/* Component Name: State=1, Direction=No */}
      State1DirectionNo Content
    </div>
  );
};
