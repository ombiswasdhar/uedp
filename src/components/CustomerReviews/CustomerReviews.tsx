import React, { useState, useMemo } from 'react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import type { ReviewCardProps } from '../ReviewCard/ReviewCard';
import { Buttons } from '../Buttons/Buttons';
import './CustomerReviews.css';

import photo1 from '../../assets/reviews/review-photo-1.png';
import photo2 from '../../assets/reviews/review-photo-2.png';
import photo3 from '../../assets/reviews/review-photo-3.png';

export interface CustomerReviewsProps {
  /** Figma Node ID: 24:126 */
  testId?: string;
  overallRating?: number;
  totalReviews?: number;
  onWriteReview?: () => void;
  className?: string;
}

const DEFAULT_REVIEWS: Array<Omit<ReviewCardProps, 'testId'>> = [
  {
    author: 'Michael T.',
    date: 'April 8, 2026',
    rating: 5,
    reviewText:
      "My 3-year-old absolutely loves this toy car! The colors are vibrant, and it's the perfect size for little hands. The quality is outstanding—it's survived countless crashes and is still in perfect condition. Highly recommend!",
    photoUrl: photo1,
    avatarColor: '#FFB900',
  },
  {
    author: 'Michael T.',
    date: 'April 8, 2026',
    rating: 5,
    reviewText:
      "Great educational toy! My son is learning about colors and movement while having fun. The wooden construction feels premium and safe. It's become his favorite toy.",
    photoUrl: photo2,
    avatarColor: '#FFB900',
  },
  {
    author: 'Jessica L.',
    date: 'April 5, 2026',
    rating: 4,
    reviewText:
      'Really nice toy car with smooth wheels that roll easily. My daughter enjoys playing with it every day. The only minor issue is that the paint chipped slightly after a few weeks, but overall a solid purchase.',
    avatarColor: '#FFB900',
  },
  {
    author: 'David K.',
    date: 'April 1, 2026',
    rating: 5,
    reviewText:
      "Bought this for my nephew's birthday and it was a hit! The quality is excellent and it feels very sturdy. Love that it's made from sustainable materials too.",
    photoUrl: photo3,
    avatarColor: '#FFB900',
  },
  {
    author: 'Emily R.',
    date: 'March 28, 2026',
    rating: 5,
    reviewText:
      "Perfect for toddlers! The size is just right, not too big or small. The wheels move smoothly and it's easy to clean. My twins play with it together and it's holding up great.",
    avatarColor: '#FFB900',
  },
];

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  testId = 'customer-reviews-24-126',
  overallRating = 4.7,
  totalReviews = 128,
  onWriteReview,
  className = '',
}) => {
  const [sortBy, setSortBy] = useState<'recent' | 'highest' | 'lowest' | 'photos'>('recent');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [reviewsList, setReviewsList] = useState(DEFAULT_REVIEWS);

  const sortedReviews = useMemo(() => {
    const list = [...reviewsList];
    if (sortBy === 'highest') {
      return list.sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }
    if (sortBy === 'lowest') {
      return list.sort((a, b) => (a.rating || 5) - (b.rating || 5));
    }
    if (sortBy === 'photos') {
      return list.filter((r) => !!r.photoUrl);
    }
    return list;
  }, [reviewsList, sortBy]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newReviewText.trim()) return;

    const newRev = {
      author: newAuthor.trim(),
      date: 'Just now',
      rating: newRating,
      reviewText: newReviewText.trim(),
      avatarColor: '#FFB900',
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewAuthor('');
    setNewReviewText('');
    setShowWriteModal(false);
  };

  return (
    <section className={`customer-reviews-section ${className}`} data-testid={testId}>
      <div className="customer-reviews-container">
        {/* Section Header */}
        <div className="reviews-header-block">
          <h2 className="reviews-main-heading">Customer Reviews</h2>

          <div className="reviews-summary-row">
            {/* Left: Overall Rating Details */}
            <div className="reviews-rating-aggregate">
              <span className="rating-big-number">{overallRating.toFixed(1)}</span>
              <div className="rating-sub-details">
                <div className="aggregate-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="aggregate-star-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#FFB900"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="rating-count-label">Based on {totalReviews} reviews</span>
              </div>
            </div>

            {/* Right: Write a Review Button (Figma Node: I66:1539;66:1527 - Buttons/Default/Fill) */}
            <Buttons
              variant="Fill"
              className="reviews-write-btn"
              onClick={() => {
                setShowWriteModal(true);
                onWriteReview?.();
              }}
            >
              Write a Review
            </Buttons>
          </div>

          {/* Sort Control Row */}
          <div className="reviews-controls-row">
            <span className="sort-label">Sort by:</span>
            <div className="sort-dropdown-wrapper">
              <button
                className="sort-dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                <span className="sort-dropdown-selected">
                  {sortBy === 'recent' && 'Most Recent'}
                  {sortBy === 'highest' && 'Highest Rated'}
                  {sortBy === 'lowest' && 'Lowest Rated'}
                  {sortBy === 'photos' && 'With Photos'}
                </span>
                <svg
                  className={`sort-chevron ${isDropdownOpen ? 'open' : ''}`}
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="1 1 6 6 11 1" />
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="sort-dropdown-menu">
                  <li
                    className={`sort-option ${sortBy === 'recent' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('recent');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Most Recent
                  </li>
                  <li
                    className={`sort-option ${sortBy === 'highest' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('highest');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Highest Rated
                  </li>
                  <li
                    className={`sort-option ${sortBy === 'lowest' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('lowest');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Lowest Rated
                  </li>
                  <li
                    className={`sort-option ${sortBy === 'photos' ? 'active' : ''}`}
                    onClick={() => {
                      setSortBy('photos');
                      setIsDropdownOpen(false);
                    }}
                  >
                    With Photos
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Review Cards Feed */}
        <div className="reviews-cards-feed">
          {sortedReviews.map((review, idx) => (
            <ReviewCard
              key={`${review.author}-${idx}`}
              testId={`review-card-${idx}`}
              {...review}
            />
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {showWriteModal && (
        <div className="review-modal-overlay" onClick={() => setShowWriteModal(false)}>
          <div className="review-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="review-modal-header">
              <h3>Write a Customer Review</h3>
              <button className="review-modal-close" onClick={() => setShowWriteModal(false)} aria-label="Close">
                ✕
              </button>
            </div>
            <form onSubmit={handleAddReview} className="review-modal-form">
              <label>
                Your Name
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="e.g. Rahul S."
                />
              </label>

              <label>
                Rating
                <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
                  <option value={5}>★★★★★ (5 Stars)</option>
                  <option value={4}>★★★★☆ (4 Stars)</option>
                  <option value={3}>★★★☆☆ (3 Stars)</option>
                  <option value={2}>★★☆☆☆ (2 Stars)</option>
                  <option value={1}>★☆☆☆☆ (1 Star)</option>
                </select>
              </label>

              <label>
                Review Description
                <textarea
                  required
                  rows={4}
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  placeholder="Share your experience with this handcrafted vehicle..."
                />
              </label>

              <div className="review-modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowWriteModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default CustomerReviews;
