import React, { Component } from "react";
import Button from "../button/Button";
import MoviesList from "../moviesList/MoviesList";
import SearchForm from "../searchForm/SearchForm";
import { fetchMoviesByRequest } from "../services/movies-api";

class Movies extends Component {
  state = {
    searchMoviesList: [],
    searchQuery: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.handleAddMovies();
    }
  }

  handleAddMovies = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };
    fetchMoviesByRequest(options).then((data) =>
      this.setState((prevState) => ({
        searchMoviesList: [...prevState.searchMoviesList, ...data],
        page: prevState.page + 1,
      }))
    );
  };

  handleSearchQuery = (searchRequest) => {
    this.setState({
      searchQuery: searchRequest,
      page: 1,
      searchMoviesList: [],
    });
  };

  loadMore = () => {
    this.handleAddMovies();
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSearchQuery} />
        <MoviesList movies={this.state.searchMoviesList} />
        {!!this.state.searchMoviesList.length && (
          <Button btnName={"Load more"} btnFunction={this.loadMore} />
        )}
      </>
    );
  }
}

export default Movies;
