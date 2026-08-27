import React from 'react';
import './typePrimarystateHover.css';

export interface typePrimarystateHoverProps {
  /** Figma Node ID: 25:462 */
  testId?: string;
}

export const typePrimarystateHover: React.FC<typePrimarystateHoverProps> = ({ testId }) => {
  return (
    <div className="typeprimarystatehover-root" data-testid={testId}>
      {/* Component Name: type=Primary, state=Hover */}
      typePrimarystateHover Content
    </div>
  );
};
