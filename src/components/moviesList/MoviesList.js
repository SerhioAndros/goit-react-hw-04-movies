import React from "react";
import MoviesListItem from "../moviesListItem/MoviesListItem";

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <MoviesListItem key={movie.id} title={movie.title} />
    ))}
  </ul>
);

export default MoviesList;
