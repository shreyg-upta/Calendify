import React, { useState, useEffect } from 'react';
import './RatingSystem.css'; // Modular CSS for styles
import unstar from '../../assets/emptyStarSrc.svg';
import star from '../../assets/fullStarSrc.svg';
import _ from 'lodash';

const RatingSystem = ({ initRating, onRatingChanged }) => {
  const [rating, setRating] = useState(0); // State to manage the selected rating
  const ratings = [1, 2, 3, 4, 5]; // Array of rating options

  // Dummy data for rating stats (replace with actual data if available)
  const ratingStats = [
    { stars: 5, reviews: 1000 },
    { stars: 4, reviews: 500 },
    { stars: 3, reviews: 200 },
    { stars: 2, reviews: 100 },
    { stars: 1, reviews: 50 },
  ];

  useEffect(() => {
    // if prop changed, we want to reflect that.
    setRating(initRating);
  }, [initRating]);

  function changeRating(newRating) {
    setRating(newRating);
    onRatingChanged(newRating);
  }
  // Function to handle clicking on a rating option
  const handleRatingClick = (value) => {
    setRating(value);
  };

  // Calculate total reviews for all ratings
  const totalReviews = ratingStats.reduce((acc, curr) => acc + curr.reviews, 0);

  return (
    <div className="rating-system">
      {/* Left Section: Rating Stats */}
      <div className="rating-stats">
        <div className="rating-stats-info">
          {ratingStats.map((stat) => (
            <div key={stat.stars} className="rating-stat">
              <div className="rating-label">{stat.stars}</div>
              <div className="rating-bar-remaining" style={{ width: '95%' }}>
                <div className="rating-bar" style={{ width: `${(stat.reviews / totalReviews) * 95}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Rating Options */}
      <div className="rating-options">
        <h3>Rate this Calendar</h3>
        <div className="rating-buttons">
          {_.times(5, (index) => (
            <img
              alt="rating stars"
              src={rating >= index + 1 ? star : unstar}
              key={index}
              onClick={() => changeRating(index + 1)}
              className="rating-star"
            />
          ))}
        </div>
        <p className="selected-rating">You rated this {rating} stars.</p>
      </div>
    </div>
  );
};

export default RatingSystem;
