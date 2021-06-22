import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Reviews.module.css";

import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <>
      {!reviews.length && (
        <p className={styles.Unexpected}>
          There are no reviews! Be the first one at{" "}
          <a href="https://www.themoviedb.org/" target="blank">
            TMDB
          </a>
        </p>
      )}
      {!!reviews.length && (
        <ul className={styles.List}>
          {reviews.map((review) => (
            <li key={review.id}>
              <p className={styles.Author}>Author: {review.author}</p>
              <p className={styles.Text}>{review.content}</p>
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

export default withRouter(Reviews);
