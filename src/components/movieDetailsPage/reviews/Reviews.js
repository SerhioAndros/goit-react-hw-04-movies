import React from "react";
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <>
      {!reviews.length && (
        <p>
          There are no reviews! Be the first one at{" "}
          <a href="https://www.themoviedb.org/" target="blank">
            TMDB
          </a>
        </p>
      )}
      {!!reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Reviews;
