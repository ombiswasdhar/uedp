import React from 'react';
import './typesecondarystateHover.css';

export interface typesecondarystateHoverProps {
  /** Figma Node ID: 25:459 */
  testId?: string;
}

export const typesecondarystateHover: React.FC<typesecondarystateHoverProps> = ({ testId }) => {
  return (
    <div className="typesecondarystatehover-root" data-testid={testId}>
      {/* Component Name: type=secondary, state=Hover */}
      typesecondarystateHover Content
    </div>
  );
};
