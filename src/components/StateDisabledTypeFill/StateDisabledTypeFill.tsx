import React from 'react';
import './StateDisabledTypeFill.css';

export interface StateDisabledTypeFillProps {
  /** Figma Node ID: 51:585 */
  testId?: string;
}

export const StateDisabledTypeFill: React.FC<StateDisabledTypeFillProps> = ({ testId }) => {
  return (
    <div className="statedisabledtypefill-root" data-testid={testId}>
      {/* Component Name: State=Disabled, Type=Fill */}
      StateDisabledTypeFill Content
    </div>
  );
};
