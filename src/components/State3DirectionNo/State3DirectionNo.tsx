import React from 'react';
import './State3DirectionNo.css';

export interface State3DirectionNoProps {
  /** Figma Node ID: 60:842 */
  testId?: string;
}

export const State3DirectionNo: React.FC<State3DirectionNoProps> = ({ testId }) => {
  return (
    <div className="state3directionno-root" data-testid={testId}>
      {/* Component Name: State=3, Direction=No */}
      State3DirectionNo Content
    </div>
  );
};
