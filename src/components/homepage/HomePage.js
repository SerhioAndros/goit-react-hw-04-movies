import React, { Component } from "react";
import { fetchPopularMovies } from "../services/movies-api";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = { moviesList: [] };

  componentDidMount = () => {
    fetchPopularMovies().then((resp) =>
      this.setState({ moviesList: [...resp] })
    );
  };
  render() {
    return (
      <ul>
        {this.state.moviesList.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
