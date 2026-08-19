import React, { useState } from "react";

function Reviews() {
  const reviews = [
    {
      text: "Great gym with clean equipment, a motivating atmosphere, and helpful trainers.",
    },
    {
      text: "Very Good Place for Workout and Very Good staff",
    },
    {
      text: "And the Gym for the pricing offers quite good facilities.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const previousReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrentReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="reviews-section" id="reviews">

      <div className="reviews-label">
        06 / WORD ON THE STREET
      </div>

      <div className="reviews-layout">

        {/* LEFT SIDE */}
        <div className="reviews-left">

          <h2>
            REAL PEOPLE.
            <br />
            <span>REAL WORK.</span>
          </h2>

          <div className="reviews-rating">
            <strong>4.6</strong>

            <div className="rating-info">
              <div className="stars">★★★★★</div>

              <div className="google-reviews">
                589+ GOOGLE REVIEWS
              </div>
            </div>
          </div>

        </div>

        {/* REVIEW CARD */}
        <div className="review-card">

          <div className="quote-mark">“</div>

          <div className="review-content">
            <p key={currentReview}>
              {reviews[currentReview].text}
            </p>

            <span className="review-source">
              GOOGLE REVIEW
            </span>
          </div>

          <div className="review-footer">

            <div></div>

            <div className="review-controls">

              <button
                onClick={previousReview}
                aria-label="Previous review"
              >
                ←
              </button>

              <span>
                {String(currentReview + 1).padStart(2, "0")} / 03
              </span>

              <button
                onClick={nextReview}
                aria-label="Next review"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Reviews;