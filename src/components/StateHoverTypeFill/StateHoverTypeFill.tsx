import React from 'react';
import './StateHoverTypeFill.css';

export interface StateHoverTypeFillProps {
  /** Figma Node ID: 51:597 */
  testId?: string;
}

export const StateHoverTypeFill: React.FC<StateHoverTypeFillProps> = ({ testId }) => {
  return (
    <div className="statehovertypefill-root" data-testid={testId}>
      {/* Component Name: State=Hover, Type=Fill */}
      StateHoverTypeFill Content
    </div>
  );
};
