import React, { Component } from "react";
import { fetchMovieDetailedInfo } from "../services/movies-api";
import MovieDescr from "./MovieDescr";
import MoviePoster from "./MoviePoster";
import { NavLink, Route } from "react-router-dom";
import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";
import Button from "../button/Button";

class MovieDetailsPage extends Component {
  state = { movieInfo: "" };

  componentDidMount() {
    fetchMovieDetailedInfo(this.props.match.params.movieID).then((data) =>
      this.setState({ movieInfo: data })
    );
  }

  handleReturn = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push(`/`);
  };

  render() {
    const { movieInfo } = this.state;
    return (
      <>
        {!!movieInfo && (
          <>
            <Button btnName={"Go back"} btnFunction={this.handleReturn} />
            <MoviePoster
              poster={movieInfo.poster_path}
              title={movieInfo.title}
            />
            <MovieDescr
              title={movieInfo.title}
              release={movieInfo.release_date}
              originalTitle={movieInfo.original_title}
              score={movieInfo.vote_average}
              overview={movieInfo.overview}
              genres={movieInfo.genres}
            />

            <div>
              <p>Additional information</p>
              <ul>
                <li>
                  <NavLink
                    to={{
                      pathname: `${this.props.match.url}/cast`,
                      state: { from: this.props.location.state?.from },
                    }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `${this.props.match.url}/reviews`,
                      state: { from: this.props.location.state?.from },
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Route
                path={`${this.props.match.path}/cast`}
                render={(props) => (
                  <Cast {...props} movieActors={movieInfo.credits.cast} />
                )}
              />

              <Route
                path={`${this.props.match.path}/reviews`}
                render={(props) => (
                  <Reviews {...props} reviews={movieInfo.reviews.results} />
                )}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
