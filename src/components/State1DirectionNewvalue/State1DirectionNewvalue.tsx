import React from 'react';
import './State1DirectionNewvalue.css';

export interface State1DirectionNewvalueProps {
  /** Figma Node ID: 60:863 */
  testId?: string;
}

export const State1DirectionNewvalue: React.FC<State1DirectionNewvalueProps> = ({ testId }) => {
  return (
    <div className="state1directionnewvalue-root" data-testid={testId}>
      {/* Component Name: State=1, Direction=New value */}
      State1DirectionNewvalue Content
    </div>
  );
};
