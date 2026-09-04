import React from 'react';
import './ReviewCard.css';

export interface ReviewCardProps {
  /** Figma Node ID: 24:189 / 47:382 */
  testId?: string;
  author: string;
  date: string;
  rating?: number; // 1 to 5
  reviewText: string;
  photoUrl?: string;
  avatarColor?: string;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  testId = 'review-card',
  author,
  date,
  rating = 5,
  reviewText,
  photoUrl,
  avatarColor = '#FFB900',
  className = '',
}) => {
  const initial = author.charAt(0).toUpperCase();

  return (
    <article className={`review-card-root ${className}`} data-testid={testId}>
      {/* Header with User Info & Rating */}
      <div className="review-card-header">
        <div className="review-card-user">
          <div className="review-card-avatar" style={{ backgroundColor: avatarColor }}>
            <span>{initial}</span>
          </div>
          <div className="review-card-user-meta">
            <h4 className="review-card-author">{author}</h4>
            <span className="review-card-date">{date}</span>
          </div>
        </div>

        {/* 5-Star Rating Icons */}
        <div className="review-card-stars" aria-label={`${rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`review-card-star ${star <= rating ? 'filled' : 'empty'}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={star <= rating ? '#FFB900' : '#E5E5E5'}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="review-card-body">{reviewText}</p>

      {/* Optional Customer Photo */}
      {photoUrl && (
        <div className="review-card-photo-wrapper">
          <img src={photoUrl} alt={`Review photo by ${author}`} className="review-card-photo" loading="lazy" />
        </div>
      )}
    </article>
  );
};
export default ReviewCard;
