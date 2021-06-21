import React from "react";
import PropTypes from "prop-types";

const MoviePoster = ({ poster, title }) => {
  return (
    <>
      {!poster && (
        <div>
          <img
            src="https://st.depositphotos.com/1106005/3146/i/600/depositphotos_31468817-stock-photo-coming-soon-sign.jpg"
            alt={title}
          />
        </div>
      )}
      {!!poster && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        </div>
      )}
    </>
  );
};

MoviePoster.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviePoster;
