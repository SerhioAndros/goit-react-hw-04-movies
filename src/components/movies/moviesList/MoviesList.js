import React from "react";
import MoviesListItem from "../moviesListItem/MoviesListItem";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <MoviesListItem key={movie.id} title={movie.title} id={movie.id} />
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
