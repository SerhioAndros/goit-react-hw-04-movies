import React from "react";
import PropTypes from "prop-types";

const MovieDescr = ({
  title,
  release,
  originalTitle,
  score,
  overview,
  genres,
}) => {
  return (
    <div>
      <h1>
        {title} <span>({release.slice(0, 4)})</span>
      </h1>
      <p>({originalTitle})</p>
      <p>
        User score: <span>{score * 10 + "%"}</span>
      </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

MovieDescr.propTypes = {
  release: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,

  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieDescr;
