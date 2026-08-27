import React from 'react';
import './ReviewCard.css';

export interface ReviewCardProps {
  /** Figma Node ID: 47:382 */
  testId?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ testId }) => {
  return (
    <div className="reviewcard-root" data-testid={testId}>
      {/* Component Name: ReviewCard */}
      ReviewCard Content
    </div>
  );
};
