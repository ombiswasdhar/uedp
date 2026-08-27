import React from 'react';
import './Container.css';

export interface ContainerProps {
  /** Figma Node ID: 66:1528 */
  testId?: string;
}

export const Container: React.FC<ContainerProps> = ({ testId }) => {
  return (
    <div className="container-root" data-testid={testId}>
      {/* Component Name: Container */}
      Container Content
    </div>
  );
};
