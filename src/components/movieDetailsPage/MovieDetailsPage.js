import React, { Component } from "react";
import { fetchMovieDetailedInfo } from "../services/movies-api";

class MovieDetailsPage extends Component {
  state = { movieInfo: "" };

  componentDidMount() {
    fetchMovieDetailedInfo(this.props.match.params.movieID).then((data) =>
      this.setState({ movieInfo: data })
    );
  }

  render() {
    console.log(this.props.match.params.movieID);
    console.log(this.state.movieInfo);
    const { movieInfo } = this.state;
    const year = movieInfo.release_date;
    console.log("!!!!!!!!!!!!!!", year);
    return (
      <>
        {!!movieInfo && (
          <>
            <div id="imgWrapper">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={movieInfo.title}
              />
            </div>
            <div id="descWrapper">
              <h1>
                {movieInfo.title}{" "}
                <span>({movieInfo.release_date.slice(0, 4)})</span>
              </h1>
              <p>
                User score: <span>{movieInfo.vote_average}</span>
              </p>
              <h2>Overview</h2>
              <p>{movieInfo.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movieInfo.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div id="additionalInfoWrapper">
              <ul>
                <li>Cast</li>
                <li>Reviews</li>
              </ul>
            </div>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
