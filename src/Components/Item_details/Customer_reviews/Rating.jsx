import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating, totalReviews, ratingsBreakdown }) => {
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-dark" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-dark" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-dark" />);
      }
    }
    return stars;
  };

  return (
    <div className="container mt-5 text-start">
      <h2 className="fw-bold" style={{fontSize:"18px"}}>Customer reviews</h2>
      <div className="row align-items-center">
        {/* Left: Rating & Reviews */}
        <div className="col-6">
          <h2>{rating.toFixed(1)}</h2>
          <div>{renderStars(rating)}</div>
          <h3 className="mt-3">{totalReviews} reviews</h3>
        </div>

        {/* Right: Rating Breakdown */}
        <div className="col-6 text-start">
          {Object.entries(ratingsBreakdown)
            .reverse()
            .map(([stars, percentage]) => (
              <div key={stars} className="d-flex align-items-center">
                {/* Star Label (Reduced to col-1) */}
                <div className="col-1 text-end">
                  <span>{stars}</span>
                </div>
                
                {/* Progress Bar (Shifted left using col-9 & ms-2) */}
                <div className="col-9 ms-2">
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Percentage */}
                <div className="col-2 text-start">
                  <span>{percentage}%</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
