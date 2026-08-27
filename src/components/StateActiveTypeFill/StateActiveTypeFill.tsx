import React from 'react';
import './StateActiveTypeFill.css';

export interface StateActiveTypeFillProps {
  /** Figma Node ID: 51:593 */
  testId?: string;
}

export const StateActiveTypeFill: React.FC<StateActiveTypeFillProps> = ({ testId }) => {
  return (
    <div className="stateactivetypefill-root" data-testid={testId}>
      {/* Component Name: State=Active, Type=Fill */}
      StateActiveTypeFill Content
    </div>
  );
};
