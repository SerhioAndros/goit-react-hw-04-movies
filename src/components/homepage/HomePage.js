import React, { Component } from "react";
import { fetchPopularMovies } from "../services/movies-api";
import MoviesList from "../movies/moviesList/MoviesList";

class HomePage extends Component {
  state = { moviesList: [] };

  componentDidMount = () => {
    fetchPopularMovies().then((resp) =>
      this.setState({ moviesList: [...resp] })
    );
  };
  render() {
    return <MoviesList movies={this.state.moviesList} />;
  }
}

export default HomePage;
