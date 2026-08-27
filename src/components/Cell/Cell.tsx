import React from 'react';
import './Cell.css';

export interface CellProps {
  /** Figma Node ID: 39:354 */
  testId?: string;
}

export const Cell: React.FC<CellProps> = ({ testId }) => {
  return (
    <div className="cell-root" data-testid={testId}>
      {/* Component Name: Cell */}
      Cell Content
    </div>
  );
};
